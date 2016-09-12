#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const meow = require('meow');
const githubGists = require('github-gists');

const cli = meow(`
	Usage
	  $ github-gists <user>

	Options
	  -t, --token  GitHub authentication token

	Examples
	  $ github-gists kevva
	  $ github-gists kevva --token 523ef69119eadg12
`);

if (cli.input.length === 0) {
	console.error('User required');
	process.exit(1);
}

githubGists(cli.input[0], cli.flags).then(data => {
	for (const x of data) {
		console.log(`${x.description} ${chalk.dim(x.html_url)}`);
	}
});
