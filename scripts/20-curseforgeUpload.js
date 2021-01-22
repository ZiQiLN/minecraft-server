const got = require('got')
const fs = require('fs')
const path = require('path')
const simplegit = require('simple-git')
const git = simplegit(baseDirectory)
const FormData = require('form-data')

const { modpackManifestPath, baseDirectory, modpackBundleOutput, CF_TOKEN } = require('./00-configuration')
const releaseNotes = require('../CHANGELOG.md')

let lastestReleaseTag

git.pull().tags((err, tags) => {
	console.log('Latest available tag: %s', tags.latest)
	lastestReleaseTag = tags.latest
})

// TODO: Do not process script when there is no new release, since this code will create a new release without atention to actual releases.

const packageUploadForm = new FormData()
// TODO: Parse automatically generated changelog to string and upload it within body.
form.append('changelog', releaseNotes)
form.append('changelogType', 'markdown')
form.append('gameVersions', [6756])
form.append('displayName', `kubick-${lastestReleaseTag}`)
form.append('releaseType', 'alpha')
form.append('metafile', fs.createReadStream(modpackManifestPath))
form.append('file', fs.createReadStream(modpackBundleOutput))

const curseforgeClient = got.extend({
	prefixUrl: 'minecraft.curseforge.com',
	headers: {
		'X-Api-Token': CF_TOKEN,
	},
})

curseforgeClient('api/projects//upload-file', packageUploadForm)
