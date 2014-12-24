using UnityEngine;
using System.Collections;

public class KH_SlideAnimation : MonoBehaviour
{

	public string animationName;
	public int fps;
	private float _fps;
	private float timer;
	public Texture2D[] frames;
	private int currentFrame;
	public bool play;
	
	// Use this for initialization
	void Start () {
		_fps = 1.0f/fps;
		currentFrame = 1;
		renderer.material.mainTexture = frames[0];
	}
	
	// Update is called once per frame
	void Update () {
		if(play) {
			if(timer > 0.0)
				timer -= Time.deltaTime;
			if(timer < 0.0)
				timer = 0.0f;
			if(timer == 0.0f) {
				NextFrame();
				StopAnimation();
			}
		}
	}
	
	public void NextFrame() {
		if(!play)
			return;
		if(currentFrame < frames.Length)
			currentFrame++;
		else
			currentFrame = 1;
		renderer.material.mainTexture = frames[currentFrame -1];
		timer = _fps;
	}
	
	public void _SlidePlayAnimation(string _name) {
		if(_name == animationName) {
			play = true;
		}
		else {
			play = false;
		}
	}
	
	public void StopAnimation() {
		if(currentFrame == 1)
			play = false;
	}
}

