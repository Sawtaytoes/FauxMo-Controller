const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const portConfiguration = port => () => port++
const getNextPort = portConfiguration(config.getPort())

const deviceConfigs = [
	{
		name: 'FAAAAAAAAAAAKE',
		port: getNextPort(),
		handler: action => logger.log('FAAAAAAAAAAAKE:', action),
	},

	// {
	// 	name: 'Office Fan',
	// 	port: getNextPort(),
	// 	handler: action => logger.log('Office Fan:', action),
	// },
]

module.exports = deviceConfigs
