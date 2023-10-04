export function saveText(key: string, value: string) {
   const json = {
     text: value,
   };
 
   // Write the text to the JSON file in Local Storage with the specified key
   localStorage.setItem(key, JSON.stringify(json));
 }