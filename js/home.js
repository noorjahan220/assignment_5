// money add and sum
document.getElementById('donate-btn').addEventListener('click', function () {
    const addMoneyInput = document.getElementById('input-add-money').value;

    if (addMoneyInput >= 0) {

        const accountBalance = document.getElementById('account-balance').innerText;

        const mainBalance = document.getElementById('total-amount').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);
        const addMoneyNumber = parseFloat(addMoneyInput);

        const balanceNumber = parseFloat(accountBalance);
        const newBalance = addMoneyNumber + balanceNumber;
        const newMainBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById('account-balance').innerHTML =`<img src="assets/coin.png"
                                    alt="">${newBalance}<p>BDT</p>` ;
        document.getElementById('total-amount').innerHTML =`<img src="assets/coin.png" alt="">${newMainBalance}<p>BDT
                            </p>`;
        openModal();

        //    add to transaction history

        const date = new Date();

        const div = document.createElement('div');

        div.innerHTML = `
     <div class = "border-2 border-gray-900 p-4">
      <h4 class = "font-bold text-[14px]">${addMoneyNumber}Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
    <p class = "font-light  text-[12px]">${date}</p>
     </div>
 `
        document.getElementById('donation-history').appendChild(div);
}

    else {
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

document.getElementById('donate-btn-two').addEventListener('click', function () {
    const addMoneyInputTwo = document.getElementById('input-add-money-two').value;

    if (addMoneyInputTwo >= 0) {
        const accountBalanceTwo = document.getElementById('account-balance-two').innerText;

        const mainBalanceTwo = document.getElementById('total-amount').innerText;
        const mainBalanceTwoNumber = parseFloat(mainBalanceTwo);
        const addMoneyInputTwoNumber = parseFloat(addMoneyInputTwo);

        const balanceNumberTwo = parseFloat(accountBalanceTwo);

        const newBalanceTwo = addMoneyInputTwoNumber + balanceNumberTwo;

        const newMainBalanceTwo = mainBalanceTwoNumber - addMoneyInputTwoNumber;

       


        document.getElementById('account-balance-two').innerHTML = `<img src="assets/coin.png"
        alt="">${newBalanceTwo}<p>BDT</p>`;
        document.getElementById('total-amount').innerHTML =`<img src="assets/coin.png" alt="">${newMainBalanceTwo}<p>BDT</p>`;

        openModal();

        const date = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
        <div class = "border-2 border-gray-900 p-4">
         <h4 class = "font-bold text-[14px]">${addMoneyInputTwoNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
        <p class = "font-light  text-[12px]">${date}</p>
        </div>`
        document.getElementById('donation-history-one').appendChild(div);

        
    }
    else {
        alert('Invalid input!')
    }
})
// card 3

document.getElementById('donate-btn-three').addEventListener('click', function () {
    const addMoneyInputThree = document.getElementById('input-add-money-three').value;

    if (addMoneyInputThree >= 0) {
        const accountBalanceThree = document.getElementById('account-balance-three').innerText;

        const mainBalanceThree = document.getElementById('total-amount').innerText;
        const mainBalanceThreeNumber = parseFloat(mainBalanceThree);
        const addMoneyInputThreeNumber = parseFloat(addMoneyInputThree);

        const balanceNumberThree = parseFloat(accountBalanceThree);

        const newBalanceThree = addMoneyInputThreeNumber + balanceNumberThree;

        const newMainBalanceThree = mainBalanceThreeNumber - addMoneyInputThreeNumber;

        document.getElementById('account-balance-three').innerHTML =`<img src="assets/coin.png"alt="">${newBalanceThree}<p>BDT</p>` ;
        document.getElementById('total-amount').innerHTML = `<img src="assets/coin.png" alt="">${newMainBalanceThree}<p>BDT
                            </p>`;

      openModal();
        const date = new Date();
        const div = document.createElement('div');
        div.innerHTML = `
         <div class = "border-2 border-gray-900 p-4">
         <h4 class = "font-bold text-[14px]">${addMoneyInputThree}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
        <p class = "font-light  text-[12px]">${date}</p>
        </div>`
        document.getElementById('donation-history-two').appendChild(div);
        
    }
    else {
        alert('Invalid input!')
    }
})
// history section hide
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('card-section').classList.add('hidden');
});

document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('card-section').classList.remove('hidden');

})
document.getElementById('history-btn').addEventListener('click', function () {

})

const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function blogPage(){
    window.location.href = "blog.html";
}

