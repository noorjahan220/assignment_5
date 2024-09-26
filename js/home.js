// money add and sum
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

//    add to transaction history

const date = new Date();
        
const div = document.createElement('div');
div.innerHTML = `
 <h4 class = "font-bold">${addMoneyNumber}Taka is Donated for famine-2024 at  Bangladesh</h4>
<p class = "font-medium">${date}</p>`
document.getElementById('donation-history').appendChild(div);


openModal();

   }

else{
        alert('Invalid input!')
    }
});



function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// card 2

document.getElementById('donate-btn-two').addEventListener('click', function(){
    const addMoneyInputTwo = document.getElementById('input-add-money-two').value;

    if(addMoneyInputTwo >= 0){
        const accountBalanceTwo = document.getElementById('account-balance-two').innerText;

        const mainBalanceTwo = document.getElementById('total-amount').innerText;
        const mainBalanceTwoNumber = parseFloat(mainBalanceTwo);
        const addMoneyInputTwoNumber = parseFloat(addMoneyInputTwo);

        const balanceNumberTwo = parseFloat(accountBalanceTwo);

        const newBalanceTwo = addMoneyInputTwoNumber + balanceNumberTwo;

        const newMainBalanceTwo = mainBalanceTwoNumber - addMoneyInputTwoNumber;

        document.getElementById('account-balance-two').innerText = newBalanceTwo;
        document.getElementById('total-amount').innerText = newMainBalanceTwo;


        
        const date = new Date();
        
        const div = document.createElement('div');
        div.innerHTML = `
         <h4 class = "font-bold">${addMoneyInputTwoNumber}Taka is Donated for famine-2024 at  Bangladesh</h4>
        <p class = "font-medium">${date}</p>`
        document.getElementById('donation-history-one').appendChild(div);
    

        openModal();
    }
    else{
        alert('Invalid input!')
    }


   
})




// card 3

document.getElementById('donate-btn-three').addEventListener('click', function(){
    const addMoneyInputThree = document.getElementById('input-add-money-three').value;

    if(addMoneyInputThree >= 0){
        const accountBalanceThree = document.getElementById('account-balance-three').innerText;

        const mainBalanceThree = document.getElementById('total-amount').innerText;
        const mainBalanceThreeNumber = parseFloat(mainBalanceThree);
        const addMoneyInputThreeNumber = parseFloat(addMoneyInputThree);

        const balanceNumberThree = parseFloat(accountBalanceThree);

        const newBalanceThree = addMoneyInputThreeNumber + balanceNumberThree;

        const newMainBalanceThree = mainBalanceThreeNumber - addMoneyInputThreeNumber;

        document.getElementById('account-balance-three').innerText = newBalanceThree;
        document.getElementById('total-amount').innerText = newMainBalanceThree;


        
        const date = new Date();
        
        const div = document.createElement('div');
        div.innerHTML = `
         <h4 class = "font-bold">${addMoneyInputThree}Taka is Donated for famine-2024 at  Bangladesh</h4>
        <p class = "font-medium">${date}</p>`
        document.getElementById('donation-history-two').appendChild(div);
    

        openModal();
    }
    else{
        alert('Invalid input!')
    }


   
})




// history section hide
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('card-section').classList.add('hidden');
});

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('card-section').classList.remove('hidden');

})



document.getElementById('history-btn').addEventListener('click', function(){
    
})


