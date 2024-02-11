const moment = require("moment");

const getDates = (startDate, endDate) => {
  const dates = [];
  let currentDate = moment(startDate);

  while (currentDate.isSameOrBefore(endDate, "day")) {
    dates.push(currentDate.format("DD-MMM-YYYY"));
    currentDate.add(1, "day");
  }

  return dates;
};

const  dateFormat = (date, formate)=>moment(date).format(formate);
module.exports = {
  getDates,dateFormat
};
