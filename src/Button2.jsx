import { useState } from "react"

function Button2(){

    const [counter, setCounter] = useState(0)
// jangan salah penamaan variabel
    let newCounter = 0
    const styleBtn2 = {
        padding :'5px'
    }

    function clickHandler(){
        newCounter = counter + 1
        console.log(`Tombol dua sudah di klik ${newCounter} kali`)
        setCounter(newCounter)
    }

    return (
        <div style={styleBtn2} >
                            <button onClick={clickHandler} >Saya diklik {counter} </button>

        </div>
    )
}

export default Button2