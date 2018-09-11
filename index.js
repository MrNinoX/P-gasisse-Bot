const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login("NDg4MjkyMzAwMDI4NjQxMjgx.Dnb6DA.iaXrx38zGzuaRn4lGX5lXtHUt4c");

client.on("ready", () => {
    console.log("Je suis prèt !")
    client.user.setGame("Me faire coder")
});
    
client.on('message', message => {
    if(message.content === "Bonjour"){
        message.reply("Salut et bon jeux !");
        console.log('Le bot dis Salut et bon jeux !');
    }
});

client.on('message', message => {
    if(message.content === "Bonsoir"){
        message.reply("Aurevoir nous espérons que tu as passer un bon moment !");
        console.log('Le bot dis Salut et bon jeux !');
    }
});

client.on('message', message => {
    if(message.content === "yo"){
        message.reply("Salut et bon jeux !");
        console.log('Le bot dis Salut et bon jeux !');
    }
});

client.on('message', message => {
    if(message.content === "gabix"){
        message.reply("Faut pas lui parler !");
        console.log('Le bot dis Faut pas lui parler ! !');
    }
});

client.on('message', message => {
    if(message.content === "Gabix"){
        message.reply("Faut pas lui parler !");
        console.log('Le bot dis Faut pas lui parler ! !');
    }
});

client.on('message', message => {
    if(message.content === "bonsoir"){
        message.reply("Aurevoir nous espérons que tu as passer un bon moment !");
        console.log('Le bot dis Salut et bon jeux !');
    }
});

client.on('message', message => {
    if(message.content === "bonjour"){
        message.reply("Salut et bon jeux !");
        console.log('Le bot dis Salut et bon jeux !');
    }  
});

client.on('message', message => {
    if(message.content === "/règle"){
        message.reply("***Voila pour vous !!***");
        console.log('Le bot dis les règles');
    }

    if(message.content === prefix + "règle"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Voici les règles")
        .setDescription("A lire imperativement !")
        .addField("Pour les salons globaux","Ne pas insulter,ne pas spam dans les salons vocaux et textuels . Les soundboards et screamers audio sont interdits . Seul les pubs Youtube sont autorisés dans le channel #Youtube . Ne pas rejoindre des salons privés déja occupés par des personnes que vous ne connaissez pas .")
        .setFooter("Bon jeux à vous !")
        message.channel.sendMessage(help_embed);
        console.log("Une personne a utilisé le /règle")
    }
});

client.on('message', message => {
    if(message.content === "/aide"){
        message.reply("Voici des aides pour toi !");
        console.log('Le bot donne des aides !');
    }
    
    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Voici les aides")
        .setDescription("Pour vous aidez !")
        .addField("/règle","Pour avoir les règles !")
        .addField("/statistiques","Pour voir test stats !")
        .setFooter("Bon jeux à vous !")
        message.channel.sendMessage(help_embed);
        console.log("Une personne a utilisé le /aide")
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "statistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#FF9900")
        .setTitle(`Statitiques de l'utilisateur : ${message.author.username}`)
        .addField(`Id de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tes stats on été envoyer !")
        message.author.send({embed: stats_embed});
        break;
    }





});






        