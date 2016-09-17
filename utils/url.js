var url = require('url');

exports.extractDomainFromUrl = function (urlStr) {
    var urlObject = url.parse(urlStr);
    return urlObject.hostname;
};

exports.extractDomainAndPortFromUrl = function (urlStr) {
    var urlObject = url.parse(urlStr);
    return urlObject.host;
};

exports.extractUrlParameters = function (urlStr) {
    var urlObject = url.parse(urlStr, true); // url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
    return urlObject.query;
};

exports.extractDomain = function (url) {
    var domain;

    // find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    // find & remove port number
    domain = domain.split(':')[0];

    return domain;
};

exports.serialize = function (object) {
    var str = [];

    for(var p in object) {
        if (object.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
        }
    }

    return str.join("&");
};
