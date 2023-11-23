// Import the Api object from the BEXIS2 Core UI library
import { Api } from "@bexis2/bexis2-core-ui";
// Assume: You have defined an EntryModel
import type { EntryModel } from "../models/entryModels";

// Function to fetch an entry by ID
export const fetchEntryById = async (entryId: string) => {
  try {
    // Make the actual API call to fetch an entry
    const response = await Api.get(`/api/entries/${entryId}`);
    return response.data; // Adjust this according to your API response
  } catch (error) {
    console.error(`Error fetching entry with ID ${entryId}:`, error);
    throw error; // Adjust this as needed for error handling
  }
};

// ChatService is a collection of methods related to chat operations
export const ChatService = {
  // Function to create an entry
  createEntry: async (entry: EntryModel) => {
    try {
      // Send a POST request to the server's /api/entries endpoint with the entry data
      const response = await Api.post('/api/entries', entry);

      // Return the data from the server response (customize as needed)
      return response.data;
    } catch (error) {
      // Handle errors, log them, and optionally rethrow for further handling
      console.error(error);
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
      const response = await Api.delete(`/api/entries/${entryId}`, {});
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

// Export EntryService
export { ChatService as EntryService };
