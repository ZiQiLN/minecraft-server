const path = require("path");

// Common Sensitive Variables
const GH_TOKEN = process.env.GH_TOKEN;
const CF_TOKEN = process.env.CF_TOKEN;
const CF_API_URI = process.env.CF_API_URI;

// Directory Configuration
const modpackSourceDirectory = path.join(__dirname, "..", "src");
const modpackManifestPath = path.join(__dirname, "..", "src", "manifest.json");
const modpackOverridesDirectory = path.join(
  __dirname,
  "..",
  "src",
  "overrides"
);
