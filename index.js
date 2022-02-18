const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const message = require('./Events/message');
client.commands = new Discord.Collection()


client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("caractère")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Caractères"__**')
            .setColor("#7deb34")
            .addField("Il faut un nombre de caractères précis pour la fiche suivant le grade ?", "Non, tant que tu remplis tout et que c'est détaillé :] - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("Une addiction , c'est dans mental ou caractère ?", "Caractère je dirais - 嵐 Arachou Raichou 嵐")
            .addField("Différence entre Caractère et Situation Mentale", "Le caractère correspond plus aux descriptions de son état mental, justement, tandis que sa situation mentale peut faire référence à... Une mélancolie toujours présente, tristesse, joie, sadisme, peur..")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("Reservation")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Reservation"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );


  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("reservation")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "reservation"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("reserver")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "reserver"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("Reserver")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Reserver"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("réserver")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "réserver"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("Réserver")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Réserver"__**')
            .setColor("#7deb34")
            .addField("Ça existe des réservations d'apparence ?", "Oui, il y en a régulièrement dans 「👗」𝐀𝐩𝐩𝐚𝐫𝐞𝐧𝐜𝐞-𝐩𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐠𝐞 - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("C'est possible de réserver un grade ? 👀", "Oui, dans 「❌」𝐑𝐞́𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 - 灰 Ojichou Tobichou | Stagiaire")
            .addField("Je peux en faire une du coup?", "Oui, pas besoin de demander, oublie juste pas de regarder si la réservation est déjà prise. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("Fiche")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Fiche"__**')
            .setColor("#7deb34")
            .addField("Ma fiche doit être faite dans un google docs ?", "De préférence ! - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("Il faut un nombre de caractères précis pour la fiche suivant le grade ?", "Non, tant que tu remplis tout et que c'est détaillé :] - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("fiche")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Fiche"__**')
            .setColor("#7deb34")
            .addField("Ma fiche doit être faite dans un google docs ?", "De préférence ! - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField("Il faut un nombre de caractères précis pour la fiche suivant le grade ?", "Non, tant que tu remplis tout et que c'est détaillé :] - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
           message.channel.send(embed)

    }else{

    }
    }
}
  );



  

  client.on('message', message => {
    if (message.channel.id === '721645495281385553') {
        if (message.content.includes("caractère")){
        const embed = new Discord.RichEmbed()
        .setTitle('**__FAQ - Questions Évidentes pour le mot "Caractères"__**')
        .setColor("#7deb34")
        .addField("Il faut un nombre de caractères précis pour la fiche suivant le grade ?", "Non, tant que tu remplis tout et que c'est détaillé :] - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
        .addField("Une addiction , c'est dans mental ou caractère ?", "Caractère je dirais - 嵐 Arachou Raichou 嵐")
        .addField("Différence entre Caractère et Situation Mentale", "Le caractère correspond plus aux descriptions de son état mental, justement, tandis que sa situation mentale peut faire référence à... Une mélancolie toujours présente, tristesse, joie, sadisme, peur..")
       message.channel.send(embed)

}else{

}
}}
);

  client.on('message', message => {
    if (message.channel.id === '715300796601729034') {
        if (message.content.includes("mental")){
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Mentale"__**')
            .setColor("#7deb34")
            .addField("Différence entre Caractère et Situation Mentale", "Le caractère correspond plus aux descriptions de son état mental, justement, tandis que sa situation mentale peut faire référence à... Une mélancolie toujours présente, tristesse, joie, sadisme, peur.. - 𝐊𝐲𝐨𝐢𝐜𝐡𝐨𝐮 | 𝐌𝐢𝐬𝐚𝐤𝐢𝐜𝐡𝐨𝐮")
           message.channel.send(embed)

    }else{

    }
}
  });

     client.on('message', message => {
        if (message.channel.id === '715300796601729034') {

            if (message.content.includes("Mental")){
                const embed = new Discord.RichEmbed()
                .setTitle('**__FAQ - Questions Évidentes pour le mot "Mentale"__**')
                .setColor("#7deb34")
                .addField("Différence entre Caractère et Situation Mentale", "Le caractère correspond plus aux descriptions de son état mental, justement, tandis que sa situation mentale peut faire référence à... Une mélancolie toujours présente, tristesse, joie, sadisme, peur.. - 𝐊𝐲𝐨𝐢𝐜𝐡𝐨𝐮 | 𝐌𝐢𝐬𝐚𝐤𝐢𝐜𝐡𝐨𝐮")
               message.channel.send(embed)
    
        }else{
        }
    }
      });

  client.on('message', message => {
    if (message.content.includes("Souffle")){
        if (message.channel.id === '715300796601729034') {
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Souffle"__**')
            .setColor("#7deb34")
            .addField("Les démons ne possèdent pas de souffle ?", "Les démons peuvent avoir un souffle suivant leur histoire, mais il sera considéré comme un pouvoir sanguinaire. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField('Compétence spécial = les attaques du souffle ??', 'non pas vraiment, "compétences spéciales" est une case que tu rempli si tu en as envie, tu peux y mettre, par exemple, "a un bon odorat sur 5km à la ronde".. - 嵐 Arachou Raichou 嵐')
            .addField("Puis-je crée un souffle ?", "Ticket + Google Doc + 10 mouvements minimum avec cohérence rôleplay, et détails des mouvements. - Moi")
           message.channel.send(embed)
        }else{

    }}
  });

  client.on('message', message => {
    if (message.content.includes("souffle")){
        if (message.channel.id === '715300796601729034') {
            const embed = new Discord.RichEmbed()
            .setTitle('**__FAQ - Questions Évidentes pour le mot "Souffle"__**')
            .setColor("#7deb34")
            .addField("Les démons ne possèdent pas de souffle ?", "Les démons peuvent avoir un souffle suivant leur histoire, mais il sera considéré comme un pouvoir sanguinaire. - 氷 𝐘𝐮𝐳𝐮𝐜𝐡𝐨𝐮 | 𝐊𝐢𝐜𝐡𝐨𝐮 花")
            .addField('Compétence spécial = les attaques du souffle ??', 'non pas vraiment, "compétences spéciales" est une case que tu rempli si tu en as envie, tu peux y mettre, par exemple, "a un bon odorat sur 5km à la ronde".. - 嵐 Arachou Raichou 嵐')
            .addField("Puis-je crée un souffle ?", "Ticket + Google Doc + 10 mouvements minimum avec cohérence rôleplay, et détails des mouvements. - Moi")
           message.channel.send(embed)
        }else{

    }}
  });

  


fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} -> Ready`);
            client.commands.set(commande.help.name, commande);
            
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
        
});


client.login("OTQ0MzQwMjE0NTIyOTc0Mjg4.YhALXA.BLkFcrpGFWpjhJZm9nbemUt0_dk")