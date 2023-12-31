const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("before-enter");
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export const vObserve = {
  mounted: (el) => {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
};
