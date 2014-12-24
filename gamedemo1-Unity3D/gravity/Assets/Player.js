#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var moves : KeyCode;

var ball : GameObject;
var player : GameObject;
var platform : GameObject;
var speed : float = 10;

var X : float = 1;

function Start(){
	
}

function Update ()
{
	if (Input.GetKeyDown(moveUp))
	{
		transform.localScale += Vector3(0,0.1,0);
	}
	else if (Input.GetKeyDown(moveDown))
	{
		transform.localScale -= Vector3(0,0.1,0);
	}
	else if(Input.GetKeyDown(moveLeft))
	{
		transform.localScale += Vector3(0.1,0,0);
	}
	else if(Input.GetKeyDown(moveRight)) {
		transform.localScale -= Vector3(0.1,0,0);
	}
	
	if(Input.GetKeyDown(moves)) {
//		var ballScript: Ball = GetComponent(Ball);
		ball.rigidbody2D.velocity.x = 0;
		var X =  5 + ((100*transform.localScale.x)/100) - .5;
		var Y =  0 + ((100*transform.localScale.y)/100);
		ball.transform.localPosition = Vector3(X,Y,0);
		ball.SetActive(true);
		ball.GetComponent(SpriteRenderer).enabled = true;
	}
}