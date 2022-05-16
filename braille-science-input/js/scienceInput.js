var myPageStyle = {
 "color" : "black",
 "background-color" : "#97F5F1",
 }
var myTextStyle = {
 "float":"left",
 "left-margin":"150pt",
 "width":"80%",
 "color" : "black",
 "background-color" : "#97F5F1",
 "font-size" : "18pt",
 "line-height" : "25pt",
 "padding" : "20pt"
 }
var myEditStyle = {
  "float":"left",
  "margin-left":"200pt",
 //"position" : "absolute",
 //"top":"200pt",
 //"left":"200pt",
 "background-color" : "white",
 "color" : "black",
 "border-style" : "solid",
 "border-width" : "thick",
 "border-color" :"red",
 "font-size" : "24pt",
 "font-family" : "Arial",
 "line-height" : "50px",
 "height" : "300pt",
 "width" : "50%"
 }
var myEditBrailleStyle = {
 //"position" : "absolute",
 //"top":"200pt",
 //"left":"200pt",
 "float":"left",
 "margin-left":"200pt",
 "width" : "50%",
 "height" : "300pt",
 "background-color" : "white",
 "color" : "black",
 "border-style" : "solid",
 "border-width" : "thick",
 "border-color" :"red",
 "font-size" : "28pt",
 "font-family" : "brailleDeComputer",
 "line-height" : "50px"
  }
var myButtonStyle = {
 "float":"right",
 "color" : "black",
 "font-size" : "18pt",
 //"margin-top" : "20px",
 //"margin-bottom" : "20px",
 //"margin-left" : "30px",
 //"margin-right" : "20px",
 "padding" : "50px"
 }
var myHeadingStyle = {
 "text-align" : "center",
 "font-size" : "28pt",
}
var myButtonContainerStyle = {
 "float":"left",
 "width" : "70%",
 "margins":"120pt 0pt 0pt 0pt",
 "background-color" : "#97F5F1",
}
var myDialogStyle = {
 "display" : "none",
 "position" : "absolute",
 "top":"200pt",
 "left":"200pt",
 "width":"25%",
 "max-width":"500pt",
 "height":"150pt",
 "font-size":"18pt",
 "border": "2px solid black",
 "padding" :"0 1em 1em 1em",
 "background-color": "blue",
 "z-index":"1002",
 "overflow": "auto"
}
var myButtonYesStyle ={
  "float":"left",
  "width":"50%",
  "left-margin":"10pt",
  "right-margin":"30pt",
  "font-size":"14pt"
  //"padding" :"20pt",
}
var myButtonNoStyle ={
  "float":"left",
  "left-margin":"30pt",
  "right-margin":"30pt",
  "font-size":"14pt",
  "width":"50%",
  //"padding" :"20pt",
}
var myDialogEditStyle ={
  "font-size":"14pt",
  "width":"300pt",
  "height":"50pt"
}
var myHiddenStyle= {
  "display":"none",  
  "width":"0pt",
  "height":"80pt"
}

var scienceInputApp = angular.module('scienceInputApp', ['ngRoute']);

//English braille codes and ascii signs 
var brlSigns =new Array(
    new Array('space',9),
    new Array('a',100000),
    new Array('b',120000),
    new Array('c',100400),
    new Array('d',100450),
    new Array('e',100050),
    new Array('f',120400),
    new Array('g',120450),
    new Array('h',120050),
    new Array('i',20400),
    new Array('j',20450),
    new Array('k',103000),
    new Array('l',123000),
    new Array('m',103400),
    new Array('n',103450),
    new Array('o',103050),
    new Array('p',123400),
    new Array('q',123450),
    new Array('r',123050),
    new Array('s',23400),
    new Array('t',23450),
    new Array('u',103006),
    new Array('v',123006),
    new Array('x',103406),
    new Array('y',103456),
    new Array('z',103056),
    new Array('&',123406),
    new Array('%',123456),
    new Array('(',123056),
    new Array('!',23406),
    new Array(')',23456),
    new Array('*',100006),
    new Array('<',120006),
    new Array('%',100406),
    new Array('?',100456),
    new Array(':',100056),
    new Array('$',120406),
    new Array('}',120456),
    new Array('\\',120056),
    new Array('{',20406),
    new Array('w',20456),
    new Array('1',20000),
    new Array('2',23000),
    new Array('3',20050),
    new Array('4',20056),
    new Array('5',20006),
    new Array('6',23050),
    new Array('7',23056),
    new Array('8',23006),
    new Array('9',3050),
    new Array('0',3056),
    new Array('@',400),
    //pierwszy zaznaczony
    new Array('\^',450),
    new Array('.',406),
    new Array(';',56),
    new Array('/',3400),
    new Array('>',3450),
    new Array('+',3406),
    new Array('#',3456),
    new Array('.',406),
    new Array('_',456),
    new Array('"',50),
    new Array('\;',56),
    new Array('-',3006),
    new Array(',',6),
    new Array('\'',3000),
);

