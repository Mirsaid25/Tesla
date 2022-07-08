let open_door = document.querySelector(".open_door");

let charger = document.querySelectorAll(".h1"); // Запас хода и Цена
let data_charger_first = +charger[0].getAttribute("data-charger")
let data_price = +charger[1].getAttribute("data-price")


let speedOfCar = document.querySelector(".speedOfCar"); // скорость
let data_speedOfCar = +speedOfCar.getAttribute("data-speedOfCar")
let up_speed = document.querySelector(".up_speed");
let doun_speed = document.querySelector(".doun_speed");


let temperature = document.querySelector(".temperature"); // температура
let data_temperature = +temperature.getAttribute("data-temperature")
let up_temperature = document.querySelector(".up_temperature");
let doun_temperature = document.querySelector(".doun_temperature");

let disk = document.querySelector(".disk"); // диск
let data_disk = +disk.getAttribute('data-disk')
let up_disk = document.querySelector(".up_disk");
let doun_disk = document.querySelector(".doun_disk");

let conditioner = document.querySelectorAll(".conditioner");

let LongRange = document.querySelectorAll(".LongRange");

let car_type = document.querySelectorAll(".car_type");


// -------------------------------------------------------------------

up_speed.onclick = () =>{
    speedOfCar.innerHTML = `${data_speedOfCar++} км/ч`;
    data_charger_first = data_charger_first -4;
    charger[0].innerHTML = `${data_charger_first--}км`;
};

doun_speed.onclick = () =>{
    speedOfCar.innerHTML = `${data_speedOfCar--} км/ч`;
    data_charger_first = data_charger_first +4;
    charger[0].innerHTML = `${data_charger_first++}км`;
};

// -------------------------------------------------------------------

up_temperature.onclick = () =>{
    temperature.innerHTML = `${data_temperature++}°`;
    data_charger_first = data_charger_first -4;
    charger[0].innerHTML = `${data_charger_first--}км`;
};

doun_temperature.onclick = () =>{
    temperature.innerHTML = `${data_temperature--}°`;
    data_charger_first = data_charger_first +4;
    charger[0].innerHTML = `${data_charger_first++}км`;
};

// ---------------------------------------------------------------------
let wheel = document.querySelectorAll(".q")
up_disk.onclick = () =>{
    disk.innerHTML = `${data_disk++}`;
    wheel.forEach(item => {
        item.style.height = "120px";
        wheel[1].style.left = "915px";
        wheel[0].style.left = "468px";
    });
};
doun_disk.onclick = () =>{
    disk.innerHTML = `${data_disk--}`;
    wheel.forEach(item => {
        item.style.height = "110px";
        wheel[1].style.left = "920px";
        wheel[0].style.left = "473px";
    });
};
// ----------------------------------------------------------------------
    
conditioner[0].onclick = () =>{
    conditioner[0].classList.toggle('active');
    if(conditioner[0].classList.contains('active')){
        data_charger_first = data_charger_first -10;
        charger[0].innerHTML = `${data_charger_first--}км`;
    }else{
        data_charger_first = data_charger_first +10;
        charger[0].innerHTML = `${data_charger_first++}км`;
    }  
};

// -------------------------------------------------------------------

LongRange[0].onclick = () =>{
    LongRange[0].classList.toggle('active')
    if(LongRange[0].classList.contains('active')){
        charger[1].innerHTML = `$${data_price + 500}`
    } else{
        charger[1].innerHTML = `$${data_price}`
    }
    
};

// ---------------------------------------------------------------------

let car = document.querySelector(".car")
let car_salon_blakc = document.querySelector(".car_salon_blakc")
let car_salon_gold = document.querySelector(".car_salon_gold")
let car_salon_silver = document.querySelector(".car_salon_silver")
let block1 = document.querySelectorAll(".block1")
let block4 = document.querySelectorAll(".block4")
let chanch_color = document.querySelector(".chanch_color")
let block = document.querySelector(".block")

open_door.onclick = ()=>{
    car.style.display = "none"

    wheel.forEach(item =>{
        item.style.display = "none"
    });

    car_salon_blakc.style.display ="block"
    block.style.marginTop ="50px"

    block1.forEach(item => {
        item.style.display = "none"
    })

    block4.forEach(item => {
        item.style.display = "none"
    })

    car_type[0].classList.add("anactive")

    chanch_color.style.display = "block"
    chanch_color.style.marginLeft = "450px"
}

car_type[0].onclick = ()=>{
    car_type[0].classList.remove("anactive")
    
    car_salon_blakc.style.display ="none"
    car.style.display = "block"

    wheel.forEach(item =>{
        item.style.display = "block"
    });
    
    block1.forEach(item => {
        item.style.display = "flex"
    })

    block4.forEach(item => {
        item.style.display = "block"
    })

    chanch_color.style.display = "none"
}

let color_black = document.querySelector(".color_black")
let color_silver = document.querySelector(".color_silver")
let color_gold = document.querySelector(".color_gold")

color_black.onclick = () =>{
    car_salon_blakc.style.display ="block"
    car_salon_gold.style.display ="none"
    car_salon_silver.style.display ="none"
}

color_silver.onclick = () =>{
    car_salon_blakc.style.display ="none"
    car_salon_gold.style.display ="none"
    car_salon_silver.style.display ="block"
}

color_gold.onclick = () =>{
    car_salon_blakc.style.display ="none"
    car_salon_gold.style.display ="block"
    car_salon_silver.style.display ="none"
}