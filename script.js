let menue=document.querySelector('.experience');
   let list=document.querySelector('.list');
   menue.onclick=function(){
       list.classList.toggle('showex')
       if (list.classList.contains('showex')) {
           list2.classList.remove('showsk')
       }else{
         list.classList.toggle('showesk')
       }
       
       }
   
       
       
  let menue1=document.querySelector('.work');
  
  let list2=document.querySelector('.skill');
  
  menue1.onclick=function(){
      list2.classList.toggle('showsk')
      if(list2.classList.contains('showsk')){
          list.classList.remove('showex')
      }else{
         list2.classList.toggle('showex')
      }
       }
       
 /*------ABOUT SECTION END--------*/


