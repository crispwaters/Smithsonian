var cur_div = '';
var div_stack = new Array;
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
	var cur_div = '#page4';
	$(cur_div).fadeIn(500);
}

function start_click(){
	init();
}

function next_click(){
	div_stack.push(cur_div);
	
}

function back_click(){
	cur_div = div_stack.pop();
	$(cur_div).fadeIn(500);

}

