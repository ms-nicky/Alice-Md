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

async function npmStalk(pname) {
  let stalk = await axios.get("https://registry.npmjs.org/" + pname)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length - 1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: pname,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}

async function chstalk(url) {
    try {
        const { data: html } = await axios.get(url);
        const $ = cheerio.load(html);

        const nama = $("h3._9vd5").text().trim();
        const followersText = $("h5._9vd5").text().trim();
        const pengikut = parseInt(followersText.replace(/\D/g, ""), 10);
        const deskripsi = $("h4._9vd5._9scb").text().trim();
        const linkChannel = $("a#action-icon").attr("href");
        const gambar = $("img._9vx6").attr("src");

        return {
            nama,
            pengikut,
            deskripsi,
            linkChannel,
            gambar,
        };
    } catch (error) {
        console.error("Gagal mengambil metadata:", error);
        return null;
    }
}

async function igstalk(username) {
  try {
    const { data } = await axios.get(`https://api.nasirxml.my.id/stalk/instagram?username=${username}`)
    if (data.status !== 200) throw new Error('Gagal mengambil data')

    return {
      id: data.result.user_info.id,
      username: data.result.user_info.username,
      fullName: data.result.user_info.full_name,
      bio: data.result.user_info.biography,
      website: data.result.user_info.external_url,
      verified: data.result.user_info.is_verified,
      avatar: data.result.user_info.profile_pic_url,
      posts: data.result.user_info.posts,
      followers: data.result.user_info.followers,
      following: data.result.user_info.following
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  igstalk,
  chstalk,
  npmStalk
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})