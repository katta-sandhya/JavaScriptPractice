const calculateRectangleProperties = (length, width) => {//define an arrow function
    // Calculate area
    const area = length * width;
    
    // Calculate perimeter
    const perimeter = 2 * (length + width);
    
    // Return an object containing both area and perimeter
    return [area, perimeter];//if you want to return multiple values from a function, it's best to use an array or an object
}
var rectangleProperties = calculateRectangleProperties(5, 3);//invoke the function
console.log(rectangleProperties);
