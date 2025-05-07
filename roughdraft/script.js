function changebattery(){
    if (job.innerHTML.match("The Chief Extra Oatmeal")){
      job.innerHTML = "The Calloused Eggy Oval";
      job.style.backgroundColor = "red"
    }
    else if (job.innerHTML.match("The Calloused Eggy Oval")){
      job.innerHTML = "The Crazy Elephant Overdresser";
      job.style.backgroundColor = "silver"
    }
    else if (job.innerHTML.match("The Crazy Elephant Overdresser")){
      job.innerHTML = "What even is a job?!?!?!";
      job.style.backgroundColor = "pink"
    }
    else if (job.innerHTML.match("What even is a job?!?!?!")){
      job.innerHTML = "wow";
      job.style.backgroundColor = "orange"
    }
    else{
      job.innerHTML = "The Chief Extra Oatmeal";
      job.style.background= "transparent"
    }
    }
  