//braille unicode patterns
var brlUniSigns =new Array(
  new Array('\u2800',9),
  new Array('\u2801',100000),
  new Array('\u2802',20000),
  new Array('\u2803',120000),
  new Array('\u2804',3000),
  new Array('\u2805',103000),
  new Array('\u2806',23000),
  new Array('\u2807',123000),
  new Array('\u2808',400),
  new Array('\u2809',100400),
  new Array('\u280A',20400),
  new Array('\u280B',120400),
  new Array('\u280C',3400),
  new Array('\u280D',103400),
  new Array('\u280E',23400),
  new Array('\u280F',123400),
  new Array('\u2810',50),
  new Array('\u2811',100050),
  new Array('\u2812',20050),
  new Array('\u2813',120050),
  new Array('\u2814',3050),
  new Array('\u2815',103050),
  new Array('\u2816',23050),
  new Array('\u2817',123050),
  new Array('\u2818',450),
  new Array('\u2819',100450),
  new Array('\u281A',20450),
  new Array('\u281B',120450),
  new Array('\u281C',3450),
  new Array('\u281D',103450),
  new Array('\u281E',23450),
  new Array('\u281F',123450),
  new Array('\u2820',6),
  new Array('\u2821',100006),
  new Array('\u2822',20006),
  new Array('\u2823',120006),
  new Array('\u2824',3006),
  new Array('\u2825',103006),
  new Array('\u2826',23006),
  new Array('\u2827',123006),
  new Array('\u2828',406),
  new Array('\u2829',100406),
  new Array('\u282A',20406),
  new Array('\u282B',120406),
  new Array('\u282C',3406),
  new Array('\u282D',103406),
  new Array('\u282E',23406),
  new Array('\u282F',123406),
  new Array('\u2830',56),
  new Array('\u2831',100056),
  new Array('\u2832',20056),
  new Array('\u2833',120056),
  new Array('\u2834',3056),
  new Array('\u2835',103056),
  new Array('\u2836',23056),
  new Array('\u2837',123056),
  new Array('\u2838',456),
  new Array('\u2839',100456),
  new Array('\u283A',20456),
  new Array('\u283B',120456),
  new Array('\u283C',3456),
  new Array('\u283D',103456),
  new Array('\u283E',23456),
  new Array('\u283F',123456),
);

var fType="";
var kType="";
var sID="";
var fileName ="";
var resultData ="key	time stamp\n";
var resultLine="";
var resultText ="";
var released=false;
var specialKey =false;

function myDate() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return date;
}

function myTimeStamp() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var milis =today.getMilliseconds();
  if (milis <100) time +=".0"+milis;
  if (milis >99) time +="."+milis;
  return time;
}

function fillOutData(signType, sign) {
  var ss =sign;
  var ss1 ="";
  if (sign.length ==1 && released ==false && specialKey ==false ) resultLine += sign;
  if (sign =="enter") resultLine ="";
  if(sign =="backspace") {
    var resText =resultLine.substring(0,resultLine.length-1);
    resultLine =resText;
  }
  if(sign=='\u2800') resultLine +=' ';
  if (fType !="brailleFont" && kType !="braille" && specialKey == false && sign =='space' ) resultLine +='  ';
  if (kType =="braille" && specialKey != false && sign == 'space') resultLine +='  ';
  if (fType =="brailleFont" && kType !="braille" && specialKey == false && sign !="enter" && sign !="space" ) {
    var ss1=uniToAscii(ss);
    ss =ss1;
  }
  if (ss.length >1) {
    ss1 ="["+ss+"]";
    ss=ss1;
  }
  resultData += ss +"	" +myTimeStamp() +"\n";
  resultText +=ss;
}

function uniToAscii(sign) {
  var brPattern =0;
  var result ="";
  for (i=0;i<brlUniSigns.length;i++ ) {
   if(brlUniSigns[i][0] ==sign ) brPattern =brlUniSigns[i][1]; 
  }
  for (i=0;i<brlSigns.length;i++ ) {
   if(brlSigns[i][1] ==brPattern ) result =brlSigns[i][0]; 
  }
  //alert("dostalem "+ sign +" wydeje: " +result);
  return result;
}

function showDialog() {
  var dialog =document.getElementById("myDialog");
  var content =document.getElementById("myDialogContent");
  dialog.style.display ="block";
  content.focus();
}

function closeDialog() {
  var dialog =document.getElementById("myDialog");
  var focusBack =document.getElementById("brlEditBox");
  dialog.style.display ="none";
  focusBack.focus();
}

