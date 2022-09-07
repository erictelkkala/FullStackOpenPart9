import express from "express";
import { exerciseCalculator } from "./exerciseCalculator";
const app = express();
// Enable the parsing of JSON
app.use(express.json());
import {webBMI} from "./webBMI";

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    // Get the values from the url
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    // If the values are not numbers, send an error message
    if (isNaN(height) || isNaN(weight)) {
        res.send({
            error: "Provided parameters were not numbers!"
        });
    } else {
        // Send back a JSON object
        res.send({
            weight: weight,
            height: height,
            bmi: webBMI(height, weight)
        });
    }
});

app.post('/exercises', (req, res) => {
    interface body {
        target: number;
        daily_exercises: Array<number>;
    }
    // The values are in the body
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body: body = req.body;
    // If the values are not numbers, send an error message
    if (isNaN(body.target) || body.daily_exercises.some((hours: number) => isNaN(hours))) {
        res.send({
            error: "Provided parameters were not numbers!"
        });
    }
    // If the values are negative, send an error message
    else if (body.target < 0 || body.daily_exercises.some((hours: number) => hours < 0)) {
        res.send({
            error: "Provided parameters were negative!"
        });
    }
    // If the values are valid, send the result
    else {
        res.send(exerciseCalculator(body.target, body.daily_exercises));
    }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});