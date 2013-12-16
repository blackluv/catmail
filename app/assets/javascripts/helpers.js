GM.Helpers.truncatePreview = function (message) {
    if (message.length > 55) {
        return message.slice(0,55) + '...';
    } else {
        return message;
    }
};
