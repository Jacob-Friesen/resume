// run with: node update_pdf_css.js Jacob_Friesen_Resume.html Jacob_Friesen_Resume.tmp.html
var replaceStream = require('replacestream'),
    fs = require('fs'),
    path = require('path');

// A rough way of dealing with PDF HTML translation vs pure HTML display differences.
fs.createReadStream(path.join(__dirname, process.argv[2]))
  .pipe(replaceStream('font-size: 16px', 'font-size: 15px'))
  .pipe(replaceStream('font-size: 18px', 'font-size: 16px'))
  .pipe(replaceStream('font-size: 32px', 'font-size: 28px'))
  .pipe(replaceStream('font-size: 24px', 'font-size: 20px'))
  .pipe(replaceStream('line-height: 20px', 'line-height: 18px'))
  .pipe(replaceStream('margin: auto', 'margin: 0 8%'))
  .pipe(replaceStream('margin-top: 40px;/* pdf replace */', 'padding-top: 20px;'))
  .pipe(replaceStream('onlywkhtml2', 'onlywkhtml'))
  .pipe(fs.createWriteStream(path.join(__dirname, process.argv[3])));