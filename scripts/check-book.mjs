import * as Fs from 'node:fs';
import * as Path from 'node:path';

const expected = ['source', 'concept', 'entity', 'claim', 'decision', 'openquestion', 'supersedes', 'log', 'relates', 'scratch'];
const running = ['__system__', '__header__', '__footer__', '__authoring__', '__config__', '__file__', '__folder__'];
const files = new Set(Fs.readdirSync('keywords'));
const problems = [];

for (const name of [...expected, ...running]) {
    if (!files.has(`${name}.md`)) problems.push(`keywords/${name}.md is missing`);
}

const manifest = JSON.parse(Fs.readFileSync('keywords/hintbook.json', 'utf8'));
if (!Array.isArray(manifest.synonyms) || manifest.synonyms.length === 0) problems.push('manifest synonym groups are missing');

for (const name of expected) {
    const content = Fs.readFileSync(Path.join('keywords', `${name}.md`), 'utf8');
    if (/^surface:\s*true\s*$/m.test(content)) problems.push(`${name} must not declare a code surface`);
}

const demoRoot = 'testdata/knowledge-repo';
for (const file of [
    '_.hint',
    'raw/paper.md',
    'raw/paper.md.hint',
    'raw/survey.md',
    'raw/survey.md.hint',
    'raw/scaling.md',
    'raw/scaling.md.hint',
    'raw/retrieval.md',
    'raw/retrieval.md.hint',
    'wiki/attention/_.hint',
    'wiki/transformers/_.hint',
]) {
    if (!Fs.existsSync(Path.join(demoRoot, file))) problems.push(`${demoRoot}/${file} is missing`);
}

const vocabulary = new Set(expected);
for (const file of Fs.readdirSync(Path.join(demoRoot, 'wiki'), { recursive: true }).filter((name) => name.endsWith('.hint'))) {
    const content = Fs.readFileSync(Path.join(demoRoot, 'wiki', file), 'utf8');
    for (const match of content.matchAll(/^#+\s+(\S+)/gm)) {
        if (!vocabulary.has(match[1])) problems.push(`${file} uses unknown keyword '${match[1]}'`);
    }
}

if (problems.length) {
    for (const problem of problems) console.error(`::error::${problem}`);
    process.exit(1);
}

console.log(`${expected.length} keywords, ${running.length} running instructions, manifest synonyms, and the demo fixture are consistent.`);
