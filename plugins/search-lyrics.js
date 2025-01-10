const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "lyrics",
    alias: ["liri","lyric"], 
    react: "🤍",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.giftedtech.web.id/api/search/lyrics?apikey=gifted&query=${q}`);
return reply(data.result);
}catch(e){
console.log(e)
reply(`${e}`)
}
})
