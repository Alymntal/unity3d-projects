using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour {

	public KH_Animator animator;

	// Use this for initialization
	void Start () {
		animator = GetComponent<KH_Animator>();
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetButtonDown("Jump"))
			animator.PlayAnimation("Jump");
		if(Input.GetButtonDown("Fire1"))
			animator.PlayAnimation("Nothing");
	}
}
