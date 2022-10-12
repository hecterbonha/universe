module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@instead/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/", "services/*/"],
    },
  },
};
