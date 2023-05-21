<template>
  <div class="flex w-full h-[100vh]">
    <h1 class="text-[12vh] text-center font-bold m-auto">{{ message }}</h1>
  </div>
</template>
<script>
const PERMITED_FILES = ["zona_segura_wais.png", "dark_safe_zone_wais.png"];
export default {
  name: "download",
  layout: "dowload",
  data: () => ({
    message: "¡Gracias por visitarnos!",
  }),
  async mounted() {
    console.log("mounted");

    const param = this.$route.query.file;

    console.log(param);
    if (!!param && !PERMITED_FILES.includes(param)) {
      this.message = "¡No se encontró el archivo!";
      return;
    }
    const response = await this.$axios({
      url: `${process.env.WAIS_CDN}${param}`,
      method: "GET",
      Headers: {
        "Content-Type": "application/octet-stream",
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "blob", // important
    });

    const href = URL.createObjectURL(response.data);

    // create "a" HTML element with href to file & click
    const link = document.createElement("a");
    link.style.display = "none";

    link.href = href;
    link.setAttribute("download", param); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  },
};
</script>
