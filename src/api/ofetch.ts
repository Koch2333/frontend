import { ofetch } from "ofetch";

export let apiFetch = ofetch.create({
    baseURL: "https://uapis.cn/",
})