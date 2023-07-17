<template>
    <div class="tweet-form container" :class="{ 'open' : showForm }">
        <form @submit.prevent="sendTweet">
            <input type="text" class="form-control" placeholder="your name" v-model="username" />
            <textarea class="form-control" rows="3" placeholder="your tweet" v-model="tweet"></textarea>
            <button type="submit" class="btn btn-primary">Send tweet</button>
        </form>
    </div>    
</template>

<script>
import { ref } from 'vue'
import { saveTweetApi } from '../api/tweet'
export default {
    props: {
        showForm: Boolean,
        openCloseForm: Function,
        reloadTweets: Function
    },
    setup(props) {
        const username = ref('')
        const tweet = ref('')

        const sendTweet = () => {
            if (!tweet.value || !username.value) return

            saveTweetApi(username.value, tweet.value)

            props.reloadTweets()
            props.openCloseForm()

            username.value = ""
            tweet.value = ""
        }

        return {
            username,
            tweet,
            sendTweet
        }
    }
}
</script>

<style lang="scss" scoped>
    .tweet-form {
        margin-top: 20px;
        height: 0;
        overflow: hidden;

        &.open {
            height: auto;
        }

        form {
            margin-bottom: 50px;

            input {
                margin-bottom: 10px;
            }

            button {
                width: 100%;
                margin-top: 10px;
            }
        }
    }
</style>