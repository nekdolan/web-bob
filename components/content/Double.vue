<script setup>
const props = defineProps(['leftImage', 'rightImage', 'leftText', 'rightText', 'leftSource', 'rightSource']);
// {{ props[`${side}Text`] }} Source:
//
</script>
<template>
  <IContainer :key="props.leftImage">
    <IRow class="double-container">
      <IColumn sm="6" xs="12" v-for="side in ['left','right']" class="_margin-bottom:2 _margin-top:1/2">
        <ProseImg :src="props[`${side}Image`]" :alt="props[`${side}Text`]"/>
        <em>
          {{ props[`${side}Text`] }}
          (Source:
          <ProseA :href="props[`${side}Source`]" :title="props[`${side}Text`]">link</ProseA>)
        </em>
      </IColumn>
    </IRow>
  </IContainer>
</template>

<style lang="scss">
@media screen and (min-width: 992px) {
  .double-container .image-container img {
    max-width: 100%;
    max-height: 50vh;
  }
}

</style>