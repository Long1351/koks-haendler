
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var random, chance, money, stoff;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


await s4d.client.login('OTY1NzI4MDQ3MzM0NTU1NzI5.Yl3aVA.Q4abON_S2MmDNoAWW00rWZYnJFI').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(String('Gammelt am Bahnhof rum!'));

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"test-koks') {
    s4dmessage.channel.send(String('Test erfolgreich!'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"ping') {
    s4dmessage.channel.send(String((s4d.client.ws.ping)));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (((s4dmessage.content) || '').startsWith('"user-info' || '')) {
    s4dmessage.channel.send(String(('Username: ' + String((s4dmessage.mentions.members.first()).user.tag))));
    s4dmessage.channel.send(String(('Spitzname: ' + String((s4dmessage.mentions.members.first()).user.username))));
    s4dmessage.channel.send(String(('User ID: ' + String((s4dmessage.mentions.members.first()).user.id))));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (String((s4dmessage.content)).includes(String('Du hurrensohn'))) {
    s4dmessage.channel.send(String('Selber hurrensohn!'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"reset') {
    random = 0;
    money = 0;
    s4dmessage.react('👍');s4dmessage.channel.send(String('Alles wurde zurück gesetzt!'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"betteln') {
    chance = mathRandomInt(1, 100);
    if (chance < 50) {
      random = mathRandomInt(30, 90);
      s4dmessage.channel.send(String((['Du hast ',random,'€ von jemanden erhlaten.'].join(''))));
      money = (typeof money == 'number' ? money : 0) + random;
    } else {
      s4dmessage.channel.send(String('Du hast leider nichts bekommen.'));
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Hast du Stoff?') {
    chance = mathRandomInt(1, 100);
    if (chance < 70) {
      random = mathRandomInt(15, 35);
      s4dmessage.channel.send(String((['Ja hab ich. Aber ich hab leider nur ',random,'g Koks. Mehr kann ich dir nicht geben.'].join(''))));
      stoff = (typeof stoff == 'number' ? stoff : 0) + random;
    } else {
      random = mathRandomInt(110, 220);
      s4dmessage.channel.send(String((['Du wurdest beim dealen erwischt. Du musstest',random,'€ Strafe bezahlen.'].join(''))));
      money = money - random;
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"inventar') {
    s4dmessage.channel.send(String((['Du hast gerade ',stoff,'g Koks.'].join(''))));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"bank') {
    s4dmessage.channel.send(String((['Du hast ',money,'€!'].join(''))));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"buy vip') {
    if (money >= 250000) {
      (s4dmessage.member).roles.add((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).get('965971736120148038')));
      money = money - 250000;
      s4dmessage.channel.send(String('Erfolgreich gekauft!'));
      s4dmessage.react('👍');} else {
      s4dmessage.channel.send(String('Du hat nicht genug Geld!'));
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"convert') {
    money = stoff * 2;
    stoff = 0;
    s4dmessage.channel.send(String('Erfolgreich umgewandelt!'));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"polizei') {
    random = mathRandomInt(10, 30);
    s4dmessage.channel.send(String((['Ja danke das du uns gerufen hast, wir haben dir ',random,'g Koks abgenommen.'].join(''))));
    stoff = stoff - random;
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"shop') {
    (s4dmessage.member).send(String((['**__Shop__**','\n','\n','**🏆 | VIP |**','\n','Preis: **250.000€**','\n','_benutze ``"buy vip`` um die Rolle zu kaufen_'].join(''))));
  }

});

s4d.client.on('ready', async () => {
  s4d.client.channels.cache.get('964546419220439040').send(String('Ich bin jetzt Wach!'));

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"admin') {
    if (((s4dmessage.member).user.id) == '440778837194965002') {
      money = money + 1000000000;
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"admin') {
    if (((s4dmessage.member).user.id) == '720660271903014993') {
      money = money + 1000000000;
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"undo') {
    if (((s4dmessage.member).user.id) == '440778837194965002') {
      money = money - 1000000000;
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '"undo') {
    if (((s4dmessage.member).user.id) == '720660271903014993') {
      money = money - 1000000000;
    }
  }

});


                return s4d;
                })();
            