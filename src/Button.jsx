function Button(){

    function clickHandler (nama){
        console.log(`Saya diklik oleh ${nama}`)
    }

    return(
        <button onClick={ () => {clickHandler('Glen')} }>Kilik saya</button>
    )
}

export default Button