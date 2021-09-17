const { Telegraf } = require('telegraf')

const bot = new Telegraf("1937670863:AAF-BK41Z2svcQm6QygjA8gErRaLtzh_4gU")
const fbdl = require("fb-video-downloader")

bot.command('start', (ctx) => {
    ctx.reply('Yo Welcome. im bot to download video from Facebook. Send Link To Start Download');
});
bot.on('message',  (ctx) => {
    if (ctx.chat.type == 'private') {
        ctx.reply('...');
        var pesan = ctx.message.text;
        //let input = ctx.message.text
        // let inputArray = input.split(" ")
        // inputArray.shift()
        // pesan = inputArray.join(" ")
        fbdl.getInfo(pesan).then(res => {
            //ctx.replyWithVideo(res.streamURL, { caption: `Title: ${res.title}`})
            //ctx.replyWithPhoto({url: res.thumb}, { caption:  `Title: ${res.title}\nSize: ${res.size}\n[Click To Download](${res.download.sd})`, parse_mode: "markdown"})
            ctx.reply(`Title: ${res.title}\n[Click To Download](${res.download.sd})`, { parse_mode: 'markdown'})
        }).catch(e => {
         console.log(e);
   })
 }
})

bot.launch();
