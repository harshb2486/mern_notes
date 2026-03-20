import ratelimiter from "../config/upstash.js";

const pageLimiter = async(req, res, next) => {
    try {
        const {success} = await ratelimiter("my-rate-limit");
        if (!success) {
            return res.status(429).json({ error: "Too many requests" });
        }
    } catch (error) {
        next(error);
    }
};

export default pageLimiter;