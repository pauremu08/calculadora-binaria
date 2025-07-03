function calcular() {
    const bin11 = document.getElementById("bin11").value.trim();
    const bin22 = document.getElementById("bin22").value.trim();
    const op1 = document.getElementById("operador1").value;

    // Validar binarios
    if (!/^[01]+$/.test(bin11) || !/^[01]+$/.test(bin22)) {
        document.getElementById("resultado1").innerText = "❌ Solo se permiten números binarios (0 y 1)";
        return;
    }

    const num11 = parseInt(bin11, 2);
    const num22 = parseInt(bin22, 2);
    let result1;

    switch (op1) {
        case "+":
            result1 = num11 + num22;
            break;
        case "-":
            result1 = num11 - num22;
            break;
        case "*":
            result1 = num11 * num22;
            break;
        case "/":
            if (num22 === 0) {
                document.getElementById("resultado").innerText = "❌ División entre cero no permitida";
                return;
            }
            result1 = Math.floor(num11 / num22); // División entera
            break;
        default:
            result1 = 0;
    }

    // Mostrar resultado en binario
    document.getElementById("resultado1").innerText = `Resultado: ${result.toString(2)}`;
}


function calculate() {
    const bin1 = document.getElementById("bin1").value;
    const bin2 = document.getElementById("bin2").value;
    const operation = document.getElementById("operation").value;

    // Validar entradas
    if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
        document.getElementById("result").textContent = "Entradas no válidas. Usa solo 0 y 1.";
        return;
    }

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                document.getElementById("result").textContent = "No se puede dividir por 0.";
                return;
            }
            result = Math.floor(num1 / num2);
            break;
        default:
            result = 0;
    }

    const binaryResult = (result >>> 0).toString(2); // Soporta negativos también
    document.getElementById("result").textContent = "Resultado: " + binaryResult;
}