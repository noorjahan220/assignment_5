document.getElementById('donate-btn').addEventListener('click', function(){
    const addMoneyInput = document.getElementById('input-add-money').value;

    if(addMoneyInput >= 0 ){
        const accountBalance = document.getElementById('account-balance').innerText;
      
      const mainBalance = document.getElementById('total-amount').innerText;
      const mainBalanceNumber = parseFloat(mainBalance);
    const addMoneyNumber = parseFloat(addMoneyInput);
    
    const balanceNumber = parseFloat(accountBalance);
    const newBalance = addMoneyNumber + balanceNumber;
    const newMainBalance = mainBalanceNumber - addMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('total-amount').innerText = newMainBalance;


    }
    else{
        alert('Invalid input!')
    }

})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('card-section').classList.add('hidden');
});

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('card-section').classList.remove('hidden');

})
