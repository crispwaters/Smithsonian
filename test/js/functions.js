var cur_div;
var div_stack;
init();

$('.start').click(function() {
	start_click();
});

$('.next').click(function() {
	next_click();
});

$('.back').click(function() {
	back_click();
});

function init(){
	cur_div = '#page1';
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
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);	
}

function back_click(){
	$(cur_div).fadeOut(500);
	cur_div = div_stack.pop();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);

}

function button_click(nextPage){
	div_stack.push(cur_div);
	$(cur_div).fadeOut(500);
	cur_div = nextPage;
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
}

