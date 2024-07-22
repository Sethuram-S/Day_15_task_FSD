document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.getElementById('calculator');
    
    const screen = document.createElement('div');
    screen.id = 'screen';
    screen.className = 'screen';
    calculator.appendChild(screen);
    
    const buttons = [
        'C', '←', '.', '*', 
        '7', '8', '9', '/', 
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '00', '  =  ',
    ];
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    calculator.appendChild(buttonContainer);
    
    buttons.forEach(symbol => {
        const button = document.createElement('button');
        button.textContent = symbol;
        button.addEventListener('click', () => handleButtonClick(symbol));
        buttonContainer.appendChild(button);
    });
    
    document.addEventListener('keydown', handleKeyPress);

    let currentInput = '';
    let memory = 0;

    function handleButtonClick(symbol) {
        if (symbol === 'C') {
            currentInput = '';
        } else if (symbol === '←') {
            currentInput = currentInput.slice(0, -1);
        } else if (symbol === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput += symbol;
        }
        screen.textContent = currentInput;
    }

    function handleKeyPress(event) {
        const allowedKeys = '0123456789';
        if (allowedKeys.includes(event.key)) {
            currentInput += event.key;
            screen.textContent = currentInput;
        } else if (event.key === 'Enter') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
            screen.textContent = currentInput;
        } else if (event.key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            screen.textContent = currentInput;
        } else {
            alert('Only numbers are allowed');
        }
    }
});