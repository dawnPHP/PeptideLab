﻿//由ID获取对象
function $(s){return document.getElementById(s);}


//获取非行间样式
 function getStyle(obj, attr)
{
 if(obj.currentStyle)//for IE only
 {
  return obj.currentStyle[attr];
 }
 else
 {
  return getComputedStyle(obj, false)[attr];
  //for ff/chrome only
 }
}

//运动
function startMove(obj, attr, iTarget, fn)
{
 clearInterval(obj.timer);
 obj.timer=setInterval(function (){
  //1.取当前的值
  var iCur=0;
  
  if(attr=='opacity')
  {
   iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
  }
  else
  {
   iCur=parseInt(getStyle(obj, attr));
  }
  
  //2.算速度
  var iSpeed=(iTarget-iCur)/8;
  iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
  
  //3.检测停止
  if(iCur==iTarget)
  {
   clearInterval(obj.timer);
   {                         //执行完关闭定时器执行函数（实现链式运动关键）
   if(fn)
    fn();
   }
  }
  else
  {
   if(attr=='opacity')
   {
    obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
    obj.style.opacity=(iCur+iSpeed)/100;
   }
   else
   {
    obj.style[attr]=iCur+iSpeed+'px';
   }
  }
 }, 30)
}