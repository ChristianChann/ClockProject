const secondhand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

let setDate = () =>{
    const now  = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees =((seconds/60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}Deg)`;

    const mins = now.getMinutes()
    const minsDegrees = ((mins/60) * 360 ) + 90;
    minhand.style.transform = `rotate(${minsDegrees}Deg)`

    const hours = now.getHours()
    const hoursDegrees = ((hours/12) * 360 ) + 90;
    hourhand.style.transform = `rotate(${hoursDegrees}Deg)`
}

setInterval(setDate,1000)