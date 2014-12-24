using UnityEngine;
using System.Collections;

public class TouchLogic : MonoBehaviour 
{
	public static int currTouch = 0;//so other scripts can know what touch is currently on screen

	public int touch2Watch = 64;
	
	void Update () 
	{
		//is there a touch on screen?
		if(Input.touches.Length <= 0)
		{
			//if no touches then execute this code
		}
		else //if there is a touch
		{
			//loop through all the the touches on screen
			for(int i = 0; i < Input.touchCount; i++)
			{
				currTouch = i;
				Debug.Log(currTouch);
				//executes this code for current touch (i) on screen
		/*		if(this.guiTexture != null && (this.guiTexture.HitTest(Input.GetTouch(i).position)))
				{
					//if current touch hits our guitexture, run this code
					if(Input.GetTouch(i).phase == TouchPhase.Began)
					{
						//need to send message b/c function is not present in this script
						//OnTouchBegan();
						this.SendMessage("OnTouchBegan");
					}
					if(Input.GetTouch(i).phase == TouchPhase.Ended)
					{
						//OnTouchEnded();
						this.SendMessage("OnTouchEnded");
					}
					if(Input.GetTouch(i).phase == TouchPhase.Moved)
					{
						//OnTouchMoved();
						this.SendMessage("OnTouchMoved");
					}
					if(Input.GetTouch(i).phase == TouchPhase.Stationary)
					{
						//OnTouchStayed();
						this.SendMessage("OnTouchStayed");
					}
				}
				*/
				//outside so it doesn't require the touch to be over the guitexture
	
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
}