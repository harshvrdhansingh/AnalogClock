setInterval(() => {
 d = new Date(); // object of date()
 hr = d.getHours();
 min = d.getMinutes();
 sec = d.getSeconds();

//  12 => 360
//  1 => 360/12=30

// for hour hand 
//  in 60min = it travel 30 dregree 
//  1min = 30/60=1/2 degree. 


// for min hand hr_rotation
// 60min=360 degree 
// 1min= 360/60 = 6degree.

// for secondhand rotation
// 60sec =360 degree 
// 1min= 360/60 = 6degree. 

//  converting time 
hr_rotation = 30 * hr + min / 2;
min_rotation = 6 * min; 
sec_rotation = 6 * sec;

 hour= document.getElementById("hour_hand");
 minute = document.getElementById("minute_hand");
 second = document.getElementById("second_hand");

 hour_hand.style.transform= `rotate(${hr_rotation}deg)`;
 minute_hand.style.transform= `rotate(${min_rotation}deg)`;
 second_hand.style.transform= `rotate(${sec_rotation}deg)`;

},1000);