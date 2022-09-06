import express from "express";
const app = express();
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

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});