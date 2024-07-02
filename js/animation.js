

// Function to animate the brand element
export function animateBrand() {
  // Initial animation: Slide in from left with a fade-in effect
  gsap.fromTo(
    ".brand",
    { x: -100, opacity: 0 },
    { x: 0, opacity: .6, duration: 1.5, ease: "power2.inOut" }
  );

  // Neon blinking effect
  gsap.to(".brand", {
    textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(255, 255, 255, 0.4)",
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut",
  });
}
