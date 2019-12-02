$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	$("p").click(function() {
		$(this).children("a").css("color", "red");
	});
	
	/*$("h2").hover(function() {
		$("h2").css("background-color", "lightblue");
		$(this).css("font-size", "46px");
	}, function() {
		$(this).css("color", "red");
	});*/
	
	$("button").click(function() {
	    $(this).prev("p").slideToggle(1000);
	});
	
	$(".card").click(function() {
		$(this).toggleClass("highlight");
	});
	
	// All cards that are not currently selected will be hidden when `select_btn` is clicked
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
	/*$(".stream1 .bottom_button").click(function() {
		$(".stream1 p").slideToggle('1000');
       
    });
    $(".stream2 .bottom_button").click(function(){
        $('.stream2 p').toggle('slow');
    });
    $(".stream3 .bottom_button").mouseenter(function(){
        $('.stream3 p').fadeTo(0, 0.5);
    });
    $(".stream3 .bottom_button").mouseleave(function(){
        $('.stream3 p').fadeTo(0, 1);
    });*/

}); 
