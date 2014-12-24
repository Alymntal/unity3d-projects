#pragma strict

//var audiosplash : AudioClip;
var ball : GameObject;

function Start () {
	//GetComponent(AudioSource).enabled = false;
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "ball") {
		ball.GetComponent(SpriteRenderer).enabled = false;
		//GetComponent(AudioSource).enabled = true;
		//audio.PlayOneShot(audiosplash);
	}
}
