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
require('./AliceSet')
const Setting = require('./AliceSet')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, proto, delay } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const os = require('os')
const nou = require("node-os-utils")
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const nodemailer = require('nodemailer')
const { Telegraf, Context } = require('telegraf')
const colors = require('@colors/colors/safe')
const { color } = require('./AliceLibray/color');
const { say } = require('cfonts')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./AliceLibray/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep} = require('./AliceLibray/myfunction')
const { getInput, verifyPassword } = require('./AliceLibray/cicirojur')

const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./AliceLibray/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./AliceLibray/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=========================//
// CREATE TMP FILE
async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}
          
    function createTmpFolder() {
        const folderName = "tmp";
        const folderPath = path.join(__dirname, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(chalk.green.bold(`[ Success ] Folder '${folderName}' berhasil dibuat.`));
        }
    }
    createTmpFolder();
    
async function AliceConnect() {
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("AliceSessions")
	const Alice = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});
	
	if (!Alice.authState.creds.registered) {
    const phoneNumber = await question('please enter your WhatsApp number, starting with 62:\n');
    const code = await Alice.requestPairingCode(phoneNumber, 'ALICEV10')
    console.log(`your pairing code: ${code}`)
    }

console.log(
chalk.blue.bold(`
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈


▧ Information
│ » Developer : XyrooRynzz
│ » Ownername : ${ownername}
│ » Botname   : ${global.botname}
│ » Version   : ${global.version}
│ » Whatsapp  : ${global.owner}
│ » Telegram  : ${global.xtele}
└───···

Powered By Alice Asistent
© XyrooRynzz ( Developer Script )

Connecting....`));
//=================================================//
Alice.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Alice.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Alice.public && !mek.key.fromMe && !mek.key.isOwner && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Alice, mek, store)
require("./Alice")(Alice, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

Alice.ev.on('call', async (celled) => {
let botNumber = await Alice.decodeJid(Alice.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == true) {
if (kopel.status == "offer") {
let nomer = await Alice.sendTextWithMentions(kopel.from, `*${Alice.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
Alice.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await Alice.updateBlockStatus(kopel.from, "block")
}
}
}
})

//————————————————————————//
//━━━━━━━━━━━━━━━━━━━━━//
// Detek Update Group

Alice.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await Alice.decodeJid(Alice.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Alice.groupMetadata(anu.id)
let namagc = metadata.subject
let membeer = metadata.size
let desk = metadata.desc
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author < 1
let tag = check ? [anu.author, num] : [num]
try {
var ppuser = await Alice.profilePictureUrl(num, 'image')
} catch {
var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
if (anu.action == 'add') {
Alice.sendMessage(anu.id, {image:{url:ppuser},caption: `Selamat Datang *@${num.split("@")[0]}*\n*Patuhi Rules Yang Ada!!*\n\nBaca Deskripsi:\n${desk}\n\nDibuat Oleh : ${anu.author}`, 
footer: `${packname}`,
    buttons: [
        {
            buttonId: '.aliceintro',
            buttonText:{
                displayText:'╰⪼ Intro'
            },
            type: 1
        },
        {
            buttonId:'.owner',
            buttonText:{
                displayText:'╰⪼ Developer Bot'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true,
    contextInfo: {mentionedJid: [num], externalAdReply: { thumbnailUrl: thumb, title: '© Welcome Message', body: packname, renderLargerThumbnail: true, sourceUrl: ig, mediaType: 1}}
})
} 
if (anu.action == 'remove') { 
Alice.sendMessage(anu.id, {image:{url:ppuser},caption: `Selamat Tinggal *@${num.split("@")[0]}*\n*@${num.split("@")[0]}* Telah Keluar Dari Group ${namagc}\nBaca Deskripsi:\n${desk}`, 
footer: `${packname}`,
    buttons: [
        {
            buttonId:'.owner',
            buttonText:{
                displayText:'╰⪼ Developer Bot'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true,
    contextInfo: {mentionedJid: [num], externalAdReply: { thumbnailUrl: thumb, title: '© Leave Message', body: packname, renderLargerThumbnail: true, sourceUrl: ig, mediaType: 1}}
})
} 
if (anu.action == "promote") {
Alice.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini\nSemoga Bisa Menjadikan Yang Terbaik`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: packname, renderLargerThumbnail: true, sourceUrl: ig, mediaType: 1}}})
}
if (anu.action == "demote") {
Alice.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: packname, renderLargerThumbnail: true, sourceUrl: ig, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})
//━━━━━━━━━━━━━━━━━━━━━//
 
Alice.sendButtonImg = async (jid, buttons = [], text, image, footer, quoted = '', options = {}) => {
    const buttonMessage = {
        image: { url: image },
        caption: text,
        footer: footer,
        buttons: buttons.map(button => ({
            buttonId: button.id || '',
            buttonText: { displayText: button.text || 'Button' },
            type: button.type || 1
        })),
        headerType: 1,
        viewOnce: options.viewOnce || false,
    }

    Alice.sendMessage(jid, buttonMessage, { quoted })
} 
 
