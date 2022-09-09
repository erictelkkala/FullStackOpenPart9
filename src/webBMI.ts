// Export the module
export const webBMI = (height: number, weight: number): string => {
    const BMI: number = weight / Math.pow((height / 100), 2);
    if (BMI < 18.5) {
        return "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 25) {
        return "Normal (healthy weight)";
    }
    else if (BMI >= 25 && BMI < 30) {
        return "Overweight";
    }
    else if (BMI >= 30) {
        return "Obese";
    }
    else throw new Error("Invalid input");
};