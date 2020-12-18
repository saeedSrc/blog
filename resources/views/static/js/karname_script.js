

function karnameh(s,ms) {
    if (ms.localeCompare("تکمیل نشده").toString()==0){
        alert("مشاهده کارنامه پس از خاتمه آزمون امکان پذیر است");
        event.preventDefault();
    }
    if (s=="اول"){
        s="1";
    }
    if (s=="دوم"){
        s="2";
    }
    if (s=="سوم"){
        s="3";
    }
    if (s=="چهارم"){
        s="4";
    }
    if (s=="پنجم"){
        s="5";
    }
    if (s=="ششم"){
        s="6";
    }
    if (s=="هفتم"){
        s="7";
    }
    if (s=="هشتم"){
        s="8";
    }
    if (s=="نهم"){
        s="9";
    }
    if (s=="دهم"){
        s="10";
    }
    document.getElementById("marhale").value=s;
    $('#form9').attr('method', 'POST');
	$('#form9').attr('action', 'kar/shw');
}

$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    });
});
