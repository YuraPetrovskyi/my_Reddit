const url = 'https://www.reddit.com';

const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${url}${subreddit}.json?limit=60`)
    const json = await response.json()

    return json.data.children.map((post) => post.data)
}

// export const initialState = (subreddit) => getSubredditPosts(subreddit);

