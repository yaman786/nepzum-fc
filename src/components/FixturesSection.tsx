import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';

export interface Match {
    _id: string; // Sanity ID
    homeTeam: string;
    awayTeam: string;
    date: string; // ISO string
    venue: string;
    competition: string;
    isHome: boolean;
}

interface FixturesSectionProps {
    upcomingMatches?: Match[];
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
}

function formatTime(dateString: string) {
    return new Date(dateString).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

const FALLBACK_MATCHES = [
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
    }
];

// Moving recentResults outside or keeping it static for now as per schema limitations (Result object exists but querying it needs more logic)
const recentResults = [
    { id: 1, homeTeam: 'Nepzum FC U12', homeScore: 3, awayTeam: 'Eltham Eagles', awayScore: 1, date: '2024-12-21' },
    { id: 2, homeTeam: 'Lewisham Lions', homeScore: 2, awayTeam: 'Nepzum FC U14', awayScore: 2, date: '2024-12-20' },
    { id: 3, homeTeam: 'Nepzum FC U10', homeScore: 4, awayTeam: 'Bexley Youth', awayScore: 0, date: '2024-12-14' },
];

export default function FixturesSection({ upcomingMatches }: FixturesSectionProps) {
    const matchesToDisplay = upcomingMatches && upcomingMatches.length > 0 ? upcomingMatches : FALLBACK_MATCHES;

    return (
        <section id="fixtures" className="relative py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4" />
                        Match Day
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Fixtures & Results
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Follow our teams&apos; journey through the season. Come support the players!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Upcoming Matches */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                            Upcoming Matches
                        </h3>
                        <div className="space-y-4">
                            {matchesToDisplay.map((match) => (
                                <div key={match._id} className="glass rounded-xl p-5 card-hover group">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        {/* Teams */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-lg font-bold ${match.isHome ? 'text-yellow-400' : 'text-white'}`}>
                                                    {match.homeTeam}
                                                </span>
                                                <span className="text-slate-500">vs</span>
                                                <span className={`text-lg font-bold ${!match.isHome ? 'text-yellow-400' : 'text-white'}`}>
                                                    {match.awayTeam}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(match.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {formatTime(match.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {match.venue}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Competition Badge */}
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${match.competition === 'Cup Semi-Final'
                                                ? 'bg-yellow-400 text-purple-900'
                                                : match.competition === 'League'
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-slate-700 text-slate-300'
                                                }`}>
                                                {match.competition}
                                            </span>
                                            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-yellow-400 transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Results */}
                    <div>
                        <h3 className="font-display text-2xl font-bold text-white mb-6">
                            Recent Results
                        </h3>
                        <div className="glass rounded-xl p-5 space-y-4">
                            {recentResults.map((result) => (
                                <div key={result.id} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-slate-500">{formatDate(result.date)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className={`font-semibold ${result.homeTeam.includes('Nepzum') ? 'text-yellow-400' : 'text-white'}`}>
                                            {result.homeTeam.replace('Nepzum FC ', '')}
                                        </span>
                                        <div className="flex items-center gap-2 px-4 py-1 bg-slate-800 rounded-lg">
                                            <span className={`text-xl font-bold ${result.homeScore > result.awayScore ? 'text-green-400' : result.homeScore < result.awayScore ? 'text-red-400' : 'text-white'}`}>
                                                {result.homeScore}
                                            </span>
                                            <span className="text-slate-500">-</span>
                                            <span className={`text-xl font-bold ${result.awayScore > result.homeScore ? 'text-green-400' : result.awayScore < result.homeScore ? 'text-red-400' : 'text-white'}`}>
                                                {result.awayScore}
                                            </span>
                                        </div>
                                        <span className={`font-semibold ${result.awayTeam.includes('Nepzum') ? 'text-yellow-400' : 'text-white'}`}>
                                            {result.awayTeam.replace('Nepzum FC ', '')}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Season Stats */}
                        <div className="mt-6 glass rounded-xl p-5">
                            <h4 className="font-display text-lg font-bold text-white mb-4">Season Stats</h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold text-green-400">12</p>
                                    <p className="text-xs text-slate-400">Wins</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-yellow-400">3</p>
                                    <p className="text-xs text-slate-400">Draws</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-red-400">2</p>
                                    <p className="text-xs text-slate-400">Losses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
