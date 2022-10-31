interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number,
} 

function calculateExercise(exercises: Array<number>, target: number) : Result {
  const avg = exercises.reduce((p, c) => p + c, 0) / exercises.length;
  const rating = 1 + 2 * Math.min(avg / target, 1);
  return {
    periodLength: exercises.length,
    trainingDays: exercises.filter((e) => e > 0).length,
    success: rating > 2.5,
    rating,
    ratingDescription: "Not bad",
    target,
    average: avg,
  };
}

const a1 = Number(process.argv[2]);
const b1: Array<number> = process.argv.slice(3).map((e) => Number(e));
console.log(calculateExercise(b1, a1));

module.exports = {
  calculateExercise,
};