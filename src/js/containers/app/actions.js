import {
  APP_LOADING,
  APP_ERROR,
  SET_DEFERRED_PROMPT,
  SET_META,
  SET_URL
} from "./constants";

export const isLoading = data => ({
  type: APP_LOADING,
  data
});

export const isError = data => ({
  type: APP_ERROR,
  data
});

export const setDeferredPrompt = data => ({
  type: SET_DEFERRED_PROMPT,
  data
});

export const setUrl = data => ({
  type: SET_URL,
  data
});

export const setMeta = data => ({
  type: SET_META,
  data
});
