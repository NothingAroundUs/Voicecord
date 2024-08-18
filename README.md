# Voicevord - Discord Client Modifier

A powerful client-side modification tool for Discord that allows users to customize and enhance the Discord experience. This modifier provides the ability to add custom themes, plugins, and tweak Discord's behavior beyond the native functionality.

## Table of Contents
- [Voicevord - Discord Client Modifier](#voicevord---discord-client-modifier)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Disclaimer](#disclaimer)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [Plugins](#plugins)
  - [Usage](#usage)
  - [Creating Plugins](#creating-plugins)
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

All official plugins are stored in the `src/plugins` folder. However, unless you plan to [submit your plugin](#features-coming-soon) to the official repository, you should not put your plugin there, as you will run into conflicts.

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

<h3>Plugin Setup</h3>

First, decide whether you want to use the `src/plugins` or `src/userplugins folder`.

<h3>Plugin Structure</h3>

There are 3 special files you can create here:

- Index.ts(x):
  
    Your plugin’s entry point. This is where most of your plugin’s code will live and where you define things like its name and description.

    Code in this file runs in the browser, so you can use all browser APIs here.

    Node.js APIs like `fs` or `child_process` are not available here. If you need them, you can do so in the `native.ts` file.

- ReadMe.md:

    Markdown documentation for your plugin. This file should contain a description of your plugin and instructions how to use it. Screenshots, videos or gifs are highly recommended. This will be used to generate a custom webpage for your plugin.

- Native.ts:

    Your plugin’s native entry point. This code will run inside NodeJS instead of the browser. You can use all Node.JS apis here, such as `fs` or `child_process`.

    Browser APIs are not available here. If you need them, you can do so in the `index.ts` file.

<h3>Plugin Boilerplate</h3>

1. Start creating your plugin by adding an `index.ts` file inside your plugin’s folder.
2. Past this into the `index.ts` file to prepare it with our template
    ```typescript
    import { Devs } from "@utils/constants";
    import definePlugin from "@utils/types";

    export default definePlugin({
        name: "name",
        description: "description",
        authors: [Devs.author],
    });
    ```
3. Fill out the `name` and `description` fields in the `definePlugin` call.
    ```ts "MyCoolPlugin" "I am very cute!"
        export default definePlugin({
            name: "MyCoolPlugin", //<<<<<
            description: "I am very cute!", //<<<<<
            authors: [Devs.author],
        });
    ```
4. For the authors property, how you do this will depend on whether you’re making a plugin or a userplugin.
   - Plugin:
        ```ts ins="Devs.YourName"
        export default definePlugin({
            name: "MyCoolPlugin",
            description: "I am very cute!",
            authors: [Devs.YourName], //<<<<<
        });
        ```
    - Userplugin:
        ```ts ins="{ name: \"Your Name\", id: 1234567890n }"
        export default definePlugin({
            name: "MyCoolPlugin",
            description: "I am very cute!",
            authors: [{ name: "Your Name", id: 1234567890n }], //<<<<<
        });
        ```
5. Save your file and it should automatically format it and insert the following license header on the top.
    ```ts
    /*
    * Voicecord, a Discord client mod
    * Copyright (c) 2024 Hussein Taha and contributors*
    * SPDX-License-Identifier: GPL-3.0-or-later
    */
    ```
    If you want, you can change it from `Hussein Taha and contributors` to your own name. But this is not strictly necessary, you own the code either way (and are already included in the “contributors” part).

This is all of the boilerplate needed for a Voicecord plugin. You can now start making your plugin!

# License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the [LICENSE](LICENSE) file for details.

# Features Coming Soon

1. Windows and Linux support.
2. Official website.
3. Plugin Submission.
4. A better way to install plugins.