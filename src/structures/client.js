const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

module.exports = class waclient extends Client {
    constructor() {
        super();

        this.commands = new Map();
        this.events = new Map();
        this.classes = new Map();
        this.chats = new Map();
        this.config = require('../../config')
    };

    start() {
        this.on('qr', qr => {
            qrcode.generate(qr, { small: true });
        });
        super.initialize();
    }
}