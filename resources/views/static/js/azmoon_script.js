history.pushState({}, null, "/profile");
setInterval(counter,1000);

function counter(){
    x=document.getElementById('lbl3').textContent;
    y=document.getElementById('lbl2').textContent;
    z=document.getElementById('lbl1').textContent;
    x=x-1;
    if (x<0){
        x=59;
        y=y-1;
        if (y<0){
            y=59;
            z=z-1;
            if (z<0){
                window.location.replace("/profile");
            }
            if (z<=9){
                z='0'+z;
            }
            document.getElementById('lbl1').textContent=z;
        }
        if (y<=9){
            y='0'+y;
        }
        document.getElementById('lbl2').textContent=y;
    }
    if (x<=9){
        x='0'+x;
    }
    document.getElementById('lbl3').textContent=x;
}

function khoroj() {
    document.getElementById("sh").value=-100;
}

function badi() {
    v=document.getElementById("tedad").value;
    sh=document.getElementById("sh").value;
    v=-(-v);
    sh=-(-sh);
    if (sh>=v){
        sh=1;
    }
    else{
        sh=sh+1;
    }
    document.getElementById("sh").value=sh;
}

function gabli() {
    v=document.getElementById("tedad").value;
    sh=document.getElementById("sh").value;
    v=-(-v);
    sh=-(-sh);
    if (sh<=1){
        sh=v;
    }
    else{
        sh=sh-1;
    }
    document.getElementById("sh").value=sh;
}

function boro() {
    v=document.getElementById("tedad").value;
    sh=document.getElementById("br").value;
    if (sh.localeCompare("").toString()==0){
        alert("شماره سوال را در بخش 'برو به' وارد نمائید");
        event.preventDefault();
    }
    else{
        v=-(-v);
        sh=-(-sh);
        if (sh<=1){
            sh=1;
        }
        if(sh>=v){
            sh=v;
        }
        document.getElementById("sh").value=sh;
    }
}

$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    });
});
