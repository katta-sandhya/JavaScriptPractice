// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Angle in degrees
const angleInDegrees = 225;

// Convert degrees to radians
const angleInRadians = degreesToRadians(angleInDegrees);

// Calculate sine
const sineValue = Math.sin(angleInRadians);

console.log("Sine of", angleInDegrees, "degrees is:", sineValue);
