// === Animasi teks berkedip pada judul skill ===
const skillTitle = document.querySelector(".text-skill h2");
if (skillTitle) {
  setInterval(() => {
    skillTitle.style.color = skillTitle.style.color === "cyan" ? "#ff00cc" : "cyan";
  }, 600);
}

// === Tooltip saat hover planet icon ===
const planets = document.querySelectorAll(".planet");
const tooltip = document.createElement("div");

tooltip.style.position = "absolute";
tooltip.style.background = "#111";
tooltip.style.padding = "5px 10px";
tooltip.style.borderRadius = "5px";
tooltip.style.color = "#fff";
tooltip.style.fontSize = "12px";
tooltip.style.display = "none";
tooltip.style.pointerEvents = "none";
tooltip.style.boxShadow = "0 0 5px #ff00cc";
tooltip.style.zIndex = "9999";

document.body.appendChild(tooltip);

const skillNames = ["Python", "JavaScript", "CSS", "HTML", "VSCode", "GitHub"];

planets.forEach((planet, i) => {
  planet.addEventListener("mousemove", (e) => {
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.textContent = skillNames[i];
    tooltip.style.display = "block";
  });

  planet.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  planet.addEventListener("click", () => {
    alert(`Kamu memilih: ${skillNames[i]}`);
  });
});

// === Aktifkan link aktif pada sidebar ===
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop + 80 &&
      section.offsetTop + section.offsetHeight > fromTop + 80
    ) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
