// entry.ts

export interface EntryType {
   id: number;
   name: string;
   color: string;
 }
 
 export function saveText(value: string, entry: EntryType) {
   const text = value;
   const json = {
     text: text,
   };
 
   // Write the text to the JSON file in Local Storage
   localStorage.setItem('entry.json', JSON.stringify(json));
 
   // Also save the text in Local Storage
   localStorage.setItem('savedText', JSON.stringify(entry));
 }
 