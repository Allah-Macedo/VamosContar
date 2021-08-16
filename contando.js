//   \u{1F449}   \u{1F3C1}

const count = document.querySelector('#count')
count.addEventListener('click',start)

function start() {
    const inicio = document.querySelector('#inicio')
    const fim    = document.querySelector('#fim')
    const passo  = document.querySelector('#passo')
    let counting   = document.querySelector('#counting')
    let titleCount = document.querySelector('#title_count')
   

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('[ERRO] Valor inválido !')  
        counting.innerHTML = ''
        titleCount.innerHTML = 'Preparando contagem...'
    }else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        counting.innerHTML = ''
        titleCount.innerHTML = 'Contando...'

        if (p <= 0) {
            alert('Valor inválido! Considerando valor 1 .')
            p = 1
        }

        if (i<=f) {
            // contagem crescente
            for (let c = i; c <= f; c+=p) {
                counting.innerHTML += `${c}\u{1F449} `
            }
        }else {
            // contagem decrescente
            for (let c = i; c >= f; c-=p) {
                counting.innerHTML += `${c}\u{1F449}`
            }
        }
        counting.innerHTML += `\u{1F3C1}`
    }
}