export const FALLBACK_NEWS = [
    {
        _id: '1',
        title: 'Welcome to Our New Website!',
        slug: 'welcome-new-website',
        excerpt: 'We\'re excited to launch our brand new website, making it easier for parents and players to find information about Nepzum FC.',
        publishedAt: '2024-12-28T12:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=400&fit=crop',
        category: 'Club Announcement'
    },
    {
        _id: '2',
        title: 'U12s Reach Cup Semi-Final!',
        slug: 'u12-cup-semi-final',
        excerpt: 'Fantastic performance from our Under 12s as they secured a 3-1 victory against local rivals to reach the semi-finals.',
        publishedAt: '2024-12-20T10:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
        category: 'Match Report'
    },
    {
        _id: '3',
        title: 'Spring 2025 Registration Now Open',
        slug: 'spring-2025-registration',
        excerpt: 'Places are filling fast for our spring intake. Book your free trial today and secure your child\'s spot.',
        publishedAt: '2024-12-15T09:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1529629468155-d61b7e3b0856?w=800&h=400&fit=crop',
        category: 'Registration'
    }
];

export const FALLBACK_MATCHES = [
    {
        _id: '1',
        homeTeam: 'Nepzum FC U12',
        awayTeam: 'Charlton Youth',
        date: '2025-01-04T10:00:00Z',
        venue: 'Plumstead Common',
        competition: 'League',
        isHome: true,
    },
    {
        _id: '2',
        homeTeam: 'Woolwich Warriors',
        awayTeam: 'Nepzum FC U14',
        date: '2025-01-05T11:30:00Z',
        venue: 'Woolwich Park',
        competition: 'Cup Semi-Final',
        isHome: false,
    },
    {
        _id: '3',
        homeTeam: 'Nepzum FC U10',
        awayTeam: 'Greenwich Juniors',
        date: '2025-01-11T09:30:00Z',
        venue: 'Plumstead Common',
        competition: 'Friendly',
        isHome: true,
    },
    {
        _id: '4',
        homeTeam: 'Blackheath Youth',
        awayTeam: 'Nepzum FC U16',
        date: '2025-01-12T14:00:00Z',
        venue: 'Blackheath Sports Ground',
        competition: 'League',
        isHome: false,
    }
];

export const FALLBACK_RESULTS = [
    {
        _id: '1',
        homeTeam: 'Nepzum FC U12',
        homeScore: 3,
        awayTeam: 'Eltham Eagles',
        awayScore: 1,
        date: '2024-12-21'
    },
    {
        _id: '2',
        homeTeam: 'Lewisham Lions',
        homeScore: 2,
        awayTeam: 'Nepzum FC U14',
        awayScore: 2,
        date: '2024-12-20'
    },
    {
        _id: '3',
        homeTeam: 'Nepzum FC U10',
        homeScore: 4,
        awayTeam: 'Bexley Youth',
        awayScore: 0,
        date: '2024-12-14'
    },
];
