const path = require('path');
var shell = require('shelljs');

var exePath = path.resolve(__dirname, './test.sh');
console.log(exePath);

if (!shell.which('java')) {
  shell.echo('Sorry, this script requires Java');
  shell.exit(1);
}

shell.exec('java -version', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});