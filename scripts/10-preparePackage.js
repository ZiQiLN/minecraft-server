const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const { distDirectory, modpackManifestPath } = require('./00-configuration')

fs.mkdirSync(distDirectory)

var distArchive = path.join(distDirectory, 'kubick.zip')

var output = fs.createWriteStream(distArchive)
var archive = archiver('zip')

output.on('close', function () {
	console.log(archive.pointer() + ' bytes')
})

output.on('error', function (err) {
	throw err
})

archive.pipe(output)

var modlist = path.join(__dirname, '..', 'src', 'modlist.html')
var overrides = path.join(__dirname, '..', 'src', 'overrides')

archive
	.append(fs.createReadStream(modpackManifestPath), { name: 'manifest.json' })
	.append(fs.createReadStream(modlist), { name: 'modlist.html' })
	.directory(overrides, 'overrides')
	.finalize()
