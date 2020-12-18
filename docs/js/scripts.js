
document.onscroll = my_func;

function my_func() {
	
	var sc = jQuery(document).scrollTop();
	
	if(sc > 500 && jQuery("#on-top").css("display") != "block") {
		jQuery("#on-top").css({"display":"block"});
		block_in(0.1,jQuery("#on-top"));
		
	}
	else if(sc < 500 && jQuery("#on-top").css("display") != "none") {
		block_out(jQuery("#on-top").css("opacity"),jQuery("#on-top"));
	}
}

function block_in(op,elem) {
	elem.css({"opacity":op});
	op +=0.1;
	
	if(op < 1) {
		setTimeout(
					function () {
						block_in(op,elem)
					},
					100
		);
	}
}

function block_out(op,elem) {
	elem.css({"opacity":op});
	op -=0.1;
	if(op > 0) {
		setTimeout(
					function () {
						block_out(op,elem)
					},
					100
		);
	}
	else {
		jQuery("#on-top").css({"display":"none"});
	}
}


function to_top() {
	var root = jQuery(document);
	var scrol = root.scrollTop();
	
	scrol -= 10;
	
	root.scrollTop(scrol);
	
	if(scrol > 0) {
		setTimeout(to_top,1);
	}
}

$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	


	new WOW({
		offset: 100
	}).init();


	$('.carousel').carousel()

});

jQuery(document).ready(function($) {	
		
	$(".oneicon1").hover(function () { 
		$(".icon").html("<p>Поглощение парниковых газов (три 15-ти литровых ведра краски эквивалентны по эффективности живому взрослому дереву); </p>");
		},	
		function () {	
			$(".oneicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});

	$(".twoicon1").hover(function () { 
		$(".icon").html("<p>Отсутствие летучих органических соединений;</p>");
		},	
		function () {	
			$(".twoicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});


$(".threeicon1").hover(function () { 
		$(".icon").html("<p>Фотокаталитические свойства, позволяющие абсорбировать  неприятные сторонние запахи и очищать воздух в помещение; </p>");
		},	
		function () {	
			$(".threeicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});

$(".fouricon1").hover(function () { 
		$(".icon").html("<p>Создание электромагнитного экрана, препятствующего низко и высокочастотного электромагнитного излучения внешних источников;</p>");
		},	
		function () {	
			$(".fouricon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});

$(".fiveicon1").hover(function () { 
		$(".icon").html("<p>Противомикробные свойства.</p>");
		},	
		function () {	
			$(".fiveicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});


$(".sixicon1").hover(function () { 
		$(".icon").html("<p>Свойства, препятствующие возникновению плесени и грибков; </p>");
		},	
		function () {	
			$(".sixicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});


$(".sevenicon1").hover(function () { 
		$(".icon").html("<p>Изностойкость к мытью, высокая эластичность (отсутствие трещин).</p>");
		},	
		function () {	
			$(".sevenicon1").mouseleave(
					function() {
						$(".icon").html("<p></p>");

},);});

});

/*Крестик гамбургера*/


	