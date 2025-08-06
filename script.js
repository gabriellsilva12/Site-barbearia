

if (window.matchMedia("(max-width: 768px)").matches) {
    
    let loc = document.querySelector("#localização")
    loc.innerHTML = ""
    loc.style.width = "0px"
    loc.style.height = "0px"
    
    
    let cont3 = document.querySelector(".container3")
    let loca2 = document.querySelector("#localização2")
    
    let ah3 = document.createElement("h3")
    let ploca2 = document.createElement("p")
    let h3loca2 = document.createElement("h3")
    let lik = document.createElement("div")
    let plik = document.createElement("p")
    
    //class container3
    cont3.style.backgroundColor = '#c1b59eab'
    cont3.style.width = '95%'
    cont3.style.height = '330px'
    cont3.style.margin = '0px auto'
    cont3.style.padding = '0px 6px 15px 6px'
    
    
    
    //id localização2
    loca2.style.backgroundColor = '#ffffff90'
    loca2.style.width = '310px'
    loca2.style.height = '300px'
    loca2.style.margin = 'auto'
    loca2.style.textAlign = 'center'
    
    //localizacao > h3
    ah3.innerHTML = `Localizacao`
    ah3.style.padding = '13px 10px 10px 0px'
    ah3.style.fontSize = '18px'
    ah3.style.margin= '0px 20px 8px 20px'
    loca2.appendChild(ah3)
    
    
    //localizacao > p & h3
    
                    // font-size: 18px;
                    // padding: 0px 8px 0px 8px;
    
    
    
    ploca2.innerHTML = `Final da quarta - Rua Francisco Patrício, rua a esquerda, Cacimbão - dos Tabosas, Paraipaba - CE, 62685-000`
    ploca2.style.padding = `0px 15px 0px 15px`
    h3loca2.innerHTML = 'Google Maps'
    h3loca2.style.padding = '25px 0px 10px 0px'
    h3loca2.style.fontSize = '18px'
    h3loca2.style.margin= '0px 20px 8px 20px'
    loca2.appendChild(ploca2)
    loca2.appendChild(h3loca2)
    
    //link & imagem
    
    
    lik.innerHTML = `<a href="https://maps.app.goo.gl/drXv4gzhXD3WDKZSA" target="_blank"><img src="images/maps-and-flags (1).png" alt=""></a>`
    plik.innerHTML = `<strong>Clique aqui</strong>`
    loca2.appendChild(lik)
    loca2.appendChild(plik)

}

