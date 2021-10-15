const resemble = require('resemblejs');
const fs = require('fs');
const getPhoto = (fileName = '') =>
  fs.readFileSync(`${__dirname}/../photos/${fileName}`);
const writeDiffPhoto = (fileName = '', data = Buffer.from([])) =>
  fs.writeFileSync(`${__dirname}/output/${fileName}.jpg`, data);

const photo1 = getPhoto('1.jpg');
const photo2 = getPhoto('2.jpg');
const photo3 = getPhoto('3.jpg');

resemble(photo1)
  .compareTo(photo2)
  .ignoreColors()
  .onComplete(function (data) {
    console.log(data);
    writeDiffPhoto('resemble-diff1', data.getBuffer());
  });

resemble(photo2)
  .compareTo(photo3)
  .ignoreColors()
  .onComplete(function (data) {
    console.log(data);
    writeDiffPhoto('resemble-diff2', data.getBuffer());
  });
