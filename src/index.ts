require('dotenv').config();
const { Bot, InlineKeyboard } = require("grammy");
const { run } = require("@grammyjs/runner");

const apiKey = process.env.YOUR_BOT_TOKEN_HERE as string;

const bot = new Bot(apiKey);

bot.on("message", (ctx:context) =>
    ctx.reply("salom ,mening botimga xush kelibsiz", {
        reply_markup: new InlineKeyboard()
            .text("salom", "salom")
            .text("chiqish", "chiqish"),
    })
);

bot.on("callback_query:data", async (ctx:context) => {
    await ctx.answerCallbackQuery();
    if (ctx.callbackQuery.data === "salom") {
        ctx.reply("Assalomu aleykum men sizga qanday yordam bera olaman?.",{
            reply_markup: new InlineKeyboard()
            .text("yordam berish","yordam")
            .text("Orqaga qaytish", "orqaga"),
                
        });
    } else if (ctx.callbackQuery.data === "yordam") {
        ctx.reply("men sizga yordam berishimdan xursandman");
    } else if (ctx.callbackQuery.data === "orqaga") {
        ctx.reply("Siz birinchi menuga qaytdingiz.");
    }
});

bot.on("callback_query:data", async (ctx:context) => {
    await ctx.answerCallbackQuery();
    if (ctx.callbackQuery.data === "yordam") {
        ctx.reply("Assalomu aleykum men sizga qanday yordam bera olaman?.",{
            reply_markup: new InlineKeyboard()
            .text("boshqa menu","boshqa")
            .text("Orqaga qaytish", "orqaga"),
                
        });
    } else if (ctx.callbackQuery.data === "boshqa") {
        ctx.reply("");
    } else if (ctx.callbackQuery.data === "orqaga") {
        ctx.reply("Siz birinchi menuga qaytdingiz.");
    }
});

run(bot);
console.log("Bot started on https://t.me/baxrom0206_bot");
