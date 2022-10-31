/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const express = require('express');

const bmi = require('./bmiCalculator.ts');
const ex = require('./exerciseCalculator.ts');

const app = express();
app.use(express.json());

app.get('/ping', (_: any, res: { send: (arg0: string) => void; }) => {
  res.send('pong');
});

app.get('/bmi', (req: any, res: { send: (arg0: string) => void; }) => {
  const { height, weight } = req.query;
  res.send(bmi.calculateBmi(height, weight));
});

app.post('/exercise', (req: any, res: { send: (arg0: string) => void; }) => {
  const { daily_exercises, target } = req.body;
  res.send(ex.calculateExercise(daily_exercises, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
