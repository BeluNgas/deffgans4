//Subscribe yah kak
//Udah No Enc Masak Ga Di Subscribe
//parrah sih
////
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const deff = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor, deffLog } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, info, close } = require('./lib/yntkts')
const { start, success } = require('./lib/functionss')
const { waiting } = require('./lib/waiting')
const welcome = require('./message/group.js') 
//const participants = require('./message/group2.js') 
const control = JSON.parse(fs.readFileSync('./setting.json'))
baterai = 'unknown'
NamaOwner = `${control.NamaOwner}`
NamaBot = `${control.NamaBot}`
NomorOwner = `${control.NomorOwner}`
//==============pembatas===============\\			
charging = 'unknown'
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
//==============pembatas===============\\			
require('./deff.js')
nocache('./deff.js', module => console.log(`${module} is now updated!`))
//==============pembatas===============\\			
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 00,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `)-----[${control.NamaBot}]-----(`, orderTitle: 'deffpratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//==============pembatas===============\\			
const starts = async (deff = new WAConnection()) => {
    deff.logger.level = 'warn'
    deff.version = [2, 2143, 3]
    console.log(color(figlet.textSync('GANSBOTz', {

		font: 'Larry 3D 2',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'red'))
//==============pembatas===============\\			
    deff.browserDescription = [ 'Subscribe DEFFBOTz', 'Safari', '0.0.1' ]
    
    deff.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan qr maks 20 detik sebelum qr expired'))
    })

    fs.existsSync('./deffqr.json') && deff.loadAuthInfo('./deffqr.json')
    deff.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    deff.on('open', () => {
        success('2', 'Terhububg')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await deff.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./deffqr.json', JSON.stringify(deff.base64EncodedAuthInfo(), null, '\t'))
        buttonss = [
{buttonId: `#menu`, buttonText:{displayText: 'ðŸ’¾MENU'}, type: 1},
{buttonId: `#owner`, buttonText:{displayText: 'ðŸ‘¤OWNER'}, type: 1}
]

buttonMessagee = {
contentText: `Berhasil Terhubung\nJangan lupa Subscribe DEFFBOTz\nMau Request Fitur Bisa Langsung Hubungi Nomor Developer Dibawah!\n`,
footerText: `No Developer : wa.me/6285954993954` ,
buttons: buttonss,
headerType: 1
}
deff.sendMessage(`${control.NomorOwner}@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ Deffri Gans]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
//==============pembatas===============\\			
    deff.on('ws-close', () => {
        console.log(deffLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })
//==============pembatas===============\\			
    // Mengkoneksi ulang
    deff.on('close', async ({ reason, isReconnecting }) => {
        console.log(deffLog('Koneksi Terputus\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(deffLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
//==============pembatas===============\\			
	// Baterai
	deff.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	deff.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})  
//==============pembatas===============\\			
    deff.on('chat-update', async (message) => {
        require('./deff.js')(deff, message)
        ownerNumber = ["${control.NomorOwner}@s.whatsapp.net","${control.NomorOwner}@s.whatsapp.net",`${control.NomorOwner}@s.whatsapp.net`]
        dtod = "${control.NomorOwner}@s.whatsapp.net"
       otod = `${control.NomorOwner}@s.whatsapp.net`
    })
//==============pembatas===============\\			
        deff.on('group-participants-update', async (anu) => {
		await welcome(deff, anu)
	})
//==============pembatas===============\\			
	/deff.on('group-update', async (anu) => {
		const metdata = await deff.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=${control.NomorOwner}:${control.NomorOwner}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    deff.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    deff.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nâ€¢ Deskripsi Baru : ${anu.desc}`
    deff.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    deff.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    deff.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})
//==============pembatas===============\\			
//By iky
deff.on("message-delete", async (m) => {

    if (m.key.remoteJid == "status@broadcast") return;

    if (!m.key.fromMe && m.key.fromMe) return;

    m.message =

      Object.keys(m.message)[0] === "ephemeralMessage"

        ? m.message.ephemeralMessage.message

        : m.message;

    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));

    const isGroup = m.key.remoteJid.endsWith("@g.us")

    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;

    const moment = require("moment-timezone");

    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");

    let d = new Date();
    let c = deff.chats.get(m.key.remoteJid)
    let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
    let co3ntent = deff.generateForwardMessageContent(a, false)
    let c3type = Object.keys(co3ntent)[0]
    let locale = "id";

    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();

    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][

      Math.floor((d * 1 + gmt) / 84600000) % 5

    ];

    let week = d.toLocaleDateString(locale, { weekday: "long" });

    let calender = d.toLocaleDateString(locale, {

      day: "numeric",

      month: "long",

      year: "numeric",

    });

    const type = Object.keys(m.message)[0];

    if (!isAntidel) return

    deff.sendMessage(

      m.key.remoteJid,
      `
 Anti Delete 
 • Nama : @${m.participant.split("@")[0]}
 • Waktu : ${jam} ${week} ${calender}
 • Type : ${c3type}
 ${control.NamaBot} `, 
      MessageType.text,

      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }

    );



    deff.copyNForward(m.key.remoteJid, m.message);

  });
//==============pembatas===============\\			
deff.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        deff.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        deff.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:`https://wa.me/${control.NomorOwner}?text=Assalamualaikum`}}})
        await sleep(5000)
        await deff.blockUser(callerId, "add")
        ban.push(`${callerId}`)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
        })
}
//==============pembatas===============\\			
console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/deffðŸ˜œ123', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}

//==============pembatas===============\\			
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
//==============pembatas===============\\			
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
//==============pembatas===============\\			
