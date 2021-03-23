import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth';
import config from 'config';
import { check, validationResult } from 'express-validator';
import User from '../models/User';

const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 })
  ],
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      (user as any).password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '30 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    PATCH api/users
// @desc     Edit user
// @access   Private
router.patch('/', auth, async (req: any, res: any) => {
  // const { bedwars, league, valorant, brawlstars, csgo } = req.body;
  // const profileFields = {
  //   user: req.user.id,
  //   bedwars,
  //   csgo,
  //   valorant,
  //   league,
  //   brawlstars
  // };
  // try {
  //   let user = await User.findOneAndUpdate(
  //     { _id: req.user.id },
  //     { $set: profileFields },
  //     { new: true }
  //   );
  //   res.json(user);
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send('Server Error');
  // }
});

export default router;
