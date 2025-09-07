import { cpSync, rmSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const cliRoot = resolve(__dirname, "..");
const templateSrc = resolve(cliRoot, "../template");   // packages/template
const templateDst = resolve(cliRoot, "template");      // packages/create-boilerplate-app/template

if (existsSync(templateDst)) rmSync(templateDst, { recursive: true, force: true });
cpSync(templateSrc, templateDst, { recursive: true });
console.log("[sync-template] Copied boilerplate into CLI package.");
