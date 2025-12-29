import type { StructureBuilder } from 'sanity/structure'

// Helper to build the structure
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Club Management')
        .items([
            // News Section
            S.listItem()
                .title('News & Updates')
                .child(
                    S.documentTypeList('post')
                        .title('News Articles')
                ),

            S.divider(),

            // Team Section
            S.listItem()
                .title('Team Management')
                .child(
                    S.list()
                        .title('Team Management')
                        .items([
                            S.documentTypeListItem('fixture').title('Match Fixtures'),
                            S.documentTypeListItem('player').title('Player Roster'),
                        ])
                ),

            // Academy/Programs Section
            S.listItem()
                .title('Academy Programs')
                .child(
                    S.documentTypeList('program')
                        .title('Training Programs')
                ),

            S.divider(),

            // Filter out what we've already listed so we don't have duplicates if we add new types later
            ...S.documentTypeListItems().filter(
                (listItem) => !['post', 'fixture', 'player', 'program'].includes(listItem.getId() as string)
            ),
        ])
