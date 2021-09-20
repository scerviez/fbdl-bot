const { Bot, InlineKeyboard } = require('grammy')

const bot = new Bot('1937670863:AAF-BK41Z2svcQm6QygjA8gErRaLtzh_4gU')

const fbdl = require("fb-video-downloader")

bot.command('start', (ctx) => {
    if (ctx.chat.type == 'private') {
        ctx.reply('Yo Welcome. im bot to download media from facebook. send me link then bot send link to download')
    }else{
          ctx.reply('Hello '+ctx.from.first_name+' This bot only can used at Private Chat ðŸ™‚')
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
         const hd = res.download.hd
         const sd = res.download.sd
         const keyboard = new InlineKeyboard().url('SD', sd)
          return ctx.reply(`Title: ${res.title}\n[HD Quality](${hd})`, {
            reply_markup: keyboard, parse_mode: 'markdown'
           })
            //ctx.replyWithVideo(res.streamURL, { caption: `Title: ${res.title}`})                                                 
            //ctx.replyWithPhoto({url: res.thumb}, { caption:  `Title: ${res.title}\nSize: ${res.size}\n[Click To Download](${res.download.sd})`, parse_mode: "markdown"})
            //ctx.reply(`Title: ${res.title}\n[Click To Download](${res.download.hd})`, { parse_mode: 'markdown'})
        }).catch(e => {
         console.log(e);
    })
  }
})

bot.start();
