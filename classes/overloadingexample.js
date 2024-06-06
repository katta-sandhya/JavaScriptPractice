class Shape {
    area(...args) {
      if (args.length === 1 && typeof args[0] === 'number') {
        // Circle: area(radius)
        const [radius] = args;
        return Math.PI * radius * radius;
      } else if (args.length === 2 && args.every(arg => typeof arg === 'number')) {
        // Rectangle: area(length, width)
        const [length, width] = args;
        return length * width;
      } else if (args.length === 3 && args.every(arg => typeof arg === 'number')) {
        // Triangle: area(base, height)
        const [base, height] = args;
          return  0.5 * base * height;
      } else {
        throw new Error('Invalid arguments');
      }
    }
  }
  
  // Using the Shape class
  const shape = new Shape();
  
  console.log(` ${shape.area(5).toFixed(2)}`); // Circle: π * r^2
  console.log(` ${shape.area(4, 6)}`); // Rectangle: length * width
  console.log(` ${shape.area(3, 4)}`); // Triangle: 0.5 * base * height
  

  