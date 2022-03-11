const fs = require('fs');
const path = require('path');

module.exports = client => {
    const load_dir = (dirs) => {
        console.log(`\n${dirs} Events:`)
        const event_files = fs.readdirSync(path.resolve(__dirname, `../events/${dirs}`)).filter(file => file.endsWith('.js'));

        for (const file of event_files) {
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0]
            console.log(`Loading ${event_name}`)
            client.on(event_name, event.bind(null, client));
        }
    }

    ['client', 'channels'].forEach(e => load_dir(e));
}