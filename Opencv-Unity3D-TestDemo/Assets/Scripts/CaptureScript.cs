using UnityEngine;
using System.Collections;
using OpenCvSharp;
using OpenCvSharp.Blob;
using OpenCvSharp.Utilities;
using System.Runtime.InteropServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class CaptureScript : MonoBehaviour {

    const int CAPTURE_WIDTH = 320;
    const int CAPTURE_HEIGHT = 240;

    public Texture2D texture;
    private CvCapture capture;
	//*IplImage frame = Cv.QueryFrame(capture);
	IplImage imgBinary;
	IplImage imgLabel;
	IplImage imgRender;
	IplImage imgContour;
	IplImage imgPolygon;

	// Use this for initialization
	void Start () {
        capture = Cv.CreateCameraCapture(0);
        Cv.SetCaptureProperty(capture, CaptureProperty.FrameWidth, CAPTURE_WIDTH);
        Cv.SetCaptureProperty(capture, CaptureProperty.FrameHeight, CAPTURE_HEIGHT);
        IplImage frame = Cv.QueryFrame(capture);
        //IplImage imgSrc = new IplImage(Const.ImageShapes, LoadMode.Color);
    	Debug.Log("width:" + frame.Width + " height:" + frame.Height);
        texture = new Texture2D(frame.Width, frame.Height, TextureFormat.RGBA32, false);
    }
	
	// Update is called once per frame
	void Update () {
        IplImage frame = Cv.QueryFrame(capture);
		imgBinary = new IplImage(frame.Size, BitDepth.U8, 1);
		imgLabel = new IplImage(frame.Size, BitDepth.F32, 1);
		imgRender = new IplImage(frame.Size, BitDepth.U8, 3);
		imgContour = new IplImage(frame.Size, BitDepth.U8, 3);
		imgPolygon = new IplImage(frame.Size, BitDepth.U8, 3);
        Color[] cols = new Color[texture.width*texture.height];
        Cv.CvtColor(frame, imgBinary, ColorConversion.BgrToGray);
        Cv.Threshold(imgBinary, imgBinary, 100, 255, ThresholdType.Binary);
		CvBlobs blobs = new CvBlobs();
						uint result = blobs.Label (imgBinary, imgLabel);
			
						foreach (KeyValuePair<uint, CvBlob> item in blobs) {
								CvBlob b = item.Value;
								//Console.WriteLine ("{0} | Centroid:{1} Area:{2}", item.Key, b.Centroid, b.Area);
				
								CvContourChainCode cc = b.Contour;
								cc.RenderContourChainCode (imgContour);
				
								CvContourPolygon polygon = cc.ConvertChainCodesToPolygon ();
								foreach (CvPoint p in polygon) {
										imgPolygon.Circle (p, 1, CvColor.Red, -1);
								}
						}
			
						blobs.RenderBlobs (imgLabel, frame, imgRender);

			for (int y = 0; y < texture.height; y++) {
				for (int x = 0; x < texture.width; x++) {
					CvColor col = imgRender.Get2D(y, x);
					cols[y * texture.width + x] = new Color(col.R / 255.0f, col.G / 255.0f, col.B / 255.0f, 1.0f);
            }
        }
       // int t2 = System.Environment.TickCount;
        texture.SetPixels(cols);
        //int t3 = System.Environment.TickCount;
        //Debug.Log("t2-t1=" + (t2 - t1) + " t3-t2=" + (t3 - t2));
        texture.Apply();
	}
}
