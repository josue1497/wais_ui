<template>
  <div class="flex flex-col w-full h-[100vh]">
    <h1 class="text-[12vh] text-center font-bold m-auto">{{ message }}</h1>
    <h4 class="text-[5vh] text-center m-auto">
      Si la descarga no inicia automáticamente hacer click
        <a class="underline text-[#6464F9]" download="zona_segura_wais.png" :href="`/img/zona_segura_wais.png`" target="_blank">aquí</a>
    </h4>
  </div>
</template>
<script>
const PERMITED_FILES = ["zona_segura_wais.png", "dark_safe_zone_wais.png"];
export default {
  name: "download",
  layout: "dowload",
  data: () => ({
    message: "¡Gracias por visitarnos!",
    link: process.env.WAIS_CDN,
    file: ""
  }),
  async mounted() {
    const param = this.$route.query.file;
    this.file = this.$route.query.file;
    this.link = `/img/${param}`;

    console.log(param);
    if (!!param && !PERMITED_FILES.some(item => item.includes(param))) {
      this.message = "¡No se encontró el archivo!";
      return;
    }
    // const response = await this.$axios({
    //   url: this.link,
    //   method: "GET",
    //   Headers: {
    //     "Content-Type": "application/octet-stream",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   responseType: "blob", // important
    // });

    // const href = URL.createObjectURL(response.data);

    // create "a" HTML element with href to file & click
    const link = document.createElement("a");
    link.style.display = "none";

    link.href = this.link;
    link.setAttribute("download", param); //or any other extension
    // link.setAttribute("target", "_blank"); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    // URL.revokeObjectURL(this.link);
  },
};
</script>
