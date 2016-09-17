var moment = require('moment');

/**
 * Returns the days between the dates given
 */
exports.daysBetween = function (date1, date2) {
	var self = this;

	var secDiff = Math.abs(Math.round((date1 - date2) / 1000));

	var days = self.calculateUnit(secDiff, 86400);
	var hours = self.calculateUnit((secDiff - (days * 86400)), 3600);
	var mins = self.calculateUnit((secDiff - (days * 86400) - (hours * 3600)), 60);
	var secs = self.calculateUnit((secDiff - (days * 86400) - (hours * 3600)-(mins * 60)), 1);

	return {
		days: days,
		hours: hours,
		mins: mins,
		secs: secs
	}
};

exports.calculateUnit = function(secDiff, unitSeconds){
    var tmp = Math.abs((tmp = secDiff / unitSeconds)) < 1 ? 0 : tmp;
    return Math.abs(tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp));
};

/**
 * Converts a unix timestamp to a YYYY/MM/DD format
 * @param unix
 */
exports.unixToDate = function (unix) {
    var parsedDate = moment(unix, "X");
    return parsedDate.format("YYYY/MM/DD");
} ;

/**
 * Converts the YYYY/MM/DD format to unix epoch
 * @param date
 * @returns {Number}
 */
exports.dateToUnix = function (date) {
    var parsedDate = moment(date, "YYYY/MM/DD");
    return parsedDate.unix(); // X = Unix Timestamp
};

/**
 * Converts YYY/MM/DD format to YYYY-MM-DD HH:mm:ss
 * @param date
 */
exports.dateToDateTime = function (date) {
    var parsedDate = moment(date, "YYYY/MM/DD");
    return parsedDate.format("YYYY-MM-DD 00:00:00");
};

/**
 * Converts YYYY-MM-DD HH:mm:ss to YYYY/MM/DD
 * @param dateTime
 * @returns {*}
 */
exports.dateTimeToDate = function (dateTime) {
    var parsedDate = moment(dateTime, "YYYY-MM-DD 00:00:00");
    return parsedDate.format("YYYY/MM/DD");
};
