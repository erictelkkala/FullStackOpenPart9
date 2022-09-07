//  Get the values from the cmd line
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

const calculateBMI = (height: number, weight: number): void => {
    const BMI: number = weight / Math.pow((height / 100), 2);
    if (BMI < 18.5) {
        console.log("Underweight");
    }
    else if (BMI >= 18.5 && BMI < 25) {
        console.log("Normal (healthy weight)");
    }
    else if (BMI >= 25 && BMI < 30) {
        console.log ("Overweight");
    }
    else if (BMI >= 30) {
        console.log("Obese");
    }
    else throw new Error("Invalid input");
};

calculateBMI(height, weight);