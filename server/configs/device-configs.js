const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const portConfiguration = port => () => port++
const getNextPort = portConfiguration(config.getPort())

const logAction = name => action => logger.log(`${name}:`, action)

const deviceConfigs = [
	{
		name: 'Shark Stopper',
		port: getNextPort(),
		handler: logAction('Shark Stopper'),
	},
]

module.exports = deviceConfigs
