<script setup>
const route = useRoute();
const imageModalSrc = ref('');
const imageModalSrcReal = ref('');
provide('image', imageModalSrc);

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('articles').path(route.path).first()
})

const imageModal = ref(false);
watch(() => imageModalSrc.value, () => {
  if (imageModalSrc.value !== '') {
    if (isMobile()) {
      window.open(imageModalSrc.value);
      imageModalSrc.value = '';
    } else {
      imageModal.value = true;
    }
  }
})
watch(() => imageModal.value, () => {
  if (imageModal.value === false) {
    imageModalSrcReal.value = imageModalSrc.value;
    imageModalSrc.value = '';
  }
})

</script>
<template>
  <IContainer fluid class="star-background">
    <IContainer v-if="doc">
      <h1 class="d5 _margin-top:3 _margin-bottom:2 _text-align:center">{{ doc.title }}</h1>
      <ICard class="_margin-bottom:2 _border-bottom-radius:1" >
        <template #image>
          <ContentImage :image="doc.image" :align="doc.align" class="_border-top-radius:1" />
        </template>
        <ContentRenderer :value="doc" class="content-doc" />
      </ICard>
    </IContainer>
    <IModal v-model="imageModal" size="lg">
      <template #header> Image Preview </template>
      <NuxtImg :src="imageModalSrc || imageModalSrcReal" class="_image:responsive" />
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
