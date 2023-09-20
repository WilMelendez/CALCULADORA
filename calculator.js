class calculator{

    constructor(operand1element, operand2element){
        this.operand1element = operand1element;
        this.operand2element = operand2element;
        this.clear();
    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI;
        this.operand1element.innerHTML = this.operand1 + this.operator;
        this.operand2element.innerHTML = this.operand2;
        

    }

    updateUI(){
        this.operand1element.innerHTML = this.operand1 + this.operator;
        this.operand2element.innerHTML = this.operand2;

    }
    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 === 0 
                        ? number
                        : this.operand2.toString() +number;

        this.updateUI();
    }

    delete(){
        if(this.operand2 === 0) return;
        this.operand2 = +this.operand2.toString().slice(0, -1);
        this.updateUI();
    }
    operation(operacion){
        if(this.operacion){
            this.cal();

        }
        
        this.operacion = operacion;
        this.operand1 = +this.operand2 === 0 ? this.operand1: this.operand2;
        this.operand2 = 0;
        this.updateUI();

    }
    cal(){
        switch(this.operacion){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2;
            break;

            case"-":
            this.operand1 = +this.operand1 - +this.operand2;
            break;

            case"*":
            this.operand1 = +this.operand1 * +this.operand2;
            break;

            case"/":
            this.operand1 = +this.operand1 / +this.operand2;
            break;

        }
        this.operacion = "";
        this.operand2 = 0;
        this.updateUI();
    }

}
const operand1element = document.querySelector("[data-operando-1 ]");
const operand2element = document.querySelector("[data-operando-2 ]");
const dataclear = document.querySelector("[data-clear]");
const datanumber = document.querySelectorAll("[data-number]")
const datadelete = document.querySelector("[data-delete]")
const dataoperation = document.querySelectorAll("[data-operation]")
const dataequals =document.querySelector("[data-equals]")

const Calculator = new calculator (operand1element, operand2element);



dataclear.addEventListener("click" ,() => {
    Calculator.clear();

})

datanumber.forEach(button =>{
    button.addEventListener("click" ,() =>{
        Calculator.appendNumber(button.innerHTML);
    })
})

datadelete.addEventListener("click" ,() =>{
    Calculator.delete();

})

dataoperation.forEach(button => {
    button.addEventListener("click" , () => {
        Calculator.operation(button.innerHTML);
    });


})
dataequals.addEventListener("click" ,() =>{
    Calculator.cal();
})


