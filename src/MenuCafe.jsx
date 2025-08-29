

function MenuCafe (){

    const styleMenuItem = {
        backgroundColor : '#333',
        padding : '10px',
        borderRadius : '10px',
        color : '#fff',
        marginBottom : '5px'


    }

    const isMakanan = true;// kalau false gk muncul


    const menu = [
        {nama :'nasi bakar', harga : 'Rp. 10.000'},
        {nama :'mie ayam', harga : 'Rp. 15.000'},
        {nama :'ayam goreng', harga : 'Rp. 20.000'},
    ]
        

    return(

        <>
        {
            menu.map((item, index)=> {
                return(
        <div style={styleMenuItem} key={index}>
            <div><b>Nama Menu : <em>{item.nama}</em>:</b></div>
            <div><b>Nama Menu : <em>{item.harga}</em>:</b></div>
            {(isMakanan == true ) && (<div>Tipe : Makanan</div>) }
        </div>
                )
            }
        )}
        
        
        </>



    )
}

export default MenuCafe