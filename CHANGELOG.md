# Change Log
All notable changes to the ThousandtyOne "autoend" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]
- None.
- More Intelligence for Other Operaters is planned in the near future.

## [1.0.0] - 12th February 2017
- Initial Implementation from Scratch.
- Support for Automatically Placing Semi Colons in the end of the line when you type them.
- Intelligence for 'for' and 'for-each' loops so semi-colons in these constructs are not moved to end of line.

## [1.0.6] - 15th February 2017
- Improved logic to differicate true for and foreach loops from variables which begin with word 'for' or 'foreach' e.g. 'formatter'.

## [1.0.8] - 25th February 2017
- Fixed the Issue reported at: https://github.com/thousandtyone/autoend/issues/1

## [1.0.10] - 26th February 2017
- Provided Enhancement requested at: https://github.com/thousandtyone/autoend/issues/2
- Setting called "autoend.autoInsertNewline" is now added. 
- Setting "autoend.autoInsertNewline" Defaults to true but you can override it using Standard VS Code Settings if you do not want autoend to automatically move to the next line after inserting semi-colons.
- Note: Configuration is only read when plugin is activated so if you change the setting you need to restart VSCode.

## [1.0.15] - 26th February 2017
- Minor changes to wordings in Licence File to include Plugin Name and Contact Details.