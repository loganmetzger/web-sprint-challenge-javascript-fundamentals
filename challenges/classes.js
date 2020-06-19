// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.height * this.width;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }


class CubeMaker {
    constructor(att) {
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }

    volume() {
        return this.length * this.height * this.width;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cube = new CubeMaker({
    length: 4,
    height: 5,
    width: 5,
});

console.log(cube);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.