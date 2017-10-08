var clock = document.getElementById('clock');

function update() {
    
    var time = new Date();
    
    var mins = time.getMinutes().toString();
    
    var secs = time.getSeconds().toString();
    
    var hours = time.getHours().toString();
    
    if (hours.length < 2) {
        
        hours = '0' + hours;
        
    }
    if (mins.length < 2) {
        
        mins = '0' + mins;
        
    }
    if (secs.length < 2) {
        
        secs = '0' + secs;
        
    }
    var display = hours + ' : ' + mins + ' : ' + secs;
    var hex = '#' + hours + mins + secs;
    clock.textContent = display;
    clock.style.color = hex;
}


update();

setInterval(update, 1000);
            
        