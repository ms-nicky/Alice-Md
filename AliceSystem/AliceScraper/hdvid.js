const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

//————————————————————————//

/*

Alice Asistent
© XyrooRynzz
2022 - 2026

Source
WhatsApp Me : 6281543496975
Tele me : t.me/XyrooRynzz
instagram : xyroorynzz
https://chat.whatsapp.com/IJx5bkPvivUCeai7d2ChRC
https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E

*/

//————————————————————————//

function VideoHD(inputPath, outputPath, callback) {
  ffmpeg(inputPath)
    .videoCodec("libx264")
    .size("1280x720")
    .on("end", () => {
      console.log("Video berhasil diubah menjadi HD.");
      callback(null, outputPath);
    })
    .on("error", (err) => {
      console.error("Terjadi kesalahan: ", err.message);
      callback(err, null);
    })
    .save(outputPath);
}

module.exports = { VideoHD };
