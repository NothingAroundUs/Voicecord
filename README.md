# Discord Client Modifier - Voicevord

A powerful client-side modification tool for Discord that allows users to customize and enhance the Discord experience. This modifier provides the ability to add custom themes, plugins, and tweak Discord's behavior beyond the native functionality.

## Table of Contents
- [Discord Client Modifier - Voicevord](#discord-client-modifier---voicevord)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Disclaimer](#disclaimer)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Windows:](#windows)
    - [MacOS:](#macos)
  - [Configuration](#configuration)
    - [Plugins](#plugins)
    - [Themes](#themes)
  - [Usage](#usage)
    - [Plugin Management](#plugin-management)
    - [Theme Management](#theme-management)
  - [Creating Plugins](#creating-plugins)

## Features
- Inject custom CSS and JavaScript into the Discord client.
- Extend Discord functionality using plugins.
- Apply custom themes to change the look and feel of Discord.
- Built-in plugin and theme manager.
- Compatible with macOS (Windows and Linux support is coming soon).
- Custom plugin support.

## Disclaimer

This is a **third-party modification** of Discord's client and is **against Discord’s Terms of Service (ToS)**. Use it at your own risk. This project is provided as-is with no warranty, and the developers are not responsible for any bans or account terminations resulting from its use.

## Prerequisites

- A working Discord client (stable, PTB, or canary).
- Node.js (for plugin and theme development).
- Administrator privileges on your computer.

## Installation
- Prerequisites:
  - [Download git](https://git-scm.com/downloads)
  - [Download Node.js](https://nodejs.org/en/download/package-manager)
  - [Download pnpm](https://pnpm.io/installation)

Make sure that all of them are added to your PATH, you will need it.

To verify correct installation, run the following commands. All 3 should print the version of the respective software without errors:

```bash
git --version
node --version
pnpm --version
```

The next part relies on your OS to build correctly (MAKE SURE YOU ARE USING THE CORRECT OS COMMANDS).

### Windows:
    No support Yet.

### MacOS:

1. Open a terminal and point it to the `Documents` folder:
    ```
    cd Documents
    ```

2. Clone the Voicecord repository:
   ```
   git clone https://github.com/NothingAroundUs/Voicevord.git
   ````

3. Finally point your terminal to the newly created Vencord folder:
   ```
   cd Voicevord
   ```

## Configuration

### Plugins
To install or configure plugins:
1. Place the plugin files (`.js` or `.json`) into the `plugins` folder located in the installation directory.
2. Enable or disable plugins via the plugin manager inside the Discord settings.

### Themes
To install or configure themes:
1. Place the theme files (`.css`) into the `themes` folder.
2. Enable or disable themes via the theme manager inside the Discord settings.

## Usage

Once the modifier is installed:
1. Open Discord, and navigate to the new "Modifier" tab in your settings.
2. From here, you can enable/disable plugins, apply themes, or manage various settings.

### Plugin Management
- Go to `Settings > Modifier > Plugins` to see the installed plugins.
- Toggle them on or off, and configure specific settings for each plugin.

### Theme Management
- Go to `Settings > Modifier > Themes` to select from installed themes or upload your own.

## Creating Plugins

Plugins are JavaScript files that enhance or modify Discord’s functionality. Here's an example of a basic plugin structure:

```javascript
module.exports = {
    name: 'Example Plugin',
    description: 'A simple plugin example.',
    author: 'Your Name',
    version: '1.0.0',
    
    start() {
        console.log('Plugin started!');
        // Add your custom functionality here
    },
    
    stop() {
        console.log('Plugin stopped!');
    }
};
