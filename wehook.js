NameNotify = '🔹NEW - THÔNG BÁO'
DiscordLink = 'https://discord.gg/URhmM5MrAN'
NameDiscord = 'ALL SCRIPT'
Name = 'by: vychuche'
const themeFullMoon = {
    use: true,
    name:"FULL MOON",
    color:'14808320', url:'https://discord.com/api/webhooks/1275640965637607465/TZcznaQ9py43A6ah4PtCo6IsFF9iE8hs3cpFC-2FnptspeR846JSbHddiQgmdC7pS4te'}
const themeNearMoon = {
    use: true,
    name:"NEAR FULL MOON",
    color:'14808320',
url:'https://discord.com/api/webhooks/1279242849426083971/RlscYtPPqZYaYGY206MbzeNIxcghaXwk8nsVAmxKC15GOBKsKFOr7vhJGBW7xaFQqwnR'}
const themeMirage = {
    use: true,
    name:"MIRAGE ISLAND",
    color:'62877',  url:'https://discord.com/api/webhooks/1275640982708424786/Xhf_pdU3sh2XM1KbdThucZ1_ePB9o5rd9Thg-KIh6QNdMWxQUiI5u77PYcuyXYYc6eFe'}
const themehaki = {
    use: true,
    name:"HAKI LEGENDARY",
    color:'1310965',  
url:'https://discord.com/api/webhooks/1275641015889563658/ZgdeChOTIJPI9CSTJb8Wt2PItdQZ_iZV6tbGggAoCm3XGxNXDDGXBQH_AcmuxBqJFk_N'}
const themehakinormal = {
     use: true,
     name:"HAKI NORMAL",
     color:'1310965',
url:''}
const themeSword = {
    use: true,
    name:"SWORD LEGENDARY",
    color:'16777215',  url:'https://discord.com/api/webhooks/1275641026631176324/qFl3sJkhoRsyDRRJNR-XKoL4YrLraZ57QPTtrLex_YNQ-njTI5fBumhBVK_L41IazjYL'}
const themeboss = {
    use: true,
    name:"BOSS SPAWN",
    color:'16777215',  url:'https://discord.com/api/webhooks/1279242848939671582/_uxpcTX3LgMdDEepBgHvDoP3qJNSOuHRMl7v3Dhv8H5OzpWY3-Ai1d29GC-AeYJGVmfv'}
const themefruit = {
    use: true,
    name:"FRUITS SPAWN",
    color:'16777215', url:'https://discord.com/api/webhooks/1275641030040879197/WeHSprtKCKd2U2pCAfz8JdrpctoTmP7LM-buyTTZBAcao-xzK5CyWeRD5SWDAdbFmq3N'}
const themekitsune = {
    use: true,
    name:"KITSUNE ISLAND",
    color:'16777215', url:'https://discord.com/api/webhooks/1275641020595437660/Dw_QHhjYpjsq9mv3yH2rfDaA4FjbVWV5E1-fp2uKkALcsc3S7HPl4QxnWu24hI__kqUV'}
const themeStock = {
    use: true,
    name:"FRUIT STOCK",
    color:'14808320', url:''}
const themekinglegacy = {
    use: true,
    name:"KING LEGACY",
    color:'16777215',
    url:''}
const axios = require('axios')
async function _S(theme,fieldsss) {
    if (theme.use == false) {
        return ''
    }
    const data = {
        content:`💠 **${NameDiscord} - NOTIFY** ⚡`,
        embeds: [
          {
            title: theme.name,
            description: `[Click To Join Discord](${DiscordLink})`, 
            color: theme.color,
            fields: fieldsss,
            author: {name: `${NameNotify}`,},
            timestamp: new Date().toISOString(),
            image: {url:'https://images-ext-1.discordapp.net/external/T7DH34A7dVHoKtk4MBQenYFjIavIXRPfbBI7Rl-vU1I/https/files.shapes.inc/cbc4c290.png'},
            footer: {text: `${Name}`,},
        },],
        attachments: [],
    };
    try {
      const response = await axios.post(theme.url, data);
      if (response.status === 204) {console.log('\x1b[36m[SYSTEM] \x1b[32mCheck Speed :',theme.name)}else {console.log('\x1b[36m[SYSTEM] \x1b[31mHttp OutPut : ' + response.status);}}catch (error) {console.log('\x1b[36m[SYSTEM] \x1b[31mError OutPut : ' + error.message);}
}

const { Client, Intents } = require('discord.js-selfbot-v13');
const DiscordBot = new Client();
DiscordBot.on('ready', async () => {
console.log(`CONSOLE - SYSTEM LOG!`)
});
DiscordBot.on('messageCreate',async (message) => {
if (message.channelId == 1215671896125743124) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themeMirage,data)
 }
} else if (message.channelId == 1215847738126630982) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themeFullMoon,data)
 }
} else if (message.channelId == 1226816119495594025) {
    if (message.embeds) {
    const data =
message.embeds[0].fields;
    _S(themeNearMoon,data)
 }
} else if (message.channelId == 1232306914373931038) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themeSword,data)
 }
} else if (message.channelId == 1215671894225985556) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themehaki,data)
 }
} else if (message.channelId == 1232306778327351366) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themeboss,data)
 }
} else if (message.channelId == 1232306870627205191) {
    if (message.embeds) {
    const data =
message.embeds[0].fields;
    _S(themehakinormal,data)
 }
} else if (message.channelId == 1220378424187682886) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themefruit,data)
 }
} else if (message.channelId == 1232325684467077172) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themekitsune,data)
 }
} else if (message.channelId == 1037758983315931136) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themeStock,data)
 }
} else if (message.channelId == 1224948308846313523) {
    if (message.embeds) {
    const data = message.embeds[0].fields;
    _S(themekinglegacy,data)
 }
}
})
token = 'MTE2NTI4NjcxNjkzNzA4OTEyMg.GJp78g.PdotlLJwjxlHhaiJWDDiE1yhP6yc2HxNyIAJvY';

DiscordBot.login(token);
console.log(`Login Token: ${token}`)
