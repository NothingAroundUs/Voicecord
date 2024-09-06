/*
 * Voicecord, a modification for Discord's desktop app
 * Copyright (c) 2023 Voicecord and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    appendText: {
        type: OptionType.BOOLEAN,
        default: true,
        description: "Append FBI/Secret Service text to every message",
        restartNeeded: false
    }
});

const appendText = `
-# ⓘ This user is under investigation by the FBI • [review](<https://www.fbi.gov/wanted/fugitives>)
-# ⓘ This user is wanted by the United States Secret Service • [review](<https://www.secretservice.gov/investigations/mostwanted>)
-# ⓘ This user is wanted by the United States Marshal Service • [review](<https://www.usmarshals.gov/what-we-do/fugitive-apprehension/profiled-fugitives>)
`;

export default definePlugin({
    name: "FBIWarningAppender",
    description: "Appends FBI/Secret Service warning text to every message you send.",
    authors: [Devs.nau],
    patches: [
        {
            // Hook into the message send event
            find: "sendMessage",
            replacement: {
                match: /(?<=sendMessage\(\w+\){)/,
                replace: `if (settings.store.appendText) { 
                    content += appendText; 
                }`
            },
            predicate: () => settings.store.appendText // Apply if setting is enabled
        }
    ],
    settings
});
