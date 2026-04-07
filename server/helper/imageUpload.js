// import { Router } from 'express';
// const router = Router();
// import { ImageUpload } from '../models/imageUpload.js';

const express = require('express');
const router = express.Router();

const ImageUpload = require('../models/imageUpload.js')

router.get(`/`, async (req, res) => {

    try {

        const imageUploadList = await ImageUpload.find();

        // if (!imageUploadList) {
        //     res.status(500).json({ success: false })
        // }

        return res.status(200).json(imageUploadList);
        
    } catch (error) {
        // res.status(500).json({ success: false })
        return res.status(500).json({ success: false, error: error.message });
    }
});

router.delete('/deleteAllImages', async (req, res) => {
    try {
    const images = await ImageUpload.find();
    // let deletedImage;
     let deletedImage = null;

    // if (images.length !== 0) {
     if (images.length > 0) {
        for (const image of images) {
            deletedImage = await ImageUpload.findByIdAndDelete(image.id);
        }
    }

    // res.json(deletedImage)
      res.json({ success: true, deletedImage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;