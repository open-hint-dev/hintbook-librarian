# Authoring a HINT knowledge repository

Write or update knowledge for `{paths}`. Capture durable, source-grounded knowledge rather than session state. Prefer one topic at `wiki/<topic>/_.hint`; put immutable inputs in `raw/` and record provenance in `raw/<source>.hint`.

When an agent writes back knowledge, add `origin=agent` to the heading attributes. A human reviewer removes or changes that marker; that diff is the review.

Every factual claim names its evidence and confidence. Preserve disagreement as an `openquestion`; replace or retract knowledge with `supersedes`, never by erasing history. Use stable ids for claims that answers or other topics cite. A path-shaped `relates` name links another topic and includes it during retrieval.

After editing, run `hint <topic>` and `hint lint . --graph`.
