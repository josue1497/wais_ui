<template>
  <div class="is-dark flex flex-col ">
    <div class="py-20 px-3 relative">
      <h1 class="text-5xl md:text-8xl text-center m-14">Projects</h1>
      <div class="point one flat-1"></div>
      <ProjectBar v-for="(proj, index) of projects" :name="proj.name" :tags="proj.tags" :visible="project === proj.name"
                  :key="index" @selection="setProject"></ProjectBar>
      <!--      <ProjectBar name="PanuPam" :tags="['Gym' , 'Home Office']"></ProjectBar>-->
      <!--      <ProjectBar name="Clinica Hebe"></ProjectBar>-->
      <!--      <ProjectBar name="Hamsa"></ProjectBar>-->
      <!--      <ProjectBar name="Premium Gym"></ProjectBar>-->
      <!--      <ProjectBar name="Bubble Wafle"></ProjectBar>-->
      <!--      <ProjectBar name="Resinca"></ProjectBar>-->
      <div class="point two flat-1"></div>
    </div>
  </div>
</template>

<script>
    import ProjectBar from "../components/core/ProjectBar";

    export default {
        name: "projects",
        components: {ProjectBar},
        data: () => ({
            project: '',
            projects: [
                {
                    id: 1,
                    name: 'Farmacia',
                    tags: ['Healt', 'SuperMarket', 'Branding']
                },
                {
                    id: 2,
                    name: 'PanuPam',
                    tags: ['Gym', 'Home Office']
                },
                {
                    id: 3,
                    name: 'Clinica Hebe',
                },
                {
                    id: 4,
                    name: 'Hamsa',
                },
                {
                    id: 5,
                    name: 'Premium Gym',
                },
                {
                    id: 6,
                    name: 'Bubble Wafle',
                },
                {
                    id: 7,
                    name: 'Resinca',
                },
            ],

        }),
        methods: {
            setProject(name) {
                if (this.project !== name) this.project = name
                else this.project = ''
            }
        }
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
