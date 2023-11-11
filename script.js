document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    var modal = document.getElementById('tutorialModal');
    var button = document.getElementById('tutorialButton');
    var closeModal = document.getElementById('closeModal');

    // Evento de clique no botão
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Evento de clique no ícone de fechar
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar a modal ao clicar fora dela
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('tutorialModal');
    var slideImage = document.getElementById('slideImage');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var closeModal = document.getElementById('closeModal');
    
    var images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg", "welcomeserver.jpg" ]; // Adicione mais imagens conforme necessário
    var currentImageIndex = 0;

    // Exibe a imagem atual
    function showImage(index) {
        slideImage.src = images[index];
    }

    // Evento de clique no botão anterior
    prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    // Evento de clique no botão próximo
    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Evento de clique no ícone de fechar
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar a modal ao clicar fora dela
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Inicializa a modal com a primeira imagem
    showImage(currentImageIndex);
});
//links
document.getElementById("ModpackDowloadlink").onclick = function() {
    window.open("https://drive.google.com/file/d/1vMMXWkbBp1_NsEXAY23VJOSFiCApTI23/view?usp=drive_link", "_blank");
};
document.getElementById("TLauncherDownloadlink").onclick = function() {
    window.open("https://tlauncher.org/en/", "_blank");
};
document.getElementById("ResourcePackslink").onclick = function() {
    window.open("https://www.mediafire.com/file/9pnhbr397bes8tk/resourcepacks.rar/file", "_blank");
};
document.getElementById("CurseForgelink").onclick = function() {
    window.open("https://www.curseforge.com/minecraft/search?class=shaders&page=1&pageSize=20&sortType=2", "_blank");
};