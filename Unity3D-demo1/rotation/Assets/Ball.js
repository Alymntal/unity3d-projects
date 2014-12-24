#pragma strict

var s : KeyCode;
var ball : GameObject;
var player : GameObject;


function Start () {
	ball.SetActive(false);
	GetComponent(SpriteRenderer).enabled = false;
}

function Update () {
	
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		//rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		//rigidbody2D.velocity.x = 3.72*(Mathf.Sqrt(Mathf.Sqrt(player.transform.localScale.x/2 + player.transform.localScale.y/2)));
		var script : Player = GetComponent(Player);
		rigidbody2D.velocity.x = script.speed;
	}
}
