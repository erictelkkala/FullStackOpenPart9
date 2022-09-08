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
export const exerciseCalculator = (target: number, trainingHours: Array<number>): result => {
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
    return trainingResult;
};