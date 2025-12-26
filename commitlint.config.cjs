// commitlint.config.cjs
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "refactor", "style", "test", "docs"],
    ],

    "type-case": [2, "always", "lower-case"],

    "subject-case": [0],
  },

  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(feat|fix|chore|refactor|style|test|docs)\(([A-Z]+-\d+)\): (.+)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
};
