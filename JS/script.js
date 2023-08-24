const selectBtnS = document.querySelectorAll('.select-btn');

let clickCounter = 0;
selectBtnS.forEach(selectBtn => {
    selectBtn.addEventListener('click', () => {
        const player = document.getElementsByTagName('h3');
        const playerName = player[clickCounter].innerText;
        const display = document.getElementById('player-list');
        const newLi = document.createElement('li');
        let text = document.createTextNode(playerName);
        newLi.appendChild(text);
        display.appendChild(newLi);
        clickCounter++;
    });
});

document.getElementById('spend-per-player').addEventListener('click', function () {
    const perPlayerSpendField = document.getElementById('per-player-spend-field');
    const perPlayerSpendString = perPlayerSpendField.value;
    const perPlayerSpendValue = parseFloat(perPlayerSpendString);

    const numberOfPlayer = document.getElementById("player-list").getElementsByTagName("li").length

    const total = perPlayerSpendValue * numberOfPlayer;

    const totalExpenceField = document.getElementById('total-expence-player');
    totalExpenceField.innerText = total;
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

    const totalSpend = totalExpenceValue + spendOnManagerValue + spendOnCoachValue;

    const totalSpendField = document.getElementById('total-spend');
    totalSpendField.innerText = totalSpend;
})