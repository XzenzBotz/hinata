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

  πππππππππ
 π€ Upload : ${upload}
 π₯ Downloads : ${download}

  πππ ππππ
 π€ Creator : ${ownerName}
 π€ Bot Name : ${botName}
 β° Time : ${jam}
 π Date : ${tanggal}
 β±οΈ Runtime : ${runtime(process.uptime())}

 ππππ ππππ
 πΌ Name : ${pushname !== undefined ? pushname : 'Kak'}
 π§βπ» Status : ${isOwner ? 'OwnerποΈ' : isPremium ? 'Premiumπ' : 'Freeπ₯'}
 ποΈ Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 π« Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 π΅ Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
 ππππ ππππ
 β£ ${prefix}menu
 β£ ${prefix}infobot
 β£ ${prefix}donate
 β£ ${prefix}dashboard
 β£ ${prefix}owner
 β£ ${prefix}grouphinata
 β£ ${prefix}cekdrive
 β£ ${prefix}cekbandwidth
 β£ ${prefix}cekpremium
 β£ ${prefix}sewabot
 β£ ${prefix}listpremium
 β£ ${prefix}listsewa
 β£ ${prefix}speed
 β£ ${prefix}script
 β£ ${prefix}runtime
 β£ ${prefix}listbahasa

 πππππππππ/πππππ
 β£ ${prefix}sticker
 β£ ${prefix}stickerwm
 β£ ${prefix}smeme
 β£ ${prefix}toimg
 β£ ${prefix}tovideo
 β£ ${prefix}tomp3
 β£ ${prefix}ttp
 β£ ${prefix}attp
 β£ ${prefix}emojimix
 β£ ${prefix}nulis
 β£ ${prefix}spamcall
 β£ ${prefix}say
 β£ ${prefix}translate

 πππππππππ ππππ
 β£ ${prefix}anonymous
 β£ ${prefix}start
 β£ ${prefix}next
 β£ ${prefix}stop
 β£ ${prefix}sendprofile

 πππππ ππππ
 β£ ${prefix}list
 β£ ${prefix}addlist
 β£ ${prefix}dellist
 β£ ${prefix}updatelist
 β£ ${prefix}jeda
 β£ ${prefix}tambah
 β£ ${prefix}kurang
 β£ ${prefix}kali
 β£ ${prefix}bagi
 β£ proses <reply chat>
 β£ done <reply chat>
 β£ ${prefix}setproses
 β£ ${prefix}changeproses
 β£ ${prefix}delsetproses
 β£ ${prefix}setdone
 β£ ${prefix}changedone
 β£ ${prefix}delsetdone

 ππππππππ ππππ
 β£ ${prefix}play
 β£ ${prefix}ytmp3
 β£ ${prefix}ytmp4
 β£ ${prefix}getmusic
 β£ ${prefix}getvideo
 β£ ${prefix}instagram
 β£ ${prefix}igstory
 β£ ${prefix}tiktok
 β£ ${prefix}facebook
 β£ ${prefix}mediafire
 β£ ${prefix}telesticker
 β£ ${prefix}pinterestdl

 πππππ ππππ
 β£ ${prefix}afk
 β£ ${prefix}welcome
 β£ ${prefix}left
 β£ ${prefix}setwelcome
 β£ ${prefix}changewelcome
 β£ ${prefix}delsetwelcome
 β£ ${prefix}setleft
 β£ ${prefix}changeleft
 β£ ${prefix}delsetleft
 β£ ${prefix}linkgc
 β£ ${prefix}setppgc
 β£ ${prefix}setnamegc
 β£ ${prefix}setdesc
 β£ ${prefix}antilink
 β£ ${prefix}antiwame
 β£ ${prefix}open
 β£ ${prefix}close
 β£ ${prefix}setopen
 β£ ${prefix}changeopen
 β£ ${prefix}delsetopen
 β£ ${prefix}setclose
 β£ ${prefix}changeclose
 β£ ${prefix}delsetclose
 β£ ${prefix}add
 β£ ${prefix}kick
 β£ ${prefix}promote
 β£ ${prefix}demote
 β£ ${prefix}revoke
 β£ ${prefix}checksewa

 ππππ ππππ
 β£ ${prefix}tictactoe
 β£ ${prefix}delttt
 β£ ${prefix}tebakgambar
 β£ ${prefix}kuis
 β£ ${prefix}tebaklagu
 β£ ${prefix}nyerah
 β£ ${prefix}casino
 β£ ${prefix}delcasino
 β£ ${prefix}akinator
 β£ ${prefix}cancelakinator

 ππππππ ππππ
 β£ ${prefix}apakah
 β£ ${prefix}bisakah
 β£ ${prefix}kapankah
 β£ ${prefix}bagaimanakah
 β£ ${prefix}rate
 β£ ${prefix}gantengcek
 β£ ${prefix}cantikcek
 β£ ${prefix}sangecek
 β£ ${prefix}gaycek
 β£ ${prefix}lesbicek
 β£ ${prefix}cekbapak

 ππππππ ππππ
 β£ ${prefix}lirik
 β£ ${prefix}grupwa
 β£ ${prefix}pinterest
 β£ ${prefix}ytsearch
 β£ ${prefix}whatmusic
 β£ ${prefix}igstalk
 β£ ${prefix}searchbyimage

 ππππππ ππππ
 β£ ${prefix}quotes
 β£ ${prefix}cecan
 β£ ${prefix}cogan
 β£ ${prefix}waifu
 β£ ${prefix}meme
 β£ ${prefix}darkjoke
 β£ ${prefix}couple

 ππππππ ππππ
 β£ ${prefix}asupan
 β£ ${prefix}bocil
 β£ ${prefix}geayubi
 β£ ${prefix}hijaber
 β£ ${prefix}rikagusriani
 β£ ${prefix}santuy
 β£ ${prefix}ukhty
 
 πππππππ ππππ
 β£ ${prefix}pencil
 β£ ${prefix}glitch
 β£ ${prefix}glitch2
 β£ ${prefix}glitchtiktok
 β£ ${prefix}pornhub
 β£ ${prefix}blackpink
 β£ ${prefix}berry
 β£ ${prefix}neon
 β£ ${prefix}3d-neon-light
 β£ ${prefix}3d-christmas
 β£ ${prefix}3d-boxtext
 β£ ${prefix}3d-orange-juice
 β£ ${prefix}logo-bear
 β£ ${prefix}logo-ninja
 β£ ${prefix}thunder
 β£ ${prefix}video-game-classic
 β£ ${prefix}marvel-studios
 β£ ${prefix}green-horror
 β£ ${prefix}magma
 β£ ${prefix}chocolate-cake
 β£ ${prefix}strawberry

 ππππππππ ππππ
 β£ ${prefix}flaming
 β£ ${prefix}shadow-sky
 β£ ${prefix}metallic
 β£ ${prefix}logo-naruto
 β£ ${prefix}logo-pubg
 β£ ${prefix}under-grass
 β£ ${prefix}harry-potter
 β£ ${prefix}flower-typography
 β£ ${prefix}picture-of-love
 β£ ${prefix}coffee-cup
 β£ ${prefix}butterfly
 β£ ${prefix}night-sky
 β£ ${prefix}carved-wood
 β£ ${prefix}illuminated-metallic
 β£ ${prefix}sweet-candy

 πππππππ & ππππ
 β£ ${prefix}balance
 β£ ${prefix}buylimit
 β£ ${prefix}buyglimit
 β£ ${prefix}transfer
 β£ ${prefix}limit
 β£ ${prefix}balance

 πππππππ
 β£ ${prefix}fitnah
 β£ ${prefix}getquoted
 β£ ${prefix}tagall
 β£ ${prefix}hidetag
 β£ ${prefix}fakehidetag
 β£ ${prefix}react
 β£ ${prefix}setcmd
 β£ ${prefix}delcmd

 ππππ πππππ ππππ
 β£ > evalcode
 β£ x evalcode-2
 β£ $ executor
 β£ ${prefix}exif
 β£ ${prefix}join
 β£ ${prefix}left
 β£ ${prefix}self
 β£ ${prefix}public
 β£ ${prefix}setprefix
 β£ ${prefix}setppbot
 β£ ${prefix}broadcast
 β£ ${prefix}bcsewa
 β£ ${prefix}addpremium
 β£ ${prefix}delpremium
 β£ ${prefix}addsewa
 β£ ${prefix}delsewa
 `
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*π°γ DONATE γπ°*

Hai Kak ${pushname}π
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
- Dana : 0895609803131
- Gopay : 6281213304135
- Ovo : 08988986891
- Pulsa : 083811051683

Berapapun donasi kalian akan sangat berarti π

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}
