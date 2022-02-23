const { MessageButton, MessageEmbed } = require('discord.js')
/*
    {
        button: MessageButton,
        embed: MessageEmbed,
        name: String,
        id: String
    }
*/

module.exports = [
    {
        button: new MessageButton().setCustomId(`openTicket-933099904128151572`).setLabel(`Suporte`).setEmoji('📞').setStyle('PRIMARY'),
        embed: new MessageEmbed().setDescription('Bem vindo ao suporte ao suporte do servidor'),
        name: 'suporte',
        id: '933099904128151572',
        staffRole: '928349357315600396'
    }
]