$(function(){
	var victor = new Victor("container", "output");
	var theme = [
			["#525252", "#005584"],
			["#35ac03", "#3f4303"],
			["#ac0908", "#cd5726"],
			["#525252", "#00486b"]
		]
	$(".color li").each(function(index, val) {
		var color = theme[index];
		 $(this).mouseover(function(){
			victor(color).set();
		 })
	});
});