#pragma strict

var player : GameObject;
var player2 : GameObject;
var ball : GameObject;
var touchLogic = new TouchLogic();
var touch2Watch : int = 0;

var X : float = 0;
var Y : float = 0;
	//	public float rotateSpeed = 100.0f;

	//	public int invertPitch = 1;
	//public Transform player;
	//private float pitch = 0.0f,
	//yaw = 0.0f;
	//[NEW]//cache initial rotation of player so pitch and yaw don't reset to 0 before rotating
	//private Vector3 oRotation;
	
	//[NEW]//
	function Start() {

		player.GetComponent(Transform);
		player2.GetComponent(Transform);
		//cache original rotation of player so pitch and yaw don't reset to 0 before rotating
		//oRotation = player.eulerAngles;
		//pitch = oRotation.x;
		//yaw = oRotation.y;
	}
	//[NEW]//
	function OnTouchBeganAnyWhere()
	{
		//need to cache the touch index that started on the pad so others wont interfere
		touch2Watch = touchLogic.currTouch;
	}
	
	function OnTouchMovedAnyWhere() {

	if (Input.GetTouch(touch2Watch).deltaPosition.y > 0)
	{
		if(player.transform.localScale.y < 5){
		player.transform.localScale += Vector3(0,0.1,0);
		player2.transform.localScale += Vector3(0,0.1,0);
		}
	}
	else if (Input.GetTouch(touch2Watch).deltaPosition.y < 0)
	{
		if(player.transform.localScale.y > 1){
		player.transform.localScale -= Vector3(0,0.1,0);
		player2.transform.localScale -= Vector3(0,0.1,0);
		}
	}
	else if(Input.GetTouch(touch2Watch).deltaPosition.x > 0)
	{
		if(player.transform.localScale.x < 4.5){
		player.transform.localScale += Vector3(0.1,0,0);
		player2.transform.localScale += Vector3(0.1,0,0);
		}
	}
	else if(Input.GetTouch(touch2Watch).deltaPosition.x < 0) {
		if(player.transform.localScale.x > 1){
		player.transform.localScale -= Vector3(0.1,0,0);
		player2.transform.localScale -= Vector3(0.1,0,0);
		}
	}
		//	animator.PlayAnimation("Slide");
	//	pitch -= Input.GetTouch(touch2Watch).deltaPosition.y * rotateSpeed * invertPitch * Time.deltaTime;
	//	yaw += Input.GetTouch(touch2Watch).deltaPosition.x * rotateSpeed * invertPitch * Time.deltaTime;
		
		//limit so we dont do backflips
	//	pitch = Mathf.Clamp(pitch, -80, 80);
		
		//do the rotations of our camera 
	//	player.eulerAngles = new Vector3 ( pitch, yaw, 0.0f);
	}
	//[NEW]//
	function OnTouchStayedAnyWhere() {
		X =  (player.transform.localPosition.x) + ((200*player.transform.localScale.x)/100) -1;
		Y =  player.transform.localPosition.y + ((200*player.transform.localScale.y)/100);
		ball.transform.localPosition = Vector3(X,Y,0);
		
//		ball.SetActive(true);
//		ball.GetComponent(SpriteRenderer).enabled = true;
	}
	
	function OnTouchEndedAnyWhere()
	{
		ball.SetActive(true);
		ball.GetComponent(SpriteRenderer).enabled = true;
		//the || condition is a failsafe
//		if(touchLogic.currTouch == touch2Watch || Input.touches.Length <= 0)
		//	touch2Watch = 64;
	}
