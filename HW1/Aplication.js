  
const L = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const p=[1,2,3,4,5,6,7,8,9]

for (let λ of L) {
    p.push(Math.exp(L))
}

function makeRows(){
    var sonuc  = ""
    var head =
    `
    <tr>
        <th></th><th>λ = ${L[0]}</th>
        <th>λ = ${L[1]}</th>
        <th>λ = ${L[2]}</th>
        <th>λ = ${L[3]}</th>
        <th>λ = ${L[4]}</th>
        <th>λ = ${L[5]}</th>
        <th>λ = ${L[6]}</th>
        <th>λ = ${L[7]}</th>
        <th>λ = ${L[8]}</th>
        <th>λ = ${L[9]}</th>
      
    </tr>
    `
    sonuc = sonuc + head
    for (let i=0; i <= 9; i++){
        var satir = 
        `
        <tr>
            <th>X = ${i}</th><td>${p[0].toFixed(4)}<span class="tip">C1</span></td>
            <td>${p[1].toFixed(4)}<span class="tip">C2</span></td>
            <td>${p[2].toFixed(4)}<span class="tip">C3</span></td>
            <td>${p[3].toFixed(4)}<span class="tip">C4</span></td>
            <td>${p[4].toFixed(4)}<span class="tip">C5</span></td>
            <td>${p[5].toFixed(4)}<span class="tip">C5</span></td>
            <td>${p[6].toFixed(4)}<span class="tip">C6</span></td>
            <td>${p[7].toFixed(4)}<span class="tip">C7</span></td>
            <td>${p[8].toFixed(4)}<span class="tip">C8</span></td>
            <td>${p[9].toFixed(4)}<span class="tip">C9</span></td>
        </tr>

        `
        for(let j = 0 ;j< L.length ;j++){
            p[j] = (p[j] * L[j])/(i+1)
        }
        sonuc = sonuc + satir
    }
    document.querySelector("#tablo").innerHTML = sonuc
}

makeRows()
document.querySelector("#sample").innerText = makeRows.toString()
