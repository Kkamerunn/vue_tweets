<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :openCloseForm="openCloseForm" :showForm="showForm" :reloadTweets="reloadTweets" />
  <TweetsList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import { ref } from 'vue'
import Menu from './components/Menu.vue'
import TweetForm from './components/TweetForm.vue'
import useFormTweet from './hooks/useFormTweet'
import TweetsList from './components/TweetsList.vue'
import { getTweetApi } from './api/tweet'

export default {
  components: {
    Menu,
    TweetForm,
    TweetsList
  },
  setup() {
    const tweets = ref(getTweetApi().reverse()); 

    const reloadTweets = () => {
      tweets.value = getTweetApi().reverse()
    }

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
