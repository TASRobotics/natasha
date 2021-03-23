import express from 'express';
import config from 'config';
import User from '../models/User';
import Message from '../models/Message';
import Donation from '../models/Donation';

const router = express.Router();

// @route    GET api/admin
// @desc     Get all users and messages
// @access   Private
router.get('/', async (req, res) => {
  const adminKey = req.header('admin-key');
  if (adminKey === config.get('adminKey')) {
    try {
      const users = await User.find().sort({ date: -1 });
      const messages = await Message.find().sort({ date: -1 });
      const donations = await Donation.find().sort({ date: -1 });
      res.json({ users, messages, donations });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    return res.status(400).json({ errors: [{ msg: 'Wrong admin key' }] });
  }
});

export default router;
