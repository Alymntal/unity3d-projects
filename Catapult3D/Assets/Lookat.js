#pragma strict

var myTransform : Transform;

function Start () {

}

function Update () {
	transform.LookAt(myTransform);
}