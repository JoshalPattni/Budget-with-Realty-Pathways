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
    return leftOver;
}

// Function to calculate the monthly savings target and fill the savings bucket
function calculateSavingsTarget() {
    var leftOver = calculateLeftOver();
    var savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    var monthlySavingsTarget = (leftOver * (savingsPercentage / 100)).toFixed(2);
    document.getElementById('savingsTarget').textContent = 'Monthly Savings Target: £' + monthlySavingsTarget;
    var savingsAmount = parseFloat(document.getElementById('savingsAmount').value);
    var savingsBucket = document.getElementById('savingsBucket');
    var bucketProgress = document.getElementById('bucketProgress');
    var currentProgress = parseFloat(bucketProgress.textContent.split(':')[1].trim());
    currentProgress += (savingsAmount / parseFloat(monthlySavingsTarget)) * 100;
    if (currentProgress > 100) {
        currentProgress = 100;
    }
    bucketProgress.textContent = 'Bucket filled: ' + currentProgress.toFixed(2) + '%';
}

// Function to track real-life monthly savings progress
function trackSavingsProgress() {
    var savingsTable = document.getElementById('savingsTable');
    var monthsToSave = parseInt(document.getElementById('monthsToSave').textContent.split(':')[1].trim());
    var totalSavings = parseFloat(document.getElementById('totalSavings').value);
    var monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    var remainingMonths = monthsToSave;
    savingsTable.innerHTML = '';
    for (var i = 1; i <= monthsToSave; i++) {
        var row = document.createElement('tr');
        var monthCell = document.createElement('td');
        monthCell.textContent = 'Month ' + i;
        row.appendChild(monthCell);
        var savingsCell = document.createElement('td');
        savingsCell.textContent = '£' + monthlySavings.toFixed(2);
        row.appendChild(savingsCell);
        totalSavings += monthlySavings;
        var remainingCell = document.createElement('td');
        remainingMonths--;
        remainingCell.textContent = '£' + (totalSavings - (monthlySavings * i)).toFixed(2);
        row.appendChild(remainingCell);
        savingsTable.appendChild(row);
    }
    document.getElementById('totalSavings').value = totalSavings.toFixed(2);
    document.getElementById('remainingMonths').textContent = 'Remaining Months: ' + remainingMonths;
}

// Add more JavaScript functions as needed
