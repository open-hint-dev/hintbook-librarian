## HINT knowledge repository

This repository is a persistent, git-backed knowledge wiki. Before ingesting, querying, or editing, use `hint search "<intent>"` to locate relevant topics and `hint <path...>` to read their inherited, linked context. A missing topic exits 2 and suggests nearby knowledge.

Sources under `raw/` are immutable. Their companion `.hint` files record provenance and notes. Maintained topics live at `wiki/<topic>/_.hint`; the root `_.hint` is the index. Run `hint author <path...>` before writing `.hint` knowledge, and run `hint lint . --graph` after changing links or ids.

Treat stdout as requested knowledge and stderr as the verdict. Record claims with evidence, preserve disagreement, and use `supersedes` rather than silently rewriting history. Agents with MCP support can start `hint mcp`; `npx -y @openhint/cli bootstrap` prints client setup.
