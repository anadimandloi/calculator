
// const input = document.querySelector('.input-box');

// input.addEventListener('keyup',function(event){
//     let num1 = event.target.value;
// })

let value1=0;
let value2=0;
let symbol ='';

var input = document.querySelector('.input-box').value;


function calculate(symbol, value1, value2){
    var total = 0;
    switch (symbol) {
        case '+':
            total = Number(value1) + Number(value2)
            break;
        
        case '-':
            total = Number(value1) - Number(value2)          
            break;
        case '/':
            total = Number(value1) / Number(value2) 
            break;
        case 'x':
            total = Number(value1) * Number(value2)
            
            break;
        case '=':
            input = total;

            
            break;
                                                 
        default:
            break;
    }
}

const button = document.querySelector('.container');
button.addEventListener('click',function(event){
    var value_actual= event.target.value;

    //console.log(event.target.covalue);
    if(event.target.tagName==='BUTTON'){

        //value = event.target.value;
        //console.log(value);
        switch (value_actual) {
            case '/':
                symbol='/';

                console.log(value_actual,symbol);
                break;
            case 'C':
                symbol='C'
                console.log(value_actual);
                break;
            case '<-':
                symbol='<-'
                console.log(value_actual);
                break;
            case 'x':
                symbol='x'
                console.log(value_actual);
                break;
            case '-':
                symbol='-'
                console.log(value_actual);
                break;
            case '+':
                symbol='+'
                console.log(value_actual);
                break;
            case '=':
                symbol='='
                break;        
            default:

                if(symbol ===''){
                    if(value1===0){
                        value1 = value_actual;
                    }
                    else {
                        value1 = value1 + value_actual;
                    }
                    input=value1;

                    console.log(value1);
                    console.log(symbol);

                }
                else if(symbol!==''){
                    if(value2===0){
                        value2 = value_actual;
                    }
                    else {
                        value2 = value2 + value_actual;
                    }
                    input=value2;


                }

        
                break;
        }

    
}
});

