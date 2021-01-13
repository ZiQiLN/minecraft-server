const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

var distDirectory = path.join(__dirname, "..", "dist");

if (!fs.existsSync(distDirectory)) {
  fs.mkdir(distDirectory, (e) => {
    throw e;
  });
}

var distArchive = path.join(__dirname, "..", "dist", "curseprofile.zip");

var output = fs.createWriteStream(distArchive);
var archive = archiver("zip");

output.on("close", function () {
  console.log(archive.pointer() + " bytes");
});

output.on("error", function (err) {
  throw err;
});

archive.pipe(output);

var manifest = path.join(__dirname, "..", "manifest.json");
var modlist = path.join(__dirname, "..", "modlist.html");
var overrides = path.join(__dirname, "..", "overrides");

archive
  .append(fs.createReadStream(manifest), { name: "manifest.json" })
  .append(fs.createReadStream(modlist), { name: "modlist.html" })
  .directory(overrides, "overrides")
  .finalize();
