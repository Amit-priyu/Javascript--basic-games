  let userscore=0;
  let computerscore=0;
  
  const choice=document.querySelectorAll(".choice");
  
   const generatcomputerchoice=()=>{
        // rock paper scissors..
        const option=["rock","paper","scissors"];
        const randomindex=Math.floor(Math.random()*3)
        return option[randomindex];
   }


   const playgame=(choiceid)=>{
        console.log("User Choice is = ",choiceid);
        // gen a random number...from the computer side 
        const compchoice=generatcomputerchoice();

   } 

  choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        // console.log("choices clicked",choiceid);
    
        playgame(choiceid)
    });
  });