

export const LocalStorageService = {
    // Function to read data from local storage
    getItem: (key: string) => {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    },
  
    // Function to save data to local storage
    setItem: (key: string, data: any) => {
      localStorage.setItem(key, JSON.stringify(data));
    },
  
    // Function to delete data from local storage
    removeItem: (key: string) => {
      localStorage.removeItem(key);
    },
};
