# Repository template

Start with `hint.yml`, a root `_.hint`, `raw/`, and `wiki/`. Add topics only after ingesting real sources; the topic taxonomy should emerge from evidence rather than an empty hierarchy.

```yaml
name: team-knowledge
repo: knowledge
refs_depth: 2
books:
  - npm://@openhint/hintbook-librarian
```

Recommended CI:

```yaml
- run: npx -y @openhint/cli lint . --strict-graph
```

Use `refs_depth` to keep dense graphs bounded for ordinary reads. `--no-refs` remains available for a deliberately isolated topic read.
