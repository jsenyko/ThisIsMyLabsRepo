let container = document.querySelector("#theCoins");

let form = document.querySelector("form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    const data = new FormData(form);

    let howManyCoin = data.get('moneyCount');
    let whichCoin = data.get('moneyType');

    for(let i = 0; i < howManyCoin; i ++){
        addMoneyToList(whichCoin);
    }
}

//now have container. will have to use append inside the contianer. 

//will have to create a <div> or element, give it a text of which coin. Make that element using a loop and that loop gives it how many times. 

function addMoneyToList(money){
    let newMoney = document.createElement('img');
    newMoney.src ='./img/' + money + '.jpg';
    newMoney.innerHTML = money;
    newMoney.classList += 'moneyPic';
    container.appendChild(newMoney)
}


function deleteMoney(event){
    event.target.remove();
}

