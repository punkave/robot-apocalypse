Installs a `robots.txt` file that blocks all indexing for both PHP and node/stagecoach sites found on the server. Usually run as a cron job.

A `robots.txt` file that disallows indexing is installed in `/var/www/*/web` and `/opt/stagecoach/apps/*/current/public`.

We use this on staging servers where a more complete lockdown, such as restricting access by password or IP address, is not required and we simply want to avoid obsolete content being found in Google.

## Usage

Run it as a user with appropriate privileges to create `robots.txt` files in the above-mentioned places:

```
robot-apocalypse
```

## Warnings

This obviously does not instantly purge results from Google. It takes time for search engines to re-crawl a site. Only well-behaved search engine spiders pay attention to `robots.txt` files.

If what you want is security, this is the wrong tool for your needs. You should set a password for access to your content, or lock it down by other means.

If you don't want a firm "go away, no indexing" rule for every site... don't run this.

## Options

Add `--verbose` to print the path to each folder in which a `robots.txt` file is created.
