// Dados dos produtos
const products = [
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/assistencia-768x406.jpg-qtff5wk3kdahyuaknak4ousx7ifm74fel0yuiylcuc.webp",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: true,
    category: "Compressores",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Pistao-qvdqcodcephx2ldrnm2jqcag35vwpjio4vjjt1y79g.jpg",
    title: "Compressor de Parafuso Atlas Copco GA 37",
    description: "37 HP • 220V",
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Compressores",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Mangueira de Ar",
    description: 'Mangueira de Ar 1/2"',
    link: "/produto/mangueira-ar",
    isNew: false,
    category: "Acessórios",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Filtro de Ar",
    description: 'Filtro de Ar 1/2"',
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Acessórios",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Filtro de Ar",
    description: 'Filtro de Ar 1/2"',
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Acessórios",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Filtro de Ar",
    description: 'Filtro de Ar 1/2"',
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Acessórios",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Filtro de Ar",
    description: 'Filtro de Ar 1/2"',
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Acessórios",
  },
  {
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Atlas-copo-qvdqcq90sdkhptb1cmvsvbtd9xmn4xq4t4uirlvex0.jpg",
    title: "Filtro de Ar",
    description: 'Filtro de Ar 1/2"',
    link: "/produto/compressor-ga37",
    isNew: false,
    category: "Acessórios",
  },
];

// Função para renderizar os produtos
function renderProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // limpar antes de renderizar

  products.forEach((product) => {
    const productHTML = `
      <div class="col-md-3 mb-4" data-category="${product.category}">
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

// script.js
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(); // precisa ser chamada antes de buscar os cards

  const filterButtons = document.querySelectorAll("#filter-buttons .btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.textContent.trim();
      const cards = document.querySelectorAll("#products-container > div");

      cards.forEach((card) => {
        const cardCategory = card.dataset.category;
        if (category === "Todos" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// serviço
// Dados dos serviços
const services = [
  {
    title: "Manutenção Preventiva",
    description:
      "Programa de manutenção regular para evitar falhas e prolongar a vida útil do equipamento.",
    link: "/servicos/manutencao",
    icon: "bi-tools",
    color: "primary",
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/assistencia-768x406.jpg-qtff5wk3kdahyuaknak4ousx7ifm74fel0yuiylcuc.webp",
  },
  {
    title: "Reparo Emergencial",
    description:
      "Atendimento rápido 24/7 para reparos urgentes que exigem intervenção imediata.",
    link: "/servicos/reparo",
    icon: "bi-exclamation-triangle",
    color: "danger",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Otimização de Sistema",
    description:
      "Análise técnica para melhorar eficiência energética e performance do compressor.",
    link: "/servicos/otimizacao",
    icon: "bi-graph-up",
    color: "success",
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/elementor/thumbs/Analise-3-qvdl2o9sxbec87de4zef7sd5a8dvs47ycg76iho30k.jpg",
  },
  {
    title: "Assistência Técnica",
    description: "Assistência técnica em compressores de ar.",
    link: "/servicos/treinamento",
    icon: "bi-people",
    color: "info",
    image:
      "https://astralcompressorescwb.com.br/wp-content/uploads/2024/08/ASTRAL-3.jpg",
  },
];

// Função para renderizar os serviços
function renderServices() {
  const container = document.getElementById("services-container");

  services.forEach((service) => {
    const serviceHTML = `
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 border-0 shadow-sm hover-shadow transition-all overflow-hidden">
            <div class="card-img-top" style="height: 150px; overflow: hidden;">
              <img src="${service.image}" alt="${service.title}" class="w-100 h-100 object-fit-cover" loading="lazy">
            </div>
            <div class="card-body p-4 text-center">
              <div class="icon-lg bg-light-${service.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mt-n4 position-relative" style="z-index: 1;">
                <i class="bi ${service.icon} text-${service.color} fs-3"></i>
              </div>
              <h3 class="h5 fw-bold mb-3">${service.title}</h3>
              <p class="text-muted mb-4">${service.description}</p>
              <a href="${service.link}" class="btn btn-link text-${service.color} text-decoration-none fw-bold p-0">
                Saiba mais <i class="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      `;

    container.innerHTML += serviceHTML;
  });
}

