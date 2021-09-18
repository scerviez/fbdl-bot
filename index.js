const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.token)
const fbdl = require("fb-video-downloader")

bot.command('start', (ctx) => {
    if (ctx.chat.type == 'private') {
        ctx.reply(process.env.text)
    }else{
          ctx.reply(process.env.text_group)
  }
})


bot.on('message',  (ctx) => {
    if (ctx.chat.type == 'private') {
        ctx.reply('Downloading..');
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
