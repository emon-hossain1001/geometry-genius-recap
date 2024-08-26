document.getElementById('btn-rhombus').addEventListener('click', () => {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');

    const area = document.createElement('p');
    area.innerHTML = `Rhombus Area = ${0.5 * d1 * d2} cm<sup>2</sup>`;

    const areaContainer = document.getElementById('area-container');
    areaContainer.appendChild(area);
});
