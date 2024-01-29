const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits, Collection} = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commands = new Collection();
const slashcommands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    slashcommands.push(command.data.toJSON());
    commands.set(command.data.name, command);
}

client.on('ready', () => {
    const inviteLink = `https://discord.com/api/oauth2/authorize?client_id=${config.botClientId}&permissions=139586717696&scope=bot%20applications.commands`;
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Invite Link: ${inviteLink}`);
    const rest = new REST({ version: '9' }).setToken(config.botToken);

    // Register slash commands for all guilds
    rest.put(Routes.applicationCommands(config.botClientId), { body: slashcommands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('Error executing command:', error);
        await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
    }
});

client.login(config.botToken);
