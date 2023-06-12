const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6288802762267'] //ur owner number
global.ownernomer = "6288802762267" //ur owner number2
global.ownername = "🦄Dream Guy Fenn" //ur owner name
global.ytname = "YT: fendr4" //ur yt chanel name
global.socialm = "GitHub: fennryeta" //ur github or insta name
global.location = "Indonesia, Yogyakarta, Pakualaman" //ur location

//new
global.botname = "Fx-Md"
global.ownernumber = '6288802762267'
global.ownername = '🦄サブリナ Fennfx'
global.ownerNumber = ["+6288802762267@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@fenndraa"
global.websitex = "https://youtu.be/ecl-JDVDz3E"
global.wagc = "https://chat.whatsapp.com/GcUOMXXeXog2ZFYLLay1Bd"
global.themeemoji = '🥀'
global.wm = "Fenn-Inc."
global.botscript = 'https://github.com/FennRyeta/CheemsBot-MD7' //script link
global.packname = "Sticker By"
global.author = "Fx Bot\n\n\nA whatsapp bot developed by\nX Guy Fen\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : 081cintakupadamunotutu"
global.creator = "6288802762267@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})