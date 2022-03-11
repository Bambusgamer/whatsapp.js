const fs = require('fs');
const moment = require('moment');
const convert = require('xml-js');

module.exports = async (data) => {
    let fileName = `vp_data_${moment().format('YYYY-MM-DD_HH:mm:ss')}`
    const json = convert.xml2json(data, { compact: true, spaces: 4 })
    js.Klassen.kl.forEach(klasse => console.log(klasse))
    fs.writeFileSync(`../data/${fileName}.json`, json)
}