const FauxMo = require('fauxmojs')

const dir = require(`${global.baseDir}global-dirs`)
const devices = require(`${dir.configs}device-configs`)
const logger = require(`${dir.utils}logger`)

const start = () => {
	const fauxMo = new FauxMo()
	logger.log('Started FauxMo Server')

	fauxMo.updateDevices(devices)
	logger.log('Added FauxMo Devices')

	logger.log(fauxMo)
}

module.exports = {
	start,
}
