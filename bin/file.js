const path = 'path';

console.log('GITHUB_WORKSPACE: ', process.env.GITHUB_WORKSPACE)

const filename = '.github/ISSUE_TEMPLATE.md'

console.log('filename join', join(process.env.GITHUB_WORKSPACE, filename))
