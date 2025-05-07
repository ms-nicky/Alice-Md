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
const chalk = require('chalk')
const cheerio = require("cheerio")
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

const addAfkUser = (userId, time, reason, _dir) => {
  const obj = {
    id: userId,
    time: time,
    reason: reason
  }
  _dir.push(obj)
  fs.writeFileSync('./AliceDatabase/afk.json', JSON.stringify(_dir, null, 2))
}

const checkAfkUser = (userId, _dir) => {
  let status = false
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      status = true
    }
  })
  return status
}

const getAfkReason = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i
    }
  })
  if (position !== null) {
    return _dir[position].reason
  }
}

const getAfkTime = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i
    }
  })
  if (position !== null) {
    return _dir[position].time
  }
}

const getAfkId = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i
    }
  })
  if (position !== null) {
    return _dir[position].id
  }
}

const getAfkPosition = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i
    }
  })
  return position
}

module.exports = {
  addAfkUser,
  checkAfkUser,
  getAfkReason,
  getAfkTime,
  getAfkId,
  getAfkPosition
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})