// Chamada inicial para renderizar os serviços
document.addEventListener("DOMContentLoaded", renderServices);

const contatos = [
  {
    setor: "Vendas",
    descricao: "Amanda",
    numero: "554130817790",
    icon: "fas fa-tags", // Ícone alternativo para representar vendas
  },
  {
    setor: "Vendas",
    descricao: "Giovanna",
    numero: "5541997881211",
    icon: "fas fa-tags", // Ícone alternativo para representar vendas
  },
  {
    setor: "Vendas",
    descricao: "Juliana",
    numero: "5541998324344",
    icon: "fas fa-tags", // Ícone alternativo para representar vendas
  },
  {
    setor: "Comercial",
    descricao: "Luciane",
    numero: "554130817790",
    icon: "fas fa-briefcase",
  },
  {
    setor: "Comercial",
    descricao: "Luiza",
    numero: "5541999750777",
    icon: "fas fa-briefcase",
  },
  {
    setor: "Comercial",
    descricao: "Marluci",
    numero: "5541998324344",
    icon: "fas fa-briefcase",
  },
  {
    setor: "Assistência",
    descricao: "Nathália",
    numero: "554130817790",
    icon: "fas fa-tools",
  },
  {
    setor: "Assistência",
    descricao: "Paulo",
    numero: "5541999750777",
    icon: "fas fa-tools",
  },
];

const container = document.getElementById("whatsapp-container");
const indicatorsContainer = document.getElementById("carousel-indicators");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Configurações do carrossel
const cardWidth = 300; // Largura do card + gap
let currentPosition = 0;
let visibleCards = 4; // Número de cards visíveis (ajustável conforme responsivo)

// Criar cards
contatos.forEach((contato, index) => {
  const card = document.createElement("div");
  card.className = "whatsapp-card";

  card.innerHTML = `
    <h4 class="text-primary"><i class="fab fa-whatsapp" ></i> ${contato.setor}</h4>
    <p><i class="${contato.icon}" style="font-size: 2rem; color: #dd334e;"></i></p>
    <a href="https://wa.me/${contato.numero}" target="_blank" class="btn btn-primary">
      <i class="fab fa-whatsapp me-1"></i> Chamar
    </a>
  `;

  container.appendChild(card);

  // Criar indicadores
  if (index % visibleCards === 0) {
    const indicator = document.createElement("div");
    indicator.className = "carousel-indicator" + (index === 0 ? " active" : "");
    indicator.dataset.slideTo = index;
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  }
});

// Atualizar visibilidade dos botões
function updateButtons() {
  prevBtn.style.visibility = currentPosition === 0 ? "hidden" : "visible";
  nextBtn.style.visibility =
    currentPosition >= container.children.length - visibleCards
      ? "hidden"
      : "visible";

  // Atualizar indicadores
  const indicators = document.querySelectorAll(".carousel-indicator");
  indicators.forEach((ind, i) => {
    const slidePos = parseInt(ind.dataset.slideTo);
    ind.classList.toggle(
      "active",
      currentPosition >= slidePos && currentPosition < slidePos + visibleCards
    );
  });
}

// Navegação
function goToSlide(position) {
  const maxPosition = container.children.length - visibleCards;
  currentPosition = Math.max(0, Math.min(position, maxPosition));
  container.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
  updateButtons();
}

prevBtn.addEventListener("click", () => goToSlide(currentPosition - 1));
nextBtn.addEventListener("click", () => goToSlide(currentPosition + 1));

// Inicialização
updateButtons();

// Responsividade
function handleResize() {
  const width = window.innerWidth;
  if (width < 768) {
    visibleCards = 1;
  } else if (width < 992) {
    visibleCards = 2;
  } else {
    visibleCards = 3;
  }

  // Recalcular indicadores
  indicatorsContainer.innerHTML = "";
  for (let i = 0; i < container.children.length; i += visibleCards) {
    const indicator = document.createElement("div");
    indicator.className = "carousel-indicator" + (i === 0 ? " active" : "");
    indicator.dataset.slideTo = i;
    indicator.addEventListener("click", () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
  }

  goToSlide(currentPosition);
}

window.addEventListener("resize", handleResize);
handleResize(); // Chamar inicialmente
