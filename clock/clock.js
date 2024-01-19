function displayDateAndTime(){
    let curDateObj= new Date();

    let curHours=curDateObj.getHours()-12;
    let curMin=curDateObj.getMinutes();
    let curSec=curDateObj.getSeconds();

    let curDate=curDateObj.getDate();
    let curMonth=curDateObj.getMonth()+1;
    let curYear=curDateObj.getFullYear();
   
  let curDay=curDateObj.getDay();
  
 
    switch(curDay){
        case 0 : curDay="SUNDAY";
        break;

        case 1 : curDay="MONDAY";
        break;

        case 2 : curDay="TUESDAY";
        break;

        case 3 : curDay="WEDNESDAY";
        break;

        case 4 : curDay="THURSDAY";
        break;

        case 5 : curDay="FIRDAY";
        break;

        case 6 : curDay="SATURDAY";
        break;
    }

    document.getElementById("hours").innerHTML=curHours
    document.getElementById("min").innerHTML=curMin
    document.getElementById("sec").innerHTML=curSec
    document.getElementById("date").innerHTML=curDate
    document.getElementById("month").innerHTML=curMonth
    document.getElementById("year").innerHTML=curYear
    document.getElementById("day").innerHTML=curDay

    curDateObj = curHours > 12 ? curHours - 12 : curHours;

    if (curHours === 0) {
      curHours = 12;
    }
    
    curDateObj = curHours < 12 ? "AM" : "PM";


}