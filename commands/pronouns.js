const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const pronounDB = require('../modules/pronoundb'); // Your PronounDB module

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pronouns')
        .setDescription('Fetches a user\'s pronouns from PronounDB.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to fetch pronouns for')
                .setRequired(true)),

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const pronouns = await pronounDB.getPronouns(user.id);

        if (!pronouns) {
            return interaction.reply('Could not find pronouns for this user.');
        }

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`${user.username}'s Pronouns`)
            .setDescription(pronouns)
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
