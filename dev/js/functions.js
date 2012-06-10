var cur_div;
var div_stack;
var oval = '';
var nextOval = '';
var interval;
<<<<<<< HEAD
var duration = '500';
=======
var num_picked;
>>>>>>> 9f48a50ae9da7d13efbe83c5f38ad6f346d1172a
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
<<<<<<< HEAD
	$('.start').delay(duration);
	$('.back').delay(duration);
	$('.next').delay(duration);
=======
	var num_picked = 0;
	$('.start').delay(500);
	$('.back').delay(500);
	$('.next').delay(500);
>>>>>>> 9f48a50ae9da7d13efbe83c5f38ad6f346d1172a
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
}

function next_click(){
	div_stack.push(cur_div);
	var temp = cur_div + 'Next';
<<<<<<< HEAD
	$(cur_div).fadeOut(duration);
=======
	var num_picked = 0;
	$(cur_div).fadeOut(500);
>>>>>>> 9f48a50ae9da7d13efbe83c5f38ad6f346d1172a
	cur_div = $(temp).val();
	display_button();
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
	if(cur_div == "#page3")
	{
		interval = setInterval('oAnimate()', duration);
	}
}

function back_click(){
	$(cur_div).fadeOut(duration);
	cur_div = div_stack.pop();
	display_button();
<<<<<<< HEAD
	$(cur_div).delay(duration);
	$(cur_div).fadeIn(duration);
	if(cur_div == "#page3")
	{
		interval = setInterval('oAnimate()', duration);
	}
=======
	$(cur_div).delay(500);
	$(cur_div).fadeIn(500);
	var num_picked = 0;
>>>>>>> 9f48a50ae9da7d13efbe83c5f38ad6f346d1172a
	/*
	if(cur_div == "#page5")
	{
		auto_toggle();
	}*/
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
<<<<<<< HEAD
	if(cur_div == '#page1'){
		$('.start').fadeOut(duration);
		$('.back').fadeOut(duration);
		$('.next').fadeOut(duration);
=======
	if(cur_div == '#page1' || cur_div == '#page3'){
		$('.start').fadeOut(500);
		$('.back').fadeOut(500);
		$('.next').fadeOut(500);
>>>>>>> 9f48a50ae9da7d13efbe83c5f38ad6f346d1172a
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
		$('.start').delay(duration);
		$('.back').delay(duration);
		$('.next').delay(duration);
		$('.start').fadeIn(duration);
		$('.back').fadeIn(duration);
		$('.next').fadeIn(duration);
	}
}


function oAnimate(){
	oval = $('div.option.current');
	nextOval = oval.next('div.option');
	console.log(nextOval.length);
	if(nextOval.length === 0){
		$('#page3 div.option').addClass('current');
		clearInterval(interval);
		setTimeout('next_click()', 2000);
		$('#page3 .option:not(#option1)').removeClass('current');
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

