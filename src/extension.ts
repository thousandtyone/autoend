'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "autoend" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let editor = vscode.window.activeTextEditor;
    let autoInsertNewline = vscode.workspace.getConfiguration('autoend').get('autoInsertNewline');
    if(autoInsertNewline == null || autoInsertNewline == undefined)
        autoInsertNewline = true; 

    let disposable = vscode.commands.registerCommand('extension.autoend', () => {
        let lineNumber : number = editor.selection.active.line;
                let columnNumber : number = editor.selection.active.character;
                let lineText = editor.document.lineAt(lineNumber).text;
                let lineLength = lineText.length;
                let trimmedText = lineText.replace(/\s+/g, " ").trim();
                if(OkToPutSemiColonInCurrentPosition(trimmedText, lineNumber, columnNumber))
                {
                    editor.edit((textEditor)=>{       
                        textEditor.insert(new vscode.Position(lineNumber,columnNumber), ';');
                    })
                }
                else
                {
                    editor.edit((textEditor)=>{       
                        textEditor.insert(new vscode.Position(lineNumber,lineLength), ';');
                    })
                    
                    if(autoInsertNewline)
                        vscode.commands.executeCommand('editor.action.insertLineAfter');
                    else
                        vscode.commands.executeCommand('cursorEnd')
                }    
    });

    context.subscriptions.push(disposable);
}

function OkToPutSemiColonInCurrentPosition(trimmedText, lineNumber, columnNumber)
{
  var textIsALoop = trimmedText.startsWith('for(') | trimmedText.startsWith('foreach(')
                    | trimmedText.startsWith('for (') | trimmedText.startsWith('foreach (');
  var textIsAComment = trimmedText.startsWith("//")
  var alreadyEndsWithSemiColon = trimmedText.endsWith(';')
  return textIsALoop || textIsAComment || alreadyEndsWithSemiColon;
}

// this method is called when your extension is deactivated
export function deactivate() {
}