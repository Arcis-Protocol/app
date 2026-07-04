// api/legion-apply.js — Legion application intake → Telegram (CUSTOS bot)
//
// The bot token lives ONLY in Vercel env vars, never in the page. Set in Vercel:
//   TELEGRAM_BOT_TOKEN  — the CUSTOS bot token
//   LEGION_CHAT_ID      — the chat/DM/group id where applications should land
//
// Reuses the CUSTOS bot; LEGION_CHAT_ID can be your own DM with the bot or a group.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const b = (req.body && typeof req.body === 'object') ? req.body : JSON.parse(req.body || '{}');

    // Honeypot: real users never fill this. Silently accept + drop.
    if (b.website) { res.status(200).json({ ok: true }); return; }

    const clean = (s, n) => String(s == null ? '' : s).trim().slice(0, n);
    const handle       = clean(b.handle, 80);
    const contact      = clean(b.contact, 120);
    const track        = clean(b.track, 60);
    const wallet       = clean(b.wallet, 60);
    const contribution = clean(b.contribution, 1500);
    const links        = clean(b.links, 400);

    if (!handle || !contact || !track || !contribution) {
      res.status(400).json({ ok: false, error: 'Missing required fields.' });
      return;
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.LEGION_CHAT_ID;
    if (!token || !chatId) {
      res.status(500).json({ ok: false, error: 'Application intake is not configured yet.' });
      return;
    }

    const esc = (s) => s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    const text =
      '🏛️ <b>New Legion Application</b>\n\n' +
      '<b>Handle:</b> ' + esc(handle) + '\n' +
      '<b>Contact:</b> ' + esc(contact) + '\n' +
      '<b>Track:</b> ' + esc(track) + '\n' +
      (wallet ? '<b>Wallet:</b> <code>' + esc(wallet) + '</code>\n' : '') +
      '\n<b>Contribution:</b>\n' + esc(contribution) + '\n' +
      (links ? '\n<b>Links:</b> ' + esc(links) : '');

    const tgRes = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    if (!tgRes.ok) {
      res.status(502).json({ ok: false, error: 'Could not deliver right now. Please try again shortly.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'Server error.' });
  }
};
