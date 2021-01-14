const got = require("got");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

const CF_API_URL = "https://minecraft.curseforge.com";
const CF_KEY = process.env.CF_KEY;

const form = new FormData();
// TODO: Parse automatically generated changelog to string and upload it within body.
form.append("changelog", "");
form.append("changelogType", "markdown");
// TODO: Name of package with version taken from semantic-release
form.append("displayName", "");
// TODO: Upload CurseForge Metafile
form.append("metafile", fs.createReadStream(""));
// TODO: Read created package and upload it to CF Release
form.append("file", "...");

got.post(CF_API_URL);
