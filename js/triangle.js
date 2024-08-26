function calculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleHeight = document.getElementById('triangle-height');
    const triangleBaseValue = triangleBase.value;
    const triangleHeightValue = triangleHeight.value;
    const triangleHeightNumber = parseFloat(triangleHeightValue);
    const triangleBaseNumber = parseFloat(triangleBaseValue);
    const triangleArea = document.createElement('p');
    triangleArea.innerHTML = `Triangle Area = ${0.5 * triangleBaseNumber * triangleHeightNumber} cm <sup>2</sup>`;
    const areaContainer = document.getElementById('area-container');
    areaContainer.appendChild(triangleArea);
    triangleBase.value = '';
    triangleHeight.value = '';

}