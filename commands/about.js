const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Provides information about the bot'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('About This Bot')
            .setDescription('This bot allows users to check and share their pronouns through PronounDB.')
            .addFields({
                name: 'How to Use',
                value: 'Register your pronouns on PronounDB and use /pronouns command to check others\' pronouns.'
            })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
