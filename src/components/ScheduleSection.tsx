import { Clock, MapPin, Users, Calendar } from 'lucide-react';

interface ScheduleSlot {
    day: string;
    time: string;
    note?: string;
}

interface Program {
    _id?: string;
    name: string;
    ages: string;
    ageRange: string;
    schedule: ScheduleSlot[];
    focus: string;
    color: string;
}

const FALLBACK_PROGRAMS: Program[] = [
    {
        name: 'Mini Kickers',
        ages: 'U5 - U6',
        ageRange: 'Reception & Year 1',
        schedule: [
            { day: 'Saturday', time: '9:00am - 10:00am' }
        ],
        focus: 'Fun, basic ball skills, coordination',
        color: 'from-green-500 to-emerald-600'
    },
    {
        name: 'Juniors',
        ages: 'U7 - U8',
        ageRange: 'Years 2-3',
        schedule: [
            { day: 'Tuesday', time: '5:30pm - 6:30pm' },
            { day: 'Saturday', time: '10:00am - 11:00am' }
        ],
        focus: 'Technique, teamwork, mini matches',
        color: 'from-blue-500 to-indigo-600'
    },
    {
        name: 'Development',
        ages: 'U9 - U10',
        ageRange: 'Years 4-5',
        schedule: [
            { day: 'Tuesday', time: '6:00pm - 7:15pm' },
            { day: 'Thursday', time: '6:00pm - 7:15pm' }
        ],
        focus: 'Tactical awareness, positions, matches',
        color: 'from-purple-500 to-violet-600'
    },
    {
        name: 'Academy',
        ages: 'U11 - U12',
        ageRange: 'Years 6-7',
        schedule: [
            { day: 'Monday', time: '6:30pm - 8:00pm' },
            { day: 'Wednesday', time: '6:30pm - 8:00pm' },
            { day: 'Sunday', time: '10:00am - 12:00pm', note: 'Match Day' }
        ],
        focus: 'Advanced tactics, competition, leagues',
        color: 'from-orange-500 to-red-600'
    },
    {
        name: 'Youth',
        ages: 'U13 - U16',
        ageRange: 'Years 8-11',
        schedule: [
            { day: 'Tuesday', time: '7:00pm - 8:30pm' },
            { day: 'Thursday', time: '7:00pm - 8:30pm' },
            { day: 'Sunday', time: '10:00am - 12:00pm', note: 'Match Day' }
        ],
        focus: 'Elite development, league matches',
        color: 'from-pink-500 to-rose-600'
    },
];

export default function ScheduleSection({ programs }: { programs?: Program[] }) {
    const programsToDisplay = programs && programs.length > 0 ? programs : FALLBACK_PROGRAMS;

    return (
        <section id="schedule" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4" />
                        Find Your Perfect Fit
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        A Pathway for Every Potential.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        From first kicks at age 5 to competitive U16 squads—we&apos;ve built a pathway for every young player.
                    </p>
                </div>

                {/* Age Group Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programsToDisplay.map((group) => (
                        <div
                            key={group.name}
                            className="glass rounded-2xl overflow-hidden card-hover"
                        >
                            {/* Header with gradient */}
                            <div className={`bg-gradient-to-r ${group.color} p-5`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-white">
                                            {group.name}
                                        </h3>
                                        <p className="text-white/90 font-semibold">{group.ages}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <p className="text-white/70 text-sm mt-1">{group.ageRange}</p>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Schedule */}
                                <div className="space-y-3 mb-5">
                                    {group.schedule && group.schedule.map((slot, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50"
                                        >
                                            <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                            <div className="flex-1">
                                                <span className="text-white font-medium">{slot.day}</span>
                                                <span className="text-slate-400 mx-2">·</span>
                                                <span className="text-slate-300">{slot.time}</span>
                                            </div>
                                            {slot.note && (
                                                <span className="text-xs px-2 py-0.5 bg-yellow-400/20 text-yellow-400 rounded-full">
                                                    {slot.note}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Focus */}
                                <p className="text-slate-400 text-sm">
                                    <span className="text-purple-400 font-medium">Focus:</span> {group.focus}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Location & Info */}
                <div className="mt-16 glass rounded-2xl p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Location */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h4 className="font-display text-lg font-bold text-white mb-1">Training Ground</h4>
                                <p className="text-slate-300">Plumstead Common</p>
                                <p className="text-slate-400">Waverley Crescent, SE18 1RH</p>
                                <a
                                    href="https://maps.google.com/?q=Plumstead+Common+SE18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm mt-2 transition-colors"
                                >
                                    View on Google Maps →
                                </a>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h4 className="font-display text-lg font-bold text-white mb-1">Season Info</h4>
                                <p className="text-slate-300">Training runs year-round</p>
                                <p className="text-slate-400">League matches: September - May</p>
                                <p className="text-slate-400 text-sm mt-2">
                                    Free parking available on Waverley Crescent
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
