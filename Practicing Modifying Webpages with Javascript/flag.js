window.onload = pageLoad;

function pageLoad() {
   var button = document.getElementById("submit");
   button.onclick = printDate;
}

function printDate() {
   //first snag all the elements I need to grab settings from
   var container = document.getElementById("dateContainer");
   var datebox = document.getElementById("date");
   var daybox = document.getElementById("day");
   var timebox = document.getElementById("time");
   var formatbuttons = document.getElementsByName("format");
   var sizebuttons = document.getElementsByName("font");
   var flagbutton = document.getElementsByName("showflag");
   var textcolorbox = document.getElementById("textcolor");
   var backgroundbox = document.getElementById("backgrounddrop");


   //then consolidate my settings

   for (i = 0; i < formatbuttons.length; i++) {
      if (formatbuttons[i].checked) {
         var format = formatbuttons[i].value;
         //window.alert(format);
      }
   }

   for (i = 0; i < sizebuttons.length; i++) {
      if (sizebuttons[i].checked) {
         var size = sizebuttons[i].value;
      }
   }

   //why is this still an array eventhough the checkbox only has one input? Weird
   if (flagbutton[0].checked) {
      var flag = "true";
   }

   var textcolor = textcolorbox.value;
   var background = backgroundbox.value;


   //print
   const d = new Date();
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   let day = days[d.getDay()];
   let month = months[d.getMonth()];
   let date = d.getDate();
   let year = d.getFullYear();
   let hour = d.getHours();
   let minute = d.getMinutes();

   daybox.innerHTML = day;
   
   if (format == "us") {
      datebox.innerHTML = month + " " + date + ", " + year;
   }
   else {
      datebox.innerHTML = date + " " + month + " " + year;
   }

   if (format == "us") {
      if (hour > 12) {
         hour = hour - 12;
         timebox.innerHTML = hour + ":" + minute + " PM";
      }
      else {
         timebox.innerHTML = hour + ":" + minute + " PM";
      }
   }
   else {
      timebox.innerHTML = hour + ":" + minute;
   }

   if (flag == "true") {
      var img = document.createElement("img");

      if (format == "us") {
         img.src = "images/us-flag.jpg";
      }
      else {
         img.src = "images/eu-flag.jpg";
      }
      container.appendChild(img);
   }

   container.style.color = textcolor;
   container.style.background = background;

   var headers = document.getElementsByTagName("h2");

   if (size == "medium") {
      for (i = 0; i < headers.length; i++) {
         headers[i].style.fontSize = "20px";
      }
   }
   if (size == "large") {
      for (i = 0; i < headers.length; i++) {
         headers[i].style.fontSize = "50px";
      }
   }
   if (size == "xlarge") {
      for (i = 0; i < headers.length; i++) {
         headers[i].style.fontSize = "100px";
      }
   }
}

