<template>
    <div class="is-dark flex flex-col">
      <div class="py-20 px-3">
        <h1 class="text-8xl text-center m-14">Projects</h1>
        <ProjectBar name="test"></ProjectBar>
        <ProjectBar name="test"></ProjectBar>
        <ProjectBar name="test"></ProjectBar>
      </div>
    </div>
</template>

<script>
    import ProjectBar from "../components/core/ProjectBar";
    export default {
        name: "projects",
        components: {ProjectBar}
    }
</script>

<style scoped>

</style>
