<!doctype html>
 <meta charset="utf-8">
<html>
  <head>
  <!--  <link rel="stylesheet" href="../css/scienceInput.css"> -->
  </head>
  <body>
<style>
 .myPageClass {
 color:black;
 background-color: "#97F5F1";
 left-margin:40px;
}
.myTextClass {
 color:black;
 background-color: "#97F5F1";
 font-family: Arial;
 font-size:18pt;
 line-height:30px;
 padding : 50px;
}
.myHeadingClass {
 text-align: center;
 font-family: Arial;
 font-size: 28pt;
}
</style>
<div class="myPageClass">
<h1 class="myHeadingClass">Confirmation</h1>
<p class="myTextClass">
Thank you very much for your participation in this study of how people write braille. <br/>

Your writing has been uploaded successfully. <br/>

If you have any questions, please feel free to contact us at any time.<br/>
 Thank you again. 
</p>
<?php

//echo 'file to save data: '.$_POST["filename"].' is ready';
if (substr($_POST["filename"],0,1) == "-") { 
  $fileNameBase= "../files/default".$_POST["filename"];
} else {
  $fileNameBase= "../files/".$_POST["filename"];
}
$fileName= $fileNameBase.".csv";
$textFileName= $fileNameBase.".txt";
//echo 'file to save data: '.$fileName.' is ready';
$txt=$_POST["receiveddata"];
$txt1 =str_replace("		\n","",$txt);
$txtToFile =$_POST["receivedtext"];
$txtToFile1 =str_replace("[enter]","[enter]\n",$txtToFile);
$txtToFile =$txtToFile1; 
if ( file_exists( $fileName)) { //1
  echo 'I can not open the file '.$fileName.' /a new version of the file will be created.';
  $fileName =$fileNameBase.'(1).csv';
  $textFileName =$fileNameBase.'(1).txt';
  if ( file_exists( $fileName)) { //2
    echo 'I can not open the file '.$fileName.' /a new version of the file will be created.';
    $fileName =$fileNameBase.'(2).csv';
    $textFileName =$fileNameBase.'(2).txt';
    if ( file_exists( $fileName)) { //3
      echo 'I can not open the file '.$fileName.' a new version of the file will be created.';
      $fileName =$fileNameBase.'(3).csv';
      $textFileName =$fileNameBase.'(3).txt';
      if ( file_exists( $fileName)) { //4
        echo 'I can not open the file '.$fileName.' /a new version of the file will be created.';
        $fileName =$fileNameBase.'(4).csv';
        $textFileName =$fileNameBase.'(4).txt';
        if ( file_exists( $fileName)) { //5
          echo 'I can not open the file '.$fileName.' /a new version of the file will be created.';
          $fileName =$fileNameBase.'(5).csv';
          $textFileName =$fileNameBase.'(5).txt';
        } //5
      } //4
    } //3
  } //2
 }  //1
$myfile = fopen($fileName, "w") or die("Unable to open file!");
fwrite($myfile, $txt1);
fclose($myfile);
$myfile1 = fopen($textFileName, "w") or die("Unable to open file!");
fwrite($myfile1, $txtToFile);
fclose($myfile1);
?>
</div>
</body>
</html>