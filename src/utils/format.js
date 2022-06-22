const addZero = (x, n) => {
  while (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
};

const formatTimeDate = (mili) => {
  let date = new Date(mili);
  let dateFormat =
    addZero(date.getHours(), 2) +
    ":" +
    addZero(date.getMinutes(), 2) +
    ":" +
    addZero(date.getSeconds(), 2) +
    ", " +
    addZero(date.getDate(), 2) +
    "/" +
    addZero(date.getMonth() + 1, 2) +
    "/" +
    date.getFullYear();
  return dateFormat;
};
const formatDateTime = (mili) => {
  let date = new Date(mili);
  let dateFormat =
    addZero(date.getDate(), 2) +
    "/" +
    addZero(date.getMonth() + 1, 2) +
    "/" +
    date.getFullYear() +
    " - " +
    addZero(date.getHours(), 2) +
    ":" +
    addZero(date.getMinutes(), 2);
  return dateFormat;
};
const formatDate = (date) => {
  let dateFormat =
    addZero(date.getDate(), 2) +
    "/" +
    addZero(date.getMonth() + 1, 2) +
    "/" +
    date.getFullYear();
  return dateFormat;
};
const formatDateFromMili = (mili) => {
  let date = new Date(mili);
  let dateFormat =
    addZero(date.getDate(), 2) +
    "/" +
    addZero(date.getMonth() + 1, 2) +
    "/" +
    date.getFullYear();
  return dateFormat;
};

const getTime = (startTime) => {
  let currentTime = new Date().getTime();
  let distanceTime = currentTime - startTime;
  let showTime = 0;
  let minutes = Math.floor(distanceTime / 60000);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 30);
  let years = Math.floor(months / 12);
  if (minutes < 60) {
    showTime = minutes + " phút trước";
  } else if (hours < 24) {
    showTime = hours + " giờ trước";
  } else if (days < 7) {
    showTime = days + " ngày trước";
  } else if (weeks < 4) {
    showTime = weeks + " tuần trước";
  } else if (months < 12) {
    showTime = months + " tháng trước";
  } else {
    showTime = years + " năm trước";
  }

  return showTime;
};
export {
  addZero,
  formatDateTime,
  formatTimeDate,
  formatDate,
  formatDateFromMili,
  getTime,
};
