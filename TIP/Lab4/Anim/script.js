class Engine {

  _parentElement = null;
  _objects = [];
  _basket = null;
  _FPS = 144;
  _size = { x: 0, y: 0 };
  _score = 0;
  _scoreElem = null;
  _bounds = [];

  constructor(parentElement, sizeX, sizeY, scoreElem) {
    this._parentElement = parentElement;
    this._scoreElem = scoreElem;
    this._size.x = sizeX;
    this._size.y = sizeY;
    this._parentElement.style.width = sizeX + 'px';
    this._parentElement.style.height = sizeY + 'px';
    this._bounds = this.getBunds(sizeX, sizeY);
    console.log(sizeX, sizeY);

    this.addObject(new Object(ball));
    this._basket = new Basket(basket);

    // setTimeout(() => {
    //   this._objects.forEach(object => object.update(1000 / 1000 / this._FPS))
    // }, 1000) 

    setInterval(() => {
      this._objects.forEach(object => object.update(1000 / 1000 / this._FPS));
      prevMousepos.x = currentMousePos.x;
      prevMousepos.y = currentMousePos.y;
      currentMousePos.x = mousepos.x;
      currentMousePos.y = mousepos.y;
      this._scoreElem.innerText = this._score;
    }, 1000 / this._FPS);
  }

  addObject(object) {
    if (!(object instanceof Object)) {
      return;
    }

    this._objects.push(object);
    this._checkEl = this._parentElement.appendChild(object.getElement());
  }

  checkBounds(bounds, object) {
    const top = !object.checkCollisionWithLine(this._bounds[0], this._bounds[1]);
    const right = !object.checkCollisionWithLine(this._bounds[1], this._bounds[2]);
    const bottom = !object.checkCollisionWithLine(this._bounds[2], this._bounds[3]);
    const left = !object.checkCollisionWithLine(this._bounds[3], this._bounds[0]);
    const basket = !object.checkCollisionWithDot(this._basket._bounds[1]);


    if (this._basket.checkTrigger(object)) {
      this._score += 1;
    }

    if (top && right && bottom && left && basket) {
      return true;
    }

    return false;
  }

  getPosByBounds(bounds, pos, width, height, object) {
    let isHorizontal = false;

    if (object.checkCollisionWithLine(this._bounds[0], this._bounds[1])) {
      isHorizontal = true;
      pos.y = this._bounds[0].y + height / 2;
    }

    if (object.checkCollisionWithLine(this._bounds[1], this._bounds[2])) {
      pos.x = this._bounds[2].x - width / 2;
    }

    if (object.checkCollisionWithLine(this._bounds[2], this._bounds[3])) {
      isHorizontal = true;
      pos.y = this._bounds[2].y - height / 2;
    }

    if (object.checkCollisionWithLine(this._bounds[3], this._bounds[0])) {
      pos.x = this._bounds[0].x + width / 2 ;
    }

    if (object.checkCollisionWithDot(this._basket._bounds[1])) {
      if (this._basket._bounds[1].x < pos.x) {
        pos.x = this._basket._bounds[1].x + width / 2;
      }
  
      if (this._basket._bounds[1].x > pos.x) {
        pos.x = this._basket._bounds[1].x - width / 2;
      }
    }

    return [pos, isHorizontal];
  }

  getBunds(sizeX, sizeY) {
    return [
      { x: 0, y: 0 },
      { x: sizeX, y: 0 },
      { x: sizeX, y: sizeY },
      { x: 0, y: sizeY }
    ]
  }
}

class Object {
  _element = null;
  _mass = 1;
  _position = { x: 250, y: 50 };
  _rotation = 0;
  _forces = [
    new Force(0, 1000)
  ];
  _speed = {
    x: 0,
    y: 0,
  }
  _width = 50;
  _height = 50;
  _bounds = [];
  _mouseDown = false;

  constructor(elem) {
    this._element = elem
    this._element.style = "position: absolute; top: 0px; left: 250px; background-color: red; border-radius: 100%;";
    this._width = this._element.offsetWidth;
    this._height = this._element.offsetHeight;

    this.bounds = this.getBounds(this._position.x, this._position.y);

    this._element.addEventListener('mousedown', (e) => {
      this._mouseDown = true;
      e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
      if (this._mouseDown) {
        this.addForce(new Force((currentMousePos.x - prevMousepos.x) * 5000, (currentMousePos.y - prevMousepos.y) * 5000, 1));
      }

      this._mouseDown = false;
    });
  }

  getElement() {
    return this._element;
  }

  update(deltaTime) {

    if (this._mouseDown) {
      this.setPosition(mousepos.x, mousepos.y);
      this.setSpeed(0, 0);
      
      return;
    }

    const { forceX, forceY } = this.calcForces();

    const accX = forceX / this._mass;
    const accY = forceY / this._mass;
    const nextX = this._position.x + this._speed.x * deltaTime + accX * deltaTime * deltaTime;
    const nextY = this._position.y + this._speed.y * deltaTime + accY * deltaTime * deltaTime;
    const newSpeedX = this._speed.x + accX * deltaTime;
    const newSpeedY = this._speed.y + accY * deltaTime;
    const isPosChanged = this.setPosition(nextX, nextY);

    if (isPosChanged) {
      this.setSpeed(newSpeedX, newSpeedY);
      this.setRotation(deltaTime);
    } else {
      this.setSpeed(0, 0);
    }

    this.checkForces();
    
  }

