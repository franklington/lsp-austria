(() => {
    const navComponents = Array.from(document.querySelectorAll('[data-nav-component]'));
    if (!navComponents.length) return;

    document.documentElement.classList.add('js');

    const mobileMediaQuery = window.matchMedia('(max-width: 640px)');

    navComponents.forEach((component, index) => {
        const toggle = component.querySelector('[data-nav-toggle]');
        const panel = component.querySelector('[data-nav-panel]');
        if (!toggle || !panel) return;

        if (!panel.id) {
            panel.id = `site-nav-${index + 1}`;
        }

        toggle.setAttribute('aria-controls', panel.id);
        toggle.setAttribute('aria-expanded', 'false');

        const closeMenu = ({ returnFocus = false } = {}) => {
            component.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            panel.hidden = mobileMediaQuery.matches;
            if (returnFocus) {
                toggle.focus();
            }
        };

        const openMenu = () => {
            component.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
            const firstLink = panel.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
            if (firstLink) {
                firstLink.focus();
            }
        };

        const syncViewportState = () => {
            if (mobileMediaQuery.matches) {
                if (!component.classList.contains('is-open')) {
                    panel.hidden = true;
                }
            } else {
                component.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                panel.hidden = false;
            }
        };

        toggle.addEventListener('click', () => {
            if (!mobileMediaQuery.matches) return;
            if (component.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        panel.addEventListener('click', (event) => {
            if (!mobileMediaQuery.matches) return;
            const target = event.target;
            if (target instanceof HTMLElement && target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('click', (event) => {
            if (!mobileMediaQuery.matches || !component.classList.contains('is-open')) return;
            if (!(event.target instanceof Node) || component.contains(event.target)) return;
            closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape' || !component.classList.contains('is-open')) return;
            closeMenu({ returnFocus: true });
        });

        if (typeof mobileMediaQuery.addEventListener === 'function') {
            mobileMediaQuery.addEventListener('change', syncViewportState);
        } else if (typeof mobileMediaQuery.addListener === 'function') {
            mobileMediaQuery.addListener(syncViewportState);
        }

        syncViewportState();
    });
})();
