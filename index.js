const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

module.exports.view = (name)=>{
    let viewUrl = name.split(".").join("/");
    let fileUrl = path.join(appRoot.path, "views", viewUrl + ".html");
    if (!fs.existsSync(fileUrl)){
        console.error("\nFile : "+fileUrl+"\n"+"Not Found !!!");
    }
    else {
        return "file://"+fileUrl;
    }
};
