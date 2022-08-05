module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/caioxcezar/react-app/",
  plugin: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "build.zip",
            label: "Build"
          },
          {
            path: "coverage.zip",
            label: "Coverage"
          }
        ]
      }
    ]
  ]
};
