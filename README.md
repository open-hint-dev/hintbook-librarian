# @openhint/hintbook-librarian

The official HINT vocabulary for persistent, git-backed knowledge repositories. It turns `.hint` files into an interlinked team wiki that agents can ingest, query, and structurally lint without a database, embeddings, or network service.

Measured performance and retrieval results live in the core [benchmark report](https://github.com/open-hint-dev/hint/blob/main/docs/09-benchmarks.md).

## Install

```bash
npx -y @openhint/cli add --local @openhint/hintbook-librarian
npx -y @openhint/cli apply
```

Set `repo: knowledge`, optionally set `refs_depth`, and register `npm://@openhint/hintbook-librarian` in `hint.yml`.

## Repository shape

```text
_.hint                    # index and policies inherited by every topic
raw/source.md             # immutable source
raw/source.md.hint        # provenance and source-specific notes
wiki/topic-name/_.hint    # one maintained topic
```

Use `wiki/<topic>/_.hint` for topics. Keep raw inputs immutable; supersede an earlier claim instead of silently rewriting history.

## Vocabulary

`source`, `concept`, `entity`, `claim`, `decision`, `openquestion`, `supersedes`, `log`, `relates`, and `scratch` (excluded from output). No keyword declares a code surface.

- Ingest: add a source, record provenance, then update every affected topic.
- Query: `hint search "question"`, followed by `hint wiki/<topic>`.
- Lint: `hint lint . --graph`; use `--strict-graph` in CI.

Full guide: [Knowledge repositories](https://github.com/open-hint-dev/hint/blob/main/docs/09-knowledge-repos.md).

## License

MIT
