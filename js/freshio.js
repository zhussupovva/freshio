const words=["reliable", "чваичва", "вдлаьм","вкпияывм"]

const output=document.getElementById("output")
let charTurn=0
let wordTurn=0

const printWord=()=>{
    if(charTurn<=words[wordTurn].length){
        let str=words[wordTurn].substr(0,charTurn)
        output.innerHTML=str
        charTurn++
        setTimeout(printWord,100)
    }else{
        setTimeout(deleteWord,700)
    }
}

const deleteWord=()=>{
    if(charTurn>=0){
        let str=words[wordTurn].substr(0,charTurn)
        output.innerHTML=str
        charTurn--
        setTimeout(deleteWord,50)
    }else{
        wordTurn++
        if(words.length<=wordTurn){
            wordTurn=0
        }
        setTimeout(printWord,100)
}
}


printWord()