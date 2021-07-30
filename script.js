// alert('loading');
function addNewWEField() {
  //   console.log('Adding new field');

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-2');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute('placeholder', 'Enter here');

  let weOb = document.getElementById('we');
  let weAddButtonOb = document.getElementById('weAddButton');

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('aqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute('placeholder', 'Enter here');

  let aqOb = document.getElementById('aq');
  let aqAddButtonOb = document.getElementById('aqAddButton');

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// GENERATING RESUME
function generateResume() {
  //   console.log('Generating Resume');

  let nameField = document.getElementById('nameField').value;
  let nameT1 = document.getElementById('nameT1');
  nameT1.innerHTML = nameField;

  // DIRECT
  document.getElementById('nameT2').innerHTML = nameField;

  //CONTACT
  document.getElementById('contactT').innerHTML =
    document.getElementById('contactField').value;

  //ADDRESS
  document.getElementById('addressT').innerHTML =
    document.getElementById('addressField').value;

  document.getElementById('gitT').innerHTML =
    document.getElementById('gitField').value;

  document.getElementById('liT').innerHTML =
    document.getElementById('liField').value;

  document.getElementById('ccT').innerHTML =
    document.getElementById('ccField').value;

  //OBJECTIVE
  document.getElementById('objT').innerHTML =
    document.getElementById('objField').value;

  //WORK EXPERIENCE
  let wes = document.getElementsByClassName('weField');
  let str = '';
  for (let e of wes) {
    str = str + `<li> ${e.value} </li> `;
  }
  document.getElementById('weT').innerHTML = str;

  //ADDITIONAL QUALIFICATION
  let aqs = document.getElementsByClassName('aqField');
  let str1 = '';
  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li> `;
  }
  document.getElementById('aqT').innerHTML = str1;

  //SETTING IMAGE
  let file = document.getElementById('imgField').files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  //SET IMAGE TO TEMPLATE
  reader.onloadend = function () {
    document.getElementById('imgTemplate').src = reader.result;
  };

  document.getElementById('resume-form').style.display = 'none';
  document.getElementById('resume-template').style.display = 'block';
}

//PRINT RESUME
function printResume() {
  window.print();
}
