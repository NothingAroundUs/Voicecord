# Voicevord - Discord Client Modifier

A powerful client-side modification tool for Discord that allows users to customize and enhance the Discord experience. This modifier provides the ability to add custom themes, plugins, and tweak Discord's behavior beyond the native functionality.

## Table of Contents
- [Voicevord - Discord Client Modifier](#voicevord---discord-client-modifier)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Disclaimer](#disclaimer)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Windows](#windows)
    - [MacOS](#macos)
    - [Linux](#linux)
  - [Configuration](#configuration)
    - [Plugins](#plugins)
  - [Usage](#usage)
  - [Creating Plugins](#creating-plugins)
- [Contributing](#contributing)
- [License](#license)
- [Features Coming Soon](#features-coming-soon)

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

### Windows
    No support Yet.

### MacOS
<h3> Installation: </h3>
  1. Open a terminal and point it to the `Documents` folder:
      ```
      cd Documents
      ```

  2. Clone the Voicecord repository:
     ```
     git clone https://github.com/NothingAroundUs/Voicevord.git
     ````

  3. Finally point your terminal to the newly created Voicecord folder:
     ```
     cd Voicevord
     ```
<h3>Installing Dependencies: </h3>

  - The next step is installing Voicecords' dependencies. We use the pnpm package manager. Please do not use `npm` or `yarn`!

  1. Issue the following command:
        ```
        pnpm install --frozen-lockfile
        ```
  - Voicecord might add, remove or update dependencies at any time. Thus, you might receive errors like Cannot find package "foobar" imported from ... after updating.
If this happens, you should run the same command once again to update the installed dependencies.

<h3 id="build">Building Voicecord: </h3>

  - The last step is compiling the Voicecord code.
  1. Run the build script:
      ```
      pnpm build
      ```

<h3>Installing your `BETA` build: </h3>

  - You’re done! Now you can install your custom build of Voicecord.
  1. Inject the build:
        Injecting the build will start the installer which you will use to install the beta build of Voicecord

        ```
        pnpm inject
        ```

### Linux
    No support Yet.

## Configuration

### Plugins
> [!CAUTION]
> These instructions are provided for **advanced users**.
> 
> If you don’t understand these instructions, you should not attempt to install custom plugins.
> 
> We do not provide support with custom plugins / installs, and you are responsible for any issues that may arise from using them.
> 
> If you run into issues and can’t figure them out yourself, please stick to the Voicecord build you made.

<h3>Adding Plugins</h3>

Open your Voicecord folder. Inside it, you should find a folder called `src`. This folder houses all of Voicecord's source code.

<h3>Creating the `userplugins` folder</h3>

All official plugins are stored in the `src/plugins` folder. However, unless you plan to [submit your plugin]() to the official repository, you should not put your plugin there, as you will run into conflicts.

Instead, you will want to use the `src/userplugins` folder. This folder is reserved for custom / private plugins.

This folder won’t exist yet, so you’ll have to first create it. Navigate to the `src` folder and create a new folder called `userplugins`.

<h3>Adding your plugin</h3>

Inside the `userplugins` folder, you can now add your plugin.

Your plugin should be either a simple `myCoolPlugin.ts` or `myCoolPlugin.tsx` file, or a folder containing an `index.ts` or `index.tsx` file.

Place it inside the previously created userplugins folder.

>[!IMPORTANT]
> ##### Good:
>   ```src/userplugins/myCoolPlugin.ts```
>   ```src/userplugins/myCoolPlugin/index.tsx```
> ##### Bad:
>   ```src/userplugins/myCoolPlugin/myCoolPlugin.ts```
>   ```src/userplugins/coolPlugins/myCoolPlugin/index.tsx```

<h3>Building Voicecord</h3>

The last step is [rebuilding Vencord](#build).

Restart Discord and your plugin should show up in the plugins tab!

## Usage

Once the Voicecord is installed:
1. Open Discord, and navigate to the new "Voicecord" section in your settings.
2. You should find 6 tabs titled:
   ```
   1. Voicecord
   2. Plugins
   3. Themes
   4. Updater
   5. Cloud
   6. Backup & Restor
   ```
3. From there you can access each page and modify your discord client.

## Creating Plugins

<h3>Prerequisites</h3>
knowledge of the following:

- JavaScript/TypeScript knowledge

- Basic regex knowledge

- Basic knowledge of the command line

- Basic knowledge of how to use chrome devtools

- The ability to understand code from just reading it, without requiring documentation

- Basic react knowledge (if you want to do anything with ui)

# Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Commit your changes (git commit -m 'Add a new feature').
4. Push to the branch (git push origin feature/new-feature).
5. Open a pull request.

# License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the [LICENSE](LICENSE) file for details.

# Features Coming Soon

1. Windows and Linux support.
2. Official website.
3. Plugin Submission.
4. A better way to install plugins.