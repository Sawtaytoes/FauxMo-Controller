const axios = require('axios')

const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const portConfiguration = port => () => port++
const getNextPort = portConfiguration(config.getPort())

const logDeviceState = name => state => logger.log(`${name}:`, state)

const handleStateChange = (deviceName, deviceActions) => state => (
	axios.request(`http://${deviceName}${deviceActions[state]}`)
	.then(({ data }) => logDeviceState(deviceName)(data))
	.catch(logger.logError)
)

const LIGHTS_ACTIONS = {
	on: '/lights/on',
	off: '/lights/off',
}

// const OPEN_CLOSE_ACTIONS = {
// 	on: 'open',
// 	off: 'close',
// }

const deviceConfigs = [
	{
		name: 'Living Room Garland',
		port: getNextPort(),
		handler: handleStateChange(
			'living-room-garland',
			LIGHTS_ACTIONS
		),
	},
	// {
	// 	name: 'Shark Stopper',
	// 	port: getNextPort(),
	// 	handler: handleStateChange(
	// 		'shark-stopper',
	// 		OPEN_CLOSE_ACTIONS
	// 	),
	// },
]

module.exports = deviceConfigs
