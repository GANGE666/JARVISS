//修改了指令部分06/01/18
var ahead=0x32;
var back=0x33;
var left=0x34;
var right=0x35;
var onOff=0x31;
var picTrans=0x36;

var frameHead=0xAA;
var frameFooter=0xFF;
var dataLen=0x01;
var checkSum=0x00;


function goAhead() {
    var carAhead=new Array(5);
    var checkSum1=frameHead+dataLen+ahead+frameFooter;
    checkSum=~checkSum1;
    carAhead[0]=frameHead;
    carAhead[1]=dataLen;
    carAhead[2]=ahead;
    carAhead[3]=checkSum;
    carAhead[4]=frameFooter;
    //carAhead.submit();
	//command.control("goahead");

	var aa=[0xAA,0x01,0x32,0xDD,0xFF];
    var str = String.fromCharCode.apply(null, aa);
    command.control(str);

}
function goBack() {
    var carBack=new Array(5);
    var checkSum1=frameHead+dataLen+back+frameFooter;
    checkSum=~checkSum1;
    carBack[0]=frameHead;
    carBack[1]=dataLen;
    carBack[2]=back;
    carBack[3]=checkSum;
    carBack[4]=frameFooter;
    //carBack.submit();
	//command.control("goback");
	var aa=[0xAA,0x01,0x33,0xDE,0xFF];
    var str = String.fromCharCode.apply(null, aa);
    command.control(str);
}
function goLeft() {
    var carLeft=new Array(5);
    var checkSum1=frameHead+dataLen+left+frameFooter;
    checkSum=~checkSum1;
    carLeft[0]=frameHead;
    carLeft[1]=dataLen;
    carLeft[2]=left;
    carLeft[3]=checkSum;
    carLeft[4]=frameFooter;
    //carLeft.submit();
	//command.control("goleft");
	var aa=[0xAA,0x01,0x34,0xDF,0xFF];
    var str = String.fromCharCode.apply(null, aa);
    command.control(str);
}
function goRight() {
    var carRight=new Array(5);
    var checkSum1=frameHead+dataLen+right+frameFooter;
    checkSum=~checkSum1;
    carRight[0]=frameHead;
    carRight[1]=dataLen;
    carRight[2]=right;
    carRight[3]=checkSum;
    carRight[4]=frameFooter;
    //carRight.submit();
	//command.control("goright");
	var aa=[0xAA,0x01,0x35,0xE0,0xFF];
    var str = String.fromCharCode.apply(null, aa);
    command.control(str);
}

/*添加了部分指令*/
function onAndOff() {
    var carOpen=new Array(5);
    var checkSum1=frameHead+dataLen+onOff+frameFooter;
    checkSum=~checkSum1;
    carOpen[0]=frameHead;
    carOpen[1]=dataLen;
    carOpen[2]=onOff;
    carOpen[3]=checkSum;
    carOpen[4]=frameFooter;
    //carOpen.submit();
	//command.control("onandoff");
	var aa=[0xAA,0x01,0x31,0xDC,0xFF];
    var str = String.fromCharCode.apply(null, aa);
    command.control(str);
}
//是否显示图像
function pic_Trand() {
    var carPic=new Array(5);
    var checkSum1=frameHead+dataLen+picTrans+frameFooter;
    checkSum=~checkSum1;
    carPic[0]=frameHead;
    carPic[1]=dataLen;
    carPic[2]=picTrans;
    carPic[3]=checkSum;
    carPic[4]=frameFooter;
    carPic.submit();
}

//获取实时速度
function nowSpeed() {

}

//图像显示问题？
$("image").attr('src', src="./img1.jpg"+"?t=" + Math.random());