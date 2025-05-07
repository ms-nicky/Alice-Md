/*  

  Made By Lenwy
  Base : Lenwy
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ilenwy
  Youtube : @Lenwy

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

  Mohon Untuk Tidak Menghapus Watermark Di Dalam Kode Ini

*/

const axios = require('axios');
const cheerio = require('cheerio');

  async function WikiMedia(title) {
    return new Promise((resolve, reject) => {
      axios.get(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(title)}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          let hasil = [];

          $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
            hasil.push({
              title: $(b).find('img').attr('alt'),
              source: 'https://commons.wikimedia.org' + $(b).attr('href'),
              image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src'),
            });
          });

          resolve(hasil);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

module.exports = WikiMedia;