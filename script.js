document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const sem1Input = document.getElementById("sem1");
    const sem2Input = document.getElementById("sem2");
    const resultDisplay = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const sem1SGPA = parseFloat(sem1Input.value);
        const sem2SGPA = parseFloat(sem2Input.value);

        if (isNaN(sem1SGPA) || isNaN(sem2SGPA)) {
            alert("Please enter valid SGPA values.");
        } else {
            const totalSGPA = (sem1SGPA + sem2SGPA) / 2;
            const percentage = (totalSGPA - 0.75) * 10;

            resultDisplay.innerText = `Your percentage is: ${percentage.toFixed(2)}%`;
        }
    });
});
