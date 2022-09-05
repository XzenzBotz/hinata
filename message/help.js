const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`  ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

 Hitung Mundur Idul Adha
 ${mundur}

  𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐂
 📤 Upload : ${upload}
 📥 Downloads : ${download}

  𝐁𝐎𝐓 𝐈𝐍𝐅𝐎
 👤 Creator : ${ownerName}
 🤖 Bot Name : ${botName}
 ⏰ Time : ${jam}
 📆 Date : ${tanggal}
 ⏱️ Runtime : ${runtime(process.uptime())}

 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎
 🐼 Name : ${pushname !== undefined ? pushname : 'Kak'}
 🧑‍💻 Status : ${isOwner ? 'Owner🎖️' : isPremium ? 'Premium🏅' : 'Free🥉'}
 🎟️ Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 🎫 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 💵 Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔
 ➣ ${prefix}menu
 ➣ ${prefix}infobot
 ➣ ${prefix}donate
 ➣ ${prefix}dashboard
 ➣ ${prefix}owner
 ➣ ${prefix}grouphinata
 ➣ ${prefix}cekdrive
 ➣ ${prefix}cekbandwidth
 ➣ ${prefix}cekpremium
 ➣ ${prefix}sewabot
 ➣ ${prefix}listpremium
 ➣ ${prefix}listsewa
 ➣ ${prefix}speed
 ➣ ${prefix}script
 ➣ ${prefix}runtime
 ➣ ${prefix}listbahasa

 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑/𝐓𝐎𝐎𝐋𝐒
 ➣ ${prefix}sticker
 ➣ ${prefix}stickerwm
 ➣ ${prefix}smeme
 ➣ ${prefix}toimg
 ➣ ${prefix}tovideo
 ➣ ${prefix}tomp3
 ➣ ${prefix}ttp
 ➣ ${prefix}attp
 ➣ ${prefix}emojimix
 ➣ ${prefix}nulis
 ➣ ${prefix}spamcall
 ➣ ${prefix}say
 ➣ ${prefix}translate

 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓
 ➣ ${prefix}anonymous
 ➣ ${prefix}start
 ➣ ${prefix}next
 ➣ ${prefix}stop
 ➣ ${prefix}sendprofile

 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔
 ➣ ${prefix}list
 ➣ ${prefix}addlist
 ➣ ${prefix}dellist
 ➣ ${prefix}updatelist
 ➣ ${prefix}jeda
 ➣ ${prefix}tambah
 ➣ ${prefix}kurang
 ➣ ${prefix}kali
 ➣ ${prefix}bagi
 ➣ proses <reply chat>
 ➣ done <reply chat>
 ➣ ${prefix}setproses
 ➣ ${prefix}changeproses
 ➣ ${prefix}delsetproses
 ➣ ${prefix}setdone
 ➣ ${prefix}changedone
 ➣ ${prefix}delsetdone

 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔
 ➣ ${prefix}play
 ➣ ${prefix}ytmp3
 ➣ ${prefix}ytmp4
 ➣ ${prefix}getmusic
 ➣ ${prefix}getvideo
 ➣ ${prefix}instagram
 ➣ ${prefix}igstory
 ➣ ${prefix}tiktok
 ➣ ${prefix}facebook
 ➣ ${prefix}mediafire
 ➣ ${prefix}telesticker
 ➣ ${prefix}pinterestdl

 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔
 ➣ ${prefix}afk
 ➣ ${prefix}welcome
 ➣ ${prefix}left
 ➣ ${prefix}setwelcome
 ➣ ${prefix}changewelcome
 ➣ ${prefix}delsetwelcome
 ➣ ${prefix}setleft
 ➣ ${prefix}changeleft
 ➣ ${prefix}delsetleft
 ➣ ${prefix}linkgc
 ➣ ${prefix}setppgc
 ➣ ${prefix}setnamegc
 ➣ ${prefix}setdesc
 ➣ ${prefix}antilink
 ➣ ${prefix}antiwame
 ➣ ${prefix}open
 ➣ ${prefix}close
 ➣ ${prefix}setopen
 ➣ ${prefix}changeopen
 ➣ ${prefix}delsetopen
 ➣ ${prefix}setclose
 ➣ ${prefix}changeclose
 ➣ ${prefix}delsetclose
 ➣ ${prefix}add
 ➣ ${prefix}kick
 ➣ ${prefix}promote
 ➣ ${prefix}demote
 ➣ ${prefix}revoke
 ➣ ${prefix}checksewa

 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔
 ➣ ${prefix}tictactoe
 ➣ ${prefix}delttt
 ➣ ${prefix}tebakgambar
 ➣ ${prefix}kuis
 ➣ ${prefix}tebaklagu
 ➣ ${prefix}nyerah
 ➣ ${prefix}casino
 ➣ ${prefix}delcasino
 ➣ ${prefix}akinator
 ➣ ${prefix}cancelakinator

 𝐊𝐄𝐑𝐀𝐍𝐆 𝐌𝐄𝐍𝐔
 ➣ ${prefix}apakah
 ➣ ${prefix}bisakah
 ➣ ${prefix}kapankah
 ➣ ${prefix}bagaimanakah
 ➣ ${prefix}rate
 ➣ ${prefix}gantengcek
 ➣ ${prefix}cantikcek
 ➣ ${prefix}sangecek
 ➣ ${prefix}gaycek
 ➣ ${prefix}lesbicek
 ➣ ${prefix}cekbapak

 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔
 ➣ ${prefix}lirik
 ➣ ${prefix}grupwa
 ➣ ${prefix}pinterest
 ➣ ${prefix}ytsearch
 ➣ ${prefix}whatmusic
 ➣ ${prefix}igstalk
 ➣ ${prefix}searchbyimage

 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔
 ➣ ${prefix}quotes
 ➣ ${prefix}cecan
 ➣ ${prefix}cogan
 ➣ ${prefix}waifu
 ➣ ${prefix}meme
 ➣ ${prefix}darkjoke
 ➣ ${prefix}couple

 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔
 ➣ ${prefix}asupan
 ➣ ${prefix}bocil
 ➣ ${prefix}geayubi
 ➣ ${prefix}hijaber
 ➣ ${prefix}rikagusriani
 ➣ ${prefix}santuy
 ➣ ${prefix}ukhty
 
 𝐓𝐄𝐊𝐒𝐏𝐑𝐎 𝐌𝐄𝐍𝐔
 ➣ ${prefix}pencil
 ➣ ${prefix}glitch
 ➣ ${prefix}glitch2
 ➣ ${prefix}glitchtiktok
 ➣ ${prefix}pornhub
 ➣ ${prefix}blackpink
 ➣ ${prefix}berry
 ➣ ${prefix}neon
 ➣ ${prefix}3d-neon-light
 ➣ ${prefix}3d-christmas
 ➣ ${prefix}3d-boxtext
 ➣ ${prefix}3d-orange-juice
 ➣ ${prefix}logo-bear
 ➣ ${prefix}logo-ninja
 ➣ ${prefix}thunder
 ➣ ${prefix}video-game-classic
 ➣ ${prefix}marvel-studios
 ➣ ${prefix}green-horror
 ➣ ${prefix}magma
 ➣ ${prefix}chocolate-cake
 ➣ ${prefix}strawberry

 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐘 𝐌𝐄𝐍𝐔
 ➣ ${prefix}flaming
 ➣ ${prefix}shadow-sky
 ➣ ${prefix}metallic
 ➣ ${prefix}logo-naruto
 ➣ ${prefix}logo-pubg
 ➣ ${prefix}under-grass
 ➣ ${prefix}harry-potter
 ➣ ${prefix}flower-typography
 ➣ ${prefix}picture-of-love
 ➣ ${prefix}coffee-cup
 ➣ ${prefix}butterfly
 ➣ ${prefix}night-sky
 ➣ ${prefix}carved-wood
 ➣ ${prefix}illuminated-metallic
 ➣ ${prefix}sweet-candy

 𝐏𝐀𝐘𝐌𝐄𝐍𝐓 & 𝐁𝐀𝐍𝐊
 ➣ ${prefix}balance
 ➣ ${prefix}buylimit
 ➣ ${prefix}buyglimit
 ➣ ${prefix}transfer
 ➣ ${prefix}limit
 ➣ ${prefix}balance

 𝐁𝐀𝐈𝐋𝐄𝐘𝐒
 ➣ ${prefix}fitnah
 ➣ ${prefix}getquoted
 ➣ ${prefix}tagall
 ➣ ${prefix}hidetag
 ➣ ${prefix}fakehidetag
 ➣ ${prefix}react
 ➣ ${prefix}setcmd
 ➣ ${prefix}delcmd

 𝐎𝐍𝐋𝐘 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔
 ➣ > evalcode
 ➣ x evalcode-2
 ➣ $ executor
 ➣ ${prefix}exif
 ➣ ${prefix}join
 ➣ ${prefix}left
 ➣ ${prefix}self
 ➣ ${prefix}public
 ➣ ${prefix}setprefix
 ➣ ${prefix}setppbot
 ➣ ${prefix}broadcast
 ➣ ${prefix}bcsewa
 ➣ ${prefix}addpremium
 ➣ ${prefix}delpremium
 ➣ ${prefix}addsewa
 ➣ ${prefix}delsewa
 `
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai Kak ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
- Dana : 0895609803131
- Gopay : 6281213304135
- Ovo : 08988986891
- Pulsa : 083811051683

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}
