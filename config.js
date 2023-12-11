/*
RECODE REYZ HAYANASI
RECODE ULANG + FIX BY ZIRO MD 
KONTAK ME :
WA : 6281228070013
YT : @Ziro-MD_Official
IG : @alvnz.ygy
FITUR ERROR CHAT GW
BUAT LU YANG RECODE NI KASIH CREDIT
*/

import { pickRandom} from './lib/other-function.js'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import moment from 'moment-timezone'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
//TIME
global.waktu = `${date}`
global.namabot = '⫹⫺ 𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉'
global.v = '-'   
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ TIME: ${wktuwib}`
global.bottime = `ᴛ ɪ ᴍ ᴍ ᴇ : ${wktuwib}`
// Sticker WM
global.packname = `☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉`
global.author = `© 𝟸𝟶𝟸𝟷 - 𝟸𝟶𝟸𝟹`

/* ===========Hiasan=========== */
let htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
let pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.eror = "_Lagi error bang_"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = htjava + "───『"
global.dmenub = "│|" + pmenus
global.dmenub2 = "│|" + pmenus
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = htjava + "───『"
global.cmenuh = "』───" + htjava
global.cmenub = "│|" + pmenus
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])

//--------[WATERMARK]
global.wm = '᭖͜͡𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉 汉 」' //Main WM
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘バージニティハンター˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ 𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉'
global.md = '𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉'
//-----[OWNER]
global.nomorown = '6281928079404'
global.owner = [
['6281928079404'], // global owner 0
['6281928079404'], // global owner 1
['6281928079404'], // global owner 2
['6281928079404', '𝘼𝘼•𝙿𝚁𝙾𝙹𝙴𝙲𝚃𝚂', true] // global owner 3
]
global.mods = [] // siapa partner mu? 
global.prems = ['6281928079404','6281928079404'] //premium unlimited

// =================={[(API KEYS)]}==================
global.mupar = 'OnLasdan'
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = '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'
global.APIs = {
can: 'https://pnggilajacn.my.id',
xteam: 'https://api.xteam.xyz', 
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol : 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics : 'https://violetics.pw',
zenz: 'https://zenzapi.xyz',
xzn: 'https://skizo.tech',
ibeng: 'https://api.ibeng.tech', 

}

global.APIKeys = {
'https://pnggilajacn.my.id': 'ItsukaChan',
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zenzapis.xyz': '675e34de8a', 
'https://api-fgmods.ddns.net': 'Pa5SYPbA',
'https://zenzapi.xyz': '01ABEB1E11',
'https://violetics.pw': 'beta',
'https://api.lolhuman.xyz': 'haikalgans',
'https://skizo.tech': 'konekocyz', 
'https://api.ibeng.tech' : 'QeyZTULyQg', 

}

//-----------[ APIKEY BUAT CPANEL ]----------//
global.domain = 'https://xxxxx'
global.plta = 'plta_xxxxx'
global.pltc = 'pltc_xxxxx'
//------------------------------------------------------------------//

global.lolkey = 'haikalgans'
global.lolkeysapi = [ 'haikalgans' ]
global.lol = 'haikalgans'
global.rose = 'Rs-Zeltoria'
global.xzn = 'konekocyz'
global.fgmods = 'fg-dylux'
global.ibeng = 'QeyZTULyQg'

//-----------------[ GLOBAL LOADING ]---------------//

global.wait = ' *「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...* '

///==================/thumbnail 
global.thumb = 'https://telegra.ph/file/f896d4a22e4fa99e25d0c.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/f896d4a22e4fa99e25d0c.jpg'
global.thumbbc = 'https://telegra.ph/file/f896d4a22e4fa99e25d0c.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/4de72283bd50afa15ee79.mp4'
global.thumblvlup = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.footer = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ ฅ˘𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com/wanderlens.id_99'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/F1UIW6vYoYh7CUIw1VtYAO'
global.sdc = '-'
global.snh = '-'
global.sfb = '-'
global.syt = 'https://youtube.com/@eytizen09'
//====== Url Template Buttons ======//
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://saweria.co/Antaboga"
//========== callButtons ==========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 819-2807-9404'
global.ephemeral = '86400'
global.monitor = "u2209032-5096e7f10915ab963640d415"
global.multiplier = 69
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '999'
global.fpagedoc = '999'
global.htjava = '⫹⫺' 
global.fgig = '▢ mupar'
global.docs = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// =============={[(END)]}=================
global.ppbot = [ 'https://telegra.ph/file/a17a45689934767df0340.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg']
// ================={[(THUMBNAIL)]}===========
    global.hwaifu= ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg'    
       ]
//===[THUMBNAIL MENU]===

    global.thumbnailUrl= [
'https://telegra.ph/file/1f3e4fd3cd7499d18973f.jpg','https://telegra.ph/file/1f3e4fd3cd7499d18973f.jpg','https://telegra.ph/file/1f3e4fd3cd7499d18973f.jpg'
]
global.Pallmenu = [
'https://telegra.ph/file/0f49959e6bac62ddc1f95.jpg','https://telegra.ph/file/2cbb0b176e9c6836a9005.jpg','https://telegra.ph/file/8fa8b92e322eb2c312e67.jpg'
]
global.AraChu2 = [
  "https://telegra.ph/file/a17a45689934767df0340.jpg",
  "https://telegra.ph/file/a17a45689934767df0340.jpg",
  "https://telegra.ph/file/a17a45689934767df0340.jpg",
  "https://telegra.ph/file/a17a45689934767df0340.jpg",
  "https://telegra.ph/file/a17a45689934767df0340.jpg"
]
global.fla = pickRandom(ImgLogoFlam())

function ImgLogoFlam() {
    let Flam = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return Flam
}

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//=========/===