Alice.sendButtonProto = async (jid, title, footer, buttons = [], quoted = '', options = {}) => {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "puqi" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons
                        })
                    })
                }
            }
        }, { quoted })
        return await Alice.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }

    Alice.sendInteractive = async (jid, btn, Img = null, footer, title, quoted = "", options = {}) => {
        let header = Img
        ? proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({ 
                image: { url: Img }
            }, { upload: Alice.waUploadToServer }))
        })
        : proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMddiaAttachment: false
        })
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: title
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header,
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: btn
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        })
        await Alice.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
    
        Alice.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await Alice.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw { json: JSON.parse(file.toString()) } 
            } catch (e) { if (e.json) throw e.json }
        }
        
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'
        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }
        let m
        try {
            m = await Alice.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        } catch (e) {
            console.error(e)
            m = null
        } finally {
            if (!m) m = await Alice.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options 
            })
            return m
        }
    }
    
//autostatus view
Alice.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const mek = chatUpdate.messages[0];

            if (!mek.message) return;
            mek.message =
                Object.keys(mek.message)[0] === 'ephemeralMessage'
                    ? mek.message.ephemeralMessage.message
                    : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                let emoji = [ `${lz2}` ];
                let sigma = emoji[Math.floor(Math.random() * emoji.length)];
                await Alice.readMessages([mek.key]);
                Alice.sendMessage(
                    'status@broadcast',
                    { react: { text: sigma, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
            }

        } catch (err) {
            console.error(err);
        }
      }
   }
 )
 
    Alice.deleteMessage = async (chatId, key) => {
        try {
            await Alice.sendMessage(chatId, { delete: key });
            console.log(`Pesan dihapus: ${key.id}`);
        } catch (error) {
            console.error('Gagal menghapus pesan:', error);
        }
    }; 
//————————————————————————// 

Alice.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Alice.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})

Alice.getName = (jid, withoutContact  = false) => {
id = Alice.decodeJid(jid)
withoutContact = Alice.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Alice.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Alice.decodeJid(Alice.user.id) ?
Alice.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}

Alice.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Alice.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Alice.getName(i + '@s.whatsapp.net')}\nFN:${await Alice.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
Alice.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
Alice.public = true
Alice.ev.on('creds.update', saveCreds)
 //=================================================//
 Alice.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 Alice.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Alice.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
Alice.sendText = (jid, text, quoted = '', options) => Alice.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
Alice.sendTextWithMentions = async (jid, text, quoted, options = {}) => Alice.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
Alice.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Alice.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Alice.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
Alice.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 Alice.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 Alice.sendButtonProto = async (jid, title, footer, buttons = [], quoted = '', options = {}) => {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "puqi" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons
                        })
                    })
                }
            }
        }, { quoted })
        return await Alice.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
 
 Alice.cMod = (jid, copy, text = '', sender = Alice.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === Alice.user.id
return proto.WebMessageInfo.fromObject(copy)}
Alice.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await Alice.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./AliceLibray/exif.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Alice.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
Alice.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
Alice.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype;
    if (options.readViewOnce) {
        message.message = message.message?.ephemeralMessage?.message || message.message;
        vtype = Object.keys(message.message.viewOnceMessage.message)[0];
        delete message.message.viewOnceMessage.message[vtype].viewOnce;
        message.message = { ...message.message.viewOnceMessage.message };
    }

    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};

    if (mtype != "conversation") {
        context = message.message[mtype].contextInfo;
    }

    content[ctype].contextInfo = {
        ...context,
        ...content[ctype].contextInfo,
    };

    const waMessage = await generateWAMessageFromContent(
        jid,
        content,
        options
            ? {
                  ...content[ctype],
                  ...options,
                  ...(options.contextInfo
                      ? {
                            contextInfo: {
                                ...content[ctype].contextInfo,
                                ...options.contextInfo,
                            },
                        }
                      : {}),
              }
            : {}
    );

    await Alice.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
    return waMessage;
};
//=================================================//
Alice.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await Alice.sendMessage(jid, reactionMessage)
}
//=================================================//
Alice.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
Alice.serializeM = (m) => smsg(Alice, m, store)
Alice.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
AliceConnect();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
AliceConnect();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
AliceConnect();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
AliceConnect();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
AliceConnect();
  }
} else if (connection === "open") {      
         try {
        Alice.newsletterFollow(global.idch)
      } catch (e) {
        console.error("❌ Newsletter follow error:", e);
      }
      
  Alice.sendMessage(`${global.owner}` + "@s.whatsapp.net", { text: `${sendowner}` });
}
});
return Alice
};
AliceConnect()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})