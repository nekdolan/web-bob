<template>
  <IContainer fluid class="star-background adjusted">
    <div id="creed"></div>
    <IContainer class="main-header _display:flex _align-items:center">
      <div class="_flex-grow:1">
        <div class="d2 _margin-top:3 _margin-bottom:3 _text-align:center">The Creed</div>
        <ICard>
          <nuxt-img src="/images/other/ingresoll.png" format="webp" densities="1x" class="_xs:visible! _sm:hidden _width:75% _margin-bottom:1 _margin-left:auto _margin-right:auto" />
          <h4 class="_flex _align-items:center">
              <span>
                <span class="_text:italic">
                “Until every soul is freely permitted to investigate every book, and creed, and dogma for itself, the world cannot be free. Mankind will be enslaved until there is mental grandeur enough to allow each man to have his thought and say. This earth will be a paradise when men can, upon all these questions differ, and yet grasp each other's hands as friends.”
                </span>
                <br>–<span class="_color:primary"> Robert G. Ingresoll</span>
              </span>
            <nuxt-img src="/images/other/ingresoll.png" format="webp" densities="1x" style="max-width: 30%" class="_hidden _sm:visible! _margin-bottom:1/2" />
          </h4>
        </ICard>
        <ICard class="_margin-top:2">
          <h4 class="_flex _align-items:center">
              <span>
                <nuxt-link external to="https://en.wikipedia.org/wiki/File:Hitchens_2010.jpg" target="_blank">
                  <nuxt-img src="/images/other/eric.png" format="webp" densities="1x" width="300" class="_xs:visible! _sm:hidden _width:75% _margin-bottom:1 _margin-left:auto _margin-right:auto" />
                  <nuxt-img src="/images/other/eric.png" format="webp" densities="1x" width="300" style="max-width: 30%" class="_float:left _margin-right:1 _hidden _sm:visible! _margin-bottom:1/2" />
                </nuxt-link>
                <span class="_text:italic">
                  "It’s not just the right of the person who speaks to be heard; it is the right of everyone in the audience to listen and to hear. And every time you silence somebody, you make yourself a prisoner of your own action, because you deny yourself the right to hear something. In other words, your own right to hear and be exposed is as much involved in all these cases as is the right of the other to voice his or her view.
                  Indeed, as John Stuart Mill said, if all in society were agreed on the truth and beauty and value of one proposition — all except one person — it would be most important, in fact it would become even more important, that that one heretic be heard, because we would still benefit from his perhaps outrageous or appalling view."
                  </span>
                <br>–<span class="_color:primary"> Cristopher E. Hitchens</span>
              </span>
          </h4>
        </ICard>
      </div>
    </IContainer>
  </IContainer>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .d1 {
    font-size: 3.8rem;
    padding-top: 30px;
  }
  .main-legend{
    text-align: center;
    float: none;
  }
}
.transparent-black-bg {
  background-color: rgba(10,10,10,0.8);
}
.container.adjusted .main-header {
  margin-top: -110px;
  padding: 90px 0 90px 0;
  min-height: 100vh;
}
.main-header {
  min-height: calc(100vh - 110px);
}

</style>