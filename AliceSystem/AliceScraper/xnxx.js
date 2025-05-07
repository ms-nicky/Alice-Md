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
const axios = require("axios")
const cheerio = require("cheerio")
const fetch = require("node-fetch")
const moment = require("moment-timezone")
const mimetype = require("mime-types")
const qs = require("qs")

async function xnxxSearch(t) {
  return new Promise((n, e) => {
    const r = "https://www.xnxx.com";
    fetch(`${r}/search/${t}/${Math.floor(3 * Math.random()) + 1}`, {
      method: "get",
    })
      .then((t) => t.text())
      .then((t) => {
        let e = cheerio.load(t, { xmlMode: !1 }),
          o = [],
          a = [],
          i = [],
          s = [];
        e("div.mozaique").each(function (t, n) {
          e(n)
            .find("div.thumb")
            .each(function (t, n) {
              a.push(
                r + e(n).find("a").attr("href").replace("/THUMBNUM/", "/")
              );
            });
        }),
          e("div.mozaique").each(function (t, n) {
            e(n)
              .find("div.thumb-under")
              .each(function (t, n) {
                i.push(e(n).find("p.metadata").text()),
                  e(n)
                    .find("a")
                    .each(function (t, n) {
                      o.push(e(n).attr("title"));
                    });
              });
          });
        for (let t = 0; t < o.length; t++)
          s.push({ title: o[t], info: i[t], link: a[t] });
        n({ status: !0, result: s });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}


async function xnxxDownloader(t) {
  return new Promise((n, e) => {
    fetch(`${t}`, { method: "get" })
      .then((t) => t.text())
      .then((e) => {
        let r = cheerio.load(e, { xmlMode: !1 });
        const o = r('meta[property="og:title"]').attr("content"),
          a = r('meta[property="og:duration"]').attr("content"),
          i = r('meta[property="og:image"]').attr("content"),
          s = r('meta[property="og:video:type"]').attr("content"),
          c = r('meta[property="og:video:width"]').attr("content"),
          u = r('meta[property="og:video:height"]').attr("content"),
          f = r("span.metadata").text().trim(),
          l = r("#video-player-bg > script:nth-child(6)").html(),
          m = {
            low: (l.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
            high: l.match("html5player.setVideoUrlHigh\\('(.*?)'\\);")[1],
            HLS: l.match("html5player.setVideoHLS\\('(.*?)'\\);")[1],
            thumb: l.match("html5player.setThumbUrl\\('(.*?)'\\);")[1],
            thumb69: l.match("html5player.setThumbUrl169\\('(.*?)'\\);")[1],
            thumbSlide: l.match("html5player.setThumbSlide\\('(.*?)'\\);")[1],
            thumbSlideBig: l.match(
              "html5player.setThumbSlideBig\\('(.*?)'\\);"
            )[1],
          };
        n({
          status: !0,
          title: o,
          URL: t,
          duration: a,
          image: i,
          videoType: s,
          videoWidth: c,
          videoHeight: u,
          info: f,
          files: m,
        });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}

module.exports = { xnxxSearch, xnxxDownloader }