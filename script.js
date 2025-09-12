const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBrn = document.getElementById('btn-reiniciar');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-'+this.getAtrribute('data-proximo');
    })
}

)