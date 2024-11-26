# Remove Version Extension

A Visual Studio Code extension that removes version specifiers from `requirements.txt` files with a single click.

## Features

- Removes version specifiers from Python requirements.txt files
- Single-click operation via status bar button
- Supports multiple version specifier formats:
  - Exact versions (`==1.2.3`)
  - Greater than (`>1.2.3`)
  - Less than (`<1.2.3`)
  - Greater than or equal (`>=1.2.3`)
  - Less than or equal (`<=1.2.3`)
  - Compatible release (`~=1.2.3`)
  - At specifiers (`@1.2.3`)

## Usage

1. Open a `requirements.txt` file in VS Code
2. Click the "Remove Versions" button in the status bar (appears at the bottom of the window)
3. All version specifiers will be automatically removed

Before:
```
numpy==1.24.3
pandas>=1.5.0
requests~=2.31.0
```

After:
```
numpy
pandas
requests
```

## Installation

Install through VS Code Extensions. Search for "Remove Version Extension"

## Requirements

- Visual Studio Code 1.50.0 or higher

## Extension Settings

This extension contributes no additional settings.

## Known Issues

Please report issues on the [GitHub repository](https://github.com/openhands/remove-version-extension/issues).

## Release Notes

### 0.0.1

Initial release:
- Basic version removal functionality
- Status bar button for easy access
- Support for multiple version specifier formats

## License

This extension is licensed under the [MIT License](LICENSE.md).