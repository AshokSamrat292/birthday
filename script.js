// 🔹 Change this to your GitHub Pages URL + folder path
const basePath = "https://yourusername.github.io/yourrepo/memories/";

// 🔹 List of image file names in your folder

   const imageFiles = [
    "memory/IMG-20220415-WA0008.jpg",
    "memory/IMG-20220204-WA0017.jpg",
    "memory/IMG-20220415-WA0010.jpg",
    "memory/IMG-20220415-WA0012.jpg",
    "memory/IMG-20220727-WA0008.jpg",
    "memory/IMG-20220727-WA0014.jpg",
    "memory/IMG-20220727-WA0022.jpg",
    "memory/IMG-20220801-WA0002.jpg",
    "memory/IMG-20220802-WA0001.jpg",
    "memory/IMG-20220802-WA0002.jpg",
    "memory/IMG-20230204-WA0003.jpg",
    "memory/IMG-20230204-WA0009.jpg",
    "memory/IMG-20230408-WA0001.jpg",
    "memory/IMG-20230408-WA0012.jpg",
    "memory/IMG-20230615-WA0014.jpg",
    "memory/IMG-20230615-WA0015.jpg",
    "memory/IMG-20230615-WA0016.jpg",
    "memory/IMG-20240801-WA0010.jpg",
    "memory/IMG-20240815-WA0011.jpg",
    "memory/IMG-20250315-WA0023.jpg",
    "memory/IMG-20250315-WA0065.jpg",
    "memory/IMG-20250315-WA0074.jpg",
    "memory/IMG-20250315-WA0076.jpg",
    "memory/IMG-20250315-WA0078.jpg",
    "memory/IMG-20250315-WA0080.jpg",
    "memory/IMG-20250721-WA0003.jpg",
    "memory/IMG-20250803-WA0008.jpg",
    "memory/IMG-20250806-WA0011.jpg",
    "memory/IMG_20250703_175555.jpg",
    "memory/SAVE_20241222_013602.jpg",
    "memory/Screenshot_2022-07-14-10-19-35-193_com.snapchat.android.jpg",
    "memory/Snapchat-1436868062.jpg",
];

// Load images into gallery
const gallery = document.getElementById("gallery");

imageFiles.forEach(imgPath => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.alt = "Birthday Memory";
    gallery.appendChild(img);
});


// Confetti Effect (same as before)
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 150 + 50,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
        ctx.fill();
    });
    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        c.x += Math.sin(c.d);
        if (c.y > canvas.height) {
            c.x = Math.random() * canvas.width;
            c.y = -10;
        }
    });
}

setInterval(drawConfetti, 20);
