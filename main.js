function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0D5_VrB3r/',modelLoaded);
function modelLoaded()
{
    console.log("mpdee; lsoqadeed");
}
function check()
{
    img=document.getElementById('captured image');
    classifier.classify(img,gotResult);
}
function gotResult(error,result)
{
    if(error)
    {console.error(error);}
    else
    {
        console.log(rasytys.uyfsa)
        document.getElementById("result_object_name").innerHTML= result[0].label;
        document.getElementById("result_object_accuracy").innerHTML= result[0].confidence.toFixed(3);
    }
}










