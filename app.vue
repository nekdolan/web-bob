<script setup>

</script>

<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar class="_position:fixed-top _width:100vw navbar-header">
        <INavbarBrand to="/">
          <NuxtImg src="/images/logo/ufo-logo1.png" height="60" class="_image:responsive _max-width:50vw" />
        </INavbarBrand>
        <INavbarCollapsible>
          <INav>
            <INavItem to="/#answers"> Answers </INavItem>
            <INavItem to="/articles"> Articles </INavItem>
            <INavItem to="/library"> Library </INavItem>
            <INavItem to="/videos"> Videos </INavItem>
            <INavItem to="/#about"> About Me </INavItem>
          </INav>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <NuxtPage class="nuxt-page" />
  </ILayout>
</template>

<style lang="scss">
.navbar-header {
  z-index: 2001;
  //@media screen and (max-width: 1200px) {
  //  .navbar-brand > img {
  //    max-width: 200px;
  //  }
  //}
}
.nuxt-page {
  margin-top: 110px; // 88
  @media screen and (max-width: 600px) {
    margin-top: 88px;
  }
}
</style>