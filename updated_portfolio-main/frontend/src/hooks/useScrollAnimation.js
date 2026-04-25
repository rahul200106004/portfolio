import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * Returns a ref to attach to the target element and a boolean indicating visibility.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default 0.1
 * @param {string} options.rootMargin - Root margin for observer. Default '0px 0px -60px 0px'
 * @param {boolean} options.triggerOnce - If true, animation only triggers once. Default true
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
  triggerOnce = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

/**
 * Hook that returns the currently active section ID based on scroll position.
 * Used for header nav highlighting.
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with the highest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(best.target.id);
        }
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: '-80px 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
