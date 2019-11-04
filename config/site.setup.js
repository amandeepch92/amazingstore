/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { prompt } = require('enquirer');

const skip_setup = process.env.SKIP_SETUP || false;

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

async function runSetup() {
  clear();
  console.log(
    chalk.red(
      figlet.textSync('Amazing Store', { horizontalLayout: 'fitted' })
    )
  );

  // Update site configuration
  fs.readFile('./config/site.config.js', 'utf8', (err, data) => {
    fs.writeFile(path.join(ROOT, '/config/site.config.js'), data, 'utf8', (err) => { });
  });

}
  if (!skip_setup) {
    runSetup();
  }
