<template>
  <footer class="p-12 is-dark block">
    <div class="block">
      <div class="grid gap-y-8 grid-cols-12 py-8 px-2 text-2xl">
        <div class="col-span-12 md:col-span-2">
          <a href="/" class="flex w-full">
            <Logo class="mx-auto md:mr-auto"/>
          </a>
        </div>
        <div class="col-span-12 md:col-span-3 flex items-center md:items-start flex-col">
          <p>Start a project</p>
          <a href="mailto:hello@waisdigital.com"><p class="font-bold gradient-text text-2xl">hello@waisdigital.com</p></a>
        </div>
        <div class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start  flex-col">
          <a href="/about"><p class="footer-links">About us</p></a>
          <a href="/services"><p class="footer-links">Services</p></a>
        </div>
        <div class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start  flex-col">
          <a href="/projects"><p class="footer-links">Projects</p></a>
          <a href="/careers"><p class="footer-links">Careers</p></a>
        </div>
        <div class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start flex-col">
          <a href="/contact"><p class="footer-links">Contact</p></a>
        </div>
        <div class="col-span-12 md:col-span-2 flex md:hidden items-center md:items-start  flex-col">
          <a href="/about"><p class="footer-links mb-4">About us</p></a>
          <a href="/services"><p class="footer-links mb-4">Services</p></a>
          <a href="/projects"><p class="footer-links mb-4">Projects</p></a>
          <a href="/careers"><p class="footer-links mb-4">Careers</p></a>
          <a href="/contact"><p class="footer-links mb-4">Contact</p></a>
        </div>
      </div>
    </div>

    <hr class="border border-t-black dark:border-t-white w-full mt-2 mx-auto">
    <div class="grid gap-4 grid-cols-12 py-5">
      <div class="col-span-12 md:col-span-3">
        <div class="flex justify-around md:justify-start items-center md:items-center">
          <div class="mr-0 md:mr-7">
            <a href="https://www.instagram.com/waisdigital/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="mr-0 md:mr-7">
            <a href="https://www.linkedin.com/company/wais-digital/?viewAsMember=true" target="_blank"><i
              class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div class="mr-0 md:mr-7">
            <a href="https://www.facebook.com/waisdigital" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          <div class="mr-0 md:mr-7">
            <a href="https://www.behance.net/waisdigita46b7/projects" target="_blank"> <i
              class="fa-brands fa-behance"></i></a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-9 hidden md:flex">
        <p class="ml-auto text-xl	">
          Copyright © 2021 by Wais . All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
    import Logo from './Logo'

    export default {
        name: "CoreFooter",
        components: {
            Logo
        },
        mounted() {
            const text = document.querySelector('.txt');
            if (text) {
                const chars = text.textContent.split('');
                if (chars.length) text.innerHTML = `<span>${chars.join('</span><span>')}</span>`;
            }
        },
    }
</script>

<style scoped>
  .footer-links {
    font-size: 18px;
    line-height: 35px;
    text-transform: uppercase;
  }

  .gradient-text {
    /*font-size: 72px;*/
    background: -webkit-linear-gradient(45deg,#b6462b, #66d0a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
