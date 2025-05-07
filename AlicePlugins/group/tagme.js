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
module.exports= {
type: 'group',
command: ['tagme'],
operate: async (context) => {
const { Alice, xy, q:text, reply } = context;

let orang = (await Alice.groupMetadata(m.chat)).participants.map(u => u.jid)
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
 Alice.sendMessage(m.chat,{text: tag},{ contextInfo: { mentionedJid }},{quoted:xy})
}
 }