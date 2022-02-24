const vscode = require('vscode');
const open = require('open');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'socorro.socorro',
    async function () {
      const searchQuery = await vscode.window.showInputBox({
        placeHolder: 'Search for memes',
        prompt: 'meme',
      });
      if (searchQuery === '') {
        console.log(searchQuery);
        vscode.window.showErrorMessage(
          'A search query is mandatory to execute this action'
        );
      }

      if (searchQuery !== undefined) {
        const searchUrl = `https://giphy.com/search/${searchQuery}`;
        open(searchUrl);
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
