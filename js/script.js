
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (menuToggle) {  // <--- importante para evitar erro
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }


    ///////////////// Mostrar/esconder botão de voltar ao topo

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        ///////////////// Scroll suave para o topo
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ///////////////// Seleciona todos os links que começam com #
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // evita o jump padrão instantâneo

            const targetId = link.getAttribute('href').substring(1); // pega o id da seção
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ///////////////// Formulário 
document.getElementById("formContato").addEventListener("submit", function (event) {
    event.preventDefault();

    // Limpa erros
    ["Nome", "Email", "Mensagem"].forEach((campo) => {
        document.getElementById("erro" + campo).classList.remove("visivel");
        document.getElementById("erro" + campo).querySelector(".texto").textContent = "";
    });

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    let valido = true;

    if (nome === "") {
        mostrarErro("Nome", "Por favor, preencha seu nome.");
        valido = false;
    }

    if (email === "") {
        mostrarErro("Email", "Por favor, preencha seu e-mail.");
        valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro("Email", "Digite um e-mail válido.");
        valido = false;
    }

    if (mensagem === "") {
        mostrarErro("Mensagem", "Por favor, escreva sua mensagem.");
        valido = false;
    }

    if (valido) {
        const msgSucesso = document.getElementById("mensagemSucesso");
        msgSucesso.classList.remove("oculto");
        msgSucesso.classList.add("visivel");

        // Limpar o formulário (opcional)
        this.reset();

        // Ocultar a mensagem após 4 segundos
        setTimeout(() => {
            msgSucesso.classList.remove("visivel");
            msgSucesso.classList.add("oculto");
        }, 4000);
    }
});

///////////////// Mensagem de erro form

function mostrarErro(campo, mensagem) {
    const erro = document.getElementById("erro" + campo);
    erro.querySelector(".texto").textContent = mensagem;
    erro.classList.add("visivel");
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        const navLinksMenu = navbar.querySelectorAll('a');

        navLinksMenu.forEach(link => {
            link.addEventListener('click', () => {
                if (navbar.classList.contains('show')) {
                    navbar.classList.remove('show');
                }
            });
        });
    }
});
