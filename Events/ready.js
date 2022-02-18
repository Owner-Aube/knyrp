module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "PROJECT:NEEZUN/KNYRP/STATUS"
        }
    });
};