#pragma strict

var animator : Animator;
var flag: int;

function Start() {
  animator = GetComponent(Animator);
}

function FixedUpdate() {
	
	var vertical = Input.GetAxis("Vertical");
    var horizontal = Input.GetAxis("Horizontal");
    
    if (vertical > 0)
        {
            animator.SetInteger("Direction", 2);
			flag = 2;
        }
        else if (vertical < 0)
        {
            animator.SetInteger("Direction", 0);
			flag = 0;
        }
        else if (horizontal > 0)
        {
            animator.SetInteger("Direction", 1);
            flag = 1;
        }
        else if (horizontal < 0)
        {
            animator.SetInteger("Direction", 3);
            flag = 3;
        }
    
    if(flag == 2) {
    	rigidbody2D.velocity=Vector2(0,1);
    }
    else if(flag == 0) {
    	rigidbody2D.velocity=Vector2(0,-1);
    }
    else if(flag == 1) {
    	rigidbody2D.velocity=Vector2(1,0);
    }
    else if(flag == 3) {
    	rigidbody2D.velocity=Vector2(-1,0);
    }
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Ball") {
		var a = animator.GetInteger("Direction");
		
		if(a == 0) {
			animator.SetInteger("Direction", 2);
			flag = 2;
		}
		else if(a == 1) {
			animator.SetInteger("Direction", 3);
			flag = 3;
		}
		else if(a == 2) {
			animator.SetInteger("Direction", 0);
			flag = 0;
		}
		else if(a == 3) {
			animator.SetInteger("Direction", 1);
			flag = 1;
		}
	}

	if (colInfo.collider.tag == "Player") {
		var b = animator.GetInteger("Direction");
		
		if(b == 0) {
			transform.Translate(-Vector2.up * Time.deltaTime);
			flag = 0;
		}
		else if(b == 1) {
			animator.SetInteger("Direction", 3);
			flag = 3;
		}
		else if(b == 2) {
			animator.SetInteger("Direction", 0);
			flag = 0;
		}
		else if(b == 3) {
			animator.SetInteger("Direction", 1);
			flag = 1;
		}
	}
}