const axios = require('axios');
module.exports = async (save, config) => {
    axios
        .get(config.planurl, { auth: { username: 'schueler', password: 'bbgym' } })
        .then((res) => {
            return save(res)
        })
}   