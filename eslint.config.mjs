import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Inhaltsquellen des Generators: Seitenlisten als anonymer Default-Export sind hier gewollt.
  { files: ["werkzeuge/inhalte/seiten/*.mjs"], rules: { "import/no-anonymous-default-export": "off" } },
]);

export default eslintConfig;
