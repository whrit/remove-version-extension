import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

function updateStatusBarVisibility(): void {
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.fileName.endsWith('requirements.txt')) {
        statusBarItem.show();
    } else {
        statusBarItem.hide();
    }
}

export function activate(context: vscode.ExtensionContext) {
    // Create status bar item
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(versions) Remove Versions"; // Uses the VS Code versions icon
    statusBarItem.tooltip = "Remove version specifiers from requirements.txt";
    statusBarItem.command = 'remove-version-extension.removeVersionSpecifiers';
    context.subscriptions.push(statusBarItem);

    // Register the command
    let disposable = vscode.commands.registerCommand('remove-version-extension.removeVersionSpecifiers', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            if (document.fileName.endsWith('requirements.txt')) {
                const text = document.getText();
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

    // Update status bar item visibility when the active editor changes
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(() => {
            updateStatusBarVisibility();
        })
    );

    // Initial visibility update
    updateStatusBarVisibility();
}

export function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}