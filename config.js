let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "919556416715", "6281916259786", "62857420881846","628812904283","6282328303332", "62822980698995", "436504463151666", "62823283033323" ],
  MONGO_URI: "mongodb+srv://<username>:<password>@cluster0.eyx0e.mongodb.net/<dbname>?retryWrites=true&w=majority",
   mess: {
   wait: "wait in proses...",
   error: "errorr!!"
   },
   prefix: "_",
   limit: 100,
   eror: "Eror",
   waits: "wait in proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU', // buat Image Button
   packname: "BOT OFFICIAL",
   author: '© 2021 - indianTeam',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot must be admin",
    userPlayer: "You Haven't Registered In Gamer DB RIXLE-BOT", 
    nsfw: "FITUR NOT ACTIVATED!"
    }
}
module.exports = userbot

