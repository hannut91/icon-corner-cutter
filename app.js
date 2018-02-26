const sharp = require('sharp');

const rect = new Buffer(
  '<svg><rect x="0" y="0" width="512" height="512" rx="100" ry="100"/></svg>'
);

sharp('android_icon.png')
  .resize(512, 512)
  .overlayWith(rect, { cutout: true })
  .toFile('output.png', function(err, info) {
    console.log(info);
  });