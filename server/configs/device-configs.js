const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const portConfiguration = port => () => port++
const getNextPort = portConfiguration(config.getPort())

const logDeviceState = name => state => logger.log(`${name}:`, state)

const handleStateChange = (deviceName, deviceActions) => state => {
	logDeviceState(name)(state)

	fetch(`http://${deviceName}/${deviceActions[state]}`)
	.then(response => response.text())
	.then(text => logger.log(deviceName, text))
}

// const ON_OFF_ACTIONS = {
// 	on: '/on',
// 	off: '/off',
// }

const OPEN_CLOSE_ACTIONS = {
	on: '/open',
	off: '/close',
}

const deviceConfigs = [
	{
		name: 'Shark Stopper',
		port: getNextPort(),
		handler: handleStateChange(
			'shark-stopper',
			OPEN_CLOSE_ACTIONS
		),
	},
]

module.exports = deviceConfigs
