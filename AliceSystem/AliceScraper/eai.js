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

    async function Eai(prompt) {
        const url = new URL("https://yw85opafq6.execute-api.us-east-1.amazonaws.com/default/boss_mode_15aug");
        url.search = new URLSearchParams({
            text: prompt,
            country: "Europe",
            user_id: "Av0SkyG00D" // Thanks To Avosky
        }).toString();

        try {
            const response = await axios.get(url.toString(), {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; Infinix) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Mobile Safari/537.36",
                    Referer: "https://www.ai4chat.co/pages/riddle-generator"
                }
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.status}`);
            }

            return response.data;
        } catch (error) {
            console.error("Fetch error:", error.message);
            throw error;
        }
    }

module.exports = Eai;