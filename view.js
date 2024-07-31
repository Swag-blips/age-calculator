export class View {
  constructor() {
    this.yearInput = document.getElementById("Year");
    this.monthInput = document.getElementById("Month");
    this.dayInput = document.getElementById("Day");
    this.yearsValue = document.getElementById("years-value");
    this.monthsValue = document.getElementById("months-value");
    this.daysValue = document.getElementById("days-value");
    this.dayError = document.getElementById("day-error");
    this.monthError = document.getElementById("month-error");
    this.yearError = document.getElementById("year-error");
    this.dayLabel = document.getElementById("day-label");
    this.monthLabel = document.getElementById("month-label");
    this.yearLabel = document.getElementById("year-label");
  }

  clearErrors() {
    this.yearError.innerHTML = "";
    this.monthError.innerHTML = "";
    this.dayError.innerHTML = "";
    this.dayLabel.style.color = "#716F6F";
    this.monthLabel.style.color = "#716F6F";
    this.yearLabel.style.color = "#716F6F";
    this.dayInput.style.border = "1px solid #DCDCDC";
    this.monthInput.style.border = "1px solid #DCDCDC";
    this.yearInput.style.border = "1px solid #DCDCDC";
  }

  displayErrors(error) {
    this.dayError.innerHTML = error.day;
    this.monthError.innerHTML = error.month;
    this.yearError.innerHTML = error.year;
    this.dayLabel.style.color = "#FF5959";
    this.monthLabel.style.color = "#FF5959";
    this.yearLabel.style.color = "#FF5959";
    this.dayInput.style.border = "1px solid #FF5959";
    this.monthInput.style.border = "1px solid #FF5959";
    this.yearInput.style.border = "1px solid #FF5959";
  }

  displayMonth(age) {
    if (age.months > 0) {
      let monthCount = setInterval(updateMonthCount.bind(this), 50);
      let upToMonth = 0;

      function updateMonthCount() {
        this.monthsValue.innerHTML = ++upToMonth;

        if (upToMonth === age.months) {
          clearInterval(monthCount);
        }
      }
    } else {
      this.monthsValue.innerHTML = age.months;
    }
  }

  displayDay(age) {
    if (age.days > 0) {
      let dayCount = setInterval(updateDayCount.bind(this), 50);
      let upToDay = 0;

      function updateDayCount() {
        this.daysValue.innerHTML = ++upToDay;

        if (upToDay === age.days) {
          clearInterval(dayCount);
        }
      }
    } else {
      this.daysValue.innerHTML = age.days;
    }
  }

  displayYear(age) {
    if (age.years > 0) {
      let yearCount = setInterval(updateYearCount.bind(this), 50);
      let upToYear = 0;

      function updateYearCount() {
        this.yearsValue.innerHTML = ++upToYear;

        if (upToYear === age.years) {
          clearInterval(yearCount);
        }
      }
    } else {
      this.yearsValue.innerHTML = age.years;
    }
  }
}
