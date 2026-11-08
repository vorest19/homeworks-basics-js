function parseCount(meaning) {
  let result = Number.parseFloat(meaning);
    if (Number.isNaN(result)) {
      throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(meaning) {
  try {
    return parseCount(meaning);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this._a = a;
    this._b = b;
    this._c = c;

    if (a + b < c || b + c < a || a + c < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this._a + this._b + this._c;
  }

  get area() {
    let p = this.perimeter / 2;
    let formula = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
    return Number(formula.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}
