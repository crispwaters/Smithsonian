var cur_div;
var div_stack;
var oval = '';
var nextOval = '';
var interval;
var ideaInterval;
var duration = '100';
var num_picked;
var answer_array_tourism = [
"hotel and shopping weekend package deals",
"regional incentive coupons",
"weekend camping trip hosted by local historian storyteller",
"treasure hunt to find architectural details on local buildings",
"progressive dinner to highlight local items at different restaurants",
"social media advertising to show regional specialties",
"bike and stay weekends with neighboring towns",
"seasonal wine and meal pairings",
"murals on town buildings displaying local attractions",
"embedded directional signs in sidewalk to direct foot traffic to nearby attractions",
"local food and beverage taste-testing contest",
"bus tour to all of the quilt stores in an area",
"regional cuisine harvest festivals",
"no sales tax at locally-owned businesses",
"local foods and crafts markets",
"regional incentive coupons",
"increase nighttime shopping with unified, decorative lighting system",
"add facade designs to create visually coherent shopping community",
"rails-to-trails program linking nearby towns",
"walking tours for each season's highlights",
"stage outdoor/indoor competitive games between two or more towns",
"reenactment of local historical events",
"town cleanup day - whoever finds the most trash wins!",
"walking tours of neighborhoods highlighting unique architectural details",
"swap local historians for a weekend to learn about nearby towns",
"bike trail map showing all towns along a route and their main attractions",
"murals on town buildings displaying local attractions",
"'this could be the view from your room!' advertising",
"a 'trading spaces' renovation swap: redo two bldgs, one in each town",
"gardens designed with historically significant plants"];
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
		setTimeout("ideaInterval = setInterval('animateIdeas()', 100)", duration);
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
		ideaInterval = setInterval('animateIdeas()', 100);
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
	$('#page6 div.option').removeClass('current');
	num_picked = 0;
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
	var start = 5000;
	var inc = 1500;
	if(nextOval.length === 0){
	    oval.removeClass('current');
		clearInterval(ideaInterval);
		setTimeout("$('#page5 .option').addClass('current')", 1);
		setTimeout("$('#page5 .option').removeClass('current')", 1000);
		setTimeout("$('#page5 .subOption').fadeIn(duration)", 2000);
		setTimeout("$('#page5 #ideaCenter1').fadeIn(duration)", 2000);
		setTimeout("$('#page5 #ideaCenter2').fadeIn(duration)", start);
		setTimeout("swapIdea('#page5 #option2', '#page5 #option4')", start+=inc);
		setTimeout("remove()", start+=inc);
		setTimeout("swapIdea('#page5 #option1', '#page5 #option3')", start+1);
		setTimeout("remove()", start+=inc);
		setTimeout("swapIdea('#page5 #option2', '#page5 #option5')", start+1);
		setTimeout("remove()", start+=inc);
		setTimeout("swapIdea('#page5 #option2', '#page5 #option6')", start+1);
		setTimeout("remove()", start+=inc);
		setTimeout("swapIdea('#page5 #option1', '#page5 #option5')", start+1);
		setTimeout("remove()", start+=inc);
		setTimeout("$('#page5 #ideaCenter3').fadeIn(duration)", start);
		setTimeout("makeClickable()", start);
	}	
	oval.removeClass('current');
	nextOval.addClass('current');
}

function swapIdea(idea1,idea2){
	$(idea1).addClass('current');
	$(idea2).addClass('current').delay(1450);
}

function remove(){
	$('#page5 .option').removeClass('current');
}

function makeClickable(){
    $('#page5 #option1').attr("onclick", "pick_two('#page5 #option1')");
    $('#page5 #option2').attr("onclick", "pick_two('#page5 #option2')");
    $('#page5 #option3').attr("onclick", "pick_two('#page5 #option3')");
    $('#page5 #option4').attr("onclick", "pick_two('#page5 #option4')");
    $('#page5 #option5').attr("onclick", "pick_two('#page5 #option5')");
    $('#page5 #option6').attr("onclick", "pick_two('#page5 #option6')");
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
        $('.postIdea').fadeOut(duration);
        $('#ideaCenter4').fadeOut(duration);
    }
    else if(num_picked == 2)
    {
        //Show "I have an idea button"
        $('.postIdea').fadeIn(duration);
        $('#ideaCenter4').fadeIn(duration);
    }
    else
    {
        //Should never reach
    }
}

function default_answer_selector()
{
    if($('#page5 #option1').hasClass('current'))
    {
        if($('#page5 #option2').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[0]);
            $('#page6 #good_idea2').text(answer_array_tourism[1]);
        }
        else if($('#page5 #option3').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[2]);
            $('#page6 #good_idea2').text(answer_array_tourism[3]);
        }
        else if($('#page5 #option4').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[4]);
            $('#page6 #good_idea2').text(answer_array_tourism[5]);
        }
        else if($('#page5 #option5').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[6]);
            $('#page6 #good_idea2').text(answer_array_tourism[7]);
        }
        else if($('#page5 #option6').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[8]);
            $('#page6 #good_idea2').text(answer_array_tourism[9]);
        }
    }
    else if($('#page5 #option2').hasClass('current'))
    {
        if($('#page5 #option3').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[10]);
            $('#page6 #good_idea2').text(answer_array_tourism[11]);
        }
        else if($('#page5 #option4').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[12]);
            $('#page6 #good_idea2').text(answer_array_tourism[13]);
        }
        else if($('#page5 #option5').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[14]);
            $('#page6 #good_idea2').text(answer_array_tourism[15]);
        }
        else if($('#page5 #option6').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[16]);
            $('#page6 #good_idea2').text(answer_array_tourism[17]);
        }    
    }
    else if($('#page5 #option3').hasClass('current'))
    {
        if($('#page5 #option4').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[18]);
            $('#page6 #good_idea2').text(answer_array_tourism[19]);
        }
        else if($('#page5 #option5').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[20]);
            $('#page6 #good_idea2').text(answer_array_tourism[21]);
        }
        else if($('#page5 #option6').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[22]);
            $('#page6 #good_idea2').text(answer_array_tourism[23]);
        }    
    }
    else if($('#page5 #option4').hasClass('current'))
    {
        if($('#page5 #option5').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[24]);
            $('#page6 #good_idea2').text(answer_array_tourism[25]);
        }
        else if($('#page5 #option6').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[26]);
            $('#page6 #good_idea2').text(answer_array_tourism[27]);
        } 
    }
    else if($('#page5 #option5').hasClass('current'))
    {
        if($('#page5 #option6').hasClass('current'))
        {
            $('#page6 #good_idea1').text(answer_array_tourism[28]);
            $('#page6 #good_idea2').text(answer_array_tourism[29]);
        } 
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

