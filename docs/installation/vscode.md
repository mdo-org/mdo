# How to set up MDo on Visual Studio Code

You can find the MDo extension by following this link:  
https://marketplace.visualstudio.com/items?itemName=alexishevia.mdo-extension-code

Or directly in VS Code:

1. Open the command palette (Ctrl+Shift+P)
2. Type: "Extensions: Install Extensions"
3. Type: "MDo"

<img src="/installation/vscode_install_mdo.png" />

Once installed, you can run MDo on the current file by:

1. Opening the command palette (Control+Shift+P)
2. Typing "Run MDo"

<img src="/installation/vscode_run_mdo.png" />

Optionally, you can add some keybindings to your `keybindings.json` file:

```
[
    {
        "key": "ctrl+m ctrl+d",
        "command": "extension.runMDo"
    }
]
```
