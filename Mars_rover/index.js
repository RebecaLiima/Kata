class MarsRover {
    constructor(x, y, direction, gridSize = 10) {
      this.x = x;
      this.y = y;
      this.direction = direction; // 'N', 'E', 'S', 'W'
      this.gridSize = gridSize;
    }
  
    execute(commands) {
      for (let command of commands) {
        if (command === 'M') {
          this.move();
        } else if (command === 'L' || command === 'R') {
          this.turn(command);
        }
      }
    }
  
    move() {
      const moves = {
        N: [0, 1],
        E: [1, 0],
        S: [0, -1],
        W: [-1, 0],
      };
  
      this.x = (this.x + moves[this.direction][0] + this.gridSize) % this.gridSize;
      this.y = (this.y + moves[this.direction][1] + this.gridSize) % this.gridSize;
    }
  
    turn(direction) {
      const directions = ['N', 'E', 'S', 'W'];
      let idx = directions.indexOf(this.direction);
      if (direction === 'L') {
        idx = (idx + 3) % 4; // virar esquerda
      } else {
        idx = (idx + 1) % 4; // virar direita
      }
      this.direction = directions[idx];
    }
  
    getPosition() {
      return `${this.x},${this.y},${this.direction}`;
    }
  }
  
  // Exemplo de uso:
  const rover = new MarsRover(0, 0, 'N');
  rover.execute('MMRMMRMRRM');
  console.log(rover.getPosition()); // Exemplo: 2,3,S
  