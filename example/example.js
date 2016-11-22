"use strict";

//Import modules
var Keyboard = SyncInput.Keyboard;
var Mouse = SyncInput.Mouse;
var Gamepad = SyncInput.Gamepad;

function Example(){}

var keyboard = null;
var mouse = null;
var gamepad = null;

var mouse_div;
var delta_div;
var keyboard_div;

Example.initialize = function(main)
{
	keyboard = new Keyboard();
	mouse = new Mouse();
	gamepad = new Gamepad();
	
	mouse_div = document.createElement("div");
	mouse_div.style.position = "absolute";
	mouse_div.style.textAlign = "left";
	mouse_div.style.whiteSpace = "pre-wrap";
	mouse_div.innerHTML = "";
	document.body.appendChild(mouse_div);

	delta_div = document.createElement("div");
	delta_div.style.position = "absolute";
	delta_div.style.top = "20%";
	delta_div.style.textAlign = "left";
	delta_div.style.whiteSpace = "pre-wrap";
	delta_div.innerHTML = "";
	document.body.appendChild(delta_div);

	keyboard_div = document.createElement("div");
	keyboard_div.style.position = "absolute";
	keyboard_div.style.overflow = "scroll";
	keyboard_div.style.left = "50%";
	keyboard_div.style.height = "80%";
	keyboard_div.style.width = "40%";
	keyboard_div.style.textAlign = "left";
	keyboard_div.style.whiteSpace = "pre-wrap";
	keyboard_div.innerHTML = "";
	document.body.appendChild(keyboard_div);

	Example.loop();
}

Example.loop = function()
{
	requestAnimationFrame(Example.loop);

	mouse.update();
	keyboard.update();

	//Mouse movement
	mouse_div.innerHTML = "Mouse x:" + mouse.position.x + " y:" + mouse.position.y + "\n";
	delta_div.innerHTML = "Delta x:" + mouse.delta.x + " y:" + mouse.delta.y + "\n";

	//Check for key presses
	for(var i = 0; i < 256; i++)
	{
		if(keyboard.keyJustPressed(i))
		{
			keyboard_div.innerHTML += String.fromCharCode(i) + " just pressed\n";
		}
		if(keyboard.keyJustReleased(i))
		{
			keyboard_div.innerHTML += String.fromCharCode(i) + " pressed\n";
		}
		if(keyboard.keyPressed(i))
		{
			keyboard_div.innerHTML += String.fromCharCode(i) + " pressed\n";
		}
	}
}
