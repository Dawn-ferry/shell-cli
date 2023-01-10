// 用于读取文件并返回其内容
const fs = require('fs');
const path = require('path');

/* 
rmdirSync 只能删除文件夹
unlinkSync 删除文件
*/
function deletePath(filePath) {
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath);
    console.log(' files.length', files.length);

    // files.forEach(function (file, index) {
    //   let dirPath = filePath + "/" + file;
    //   if (fs.statSync(dirPath).isDirectory()) {
    //     deletePath(dirPath);
    //   } else {
    //     fs.unlinkSync(dirPath);
    //   }
    // });

    for (let index = 0; index < files.length; index++) {
      const fileName = files[index];
      const currentPath = path.join(filePath, fileName);
      console.log('fileName', fileName);

      if (fs.statSync(currentPath).isDirectory()) {
        deletePath(currentPath)
      } else {
        fs.unlinkSync(currentPath);
      }
    }
    fs.rmdirSync(filePath);
  }
}







module.exports = deletePath;