var cur_div;
var div_stack;
var oval = '';
var nextOval = '';
var interval;
var ideaInterval;
var duration = '500';
var num_picked;
//var num_active;
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
	$('.start').delay(duration);
	$('.back').delay(duration);
	$('.next').delay(duration);
	num_picked = 0;
	$('.start').delay(duration);
	$('.back').delay(duration);
	$('.next').delay(duration);
	$('.start').css('display', 'none');
	$('.back').css('display', 'none');
	$('.next').css('display', 'none');
	div_stack = new Array;
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
}

function start_click(){
	$(cur_div).fadeOut(duration);
	init();
	animateReset();
}

function next_click(){
	div_stack.push(cur_div);
	var temp = cur_div + 'Next';
	$(cur_div).fadeOut(duration);
	num_picked = 0;
	$(cur_div).fadeOut(duration);
	cur_div = $(temp).val();
	display_button();
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
	if(cur_div == "#page3")
	{
		setTimeout("interval = setInterval('oAnimate()', duration)", duration);
	}
	else if(cur_div == "#page5")
	{
		setTimeout("ideaInterval = setInterval('animateIdeas()', duration)", duration);
	}
}

function back_click(){
	$(cur_div).fadeOut(duration);
	cur_div = div_stack.pop();
	display_button();
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
	if(cur_div == "#page3")
	{
		interval = setInterval('oAnimate()', duration);
	}
	else if(cur_div == "#page5")
	{
		ideaInterval = setInterval('animateIdeas()', duration);
	}
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
	num_picked = 0;
	animateReset();
}

function button_click(nextPage){
	div_stack.push(cur_div);
	$(cur_div).fadeOut(duration);
	cur_div = nextPage;
	display_button();
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
}

function display_button(){
	/*if(cur_div == '#page1'){
		$('.start').fadeOut(duration);
		$('.back').fadeOut(duration);
		$('.next').fadeOut(duration);
	}*/
	if(cur_div == '#page1' || cur_div == '#page3' || cur_div == '#page5'){
		$('.start').fadeOut(duration);
		$('.back').fadeOut(duration);
		$('.next').fadeOut(duration);
	}
	else if(cur_div == '#page5'){
	    $('.start').delay(duration);
		$('.back').delay(duration);
		//$('.next').delay(duration);
		$('.start').fadeIn(duration);
		$('.back').fadeIn(duration);
		$('.next').fadeOut(duration);
	}	
	else{
		$('.start').delay(duration);
		$('.back').delay(duration);
		$('.next').delay(duration);
		$('.start').fadeIn(duration);
		$('.back').fadeIn(duration);
		$('.next').fadeIn(duration);
	}
}

function animateReset(){
	$('#page3 div.option:not(#option1)').removeClass('current');
}

function oAnimate(){
	oval = $('#page3 div.option.current');
	nextOval = oval.next('#page3 div.option');
	if(nextOval.length === 0){
	    oval.removeClass('current');
		clearInterval(interval);
		setTimeout("$('#page3 div.option').addClass('current')", 1);
		setTimeout('next_click()', 1000);
	}	
	oval.removeClass('current');
	nextOval.addClass('current');
}

function animateIdeas(){
	oval = $('#page5 div.option.current');
	nextOval = oval.next('#page5 div.option');
	if(nextOval.length === 0){
	    oval.removeClass('current');
		clearInterval(ideaInterval);
		setTimeout("$('#page5 div.option').addClass('current')", 1);
		setTimeout("$('#page5 div.option').removeClass('current')", 1500);
	}	
	oval.removeClass('current');
	nextOval.addClass('current');
}

/*
* Used for Page 6
* Needs to light up options upon click
* Can only light up two options at a time
* Can only allow the user to continue if two options are selected
* Clicking on a selected option should deselect it
* Clicking on a deselected option should not do anything
*/
function pick_two(cur_option){
    if($(cur_option).hasClass('current'))
    {
        $(cur_option).removeClass('current');
        num_picked--;
    }
    else
    {
        if(num_picked < 2)
        {
            $(cur_option).addClass('current');
            num_picked++;
        }    
    }
        
    //Button Logic Below
    if(num_picked < 2)
    {
        //Hide "I have an idea button"
    }
    else if(num_picked == 2)
    {
        //Show "I have an idea button"
    }
    else
    {
        //Should never reach
    }
}


/*
function toggle_color(id)
{
    if($(id).css("background") == "#777")
    {
        if(num_active < 2)
        {
            if(id == "#option1")
                $(id).css("background", "#e51f25");
            if(id == '#option2')
                $(id).css("background", "#0eabe0");
            if(id == "#option3")
                $(id).css("background", "#52ae42");
            if(id == '#option4')
                $(id).css("background", "#f89c3e");
            if(id == '#option5')
                $(id).css("background", "#8f53a2");
            if(id == '#option6')
                $(id).css("background", "#fec13f");
            
            num_active++;
        }    
    }
    else
    {
        $(id).css("background", "#777");
        num_active = num_active - 1;
    }    
}


function auto_toggle()
{
    var i;
    var str;
    for(i=1;i<8;i++)
    {
        if(i>1)
        {   
            str = (i-1)+' ';
            $(this).delay(duration);
            toggle_color('#option' + str);
        }
        if(i<7)
        {
            str = i + ' ';
            $(this).delay(duration);
            toggle_color('#option' + str);
        }    
    }
    next_click();
}
*/

