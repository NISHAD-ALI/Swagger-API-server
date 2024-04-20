const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /volunteers/signup:
 *   post:
 *     tags:
 *        - volunteers
 *     summary: Sign up a new volunteer
 *     description: Endpoint for signing up a new volunteer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: Volunteer signed up successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/volunteers/signup', (req, res) => {
    const { email, username, password } = req.body;
    res.status(201).json({ email, username });
});

/**
 * @swagger
 * /volunteers/login:
 *   post:
 *     tags:
 *        - volunteers
 *     summary: Volunteer login
 *     description: Endpoint for volunteer login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized, invalid credentials
 */
router.post('/volunteers/login', (req, res) => {
    const { email, password } = req.body;
        res.status(200).json({ message: 'Login successful' });
});

/**
 * @swagger
 * /events/schedule:
 *   post:
 *     tags:
 *        - volunteers
 *     summary: Schedule an event 
 *     description: Endpoint for scheduling an event .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *               eventId:
 *                 type: integer
 *               volunteerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event scheduled successfully for the volunteer
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/volunteers/events/schedule', (req, res) => {
    const { dateTime, eventId, volunteerId } = req.body;
    res.status(201).json({ dateTime, eventId, volunteerId });
});

/**
 * @swagger
 * /volunteers/events:
 *   get:
 *     tags:
 *        - volunteers
 *     summary: Get all events
 *     description: Endpoint for retrieving all events from the event page.
 *     responses:
 *       200:
 *         description: Events retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   eventName:
 *                     type: string
 *                   volunteers:
 *                     type: array
 *                     items:
 *                       type: string
 *                   details:
 *                     type: string
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *                   video:
 *                     type: string
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.get('/volunteers/events', (req, res) => {
    const events = [
        {
            eventName: 'Event 1',
            volunteers: ['Volunteer 1', 'Volunteer 2', 'Volunteer 3'],
            details: 'Details of Event 1',
            images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
            video: 'video1.mp4'
        },
        {
            eventName: 'Event 2',
            volunteers: ['Volunteer 4', 'Volunteer 5'],
            details: 'Details of Event 2',
            images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
            video: 'video2.mp4'
        }
    ];
    res.json(events);
});

/**
 * @swagger
 * /volunteers/events/:Id:
 *   get:
 *     tags:
 *        - volunteers
 *     summary: Get an event by ID
 *     description: Endpoint for retrieving an individual event by its ID.
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: ID of the event to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 eventName:
 *                   type: string
 *                 volunteers:
 *                   type: array
 *                   items:
 *                     type: string
 *                 details:
 *                   type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                 video:
 *                   type: string
 *       404:
 *         description: Event not found
 */
router.get('/volunteers/events/:Id', (req, res) => {
    const { eventId } = req.params;
    const event = {
        eventName: 'Event 1',
        volunteers: ['Volunteer 1', 'Volunteer 2', 'Volunteer 3'],
        details: 'Details of Event 1',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        video: 'video1.mp4'
    };
    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ message: 'Event not found' });
    }
});
/**
 * @swagger
 * /volunteers/adminDetails:
 *   get:
 *     tags:
 *        - volunteers
 *     summary: Get details of an admin
 *     description: Endpoint for retrieving details of an admin, including image, name, and community memberships.
 *     responses:
 *       200:
 *         description: Admin details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: string
 *                 name:
 *                   type: string
 *                 memberAt:
 *                   type: array
 *                   items:
 *                     type: string
 *                 organiserAt:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/volunteers/adminDetails', (req, res) => {
    const adminDetails = {
        image: 'admin.jpg',
        name: 'Admin Name',
        memberAt: ['Community 1', 'Community 2'],
        organiserAt: ['Community 3', 'Community 4']
    };
    res.status(200).json(adminDetails);
});
/**
 * @swagger
 * /volunteers/profile:
 *   put:
 *     tags:
 *        - volunteers
 *     summary: Update volunteer profile
 *     description: Endpoint for updating volunteer profile.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *               blood:
 *                 type: string
 *               address:
 *                 type: string
 *               aboutMe:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Volunteer profile updated successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.put('/volunteers/profile', (req, res) => {
    const { name, email, age, blood, address, aboutMe, password } = req.body;
    res.status(200).json({ name, email, age, blood, address, aboutMe, password });
});

/**
 * @swagger
 * /volunteers/posts:
 *   get:
 *     tags:
 *        - volunteers
 *     summary: Get all posts
 *     description: Endpoint for retrieving all posts.
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *                   video:
 *                     type: string
 */
router.get('/volunteers/posts', (req, res) => {
    const posts = [
        {
            name: 'Post 1',
            images: ['image1.jpg', 'image2.jpg','image3.jpg'],
            video: 'video1.mp4'
        },
        {
            name: 'Post 2',
            images: ['image3.jpg', 'image4.jpg','image3.jpg'],
            video: 'video2.mp4'
        }
    ];
    res.status(200).json(posts);
});
/**
 * @swagger
 * /volunteers/communities:
 *   get:
 *     tags:
 *        - volunteers
 *     summary: Get all communities
 *     description: Endpoint for retrieving all communities.
 *     responses:
 *       200:
 *         description: Communities retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   about:
 *                     type: string
 *                   numberOfVolunteers:
 *                     type: integer
 *                   numberOfHoursServed:
 *                     type: integer
 */
router.get('/volunteers/communities', (req, res) => {
    const communities = [
        {
            name: 'Community 1',
            about: 'About Community 1',
            numberOfVolunteers: 100,
            numberOfHoursServed: 5000
        },
        {
            name: 'Community 2',
            about: 'About Community 2',
            numberOfVolunteers: 50,
            numberOfHoursServed: 3000
        }
    ];
    res.status(200).json(communities);
});
/**
 * @swagger
 * volunteers/enroll:
 *   post:
 *     tags:
 *        - volunteers
 *     summary: Enroll a volunteer to a community
 *     description: Endpoint for enrolling a volunteer to a community.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               volunteerId:
 *                 type: integer
 *               communityId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Volunteer enrolled to the community successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('volunteers/enroll', (req, res) => {
    const { volunteerId, communityId } = req.body;
    res.status(201).json({ volunteerId, communityId });
});

module.exports = router;