import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(item));
          } else {
            setItem(JSON.parse(localStorageItem));
          }
          setError(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    });

    const saveItem = (updatedItem) => {
      try {
        const stringifiedItem = JSON.stringify(updatedItem)
        localStorage.setItem(itemName, stringifiedItem);
        setItem(updatedItem);
        setError(false);
      } catch (error) {
        setError(error);
      }
    }

    return {
      item,
      saveItem,
      loading,
      error,
    }
  }

  export { useLocalStorage };
