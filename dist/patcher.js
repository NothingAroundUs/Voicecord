// Vencord e5966b3
// Standalone: false
// Platform: darwin
// Updater Disabled: false
"use strict";var Xr=Object.create;var ye=Object.defineProperty;var Qr=Object.getOwnPropertyDescriptor;var $r=Object.getOwnPropertyNames;var en=Object.getPrototypeOf,tn=Object.prototype.hasOwnProperty;var v=(e,t)=>()=>(e&&(t=e(e=0)),t);var ee=(e,t)=>{for(var r in t)ye(e,r,{get:t[r],enumerable:!0})},pt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of $r(t))!tn.call(e,i)&&i!==r&&ye(e,i,{get:()=>t[i],enumerable:!(n=Qr(t,i))||n.enumerable});return e};var Oe=(e,t,r)=>(r=e!=null?Xr(en(e)):{},pt(t||!e||!e.__esModule?ye(r,"default",{value:e,enumerable:!0}):r,e)),gt=e=>pt(ye({},"__esModule",{value:!0}),e);var c=v(()=>{"use strict"});var fe=v(()=>{"use strict";c()});function he(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var dt=v(()=>{"use strict";c()});var sn={};function te(...e){let t={cwd:yt};return Me?_e("flatpak-spawn",["--host","git",...e],t):_e("git",e,t)}async function rn(){return(await te("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function nn(){await te("fetch");let e=(await te("branch","--show-current")).stdout.trim();if(!((await te("ls-remote","origin",e)).stdout.length>0))return[];let n=(await te("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return n?n.split(`
`).map(i=>{let[o,a,...s]=i.split("/");return{hash:a,author:o,message:s.join("/").split(`
`)[0]}}):[]}async function on(){return(await te("pull")).stdout.includes("Fast-forward")}async function an(){return!(await _e(Me?"flatpak-spawn":"node",Me?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:yt})).stderr.includes("Build failed")}var vt,pe,mt,It,yt,_e,Me,At=v(()=>{"use strict";c();fe();vt=require("child_process"),pe=require("electron"),mt=require("path"),It=require("util");dt();yt=(0,mt.join)(__dirname,".."),_e=(0,It.promisify)(vt.execFile),Me=!1;process.env.PATH=`/usr/local/bin:${process.env.PATH}`;pe.ipcMain.handle("VencordGetRepo",he(rn));pe.ipcMain.handle("VencordGetUpdates",he(nn));pe.ipcMain.handle("VencordUpdate",he(on));pe.ipcMain.handle("VencordBuild",he(an))});var Ct=v(()=>{"use strict";c();At()});var Le={};ee(Le,{fetchTrackData:()=>ln});async function Ge(e){let{stdout:t}=await xt("osascript",e.map(r=>["-e",r]).flat());return t}function wt(e,t){let r=new URL("https://tools.applemediaservices.com/api/apple-media/music/US/search.json");return r.searchParams.set("types",e),r.searchParams.set("limit","1"),r.searchParams.set("term",t),r}async function cn({id:e,name:t,artist:r,album:n}){if(e===k?.id){if("data"in k)return k.data;if("failures"in k&&k.failures>=5)return null}try{let[i,o]=await Promise.all([fetch(wt("songs",r+" "+n+" "+t),St).then(f=>f.json()),fetch(wt("artists",r.split(/ *[,&] */)[0]),St).then(f=>f.json())]),a=i?.songs?.data[0]?.attributes.url,s=i?.songs?.data[0]?.id?`https://song.link/i/${i?.songs?.data[0]?.id}`:void 0,u=i?.songs?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512"),h=o?.artists?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512");return k={id:e,data:{appleMusicLink:a,songLink:s,albumArtwork:u,artistArtwork:h}},k.data}catch(i){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",i),k={id:e,failures:(e===k?.id&&"failures"in k?k.failures:0)+1},null}}async function ln(){try{await xt("pgrep",["^Music$"])}catch{return null}if(await Ge(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await Ge(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),r=await Ge(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[n,i,o,a,s]=r.split(`
`).filter(f=>!!f),u=Number.parseFloat(s),h=await cn({id:n,name:i,artist:a,album:o});return{name:i,album:o,artist:a,playerPosition:t,duration:u,...h}}var Tt,bt,xt,St,k,Dt=v(()=>{"use strict";c();Tt=require("child_process"),bt=require("util"),xt=(0,bt.promisify)(Tt.execFile);St={headers:{"user-agent":"Mozilla/5.0 (Windows NT 10.0; rv:125.0) Gecko/20100101 Firefox/125.0"}},k=null});var Ne={};ee(Ne,{initDevtoolsOpenEagerLoad:()=>un});function un(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Et=v(()=>{"use strict";c()});var ge,kt=v(()=>{"use strict";c();ge=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let u=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(h=>h(s,u)),i.pathListeners.get(u)?.forEach(h=>h(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function ze(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},ze(e[r],n)):e[r]??=n}return e}var Pt=v(()=>{"use strict";c()});var Rt,z,Ae,re,U,ne,Ue,je,Ot,Ce,ie=v(()=>{"use strict";c();Rt=require("electron"),z=require("path"),Ae=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,z.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,z.join)(Rt.app.getPath("userData"),"..","Vencord")),re=(0,z.join)(Ae,"settings"),U=(0,z.join)(Ae,"themes"),ne=(0,z.join)(re,"quickCss.css"),Ue=(0,z.join)(re,"settings.json"),je=(0,z.join)(re,"native-settings.json"),Ot=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],Ce=process.argv.includes("--vanilla")});function Mt(e,t){try{return JSON.parse((0,B.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var we,B,S,fn,Vt,_t,Z=v(()=>{"use strict";c();fe();kt();Pt();we=require("electron"),B=require("fs");ie();(0,B.mkdirSync)(re,{recursive:!0});S=new ge(Mt("renderer",Ue));S.addGlobalChangeListener(()=>{try{(0,B.writeFileSync)(Ue,JSON.stringify(S.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});we.ipcMain.handle("VencordGetSettingsDir",()=>re);we.ipcMain.on("VencordGetSettings",e=>e.returnValue=S.plain);we.ipcMain.handle("VencordSetSettings",(e,t,r)=>{S.setData(t,r)});fn={plugins:{}},Vt=Mt("native",je);ze(Vt,fn);_t=new ge(Vt);_t.addGlobalChangeListener(()=>{try{(0,B.writeFileSync)(je,JSON.stringify(_t.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var Lt={};var Gt,Nt=v(()=>{"use strict";c();Z();Gt=require("electron");Gt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=S.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var Ut={};var zt,jt=v(()=>{"use strict";c();Z();zt=require("electron");zt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!S.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var Fe={};ee(Fe,{resolveRedirect:()=>pn});function Bt(e){return new Promise((t,r)=>{let n=(0,Ft.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?Bt(i.headers.location):e)});n.on("error",r),n.end()})}async function pn(e,t){return hn.test(t)?Bt(t):t}var Ft,hn,Zt=v(()=>{"use strict";c();Ft=require("https"),hn=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var Be={};ee(Be,{makeDeeplTranslateRequest:()=>gn});async function gn(e,t,r,n){let i=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:n}),a=await o.text();return{status:o.status,data:a}}catch(o){return{status:-1,data:String(o)}}}var Wt=v(()=>{"use strict";c()});var Ze={};ee(Ze,{readRecording:()=>dn});async function dn(e,t){t=(0,de.normalize)(t);let r=(0,de.basename)(t),n=(0,de.normalize)(Ht.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,Kt.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var Ht,Kt,de,Yt=v(()=>{"use strict";c();Ht=require("electron"),Kt=require("fs/promises"),de=require("path")});var We={};ee(We,{sendToOverlay:()=>vn});function vn(e,t){t.messageType=t.type;let r=JSON.stringify(t);Jt??=(0,qt.createSocket)("udp4"),Jt.send(r,42069,"127.0.0.1")}var qt,Jt,Xt=v(()=>{"use strict";c();qt=require("dgram")});var Qt,$t=v(()=>{c();Qt=`/* eslint-disable */

/**
 * This file is part of AdGuard's Block YouTube Ads (https://github.com/AdguardTeam/BlockYouTubeAdsShortcut).
 *
 * Copyright (C) AdGuard Team
 *
 * AdGuard's Block YouTube Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard's Block YouTube Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard's Block YouTube Ads.  If not, see <http://www.gnu.org/licenses/>.
 */

const hiddenCSS = [
    "#__ffYoutube1",
    "#__ffYoutube2",
    "#__ffYoutube3",
    "#__ffYoutube4",
    "#feed-pyv-container",
    "#feedmodule-PRO",
    "#homepage-chrome-side-promo",
    "#merch-shelf",
    "#offer-module",
    '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
    "#pla-shelf",
    "#premium-yva",
    "#promo-info",
    "#promo-list",
    "#promotion-shelf",
    "#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer",
    "#search-pva",
    "#shelf-pyv-container",
    "#video-masthead",
    "#watch-branded-actions",
    "#watch-buy-urls",
    "#watch-channel-brand-div",
    "#watch7-branded-banner",
    "#YtKevlarVisibilityIdentifier",
    "#YtSparklesVisibilityIdentifier",
    ".carousel-offer-url-container",
    ".companion-ad-container",
    ".GoogleActiveViewElement",
    '.list-view[style="margin: 7px 0pt;"]',
    ".promoted-sparkles-text-search-root-container",
    ".promoted-videos",
    ".searchView.list-view",
    ".sparkles-light-cta",
    ".watch-extra-info-column",
    ".watch-extra-info-right",
    ".ytd-carousel-ad-renderer",
    ".ytd-compact-promoted-video-renderer",
    ".ytd-companion-slot-renderer",
    ".ytd-merch-shelf-renderer",
    ".ytd-player-legacy-desktop-watch-ads-renderer",
    ".ytd-promoted-sparkles-text-search-renderer",
    ".ytd-promoted-video-renderer",
    ".ytd-search-pyv-renderer",
    ".ytd-video-masthead-ad-v3-renderer",
    ".ytp-ad-action-interstitial-background-container",
    ".ytp-ad-action-interstitial-slot",
    ".ytp-ad-image-overlay",
    ".ytp-ad-overlay-container",
    ".ytp-ad-progress",
    ".ytp-ad-progress-list",
    '[class*="ytd-display-ad-"]',
    '[layout*="display-ad-"]',
    'a[href^="http://www.youtube.com/cthru?"]',
    'a[href^="https://www.youtube.com/cthru?"]',
    "ytd-action-companion-ad-renderer",
    "ytd-banner-promo-renderer",
    "ytd-compact-promoted-video-renderer",
    "ytd-companion-slot-renderer",
    "ytd-display-ad-renderer",
    "ytd-promoted-sparkles-text-search-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-search-pyv-renderer",
    "ytd-single-option-survey-renderer",
    "ytd-video-masthead-ad-advertiser-info-renderer",
    "ytd-video-masthead-ad-v3-renderer",
    "YTM-PROMOTED-VIDEO-RENDERER",
];
/**
* Adds CSS to the page
*/
const hideElements = () => {
    const selectors = hiddenCSS;
    if (!selectors) {
        return;
    }
    const rule = selectors.join(", ") + " { display: none!important; }";
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
};
/**
* Calls the "callback" function on every DOM change, but not for the tracked events
* @param {Function} callback callback function
*/
const observeDomChanges = callback => {
    const domMutationObserver = new MutationObserver(mutations => {
        callback(mutations);
    });
    domMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
};
/**
* This function is supposed to be called on every DOM change
*/
const hideDynamicAds = () => {
    const elements = document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");
    if (elements.length === 0) {
        return;
    }
    elements.forEach(el => {
        if (el.parentNode && el.parentNode.parentNode) {
            const parent = el.parentNode.parentNode;
            if (parent.localName === "ytd-rich-item-renderer") {
                parent.style.display = "none";
            }
        }
    });
};
/**
* This function checks if the video ads are currently running
* and auto-clicks the skip button.
*/
const autoSkipAds = () => {
    // If there's a video that plays the ad at this moment, scroll this ad
    if (document.querySelector(".ad-showing")) {
        const video = document.querySelector("video");
        if (video && video.duration) {
            video.currentTime = video.duration;
            // Skip button should appear after that,
            // now simply click it automatically
            setTimeout(() => {
                const skipBtn = document.querySelector("button.ytp-ad-skip-button");
                if (skipBtn) {
                    skipBtn.click();
                }
            }, 100);
        }
    }
};
/**
* This function overrides a property on the specified object.
*
* @param {object} obj object to look for properties in
* @param {string} propertyName property to override
* @param {*} overrideValue value to set
*/
const overrideObject = (obj, propertyName, overrideValue) => {
    if (!obj) {
        return false;
    }
    let overriden = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key === propertyName) {
            obj[key] = overrideValue;
            overriden = true;
        } else if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
            if (overrideObject(obj[key], propertyName, overrideValue)) {
                overriden = true;
            }
        }
    }
    return overriden;
};
/**
* Overrides JSON.parse and Response.json functions.
* Examines these functions arguments, looks for properties with the specified name there
* and if it exists, changes it's value to what was specified.
*
* @param {string} propertyName name of the property
* @param {*} overrideValue new value for the property
*/
const jsonOverride = (propertyName, overrideValue) => {
    const nativeJSONParse = JSON.parse;
    JSON.parse = (...args) => {
        const obj = nativeJSONParse.apply(this, args);
        // Override it's props and return back to the caller
        overrideObject(obj, propertyName, overrideValue);
        return obj;
    };
    // Override Response.prototype.json
    Response.prototype.json = new Proxy(Response.prototype.json, {
        async apply(...args) {
            // Call the target function, get the original Promise
            const result = await Reflect.apply(...args);
            // Create a new one and override the JSON inside
            overrideObject(result, propertyName, overrideValue);
            return result;
        },
    });
};
// Removes ads metadata from YouTube XHR requests
jsonOverride("adPlacements", []);
jsonOverride("playerAds", []);
// Applies CSS that hides YouTube ad elements
hideElements();
// Some changes should be re-evaluated on every page change
hideDynamicAds();
autoSkipAds();
observeDomChanges(() => {
    hideDynamicAds();
    autoSkipAds();
});`});var tr={};var er,rr=v(()=>{"use strict";c();Z();er=require("electron");$t();er.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{!S.store.plugins?.YoutubeAdblock?.enabled||(n.url.includes("youtube.com/embed/")||n.url.includes("discordsays")&&n.url.includes("youtube.com"))&&n.executeJavaScript(Qt)})})})});var nr,ir=v(()=>{c();Dt();Et();Nt();jt();Zt();Wt();Yt();Xt();rr();nr={AppleMusicRichPresence:Le,ConsoleShortcuts:Ne,FixSpotifyEmbeds:Lt,FixYoutubeEmbeds:Ut,OpenInApp:Fe,Translate:Be,VoiceMessages:Ze,XSOverlay:We,YoutubeAdblock:tr}});var He,or,ar=v(()=>{"use strict";c();fe();He=require("electron");ir();or={};for(let[e,t]of Object.entries(nr)){let r=Object.entries(t);if(!r.length)continue;let n=or[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;He.ipcMain.handle(a,o),n[i]=a}}He.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=or})});function Ke(e,t=300){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var sr=v(()=>{"use strict";c()});var cr,lr=v(()=>{c();cr="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function Ye(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function ur(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function fr(e,t){if(!e)return Ye(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Ye(t);let n={},i="",o="";for(let a of r.split(mn))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(In,"@");return n[i]=o.trim(),delete n[""],Ye(t,n)}var mn,In,hr=v(()=>{"use strict";c();mn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,In=/^\\@/});function gr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":pr.shell.openExternal(t)}return{action:"deny"}})}var pr,dr=v(()=>{"use strict";c();pr=require("electron")});function Je(e,t){let r=(0,oe.normalize)(e),n=(0,oe.join)(e,t),i=(0,oe.normalize)(n);return i.startsWith(r)?i:null}function vr(){return(0,H.readFile)(ne,"utf-8").catch(()=>"")}async function yn(){let e=await(0,H.readdir)(U).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await mr(r).then(ur).catch(()=>null);n!=null&&t.push(fr(n,r))}return t}function mr(e){e=e.replace(/\?v=\d+$/,"");let t=Je(U,e);return t?(0,H.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Ir(e){let t;(0,H.open)(ne,"a+").then(n=>{n.close(),t=(0,W.watch)(ne,{persistent:!1},Ke(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await vr())},50))}).catch(()=>{});let r=(0,W.watch)(U,{persistent:!1},Ke(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var I,W,H,oe,qe=v(()=>{"use strict";c();Ct();ar();Z();sr();fe();I=require("electron");lr();W=require("fs"),H=require("fs/promises"),oe=require("path");hr();ie();dr();(0,W.mkdirSync)(U,{recursive:!0});I.ipcMain.handle("VencordOpenQuickCss",()=>I.shell.openPath(ne));I.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Ot.includes(r))throw"Disallowed protocol.";I.shell.openExternal(t)});I.ipcMain.handle("VencordGetQuickCss",()=>vr());I.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,W.writeFileSync)(ne,t));I.ipcMain.handle("VencordGetThemesDir",()=>U);I.ipcMain.handle("VencordGetThemesList",()=>yn());I.ipcMain.handle("VencordGetThemeData",(e,t)=>mr(t));I.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${I.systemPreferences.getAccentColor?.()||""}`}));I.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Voicecord QuickCSS Editor",t=I.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new I.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,oe.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});gr(r),await r.loadURL(`data:text/html;base64,${cr}`)})});function Fr(e,t,r){let n=t;if(t in e)return void r(e[n]);Object.defineProperty(e,t,{set(i){delete e[n],e[n]=i,r(i)},configurable:!0,enumerable:!1})}var Br=v(()=>{"use strict";c()});var Fn={};var E,j,zn,Un,it,jn,Zr=v(()=>{"use strict";c();Br();E=Oe(require("electron")),j=require("path");qe();Z();ie();console.log("[Vencord] Starting up...");zn=require.main.filename,Un=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",it=(0,j.join)((0,j.dirname)(zn),"..",Un),jn=require((0,j.join)(it,"package.json"));require.main.filename=(0,j.join)(it,jn.main);E.app.setAppPath(it);if(Ce)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=S.store;class t extends E.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let a=o.webPreferences.preload;o.webPreferences.preload=(0,j.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,o.webPreferences.backgroundThrottling=!1,e.frameless&&(o.frame=!1),e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),e.macosVibrancyStyle&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(o),Ir(this)}else super(o)}}Object.assign(t,E.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...E.default,BrowserWindow:t},Fr(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,j.join)(E.app.getPath("userData"),"..","Vencord");let n=E.app.commandLine.appendSwitch;E.app.commandLine.appendSwitch=function(...i){if(i[0]==="disable-features"){let o=new Set((i[1]??"").split(","));o.add("WidgetLayering"),o.add("UseEcoQoSForBackgroundProcess"),i[1]+=[...o].join(",")}return n.apply(this,i)},E.app.commandLine.appendSwitch("disable-renderer-backgrounding"),E.app.commandLine.appendSwitch("disable-background-timer-throttling"),E.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var Y=require("electron"),Wr=require("path");qe();Z();ie();c();var zr=require("electron");c();var Cr=require("module"),An=(0,Cr.createRequire)("/"),Te,Cn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Te=An("worker_threads").Worker}catch{}var wn=Te?function(e,t,r,n,i){var o=!1,a=new Te(e+Cn,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,Te.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},w=Uint8Array,K=Uint16Array,wr=Int32Array,$e=new w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),et=new w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Sr=new w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tr=function(e,t){for(var r=new K(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new wr(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return{b:r,r:i}},br=Tr($e,2),tt=br.b,Sn=br.r;tt[28]=258,Sn[258]=28;var xr=Tr(et,0),Dr=xr.b,$i=xr.r,De=new K(32768);for(d=0;d<32768;++d)G=(d&43690)>>1|(d&21845)<<1,G=(G&52428)>>2|(G&13107)<<2,G=(G&61680)>>4|(G&3855)<<4,De[d]=((G&65280)>>8|(G&255)<<8)>>1;var G,d,ae=function(e,t,r){for(var n=e.length,i=0,o=new K(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new K(t);for(i=1;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new K(1<<t);var u=15-t;for(i=0;i<n;++i)if(e[i])for(var h=i<<4|e[i],f=t-e[i],l=a[e[i]-1]++<<f,m=l|(1<<f)-1;l<=m;++l)s[De[l]>>u]=h}else for(s=new K(n),i=0;i<n;++i)e[i]&&(s[i]=De[a[e[i]-1]++]>>15-e[i]);return s},ve=new w(288);for(d=0;d<144;++d)ve[d]=8;var d;for(d=144;d<256;++d)ve[d]=9;var d;for(d=256;d<280;++d)ve[d]=7;var d;for(d=280;d<288;++d)ve[d]=8;var d,Er=new w(32);for(d=0;d<32;++d)Er[d]=5;var d;var kr=ae(ve,9,1);var Pr=ae(Er,5,1),be=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},xe=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Rr=function(e){return(e+7)/8|0},Ee=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new w(e.subarray(t,r))};var Or=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(e,t,r){var n=new Error(t||Or[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,C),!r)throw n;return n},_r=function(e,t,r,n){var i=e.length,o=n?n.length:0;if(!i||t.f&&!t.l)return r||new w(0);var a=!r,s=a||t.i!=2,u=t.i;a&&(r=new w(i*3));var h=function(ut){var ft=r.length;if(ut>ft){var ht=new w(Math.max(ft*2,ut));ht.set(r),r=ht}},f=t.f||0,l=t.p||0,m=t.b||0,R=t.l,J=t.d,M=t.m,T=t.n,b=i*8;do{if(!R){f=D(e,l,1);var L=D(e,l+1,3);if(l+=3,L)if(L==1)R=kr,J=Pr,M=9,T=5;else if(L==2){var ce=D(e,l,31)+257,me=D(e,l+10,15)+4,F=ce+D(e,l+5,31)+1;l+=14;for(var x=new w(F),X=new w(19),y=0;y<me;++y)X[Sr[y]]=D(e,l+y*3,7);l+=me*3;for(var le=be(X),Hr=(1<<le)-1,Kr=ae(X,le,1),y=0;y<F;){var ot=Kr[D(e,l,Hr)];l+=ot&15;var A=ot>>4;if(A<16)x[y++]=A;else{var Q=0,Ie=0;for(A==16?(Ie=3+D(e,l,3),l+=2,Q=x[y-1]):A==17?(Ie=3+D(e,l,7),l+=3):A==18&&(Ie=11+D(e,l,127),l+=7);Ie--;)x[y++]=Q}}var at=x.subarray(0,ce),N=x.subarray(ce);M=be(at),T=be(N),R=ae(at,M,1),J=ae(N,T,1)}else C(1);else{var A=Rr(l)+4,V=e[A-4]|e[A-3]<<8,q=A+V;if(q>i){u&&C(0);break}s&&h(m+V),r.set(e.subarray(A,q),m),t.b=m+=V,t.p=l=q*8,t.f=f;continue}if(l>b){u&&C(0);break}}s&&h(m+131072);for(var Yr=(1<<M)-1,Jr=(1<<T)-1,ke=l;;ke=l){var Q=R[xe(e,l)&Yr],$=Q>>4;if(l+=Q&15,l>b){u&&C(0);break}if(Q||C(2),$<256)r[m++]=$;else if($==256){ke=l,R=null;break}else{var st=$-254;if($>264){var y=$-257,ue=$e[y];st=D(e,l,(1<<ue)-1)+tt[y],l+=ue}var Pe=J[xe(e,l)&Jr],Re=Pe>>4;Pe||C(3),l+=Pe&15;var N=Dr[Re];if(Re>3){var ue=et[Re];N+=xe(e,l)&(1<<ue)-1,l+=ue}if(l>b){u&&C(0);break}s&&h(m+131072);var ct=m+st;if(m<N){var lt=o-N,qr=Math.min(N,ct);for(lt+m<0&&C(3);m<qr;++m)r[m]=n[lt+m]}for(;m<ct;++m)r[m]=r[m-N]}}t.l=R,t.p=ke,t.b=m,t.f=f,R&&(f=1,t.m=M,t.d=J,t.n=T)}while(!f);return m!=r.length&&a?Ee(r,0,m):r.subarray(0,m)};var Tn=new w(0);var bn=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},yr=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],u=o[a];if(typeof s=="function"){t+=";"+u+"=";var h=s.toString();if(s.prototype)if(h.indexOf("[native code]")!=-1){var f=h.indexOf(" ",8)+1;t+=h.slice(f,h.indexOf("(",f))}else{t+=h;for(var l in s.prototype)t+=";"+u+".prototype."+l+"="+s.prototype[l].toString()}else t+=h}else r[u]=s}return t},Se=[],xn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Dn=function(e,t,r,n){if(!Se[r]){for(var i="",o={},a=e.length-1,s=0;s<a;++s)i=yr(e[s],i,o);Se[r]={c:yr(e[a],i,o),e:o}}var u=bn({},Se[r].e);return wn(Se[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,xn(u),n)},En=function(){return[w,K,wr,$e,et,Sr,tt,Dr,kr,Pr,De,Or,ae,be,D,xe,Rr,Ee,C,_r,rt,Mr,Vr]};var Mr=function(e){return postMessage(e,[e.buffer])},Vr=function(e){return e&&{out:e.size&&new w(e.size),dictionary:e.dictionary}},kn=function(e,t,r,n,i,o){var a=Dn(r,n,i,function(s,u){a.terminate(),o(s,u)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var O=function(e,t){return e[t]|e[t+1]<<8},P=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Xe=function(e,t){return P(e,t)+P(e,t+4)*4294967296};function Pn(e,t,r){return r||(r=t,t={}),typeof r!="function"&&C(7),kn(e,t,[En],function(n){return Mr(rt(n.data[0],Vr(n.data[1])))},1,r)}function rt(e,t){return _r(e,{i:2},t&&t.out,t&&t.dictionary)}var Qe=typeof TextDecoder<"u"&&new TextDecoder,Rn=0;try{Qe.decode(Tn,{stream:!0}),Rn=1}catch{}var On=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return{s:t,r:Ee(e,r-1)};i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function _n(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(Qe)return Qe.decode(e);var i=On(e),o=i.s,r=i.r;return r.length&&C(8),o}}var Mn=function(e,t){return t+30+O(e,t+26)+O(e,t+28)},Vn=function(e,t,r){var n=O(e,t+28),i=_n(e.subarray(t+46,t+46+n),!(O(e,t+8)&2048)),o=t+46+n,a=P(e,t+20),s=r&&a==4294967295?Gn(e,o):[a,P(e,t+24),P(e,t+42)],u=s[0],h=s[1],f=s[2];return[O(e,t+10),u,h,i,o+O(e,t+30)+O(e,t+32),f]},Gn=function(e,t){for(;O(e,t)!=1;t+=4+O(e,t+2));return[Xe(e,t+12),Xe(e,t+4),Xe(e,t+20)]};var Ar=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Gr(e,t,r){r||(r=t,t={}),typeof r!="function"&&C(7);var n=[],i=function(){for(var T=0;T<n.length;++T)n[T]()},o={},a=function(T,b){Ar(function(){r(T,b)})};Ar(function(){a=r});for(var s=e.length-22;P(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(C(13,0,1),null),i;var u=O(e,s+8);if(u){var h=u,f=P(e,s+16),l=f==4294967295||h==65535;if(l){var m=P(e,s-12);l=P(e,m)==101075792,l&&(h=u=P(e,m+32),f=P(e,m+48))}for(var R=t&&t.filter,J=function(T){var b=Vn(e,f,l),L=b[0],A=b[1],V=b[2],q=b[3],ce=b[4],me=b[5],F=Mn(e,me);f=ce;var x=function(y,le){y?(i(),a(y,null)):(le&&(o[q]=le),--u||a(null,o))};if(!R||R({name:q,size:A,originalSize:V,compression:L}))if(!L)x(null,Ee(e,F,F+A));else if(L==8){var X=e.subarray(F,F+A);if(V<524288||A>.8*V)try{x(null,rt(X,{out:new w(V)}))}catch(y){x(y,null)}else n.push(Pn(X,{size:V},x))}else x(C(14,"unknown compression type "+L,1),null);else x(null,null)},M=0;M<h;++M)J(M)}else a(null,{});return i}var Ur=require("fs"),_=require("fs/promises"),se=require("path");ie();c();function Lr(e){function t(a,s,u,h){let f=0;return f+=a<<0,f+=s<<8,f+=u<<16,f+=h<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),u=16+a+s;return e.subarray(u,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}c();var Nr=Oe(require("https"));function nt(e,t={}){return new Promise((r,n)=>{Nr.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(nt(s.location,t));let u=[];i.on("error",n),i.on("data",h=>u.push(h)),i.once("end",()=>r(Buffer.concat(u)))})})}var Ln=(0,se.join)(Ae,"ExtensionCache");async function Nn(e,t){return await(0,_.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{Gr(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,_.mkdir)((0,se.join)(t,a),{recursive:!0});let s=a.split("/"),u=s.pop(),h=s.join("/"),f=(0,se.join)(t,h);h&&await(0,_.mkdir)(f,{recursive:!0}),await(0,_.writeFile)((0,se.join)(f,u),o[a])})).then(()=>r()).catch(a=>{(0,_.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function jr(e){let t=(0,se.join)(Ln,`${e}`);try{await(0,_.access)(t,Ur.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await nt(n,{headers:{"User-Agent":"Voicecord (https://github.com/Vendicated/Vencord)"}});await Nn(Lr(i),t).catch(console.error)}zr.session.defaultSession.loadExtension(t)}Ce||Y.app.whenReady().then(()=>{Y.protocol.registerFileProtocol("Voicecord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),u=Je(U,s);if(!u){o({statusCode:403});return}o(u.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,Wr.join)(__dirname,a));break;default:o({statusCode:403})}});try{S.store.enableReactDevtools&&jr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...u]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=u)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","Voicecord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};Y.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),Y.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Zr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
