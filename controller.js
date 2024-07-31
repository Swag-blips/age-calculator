import { View } from "./view.js";
import { Model } from "./model.js";

let submitButton = document.getElementById("submit-button");

document.addEventListener("DOMContentLoaded", () => {
  const model = new Model();
  const view = new View();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (model.handleValidationErrors()) {
      view.clearErrors();
      model.ageCalculation();
      view.displayYear(model.age);
      view.displayMonth(model.age);
      view.displayDay(model.age);
    } else {
      view.displayErrors(model.error);
    }
  };

  submitButton.addEventListener("click", handleSubmit);
});
