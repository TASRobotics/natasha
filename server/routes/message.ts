import express from 'express';
import { check, validationResult } from 'express-validator';
import Message from '../models/Message';

const router = express.Router();

// @route    POST api/message
// @desc     Send a message
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('content', 'Content is required').exists()
  ],
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, content } = req.body;

    try {
      const message = new Message({
        email,
        content
      });

      await message.save();

      res.json({ message });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

export default router;
