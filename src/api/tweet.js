import { size, remove } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { TWEETS } from '../utils/constans'

export function saveTweetApi(tweet, username) {
    const tweets = getTweetApi()

    if (size(tweet) === 0) {
        const tweetTemp = [
            {
                id: uuidv4(),
                tweet,
                username,
                createdAt: new Date()
            }
        ]
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
    } else {
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date()
        })
        localStorage.setItem(TWEETS, JSON.stringify(tweets))
    }
}

export function getTweetApi() {
    const tweets = localStorage.getItem(TWEETS)

    if (tweets) {
        return JSON.parse(tweets)
    }
    return []
}

export function deleteTweetApi(tweetId) {
    const tweets = getTweetApi()

    remove(tweets, function(tweet) {
        return tweet.id === tweetId
    })

    localStorage.setItem(TWEETS, JSON.stringify(tweets))
}