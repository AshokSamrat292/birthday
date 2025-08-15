let memories = JSON.parse(localStorage.getItem("memories")) || [];
let currentIndex = 0;
let slideshowInterval;

// Display current image in slideshow
const slideshowImage = document.getElementById("slideshowImage");
function displayImage(index) {
    if (memories.length > 0) {
        slideshowImage.src = memories[index];
    } else {
        slideshowImage.src = "https://via.placeholder.com/600x400.png?text=No+Memories+Yet";
    }
}

// Start automatic slideshow
function startSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
        nextImage();
    }, 3000);
}

// Next & Prev functions
function nextImage() {
    currentIndex = (currentIndex + 1) % memories.length;
    displayImage(currentIndex);
}
function prevImage() {
    currentIndex = (currentIndex - 1 + memories.length) % memories.length;
    displayImage(currentIndex);
}

// Event listeners for buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    nextImage();
    startSlideshow();
});
document.getElementById("prevBtn").addEventListener("click", () => {
    prevImage();
    startSlideshow();
});

// Handle folder upload
document.getElementById("fileUpload").addEventListener("change", function(e) {
    const files = Array.from(e.target.files)
        .filter(file => file.type.startsWith("image/"))
        .sort((a, b) => a.name.localeCompare(b.name)); // sort by filename

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            memories.push(event.target.result);
            localStorage.setItem("memories", JSON.stringify(memories));
            displayImage(currentIndex);
        };
        reader.readAsDataURL(file);
    });

    currentIndex = 0;
    startSlideshow();
});

// Confetti Effect
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

// Load first image & start slideshow
displayImage(currentIndex);
startSlideshow();
