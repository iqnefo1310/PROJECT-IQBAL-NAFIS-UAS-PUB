const detail = JSON.parse(localStorage.getItem("detail_movie"));
console.log(detail);

const embed = "https://www.youtube.com/embed/"
const close_link = "/videos?api_key=20294adf51756709c0db49a1d6218100&language=en-US"
const key = JSON.parse(localStorage.getItem('id_detail_movie'));
console.log(key);
// URL endpoint API
const apiUrl = 'https://api.themoviedb.org/3/movie/' + key + close_link;
// Fungsi untuk mengambil data dari API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Mengecek apakah array results ada dan tidak kosong
        if (data.results && data.results.length > 0) {
            // Mengambil elemen terakhir dari results
            const lastResult = data.results[data.results.length - 1];

            // Mengambil nilai key dari elemen terakhir
            const lastKey = lastResult.key;
            tampil(lastKey);

            console.log(lastKey); // Output: nilai key dari elemen terakhir
        } else {
            console.log('Array results kosong atau tidak ada.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Memanggil fungsi fetchData
fetchData();


function tampil(l) {
    let figcaption = document.querySelector('.header-detail');
    let title = document.createElement('h1');
    let desc = document.createElement('p');
    let release = document.createElement('p');
    let frame = document.getElementById('frame-embed');

    frame.src = `https://www.youtube.com/embed/${l}?autoplay=1`;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    title.textContent = detail.title;
    desc.textContent = detail.overview;
    release.textContent = detail.release_date;

    figcaption.appendChild(title);
    figcaption.appendChild(desc);
    figcaption.appendChild(release);
}