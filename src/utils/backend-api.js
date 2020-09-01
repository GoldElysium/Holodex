import axios from "axios";

export default {
    vtuberChannels(limit = 100, offset = 0) {
        return axios_instance.get(
            `/channels?type=vtuber&limit=${limit}&offset=${offset}&sort=subscriber_count&order=desc`
        );
    },
    subberChannels(limit = 100, offset = 0) {
        return axios_instance.get(
            `/channels?type=subber&limit=${limit}&offset=${offset}&sort=subscriber_count&order=desc`
        );
    },
    videos(channel_id, limit = 30, offset = 0) {
        return axios_instance.get(`/videos?channel_id=${channel_id}&limit=${limit}&offset=${offset}`);
    },
    live() {
        return axios_instance.get(`/live`);
    },
    channel(channel_id) {
        return axios_instance.get(`/channels/${channel_id}`);
    },
    video(id) {
        return axios_instance.get(`/videos/${id}`);
    },
    clips(channel_id, limit = 30, offset = 0) {
        return axios_instance.get(`/clips?channel_id=${channel_id}&include_channel=1&limit=${limit}&offset=${offset}`);
    },
    mentions(channel_id, limit = 30, offset = 0) {
        return axios_instance.get(`/mentions/channel/${channel_id}?include_channel=1&limit=${limit}&offset=${offset}`);
    },
};

export const axios_instance = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? `http://mythra.local:2434/v1`
            : `/api/v1`,
    timeout: 50000,
});
