function toggleSideMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", () => {
  fetch('../blasters.txt')
    .then(response => response.text())
    .then(text => {
      const list = document.getElementById("sideMenuList");
      if (!list) return;
      text.trim().split('\n').forEach(line => {
        const [path, label] = line.split('|');
        if (!path || !label) return;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = path.trim();
        a.textContent = label.trim();
        li.appendChild(a);
        list.appendChild(li);
      });
    });
});
