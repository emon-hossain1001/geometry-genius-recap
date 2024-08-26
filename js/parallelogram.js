// Calculate parallelogram area
document.getElementById('btn-parallelogram').addEventListener('click', () => {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = document.createElement('p');
    area.innerHTML = `Parallelogram Area = ${base * height} cm<sup>2</sup>`;

    const areaContainer = document.getElementById('area-container');
    areaContainer.appendChild(area);
});

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}