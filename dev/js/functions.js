var cur_div = '#page1';
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
	cur_div = '#page1';
	$(cur_div).fadeIn(500);
}

function start_click(){
	init();
}

function next_click(){
	div_stack.push(cur_div);
	
}

function back_click(){
	alert("back clicked");

}

