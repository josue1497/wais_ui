<template>
    <div v-html="$t('terms_text')"></div>
</template>

<script>
export default {
  name: "Terms",
};
</script>

<style scoped>
.terms {
  padding: 20px;
  text-align: justify;
}
</style>
