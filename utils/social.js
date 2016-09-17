/**
 * Returns the twitter handle from a given twitter url
 * @param url
 * @returns {*|null}
 */
exports.extractTwitterHandleFromUrl = function (url) {
    if (!url) {
        return null;
    }

    var regex = /(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?@?([^\/\?\s]*)/;
    var matches = url.match(regex);

    var handle = null;

    if (matches && matches[1]) {
        handle = matches[1];
    }

    if (handle) {
        handle = '@' + handle;
    }

    return handle;
};
