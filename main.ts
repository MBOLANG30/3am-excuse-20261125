import * as fs from 'node:fs';

const line = "I keep your keys safe — and at 3 AM, that means safe from you. Come back when you've slept, and so have I.";

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line, 'utf8');
