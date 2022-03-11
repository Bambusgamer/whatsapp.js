const cron = require('cron');
const moment = require('moment');
const axios = require('axios');
const fs = require('fs');
const config = require('../config');
convert = require('xml-js');
const path = require('path');

let scraper = new cron.CronJob('*/2 * * * * *', function () {
    axios
        .get(config.planurl, { auth: { username: 'schueler', password: 'bbgym' } })
        .then((res) => {
            let fileName = `vp_data_${moment().format('YYYY-MM-DD_HH-mm-ss')}`
            const json = convert.xml2json(res.data, { compact: true, spaces: 4 })
            fs.writeFileSync(`./data/${fileName}.json`, json)
            console.log(`Saved   |   ${fileName}`)
        })



});

console.log('Starting scraper...')
scraper.start();





// const save = require('./data');
// const retrieve = require('./retrieve');
// let scraper = new cron.CronJob('*/10 * * * * *', function () {
//     retrieve(save, config);
// });
// scraper.start();