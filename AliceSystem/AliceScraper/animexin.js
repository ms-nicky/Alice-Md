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
const axios = require('axios');
const cheerio = require('cheerio');

async function animexinUpdate() {
  try {
    const { data } = await axios.get('https://animexin.dev/');
    const $ = cheerio.load(data);
    const animeList = [];

    $('.listupd .bsx').each((index, element) => {
      const title = $(element).find('h2[itemprop="headline"]').text();
      const url = $(element).find('a[itemprop="url"]').attr('href');
      const image = $(element).find('img[itemprop="image"]').attr('src');
      const episode = $(element).find('.eggepisode').text();
      const type = $(element).find('.eggtype').text();

      animeList.push({
        title,
        url,
        image,
        episode,
        type
      });
    });

    return animeList;
  } catch (error) {
    console.error('Error fetching updates:', error);
    return [];
  }
}

async function animexinDetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const episodeData = {
      title: $('h2[itemprop="partOfSeries"]').text(),
      episodeTitle: $('h2[itemprop="headline"]').text(),
      image: $('.thumb img[itemprop="image"]').attr('src'),
      rating: $('.rating strong').text(),
      status: $('.spe span:contains("Status:")').text().replace('Status: ', ''),
      network: $('.spe span:contains("Network:") a').text(),
      studio: $('.spe span:contains("Studio:") a').text(),
      released: $('.spe span:contains("Released:")').text().replace('Released: ', ''),
      duration: $('.spe span:contains("Duration:")').text().replace('Duration: ', ''),
      country: $('.spe span:contains("Country:") a').text(),
      type: $('.spe span:contains("Type:")').text().replace('Type: ', ''),
      episodes: $('.spe span:contains("Episodes:")').text().replace('Episodes: ', ''),
      fansub: $('.spe span:contains("Fansub:")').text().replace('Fansub: ', ''),
      genres: $('.genxed a').map((i, el) => $(el).text()).get(),
      description: $('.desc.mindes').text().trim(),
      downloadLinks: []
    };

    $('.mctnx .soraddlx').each((index, element) => {
      const subtitleType = $(element).find('.sorattlx h3').text();
      const links = $(element).find('.soraurlx a').map((i, el) => ({
        url: $(el).attr('href')
      })).get();

      episodeData.downloadLinks.push({
        subtitleType,
        links
      });
    });

    return JSON.stringify(episodeData, null, 2);
  } catch (error) {
    console.error('Error fetching details:', error);
    return null;
  }
}

async function animexinSearch(keyword) {
  try {
    const { data } = await axios.get('https://animexin.dev/?s=' + keyword);
    const $ = cheerio.load(data);
    
    const animeList = [];

    $('.listupd article.bs').each((index, element) => {
      const title = $(element).find('h2[itemprop="headline"]').text();
      const url = $(element).find('a[itemprop="url"]').attr('href');
      const image = $(element).find('img[itemprop="image"]').attr('src');
      const status = $(element).find('.epx').text();
      const subtitle = $(element).find('.sb').text();
      const type = $(element).find('.typez').text();

      animeList.push({
        title,
        url,
        image,
        status,
        subtitle,
        type
      });
    });

    return JSON.stringify(animeList, null, 2);
  } catch (error) {
    console.error('Error searching anime:', error);
    return null;
  }
}

module.exports = {
  animexinUpdate,
  animexinDetail,
  animexinSearch
};