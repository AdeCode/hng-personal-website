const now = new Date();

const image = document.querySelector("img");

image.addEventListener("load", (event) => {
    const { naturalWidth, naturalHeight} = image;
    image.width = naturalWidth;
    image.height = naturalHeight;
  });


const dayOfWeek = now.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day
const currentDay = days[dayOfWeek];
document.querySelector('#day').textContent = currentDay;

var x = setInterval(function() {
    var now = new Date();

    let hour = now.getUTCHours();
    const min = now.getUTCMinutes();
    const sec = now.getUTCSeconds()
    // console.log('UTC hour: ', hour+':'+min+":"+sec)

    // const hours = String(now.getHours()).padStart(2, '0');
    // const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    // let currTime = hours + ":" + minutes + ":" + seconds

    document.getElementById("time").innerHTML = hour + " : "
    + min + " : " + sec;

  }, 1000);