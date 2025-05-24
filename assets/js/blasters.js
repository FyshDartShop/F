function toggleSideMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

fetch('../blasters.txt')
  .then(res => {
    if (!res.ok) throw new Error("blasters.txt not found");
    return res.text();
  })
  .then(text => {
    const list = document.getElementById("sideMenuList");
    text.trim().split("\n").forEach(line => {
      const [url, label] = line.split("|");
      if (!url || !label) return;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url.trim();
      a.textContent = label.trim();
      li.appendChild(a);
      list.appendChild(li);
    });
  })
  .catch(err => console.error("Error loading menu:", err));
