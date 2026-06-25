# Arcis — arcis.money

Landing page and dashboard for Arcis Protocol.

## Landing Page

- Hero: Roman vault corridor with volumetric gold lighting
- Three pillars: Vaults, Credit, Bonds
- CUSTOS section: autonomous keeper agent
- Architecture diagram: 5 layers from agent frameworks to Base L2
- Waitlist: Supabase with RLS

## Dashboard

4 tabs with live on-chain data from Base Mainnet:

| Tab | Content |
|---|---|
| Vault | TVL, exchange rate, supply, capacity, reserve/deployed, agent balance lookup |
| Credit | Lending pool, borrowed, utilization, reputation tiers, loan health |
| Bonds | Bond stats, how-bonds-work explainer, CUSTOS keeper status |
| Contracts | All deployed addresses with block explorer links |

15-second auto-refresh. Wallet connect. LLM-readable hidden data block.

## Related Repos

| Repo | Description |
|---|---|
| [`core`](https://github.com/Arcis-Protocol/core) | Smart contracts — 17 contracts, 116 tests |
| [`sdk`](https://github.com/Arcis-Protocol/sdk) | `@arcisprotocol/sdk` |
| [`mcp`](https://github.com/Arcis-Protocol/mcp) | `@arcisprotocol/mcp` |
| [`custos`](https://github.com/Arcis-Protocol/custos) | CUSTOS — autonomous keeper agent |
| [`docs`](https://github.com/Arcis-Protocol/docs) | ATI v1.1, integration guide |

---

*ARCIS · arcis.money · MMXXVI*
