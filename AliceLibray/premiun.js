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
const fs = require("fs");
const toMs = require("ms");

const premium = JSON.parse(fs.readFileSync('./AliceDatabase/premium.json'))
/**
 * Add premium user.
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _dir
 */
const addPremiumUser = (userId, expired, _dir) => {
	const cekUser = premium.find((user) => user.id == userId);
	if (cekUser) {
		cekUser.expired = cekUser.expired + toMs(expired);
	} else {
		const obj = { id: userId, expired: Date.now() + toMs(expired) };
		_dir.push(obj);
	}
	fs.writeFileSync("./AliceDatabase/premium.json", JSON.stringify(_dir));
};

/**
 * Get premium user position.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumPosition = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

/**
 * Get premium user expire.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumExpired = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return _dir[position].expired;
	}
};

/**
 * Check user is premium.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Boolean}
 */
const checkPremiumUser = (userId, _dir) => {
	let status = false;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			status = true;
		}
	});
	return status;
};

/**
 * Constantly checking premium.
 * @param {Object} _dir
 */
const expiredCheck = (ryokun, msg, _dir) => {
	setInterval(() => {
		let position = null;
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i;
			}
		});
		if (position !== null) {
			idny = _dir[position].id;
			console.log(`Premium expired: ${_dir[position].id}`);
			_dir.splice(position, 1);
			fs.writeFileSync("./AliceDatabase/premium.json", JSON.stringify(_dir));
			idny ? ryokun.sendMessage(idny, { text: "Premium anda sudah habis silahkan untuk membeli lagi." }) : "";
			idny = false;
		}
	}, 1000);
};

/**
 * Get all premium user ID.
 * @param {Object} _dir
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
	const array = [];
	Object.keys(_dir).forEach((i) => {
		array.push(_dir[i].id);
	});
	return array;
};

module.exports = {
	addPremiumUser,
	getPremiumExpired,
	getPremiumPosition,
	expiredCheck,
	checkPremiumUser,
	getAllPremiumUser,
};