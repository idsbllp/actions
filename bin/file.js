var { existsSync } =  require("fs");
var path =  require("path");

console.log('GITHUB_WORKSPACE: ', process.env.GITHUB_WORKSPACE)

const filename = '.github/ISSUE_TEMPLATE.md'

const pathJoin = path.join(process.env.GITHUB_WORKSPACE, filename)
console.log('filename join', pathJoin)

const isExist = existsSync(pathJoin)

console.log('isExist', isExist);
