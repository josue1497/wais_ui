<template>
  <div class="is-dark flex flex-col ">
    <div class="py-20 px-3 relative">
      <img src="../assets/img/gym/gym1.png" alt="gym image 1" class="w-1/2">
      <p class="text-[24px] w-1/2 p-20">El problema encontrado fue tener un logo que no concordaba con el tipo de
        servicio que ofrecía la marca, ya que
        era un logo sin fuerza, más asociado a lo femenino, sin peso visual, difícil de aplicar en múltiples canales de
        comunicación visual.</p>
      <div class="flex flex-row justify-around items-start w-3/4 text-[24px]  py-10 ">
        <div>
          <p class="text-[36px] font-bold py-14">Rubro</p>
          <p class="">Fitness</p>
        </div>
        <div>
          <p class="text-[36px] font-bold py-14">Categoría de servicio
          </p>
          <p>Análisis y estrategia</p>
          <p>Branding y diseño gráfico</p>
        </div>
        <div>
          <p class="text-[36px] font-bold py-14">Servicios provistos </p>
          <p>Logo</p>
          <p>Social media</p>
          <p>Diseño para impresión</p>
          <p>Diseño de complementos de marca.</p>
          <p>Diseño de concepto gráfico para instagram.</p>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col px-5 ">
      <div class="w-3/4 opacity-5 h-80">
        hola
      </div>
      <img src="../assets/img/gym/gym2.png" alt="gym 2">
      <img src="../assets/img/gym/gym3.png" alt="gym 3" class="w-3/4 mx-10">
    </div>
    <div class="w-full h-72">
      Animacion
    </div>
    <div class="w-full px-10 py-14">
      <p class="text-outline font-regular text-[155px]">Selección cromática</p>
      <div class="relative w-full h-[75vh] flex justify-center items-center">
        <SemiRoundedPath width-size="473" width-unit="px" height-size="381" height-unit="px" background="#1A1A1A"
                         color="#FFFFFF" class="absolute path-three flex" reverse>
          <span class="w-3/4 m-auto text-[20px] font-normal leading-[2vh] text-center">Profesionalismo, seriedad, fuerza.</span>
        </SemiRoundedPath>
        <SemiRoundedPath width-size="549" width-unit="px" height-size="459" height-unit="px" background="#FFFFFF"
                         color="#1A1A1A" class="absolute path-two flex text-center">
          <span class="w-3/4 m-auto text-[20px] font-normal leading-[2vh] text-center">Positividad, balance, luminosidad. </span>
        </SemiRoundedPath>
        <SemiRoundedPath width-size="297" width-unit="px" height-size="256" height-unit="px"
                         class="absolute path-one flex">
          <span class="w-1/2 m-auto text-[20px] font-normal leading-[2vh]">Fuerza, vivaz, carácter, intenso, frescura, sano, vivo.</span>
        </SemiRoundedPath>
      </div>
      <div class="relative flex w-3/4  mx-auto">
        <div class="ml-auto w-1/2">
          <p class="text-[16px] font-bold">Creative concept</p>
          <p class="text-[16px] font-normal leading-[2vh] mb-5">
            Characteristics such as energy, strength, character, speed, movement, visual weight were taken into account,
            this was important to choose thick fonts with a heavy, strong, rough appearance.
          </p>
          <p class="text-[16px] font-normal leading-[2vh]">
            Like that, it was decisive to design, the type of shapes that make up the graphic identifier, dynamic
            shapes, some with more aggressive cuts than others, but always maintaining the focus of character and
            strength.

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SemiRoundedPath from "../components/core/SemiRoundedPath";

    export default {
        name: "gym",
        components: {SemiRoundedPath}
    }
</script>

<style>
  .path-one {
    top: -7.5vh;
    left: 35vh;
    border-radius: 0 10vh 0 10vh;
  }

  .path-two {
    top: -7.5vh;
    right: 15vh;
    border-radius: 0 15vh 0 15vh;
  }


  .path-three {
    top: 10vh;
    left: 32vh;
    border-radius: 10vh 0 10vh 0;
  }
</style>
