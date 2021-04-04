require('dotenv').config()
const { Client, MessageEmbed } = require('discord.js')
const ytdl = require('ytdl-core')
const PREFIX = '?'
const client = new Client({ disableEveryone: true })
const bdd = require("./bdd.json");
client.login(process.env.TOKEN);
const fs = require('fs');
const { send } = require('process')



client.on("ready", async () => {
    console.log("Activeaa");
    client.user.setStatus("online");
    client.user.setActivity("la vie" , {type : 'WATCHING'});
    });

//client.on("guildMemberAdd", member =>{
 ////   client.channels.cache.get('747748772205035571').send(`Bienvenue sur le serveur ${member} !`);
 //   member.roles.add('747751176358985768');
    //member.send(`Envoie un message privé`);
//});



//IMAGES
client.on('message', async message => {

    if(message.content.startsWith("?kiss")){
        b=getRandomInt(bdd["kiss"]["nombre"]);
        console.log(b);
        message.channel.send("\n" + bdd["kiss"][`${b}`]);
    }

    if(message.content.startsWith("?hug")){
        b=getRandomInt(bdd["hug"]["nombre"]);
        console.log(b);
        message.channel.send("\n" + bdd["hug"][`${b}`]);  
    }   

    if(message.content.startsWith("?shoot")){
        b=getRandomInt(bdd["shoot"]["nombre"]);
        console.log(b);
        message.channel.send("\n" + bdd["shoot"][`${b}`]);  
    }       
    if(message.content.startsWith("?add_kiss")){
        //message.member.hasPermission('ADMINISTRATOR')
        if(message.content.length > 15){
            réponse = message.content.slice(10);
            console.log(réponse);
            b=bdd["kiss"]["nombre"];
            console.log(b);
            bdd["kiss"][b] = réponse;
            bdd["kiss"]["nombre"]=bdd["kiss"]["nombre"]+1;
            Savebdd();
            message.channel.send("Gif ajouté a la bdd, merci");
        }
    }  

    if(message.content.startsWith("?add_hug")){
        //message.member.hasPermission('ADMINISTRATOR')
        if(message.content.length > 15){
            réponse = message.content.slice(9);
            console.log(réponse);
            b=bdd["hug"]["nombre"];
            console.log(b);
            bdd["hug"][b] = réponse;
            bdd["hug"]["nombre"]=bdd["hug"]["nombre"]+1;
            Savebdd();
            message.channel.send("Gif ajouté a la bdd, merci");
        }
    }

    if(message.content.startsWith("?add_shoot")){
        //message.member.hasPermission('ADMINISTRATOR')
        if(message.content.length > 15){
            réponse = message.content.slice(10);
            console.log(réponse);
            b=bdd["shoot"]["nombre"];
            console.log(b);
            bdd["shoot"][b] = réponse;
            bdd["shoot"]["nombre"]=bdd["shoot"]["nombre"]+1;
            Savebdd();
            message.channel.send("Gif ajouté a la bdd, merci");
        }
    }

    if(message.content.startsWith("?help")){
        //message.member.hasPermission('ADMINISTRATOR')
        const HelpEmbed = new MessageEmbed()
        .setColor('#1A76D3')
        .setTitle("Commands")
        .setDescription("**?kiss**: Send a random kiss gif\n**?shoot**: Send a random shooting gif\n**?hug**: Send a random hug gif\n**?add_kiss**: Add a gif ( need to take a kiss gif URL after )\n**?add_shoot**: Add a gif ( need to take a shoot gif URL after )\n**?add_hug**: Add a gif ( need to take a kiss hug URL after )\n**?play** : Play a youtube audio in a vocal channel\n**?stop**: Stop the audio");
        message.channel.send(HelpEmbed)
    }



 if(message.content.startsWith(`${PREFIX}play`)) {
        const voiceChannel = message.member.voice.channel
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to play music")
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("I don t have permissions to connect to the voice channel")
        if(!permissions.has('SPEAK')) return message.channel.send("I don't have permissions to speak in the channel")
        
        try {
            var connection = await voiceChannel.join()
        } catch (error) {
        console.log(`There was an error connecting to the voice channel: ${error}`)
        return message.channel.send(`There was an error connecting to the voice channel: ${error}`) 
        }
    
        const dispatcher = connection.play(ytdl(args[1]))
        //.on('finish', () => {
        //    voiceChannel.leave()
       // }) 
        //.on('error', error => {
            
       //     console. Log(error)
        //})
        dispatcher.setVolumeLogarithmic(5 / 5)
        }
        
        else if (message.content.startsWith(`${PREFIX}leave`)) {
        
        if(!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to stop the music")
        message.member.voice.channel.leave()
        return undefined
    }

})

if(message.content.startsWith("es-ce que")){
    
    message.channel.send("\n" + bdd["rep"][Math.random(8)]);
}
})



