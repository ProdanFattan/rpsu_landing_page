import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules here
  {
    rules: {
      // Allow usage of <img> tags without using <Image> from 'next/image'
      "@next/next/no-img-element": "off",

      // Allow unescaped entities like ' in JSX
      "react/no-unescaped-entities": "off",

      // Allow unused variables (not recommended for production)
      "@typescript-eslint/no-unused-vars": "warn", // Change to "off" if you want to disable

      // Allow the use of "any" type temporarily
      "@typescript-eslint/no-explicit-any": "off",

      // Relax React Hook dependency rules
      "react-hooks/exhaustive-deps": "warn",

      // Allow usage of <a> for internal links (not recommended)
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
