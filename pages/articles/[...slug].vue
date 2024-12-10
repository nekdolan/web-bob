<script setup>
const route = useRoute();
const imageModalSrc = ref('');
provide('image', imageModalSrc);

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

const imageModal = computed({
  get: () => imageModalSrc.value !== '',
  set: (val) => {
    if (val && isMobile()) {
      window.open(imageModalSrc.value);
      imageModalSrc.value = '';
      return;
    }
    return val ? '' : imageModalSrc.value = '';
  }
});
</script>
<template>
  <IContainer fluid class="star-background">
    <IContainer>
      <ContentDoc :path="route.path.toLowerCase()" v-slot="{ doc }">
          <h1 class="d5 _margin-top:3 _margin-bottom:2 _text-align:center">{{ doc.title }}</h1>
          <ICard class="_margin-bottom:2 _border-bottom-radius:1" >
            <template #image>
              <ContentImage :image="doc.image" :align="doc.align" class="_border-top-radius:1" />
            </template>
            <ContentRenderer :value="doc" class="content-doc" />
          </ICard>
      </ContentDoc>
    </IContainer>
    <IModal v-model="imageModal" size="lg">
      <template #header> Image Preview </template>
      <NuxtImg :src="imageModalSrc" />
<!--      <template #footer> Modal Footer </template>-->
    </IModal>
  </IContainer>
</template>

<style lang="scss">
.content-doc {
  h1, h2, h3, h4 {
    padding-top: 110px; margin-top: -110px;
  }
}
.modal-wrapper .modal {
  width: initial !important;
  max-width: initial !important;
}
</style>
