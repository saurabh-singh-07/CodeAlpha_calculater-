const display = document.getElementById("display");
    let currentInput = "";

    function appendInput(value){
            currentInput += value;
            display.textContent = currentInput;
    }
    function clearDisplay() {
            currentInput = "";
            display.textContent = "0";
                        
    }
    function calculateResult() {
        try {
                const result = eval(currentInput);
                display.textContent = result;
                currentInput = result.toString();
            }                         

                                  
             catch (e) {
                    display.textContent = "Error";
                    currentInput = "";
        }
                                                                      
    }
    document.addEventListener("keydown", function (e) {
              const key = e.key;
              if (/[0-9+\-*/().]/.test(key)) {
                    appendInput(key);
             
            }
            else if (key === "Enter") {
                        calculateResult();
            } else if (key === "Backspace") {
                        currentInput = currentInput.slice(0, -1);
                        display.textContent = currentInput || "0";
            } else if (key.toLowerCase() === "c") {
                        clearDisplay();
            }
    });
            

