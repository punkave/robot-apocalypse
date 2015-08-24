require('shelljs/global');
var fs = require('fs');

var patterns = [ '/var/www/*/web', '/opt/stagecoach/apps/*/current/public' ];

patterns.forEach(function(pattern) {
  ls(pattern).forEach(function(folder) {
    fs.writeFileSync(folder + '/robots.txt',
      'User-agent: *\n' +
      'Disallow: /\n'
    );
  });
});

