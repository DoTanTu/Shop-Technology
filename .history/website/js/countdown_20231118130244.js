function countdownTimer(selector) {
  const product = document.querySelector(selector);
  const daysElement = product.querySelector(".days");
  const hoursElement = product.querySelector(".hours");
  const minutesElement = product.querySelector(".minutes");
  const secondsElement = product.querySelector(".seconds");

  let days = parseInt(daysElement.innerText);
  let hours = parseInt(hoursElement.innerText);
  let minutes = parseInt(minutesElement.innerText);
  let seconds = parseInt(secondsElement.innerText);

  const intervalId = setInterval(() => {
    // Hiển thị thời gian còn lại
    daysElement.innerText = String(days).padStart(2, "0");
    hoursElement.innerText = String(hours).padStart(2, "0");
    minutesElement.innerText = String(minutes).padStart(2, "0");
    secondsElement.innerText = String(seconds).padStart(2, "0");

    // Giảm giá trị thời gian
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
        } else {
          clearInterval(intervalId);
          // Hiển thị thông báo hoặc thực hiện hành động khác khi countdown kết thúc
        }
      }
    }
  }, 1000);
}
