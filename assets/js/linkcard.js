document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".page__content a");

  links.forEach(link => {

    const url = link.href;

    const card = document.createElement("div");
    card.className = "auto-link-card";

    card.innerHTML = `
      <a href="${url}" target="_blank">
        <div class="auto-link-card-inner">

          <img src="https://www.google.com/s2/favicons?sz=128&domain_url=${url}">

          <div class="auto-link-card-body">
            <div class="auto-link-card-title">${link.textContent || url}</div>
            <div class="auto-link-card-url">${url}</div>
          </div>

        </div>
      </a>
    `;

    link.replaceWith(card);

  });

});