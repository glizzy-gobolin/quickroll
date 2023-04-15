const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Activation command")
        .addSubcommand(subcommand =>
            subcommand
                .setName("dice")
                .setDescription("Roll some dice")
                .addStringOption(option =>
                    option
                        .setName("dice")
                        .setDescription("The dice, modifiers, and damage types to roll"))
                .addBooleanOption(option =>
                    option
                        .setName("detailed")
                        .setDescription("Display each die rolled + subtotals in calculations")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("help")
                .setDescription("Display info about how to use the roll command")),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === "dice") {
            await interaction.reply("Rolled a d20");
        } else if (interaction.options.getSubcommand() === "help") {
            await interaction.reply({
                content:
                    "Wanna roll some dice? Here's how:\n" +
                    "\n`/roll dice` with no options will roll a d20 by default\n" +
                    "\nOptions:\n" +
                    "\tdice\tdice, modifiers, and damage types to be calculated\n" +
                    "\tdetails\tset to `True` to show the results of each die rolled + subtotals in calculations\n" +
                    "\nDice string examples:\n" +
                    "\t`adv`\trolls 2d20 and uses the higher one (only applies to d20 rolls)\n" +
                    "\t`dis + 2`\trolls 2d20 and uses the lower one , then adds 2 (only applies to d20 rolls)" +
                    "\t`2d6 - 3`\trolls 2 6-sided dice, then subtracts 3\n" +
                    "\t`d8+3 slashing + 2d8 radiant`\trolls dice and calculates, and displays results separated by damage type\n" +
                    "\t`crit 3d6 + 4`\trolls dice, doubles the result, then adds modifiers\n" +
                    "\t`(half 2d8+3) + d4`\tthe result from inside the brackets is halved, rounded down",
                ephemeral: true
            });
        }
    }
};