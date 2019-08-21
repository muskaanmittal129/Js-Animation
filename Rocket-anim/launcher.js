//main function 
function launch(){
       
       setInterval(launch,12000);//repeating the entire function 

        var rocketimage = document.getElementById("rocket");
        
        var pos=350;//initial position
        var y = setInterval(move, 60);
        //function for decrement of position
         function move(){
            pos--;
        rocketimage.style.top = pos + "px";
             if(pos==300){
            var fast =  setInterval(move,5);
            clearInterval(y);}
            else if(pos==-200){
                    clearInterval(fast);
                    mytext();
                }

            
               

             
           
        

    }  


      
       
      //function for rotation 
       function mytext(){var z=0;
         
           var show = document.getElementById("text");
           var back = document.body;
           var stop = setInterval(myfunction,15);
           function myfunction(){
            show.style.display="block";
            back.style.backgroundImage= "url('images/bluee.jpg')";
           show.style.transform="rotate("+z+"deg)";
           z++;
           if(z==360){//for stop after every 1 rotation 
            clearInterval(stop);
            show.style.display="none";
            back.style.backgroundImage= "url('images/black.jpg')";
           
           }
       }
       
    }}