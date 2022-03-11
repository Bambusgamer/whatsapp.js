const axios = require('axios');
const fs = require('fs');
const convert = require('xml-js');

waclient = require('./structures/client')
client = new waclient();
client.start();
require('./structures/antiCrash')(client);
require('./structures/handlers')(client);