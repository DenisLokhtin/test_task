import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState, setGlobalState}: {news: {}[]; profile: {}[]; newsTitle: string; newsBody: string; localNews: {}[]} | any  = createGlobalState({
    news: [],
    localNews: [],
    profile: [],
    newsTitle: '',
    newsBody: '',
});

export { useGlobalState, setGlobalState };