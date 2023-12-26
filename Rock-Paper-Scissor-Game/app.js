  let userscore=0;
  let computerscore=0;
  
  const choice=document.querySelectorAll(".choice");
  const msg=document.querySelector("#msg")
  
  const userscoreupdate=document.querySelector("#user-score");
  const compscoreupdate=document.querySelector("#comp-score");


   const generatcomputerchoice=()=>{
        // rock paper scissors..
        const option=["rock","paper","scissors"];
        // it give a random number between 0-2
        const randomindex=Math.floor(Math.random()*3)
        return option[randomindex];
   }
    const gamedraw=()=>{
        msg.innerText="Game was Draw. Play again.";
        msg.style.backgroundColor="white";
    };
    
    const displaywinner=(userwin,userchoice,compchoice)=>{
        if(userwin){
            userscore++;
            userscore.innerText=userscore;
            msg.innerText="You win! ";
            msg.style.backgroundColor="green";

        }
        else{
            computerscore++;
            compscoreupdate.innerText=computerscore;
            msg.innerText="you loose ";
            msg.style.backgroundColor="red";
        }
    };

   const playgame=(userchoice)=>{
        // console.log("User Choice is = ",choiceid);
        // gen a random number...from the computer side 
        const compchoice=generatcomputerchoice();
        // check both choice=
        if(userchoice===compchoice){
            gamedraw();
        }
        else{
            let userwin=true; 
            if(userchoice==="rock"){
                // computer choice == paper scissor
                userwin=compchoice==="paper"?fale:true;
            }
            else if(userchoice=="paper"){
                // compu choice==scissor ya rock
                userwin=compchoice==="scissor"?false:true;
            }
            else{
                // user --scissor
                // computer choices--- paper rock..
                userwin=compchoice==="rock"?false:true;
            }
            displaywinner(userwin,userchoice,compchoice);
        }
   };

  choice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choices clicked",choiceid);
        // just pass the id to the play game function and then check it with the user generated
        playgame(userchoice)
    });
  });