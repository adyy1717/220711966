function fn_ValForm() {
    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var umur = document.getElementById("umur").value.trim();
    var kategori = document.getElementById("kategori").value;

    var error = [];

    if (nama === "") {
        error.push("Nama tidak boleh kosong.");
    }

    var polaEmail = /^[a-z0-9]+[a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9-][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9][a-z0-9]{2,4}$/;

    if (email === "") {
        error.push("Email tidak boleh kosong.");
    } else if (!polaEmail.test(email)) {
        error.push("Format email tidak valid.");
    }

    var angkaUmur;

    if (umur === "") {
        error.push("Umur tidak boleh kosong.");
    } else if (!/^\d+$/.test(umur)) {
        error.push("Umur harus berupa angka.");
    } else {
        angkaUmur = Number(umur);

        if (angkaUmur < 10 || angkaUmur > 18) {
            error.push("Umur harus berada di antara 10 sampai 18 tahun.");
        }
    }

    if (kategori === "") {
        error.push("Pilihan lomba tidak boleh kosong.");
    }

    if (error.length > 0) {
        alert(error.join("\n"));
        return false;
    }

    var info;

    if (angkaUmur <= 14) {
        info = "Kategori Junior";
    } else {
        info = "Kategori Senior";
    }

    var pilihan;

    switch (kategori) {
        case "C":
            pilihan = "Cerdas Cermat";
            break;
        case "P":
            pilihan = "Puisi";
            break;
        case "D":
            pilihan = "Desain Poster";
            break;
        default:
            pilihan = "";
    }

    alert("Terima kasih " + nama + "! Anda terdaftar di lomba " + pilihan + " (" + info + ").");

    return false;
}
