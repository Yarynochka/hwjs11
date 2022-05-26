// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

const form= document.forms.form;
let smb=document.getElementById('submit');
smb.onclick=function (e){
    e.preventDefault();
    let userNameInput=form.name;
    let userAgeInput =form.age;

    let userName = userNameInput.value;
    let userAge = userAgeInput.value;

    let user={
        userName,
        userAge
    }

    console.log( typeof user);
    console.log(user);

    // let user2=JSON.stringify(user);
    // console.log(user2);

    localStorage.setItem('id',JSON.stringify(user));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let cars=[];
const  form2= document.forms.form2;
const conf= document.getElementById('confirm');
conf.onclick=function (e) {
  e.preventDefault();

  let carModel=form2.model.value;
  let carType=form2.type.value;
  let carVolume=form2.volume.value;

  let car={
      carModel,
      carType,
      carVolume
  }

  cars.push(car);
  console.log(cars);
  localStorage.setItem('id',JSON.stringify(cars));
  
}