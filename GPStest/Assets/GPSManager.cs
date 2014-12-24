using UnityEngine;
using System.Collections;

public class GPSManager : MonoBehaviour {
    static string speedMessage;
    AndroidJavaClass gpsActivityJavaClass;
    void Start () {
        AndroidJNI.AttachCurrentThread();
        gpsActivityJavaClass = new AndroidJavaClass("com.test.app.GPSTest");
    }
    void Update() {
        speedMessage = gpsActivityJavaClass.CallStatic<string>("getSpeed");
        float speed = 0;
        if(speedMessage!="Unknown")
        {
            speed = float.Parse(speedMessage);
            GameObject.Find("gps_output").guiText.text = speed + "km/h";
        }
        else
        {
            GameObject.Find("gps_output").guiText.text = "No speed.";
        }
    }
}