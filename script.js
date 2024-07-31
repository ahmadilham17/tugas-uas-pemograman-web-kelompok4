function imgSlider(any) {
    document.querySelector('.profil').src = any;
}

function dark() {
    document.querySelector('section').style.background = '#222831';
    document.querySelector('h2').style.color = '#f5f5f5';
}

function light() {
    document.querySelector('section').style.background = '#f5f5f5';
    document.querySelector('h2').style.color = '#222831';
}

async function dataAnggota() {
    return fetch('./data/data.json')
        .then((response) => response.json())
        .then((json) => json);
}

async function changePrimaryColor(even, color) {

    const headingContent = document.querySelector('.content h2');
    const descContent = document.querySelector('.content p');

    const data = await dataAnggota();

    let nama, deskripsi;
    data.forEach(element => {
        if (element.id === even.id) {
            nama = element.name;
            deskripsi = element.description;
            document.getElementById('facebook').href = element.facebook;
            document.getElementById('instagram').href = element.instagram;
            document.getElementById('github').href = element.github;
            document.getElementById('cv').href = element.cv;
            document.getElementById('nim').innerHTML = element.nim;
            if (element.background === "light") {
                light();
            } else {
                dark();
            }

        }
    });

    // if (even.id === 'anisa') {
    //     nama = "Anisah Fitriani";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik. ";
    //     light();

    // }

    // if (even.id === 'lince') {
    //     nama = "Lince Sawaki";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik. ";
    //     dark();
    // }

    // if (even.id === 'billy') {
    //     nama = "Billy Jes";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'aziz') {
    //     nama = "MUHAMMAD AZIZ";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }
    // if (even.id === 'virda') {
    //     nama = "VIRDA KRISTY";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'putri') {
    //     nama = "PUTRI REGINA CAHYATI TAMBUN";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'fauzan') {
    //     nama = "FAUZAN MARFIN JUNIOR SAWARDANY";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'ismi') {
    //     nama = "ISMI RAMLAH RUMAGORAM";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'fatma') {
    //     nama = "SITI FATMA TAKAMOKAN";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'yuli') {
    //     nama = "YOULEE LUHUKAY";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'heri') {
    //     nama = "HERI KURNIAWAN";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'nadia') {
    //     nama = "NADIA DWY SYAHPUTRI RUMADAY";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'dea') {
    //     nama = "DEA GLORINESTY PAPALANGI";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     dark();
    // }

    // if (even.id === 'ilham') {
    //     nama = "AHMAD ILHAM";
    //     deskripsi = "Saya sedang menempuh pendidikan di pendidikan di Program Studi Teknik Informatika di Universitas Muhammadiyah Sorong. Sebagai mahasiswa yang penuh semangat dan saya telah mengasah keterampilan saya dalam berbagai aspek ilmu komputer dan teknik.";
    //     light();
    // }

    const textHead = "Halo, Nama Saya <br><span>" + nama.toUpperCase() + "</span>";
    headingContent.innerHTML = textHead;
    descContent.innerHTML = deskripsi;

    const circle = document.querySelector('.circle');
    const circleBlur1 = document.querySelector('.circle-blur1');
    const circleBlur2 = document.querySelector('.circle-blur2');
    const name = document.querySelector('span');
    const button = document.querySelector('.textBox a')
    const thumbImg = document.querySelectorAll('.thumb img');

    for (let i = 0; i < thumbImg.length; i++) {
        const element = thumbImg[i];
        element.style.borderColor = color;
    }

    button.style.background = color;
    name.style.color = color;
    circle.style.background = color;
    circleBlur1.style.background = color;
    circleBlur2.style.background = color;
}