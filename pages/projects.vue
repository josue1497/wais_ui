<template>
    <div class="is-dark flex flex-col ">
      <div class="py-20 px-3 relative">
        <h1 class="text-8xl text-center m-14">Projects</h1>
        <div class="point one flat-1"></div>
        <ProjectBar name="Farmacia" :tags = "['Healt' , 'SuperMarket', 'Branding']"></ProjectBar>
        <ProjectBar name="PanuPam" :tags = "['Gym' , 'Home Office']" ></ProjectBar>
        <ProjectBar name="Clinica Hebe"></ProjectBar>
        <ProjectBar name="Hamsa"></ProjectBar>
        <ProjectBar name="Premium Gym"></ProjectBar>
        <ProjectBar name="Bubble Wafle"></ProjectBar>
        <ProjectBar name="Resinca"></ProjectBar>
        <div class="point two flat-1"></div>
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
.point.one {
      left: 0;
      top: 160vh;
      width: 30vh;
      height: 30vh;
      background: #2A00FF;
      filter: blur(20vh);
    }
.point.two {
      right: 0;
      top: 20vh;
      width: 30vh;
      height: 30vh;
      background: #2A00FF;
      filter: blur(20vh);
    }
</style>
