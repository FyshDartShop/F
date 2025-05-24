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
      a.href = url.trim();
      a.textContent = label.trim();
      li.appendChild(a);
      list.appendChild(li);
    });
  });
