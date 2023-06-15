<template>
<div
        class="icon-bar hidden text-[16px] md:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] md:block"
      >
        <a
          v-for="(link, index) in icons"
          :href="link.url"
          target="_blank"
          class="text-black bg-transparent dark:text-white"
          :key="index"
          ><i :class="`fa-brands ${link.class}`"></i
        ></a>
      </div>
</template>
<script>
export default {
  name: "SocialNetworkBar",
  data: () => ({
    icons: [
      {
        name: "instagram",
        url: "https://www.instagram.com/waisdigital/",
        class: 'fa-instagram',
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/company/wais-digital/?viewAsMember=true",
        class: 'fa-linkedin',

      },
      {
        name: "facebook",
        url: "https://www.facebook.com/waisdigital",
        class: 'fa-facebook-f',

      },
      {
        name: "behance",
        url: "https://www.behance.net/waisdigita46b7/projects",
        class: 'fa-behance',

      },
    ],
  })
};
</script>
<style scoped>

.icon-bar {
  font-size: 2rem;
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-30vh);
  -ms-transform: translateY(-30vh);
  transform: translateY(-30vh);
  z-index: 11;
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.4s ease;
}

.icon-bar a:hover {
  transform: translateY(-10px);
}
</style>
