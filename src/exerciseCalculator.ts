// Interface for the result object
interface result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

// Args: array of numbers, target number
const exerciseCalculator = (target: number, trainingHours: Array<number>): void => {
    // Initial values
    const trainingResult: result = {
        periodLength: trainingHours.length,
        trainingDays: trainingHours.filter(hours => hours > 0).length,
        success: trainingHours.reduce((a, b) => a + b, 0) / trainingHours.length >= target,
        rating: 0,
        ratingDescription: "",
        target: target,
        average: trainingHours.reduce((a, b) => a + b, 0) / trainingHours.length
    };

    // Calculate the rating and the rating description depending on the average and target
    if (trainingResult.average >= target) {
        trainingResult.rating = 3;
        trainingResult.ratingDescription = "Great job!";
        // Rating 2 if the average is at least 75% of the target
    } else if (trainingResult.average >= target * 0.75) {
        trainingResult.rating = 2;
        trainingResult.ratingDescription = "Not too bad but could be better";
    } else {
        trainingResult.rating = 1;
        trainingResult.ratingDescription = "You could try harder";
    }

    // Print the result
    console.log(trainingResult);
};

// Get the values from the cmd line
const targetArgument: number = Number(process.argv[2]);
// Get the training hours from the cmd line and slice the first two
const trainingHours: Array<number> = process.argv.slice(3).map(hours => Number(hours));

// Error handling
if (process.argv.length < 4) {
    throw new Error("Not enough arguments");
} else if (isNaN(targetArgument) || trainingHours.some(hours => isNaN(hours))) {
    throw new Error("Invalid input"); // If the arguments are not numbers
} else if (targetArgument < 0 || trainingHours.some(hours => hours < 0)) {
    throw new Error("Numbers cannot be negative");
} else {
    // Call the function with the provided arguments
    exerciseCalculator(targetArgument, trainingHours);
}