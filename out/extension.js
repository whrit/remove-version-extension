"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.removeVersionSpecifiers', () => __awaiter(this, void 0, void 0, function* () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            if (document.fileName.endsWith('requirements.txt')) {
                const text = document.getText();
                const newText = text.replace(/==[\d.]+/g, '');
                yield editor.edit(editBuilder => {
                    const start = new vscode.Position(0, 0);
                    const end = new vscode.Position(document.lineCount, 0);
                    editBuilder.replace(new vscode.Range(start, end), newText);
                });
                vscode.window.showInformationMessage('Version specifiers removed successfully.');
            }
            else {
                vscode.window.showErrorMessage('Please open a requirements.txt file.');
            }
        }
        else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    }));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map