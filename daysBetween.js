function formatDate(date) {
  var monthNames = [
    "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "10",
    "11", "12"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + '/' + day + '/' + year;
}

const date1 = //enter the date you want to compare against like {{this.updatedAt}}
const date2 = new Date();//This will generate todays date

const first = formatDate(new Date(date1));
const second = formatDate(new Date(date2));

function parseDate(str) {
  var mdy = str.split('/');
  return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second-first)/(1000*60*60*24));
}

console.log(datediff(parseDate(first), parseDate(second)));