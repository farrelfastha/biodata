async function load() {
    let data = await fetch("data.json") 
    data = await data.json()
    console.log(data)
    let component = ""

    data.forEach(teman =>{
        component += `  <div class="main">
            <div class="img">
                <img src="${teman.fotoselfie}" alt="">
            </div>
            <h1>${teman.nama}</h1>
            <div class="text">mahasiswa teknik informatika <strong>${teman.alamat}</strong></div>
            <p>hai,saya ${teman.nama} (${teman.nim}),mahasiswa teknik informatika UTM asal ${teman.alamat}.
                saya lahir di ${teman.ttl},alamat saya di ${teman.alamat}.saya kelompok ${teman.kelompok}.
                no ${teman.no}
            </p>
            <ul class="container">
                <li><a href="#"><img src="UTM.png" width="25px" height="25px"></a></li>
                <li><a href="#"><img src="logo teknik.jpg" width="25px" height="25px"></a></li>
                <li><a href="#"><img src="logo himatif.jpg" width="25px" height="25px"></a></li>
            </ul>
        </div> `
    })
    document.getElementById("pembungkus").innerHTML=component
}

load()