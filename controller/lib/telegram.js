const { axiosInstance } = require("./axios");

function sendMessage(obj, msgtext) {
    return axiosInstance.get('sendMessage', {
        chat_id: obj.chat.id,
        text: msgtext,
    })
}

function handleMessage(msgObj) {
    const msgTxt = msgObj.text || "";
    if (msgTxt.charAt(0)=== "/") {
        const command = msgTxt.substr(1);
        switch (command) {
            case "start":
                return sendMessage(msgObj, "Hello ")
                break;
        
            default:
                return sendMessage(msgObj, "un known error by dev")
                break;
        }
    } else
    {
        console.log(msgObj.chat.first_name)
        return sendMessage(msgObj, `Dear ${msgObj.chat.first_name}, the msg you sent is ${msgTxt}`)
    }
}

module.exports = {handleMessage}