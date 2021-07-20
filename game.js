

var player=$(".playername");
var count=$(".counter");
var x=0;
var y=0;
let numbers=0;
let tekshir=0;
var sum=0;
var mas=[9];

////////////////////////////////

$(".againb").click(function(){
     
  tekshir=0;
  numbers=0;
 for (let i = 0; i < 9; i++) {
 mas[i]=i+2;

 console.log("number "+numbers);
 console.log("te "+tekshir);
 
}

$('.againb').hide(500); 
$('.block').delay(500).show(500); 
$(".bb").text(" ");
player.text("First player")

});

///////////////////////////////

$(".game1").click(function(){

  


    $(".intro").css("transform","scale(0)");
    $(".intro").hide(600);
    
    $(".game").delay(500).fadeIn(500);
   
    setTimeout(() => {

        $(".game").css("display","flex")
    }, 600);
   

   for (let i = 0; i < 9; i++) {
     mas[i]=i+2;
     
   }

   console.log(mas);


   $(".bb").click(function(){
    
    
////////////////////////////////////////////////////////////////
    if(sum==0){
      // player 1

       var d=$(this).attr('class').charAt(4);
       d=parseInt(d);
    
      if(mas[d] != 0 && mas[d] != 1) {

      sum=1;
      numbers++;
      $(this).text("x");
      player.text("Second player O");
      mas[d]=1;
      console.log(mas[d]);
       if(mas[0]==mas[3] && mas[3]==mas[6] ||  mas[6]==mas[7] && mas[7]==mas[8] || mas[2]==mas[5] && mas[5]==mas[8] ||  mas[0]==mas[1] && mas[1]==mas[2] || mas[0]==mas[4] && mas[4]==mas[8]  || mas[6]==mas[4] && mas[4]==mas[2] || mas[3]==mas[4] && mas[4]==mas[5] || mas[1]==mas[4] && mas[4]==mas[7] ){
        $('.block').hide(500); 
        player.text("first player winner");
        tekshir=1;
        x++;
        count.text(x+"/"+y);
        $('.againb').delay(500).show(500); 
         numbers=0; 
      

      }
      
    }

    }

    
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


    // player 2
    else if(sum==1){
      var d=$(this).attr('class').charAt(4);
      d=parseInt(d);
         
      if(mas[d] != 1 && mas[d] != 0 ) {
        sum=0;
        numbers++;
      $(this).text("0");
      player.text("First player X" );
      mas[d]=0;
      
      console.log(mas[d]);
      if(mas[0]== mas[3] && mas[3]== mas[6] ||  mas[6]==mas[7] && mas[7]==mas[8] || mas[2]==mas[5] && mas[5]==mas[8] ||  mas[0]==mas[1] && mas[1]==mas[2] || mas[0]==mas[4] && mas[4]==mas[8]  || mas[6]==mas[4] && mas[4]==mas[2] || mas[3]==mas[4] && mas[4]==mas[5]|| mas[1]==mas[4] && mas[4]==mas[7]){
        $('.block').hide(500); 
        
        player.text("Second player winner");
        y++;
        count.text(x+"/"+y);
        $('.againb').delay(500).show(500); 
        tekshir=1;
        numbers=0;
        

     }
      
    }
    }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


    

    console.log("number "+numbers);
    console.log("tekshir "+tekshir);
    


     if(numbers >= 9 && tekshir==0){
    console.log("kirildi");
      player.text("nch");
       count.text(x+"/"+y);
       $('.block').hide(500); 
 
       $('.againb').delay(500).show(500); 
    
   }
     
   })
    
    

})

  $(".game2").click(function(){


    alert("tez orada ishlab chiqiladi || will be ready soon");
  //  var tekshir2=0;
  //  var sum=0;
  //  var sanoq=0;
  //  var x1,x2=0;
  //  var mas2=[10];
  //  for (let i = 0; i < 9; i++) {
  //    const element = array[i];
     
  //  }


  //  if(sum==0){
  //   sum=1;
   
  // }
   
  //  else if(sum==1)
  //  sum=0;
  //  var fo=Math.floor(Math.random()*(9-0)+0);
      
});
