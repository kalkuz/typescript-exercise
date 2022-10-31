function calculateBmi(height: number, weight: number) {
  const bmi = weight / Math.pow(height / 100, 2);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 23) {
    return "Healthy";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
console.log(calculateBmi(a, b));

module.exports = {
  calculateBmi
};
