<script setup>
const pros = defineProps(['text']);
</script>
<template>
  <IPopover>
    <IButton link color="primary" class="_padding:0" style="margin-top: -5px">
      <ContentSlot />
    </IButton>
    <template #body>
      {{ text }}
    </template>
  </IPopover>
</template>