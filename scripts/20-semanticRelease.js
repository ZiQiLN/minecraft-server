const semanticRelease = require('semantic-release')
const path = require('path')
const { WriteableStreamBuffer } = require('stream-buffers')

const semanticReleaseConfiguration = require('../.releaserc.json')

const stdoutBuffer = WriteableStreamBuffer()
const stderrBuffer = WriteableStreamBuffer()

try {
	const result = await semanticRelease(semanticReleaseConfiguration, {
		cwd: path.join(__dirname, '..'),
		stdout: stdoutBuffer,
		stderr: stderrBuffer,
	})

	if (result) {
		const { lastRelease, commits, nextRelease, releases } = result
		console.log(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`)
		if (lastRelease.version) console.log(`The last release was "${lastRelease.version}".`)
		// TODO: Version should be bumped in package metafiles
		for (const release of release) console.log(`The release was published with plugin "${release.pluginName}".`)
	} else {
		console.log('No release published.')
	}

	const logs = stdoutBuffer.getContentAsString('utf8')
	const errors = stderrBuffer.getContentAsString('utf8')
} catch (err) {
	console.error('The automated release failed with %0', err)
}
