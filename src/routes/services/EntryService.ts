import { Api } from "@bexis2/bexis2-core-ui";
import type { EntryModel } from "../models/entryModels";
import { LocalStorageService } from "../tests/LokaleDatenspeicherung";

// EntryService is a collection of methods related to entry operations
export const EntryService = {
  
  // Function to create an entry
  createEntry: async (entry: EntryModel, userId: string, curatorId: string) => {
    try {
      // Set the userId and curatorId in the entry
      entry.userId = userId;
      entry.curatorId = curatorId;

      // Send a POST request to the server's /api/entries endpoint with the entry data
      const response = await Api.post('/api/entries', entry);
      
      // Return the data from the server response
      return response.data;
    } catch (error) {
      console.error(error);

      // If the API is unreachable, save the data locally
      const localEntries = LocalStorageService.getItem('localEntries') || [];
      localEntries.push({ entry, userId, curatorId });
      LocalStorageService.setItem('localEntries', localEntries);

      // Throw the error for further handling
      throw error;
    }
  },

  // Function to get all entries
  getAllEntries: async () => {
    try {
      const response = await Api.get('/api/entries');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Function to get an entry by its identifier
  getEntryById: async (entryId: string) => {
    try {
      const response = await Api.get(`/api/entries/${entryId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Function to update an entry
  updateEntry: async (entryId: string, updatedEntry: EntryModel) => {
    try {
      const response = await Api.put(`/api/entries/${entryId}`, updatedEntry);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Function to delete an entry
  deleteEntry: async (entryId: string) => {
    try {
      // Note: We pass an empty object as the second argument to not send any data
      const response = await Api.delete(`/api/entries/${entryId}`, {});
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
