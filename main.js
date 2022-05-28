//Create a reference for canvas 
canvas.getElementById('myCanvas');
ctx.canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width= 75;
greencar_height = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y=225;


function add() {
	newBackgroundImages=new Image();
newBackgroundImages.onload=uploadbackground;
newBackgroundImages.src=background_image;

newRoverImage=new Image();
newRoverImage.onload=uploadrover;
newRoverImage.src=greencar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(newBackgroundImages,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(newRoverImage,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(y>=0) {
		greencar_y=y-10;
		console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
		uploadbackground();
		uploadrover();
	}
}

function down()
{
	if(y>=0) {
		greencar_y=y-10;
		console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
		uploadbackground();
		uploadrover();
	}
}

function left()
{
	if(y>=0) {
		greencar_y=y-10;
		console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
		uploadbackground();
		uploadrover();
	}
}

function right()
{
	if(y>=0) {
    greencar_y=y-10;
    console.log("X cooridanate of Rover is" + x + "Y coordinate is " + y);
    uploadbackground();
    uploadrover();
}
}
