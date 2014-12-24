using UnityEngine;
using System.Collections;

public class KH_Animator : MonoBehaviour {

	public GameObject player;

	public void PlayAnimation(string _name) {
		if(player && (_name == "Jump"))
			player.SendMessage("_JumpPlayAnimation", _name,SendMessageOptions.DontRequireReceiver);

		if(player && (_name == "Slide"))
			player.SendMessage("_SlidePlayAnimation", _name,SendMessageOptions.DontRequireReceiver);
	}
}
