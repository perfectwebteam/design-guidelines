if ('querySelector' in document && 'addEventListener' in window) {
    /**
     * Execute
     */
    (function () {
        // Cards
        // =====
        const cards = document.querySelectorAll('[data-card]');
        const clickableClass = 'is-clickable-card';
        let down;
        let up;
        const downUpTime = 200;
        
        function handleCard(card) {
            const link = card.querySelector('[data-card-link]');
            if (link !== null) {
                card.classList.add(clickableClass);
            }
        }
        
        cards.forEach((card) => {
            handleCard(card);
        }, window);
        
        // Observe changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((addedNode) => {
                    if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
                        const card = addedNode.getAttribute('data-card') || false;
                        if (card) {
                            handleCard(addedNode);
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        window.addEventListener('mousedown', () => {
            down = Number(new Date());
        });
        
        window.addEventListener('mouseup', (event) => {
            up = Number(new Date());
            const card = event.target.closest('[data-card]');
            const ignore = event.target.closest('[data-card-ignore], [href]:not([data-card-link])');
            
            // Return if no card is found
            if (!card) {
                return false;
            }
            
            const link = card.querySelector('[data-card-link]');
            
            if (card && up - down < downUpTime && !ignore) {
                if (event.ctrlKey && event.ctrlKey === true || event.which && event.which === 2) {
                    window.open(link);
                } else {
                    link.click();
                }
            }
        });
    
        
        // Balance text
        // ============
    
        balanceText();
        
    }());
}
