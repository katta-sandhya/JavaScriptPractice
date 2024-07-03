const path = require('path');

const filePath = '/path/to/some/file.txt';

// Extracting the directory name
const dirname = path.dirname(filePath);//returns the directory of the path
console.log('Directory:', dirname);

// Extracting the file name
const basename = path.basename(filePath);//returns the last part of the path
console.log('File Name:', basename);

// Joining paths
const fullPath = path.join(__dirname, 'files', 'exam.txt');//files-folder, exam.txt-file
console.log('Full Path:', fullPath);
