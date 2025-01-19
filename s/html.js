import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;
const UglifyJS = require("uglify-js");

// linux
const source = "/home/wlg/Code/Node/html/";
const destination = "/home/wlg/Code/Node/blog/public/html/";

// mac
// const source = "/Users/wlg/Documents/Code/Node/html/";
// const destination = "/Users/wlg/Desktop/html/";

const array = ['node_modules', 'html.js', 'html.md','package.json','package-lock.json'];


copyFolder(source, destination,true);
console.log("压缩文件结束")


function copyFolder(source, destination,exists) {
    // 确保目标文件夹存在
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }

    // 读取源文件夹内容
    fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
        const sourcePath = path.join(source, entry.name);
        const destinationPath = path.join(destination, entry.name);
        if (array.includes(entry.name)){
            return;
        }
        if (entry.isDirectory()) {
            // 如果是文件夹，递归复制
            copyFolder(sourcePath, destinationPath);
        } else {
            if (!fs.existsSync(destinationPath)){
                if (entry.name.endsWith('js')) {
                    if(entry.name.endsWith('min.js')){
                        fs.copyFileSync(sourcePath, destinationPath);
                    }else{
                        compressJs(sourcePath, destinationPath)
                    }
                } else if (entry.name.endsWith('html') || entry.name.endsWith('css')) {
                    compress(sourcePath, destinationPath)
                }else {
                    // 剩下的直接复制
                    fs.copyFileSync(sourcePath, destinationPath);
                }
            }
        }
    });
}

/**
 * 压缩html和css方法
 * @param {*} oldPath 文件路径
 * @param {*} newPath 新文件路径
 */
function compress(oldPath, newPath) {
    var data = fs.readFileSync(oldPath, 'utf8')
    fs.writeFileSync(newPath, minify(data, {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    }));
    console.log('compress--[' + newPath + ']--success');
}

/**
 * 压缩js方法
 * @param {*} oldPath 文件路径
 * @param {*} newPath 新文件路径
 */
function compressJs(oldPath, newPath) {
    var filename = path.basename(oldPath);
    if (filename != '/jquery.loading.min.js') {
        var data = fs.readFileSync(oldPath, 'utf8')
        fs.writeFileSync(newPath, UglifyJS.minify(data).code);
    }
    console.log('compress--[' + newPath + ']--success');
}


