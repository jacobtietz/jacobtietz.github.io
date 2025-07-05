tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "#000000"
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#a8d0ff"  // soft blue glow
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0.3,
        sync: true
      }
    },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 2 },
      anim: {
        enable: true,
        speed: 2,
        size_min: 1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#a8d0ff",
      opacity: 0.4,
      width: 1.5,
      blink: false,
      consent: false,
      shadow: {
        enable: true,
        color: "#a8d0ff",
        blur: 6
      }
    }
  },
  detectRetina: true
});
