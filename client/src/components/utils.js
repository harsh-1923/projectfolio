const getDimensions = (elementRef) => {
  if (elementRef.current) {
    const rect = elementRef.current.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }
};

export { getDimensions };
