var timer = require('timers');
const discord = require('discord.js');
const notify = require('node-notifier');
const process = require('process');
const path = require('path');
const chalk = require('chalk');
function notifysender(title, message, icon, sound) {
    notify.notify({
        title: title,
        message: message,
        icon: path.join(__dirname, icon),
        sound: sound
    });
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const prefix = '---.'
const token = 'ODAyNDA3ODQzMTU5MzQzMTE1.YAuyiQ.ypF7357TEwDJvML4pXLOX8w6PPE';
const bot = new discord.Client();
bot.on('message', msg => {
    if (msg.author.tag == 'Server Viewer#6770') {
        let args = msg.content.substring(prefix.length).split(" ");
        switch (args[0]) {
            case 'channelStatus':
                msg.delete();
                msg.channel.send(`Channel ID:        ${msg.channel.id}\nChannel Name:        ${msg.channel.name}\nChannel Topic:        ${msg.channel.topic}`)
                console.log(chalk.bold(chalk.green(`Channel ID:        ${msg.channel.id}\nChannel Name:        ${msg.channel.name}\nChannel Topic:        ${msg.channel.topic}`)))
                break;
            case 'help':
                console.log(chalk.bold(chalk.blue('\nPrefix : ---.\nchannelStatus : Shows your current channel status\nhelp : Shows a list of commands')))
                msg.delete();
        }
    }
    if (msg.content.includes('-mentionBot')) {
        if (msg.author.tag == "Server Viewer#6770") {
            // Nothing
        } else {
            if (msg.content.includes('-mentionBot')) {
                var mn = msg.content.replace('-mentionBot', '')
                var nm = msg.content.replace('-mentionBot ', '')
                msg.reply("We've mentioned the user!")
                notifysender("You\'ve been mentioned!", `You got mentioned by:\nUser: ${msg.author.tag}\nNMessage: ${mn}\nBMessage: ${nm}`, '', true);
            }
        }
    }
});
bot.on('ready', msg => {
    function m() {
        console.log(chalk.blue('R')+chalk.red('e')+chalk.yellow('a')+chalk.green('d')+chalk.magenta('y')+chalk.white('!'))
        readline.question(chalk.blueBright('Channel ID: '), ml => {
            ml.bold();
            if (!ml) {
                console.log(chalk.underline(chalk.red("Please add an ID!")))
                m();
            } else {
                bot.on('message', msg => {
                    if (msg.author.tag == 'Server Viewer#6770') {

                    } else {
                        if (msg.channel.id == ml) {
                            console.log(`\n${chalk.bold(chalk.green(msg.author.tag))}: ${chalk.cyan(msg.content)}`);
                            j();
                        } else {

                        }
                    }
                });
            }
            const channel = bot.channels.cache.get(ml);
            function j() {
                readline.question(chalk.greenBright('Say: '), an => {
                    if (an == '') {
                        console.log(chalk.bold(chalk.red("Please enter something!")));
                    }
                    channel.send(an);
                    j();
                });
            }
            j();
        })
    }
    m();
});
bot.login(token);