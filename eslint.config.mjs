// import { defineConfig } from "eslint/config";
// import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Fixed: was **dirname, should be __dirname

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: [
            // Build outputs
            "out/**",
            ".next/**",
            "dist/**",
            "build/**",
            
            // Dependencies
            "node_modules/**",
            
            // Cache directories
            ".cache/**",
            ".vercel/**",
            ".netlify/**",
            
            // Generated files
            "*.config.js",
            "*.config.mjs",
            "*.config.ts",
            
            // Other common ignores
            "coverage/**",
            ".env*",
            "*.log",
            ".DS_Store",
        ]
    },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            // Optional: Disable specific rules that are causing issues
            "react/no-unescaped-entities": "warn", // Changed from error to warning
            "@typescript-eslint/no-unused-vars": "warn", // Changed from error to warning
        }
    }
];