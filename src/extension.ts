import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register the command with the same identifier as in package.json
    let disposable = vscode.commands.registerCommand('remove-version-extension.removeVersionSpecifiers', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            if (document.fileName.endsWith('requirements.txt')) {
                const text = document.getText();
                // Update regex to handle more version specifiers
                const newText = text.replace(/[=~><]=?[\d.]+|@[\w\d.]+/g, '');
                
                await editor.edit(editBuilder => {
                    const start = new vscode.Position(0, 0);
                    const end = document.lineAt(document.lineCount - 1).range.end;
                    editBuilder.replace(new vscode.Range(start, end), newText);
                });
                vscode.window.showInformationMessage('Version specifiers removed successfully.');
            } else {
                vscode.window.showErrorMessage('Please open a requirements.txt file.');
            }
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}