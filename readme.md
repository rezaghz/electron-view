# Electron View

NPM package For Pass View Electron Web Page Easier and Faster Like Laravel Framework.


## Installation


install by NPM 

```bash
$ npm install electron-view --save
```

install by Yarn 

```bash
$ yarn add electron-view
```

## How To Use ? 


Example For Es6

```javascript
/**
* View Function Information Parameters
* @param {string} address - The address of Web page 
* @param {string} {folderName = views} - The Name of Folder For View Folder Default = 
* @param {string} {ext = .html } - The extension of Web page
*/
import view from 'electron-view';
import {BrowserWindow} from 'electron';
let mainWin = new BrowserWindow({});
mainWin.loadURL(view("panel.dashboard.index"));
```

Example For Es5 or below

```javascript
/**
* View Function Information Parameters
* @param {string} address - The address of Web page 
* @param {string} {folderName = views} - The Name of Folder For View Folder Default = 
* @param {string} {ext = .html } - The extension of Web page
*/
const view = require('electron-view');
const {BrowserWindow} = require('electron');
let mainWin = new BrowserWindow({});
mainWin.loadURL(view("panel.dashboard.index"));
```

Output String

```javascript
view("admin.dashboard.index");
// file://E://myProject/views/admin/dashboard/index.html
view("admin.dashboard.index","resources");
// file://E://myProject/resources/admin/dashboard/index.html
view("admin.dashboard.index","resources");
// file://E://myProject/resources/admin/dashboard/index.html
view("admin.dashboard.index","resources",".xml");
// file://E://myProject/resources/admin/dashboard/index.xml
```


