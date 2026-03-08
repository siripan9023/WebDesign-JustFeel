const movies = [
    {
        id: 1,
        title: "The Secret Life of Walter Mitty",
        year: 2013,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg",
        mood: "Feel Inspired",
        genre: ["Adventure", "Comedy", "Drama"],
        director: "Ben Stiller",
        runtime: "1h 54m",
        rating: "IMDb: 7.3/10",
        synopsis: "When his job along with that of his co-worker are threatened, Walter takes action in the real world embarking on a global journey that turns into an adventure more extraordinary than anything he could have ever imagined.",
        platforms: [
            { name: "Hulu", url: "#" },
            { name: "Amazon Prime", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=HddkucqSz48"
    },
    {
        id: 2,
        title: "Mad Max: Fury Road",
        year: 2015,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        mood: "Get Adrenaline",
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "George Miller",
        runtime: "2h 0m",
        rating: "IMDb: 8.1/10",
        synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        platforms: [
            { name: "Max", url: "#" },
            { name: "Amazon Prime", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
    },
    {
        id: 3,
        title: "The Green Mile",
        year: 1999,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        mood: "Have a Good Cry",
        genre: ["Crime", "Drama", "Fantasy"],
        director: "Frank Darabont",
        runtime: "3h 9m",
        rating: "IMDb: 8.6/10",
        synopsis: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        platforms: [
            { name: "Netflix", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=Ki4haFrq0sg"
    },
    {
        id: 4,
        title: "Paddington 2",
        year: 2017,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg",
        mood: "Chill Out",
        genre: ["Adventure", "Comedy", "Family"],
        director: "Paul King",
        runtime: "1h 43m",
        rating: "IMDb: 7.8/10",
        synopsis: "Paddington settles in with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes.",
        platforms: [
            { name: "Max", url: "#" },
            { name: "Hulu", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=52x5HJ9H8DM"
    },
    {
        id: 5,
        title: "Everything Everywhere All At Once",
        year: 2022,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
        mood: "Feel Inspired",
        genre: ["Action", "Adventure", "Comedy"],
        director: "Daniel Kwan, Daniel Scheinert",
        runtime: "2h 19m",
        rating: "IMDb: 7.9/10",
        synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save the existence by exploring other universes and connecting with the lives she could have led.",
        platforms: [
            { name: "Showtime", url: "#" },
            { name: "Amazon Prime", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=wxN1T1uxQ2g"
    },
    {
        id: 6,
        title: "Top Gun: Maverick",
        year: 2022,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        mood: "Get Adrenaline",
        genre: ["Action", "Drama"],
        director: "Joseph Kosinski",
        runtime: "2h 10m",
        rating: "IMDb: 8.3/10",
        synopsis: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        platforms: [
            { name: "Paramount+", url: "#" },
            { name: "MGM+", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=qSqVVhwa42E"
    },
    {
        id: 7,
        title: "Grave of the Fireflies",
        year: 1988,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
        mood: "Have a Good Cry",
        genre: ["Animation", "Drama", "War"],
        director: "Isao Takahata",
        runtime: "1h 29m",
        rating: "IMDb: 8.5/10",
        synopsis: "A young boy and his little sister struggle to survive in Japan during World War II.",
        platforms: [
            { name: "Vudu", url: "#" },
            { name: "Apple TV", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=4vPeTSRd580"
    },
    {
        id: 8,
        title: "The Grand Budapest Hotel",
        year: 2014,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        mood: "Chill Out",
        genre: ["Comedy", "Crime", "Adventure"],
        director: "Wes Anderson",
        runtime: "1h 39m",
        rating: "IMDb: 8.1/10",
        synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        platforms: [
            { name: "Hulu", url: "#" },
            { name: "Disney+", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=1Fg5iWmQjwk"
    },
    {
        id: 9,
        title: "Rocky",
        year: 1976,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg",
        mood: "Feel Inspired",
        genre: ["Drama", "Sport"],
        director: "John G. Avildsen",
        runtime: "2h 0m",
        rating: "IMDb: 8.1/10",
        synopsis: "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
        platforms: [
            { name: "Netflix", url: "#" },
            { name: "Amazon Prime", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=7RYpJAUMo2M"
    },
    {
        id: 10,
        title: "John Wick: Chapter 4",
        year: 2023,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        mood: "Get Adrenaline",
        genre: ["Action", "Crime", "Thriller"],
        director: "Chad Stahelski",
        runtime: "2h 49m",
        rating: "IMDb: 7.7/10",
        synopsis: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        platforms: [
            { name: "Starz", url: "#" },
            { name: "Hulu", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=qEVUtrk8_B4"
    },
    {
        id: 11,
        title: "Manchester by the Sea",
        year: 2016,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/o9VXYOuaJxCEKOxbA86xqtwmqYn.jpg",
        mood: "Have a Good Cry",
        genre: ["Drama"],
        director: "Kenneth Lonergan",
        runtime: "2h 17m",
        rating: "IMDb: 7.8/10",
        synopsis: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
        platforms: [
            { name: "Amazon Prime", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=gsVoD0pTge0"
    },
    {
        id: 12,
        title: "Chef",
        year: 2014,
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/hyp8EXDmO4dSC8V6Q5jU7gD1kcg.jpg",
        mood: "Chill Out",
        genre: ["Comedy", "Drama"],
        director: "Jon Favreau",
        runtime: "1h 54m",
        rating: "IMDb: 7.3/10",
        synopsis: "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
        platforms: [
            { name: "Max", url: "#" }
        ],
        trailerUrl: "https://www.youtube.com/watch?v=wgFws3AoIUM"
    }
];

export default movies;