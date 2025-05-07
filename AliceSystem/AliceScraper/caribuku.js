
const axios = require('axios');
const cheerio = require('cheerio');

async function BookSearch(query) {
    const url = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const books = [];
        $('.tableList tr').each((index, element) => {
            const title = $(element).find('a.bookTitle span').text().trim();
            const link = $(element).find('a.bookTitle').attr('href');
            const rating = $(element).find('span.minirating').text().trim();
            books.push({ title, link: `https://www.goodreads.com${link}`, rating });
        });
        return books;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
}

module.exports = BookSearch;

