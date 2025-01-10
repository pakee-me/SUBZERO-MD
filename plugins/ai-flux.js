
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
pattern: "fluxai",
alias: ["flux", "imagine"],
react: "🚀",
desc: "Generate an image using AI.",
category: "main",
filename: __filename
}, async (conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
}) => {
try {
if (!q) return reply("Please provide a prompt for the image.");

// Indicate processing of user request
await reply("> *Subzero Brewing Your Magical image...🪄✨*");

// Generate and send requested image
let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=${q}`);
const imageUrl = data.result;
await conn.sendMessage(m.chat, { image: { url: imageUrl } });

} catch (error) {
console.error(error);
reply(`An error occurred: ${error.message}`);
}
});
