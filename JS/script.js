// const selectBtnS = document.querySelectorAll('.select-btn');

// let clickCounter = 0;
// selectBtnS.forEach(selectBtn => {
//     selectBtn.addEventListener('click', () => {
//         const player = document.getElementsByTagName('h3');
//         const playerName = player[clickCounter].innerText;
//         const display = document.getElementById('player-list');
//         const newLi = document.createElement('li');
//         let text = document.createTextNode(playerName);
//         newLi.appendChild(text);
//         display.appendChild(newLi);
//         clickCounter++;
//     });
// });

function setListItem(buttonID, divPos) {
    let parentID = document.querySelectorAll('.player-name');
    let playerName = parentID[divPos].firstElementChild.innerText;
    let listNode = document.getElementById('player-list');

    let lists = listNode.getElementsByTagName('li');
    console.log(lists.length);
    if (lists.length > 4) {
        alert('You have already selected your top 5!');
    }
    else {
        let liNode = document.createElement('li');
        let txtNode = document.createTextNode(playerName);

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);

        document.getElementById(buttonID).disabled = true;
    }

}

document.getElementById('spend-per-player').addEventListener('click', function () {
    const perPlayerSpendField = document.getElementById('per-player-spend-field');
    const perPlayerSpendString = perPlayerSpendField.value;
    const perPlayerSpendValue = parseFloat(perPlayerSpendString);

    const numberOfPlayer = document.getElementById("player-list").getElementsByTagName("li").length;

    if (isNaN(perPlayerSpendString)) {
        alert('Please provide a number!');
    }
    else {

        const total = perPlayerSpendValue * numberOfPlayer;

        const totalExpenceField = document.getElementById('total-expence-player');
        totalExpenceField.innerText = total;
    }
})

document.getElementById('spend').addEventListener('click', function () {
    const totalExpenceField = document.getElementById('total-expence-player');
    const totalExpenceString = totalExpenceField.innerText;
    const totalExpenceValue = parseFloat(totalExpenceString);

    const managerField = document.getElementById('manager-field');
    const spendOnManagerString = managerField.value;
    const spendOnManagerValue = parseFloat(spendOnManagerString);

    const coachField = document.getElementById('coach-field');
    const spendOnCoachString = coachField.value;
    const spendOnCoachValue = parseFloat(spendOnCoachString);

    if (isNaN(totalExpenceString) || isNaN(spendOnManagerString) || isNaN(spendOnCoachString)) {
        alert('Please provide a number!');
    }
    else {

        const totalSpend = totalExpenceValue + spendOnManagerValue + spendOnCoachValue;

        const totalSpendField = document.getElementById('total-spend');
        totalSpendField.innerText = totalSpend;
    }
})