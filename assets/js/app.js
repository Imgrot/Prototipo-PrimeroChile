const initAccessibilityControls = () => {
  const storageKey = "primeroChileAccessibility";
  const defaults = { theme: "light", contrast: false, fontScale: 100 };
  const minFontScale = 90;
  const maxFontScale = 125;
  const stepFontScale = 10;

  const readSettings = () => {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem(storageKey)) };
    } catch (error) {
      return { ...defaults };
    }
  };

  const saveSettings = settings => {
    localStorage.setItem(storageKey, JSON.stringify(settings));
  };

  const applySettings = settings => {
    document.documentElement.classList.toggle("pc-theme-dark", settings.theme === "dark");
    document.documentElement.classList.toggle("pc-theme-contrast", Boolean(settings.contrast));
    document.documentElement.style.fontSize = `${settings.fontScale}%`;

    document.querySelectorAll('[data-accessibility-action="theme"]').forEach(button => {
      const isDark = settings.theme === "dark";
      button.classList.toggle("is-active", isDark);
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("title", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
      button.querySelector("i")?.classList.toggle("bi-sun", isDark);
      button.querySelector("i")?.classList.toggle("bi-moon-stars", !isDark);
    });

    document.querySelectorAll('[data-accessibility-action="contrast"]').forEach(button => {
      button.classList.toggle("is-active", Boolean(settings.contrast));
      button.setAttribute("aria-pressed", String(Boolean(settings.contrast)));
    });

    document.querySelectorAll('[data-accessibility-action="font-down"]').forEach(button => {
      button.disabled = settings.fontScale <= minFontScale;
    });

    document.querySelectorAll('[data-accessibility-action="font-up"]').forEach(button => {
      button.disabled = settings.fontScale >= maxFontScale;
    });
  };

  let settings = readSettings();
  applySettings(settings);

  document.querySelectorAll("[data-accessibility-action]").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.accessibilityAction;

      if (action === "theme") {
        settings.theme = settings.theme === "dark" ? "light" : "dark";
      }

      if (action === "contrast") {
        settings.contrast = !settings.contrast;
      }

      if (action === "font-down") {
        settings.fontScale = Math.max(minFontScale, settings.fontScale - stepFontScale);
      }

      if (action === "font-up") {
        settings.fontScale = Math.min(maxFontScale, settings.fontScale + stepFontScale);
      }

      saveSettings(settings);
      applySettings(settings);
    });
  });
};


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  initAccessibilityControls();

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
