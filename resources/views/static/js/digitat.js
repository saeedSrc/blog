function get_gerayeshk(){
			ddl= document.getElementById("gerayeshk");
			l=ddl.options.length-1;
			for (i=l;i>=0;i--){
				ddl.remove(i);
			}
			r = document.getElementById("reshtek").value;
			for(i=0;i<document.getElementById("tbl4").rows.length;i++){
				d= document.getElementById("tbl4").rows[i].cells[0].innerHTML;
				if (d.localeCompare(r).toString()==0){
					option = document.createElement("option");
					option.text= document.getElementById("tbl4").rows[i].cells[1].innerHTML;
					ddl.append(option);
				}
			}
}

function get_gerayesha(){
			ddl= document.getElementById("gerayesha");
			l=ddl.options.length-1;
			for (i=l;i>=0;i--){
				ddl.remove(i);
			}
			r = document.getElementById("reshtea").value;
			for(i=0;i<document.getElementById("tbl4").rows.length;i++){
				d= document.getElementById("tbl4").rows[i].cells[0].innerHTML;
				if (d.localeCompare(r).toString()==0){
					option = document.createElement("option");
					option.text= document.getElementById("tbl4").rows[i].cells[1].innerHTML;
					ddl.append(option);
				}
			}
			get_majmoe();
}

function get_majmoe(){
			ddl= document.getElementById("majmoe");
			l=ddl.options.length-1;
			for (i=l;i>=0;i--){
				ddl.remove(i);
			}
			r = document.getElementById("goroh").value;
			for(i=0;i<document.getElementById("tbl2").rows.length;i++){
				d= document.getElementById("tbl2").rows[i].cells[0].innerHTML;
				if (d.localeCompare(r).toString()==0){
					option = document.createElement("option");
					option.text= document.getElementById("tbl2").rows[i].cells[1].innerHTML;
					ddl.append(option);
				}
			}
			get_reshte();
}

function get_reshte(){
			ddl= document.getElementById("remtahani");
			l=ddl.options.length-1;
			for (i=l;i>=0;i--){
				ddl.remove(i);
			}
			r = document.getElementById("majmoe").value;
			for(i=0;i<document.getElementById("tbl3").rows.length;i++){
				d= document.getElementById("tbl3").rows[i].cells[0].innerHTML;
				if (d.localeCompare(r).toString()==0){
					option = document.createElement("option");
					option.text= document.getElementById("tbl3").rows[i].cells[1].innerHTML;
					ddl.append(option);
				}
			}
			get_gerayesh();
}

function get_gerayesh(){
			ddl= document.getElementById("gemtahani");
			l=ddl.options.length-1;
			for (i=l;i>=0;i--){
				ddl.remove(i);
			}
			r = document.getElementById("remtahani").value;
			for(i=0;i<document.getElementById("tbl4").rows.length;i++){
				d= document.getElementById("tbl4").rows[i].cells[0].innerHTML;
				if (d.localeCompare(r).toString()==0){
					option = document.createElement("option");
					option.text= document.getElementById("tbl4").rows[i].cells[1].innerHTML;
					ddl.append(option);
				}
			}
}

function get_nama(){
	ddl= document.getElementById("nda");
	l=ddl.options.length-1;
	ddl.innerHTML="";
	r = document.getElementById("noeda").value;
	if ((r=="دولتی سطح یک") || (r=="دولتی سطح دو") || (r=="دولتی سطح سه") || (r=="پردیس"))
		r="دولتی";
	if (r=="فنی و حرفه ای")
		r="فنی";
	for(i=0;i<document.getElementById("tbl5").rows.length;i++){
		d= document.getElementById("tbl5").rows[i].cells[0].innerHTML;
		if (d.localeCompare(r).toString()==0){
			option = document.createElement("option");
			option.text= document.getElementById("tbl5").rows[i].cells[1].innerHTML;
			ddl.append(option);
		}
	}
}

function get_namk(){
	ddl= document.getElementById("ndk");
	l=ddl.options.length-1;
	ddl.innerHTML="";
	r = document.getElementById("noedk").value;
	if ((r=="دولتی سطح یک") || (r=="دولتی سطح دو") || (r=="دولتی سطح سه") || (r=="پردیس"))
		r="دولتی";
	if (r=="فنی و حرفه ای")
		r="فنی";
	for(i=0;i<document.getElementById("tbl5").rows.length;i++){
		d= document.getElementById("tbl5").rows[i].cells[0].innerHTML;
		if (d.localeCompare(r).toString()==0){
			option = document.createElement("option");
			option.text= document.getElementById("tbl5").rows[i].cells[1].innerHTML;
			ddl.append(option);
		}
	}
}

function sbm(){
	flag=1;
	d= document.getElementById("kodm").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("کدملی را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	n=d.length;
	if ((n!=10) && (flag==1)) {
		alert("کدملی باید شامل 10 رقم باشد");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("nam").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("نام خود را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("namk").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("نام خانوادگی را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("mob").value;
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
	d= document.getElementById("noedk").value;
	if (((d.localeCompare("").toString()==0) || ((d.localeCompare("--- نوع دانشگاه کارشناسی ---").toString()==0))) && (flag==1)) {
		alert("نوع دانشگاه کارشناسی را انتخاب فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("moadelk").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("معدل کارشناسی را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("noeda").value;
	if (((d.localeCompare("").toString()==0) || ((d.localeCompare("--- نوع دانشگاه کارشناسی ارشد ---").toString()==0))) && (flag==1)) {
		alert("نوع دانشگاه کارشناسی ارشد را انتخاب فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("moadela").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("معدل کارشناسی ارشد خود را وارد فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("goroh").value;
	if (((d.localeCompare("").toString()==0) || ((d.localeCompare("--- گروه امتحانی ---").toString()==0))) && (flag==1)) {
		alert("گروه امتحانی خود را انتخاب فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("remtahani").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("رشته امتحانی خود را انتخاب فرمائید");
		flag=0;
		event.preventDefault();	
	}
	d= document.getElementById("gemtahani").value;
	if ((d.localeCompare("").toString()==0) && (flag==1)) {
		alert("گرایش امتحانی خود را انتخاب فرمائید");
		flag=0;
		event.preventDefault();	
	}
	if (flag==1){
		$('#form1').attr('method', 'POST');
		$('#form1').attr('action', 'Sabtenam');
	}
}

 $(document).ready(function(){
		$('#icon').click(function(){
			$('ul').toggleClass('show');
		});
	 });