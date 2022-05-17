import client from "./client";

const send = (message, userId) => client.post("/messages", { message, userId });

const get = () => client.get(`/messages`);
export default { send, get };
