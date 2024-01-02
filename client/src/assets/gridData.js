const gridLayout = {
  MOBILE: {
    padding: "20px",
    count: 4,
  },
  TABLET: { padding: "20px", count: 4 },
  DESKTOP: { padding: "20px", count: 4 },
};

const getVariantConfigs = (screenWidth) => {
  if (screenWidth < 421) return gridLayout.MOBILE;
  else if (screenWidth < 800) return gridLayout.TABLET;
  return gridLayout.MOBILE;
};

export { gridLayout, getVariantConfigs };
