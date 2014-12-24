#pragma strict
var hammer: GameObject;


function Start () {
	hammer.GetComponents.<Rigidbody>();
	

}

function Update () {
	hammer.rigidbody.AddForce(Vector3(0,-1,0)*((hammer.rigidbody.mass)*9.8));

}