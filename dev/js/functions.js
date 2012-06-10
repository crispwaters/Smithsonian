var cur_div;
var div_stack;
init();

$('.start').click(function() {
	start_click();
});

$('.next').click(function() {
	if(!$(this).parent().children().is(':animated')){
		next_click();
	}
	return false;
});
$('.next1').click(function() {
	if(!$(this).parent().parent().children().is(':animated')){
		next_click();
	}
	return false;
});

$('.back').click(function() {
	if(!$(this).parent().children().is(':animated')){
		back_click();
	}
	return false;
});

function init(){
	cur_div = '#page1';
	display_button();
	$('.start').delay(500);
	$('.back').delay(500);
	$('.next').delay(500);
	$('.start').css('display', 'none');
	$('.back').css('display', 'none');
	$('.next').css('display', 'none');
	div_stack = new Array;
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
}

function start_click(){
	$(cur_div).fadeOut(500);
	init();
}

function next_click(){
	div_stack.push(cur_div);
	var temp = cur_div + 'Next';
	$(cur_div).fadeOut(500);
	cur_div = $(temp).val();
	display_button();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
}

function back_click(){
	$(cur_div).fadeOut(500);
	cur_div = div_stack.pop();
	display_button();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
}

function button_click(nextPage){
	div_stack.push(cur_div);
	$(cur_div).fadeOut(500);
	cur_div = nextPage;
	display_button();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
}

function display_button(){
	if(cur_div == '#page1'){
		$('.start').fadeOut(500);
		$('.back').fadeOut(500);
		$('.next').fadeOut(500);
	}
	else{
		$('.start').delay(500);
		$('.back').delay(500);
		$('.next').delay(500);
		$('.start').fadeIn(500);
		$('.back').fadeIn(500);
		$('.next').fadeIn(500);
	}
}

