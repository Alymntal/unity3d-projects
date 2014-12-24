#pragma strict
var bullet: GameObject;


function Start () {
	bullet.GetComponents.<Rigidbody>();
	
}

function Update () {
	
}

function OnCollisionEnter (colInfo : Collision) {
	if (colInfo.collider.tag == "Target") {
		Destroy(gameObject.Find("Target"), 3);
		
	}
}