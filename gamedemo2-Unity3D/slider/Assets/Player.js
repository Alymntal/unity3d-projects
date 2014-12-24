#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var moves : KeyCode;

var ball : GameObject;
var player : GameObject;
var player2 : GameObject;
var platform : GameObject;
var speed : float = 10;

var X : float = 0;
var Y : float = 0;

var audioslide : AudioClip;

function Start(){
	GetComponent(AudioSource).enabled = false;
}

function Update ()
{
	if (Input.GetKeyDown(moveUp) && (transform.localScale.y < 5))
	{
		player.transform.localScale += Vector3(0,0.1,0);
		player2.transform.localScale += Vector3(0,0.1,0);
	}
	else if (Input.GetKeyDown(moveDown) && (transform.localScale.y > 1))
	{
		player.transform.localScale -= Vector3(0,0.1,0);
		player2.transform.localScale -= Vector3(0,0.1,0);
	}
	else if(Input.GetKeyDown(moveLeft)&& (transform.localScale.x < 4.5))
	{
		player.transform.localScale += Vector3(0.1,0,0);
		player2.transform.localScale += Vector3(0.1,0,0);
	}
	else if(Input.GetKeyDown(moveRight)&& (transform.localScale.x > 1)) {
		player.transform.localScale -= Vector3(0.1,0,0);
		player2.transform.localScale -= Vector3(0.1,0,0);
	}
	
	if(Input.GetKeyDown(moves)) {
//		var ballScript: Ball = GetComponent(Ball);
		
		ball.rigidbody2D.velocity.x = 0;
		
	/*	if(player.transform.localScale.x <= 2){
			 X =  (player.transform.localPosition.x-1) + ((200*player.transform.localScale.x)/100);
		}else if(player.transform.localScale.x > 2) {
			 X =  (player.transform.localPosition.x-2.1) + ((200*player.transform.localScale.x)/100);
		} */
		X =  (player.transform.localPosition.x) + ((200*player.transform.localScale.x)/100) -1;
		Y =  player.transform.localPosition.y + ((200*player.transform.localScale.y)/100);
		ball.transform.localPosition = Vector3(X,Y,0);
		ball.SetActive(true);
		ball.GetComponent(SpriteRenderer).enabled = true;
}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "ball") {
				player.GetComponent(AudioSource).enabled = true;
				audio.PlayOneShot(audioslide);
		}
}
