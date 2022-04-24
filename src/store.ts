import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { settingsReducers } from "./slice/settings";

const persistConfig = { key: "persist", version: 0.1, storage, blacklist: [] };

// 複数の reducer を束ねる
const rootReducer = combineReducers({
	// --(a)
	settings: settingsReducers,
	// reducer が増えたら足していく
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const middlewareList = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	logger,
];

// グローバルオブジェクトとして、store を作成する。
const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewareList,
});

export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// import store from './Store' とアクセスできるように default として定義する
export default store;
