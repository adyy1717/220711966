var targetNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var nilaiRupiah = parseFloat(inputEl.value);
    var hasilUsd = nilaiRupiah / 18246;

    // Menampilkan hasil konversi
    targetNode.data = hasilUsd.toFixed(2);

    // Membuat elemen list baru
    var listBaru = document.createElement("li");

    // Membuat node teks berupa catatan riwayat
    var catatan = document.createTextNode(
        "Rp" + nilaiRupiah + " = US$" + hasilUsd.toFixed(2)
    );

    // Memasukkan teks ke dalam list
    listBaru.appendChild(catatan);

    // Memasukkan list ke dalam riwayat
    document.getElementById("riwayat").appendChild(listBaru);
}

window.onload = init;
