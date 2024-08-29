// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) 
{
    if (count < 0)
    {
        console.log("Value was negative.")
    }
    for (var i = 1; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
printOdds(20);
printOdds(-50);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;

    if (age < 16)
    {
        console.log(belowSixteen);
    } else if (age == null && userName == null){
        console.log("Sorry, but you need to input a name and age.");
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Stewart", 20);
checkAge("Henry", 10);
checkAge();


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whatQuadrant(x, y)
{
    let cords = `(${x}, ${y}) is`;
    let quadrant = "";
    if (x == 0 && y == 0) {
        quadrant = ("on the origin.");
    } else if (x == 0 && y > 0) {
        quadrant = ("on the y axis.");
    } else if (x > 0 && y == 0) {
        quadrant = ("on the x axis.");
    } else if (x > 0 && y > 0) {
        quadrant = ("in Quadrant 1");
    } else if (x < 0 && y > 0) {
        quadrant = ("in Quadrant 2");
    } else if (x < 0 && y < 0) {
        quadrant = ("in Quadrant 3");
    } else {
        quadrant = ("in Quadrant 4");
    }
    console.log(`${cords} ${quadrant}`);
}

whatQuadrant(-4, -9);
whatQuadrant(7, -10);
whatQuadrant(-2, 40);
whatQuadrant(0, 8);
whatQuadrant(1, 0);
whatQuadrant(0, 0);
whatQuadrant(9, 4);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function checkTriangle(a, b, c)
{
    if (a + b > c && a + c > b && b + c > a)
    {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Invalid Triangle`
    }
    
}

console.log(checkTriangle(4, 6, 9));
console.log(checkTriangle(7, 7, 7));
console.log(checkTriangle(5, 8, 8));
console.log(checkTriangle(4, 4, 8));


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage(planLimit, day, usage)
{
    let daysLeft = 30 - day;
    let average = planLimit / 30;
    let userAverage = usage / day;
    let use = "";
    let exceed = (userAverage * 30) - planLimit;
    let averageBelow = (planLimit - usage) / daysLeft;

    if (userAverage > average){
        use = "EXCEEDING";
    } else if (userAverage < average) {
        use = "BELOW";
    }

    console.log(`${day} days used, ${daysLeft} days remaining`);
    console.log(`Average Daily use: ${average} GB/day`);
    if (use == "EXCEEDING") 
    {
        console.log(`You are EXCEEDING your average daily use (${userAverage} GB/day),
        continuing this high usage, you'll exceed your data plan by ${exceed} GB.
        To stay below your data plan, use no more than ${averageBelow} GB/day`);

    } else if (use == "BELOW") {
        console.log(`You are BELOW your average daily use! (${userAverage} GB/day) 
        Good job!`);
    }
}

dataUsage(100, 15, 56)
console.log("----------------------")
dataUsage(100, 15, 40)