// Function to calculate the monthly income
function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById("annualIncome").value);
    const monthlyIncome = (annualIncome / 12).toFixed(2);
    document.getElementById("monthlyIncome").innerHTML = "Estimated Monthly Income: £" + monthlyIncome;
}

// Function to calculate the total monthly expenses
function calculateTotalExpenses() {
    let totalExpenses = 0;
    document.querySelectorAll('input[type="number"]').forEach(input => {
        totalExpenses += parseFloat(input.value);
    });
    document.getElementById("totalExpenses").innerHTML = "Total Monthly Expenses: £" + totalExpenses.toFixed(2);
}

// Function to calculate the total savings based on the percentage
function calculateTotalSavings() {
    const leftover = parseFloat(document.getElementById("leftover").innerHTML);
    const savingsPercentage = parseFloat(document.getElementById("savingsPercentage").value);
    const totalSavings = (leftover * (savingsPercentage / 100)).toFixed(2);
    document.getElementById("totalSavings").innerHTML = "Total Savings: £" + totalSavings;
}

// Function to calculate the time required to save for the deposit
function calculateTimeToSave() {
    const propertyCost = parseFloat(document.getElementById("propertyCost").value);
    const savingsTarget = parseFloat(document.getElementById("monthlySavingsTarget").value);

    const depositPercentage = document.querySelector('input[name="depositType"]:checked').value === "residential" ? 0.1 : 0.2;

    const depositAmount = propertyCost * depositPercentage;

    const monthsToSave = Math.ceil(depositAmount / savingsTarget);

    document.getElementById("monthsToSave").innerHTML = "Months to Save: " + monthsToSave;
}

// Function to calculate the percentage of total budget saved
function calculateSavingsProgress() {
    const totalSavings = parseFloat(document.getElementById("totalSavings").value);
    const propertyCost = parseFloat(document.getElementById("propertyCost").value);

    const savingsPercentage = (totalSavings / propertyCost) * 100;

    document.getElementById("savingsProgress").innerHTML = "Savings Progress: " + savingsPercentage.toFixed(2) + "%";
}
