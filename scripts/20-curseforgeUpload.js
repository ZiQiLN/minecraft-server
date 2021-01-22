const got = require('got')
const fs = require('fs')
const path = require('path')
const FormData = require('form-data')
const { modpackManifestPath } = require('./00-configuration')

const form = new FormData()
// TODO: Parse automatically generated changelog to string and upload it within body.
form.append('changelog', '')
form.append('changelogType', 'markdown')
form.append('gameVersions', [6756])
// TODO: Name of package with version taken from semantic-release
form.append('displayName', '')
// TODO: Upload CurseForge Metafile
form.append('metafile', fs.createReadStream(modpackManifestPath))
// TODO: Read created package and upload it to CF Release
form.append('file', fs.createReadStream())

const gotInstance = got.extend({
	prefixUrl: 'minecraft.curseforge.com',
})
