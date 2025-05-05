// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Filtro de Produtos
  const filterButtons = document.querySelectorAll(".btn-outline-secondary");
  const productCards = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover classe ativa de todos
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.textContent.trim();

      productCards.forEach((card) => {
        const matchesCategory =
          category === "Todos" || card.textContent.includes(category);
        card.style.display = matchesCategory ? "block" : "none";
      });
    });
  });

  // Destacar link ativo no menu
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("fw-bold", "text-primary");
    }
  });
});

// Dados dos produtos
const products = [
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/assistencia-768x406.jpg-qtff5wk3kdahyuaknak4ousx7ifm74fel0yuiylcuc.webp",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: true,
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Pistao-qvdqcodcephx2ldrnm2jqcag35vwpjio4vjjt1y79g.jpg",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: false,
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: false,
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: false,
  },
];

// Função para renderizar os produtos
function renderProducts() {
  const container = document.getElementById("products-container");

  products.forEach((product) => {
    const productHTML = `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            ${
              product.isNew
                ? '<div class="position-absolute bg-primary text-white px-2 py-1" style="top:10px; left:10px;">Novo</div>'
                : ""
            }
            <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }" loading="lazy" />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <a href="${product.link}" class="btn btn-primary">Detalhes</a>
            </div>
          </div>
        </div>
      `;

    container.innerHTML += productHTML;
  });
}

// Chamada inicial para renderizar os produtos
document.addEventListener("DOMContentLoaded", renderProducts);
