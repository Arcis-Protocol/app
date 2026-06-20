<p align="center">
  <br />
  <strong>A R C I S</strong>
  <br />
  <em>arcis.money</em>
  <br />
  <br />
  <a href="https://arcis.money">Landing Page</a>
  &nbsp;·&nbsp;
  <a href="https://arcis.money/dashboard">Dashboard</a>
  &nbsp;·&nbsp;
  <a href="https://arcis.money/protocol.json">Agent Config</a>
</p>

---

Frontend for Arcis Protocol. Static HTML — no build step, no framework, no dependencies.

## Pages

### Landing Page (`/`)
Hero section with Roman vault corridor illustration, protocol pillars (Vaults, Credit, Bonds), ATI interface specification, comparison table, and waitlist form. Responsive with branded hamburger menu on mobile.

### Dashboard (`/dashboard`)
Live on-chain data from Base Sepolia via JSON-RPC with 15-second auto-refresh. Three tabs: Vault (TVL, exchange rate, supply, capacity, reserve/deployed split, position lookup, deposit/withdraw), Credit (lending pool, utilization, ERC-8004 tier table), Contracts (all 7 addresses with explorer links). Wallet connect via EIP-6963 multi-wallet detection.

### Agent Endpoint (`/protocol.json`)
Machine-readable protocol config with CORS headers. Contains network configs, contract addresses, ATI function signatures with selectors, full ABIs, and example RPC calls. Any agent can `GET /protocol.json` and start interacting.

### LLM-Readable Dashboard
Hidden `#protocol-data` Markdown block on the dashboard with structured data, agent instructions, function selectors, and example `eth_call` payloads. Enables AI agents to read the dashboard directly.

## Design

- Obsidian (`#08080A`) + aged gold (`#D4AF69`) palette
- Cormorant Garamond display + Instrument Sans body
- Roman vault corridor hero with triple gradient overlay
- Gold arch logo with transparent background
- Hamburger menu with staggered link animations on mobile

## Assets

| File | Purpose | Size |
|---|---|---|
| `hero.jpg` | Hero background (Roman corridor) | 276 KB |
| `og.png` | Social sharing image (citadel arch) | 1.7 MB |
| `logo.png` | Full logo, transparent background | 310 KB |
| `logo-nav.png` | Nav logo (67×80, retina 2×) | 8 KB |
| `favicon.png` | Browser tab icon (32×32) | 2 KB |
| `apple-touch-icon.png` | iOS homescreen (180×180) | 22 KB |

## SEO

- Meta title, description, Open Graph with image dimensions
- Twitter Card (`summary_large_image`) with `@ArcisProtocol`
- JSON-LD structured data (WebApplication schema)
- Sitemap (`/sitemap.xml`) and robots.txt
- Canonical URLs on all pages

## Deploy

Deployed on Vercel with auto-deploy from `main`. Static files — compatible with any host.

```bash
vercel --prod
```

## Related Repos

| Repo | Description |
|---|---|
| [`core`](https://github.com/Arcis-Protocol/core) | Smart contracts (Foundry) |
| [`sdk`](https://github.com/Arcis-Protocol/sdk) | TypeScript SDK (`@arcisprotocol/sdk`) |
| [`cli`](https://github.com/Arcis-Protocol/cli) | Terminal interface (TUI) |
| [`docs`](https://github.com/Arcis-Protocol/docs) | Protocol documentation |
| [`mcp`](https://github.com/Arcis-Protocol/mcp) | MCP Server — connect AI agents |
| [`monitor`](https://github.com/Arcis-Protocol/monitor) | On-chain monitoring + alerts |
| [`custos`](https://github.com/Arcis-Protocol/custos) | CUSTOS — autonomous keeper agent |

---

*Arcis Protocol · MMXXVI*
