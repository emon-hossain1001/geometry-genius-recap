document.getElementById('btn-rectangle').addEventListener('click', () => {
    // Rectangle Width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    console.log(width);

    // Rectangle Length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const length = parseFloat(rectangleLengthValue);
    console.log(length);

    // Rectangle Area
    const areaContainer = document.getElementById('area-container');
    const area = document.createElement('p');
    area.innerHTML = `Rectangle Area = ${width * length} cm<sup>2</sup>`;
    areaContainer.appendChild(area);

    // Clear input field
    rectangleWidth.value = '';
    rectangleLength.value = '';

});