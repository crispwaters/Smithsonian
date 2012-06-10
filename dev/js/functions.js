var cur_div;
var div_stack;
var oval = '';
var nextOval = '';
var interval;
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
	var num_picked = 0;
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
	var num_picked = 0;
	$(cur_div).fadeOut(500);
	cur_div = $(temp).val();
	display_button();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
	if(cur_div == "#page3")
	{
		interval = setInterval('oAnimate()', 500);
	}
}

function back_click(){
	$(cur_div).fadeOut(500);
	cur_div = div_stack.pop();
	display_button();
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
	var num_picked = 0;
	/*
	if(cur_div == "#page5")
	{
		auto_toggle();
	}*/
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
	if(cur_div == '#page1' || cur_div == '#page3'){
		$('.start').fadeOut(500);
		$('.back').fadeOut(500);
		$('.next').fadeOut(500);
	}
	else if(cur_div == '#page6'){
	    $('.start').delay(500);
		$('.back').delay(500);
		//$('.next').delay(500);
		$('.start').fadeIn(500);
		$('.back').fadeIn(500);
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


function oAnimate(){
	oval = $('div.option.current');
	nextOval = oval.next('div.option');
	console.log(nextOval.length);
	if(nextOval.length === 0){
		clearInterval(interval);
		next_click();
		$('#page3 #option1').addClass('current');
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
    //First determine if the option is being selected or deselected
    
    //If it's being selected, determine if a new option can be added.
        //If it can be selected, select it and increment num_picked
        
    //Else
        //Deselect it and decrement num_picked
        
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
            $(this).delay(500);
            toggle_color('#option' + str);
        }
        if(i<7)
        {
            str = i + ' ';
            $(this).delay(500);
            toggle_color('#option' + str);
        }    
    }
    next_click();
}
*/

