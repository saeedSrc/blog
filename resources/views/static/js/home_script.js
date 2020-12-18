
function prf() {
    window.location.replace("/profile");
}

function sbm() {
    window.location.replace("/SMP");
}

$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    });
});

function search(){
	flag=1;
	d= document.getElementById("sear").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("عبارت جستجو را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form1').attr('method', 'POST');
		$('#form1').attr('action', 'SEARCH');
	}
}