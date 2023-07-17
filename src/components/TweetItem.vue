<template>
    <div class="tweet">
        <p class="tweet__title">{{ username }}</p>
        <p class="tweet__text">{{ tweet }}</p>
        <span>{{ formatDate(createdAt) }}</span>
        <DeleteIcon @click="deleteTweet(id)" />
    </div>
</template>

<script>
import moment from 'moment'
import DeleteIcon from './Icons/DeleteIcon.vue'
import { deleteTweetApi } from '../api/tweet'
export default {
    props: {
        tweet: Object,
        reloadTweets: Function
    },
    components: {
        DeleteIcon
    },
    setup(props) {
        const { username, tweet, createdAt, id } = props.tweet

        const formatDate = date => {
            return moment(date).fromNow()
        }
        const deleteTweet = (tweetId) => {
            deleteTweetApi(tweetId)
            props.reloadTweets()
        }

        return {
            username,
            tweet,
            createdAt,
            id,
            formatDate,
            deleteTweet
        }
    }
}
</script>

<style lang="scss" scoped>
    .tweet {
        position: relative;
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0;
        }

        &__title {
            position: absolute;
            top: -12px;
            left: 10px;
            background-color: #fff;
            padding: 0 10px;
            font-weight: bold;
        }

        &__text {
            color: grey;
        }

        span {
            position: absolute;
            right: 10px;
            bottom: -9px;
            font-size: 12px;
            color: grey;
            background-color: #fff;
            padding: 0 20px;
            border: 1px solid #ccc;
        }
    }
</style>