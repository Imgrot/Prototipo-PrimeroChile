
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-layout]").forEach(layout => {
    layout.querySelectorAll("[data-sidebar-toggle]").forEach(button => {
      button.addEventListener("click", () => {
        layout.classList.toggle("sidebar-collapsed");
      });
    });
  });

  document.querySelectorAll("[data-scroll-shell]").forEach(shell => {
    const row = shell.querySelector("[data-scroll-row]");
    const container = shell.closest(".social-block, .community-card, .pc-card") || shell.parentElement;
    const prev = container?.querySelector("[data-scroll-prev]");
    const next = container?.querySelector("[data-scroll-next]");
    if (!row) return;
    const scrollAmount = () => Math.min(row.clientWidth * 0.9, 420);
    prev?.addEventListener("click", () => row.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
    next?.addEventListener("click", () => row.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
  });

  document.querySelectorAll("[data-filter-group]").forEach(group => {
    const buttons = group.querySelectorAll("[data-filter-button]");
    const items = document.querySelectorAll(group.dataset.filterTarget);
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filterButton;
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        items.forEach(item => {
          item.style.display = filter === "all" || item.dataset.filterItem === filter ? "" : "none";
        });
      });
    });
  });
});
