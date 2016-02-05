////////////////////////////////////

// Creating a date

new Date();
// the date NOW

new Date(value);
// pass in MILLISECONDS

new Date(dateString);
new Date('December 17, 1995 03:24:00');
// pass in a STRING that is recognised by `Date.parse()`

new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
new Date(1995, 11, 17);
// pass in YEAR

new Date(2000, 1, 1)
// Tue Feb 01 2000 00:00:00 GMT+1100 (AEDT)
// Note that months are ZERO-based
// Creates a new date object on the 1-th month (Feb) and 1-th date (1st)
// This is done in LOCAL-TIME


new Date(2000, 1, 1).toUTCString()
// "Mon, 31 Jan 2000 13:00:00 GMT"
// Showing that dates are created in LOCAL-TIME

///////////////////

var one = new Date().getTime();
// 1454568084003

one.getFullYear();
// error

var two = new Date();
// Thu Feb 04 2016 17:41:59 GMT+1100 (AEDT)

two.getFullYear();
// 2016


var newDateObject = new Date();
// Thu Feb 04 2016 15:09:49 GMT+1100 (AEDT)
// This creates a JS Date instance
// It is a Date `object`

var newDateString = Date();
// "Thu Feb 04 2016 15:11:12 GMT+1100 (AEDT)"
// This just creates a string


var newDateMilliseconds = Date.now();
// 1454559253563
// Returns the date now in milliseconds

var newDateMilliseconds = new Date.now();
// error



Date.parse('Thu Feb 04 2016 15:09:49 GMT+1100 (AEDT)')
// 1454558989000

////////////////////////////////////////////

// Date.prototype Methods – GETTERS

// These are all LOCAL-TIME values (add 'UTC' after 'get' to get UNIVERSAL-TIME values)

newDateObject.getDay();
// Day of week: 0 - 6



newDateObject.getFullYear();
// Year: 4-digits

newDateObject.getMonth();
// Month: 0 - 11

newDateObject.getDate();
// Returns DATE (day of the month: 1 - 31)

newDateObject.getHours();
// Hours: 0 - 23

newDateObject.getMinutes();
// Mins: 0 - 59

newDateObject.getSeconds();
// Secs: 0 - 59


/////////////////////////////////////////

// Conversion GETTERS

newDateObject.toDateString();
// "Thu Feb 04 2016"


newDateObject.toLocaleString()
// "2/4/2016, 3:19:01 PM"
// The entire date


newDateObject.toLocaleDateString();
// "2/4/2016"
// Just the 'date'
// Month first, cos we're in Australia

newDateObject.toLocaleTimeString()
// "3:19:01 PM"
// Just the time

newDateObject.toUTCString()
// "Thu, 04 Feb 2016 04:19:01 GMT"
// Universal-time