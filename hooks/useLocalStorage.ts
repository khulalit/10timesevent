import { useState } from 'react';

const useLocalStorage = (key: string) => {

    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null;

    return JSON.parse(storedValue);
};

export default useLocalStorage;