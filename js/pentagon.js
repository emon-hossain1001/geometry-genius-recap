document.getElementById('btn-pentagon').addEventListener('click', () => {
    const base = getInputValueById('pentagon-base');
    const height = getInputValueById('pentagon-height');

    const area = document.createElement('p');
    area.innerHTML = `Pentagon Area = ${0.5 * base * height} cm<sup>2</sup>`;

    const areaContainer = document.getElementById('area-container');
    areaContainer.appendChild(area);
})