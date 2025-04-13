import { nanoid } from "nanoid";
import URL from "../models/url.model.js";

export async function createUrl(req, res) {
    try {
        if (!req.body.url) {
            return res.status(400).json({ success: false, message: "URL is required" });
        }

        const shortUrlId = nanoid(5);
        await URL.create({
            shortUrlId: shortUrlId,
            redirectUrl: req.body.url,
            visitHistory: [],
            createdBy: req.user._id
        });
        return res.redirect('/url')
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create short URL" });
    }
}

export async function getUrl(req, res) {
    try {
        const shortUrlId = req.params.shortUrlId;
        const url = await URL.findOneAndUpdate(
            { shortUrlId },
            { $push: { visitHistory: { timeStamps: new Date().toISOString() } } },
            { new: true } 
        );

        if (!url) {
            return res.status(404).json({ success: false, message: "URL not found" });
        }

        res.redirect(url.redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch short URL" });
    }
}


export async function deleteUrl(req, res) {
    try {
        const shortUrlId = req.params.shortUrlId;
        const removeUrl = await URL.findOneAndDelete({ shortUrlId });

        if (!removeUrl) {
            return res.status(404).json({ success: false, message: "URL not found" });
        }
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete short URL" });
    }
}
