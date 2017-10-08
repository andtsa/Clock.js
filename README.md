# Clock.js

###Just a simple javascript clock

Free to use, credit is not mandatory, but I would apreciate the support :)


##How to use:

**1.**
Create an empty ``p`` element (or any other text element) in your HTML file with the id of 'clock': 
```html
<p id="clock"></p>
```

**2.**
Link clock.js right before the closing body tag (on *top* of other linked files if any). If you do not want to download the file just copy:
```js
var clock=document.getElementById('clock');function update(){var time=new Date();var mins=time.getMinutes().toString();var secs=time.getSeconds().toString();var hours=time.getHours().toString();if(hours.length<2){hours='0'+hours}
if(mins.length<2){mins='0'+mins}
if(secs.length<2){secs='0'+secs}
var display=hours+' : '+mins+' : '+secs;var hex='#'+hours+mins+secs;clock.textContent=display;clock.style.color=hex}
update();setInterval(update,1000);
```, create a new file called `clock.min.js` and paste all the code from above into it. Otherwise you can just use 
```html
<script src="https://aoneo.github.io/Clock.js/clock.js"></script>
```
**3.**
Style the clock however you like, DO NOT USE MY `style.css` or `index.html`, it is not part of the clock.