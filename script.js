// ------------------- make card background random color when we mouseover
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.addEventListener('mouseover', function(){
        card.style.background = randomColor();
    })
}
//----------------------------------------------------

// common Function-----------------------

let ol = document.getElementById('orderlist');

function getElementByInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    return inputFieldValue;
}

function getTextInBox(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function getElementByText(textId){
    const textField = document.getElementById(textId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

// ----------------------------------------------

// Triangle calculation------------------

document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBInputValue = getElementByInputValue('triangle-b');
    if(isNaN(triangleBInputValue)){
        alert('please include a valid number');
        return;
    }
    const triangleHInputValue = getElementByInputValue('triangle-h');
    if(isNaN(triangleHInputValue)){
        alert('please include a valid number');
        return;
    }
    

     
    getTextInBox('vumi', triangleBInputValue);
    getTextInBox('height', triangleHInputValue);


    let triangleB = getElementByText('vumi');
    let triangleH = getElementByText('height');


    let calculation = 0.5 * triangleB * triangleH;


    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Triangle</span> = ${calculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);
    
    
    // getTextInBox('result', calculation);

})

// Rectangle calculation------------------
document.getElementById('rectanguler-btn').addEventListener('click', function(){
    const rectangleWInputValue = getElementByInputValue('rectangler-w');
    if(isNaN(rectangleWInputValue)){
        alert('please include a valid number');
        return;
    }
    const rectangleIInputValue = getElementByInputValue('rectangler-i');
    if(isNaN(rectangleIInputValue)){
        alert('please include a valid number');
        return;
    }
     
    getTextInBox('r-width', rectangleWInputValue);
    getTextInBox('r-i', rectangleIInputValue);


    let rectangleW = getElementByText('r-width');
    let rectangleI = getElementByText('r-i');


    let rectangulerCalculation = rectangleW * rectangleI;

    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Ractangle</span> =${rectangulerCalculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);
    

    
    
    // getTextInBox('r-result', rectangulerCalculation);

})


// Parallelogram calculation------------------
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBInputValue = getElementByInputValue('parallelogram-b');
    const parallelogramHInputValue = getElementByInputValue('parallelogram-h');
     
    getTextInBox('p-b', parallelogramBInputValue);
    getTextInBox('p-h', parallelogramHInputValue);


    let parallelogramB = getElementByText('p-b');
    let parallelogramH = getElementByText('p-h');


    let rectangulerCalculation = parallelogramB * parallelogramH;

    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Parallelor</span> =${rectangulerCalculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);
    

    
    
   

})

// Rhombus calculation------------------
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusD1InputValue = getElementByInputValue('rhombus-d1');
    const rhombusD2InputValue = getElementByInputValue('rhombus-d2');
     
    getTextInBox('rh-d1', rhombusD1InputValue);
    getTextInBox('rh-d2', rhombusD2InputValue);


    let rhombusD1 = getElementByText('rh-d1');
    let rhombusD2 = getElementByText('rh-d2');


    let rhombusCalculation = 0.5 * rhombusD1 * rhombusD2;

    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Rhombus</span> =${rhombusCalculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);
    

    

})

// Pentagon calculation------------------
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonPInputValue = getElementByInputValue('pentagonP');
    const pentagonBInputValue = getElementByInputValue('pentagonB');
     
    getTextInBox('pn-p', pentagonPInputValue);
    getTextInBox('pn-b', pentagonBInputValue);


    let pentagonP = getElementByText('pn-p');
    let pentagonB = getElementByText('pn-b');


    let pentagonCalculation = 0.5 * pentagonP * pentagonB;
    

    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Pentagon</span> =${pentagonCalculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);
    

    
    
    

})

// Ellipse calculation------------------
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseAInputValue = getElementByInputValue('ellipseA');
    const ellipseBInputValue = getElementByInputValue('ellipseB');
     
    getTextInBox('e-a', ellipseAInputValue);
    getTextInBox('e-b', ellipseBInputValue);


    let ellipseA = getElementByText('e-a');
    let ellipseB = getElementByText('e-b');

    
    let ellipseCalculation = 3.1416 * ellipseA * ellipseB;
    ellipseCalculation = ellipseCalculation.toFixed(2);
   

    const p = document.createElement('p');
    p.innerHTML = `
    <li class= "text-left"><span id="name">Ellipse</span> =${ellipseCalculation}cm<sup>2</sup> <button class="btn btn-primary px-3 ms-3 fw-bolder">Convert m<sup>2</sup></button> </li>
    `;

    ol.appendChild(p);

    

})

