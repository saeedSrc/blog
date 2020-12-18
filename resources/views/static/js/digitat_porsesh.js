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
	d= document.getElementById("porsesh").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("سوال، پرسش، انتقاد یا پیشنهاد را وارد بفرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form1').attr('method', 'POST');
		$('#form1').attr('action', 'sabt');
	}
}

 $(document).ready(function(){
		$('#icon').click(function(){
			$('ul').toggleClass('show');
		});
	 });