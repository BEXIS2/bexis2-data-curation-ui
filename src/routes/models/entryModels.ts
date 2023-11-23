
// Definition of the EntryModel interface
export interface EntryModel {
    id: string;
    title: string;
    content: string;
    userId: string;
    curatorId: string;
    timestamp: string;
}

// Definition of the NoteModel interface (if relevant)
export interface NoteModel {
    id: string;
    entryId: string;
    content: string;
    // ... other properties of your note ...
}

// Sample entry for reference
// const sampleEntry: EntryModel = {
//   id: '123',
//   title: 'Sample Title',
//   content: 'Here is the content of the entry.',
//   userId: 'user123',
//   curatorId: 'curator456',
//   timestamp: '2023-11-23T12:34:56', // Sample timestamp
// };


