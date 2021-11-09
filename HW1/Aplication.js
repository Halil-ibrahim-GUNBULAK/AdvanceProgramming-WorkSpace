const T = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
const q=[0,0,0,0,0,0,0,0,0,0]

function Row(){
    var sonuc  = ""

    var head =

    `
    <tr>
        <th></th><th>Y = ${T[0]}</th>
        <th>Y = ${T[1]}</th>
        <th>Y = ${T[2]}</th>
        <th>Y = ${T[3]}</th>
        <th>Y = ${T[4]}</th>
        <th>Y = ${T[5]}</th>
        <th>Y = ${T[6]}</th>
        <th>Y = ${T[7]}</th>
        <th>Y = ${T[8]}</th>
        <th>Y = ${T[9]}</th>    
    </tr>
    `
    sonuc = sonuc + head
    for (let i=0; i <= 9; i++){
        var satir = 

        `

        <tr>
            <th>X = ${i}</th>
            <td>${q[0].toFixed(2)}<span class="tip">Col1</span></td>
            <td>${q[1].toFixed(2)}<span class="tip">Col2</span></td>
            <td>${q[2].toFixed(2)}<span class="tip">Col3</span></td>
            <td>${q[3].toFixed(2)}<span class="tip">Col4</span></td>
            <td>${q[4].toFixed(2)}<span class="tip">Col5</span></td>
            <td>${q[5].toFixed(2)}<span class="tip">Col6</span></td>
            <td>${q[6].toFixed(2)}<span class="tip">Col7</span></td>
            <td>${q[7].toFixed(2)}<span class="tip">Col8</span></td>
            <td>${q[8].toFixed(2)}<span class="tip">Col9</span></td>
            <td>${q[9].toFixed(2)}<span class="tip">Col10</span></td>
        </tr>
        `

        for(let j = 0 ;j<10 ;j++){
           
         
                q[j] =(i+1)*j
            
         
        }
        sonuc = sonuc +  satir
    }
    
    document.querySelector("#tablo").innerHTML = sonuc
}

Row()
document.querySelector("#sample").innerText = Row.toString()
