$(document).on('mousemove', function(e){
	e.preventDefault();
	var x = e.clientX;
	var y = e.clientY;
	mouse.dx = Math.abs(x - mouse.ox);
	mouse.dy = Math.abs(y - mouse.oy);
	mouse.x = e.clientX;
	mouse.y = e.clientY;
	mouse.ox = x;
	mouse.oy = y;

});
$(document).on('mouseup', function(e){
	e.preventDefault();
	mouse.x = e.clientX;
	mouse.y = e.clientY;
	mouse.down = true;
	mouse.up = false;
});
$(document).on('mousedown', function(e){
	e.preventDefault();
	mouse.x = e.clientX;
	mouse.y = e.clientY;
	mouse.down = false;
	mouse.up = true;
});