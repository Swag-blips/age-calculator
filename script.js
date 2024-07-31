"use strict";

let yearInput = document.getElementById("Year");
let monthInput = document.getElementById("Month");
let dayInput = document.getElementById("Day");
let submitButton = document.getElementById("submit-button");
let yearsValue = document.getElementById("years-value");
let monthsValue = document.getElementById("months-value");
let daysValue = document.getElementById("days-value");
let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");
let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");

console.log(yearInput, monthInput, dayInput);

document.addEventListener("DOMContentLoaded", () => {
  let age = {};
  let error = {
    day: "",
    month: "",
    year: "",
  };

  const handleValidationErrors = () => {
    let monthInputValue = parseInt(monthInput.value.trim());
    let yearInputValue = parseInt(yearInput.value.trim());
    let dayInputValue = parseInt(dayInput.value.trim());
    let dob = new Date(
      yearInputValue,
      monthInputValue - 1, // Fix month indexing
      dayInputValue
    );

    console.log(monthInputValue);
    console.log(monthInputValue == 4);

    let isValid = true;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    if (!dayInputValue) {
      error.day = "This field is required";
      isValid = false;
    } else if (dayInputValue > 31 || dayInputValue <= 0) {
      isValid = false;
      error.day = "Must be a valid day";
    } else {
      error.day = "";
    }

    if (!monthInputValue) {
      error.month = "This field is required";
      isValid = false;
    } else if (monthInputValue > 12 || monthInputValue <= 0) {
      isValid = false;
      error.month = "Must be a valid Month";
    } else {
      error.month = "";
    }

    if (!yearInputValue) {
      error.year = "This field is required";
      isValid = false;
    } else if (yearInputValue > currentYear || yearInputValue < 1500) {
      isValid = false;
      error.year = "Must be in the past or correct";
    } else if (dob > currentDate) {
      isValid = false;
      error.day = "Must be a valid date";
    } else {
      error.year = "";
    }

    if (
      monthInputValue === 4 ||
      monthInputValue === 6 ||
      monthInputValue === 9 ||
      monthInputValue === 11
    ) {
      if (dayInputValue >= 31) {
        error.day = "Must be a valid date";
        isValid = false;
      }
    }

    return isValid;
  };

  const clearErrors = () => {
    yearError.innerHTML = "";
    monthError.innerHTML = "";
    dayError.innerHTML = "";
    dayLabel.style.color = "#716F6F";
    monthLabel.style.color = "#716F6F";
    yearLabel.style.color = "#716F6F";
    dayInput.style.border = "1px solid #DCDCDC";
    monthInput.style.border = "1px solid #DCDCDC";
    yearInput.style.border = "1px solid #DCDCDC";
  };

  const displayErrors = () => {
    dayError.innerHTML = error.day;
    monthError.innerHTML = error.month;
    yearError.innerHTML = error.year;
    dayLabel.style.color = "#FF5959";
    monthLabel.style.color = "#FF5959";
    yearLabel.style.color = "#FF5959";
    dayInput.style.border = "1px solid #FF5959";
    monthInput.style.border = "1px solid #FF5959";
    yearInput.style.border = "1px solid #FF5959";
  };

  let ageCalculation = () => {
    let dob = new Date(
      yearInput.value.trim(),
      monthInput.value.trim() - 1, // Fix month indexing
      dayInput.value.trim()
    );

    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDay = dob.getDate();

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;

    let currentDay = currentDate.getDate();

    // Get year
    let yearAge = currentYear - dobYear;

    if (yearAge <= 0) {
    }

    // Get months
    let monthAge;
    if (currentMonth > dobMonth) {
      monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      monthAge = 12 + currentMonth - dobMonth;
    }

    // Get days
    let dayAge;
    if (currentDay >= dobDay) {
      dayAge = currentDay - dobDay;
    } else {
      monthAge--;
      dayAge = 31 + currentDay - dobDay;
    }

    age = {
      years: yearAge,
      days: dayAge,
      months: monthAge,
    };
  };

  let displayMonth = (age) => {
    if (age.months > 0) {
      let monthCount = setInterval(updateMonthCount);
      let upToMonth = 0;

      function updateMonthCount() {
        monthsValue.innerHTML = ++upToMonth;

        if (upToMonth === age.months) {
          clearInterval(monthCount);
        }
      }
    } else {
      monthsValue.innerHTML = age.months;
    }
  };

  let displayDay = (age) => {
    if (age.days > 0) {
      let dayCount = setInterval(updateDayCount);
      let upToDay = 0;

      function updateDayCount() {
        daysValue.innerHTML = ++upToDay;

        if (upToDay === age.days) {
          clearInterval(dayCount);
        }
      }
    } else {
      daysValue.innerHTML = age.days;
    }
  };

  let displayYear = (age) => {
    if (age.years > 0) {
      let yearCount = setInterval(updateYearCount);

      let upToYear = 0;
      function updateYearCount() {
        yearsValue.innerHTML = ++upToYear;

        if (upToYear === age.years) {
          console.log(age.years);
          clearInterval(yearCount);
        }
      }
    } else {
      yearsValue.innerHTML = age.years;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidationErrors()) {
      clearErrors();
      ageCalculation();
      displayYear(age);
      displayMonth(age);
      displayDay(age);
    } else {
      displayErrors();
    }
  };

  submitButton.addEventListener("click", handleSubmit);
});
