document.getElementById("trailerBtn")?.addEventListener("click", () => {
  const trailerSection = document.getElementById("trailer");
  trailerSection?.scrollIntoView({ behavior: "smooth" });
});
