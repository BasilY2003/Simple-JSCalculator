var main_text = document.getElementById("text_field");
var btns = document.querySelectorAll('button');
var deletedEquations = [];


btns.forEach(e=>{

    e.addEventListener('click', clk=>{

        if (clk.target.innerText == 'C') {
            deletedEquations.push(main_text.value);
            main_text.value = '';

        }else if(clk.target.innerText == '='){
           
          try{  main_text.value = eval(main_text.value);

          }catch (error) {
            main_text.value = 'Error';
            
        }
        }else if (clk.target.innerText == 'X'){
        main_text.value += '*';}
        else if (clk.target.innerText == '+/-'){
            main_text.value = -1 * main_text.value;
        }else if (clk.target.innerText == '%'){
            main_text.value = main_text.value/100.00;
        }else if (clk.target.innerText == 'DE'){
            main_text.value = main_text.value.substring(0,main_text.value.length - 1);
        }else if (clk.target.innerText == 'H') {
            // Retrieve the last deleted equation from history
            if (deletedEquations.length > 0) {
                main_text.value = deletedEquations.pop();
            }
        } 
        else{
        main_text.value += clk.target.innerText;
    }
        

    });

});




