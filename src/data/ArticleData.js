export const articles = [
    { 
        id: 1,
        title: 'The Evolution of Open World Games: From GTA III to Cyberpunk 2077',
        image: 'https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjGHXoGPk.jpg',
        author: 'John Doe',
        date: '2024-03-15',
        content: `
            <p>The landscape of open-world gaming has evolved dramatically since the groundbreaking release of Grand Theft Auto III in 2001. This evolution represents not just technological advancement, but a fundamental shift in how we experience interactive entertainment.</p>

            <h2>The Beginning: GTA III</h2>
            <p>When Grand Theft Auto III launched, it revolutionized the concept of open-world gaming. Players were suddenly given unprecedented freedom to explore a living, breathing city...</p>

            <h2>The Modern Era: Cyberpunk 2077</h2>
            <p>Fast forward to 2020, and Cyberpunk 2077 shows us just how far we've come. Night City represents the pinnacle of open-world detail and density...</p>

            <h2>Key Milestones</h2>
            <ul>
                <li>2001: GTA III introduces the first true 3D open world</li>
                <li>2007: Assassin's Creed brings historical accuracy to open worlds</li>
                <li>2015: The Witcher 3 sets new standards for open-world storytelling</li>
                <li>2020: Cyberpunk 2077 pushes technological boundaries</li>
            </ul>
        `,
        relatedArticles: [2, 3, 4] // IDs of related articles
    },
    { 
        id: 2,
        title: 'Why Elden Ring Revolutionized the Souls-like Genre',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png',
        author: 'Jane Smith',
        date: '2024-03-20',
        content: `
            <p>Elden Ring has taken the gaming world by storm, redefining what we expect from Souls-like games and open-world experiences alike...</p>

            <h2>A New Level of Freedom</h2>
            <p>Unlike its predecessors, Elden Ring offers an unprecedented level of freedom in how players approach challenges...</p>

            <h2>Rich Lore and Storytelling</h2>
            <p>Collaborating with George R.R. Martin, FromSoftware has created a rich, intricate world filled with deep lore and compelling characters...</p>

            <h2>Innovative Combat System</h2>
            <p>Elden Ring builds upon the combat systems of previous Souls games, introducing new mechanics like mounted combat and stealth...</p>
        `,
        relatedArticles: [1, 3, 4]
    },
    { 
        id: 3,
        title: 'The Impact of God of War Ragnarök on Storytelling in Games',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
        author: 'Alex Johnson',
        date: '2024-03-25',
        content: `
            <p>God of War Ragnarök has set a new standard for storytelling in video games, seamlessly blending mythology, character development, and gameplay...</p>

            <h2>Character Evolution</h2>
            <p>The relationship between Kratos and Atreus continues to evolve, offering a deep exploration of fatherhood and coming-of-age themes...</p>

            <h2>Mythological Depth</h2>
            <p>Ragnarök delves deeper into Norse mythology, offering a rich tapestry of gods, monsters, and legends for players to explore...</p>

            <h2>Cinematic Gameplay</h2>
            <p>The game's seamless blend of cutscenes and gameplay creates an immersive, cinematic experience that rivals Hollywood productions...</p>
        `,
        relatedArticles: [1, 2, 4]
    },
    { 
        id: 4,
        title: 'Next-Gen Gaming: What PS5 and Xbox Series X Bring to the Table',
        image: 'https://cdn.vox-cdn.com/thumbor/TuXbxf_FLu-SCSeMY9pxXhp1R-U=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67708941/vpavic_4261_20201023_0018.0.jpg',
        author: 'Sam Lee',
        date: '2024-03-30',
        content: `
            <p>The launch of PS5 and Xbox Series X has ushered in a new era of gaming, with technological advancements that are changing how we play...</p>

            <h2>Ray Tracing and Visual Fidelity</h2>
            <p>Both consoles offer ray tracing capabilities, bringing a new level of realism to lighting, reflections, and shadows in games...</p>

            <h2>SSD and Load Times</h2>
            <p>The inclusion of high-speed SSDs has dramatically reduced load times, allowing for near-instantaneous game starts and fast travel...</p>

            <h2>New Controller Features</h2>
            <p>The PS5's DualSense controller and the Xbox Series X's refined controller offer new levels of immersion through haptic feedback and adaptive triggers...</p>
        `,
        relatedArticles: [1, 2, 3]
    },
  ];

export const findArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
};