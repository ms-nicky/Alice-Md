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
const cheerio = require('cheerio')
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')


async function Capcut(url) {
    const BASE_URI = "https://snapsave.cc/wp-json/aio-dl/video-data"
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json;charset=UTF-8',
        'Connection': 'keep-alive',
        'Referer': 'https://snapsave.cc/capcut-video-downloader/',
        'Origin': 'https://snapsave.cc',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'DNT': '1'
    }

    try {
        const response = await axios.get(`https://snapsave.cc/capcut-video-downloader/#url=${encodeURIComponent(url)}`, { headers })
        const $ = cheerio.load(response.data)
        const token = $("#token").val()

        if (!token) {
            throw new Error("Unable to retrieve token. Please check the source or provided URL.")
        }

        const payload = {
            url,
            token,
            hash: "aHR0cHM6Ly93d3cuY2FwY3V0LmNvbS9pZC1pZC90ZW1wbGF0ZS1kZXRhaWwvRm9yLXlvdS0vNzQxNDE2Mjk3MzU3ODU2MjgyMg==1073YWlvLWRs"
        }

        const { data: videoData } = await axios.post(BASE_URI, payload, { headers })
        return videoData
    } catch (error) {
        console.error("Error fetching CapCut video data:", error.message || error)
        return null
    }
}

module.exports = { Capcut }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})