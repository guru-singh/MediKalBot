const { handleMessage } = require("./lib/telegram");


async function handler(req, method) {
    const {body} = req;
    if(body) {
        const msgObj = body.message;
        //await handleMessage(msgObj);
        await handleMessage(msgObj);
    }
    return;
}

module.exports = {handler}