<script setup>
// const router = useRouter();
// const { offset, move } = useBgPos();
// const lastRoute = ref('');
// router.afterEach((to, from) => {
//   move(lastRoute.value === to.fullPath ? -100 : 100);
//   lastRoute.value = lastRoute.value === to.fullPath ? '' : from.fullPath.toString();
// });
</script>

<template>
<!--  <ILayout class="star-background2" :style="{ backgroundPosition: `${offset}px 0`}">-->
  <ILayout class="star-background2">
    <ILayoutHeader>
      <INavbar class="_position:fixed-top _width:100vw navbar-header">
        <INavbarBrand to="/">
          <NuxtImg src="/images/logo/ufo-logo1.png" height="60" class="_image:responsive _max-width:50vw" />
        </INavbarBrand>
        <INavbarCollapsible>
          <INav>
            <INavItem to="/#answers" external> Answers </INavItem>
            <INavItem to="/articles"> Articles </INavItem>
            <INavItem to="/library"> Library </INavItem>
            <INavItem to="/videos"> Videos </INavItem>
            <INavItem to="/calendar/1989"> Calendar </INavItem>
            <INavItem to="/#about" external> About Me </INavItem>
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