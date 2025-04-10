import { configureStore } from '@reduxjs/toolkit';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import rootReducer from './root.reducer';

const getDocumentId = ()=> {
    if (typeof Office !== 'undefined' && Office.context && Office.context.document) {
        console.log(Office.context.document.url)
        return Office.context.document.url || 'default-office-doc';
    } else {
        console.log('Office.js not available, using default identifier');
        return 'default-browser-session';
    }
}
let storage = getDocumentId();
let storageType;

storage === 'default-browser-session' ? storageType = sessionStorage : storageType = localStorage;


// Create a unique key based on the document identifier
const PERSIST_CONFIG = {
    key: `root${getDocumentId()}`, // Unique key per document or browser session
    storage: storageType,
};

export const DEFAULT_MIDDLEWARE_CONFIG = {
    serializableCheck: {
        // redux-persist actions are ignored according to the documentation: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
};

export const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(DEFAULT_MIDDLEWARE_CONFIG),
});

export default store;
