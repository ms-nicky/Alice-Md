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
const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = class mongoDB {
  constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
    this.url = url
    this.data = this._data = this._schema = this._model = {}
    this.db
    this.options = options
  }
  async read() {
    this.db = await mongoose.connect(this.url, { ...this.options })
    this.connection = mongoose.connection
    let schema = this._schema = new Schema({
      data: {
        type: Object,
        required: true, //depends on whether the field is mandatory or not
        default: {}
      }
    })
    // this._model = mongoose.model('data', schema)
    try { this._model = mongoose.model('data', schema) } catch { this._model = mongoose.model('data') }
    this._data = await this._model.findOne({})
    if (!this._data) {
      this.data = {}
      await this.write(this.data)
      this._data = await this._model.findOne({})
    } else this.data = this._data.data
    return this.data
  }


  async write(data) {
    if (!data) return data
    if (!this._data) return (new this._model({ data })).save()
    this._model.findById(this._data._id, (err, docs) => {
      if (!err) {
        if (!docs.data) docs.data = {}
        docs.data = data
        return docs.save()
      }
    })
  }
}