scienceInputApp.config(function($routeProvider){
 $routeProvider
  .when('/',{
  templateUrl : 'pages/start.html',
  controller : 'scienceInputController'
 })
 .when('/main',{
  templateUrl : 'pages/main.html',
  controller : 'scienceInputMainController'
 })
 .when('/confirm',{
  templateUrl : 'pages/confirm.php',
  controller : 'scienceInputConfirmController'
 })
});

scienceInputApp.controller('scienceInputController', function($scope, $location){
  var scienceInput = this;
  $scope.myPageStyle = myPageStyle;
  $scope.myTextStyle = myTextStyle;
  $scope.myEditStyle = myEditStyle;
  $scope.myButtonContainerStyle = myButtonContainerStyle;
  $scope.myButtonStyle = myButtonStyle;
  $scope.myHeadingStyle =myHeadingStyle;
  $scope.myHiddenStyle =myHiddenStyle;
  $scope.fontType="brailleFont";
  $scope.keyboardType ="querty";
  $scope.subjectID ="";
  $scope.startWritingData = function() {
    fType=$scope.fontType;
    kType=$scope.keyboardType;
    sID=$scope.subjectID;
    if (sID==null) { sID ="default"; alert('nie wybrales nazwy pliku'); }
    $location.path("/main");
  };
});

