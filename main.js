function Time_now(){
    var Time = document.querySelector(".Time");
    var AM = document.querySelector(".AM")
   var dt = new Date();
   var hr = dt.getHours();
   var min = dt.getMinutes();
 var sec = dt.getSeconds();
 if(hr >12){
     hr = hr-12;
 }

 if(hr<10)
 {
     hr = "0"+hr;
 }
  
  if(min <10)
  {
      min = "0"+min
  } 


 if(sec <10)
{
    sec ="0"+sec
}

// if(hr <=12){
//     AM.innerHTML="AM"
// }

// if(hr >12){
//     AM.innerHTML="PM"
// }

 Time.innerHTML=`${hr}:${min}:${sec}`;
}