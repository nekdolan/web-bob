<script setup>
const img = useImage()
const backgroundArea51 = computed(() => {
  const imgUrl = img('/images/area51.jpg', { width: 1920, quality: 50, format: 'webp' })
  return `background: center / cover url('${imgUrl}')`
})

</script>

<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar class="_position:fixed-top _width:100%">
        <INavbarBrand to="/"> Bob Lazar Vindicated </INavbarBrand>
        <INavbarCollapsible>
          <INav>
            <INavItem to="/"> Home </INavItem>
            <INavItem to="/#accusations"> Accusations </INavItem>
            <INavItem to="/articles"> Articles </INavItem>
            <INavItem to="/library"> Library </INavItem>
          </INav>
          <IInput placeholder="Type something..">
            <template #append>
              <IButton color="primary">
                <IIcon name="ink-search" />
              </IButton>
            </template>
          </IInput>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <ILayoutContent>
      <IContainer fluid :style="backgroundArea51">
        <IContainer class="main-header _display:flex _align-items:center">
          <div class="_flex-grow:1 _text:lg _border-radius:3 _padding:1/2" style="background-color: rgba(20,20,20,0.7)">
            <NuxtImg src="/images/lazar2.jpg" width="300" class="_float:left _padding:1 _margin-right:1/2" format="webp" />
            <h1 class="d4">Bob Lazar Vindicated</h1>
            <p>
              Bob Lazar is a former Los Alamos Labs technician and self described physicist who allegedly
              worked on reverse engineering UFOs in the late 1980s at a location called S4 near Papoose Lake just south of Area 51
              at Groom Lake Nevada. He has been called the "original whistleblower" as well as
              other things such as: janitor, fraud, liar, grifter, pimp, murderer and many more.
            </p>
            <p>
              This website was created to dissolve the fog of confusion around Lazar's story using primary sources,
              documents and a bit of thinking, so that all may have access to the historical material and have a better chance
              of painting a more balanced picture of the man.
            </p>
            <p>
              In the <NuxtLink to="/#accusations">Accusations</NuxtLink> section we have a list of common charges Lazar has been accused of.
              In the <NuxtLink to="/articles">Articles</NuxtLink> section you can find primary research related to Lazar's life and history.
              In the <NuxtLink to="/library">Library</NuxtLink> you can search for information regarding Lazar's life in radio transcripts and books.
            </p>
          </div>

        </IContainer>


      </IContainer>

    </ILayoutContent>
<!--    <ILayoutFooter>-->
<!--      2024-->
<!--    </ILayoutFooter>-->
  </ILayout>
</template>

<style lang="scss" scoped>
.main-header {
  min-height: 100vh;
  padding: 90px 0 14px 0;
}
.layout-header {
  //height: 76px;
  //margin-bottom: 10px;
}
</style>