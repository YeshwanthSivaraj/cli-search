#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import dotenv from "dotenv";

import searchResults from "../src/index.js";

const program = new Command();
dotenv.config();

async function getSearchResults(str) {
  const apiKey = process.env.APIKEY;
  const cx = process.env.CX;
  const results = await searchResults(str, apiKey, cx);

  results.forEach((result) => {
    console.log(chalk.redBright("----"));
    for (const [key, value] of Object.entries(result)) {
      console.log(`${chalk.blueBright(key)}: ${chalk.blueBright(value)}`);
    }
    console.log(chalk.redBright("----"));
  });
}

program
  .name("cli-search")
  .description("cli to search from popular search engines");

program
  .command("search")
  .description("Search for a result from the most popular search engines")
  .argument("<string>", "search term")
  .option("-f, --filter <string>", "filter to apply", "duplicate")
  .action(async (str, options) => {
    await getSearchResults(str, options);
  });

program.showHelpAfterError();
program.parse();
