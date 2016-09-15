$('#first, #second').css('background-color', 'orange');
$('#first, #second').html('this text was added with jQuery!');

// $('#first').click(function(){
// 	$('#first').css('width', '500px');
// 	$('#first').css('height', '500px');
// });

// $('#second').click(function(){
// 	$('#second').css('width', '500px');
// 	$('#second').css('height', '500px');
// });

$('#first, #second').click(function(){
	$(this).css('width', '500px');
	$(this).css('height', '500px');
});
