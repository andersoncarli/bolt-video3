import express from 'express';
import Video from '../models/Video.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'username');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error: error.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { title, description, url, thumbnail } = req.body;
    const video = new Video({
      title,
      description,
      url,
      thumbnail,
      user: req.userId
    });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: 'Error creating video', error: error.message });
  }
});

export default router;