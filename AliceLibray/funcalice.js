const chalk = require('chalk')
const axios = require('axios');
const fs = require("fs");

exports.color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
