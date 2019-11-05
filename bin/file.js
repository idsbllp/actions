var { existsSync } =  require("fs");
var path =  require("path");

const spawn = require('child_process').spawn;
const pwd = spawn('pwd');

pwd.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

pwd.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

pwd.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

console.log('GITHUB_WORKSPACE: ', process.env.GITHUB_WORKSPACE)

const filename = '.github/ISSUE_TEMPLATE.md'

const pathJoin = path.join(process.env.GITHUB_WORKSPACE, filename)
console.log('filename join', pathJoin)

const isExist = existsSync(pathJoin)

console.log('isExist', isExist);
