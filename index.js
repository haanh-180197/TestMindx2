const btn = document.querySelector(`.enter`);
// const numberDuDoan = document.querySelector(`input[placeholder="Nhap so du doan"]`);
let count = 3;
let bigo = 0;
window.addEventListener(`load`, (e)=>{
    bigo = Math.floor(Math.random() * 11);
})
btn.addEventListener(`click`, (e)=>{
    e.preventDefault();
    const numberDuDoan = document.querySelector(`input[placeholder="Nhap so du doan"]`);
    const a = Number(numberDuDoan.value);
    numberDuDoan.value = ``;
    if(count == 0){
        bigo = Math.floor(Math.random() * 11);
        Swal.fire(
            'Play Again?',
            'That thing is still around?',
            'question'
          )
        count = 3;
    }else{
        if( a == bigo){
            Swal.fire(
                'Good job! Ban La Nguoi Chien Thang',
                'An Vao Day De Thoat!',
                'success'
            )
        }else{
            count --;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Ban Con ${count} Luot`,
            })
        }
    }

})

