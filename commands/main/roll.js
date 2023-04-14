const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Rolls a d20"),
    async execute(interaction) {
        await interaction.reply("rolled a d20");
    }
};