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

async function tiktok2(e) {
    try {
        const params = new URLSearchParams();
        params.set("url", e);
        params.set("hd", "1");

        const response = await axios({
            method: "POST",
            url: "https://tikwm.com/api/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": "current_language=en",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
            },
            data: params
        });

        const a = response.data.data;
        return {
            title: a.title,
            cover: a.cover,
            origin_cover: a.origin_cover,
            no_watermark: a.play,
            watermark: a.wmplay,
            music: a.music
        };
    } catch (error) {
        console.error('Error fetching TikTok data:', error);
        throw error; // Re-throw the error after logging
    }
}

async function tiktoks(keywords) {
    try {
        const response = await axios({
            method: "POST",
            url: "https://tikwm.com/api/feed/search",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": "current_language=en",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
            },
            data: {
                keywords: keywords,
                count: 50,
                cursor: 0,
                HD: 1
            }
        });

        const videos = response.data.data.videos;

        if (videos.length === 0) {
            throw new Error("Tidak ada video ditemukan.");
        } else {
            const randomVideo = videos[Math.floor(Math.random() * videos.length)];
            return {
                title: randomVideo.title,
                cover: randomVideo.cover,
                origin_cover: randomVideo.origin_cover,
                no_watermark: randomVideo.play,
                watermark: randomVideo.wmplay,
                music: randomVideo.music
            };
        }
    } catch (error) {
        console.error('Error fetching TikTok videos:', error);
        throw error; // Re-throw the error after logging
    }
}

module.exports = { 
  tiktok2,
  tiktoks
};