// Circle
function Circle() {
  this.diameter = null;
}

// Square
function Square() {
  this.side = null;
}

// Rectangle
function Rectangle() {
  this.length = null;
  this.width = null;
}

// Ellipse
function Ellipse() {
  this.aAxis = null;
  this.bAxis = null;
}

// Selectbox
function SelectionBox() {
  this.area = null;
  Circle.call(this);
  Square.call(this);
  Ellipse.call(this);
  Rectangle.call(this);
}

// Select box functionality
SelectionBox.prototype.findCircleArea = function () {
  return Math.PI * this.diameter;
}

SelectionBox.prototype.findSquareArea = function () {
  return this.side * this.side;
}

SelectionBox.prototype.findRectangleArea = function () {
  return this.length * this.width;
}

SelectionBox.prototype.findEllipseArea = function () {
  return Math.PI * this.aAxis * this.bAxis;
}

SelectionBox.prototype.changeArea = function () {
  var field = document.querySelector('input[name="area"]:checked');
  if (field) {
    this.area = field.value;
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    document.getElementById(`${this.area}-form`).style.display = "block";
    document.getElementById('selected-area').innerHTML = field.value;
    field.checked = false;
  } else {
    alert("Please select radio button!")
  }
}

SelectionBox.prototype.clear = function () {
  document.getElementById(`${this.area}-form`).style.display = "none";
  this.area = null;
  this.diameter = null;
  this.side = null;
  this.length = null;
  this.width = null;
  this.aAxis = null;
  this.bAxis = null;
  document.getElementById("step-3").style.display = "none";
  document.getElementById("step-2").style.display = "none";
  document.getElementById("step-1").style.display = "block";
}

SelectionBox.prototype.calculateArea = function () {
  document.getElementById(`${this.area}-form`).style.display = "none";
  document.getElementById("step-2").style.display = "none";

  var field1 = document.getElementById(`value1-${this.area}`);
  var field2 = document.getElementById(`value2-${this.area}`);


  switch (this.area) {
    case "rectangle":
      if (field1 && field2 && field1.value > 0 && field2.value > 0) {
        this.length = field1.value;
        this.width = field2.value;
        const result = this.findRectangleArea();
        document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>${this.area}</b> with length of ${field1.value} and width of ${field2.value}. Below is your result`;
        field1.value = '';
        field2.value = '';
        document.getElementById("result-heading").innerHTML = `The area is ${result}`;
        document.getElementById("step-3").style.display = "block";
      } else {
        alert("Please enter valid value in field")
      }
      break;

    case "circle":
      if (field1 && field1.value > 0) {
        this.diameter = field1.value;
        const result = this.findCircleArea();
        document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>${this.area}</b> with diameter of ${field1.value}. Below is your result`;
        field1.value = '';
        document.getElementById("result-heading").innerHTML = `The area is ${result}`;
        document.getElementById("step-3").style.display = "block";
      } else {
        alert("Please enter valid value in field")
      }
      break;

    case "square":
      if (field1 && field1.value > 0) {
        this.side = field1.value;
        const result = this.findSquareArea();
        document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>${this.area}</b> with side of ${field1.value}. Below is your result`;
        field1.value = '';
        document.getElementById("result-heading").innerHTML = `The area is ${result}`;
        document.getElementById("step-3").style.display = "block";
      } else {
        alert("Please enter valid value in field")
      }
      break;

    case "ellipse":
      if (field1 && field2 && field1.value > 0 && field2.value > 0) {
        this.aAxis = field1.value;
        this.bAxis = field2.value;
        const result = this.findEllipseArea();
        document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>${this.area}</b> with A axis of ${field1.value} and B axis of ${field2.value}. Below is your result`;
        field1.value = '';
        field2.value = '';
        document.getElementById("result-heading").innerHTML = `The area is ${result}`;
        document.getElementById("step-3").style.display = "block";
      } else {
        alert("Please enter valid value in field")
      }
      break;

    default:
      break;
  }
}

// Creaating object of Slectionbox to use it in HTML
const selectionBox = new SelectionBox();
console.log(selectionBox)