scienceInputApp.controller('scienceInputMainController', function($scope, $http){
 $scope.myPageStyle = myPageStyle;
 $scope.myTextStyle = myTextStyle;
 $scope.myEditStyle = myEditStyle;
 $scope.myEditBrailleStyle = myEditBrailleStyle;
 $scope.myDialogStyle =myDialogStyle;
 $scope.myButtonStyle =myButtonStyle;
 $scope.myButtonContainerStyle =myButtonContainerStyle;
 $scope.myHeadingStyle =myHeadingStyle;
 $scope.myButtonYesStyle =myButtonYesStyle;
 $scope.myButtonNoStyle =myButtonNoStyle;
 $scope.myDialogEditStyle =myDialogEditStyle;

 if (fType =="brailleFont") { 
  $scope.myEditStyle = myEditBrailleStyle;
 } else {
  $scope.myEditStyle = myEditStyle;
 }
 $scope.myButtonStyle = myButtonStyle;
 $scope.myHeadingStyle =myHeadingStyle;
 $scope.myButtonStyle =myButtonStyle;
 $scope.brlcontent='';
 $scope.resultkey =0;
 $scope.signType =kType;
 //alert("Font type: "+fType + " Keyboard type: "+kType +" subject id: "+sID);
 fileName =sID+"-"+myDate();
 $scope.fileName =fileName
 $scope.receivedText ="";

 $scope.focusMe = function() {
  document.getElementById( "brlEditBox").focus();
 };

 $scope.getkeysd = function (event) {
  released=false;
  $scope.keyvald = event.keyCode;
  //alert(event.keyCode);
  if (event.keyCode ==37) { specialKey = true;  fillOutData($scope.signType,"left arrow"); }
  if (event.keyCode ==38){ specialKey = true;  fillOutData($scope.signType,"up arrow"); }
  if (event.keyCode ==39){ specialKey = true; fillOutData($scope.signType,"right arrow"); }
  if (event.keyCode ==40) { specialKey = true; fillOutData($scope.signType,"down arrow"); }
  if (event.keyCode ==35) { specialKey = true; fillOutData($scope.signType,"end");}
  if (event.keyCode ==36) { specialKey = true; fillOutData($scope.signType,"home"); }
  if (event.keyCode ==33) { specialKey = true; fillOutData($scope.signType,"page up");}
  if (event.keyCode ==34) { specialKey = true; fillOutData($scope.signType,"page down");}
  if (event.keyCode ==32 && kType =="braille" ) { specialKey = true; fillOutData($scope.signType,"space");}
  //if (event.keyCode ==32 && kType =="querty" ) { fillOutData("qwerty","space");}
  if (event.keyCode ==8) { specialKey = true; fillOutData($scope.signType,"backspace"); $scope.brlcontent =resultLine; }
  if (event.keyCode ==27){ 
    specialKey = true;
    fillOutData($scope.signType,"escape");
    $scope.brlcontent =resultLine;}
  if (event.keyCode ==16) { specialKey = true; fillOutData($scope.signType,"shift");}
  if (event.keyCode ==17) { specialKey = true; fillOutData($scope.signType,"control");}
  if (event.keyCode ==18) { specialKey = true; fillOutData($scope.signType,"left alt");}
  if (event.keyCode ==20) { specialKey = true; fillOutData($scope.signType,"capslock");}
  if (event.keyCode ==91) { specialKey = true; fillOutData($scope.signType,"windows key");}
  if (event.keyCode ==112) { specialKey = true; fillOutData($scope.signType,"F1");}
  if (event.keyCode ==113) { specialKey = true; fillOutData($scope.signType,"F2");}
  if (event.keyCode ==114) { specialKey = true; fillOutData($scope.signType,"F3");}
  if (event.keyCode ==115) { specialKey = true; fillOutData($scope.signType,"F4");}
  if (event.keyCode ==116) { specialKey = true; fillOutData($scope.signType,"F5");}
  if (event.keyCode ==117) { specialKey = true; fillOutData($scope.signType,"F6");}
  if (event.keyCode ==118) { specialKey = true; fillOutData($scope.signType,"F7");}
  if (event.keyCode ==119) { specialKey = true; fillOutData($scope.signType,"F8");}
  if (event.keyCode ==120) { specialKey = true; fillOutData($scope.signType,"F9");}
  if (event.keyCode ==121) { specialKey = true; fillOutData($scope.signType,"F10");}
  if (event.keyCode ==122) { specialKey = true; fillOutData($scope.signType,"F11");}
  if (event.keyCode ==123) { specialKey = true; fillOutData($scope.signType,"F12");}
  if (kType =="querty" ){
   if(event.keyCode ==70) { $scope.resultkey +=100000; $scope.signType="braille-in";}
   if(event.keyCode ==68) { $scope.resultkey +=20000; $scope.signType="braille-in";}
   if(event.keyCode ==83) { $scope.resultkey +=3000; $scope.signType="braill-in";}
   if(event.keyCode ==74) { $scope.resultkey +=400; $scope.signType="braill-in";}
   if(event.keyCode ==75) { $scope.resultkey +=50; $scope.signType="braill-in";}
   if(event.keyCode ==76) { $scope.resultkey +=6; $scope.signType="braill-in";}
   if(event.keyCode ==32) { $scope.resultkey =9; $scope.signType="braill-in";}
   if ($scope.signType =="qwerty" & event.keyCode !=13 & event.keyCode !=32 & specialKey == false ) {
     fillOutData($scope.signType, String.fromCharCode( event.keyCode +32 ));
     $scope.brlcontent =resultLine;
   }
  }
  if (kType == "braille" ) {
    //if (event.keyCode ==32) { specialKey = true; fillOutData($scope.signType,"space");}
    $scope.signType =="braille-out";
    if (specialKey == false ) fillOutData($scope.signType, String.fromCharCode( event.keyCode +32));
    $scope.brlcontent =resultLine;
   }
   if(event.keyCode ==13) {
     fillOutData($scope.signType, "enter");
     recordData($scope); 
     resultLine ="";
     $scope.brlcontent =resultLine;
    //alert("global "+resultText +" scope "+$scope.receivedText);
   }
   recordData($scope);
specialKey = false;
   event.preventDefault();
  };

 function recordData($scope) {
  var fT =""; var kT ="";
  if (kType == "querty") kT ="6-key braille QWERTY";
  if (kType == "braille") kT ="externall braille keyboard";
  if (fType == "brailleFont" ) fT ="braille font";
  if (fType == "asciiFont" ) fT ="print font";
  if(fileName.substring(0,1) =="-") { 
    var fn ="default"+fileName;
    fileName =fn;
  }
  $scope.receivedData='filename: ' +fileName +'\tFont type: '+ fT +'\tKeyboard type: '+kT +'\n\n'+resultData+'\t\t\n';
  $scope.receivedText =resultText;
 }

 $scope.getkeysu = function (event) {
   $scope.keyvalu = event.keyCode;
    //alert(event.keyCode);
  $scope.fileName=fileName;
   if($scope.resultkey >0) {
   //alert($scope.resultkey); 
	$scope.fileName=fileName;
    if (fType == "asciiFont") {
     for (i=0;i<brlSigns.length;i++ ) {
      if(brlSigns[i][1] ==$scope.resultkey) fillOutData($scope.signType, brlSigns[i][0]);
     } //for
   } //if ftype
  if(fType == "brailleFont") {
     for (i=0;i<brlUniSigns.length;i++ ) {
        if(brlUniSigns[i][1] ==$scope.resultkey) fillOutData($scope.signType, brlUniSigns[i][0]);
     } //for
   } //if braillefont
   if(!released) $scope.resultkey=0;
  $scope.brlcontent =resultLine;
   released=true;
  recordData($scope);
 }
};
});


scienceInputApp.controller('scienceInputConfirmController', function($scope){
  $scope.myPageStyle = myPageStyle;
  $scope.myTextStyle = myTextStyle;
  $scope.myEditStyle = myEditStyle;
  $scope.myButtonStyle = myButtonStyle;
  $scope.myHeadingStyle =myHeadingStyle;
  $scope.myEditBrailleStyle =myEditBrailleStyle;
});
