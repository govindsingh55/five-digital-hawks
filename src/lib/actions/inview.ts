/**
 * Svelte action: adds 'visible' class when element enters viewport.
 * Usage: <div use:inview>...</div>
 *        <div use:inview={{ threshold: 0.3, once: false }}>...</div>
 */
interface InViewOptions {
    threshold?: number;
    once?: boolean;
    rootMargin?: string;
}

export function inview(node: HTMLElement, options: InViewOptions = {}) {
    const { threshold = 0.15, once = true, rootMargin = '0px 0px -60px 0px' } = options;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add('visible');
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    node.classList.remove('visible');
                }
            });
        },
        { threshold, rootMargin }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
