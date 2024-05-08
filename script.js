// Step 1: Calculate Monthly Income
function calculateMonthlyIncome() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var taxRate = getTaxRate(annualIncome);
    var monthlyIncome = annualIncome / 12 * (1 - taxRate);
    document.getElementById('monthlyIncome').innerText = 'Estimated Monthly Income: £' + monthlyIncome.toFixed(2);
}

function getTaxRate(income) {
    if (income <= 12570) {
        return 0;
    } else if (income <= 50270) {
        return 0.20;
    } else if (income <= 125140) {
        return 0.40;
    } else {
        return 0.45;
    }
}

// Step 2: Calculate Total Monthly Expenses
function calculateTotalExpenses() {
    var expenseInputs = document.querySelectorAll('#expenses input[type="number"]');
    var totalExpenses = 0;
    expenseInputs.forEach(function(input) {
        totalExpenses += parseFloat(input.value);
    });
    document.getElementById('totalExpenses').innerText = 'Total Monthly Expenses: £' + totalExpenses.toFixed(2);
}

// Step 3: Calculate Leftover Amount and Savings Target
function calculateLeftoverAndSavings() {
    var monthlyIncome = parseFloat(document.getElementById('monthlyIncome').innerText.split('£')[1]);
    var totalExpenses = parseFloat(document.getElementById('totalExpenses').innerText.split('£')[1]);
    var leftoverAmount = monthlyIncome - totalExpenses;
    document.getElementById('leftoverAmount').innerText = 'What You\'re Left With: £' + leftoverAmount.toFixed(2);
    var savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    var monthlySavingsTarget = leftoverAmount * (savingsPercentage / 100);
    document.getElementById('monthlySavingsTarget').value = monthlySavingsTarget.toFixed(2);
}

// Step 4: Calculate Time to Save for Deposit
function calculateTimeToSave() {
    var monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value);
    var propertyCost = parseFloat(document.getElementById('propertyCost').value);
    var depositPercentage = document.querySelector('input[name="deposit"]:checked').value;
    var depositAmount = propertyCost * depositPercentage;
    var monthsToSave = Math.ceil(depositAmount / monthlySavingsTarget);
    document.getElementById('monthsToSave').innerText = 'Months to Save for Deposit: ' + monthsToSave;
}

// Step 5: Track Monthly Savings
function fillBucket() {
    var monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    var propertyCost = parseFloat(document.getElementById('propertyCost').value);
    var depositPercentage = document.querySelector('input[name="deposit"]:checked').value;
    var depositAmount = propertyCost * depositPercentage;
    var monthsToSave = Math.ceil(depositAmount / monthlySavings);
    var currentMonth = parseInt(document.getElementById('currentMonth').innerText);
    if (currentMonth <= monthsToSave) {
        var progress = (currentMonth / monthsToSave) * 100;
        document.getElementById('savingsBucket').style.width = progress + '%';
        document.getElementById('currentMonth').innerText = currentMonth + 1;
        if (progress >= 25 && progress < 50) {
            alert('Congratulations! You\'ve saved 25% of your deposit goal.');
        } else if (progress >= 50 && progress < 75) {
            alert('Halfway there! You\'ve saved 50% of your deposit goal.');
        } else if (progress >= 75 && progress < 100) {
            alert('Almost there! You\'ve saved 75% of your deposit goal.');
        } else if (progress >= 100) {
            alert('Congratulations! You\'ve reached your deposit goal!');
        }
    } else {
        alert('You\'ve reached the maximum number of months allowed.');
    }
}
