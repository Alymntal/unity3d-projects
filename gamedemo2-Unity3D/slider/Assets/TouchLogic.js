#pragma strict

var currTouch : int = 0;//so other scripts can know what touch is currently on screen
var touch2Watch : int = 64;

function Update () {

	//is there a touch on screen?
		if(Input.touches.Length <= 0)
		{
			//if no touches then execute this code
		}
		else //if there is a touch
		{
			//loop through all the the touches on screen
			for(var i : int = 0; i < Input.touchCount; i++)
			{
				currTouch = i;
				Debug.Log(currTouch);
				
				switch(Input.GetTouch(i).phase)
				{
				case TouchPhase.Began:
					//OnTouchBeganAnywhere();
					this.SendMessage("OnTouchBeganAnyWhere");
					break;
				case TouchPhase.Ended:
					//OnTouchEndedAnywhere();
					this.SendMessage("OnTouchEndedAnyWhere");
					break;
				case TouchPhase.Moved:
					//OnTouchMovedAnywhere();
					this.SendMessage("OnTouchMovedAnyWhere");
					break;
				case TouchPhase.Stationary:
					//OnTouchStayedAnywhere();
					this.SendMessage("OnTouchStayedAnyWhere");
					break;
				}
			}
		}
}
