

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "core": {
    "disableTelemetry": true
  },
  "viteFinal": async (config) => {
    // Enable CSS modules and handle CSS imports
    config.css = config.css || {};
    config.css.modules = {
      localsConvention: 'camelCase'
    };
    
    return config;
  }
};
export default config;