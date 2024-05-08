// Function to calculate the estimated monthly income
function calculateMonthlyIncome() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlyIncome = (annualIncome / 12).toFixed(2);
    document.getElementById('monthlyIncome').textContent = 'Estimated Monthly Income: £' + monthlyIncome;
}

// Function to calculate the total monthly expenses
function calculateTotalExpenses() {
    var expenses = document.querySelectorAll('.expense');
    var totalExpenses = 0;
    expenses.forEach(function (expense) {
        var expenseAmount = parseFloat(expense.querySelector('input[type="number"]').value);
        totalExpenses += isNaN(expenseAmount) ? 0 : expenseAmount;
    });
    document.getElementById('totalExpenses').textContent = 'Total Monthly Expenses: £' + totalExpenses.toFixed(2);
}

// Function to calculate what's left after deducting expenses from income
function calculateLeftOver() {
    var monthlyIncome = parseFloat(document.getElementById('monthlyIncome').textContent.split('£')[1]);
    var totalExpenses = parseFloat(document.getElementById('totalExpenses').textContent.split('£')[1]);
    var leftOver = monthlyIncome - totalExpenses;
    document.getElementById('leftOver').textContent = 'What\'s Left: £' + leftOver.toFixed(2);
    var savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    var monthlySavingsTarget = (leftOver * (savingsPercentage / 100)).toFixed(2);
    document.getElementById('savingsTarget').textContent = 'Monthly Savings Target: £' + monthlySavingsTarget;
}

// Function to calculate the time required to save for the deposit
function calculateSavingsTarget() {
    var propertyCost = parseFloat(document.getElementById('propertyCost').value);
    var monthlySavingsTarget = parseFloat(document.getElementById('savingsTarget').textContent.split('£')[1]);
    var monthsToSave = Math.ceil(propertyCost / monthlySavingsTarget);
    document.getElementById('monthsToSave').textContent = 'Months to Save: ' + monthsToSave;
}

// Function to fill the savings bucket and track progress
function fillBucket() {
    var savingsAmount = parseFloat(document.getElementById('savingsAmount').value);
    var savingsBucket = document.getElementById('savingsBucket');
    var bucketProgress = document.getElementById('bucketProgress');
    var currentProgress = parseFloat(bucketProgress.textContent.split(':')[1].trim());
    currentProgress += (savingsAmount / 1000) * 100; // Assuming 1000 is the target amount
    if (currentProgress > 100) {
        currentProgress = 100;
    }
    bucketProgress.textContent = 'Bucket filled: ' + currentProgress.toFixed(2) + '%';
}

// Add more JavaScript functions as needed

