const fs = require('fs');
const path = require('path');

function deletePath(filePath) {
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath);
    console.log(' files.length', files.length);


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