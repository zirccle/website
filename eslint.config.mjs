import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: ["figma-design-code/**"],
  },
  ...nextVitals,
];

export default eslintConfig;
