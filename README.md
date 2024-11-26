# Remove Version Extension

## Description

A VS Code extension to remove version specifiers from `requirements.txt` files. For example, it converts `numpy==1.24.3` to `numpy`.

## Deployment Instructions on Mac OS

1. **Prerequisites**:
    - [Node.js](https://nodejs.org/) installed.
    - [VS Code](https://code.visualstudio.com/) installed.

2. **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd remove_version_extension
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Compile the Extension**:
    ```bash
    npm run compile
    ```

5. **Package the Extension**:
    ```bash
    npm install -g @vscode/vsce
    vsce package
    ```

6. **Install the Extension in VS Code**:
    - Open VS Code.
    - Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
    - Click on the three dots (`...`) in the top-right corner.
    - Select `Install from VSIX...`.
    - Navigate to the generated `.vsix` file and install it.

## Usage

1. **Open a `requirements.txt` File** in VS Code.

2. **Run the Extension Command**:
    - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
    - Type `Remove Version Specifiers` and select the command.

3. **Result**:
    - All version specifiers (e.g., `==1.24.3`) will be removed from the dependencies.

## Uninstall

To uninstall the extension, go to the Extensions view, find the **Remove Version Extension**, and click `Uninstall`.

## Contributing

Feel free to open issues or submit pull requests.

## License

MIT License