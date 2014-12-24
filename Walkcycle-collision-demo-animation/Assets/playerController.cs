using UnityEngine;
using System.Collections;

public class playerController : MonoBehaviour
{

    private Animator animator;
	Vector2 v;

    // Use this for initialization
    void Start()
    {
        animator = this.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {

        var vertical = Input.GetAxis("Vertical");
        var horizontal = Input.GetAxis("Horizontal");

        if (vertical > 0)
        {
            animator.SetInteger("Direction", 2);
//			transform.position.x += 2;
        }
        else if (vertical < 0)
        {
            animator.SetInteger("Direction", 0);
//			transform.position.x += 2;
        }
        else if (horizontal > 0)
        {
            animator.SetInteger("Direction", 1);
//			v.y = 2;
//			rigidbody2D.velocity = v;
        }
        else if (horizontal < 0)
        {
            animator.SetInteger("Direction", 3);
//			v.y = 2;
//			rigidbody2D.velocity = v;
        }
    }
}
