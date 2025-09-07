#!/usr/bin/env node
import { cpSync, existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { resolve, join } from "node:path";
import process from "node:process";

const appName = process.argv[2] || "my-app";
const cwd = process.cwd();
const from = resolve(new URL("../template", import.meta.url).pathname);
const to = resolve(cwd, appName);

if (existsSync(to)) {
  console.error(`Target folder "${appName}" already exists. Choose another name.`);
  process.exit(1);
}

cpSync(from, to, { recursive: true });

try {
  const pkgPath = join(to, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  pkg.name = appName;
  pkg.private = true; // évite publish accidentel
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
} catch {}

for (const lf of ["package-lock.json", "pnpm-lock.yaml", "yarn.lock"]) {
  try { rmSync(join(to, lf)); } catch {}
}

console.log(`
✅ Project created at ./${appName}

Next steps:
  cd ${appName}
  npm install
  npm run dev

Use pnpm or yarn if you prefer:
  pnpm install && pnpm dev
  yarn && yarn dev
`);
