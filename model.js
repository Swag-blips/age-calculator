export class Model {
  constructor() {
    this.yearInput = document.getElementById("Year");
    this.monthInput = document.getElementById("Month");
    this.dayInput = document.getElementById("Day");
  }

  handleValidationErrors() {
    let monthInputValue = parseInt(this.monthInput.value.trim());
    let yearInputValue = parseInt(this.yearInput.value.trim());
    let dayInputValue = parseInt(this.dayInput.value.trim());
    let dob = new Date(yearInputValue, monthInputValue - 1, dayInputValue);

    let isValid = true;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let error = { day: "", month: "", year: "" };

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

    this.error = error; // Save error messages for use in view
    return isValid;
  }

  ageCalculation() {
    let dob = new Date(
      this.yearInput.value.trim(),
      this.monthInput.value.trim() - 1,
      this.dayInput.value.trim()
    );

    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDay = dob.getDate();

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let yearAge = currentYear - dobYear;

    let monthAge;
    if (currentMonth > dobMonth) {
      monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      monthAge = 12 + currentMonth - dobMonth;
    }

    let dayAge;
    if (currentDay >= dobDay) {
      dayAge = currentDay - dobDay;
    } else {
      monthAge--;
      dayAge = 31 + currentDay - dobDay;
    }

    this.age = {
      years: yearAge,
      days: dayAge,
      months: monthAge,
    };
  }
}
