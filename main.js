function SuperMath() {
  this.check = function(obj) {
    var result;
    var validOperators = ['+', '-', '/', '*', '%'];
    
    if (validOperators.includes(obj.znak)) {
      var confirmation = confirm(`Ви хочете виконати операцію ${obj.znak} з числами ${obj.X} і ${obj.Y}?`);
      
      if (confirmation) {
        switch (obj.znak) {
          case '+':
            result = obj.X + obj.Y;
            break;
          case '-':
            result = obj.X - obj.Y;
            break;
          case '/':
            result = obj.X / obj.Y;
            break;
          case '*':
            result = obj.X * obj.Y;
            break;
          case '%':
            result = obj.X % obj.Y;
            break;
        }
        
        alert(`Результат операції: ${result}`);
      } else {
        var newX = this.input('X');
        var newY = this.input('Y');
        var newZnak = this.input('znak');
        
        var newObj = {X: newX, Y: newY, znak: newZnak};
        this.check(newObj);
      }
    } else {
      alert('Неприпустимий оператор! Будь ласка, введіть дійсний оператор.');
    }
  };
  
  this.input = function(property) {
    var value = prompt(`Введіть значення для ${property}:`);
    return value;
  };
}

var p = new SuperMath();
var obj = {X: 12, Y: 3, znak: '/'};
p.check(obj);