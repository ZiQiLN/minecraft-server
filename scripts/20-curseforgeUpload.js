const got = require('got')
const fs = require('fs')
const path = require('path')
// const simplegit = require('simple-git')
// const git = simplegit(baseDirectory)
const FormData = require('form-data')

const { modpackManifestPath, baseDirectory, modpackBundleOutput, CF_TOKEN } = require('./00-configuration')

// git.checkIsRepo()
// 	.then((isRepo) => !isRepo && initialiseRepo(git))
// 	.then(() => git.fetch())

// let lastestReleaseTag

// git.pull().tags((err, tags) => {
// 	console.log('Latest available tag: %s', tags.latest)
// 	lastestReleaseTag = tags.latest
// })

// TODO: Do not process script when there is no new release, since this code will create a new release without atention to actual releases.

const packageUploadForm = new FormData()
// TODO: Parse automatically generated changelog to string and upload it within body.
packageUploadForm.append('changelog', 'WIP')
packageUploadForm.append('changelogType', 'markdown')
packageUploadForm.append('gameVersions', '6756')
packageUploadForm.append('displayName', `kubick`)
packageUploadForm.append('releaseType', 'alpha')
packageUploadForm.append('metafile', fs.createReadStream(modpackManifestPath))
packageUploadForm.append('file', fs.createReadStream(modpackBundleOutput))

const curseforgeClient = got.extend({
	prefixUrl: 'https://minecraft.curseforge.com',
	headers: {
		'X-Api-Token': CF_TOKEN,
	},
})

curseforgeClient('api/projects//upload-file', packageUploadForm)
