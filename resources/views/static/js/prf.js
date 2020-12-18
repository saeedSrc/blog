function lgn(){
	flag=1;
	d= document.getElementById("usr").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("نام کاربری را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("pas").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("رمز عبور را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form1').attr('method', 'POST');
		$('#form1').attr('action', 'LGN');
	}
}

 $(document).ready(function(){
		$('#icon').click(function(){
			$('ul').toggleClass('show');
		});
	 });