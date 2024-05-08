function calculateMonthlyIncome() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlyIncome = annualIncome / 12;
    document.getElementById('monthlyIncome').textContent = 'Estimated Monthly Income: £' + monthlyIncome.toFixed(2);
}

function addExpense() {
    var expensesDiv = document.getElementById('expenses');
    var expenseDiv = document.createElement('div');
    expenseDiv.classList.add('expense');
    expenseDiv.innerHTML = `
        <input type="text" placeholder="Expense Name">
        <input type="number" placeholder="Expense Amount (£)">
    `;
    expensesDiv.appendChild(expenseDiv);
}

function calculateTotalExpenses() {
    var expenses = document.querySelectorAll('.expense input[type="number"]');
    var totalExpenses = 0;
    expenses.forEach(function (expense) {
        var expenseAmount = parseFloat(expense.value);
        totalExpenses += isNaN(expenseAmount) ? 0 : expenseAmount;
    });
    document.getElementById('totalExpenses').textContent = 'Total Monthly Expenses: £' + totalExpenses.toFixed(2);
}

function calculateSavingsTarget() {
    var leftOver = parseFloat(document.getElementById('leftOver').textContent.split('£')[1]);
    var savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    var monthlySavingsTarget = (leftOver * (savingsPercentage / 100)).toFixed(2);
    document.getElementById('savingsTarget').textContent = 'Monthly Savings Target: £' + monthlySavingsTarget;
}

function calculateTimeToSave() {
    var monthlySavingsTarget = parseFloat(document.getElementById('monthlySavings').value);
    var propertyCost = parseFloat(document.getElementById('propertyCost').value);
    var depositPercentage = parseFloat(document.getElementById('depositPercentage').value);
    var monthsToSave = Math.ceil((propertyCost * depositPercentage - monthlySavingsTarget) / monthlySavingsTarget);
    document.getElementById('monthsToSave').textContent = 'Months to Save for Deposit: ' + monthsToSave;
}

function trackSavingsProgress() {
    var totalSavings = 0;
    var monthsToSave = parseInt(document.getElementById('monthsToSave').textContent.split(':')[1].trim());
    var monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    var savingsTableBody = document.querySelector('#savingsTable tbody');
    savingsTableBody.innerHTML = '';
    for (var i = 1; i <= monthsToSave; i++) {
        var row = document.createElement('tr');
        var monthCell = document.createElement('td');
        monthCell.textContent = 'Month ' + i;
        row.appendChild(monthCell);
        var savingsCell = document.createElement('td');
        savingsCell.textContent = '£' + monthlySavings.toFixed(2);
        row.appendChild(savingsCell);
        totalSavings += monthlySavings;
        var totalSavingsCell = document.createElement('td');
        totalSavingsCell.textContent = '£' + totalSavings.toFixed(2);
        row.appendChild(totalSavingsCell);
        savingsTableBody.appendChild(row);
    }
}

