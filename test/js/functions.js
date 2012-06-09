var cur_div;
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

$('.button').click(function() {
    button_click();
});

function init(){
	cur_div = '#page1';
	$(cur_div).fadeIn(500);
}

function start_click(){
	init();
}

function next_click(){
	div_stack.push(cur_div);
	var temp = cur_div + 'Next';
	cur_div = $(temp).value();
	
}

function back_click(){
	cur_div = div_stack.pop();
	$(cur_div).fadeIn(500);

}

function button_click(){

}

