document.getElementById('btn-ellipse').addEventListener('click', () => {
    const p = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');

    const area = document.createElement('p');
    area.innerHTML = `Ellipse Area = ${3.1416 * p * b} cm<sup>2</sup>`;

    const areaContainer = document.getElementById('area-container');
    areaContainer.appendChild(area);
});