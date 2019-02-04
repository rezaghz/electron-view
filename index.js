const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

module.exports = (address,folderName="views",ext=".html")=>{
    let viewUrl = address.split(".").join("/");
    let fileUrl = path.join(appRoot.path, folderName, viewUrl + ext);
    if (!fs.existsSync(fileUrl)){
        console.error("\nFile : "+fileUrl+"\n"+"Not Found !!!");
    }
    else {
        return "file://"+fileUrl;
    }
};
