const path = require('path')

// Common Sensitive Variables
const GH_TOKEN = process.env.GH_TOKEN
const CF_TOKEN = process.env.CF_TOKEN

// Common Variables
const CF_API = 'minecraft.curseforge.com'

// Directory Configuration
const modpackSourceDirectory = path.join(__dirname, '..', 'src')
const serverSourceDirectory = path.join(__dirname, '..', 'serv')
const modpackManifestPath = path.join(modpackSourceDirectory, 'manifest.json')
const modpackOverridesDirectory = path.join(modpackSourceDirectory, 'overrides')
const modpack

module.exports = {
	modpackManifestPath,
}
