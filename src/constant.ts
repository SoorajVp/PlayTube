const API_KEY: string = "AIzaSyA6tLQM34c_UsDjNbkd9GTILB2cB8XVKqo"

export const VIDEOLIST_API_URL: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`

export const topMenuList: string[] = [
    // "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Live",
    "Fashion & Beauty",
    "Learning",
    "Sports",
    "Coding",
    "Podcasts",
    "Comedy",
    "Science & Technology",
    "Travel",
    "Education",
    "Health & Fitness",
    "Automobiles",
    "Food & Cooking",
    "DIY & Crafts"
];
