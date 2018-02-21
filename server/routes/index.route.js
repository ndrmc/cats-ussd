import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import ussdRoutes from './ussd.route';
import operationRoutes from './operation.route'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check services health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount ussd routes at /ussd
router.use('/ussd', ussdRoutes)

router.use('/v1/operations', operationRoutes)

export default router;
