#!/usr/bin/env node

import chalk from "chalk";
const args = process.argv;

const commands = ["search"];

const usage = function () {
  const usageText = `
  cli-search helps you get search results from the popular search engines.

  usage:
    cli-search <command>

    commands include: 

    search:   used to search
    help:     used to display the usage guide
  `;

  console.log(usageText);
};

function errorLog(error) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

if (args.length > 3) {
  errorLog("Only one argument can be accepted");
  usage();
}

switch (args[2]) {
  case "help":
    usage();
    break;
  case "search":
    break;
  default:
    errorLog("Invalid command passed");
    usage();
}
