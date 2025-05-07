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
const fs = require('fs')
const FormData = require('form-data');
// UPLOAD TO API
async function uploadFileToApi(filePath, expired) {
    try {
        const form = new FormData();
        form.append('expired', expired); // 1minute, 1hour, 1day, 1month and 6months
        form.append('file', fs.createReadStream(filePath));
        
        const response = await axios.put(
            "https://autoresbot.com/tmp-files/upload",
            form,
            {
                headers: {
                    ...form.getHeaders(),
                    'Referer': 'https://autoresbot.com/',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Edg/126.0.0.0'
                }
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

async function WidipeCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post(`https://aemt.uk.to/api/upload.php`, form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch(error) {
    return error.message
  }
}

async function ShannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

async function YudzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post(`https://8030.us.kg/api/upload.php`, form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch(error) {
    return error.message
  }
} 

module.exports = {
  uploadFileToApi,
  WidipeCdn,
  ShannzCdn,
  YudzCdn
};