  setPosition(x, y) {
    let newBounds = this.getBounds(x, y);

    if (!engine.checkBounds(newBounds, this)) {
      const [ newPos, isHorizontal ] = engine.getPosByBounds(newBounds, this._position, 100, 100, this);
      x = newPos.x;
      y = newPos.y;
      newBounds = this.getBounds(x, y);
      if (isHorizontal) { 
        this.addForce(new Force(this._speed.x * 100, -this._speed.y * 100, 2));
      } else {
        this.addForce(new Force(-this._speed.x * 100, -this._speed.y * 100, 2));
      }
    }

    if (this._position.x != x || this._position.y != y) {
      this._position.x = x;
      this._position.y = y;
      this._bounds = newBounds;
      this._element.style.left = x - this._width / 2 + 'px';
      this._element.style.top = y - this._height / 2 + 'px';

      return true;
    }

    return false;
  }

  setRotation(deltaTime) {
    this._rotation = this._rotation + this._speed.x * deltaTime;
    this._element.style.transform = 'rotate(' + this._rotation + 'deg)';
  }

  getBounds(x, y) {
    return [
      { x: x, y: y - this._height / 2 },
      { x: x + this._width / 2, y: y },
      { x: x, y: y + this._height / 2 },
      { x: x - this._width / 2, y: y }
    ]
  }

  setSpeed(x, y) {
    this._speed.x = x;
    this._speed.y = y;
  }

  addForce(force) {
    this._forces.push(force);
  }

  checkForces() {
    this._forces = this._forces.filter(force => {
      force.impulse--;
      return !force.isImpulse || force.impulse;
    });
  }

  calcForces() {
    const forceX = this._forces.reduce((acc, force) => {
      return acc + force.x;
    }, 0);

    const forceY = this._forces.reduce((acc, force) => {
      return acc + force.y;
    }, 0);

    return { forceX, forceY };
  }

  checkCollisionWithDot({x, y}) {
    const radius = this._width / 2;
    const center = { x: this._position.x, y: this._position.y };
    return Math.sqrt((x - center.x) * (x - center.x) + (y - center.y) * (y - center.y)) <= radius;
  }

  checkCollisionWithBall(ball) {
    const radius = this._width / 2;
    const center = { x: this._position.x, y: this._position.y };
    const ballRadius = ball._width / 2;
    const ballCenter = { x: ball._position.x, y: ball._position.y };
    return Math.sqrt((ballCenter.x - center.x) * (ballCenter.x - center.x) + (ballCenter.y - center.y) * (ballCenter.y - center.y)) < radius + ballRadius;
  }

  checkCollisionWithLine(start, end) {
    const radius = this._width / 2;
    const center = { x: this._position.x, y: this._position.y };

    const a = end.y - start.y;
    const b = start.x - end.x;
    const c = end.x * start.y - start.x * end.y;

    const x = center.x;
    const y = center.y;

    const d = Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);

    return d < radius;
  }

}

class Basket {
  _element = null;
  _position = { x: 225, y: 75 };
  _width = 150;
  _height = 150;
  _bounds = [];
  _triggers = [];
  _state = 0; // 0 - no triggers, 1 - trigger 1

  constructor(elem) {
    this._element = elem;
    this._width = +this._element.offsetWidth;
    this._height = +this._element.offsetHeight;
    this._position = { x: +this._element.offsetLeft + this._width / 2, y:  +this._element.offsetTop + this._height / 2 };
    this._bounds = this.getBounds(this._position.x, this._position.y);
    this._triggers = this.getTriggers();
  }

  getBounds(x, y) {
    return [
      { x: x - this._width / 2, y: y - this._height / 2 },
      { x: x + this._width / 2, y: y - this._height / 2 },
      { x: x + this._width / 2, y: y + this._height / 2 },
      { x: x - this._width / 2, y: y + this._height / 2 }
    ]
  }

  getTriggers() {
    return [
      { x: this._position.x, y: this._position.y - this._height / 2 },
      { x: this._position.x, y: this._position.y + this._height / 2 },
    ];
  }

  checkTrigger(ball) {
    if (this._state === 0 && ball.checkCollisionWithDot(this._triggers[0])) {
      this._state = 1;
      return false;
    }
    if (this._state === 1 && ball.checkCollisionWithDot(this._triggers[1])) {
      this._state = 0;
      return true;
    } else if (ball._position.x > this._bounds[1].x) {
      this._state = 0;
      return false;
    } 
    return false;
  }
}

class Force {
  x = 0;
  y = 0;
  isImpulse = false;
  impulse = 0;

  constructor(x, y, impulse = 0) {
    this.x = x;
    this.y = y;
    this.isImpulse = !!impulse;
    this.impulse = impulse;
  }
}

const mousepos = { x: 0, y: 0 };
let prevMousepos = { x: 0, y: 0 };
let currentMousePos = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
  mousepos.x = e.clientX;
  mousepos.y = e.clientY;
});

const engine = new Engine(cover, 1000, 500, score);