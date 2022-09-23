const numbers=document.querySelectorAll(".number")

numbers.forEach(num=>{
    num.innerHTML="0"

    function changeNum(){
        let value=+num.innerHTML
        let finalNum=num.getAttribute("data-num")
        let step=Math.ceil(+finalNum/100)

        if(value<finalNum){
            value+=step
            num.innerHTML=value
            setTimeout(changeNum, 100)
        }
        else if(value>=finalNum){
            num.innerHTML=finalNum
        }

    }
    changeNum()

}
    )