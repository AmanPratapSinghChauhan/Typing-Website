


var y='';
const a=[];
var str1='lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   const c=[];
   var str2='time is money life a journey travelled on the highway of time. therefore, time is precious. every moment in life should be properly utilized, as time, once lost, can never be recovered. and there is no way to stop should be properly utilized, as time, once lost, can never be recovered. and there is no way to stop the hands of time from ticking. hence right from childhood, one should learn to appreciate the value of time. just as one should learn to make the best use of money, should learn to make the best use of time, too. it has been rightly said, time and tide wait for none. people who realize the value of time, believe in action rather than procrastination. they use it to acquire knowledge and various useful skills.'
   var num=Math.floor(Math.random()*2);
   a[0]=str1;
   a[1]=str2;
   console.log(num);
   // document.getElementById('para').innerHTML=a[num];
   var l=0;
   var i=0;
   var out='';
for(var j=0;j<a[num].length;j++){
  if(a[num][j]!=' '){
    out=out+a[num][j];
  }
  else{
    out=out+' ';
    c[i++]=out;
  var sx = document.createElement("SPAN"+[l++]);
  var st = document.createTextNode(out);
  sx.appendChild(st);
  document.getElementById('para').appendChild(sx);

    out='';
  }
}
var k=0;
var sum=0;
var lf=0;
  function myFunction(event){
       var x=event.key;
       console.log(x.charCodeAt(0));

     if(x.charCodeAt(0)==66){
       console.log('backspace');
       console.log(y);
       // if(y.length===0){
       //   console.log('null achieved');
       //   var attr = document.createAttribute('readonly');
       //   document.getElementById("int").setAttributeNode(attr);
       //   if(event.key.charCodeAt(0)!=66){
       //     document.getElementById('int').removeAttr(attr);
       //   }
       // }
       y=y.slice(0,y.length-1);

     }
     else{
       y=y+x;
     }

    if(x==' ')
    {

    console.log('space is present');
    console.log(y);
    if(y==c[k++]){
      console.log('successful');
      sum=sum+1;


      // document.getElementById('para').innerHTML=output;
      // document.getElementById('para').style.color='green';
     document.getElementById('speed').innerHTML=sum+'words/min';
     document.getElementById('int').style.color='green';
     document.getElementsByTagName('span'+lf++)[0].style.color='#4a148c';
      y='';
    }
    else{
      console.log('unsuccessful');
      document.getElementsByTagName('span'+lf++)[0].style.color='red';
      y='';

    }
      // for(int j=0;j<c.length();j++){
      //   if(y==c[j]){
      //     console.log('successful');
      //     y='';
      //   }
      // }
    }
  }
  function time(){
  var time=60;
   setInterval(myTime,1000)
  function myTime(){
    if(time>=0 && time<=60){
      document.getElementById("time").innerHTML = time +'seconds';
      console.log(time);
      time=time-1;

    }
    if(time<0){
      alert('your typing speed is '+sum+' words/minute');
      time=62;
      location.reload();
    }

    }


  }
  // for(int k=0;k<a[num].length;k++){
  //   var element =document.getElementsByTagName('span'+k)[0];
  //   element.classList.add('myspan');
  // }
