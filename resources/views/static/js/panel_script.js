history.pushState({}, null, "/profile");
function sherkat() {
	$('#form9').attr('method', 'POST');
	$('#form9').attr('action', 'profile/CHK');
}

function karnameh() {
    $('#form9').attr('method', 'POST');
	$('#form9').attr('action', 'profile/kar');
}

$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    });
});
