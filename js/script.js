
function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    result.innerText = "Please enter valid values";
    result.style.color = "red";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    result.style.color = "orange";
  } else if (bmi < 25) {
    category = "Normal";
    result.style.color = "green";
  } else if (bmi < 30) {
    category = "Overweight";
    result.style.color = "darkorange";
  } else {
    category = "Obese";
    result.style.color = "red";
  }

  result.innerText = `BMI: ${bmi.toFixed(2)} (${category})`;

  localStorage.setItem("lastBMI", result.innerText);
}

window.onload = function () {
  const saved = localStorage.getItem("lastBMI");
  if (saved) {
    document.getElementById("result").innerText = saved;
  }
};
alert("JS is connected");


