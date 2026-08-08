let string = "";
let button = document.querySelectorAll('.btn');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        } 
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        } 
        else if(e.target.innerHTML == 'Pi'){
            string = 3.14;
            document.querySelector('input').value = string; 
        } 
        else if(e.target.innerHTML == 'x!'){
            let n = parseInt(string);
            let fact = 1;
            for (let i=1; i<=n; i++){
                fact *= i;
            }
            string = fact.toString();
            document.querySelector('input').value = string; 
        } 
        else {
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})