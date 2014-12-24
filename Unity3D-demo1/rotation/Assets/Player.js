#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var SpeedUP : KeyCode;
var SpeedDown : KeyCode;
var moves : KeyCode;

var ball : GameObject;
var player : GameObject;
var platform : GameObject;
var speed : float = 5;



function Start(){
	
}

function Update ()
{
	if (Input.GetKeyDown(moveUp))
	{
		transform.localEulerAngles += Vector3(0,0,1);
	}
	else if (Input.GetKeyDown(moveDown))
	{
		transform.localEulerAngles -= Vector3(0,0,1);
	}
	if (Input.GetKeyDown(SpeedUP))
	{
		speed += 1;
	}
	else if (Input.GetKeyDown(SpeedDown))
	{
		speed -= 1;
	}
	
	
	if(Input.GetKeyDown(moves)) {
//		var ballScript: Ball = GetComponent(Ball);
//		var X = (player.transform.localScale.x) + 3*(Mathf.Cos(transform.localEulerAngles.z));
//		var Y = (player.transform.localScale.y) + 3*(Mathf.Sin(transform.localEulerAngles.z));
//		ball.transform.localPosition = Vector3(X,Y,0);
		ball.SetActive(true);
		ball.GetComponent(SpriteRenderer).enabled = true;
	}
}