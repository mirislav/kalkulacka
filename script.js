function calculate(operation) {
    const inputField = document.getElementById('inputField');
    const inputValue = parseFloat(inputField.value);
    let result;
  
    switch (operation) {
      case 'factorial':
        result = factorial(inputValue);
        break;
      case 'fibonacci':
        result = fibonacci(inputValue);
        break;
      case 'cosine':
        result = Math.cos(inputValue);
        break;
      case 'sine':
        result = Math.sin(inputValue);
        break;
      case 'logarithm':
        result = Math.log(inputValue);
        break;
      case 'basic':
        result = eval(inputField.value)
        break;
      default:
        result = 'Invalid operation';
    }
  
    if (!isNaN(result)) {
      document.getElementById('result').innerText = `Výsledek: ${result}`;
    } else {
        console.log(result)
      document.getElementById('result').innerText = 'Neplatný vstup';
    }
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  