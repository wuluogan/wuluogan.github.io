# 微信小程序

## 部署

### 配置自动化部署

**方式一：命令行V2**

```
# 本地构建 
npm run build:weapp-sit 
# 命令行工具所在位置 
cd /Applications/wechatwebdevtools.app/Contents/MacOS/ 
# 登录 
./cli login 
# 打开启动工具（定位到项目） 
./cli -o /Users/niceBoy/Documents/workingProject/perpetual/perpetual-ts.git 
# 小程序预览 
./cli preview --project /Users/niceBoy/Documents/workingProject/perpetual/perpetual-ts.git 
# 小程序上传 
 ./cli upload --project /Users/niceBoy/Documents/workingProject/perpetual/perpetual-ts.git -v 2.20.1 -d '小程序自动发版测试' 
 # 查看所有命令 
 ./cli --lang zh -h 
```

**方式二：CI（推荐）**

首先需要在小程序配置并下载密钥，参考<https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html>

CI初始化

```
// index.js 
const shell = require('shelljs'); 
const ci = require('miniprogram-ci'); 
const appid = require('../project.config.json').appid; 
const pkg = require('../package.json'); 
 
const desc = '小程序上传'; 
const arguments = process.argv.splice(2); 
console.log('------小程序环境------', arguments[0]); 
 
const projectCi = new ci.Project({ 
  appid, 
  type: 'miniProgram', 
  projectPath: process.cwd(), 
  privateKeyPath: process.cwd() + '/wechat/private.key', 
  ignores: ['node_modules/**/*'] 
}); 
 
async function commit() { 
  const _gitLog = await getLog(); 
  return Object.assign({}, _gitLog, { 
    message: 
      _gitLog.message.split(':')[1] || _gitLog.message.split('：')[1] || desc 
  }); 
} 
 
function getLog() { 
  let _cmd = `git log --no-merges -1 \ 
  --date=iso --pretty=format:'{"author": "%aN","message": "%s"},' \ 
  $@ | \ 
  perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \ 
  perl -pe 's/},]/}]/'`; 
  return new Promise((resolve, reject) => { 
    shell.exec(_cmd, (code, stdout, stderr) => { 
      if (code) { 
        reject(stderr); 
      } else { 
        const obj = Object.assign({}, JSON.parse(stdout)[0], { 
          branch: shell.exec('git symbolic-ref --short -q HEAD').stdout 
        }); 
        resolve(obj); 
      } 
    }); 
  }); 
} 
 
module.exports = { 
  projectName: pkg.name, // 项目名，用于后台设置的账号密码匹配 
  version: pkg.version, // 本次发布的版本号 
  desc: `小程序环境：${arguments[0]}`, // 上传备注信息 
  projectCi, 
  commit 
}; 
```

预览代码

```
// config.preview.js 
const { projectName, version, desc, projectCi } = require('./index'); 
const ci = require('miniprogram-ci'); 
 
console.log('------开始预览------'); 
 
(async () => { 
  try { 
    const previewResult = await ci.preview({ 
      project: projectCi, 
      desc, 
      setting: { 
        es6: true 
      }, 
      qrcodeFormat: 'image', 
      qrcodeOutputDest: process.cwd() + '/wechat/preview_destination.jpg' 
      // pagePath: 'pages/index/index', // 预览页面 
      // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`&` 
    }); 
    console.log('------预览成功------'); 
    console.log(previewResult); 
  } catch (error) { 
    console.log('------预览失败------'); 
    console.error(error); 
  } finally { 
    console.log('------预览完成------'); 
  } 
})(); 
```

上传代码

```
// config.upload.js 
const { projectName, version, desc, projectCi, commit } = require('./index'); 
const ci = require('miniprogram-ci'); 
 
console.log('------开始上传------'); 
 
(async () => { 
  try { 
    const getlogInfo = await commit(); 
    console.log(getlogInfo); 
    const uploadResult = await ci.upload({ 
      project: projectCi, 
      version, 
      desc: `${desc} 开发分支：${getlogInfo.branch} 描述：${getlogInfo.message} 作者：${getlogInfo.author}`, 
      robot: 2, // 本地部署机器人为 2,Jenkins部署机器人为 1 
      setting: { 
        minify: true 
      } 
    }); 
    console.log('------上传成功------'); 
    console.log(uploadResult); 
  } catch (error) { 
    console.log('------上传失败------'); 
    console.error(error); 
  } finally { 
    console.log('------上传完成------'); 
  } 
})(); 
```

运行

```
node wechat/config.preview.js 
node wechat/config.upload.js 
```



