import type { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Nepzum FC Dashboard')
        .items([
            // Quick Actions Header
            S.listItem()
                .title('📰 News & Updates')
                .id('news')
                .child(
                    S.documentTypeList('post')
                        .title('News Articles')
                        .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),

            S.listItem()
                .title('⚽ Match Fixtures')
                .id('fixtures')
                .child(
                    S.documentTypeList('fixture')
                        .title('Fixtures & Results')
                        .defaultOrdering([{ field: 'date', direction: 'asc' }])
                ),

            S.divider(),

            S.listItem()
                .title('👤 Players')
                .id('players')
                .child(
                    S.documentTypeList('player')
                        .title('Player Roster')
                ),

            S.listItem()
                .title('🧢 Coaching Staff')
                .id('coaches')
                .child(
                    S.documentTypeList('coach')
                        .title('Coaches')
                ),

            S.divider(),

            S.listItem()
                .title('🎓 Training Programs')
                .id('programs')
                .child(
                    S.documentTypeList('program')
                        .title('Academy Programs')
                ),

            S.divider(),

            S.listItem()
                .title('💰 Pricing Plans')
                .id('pricing')
                .child(
                    S.documentTypeList('pricing')
                        .title('Membership Plans')
                ),

            S.divider(),

            S.listItem()
                .title('📸 Gallery')
                .id('gallery')
                .child(
                    S.documentTypeList('gallery')
                        .title('Photo & Video Gallery')
                ),
        ])
