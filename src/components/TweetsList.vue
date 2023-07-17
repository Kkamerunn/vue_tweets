<template>
    <div class="container">
        <h1 class="text-center">List</h1>
        <TweetItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" :reloadTweets="reloadTweets" /> 
    </div>
</template>

<script>
import TweetItem from './TweetItem.vue'
export default {
    components: {
        TweetItem
    },
    props: {
        tweets: Array,
        reloadTweets: Function
    }
}
</script>

<style lang="scss" scoped>
    
</style>