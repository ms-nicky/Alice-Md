//————————————————————————//

/*

Alice Asistent
© XyrooRynzz
2022 - 2026

Source
WhatsApp Me : 6281543496975
Tele me : t.me/XyrooRynzz
instagram : xyroorynzz
https://chat.whatsapp.com/IJx5bkPvivUCeai7d2ChRC
https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E

*/

//————————————————————————//

const axios = require('axios')
const fs = require('fs')
const chalk = require('chalk')

const keyURLBase64 = 'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3h5cm9vbzIvMTAwMC9tYWluLzEwMDA='
const decodedURL = Buffer.from(keyURLBase64, 'base64').toString('utf-8')


async function getInput(prompt) {
  process.stdout.write(prompt)
  return new Promise((resolve, reject) => {
    process.stdin.once('data', (data) => {
      const input = data.toString().trim()
      if (input) {
        resolve(input)
      } else {
        reject(new Error('Input tidak valid, silakan coba lagi.'))
      }
    })
  })
}


let passwordVerified = false
async function verifyPassword() {
  if (passwordVerified) return
  let systemKey = false
  let inputPassword = ''
  console.log(
chalk.blue.bold('Nama Developer Script'))
  while (!systemKey) {
    inputPassword = await getInput('Jawabanmu: ')
    const keyData = await axios.get(decodedURL, {
      headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/95.0.4638.69 Safari/537.36"
      }
    }).then(res => res.data).catch(() => null)
    if (keyData && keyData.key === inputPassword) {
      console.log(
chalk.blue.bold('benar!'))
      systemKey = true
      passwordVerified = true
    } else {
      console.log(
chalk.red.bold('salah!'))
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }
}

module.exports = { verifyPassword, getInput }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})