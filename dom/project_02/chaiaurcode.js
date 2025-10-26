// Wait for DOM to load
window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form refresh

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    // Validate inputs
    if (isNaN(height) || height <= 0) {
      result.innerHTML = "Please enter a valid height!";
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      result.innerHTML = "Please enter a valid weight!";
      return;
    }

    // Calculate BMI (height in cm → meters)
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Determine BMI category
    if (bmi < 18.6) {
      result.innerHTML = `Underweight: <span>${bmi}</span>`;
      result.style.color = "#ff9f00";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal: <span>${bmi}</span>`;
      result.style.color = "green";
    } else {
      result.innerHTML = `Overweight: <span>${bmi}</span>`;
      result.style.color = "red";
    }
  });
};
