require('shelljs/global');
// shelljs ls patterns aren't complete, use glob.sync
var glob = require('glob');
var fs = require('fs');
var argv = require('boring')();

var patterns = [ '/var/www/*/symfony/web', '/var/www/*/web', '/opt/stagecoach/apps/*/current/public' ];

patterns.forEach(function(pattern) {
  glob.sync(pattern).forEach(function(folder) {
    if (argv.verbose) {
      console.log(folder);
    }
    fs.writeFileSync(folder + '/robots.txt',
      'User-agent: *\n' +
      'Disallow: /\n'
    );
  });
});

