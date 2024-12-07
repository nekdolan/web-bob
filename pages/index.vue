<script setup>
const img = useImage();
const appConfig = useAppConfig();
const { answers } = appConfig;
const categories = ['education', 'career', 'life', 'area51']
const activeTab = ref(categories[0]);
const categoryAllegations = computed(() => answers.allegations.reduce((sum, item) => {
  const index = categories.indexOf(item.type);
  const result = [...sum];
  result[index] = [...(sum[index] || []), item];
  return result;
}, []))
const backgroundArea51 = computed(() => {
  const imgUrl = img('/images/background/area51ai.jpg', { width: 1920, quality: 75, format: 'webp' })
  return `background: center / cover url('${imgUrl}')`
})
const animationPaused = ref(true);
useSeoMeta({
  title: "Bob Lazar Vindicated",
  description: "This website is dedicated to the UFO whistleblower Robert Scott Lazar."
})
</script>
<template>
  <ILayoutContent>
    <IContainer fluid :style="backgroundArea51">
      <IContainer class="main-header _display:flex _align-items:center">
        <div class="_flex-grow:1">
          <div class="d1 _text-align:center _color:black _text:uppercase _text-decoration:underline _margin-bottom:2">
            Bob Lazar Vindicated
          </div>
          <div class="_border-width:3 _text:lg _border-radius:3 _padding:1/2 transparent-black-bg" >
            <div :class="`${animationPaused ? 'paused' : ''} main-legend _float:left _margin:1`" @click="animationPaused = !animationPaused">
              <div class="main-legend-background"></div>
              <NuxtImg class="_position:relative" src="/images/photo/lazar2nobg.png" width="300" format="webp" />
            </div>
            <div class="d5 _margin-top:3/4">Introduction</div>
            <p>
              Bob Lazar is a former Los Alamos Labs technician, business owner, and self-proclaimed physicist who
              allegedly worked on reverse-engineering UFOs in the late 1980s at a location he called S4, near
              Papoose Lake, just south of Area 51 at Groom Lake, Nevada. He has been referred to as the
              "original whistleblower," but others labeled him a fraud, liar, grifter and more.
            </p>
            <p>
              This website was created to dissolve the confusion surrounding Lazar's story by using primary sources, documents, and thoughtful analysis,
              so that all may have access to the historical material and are able to paint a more balanced picture of the man.
            </p>
            <p>
              In the <NuxtLink to="/#answers">Answers</NuxtLink> section we have a list of common charges Lazar has been accused of the appropriate
              answer or rebuttal to them.
              In the <NuxtLink to="/articles">Articles</NuxtLink> section you can find primary research related to Lazar's life and history.
              In the <NuxtLink to="/library">Library</NuxtLink> you can search for information related to Lazar's story using radio and movie
              transcripts and books as sources.
            </p>
            <div class="_clearfix"></div>
          </div>
        </div>
      </IContainer>
    </IContainer>
    <IContainer fluid class="star-background">
      <div id="answers"></div>
      <IContainer class="main-header _display:flex ">
        <div class="_flex-grow:1">
          <div class="d4 _margin-top:3 _margin-bottom:3">Accusations & <span class="_color:primary">Answers</span></div>
          <ITabs v-model="activeTab" class="_margin-bottom:2" stretch>
            <template #header>
              <ITabTitle :for="name" v-for="name in categories" class="_text:uppercase">{{ name }}</ITabTitle>
            </template>
            <ITab v-for="(allegations, index) in categoryAllegations" :name="categories[index]">
              <div v-for="item in allegations" class="_clearfix _margin-bottom:3">
                <ICard color="light" size="lg" class="_width:75% _margin-bottom:1 _text:bold">
                  {{ item.allegation }}
                </ICard>
                <ICard color="primary" size="lg" class="_width:75% _float:right">
                  {{ item.answer }}
                </ICard>
              </div>
            </ITab>
          </ITabs>
        </div>
      </IContainer>
    </IContainer>
  </ILayoutContent>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .d1 {
    font-size: 3.8rem;
    padding-top: 30px;
  }
  .main-legend {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
}
#answers {
  position: absolute;
  margin-top: -110px;
}
.navbar-header {
  z-index: 2;
}
.transparent-black-bg {
  background-color: rgba(10,10,10,0.8);
}
.main-legend {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 300px;
  cursor: pointer;
  &.paused > .main-legend-background {
    animation-play-state: paused;
  }
}
.main-legend-background {
  position: absolute;
  height: 100%;
  width: 7112px;
  z-index: 0;
  background-image: url(/images/background/stars3.jpg);
  background-repeat: repeat-x;
  animation: slide 120s linear infinite;
}
@keyframes slide {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-1778px); /* The image width */
  }
}
.layout-content > .container:first-child .main-header {
  margin-top: -110px;
  padding: 90px 0 90px 0;
  min-height: 100vh;
}
.main-header {
  min-height: calc(100vh - 110px);
}

</style>