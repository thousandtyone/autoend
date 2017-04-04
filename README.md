# ThousandtyOne AutoEnd (A Quick Way To Place Semi Colons @ End Of Line)
This Extension Automatically inserts the semi-colons on the right place and wraps your code to the next line the moment you type the semi-colon key on your keyboard.

## Features

Quickly and automatically moves semi-colons to the end of line just by hitting the ; key on your keyboard.
For example:

>**Console.WriteLine("Test";)**  

**Automatically** becomes:

>**Console.WriteLine("Test");**

And also automatically moves your cursor to the next line.

Works best with Visual Studio C# Extension, or any extension which automatically closes bracks and quotes. So the typing experience is:

> **Console.Writeline("Test;**

Which Automatically Produces:

> **Console.WriteLine("Test");**

When the extension moves the semi-colon to the end of the line it also moves your cursor to the next line, thereby making your typing very fluid without having to manually put semi-colons explictly at the end of each line or even having to hit the enter key to move to the next line.

> **Note**: Use autoend.autoInsertNewline in VS Code settings to control if autoend automically inserts a new line and moves you to the new line. Default behavior is to automtically move to new line. To prevent automatic move to new line change this setting to false. Visual Studio Code restart is required after setting change.

The Extension understands context of the code in which it executes; so semi-colons will not move to end of line automatically for, 'for' or 'foreach' loops!

> **Note**: For languages like Python which use colons instead of semi-colons to end the line use the autoend.autoendWithColon setting and set it to true. This disables moving of semi-colons to the end of the line and does the same thing with colons to make experience with languages like python (which use colons instead of semi-colons to end a line or indicate starting of code blocks) better. Also note that in this mode the default semi-colon key function as is and you have to use ALT+: for the plugin to automatically move your colons to the end of line. This is done to play nice with Vim Plugins. You can of course override this behavior and map the defaut semi-colon key to extension.colon.autoend command in keybindings.json described https://code.visualstudio.com/docs/getstarted/keybindings if you dont use Vim based Plugins.

## Known Issues

Please Report all issues in Github.

## Release Notes

First version released.

### 1.0.0

Initial release of Extension with basic features.

### LICENSE

The code is currently released under GPL-2 but if you would preffer a different license please reach out to us and we'll be happy to help you. If you would like to get involved in the project feel free to reach out to us as well.

### Feedback

The extension is free; but we **fully** support it and stand behind it. If you face any issues with this extension or have ideas that would improve the extension please reach out to us at contact@thousandtyone.com.

(We have a feeling you'll find us responsive and willing to help.:))

### Contact

contact@thousandtyone.com
