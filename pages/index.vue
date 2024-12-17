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
    <IContainer fluid :style="backgroundArea51" class="adjusted">
      <IContainer class="main-header _display:flex _align-items:center">
        <div class="_flex-grow:1">
          <div class="d1 _text-align:center _color:black _text:uppercase _text-decoration:underline _margin-bottom:2">
            Bob Lazar Vindicated
          </div>
          <div class="_border-width:3 _text:lg _border-radius:3 _padding:1/2 transparent-black-bg title-container" >
            <div class="_margin:1 _float:left main-legend">
              <NuxtImg class="star-background" src="/images/photo/lazar2nobg.png" width="300" format="webp" />
            </div>
            <div class="_padding-left:1/2">
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
                In the <NuxtLink to="/#answers">Answers</NuxtLink> section we have a list of common charges Lazar has been accused of and the appropriate
                answer or rebuttal to the charge.
                In the <NuxtLink to="/articles">Articles</NuxtLink> section you can find primary research related to Lazar's life and history.
                In the <NuxtLink to="/library">Library</NuxtLink> you can search for information related to Lazar's story using radio and movie
                transcripts and books as sources.<br>
                For anyone who has never heard of Lazar I recommend the video "Best of Ufo Whistleblower Bob Lazar" in
                the <NuxtLink to="/videos">videos</NuxtLink> section to start with.
                <IPopover>
                  <IButton link color="primary" class="_padding:0" style="margin-top: -4px">
                    <IIcon name="ink-info" />
                  </IButton>
                  <template #body>
                    Background by Doc Searls;<br>
                    Licensed under the Creative Commons Attribution 2.0 Generic license;
                    Source: <NuxtLink target="_blank" href="https://commons.wikimedia.org/wiki/File:Groom_Lake_and_Papoose_Lake.jpg" external>Link</NuxtLink>
                  </template>
                </IPopover>
              </p>
            </div>
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
              <h1 class="_text:capitalize _text-align:center">{{ categories[index] }}</h1>
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
    <IContainer fluid class="star-background adjusted">
      <div id="about"></div>
      <IContainer class="main-header _display:flex _align-items:center">
        <div class="_flex-grow:1">
          <div class="d2 _margin-top:3 _margin-bottom:3 _text-align:center">About Me</div>
          <ICard>
            <h1>Me</h1>
            <p>
              <NuxtImg src="/images/other/some-mistakes-of-darwin.jpg" width="250" class="_margin-left:1 _margin-bottom:1 _image:thumbnail _image:responsive _float:right _sm:hidden _md:visible" />
              I am Daniel Vintner, the creator of BobLazarVindicated.com.
              I am a professional programmer, author, and UFO researcher.
              My research into Bob Lazar's story began in January 2023,
              shortly after I published my first book.
              I have gathered all the available data about Lazar and made it accessible to everyone through the Library.
              I’ve spoken with as many people who knew Lazar as possible, and I am deeply grateful for the help and advice they have provided. I’ve also written several articles on the subject, although much has been left unsaid.
              <br>
              Initially, I had little interest in UFOs or extraterrestrials. My first book was a critique of Darwin’s theory of evolution, written from my unique perspective as a programmer. Titled Some Mistakes of Darwin and a Programmer's Theory of Life, it offered a fresh take on the origins of life.
            </p>
            <h1>Contact</h1>
            <p>
              <NuxtImg src="/images/other/mailme.png" width="400" class="_image:responsive" />
            </p>
            <p>
              <NuxtLink to="https://x.com/DanielGVintner" external>
                <NuxtImg src="/images/social/x-logo.png" class="_image:responsive" />
              </NuxtLink>
            </p>
            <h1>My experience</h1>
            <p>
              The story of being visited by some unknown entity. This happened 6 months after I began my research on Lazar. By then I have pretty much exhausted all of my sources and was pretty much stuck.
              Read it below if you wish.
            </p>
            <ICollapsible>
              <ICollapsibleItem>
                <template #header>
                  <IIcon class="_vertical-align:text-top" name="ink-warning" /> Woo Woo Alert!
                </template>
                <p>
                  <b>June 24, 2023</b><br>
                  Imagine a hooded figure. Now imagine that this figure is made of sunlight, but that this light
                  is not reflected on anything despite everything around being dark. Then if you look at the
                  face, you see two completely round dark eye sockets. Due to the contrast of the dark
                  surrounding and the figure of light, it seemed that the Entity's eyes were hollow. I could not
                  see any feet, and the hoodie was extremely pronounced and created a triangle between the
                  top of the head and the shoulders. Since everything was homogeneous light except for the
                  eyes, only the contour of the being was visible so any dimensionality is simply implied by the
                  humanoid appearance. I also seem to recall a very thin slightly more dim aura around the
                  being. The shape and color of the eyes as well as the dark environment are the parts of my
                  memory that I am least certain of. Everything else I can still easily recall. I estimate this
                  experience to have taken approximately 15 to 30 seconds.<br>
                  I can clearly remember what I felt. I was elated. Really happy to see this thing. My thoughts
                  were, and I wish they weren't, something like: Yippee, they are real! Then it was over. I was
                  in bed, and it was about 2AM.
                </p>
                <p>
                  About six months after the incident, I've decided to seek out a
                  hypnotherapist. I've picked one who seemed trustworthy and agreed with him to have a
                  two-hour session together. I gave him the task to find out if what I saw was real or a dream
                  and told him that I would comply as best as I could. Not because I was still disturbed at this
                  point, but more because my money was being spent and I didn't want to waste it.
                  Once under hypnosis, the first thing I felt was pain. I could feel it from the left side of my
                  chest and then a bit later from the right side. I also felt an almost unbearable urge to open
                  my eyes. I had to constantly apply force to my eyelids to keep them closed. This struggle
                  went on for almost the whole duration and eventually I could feel moisture building up
                  around my eye due to exhaustion.<br>
                  I have never been hypnotized before. I've never prayed or meditated or taken any drugs or
                  been drunk (despite quite some effort) and I have never seen anything illusionary outside my
                  dreams while being conscious. This time, however, I did see some things although they were
                  mostly very simple mostly geometric shapes. My sight was clear but without context it is hard
                  to say what I saw, but I will share my best guess that I have come up with.<br>
                  Firstly, I saw a circle in the center of my vision. Everything around the circle was pulsating
                  energy which was going inside the circle, like a reversed hollow Sun. My deduction for this is
                  that this is simply a focus point which is also called the third eye (best guess doesn't mean it
                  is a good guess).<br>
                  Second, I saw a snout specifically a reptilian snout. The image came and went by very
                  quickly, but my therapist did ask me about it and I did reluctantly say that I saw a reptilian. I
                  don't know why and honestly, I don't want to know why.
                  Third, I saw something that resembled the Entity or at least the outside shape of the glowing
                  being. This shape was stuck to the bottom of my vision so once again I could not see any
                  feet. That's pretty much all that I saw
                </p>
              </ICollapsibleItem>
            </ICollapsible>
          </ICard>
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
  .main-legend{
    text-align: center;
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
.layout-content > .container.adjusted .main-header {
  margin-top: -110px;
  padding: 90px 0 90px 0;
  min-height: 100vh;
}
.main-header {
  min-height: calc(100vh - 110px);
}

</style>