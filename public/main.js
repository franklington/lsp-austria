(() => {
    const navComponents = Array.from(document.querySelectorAll('[data-nav-component]'));
    if (!navComponents.length) return;

    document.documentElement.classList.add('js');

    const mobileMediaQuery = window.matchMedia('(max-width: 640px)');
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
            document.body.classList.remove('nav-open');
            panel.hidden = mobileMediaQuery.matches;
            if (returnFocus) {
                toggle.focus();
            }
        };

        const openMenu = () => {
            component.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
            document.body.classList.add('nav-open');
            const firstLink = panel.querySelector(focusableSelector);
            if (firstLink instanceof HTMLElement) {
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
                document.body.classList.remove('nav-open');
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

        component.addEventListener('keydown', (event) => {
            if (!component.classList.contains('is-open')) return;

            if (event.key === 'Escape') {
                closeMenu({ returnFocus: true });
                return;
            }

            if (event.key !== 'Tab') return;

            const focusableElements = Array.from(panel.querySelectorAll(focusableSelector)).filter((element) => {
                if (!(element instanceof HTMLElement)) return false;
                return !element.hasAttribute('hidden') && element.offsetParent !== null;
            });

            if (!focusableElements.length) return;

            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && active === first) {
                event.preventDefault();
                if (last instanceof HTMLElement) {
                    last.focus();
                }
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                if (first instanceof HTMLElement) {
                    first.focus();
                }
            }
        });

        if (typeof mobileMediaQuery.addEventListener === 'function') {
            mobileMediaQuery.addEventListener('change', syncViewportState);
        } else if (typeof mobileMediaQuery.addListener === 'function') {
            mobileMediaQuery.addListener(syncViewportState);
        }

        syncViewportState();
    });
})();
