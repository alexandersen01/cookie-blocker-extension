document.addEventListener("DOMContentLoaded", () => {
    const selectors = [
        '#cookie-banner', 
        '.cookie-banner', 
        '.cookie-consent', 
        '.cookie-popup', 
        '.cookie-notice', 
        '[id*="cookie"]', 
        '[class*="cookie"]',
        '[class*="Cookie"]',
        '[class*="fides"]',
        '[class*="consent"]'
    ];

    // Function to hide elements matching the selectors
    function hideCookieBanners() {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    }

    // Hide any existing banners immediately
    hideCookieBanners();

    // Set up a MutationObserver to watch for dynamically added cookie banners
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                hideCookieBanners();
            }
        });
    });

    // Start observing the document body
    observer.observe(document.body, { childList: true, subtree: true });
});
