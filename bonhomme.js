const monBody = document.querySelector('body');

for(i=0;i<50;i++){
    const flocon = document.createElement('div');
    monBody.appendChild(flocon);
    flocon.className = 'flocon';
    let h = Math.random() * 100;
    let p = Math.random() * 100;
    let d = Math.random();
    if(d<=0.5){
        flocon.style.zIndex = -1;
    }else{
        flocon.style.zIndex=5;
    }
    flocon.style.top = h + "%";
    flocon.style.left = p + "%";
    setInterval(function () {
        h = parseFloat(flocon.style.top.substring(0, flocon.style.top.length-1)) + Math.random() * 5;
        if (h >= 95) { h = 0; }
        flocon.style.top = h + "%";
        p = parseFloat(flocon.style.left.substring(0, flocon.style.left.length-1)) + Math.random() * 10 - 5;
        if (p < 0) { p = 94; }
        else if (p >= 95) { p = 0; }
        flocon.style.left = p + "%";
    }, 500);

}
