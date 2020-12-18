history.pushState({}, null, "/sabad");
function sbm(){
	flag=1;
	d= document.getElementById("nam").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("نام خود را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("tel").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("شماره موبایل را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	n=d.length;
	if ((n!=11) && (flag==1)) {
		alert("شماره موبایل باید شامل 11 رقم باشد");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("ema").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("ایمیل خود را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form7').attr('method', 'POST');
		$('#form7').attr('action', 'Request');
	}
}

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

function hazf_sabad(kod){
	event.preventDefault();
	window.location.replace("../sabad_delete/"+kod+"/");
}

function taxfif(){
	flag=1;
	d= document.getElementById("tax1").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("کد تخفیف را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form7').attr('method', 'POST');
		$('#form7').attr('action', '../TXF');
	}
}

function shtxf(){
	document.getElementById("tb").style.display='block';
	document.getElementById("tax").style.display='block';
	event.preventDefault();	
}

function shmessage(){
	alert('لینک دانلود پس از پرداخت فعال خواهد شد');
}

 $(document).ready(function(){
		$('#icon').click(function(){
			$('ul').toggleClass('show');
		});
	 });