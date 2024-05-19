switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);



  const w = 8;
  switch (w) {
    case 6:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 0:
      day = "Saturday";
      break;
      default:
    day = " not days";
  }
  console.log(day);


  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Looking forward to the Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Soon it is Weekend";
  }
  console.log(text);
  