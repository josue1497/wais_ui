<template>
  <footer class="p-12 is-dark block">
    <div class="content-grid">
      <div class="main-grid-item">
        <RouterLink to="/" class="flex w-1/2">
          <Logo/>
        </RouterLink>
      </div>
      <div class="grid-item">02</div>
      <div class="grid-item">03</div>
      <div class="grid-item">04</div>
      <div class="grid-item">04</div>
    </div>
    <hr>
    <div class="content-grid">
      <div class="main-grid-item">Footer</div>
      <div class="grid-item">02</div>
      <div class="grid-item">03</div>
      <div class="grid-item">04</div>
      <div class="grid-item">04</div>
    </div>
  </footer>
</template>

<script>
    import Logo from './Logo'

    export default {
        name: "CoreFooter",
        components: {
            Logo
        }
    }
</script>

<style scoped>
  .content-grid {
    @apply grid gap-4 grid-cols-12 p-5;
  }

  .main-grid-item {
    @apply col-span-12 md:col-span-4;
  }

  .grid-item {
    @apply col-span-12 md:col-span-2;
  }
</style>
