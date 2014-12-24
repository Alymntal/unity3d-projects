#pragma strict

var s : KeyCode;
var ball : GameObject;
var player : GameObject;

function Start () {
	ball.SetActive(false);
	GetComponent(SpriteRenderer).enabled = false;
	rigidbody2D.velocity.x = 0;
}

//function Update () {
//	getBall();
//	//OnCollisionEnter2D(coll : Collison2D);
//}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		//rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		if(ball.GetComponent(SpriteRenderer).enabled)
		rigidbody2D.velocity.x = 3.72*(Mathf.Sqrt(Mathf.Sqrt(player.transform.localScale.x + player.transform.localScale.y)));
	}
}
