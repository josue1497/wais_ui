<template>
  <div class="is-dark flex flex-col ">
    <div class="py-20 px-3 relative">
      <h1 class="wais-title text-center m-14">{{$t('projects')}}</h1>
      <div class="point one flat-1"></div>
      <ProjectBar v-for="(proj, index) of projects" :name="proj.name" :tags="proj.tags" :visible="project === proj.name"
                  :key="index" @selection="setProject" :link="proj.link"></ProjectBar>
      <div class="point two flat-1"></div>
    </div>
  </div>
</template>

<script>
    import ProjectBar from "../components/core/ProjectBar";

    export default {
        name: "projects",
        components: {ProjectBar},
        head() {
          return {
            title: this.$t('projects'),
          }
        },
        data: () => ({
            project: '',
            projects: [
                {
                    id: 1,
                    name: 'Farmacia',
                    tags: ['Health', 'SuperMarket', 'Branding'],
                    link: './gym'
                },
                {
                    id: 2,
                    name: 'PamyPam',
                    tags: ['Gastronomy', 'Social Marketing','Strategy', 'Branding'],
                    link: './gym'
                },
                {
                    id: 3,
                    name: 'Clinica Hebe',
                    tags: ['Health', 'Web design', 'Social marketing', 'Branding', 'Content creation'],
                    link: './gym'
                },
                {
                    id: 4,
                    name: 'Hamsa',
                    tags: ['Beauty', 'SuperMarket', 'Branding'],
                    link: './gym'
                },
                {
                    id: 5,
                    name: 'Premium Gym',
                    tags: ['Health', 'SuperMarket', 'Branding'],
                    link: './gym'
                },
                {
                    id: 6,
                    name: 'Bubble Wafle',
                    tags: ['Gastronomy', 'SuperMarket', 'Branding'],
                    link: './gym'
                },
                {
                    id: 7,
                    name: 'Resinca',
                    tags: ['Health', 'SuperMarket', 'Branding'],
                    link: './gym'
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
    top: 100vh;
    width: 30vh;
    height: 30vh;
    background: #2A00FF;
    filter: blur(20vh);
    -webkit-filter: blur(20vh);
  }

  .point.two {
    right: 0;
    top: 20vh;
    width: 30vh;
    height: 30vh;
    background: #2A00FF;
    filter: blur(20vh);
    -webkit-filter: blur(20vh);
  }
</style>
