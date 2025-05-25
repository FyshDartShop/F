function toggleSideMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("show");
}

const categoryMap = {
  springers: {
    label: "Springer Blasters",
    link: "../index.html?section=springers"
  },
  electric: {
    label: "Electric Blasters",
    link: "../index.html?section=electric"
  },
  pistols: {
    label: "Pistols",
    link: "../index.html?section=pistols"
  }
};

function setBlasterCategory() {
  const body = document.querySelector("body");
  const category = body?.dataset?.blasterCategory;
  const config = categoryMap[category];
  if (!config) return;
  const link = document.getElementById("blaster-category-link");
  if (link) {
    link.textContent = config.label;
    link.href = config.link;
  }
}

function loadBlasterMenu() {
  fetch('../blasters.txt')
    .then(res => res.text())
    .then(text => {
      const list = document.getElementById("sideMenuList");
      list.innerHTML = '';
      text.trim().split('\n').forEach(line => {
        const [url, label] = line.split('|');
        if (!url || !label) return;
        const li = document.createElement('li');
        const a = document.createElement('a');
        let href = url.trim();
        if (location.hostname === "127.0.0.1" || location.hostname === "localhost") {
          href = href.replace(/^\/F/, ''); // strip leading /F when running locally
        }
        a.href = href;
        a.textContent = label.trim();

        // Reload same-page nav
        a.addEventListener('click', function(e) {
          if (window.location.pathname === href) {
            e.preventDefault();
            window.location.reload();
          }
        });

        li.appendChild(a);
        list.appendChild(li);
      });
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.getElementById("header-container");
  if (headerTarget) {
    fetch("../header.html")
      .then(res => res.text())
      .then(html => {
        headerTarget.outerHTML = html;
        document.querySelector(".side-nav-toggle")?.addEventListener("click", toggleSideMenu);
        loadBlasterMenu();
        setBlasterCategory();
      });
  } else {
    document.querySelector(".side-nav-toggle")?.addEventListener("click", toggleSideMenu);
    loadBlasterMenu();
    setBlasterCategory();
  }
});
