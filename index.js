// Global Dir Hack
global.baseDir = `${__dirname}/`

const dir = require(`${global.baseDir}global-dirs`)
const fauxmoServer = require(`${dir.services}setup-fauxmo-server`)

fauxmoServer.start()
