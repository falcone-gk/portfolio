export default defineEventHandler(() => {
  return {
    backend: [
      { name: "Python", icon: "i-logos-python" },
      { name: "Django", icon: "i-logos-django-icon" },
      { name: "Postgresql", icon: "i-logos-postgresql" },
      { name: "Redis", icon: "i-logos-redis" },
    ],
    frontend: [
      { name: "Vue 3", icon: "i-logos-vue" },
      { name: "Nuxt 3", icon: "i-logos-nuxt-icon" },
      { name: "Tailwind", icon: "i-logos-tailwindcss-icon" },
      { name: "HTML", icon: "i-logos-html-5" },
      { name: "JavaScript", icon: "i-logos-javascript" },
      { name: "CSS", icon: "i-logos-css-3" },
      { name: "Typescript", icon: "i-logos-typescript-icon" },
    ],
    extra: [
      { name: "Docker", icon: "i-logos-docker-icon" },
      { name: "Linux", icon: "i-logos-linux-tux" },
      { name: "Git", icon: "i-logos-git-icon" },
      { name: "Nginx", icon: "i-logos-nginx" },
    ],
  };
});
