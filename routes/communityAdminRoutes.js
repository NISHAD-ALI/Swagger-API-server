const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /communityAdmin/register:
 *   post:
 *     tags:
 *        - community
 *     summary: Register a community admin
 *     description: Endpoint for registering a new community.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               communityName:
 *                 type: string
 *     responses:
 *       201:
 *         description: Community admin registered successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/communityAdmin/register', (req, res) => {
    const { phone, email, password, communityName } = req.body;
    res.status(201).json({ phone, email, communityName });
});

/**
 * @swagger
 * /communityAdmin/login:
 *   post:
 *     tags:
 *        - community  
 *     summary: User login
 *     description: Endpoint for community admin login using email and password.
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
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized, incorrect email or password
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/communityAdmin/login', (req, res) => {
    const { email, password } = req.body;
    const validEmail = 'example@example.com';
    const validPassword = 'password';

    if (email === validEmail && password === validPassword) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Unauthorized, incorrect email or password' });
    }
});
/**
 * @swagger
 * /communityAdmin/home:
 *   get:
 *     tags:
 *        - community
 *     summary: Get home page content
 *     description: Endpoint for retrieving home page content including events and posts.
 *     responses:
 *       200:
 *         description: Home page content retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 events:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       eventId:
 *                         type: integer
 *                       image:
 *                         type: string
 *                       header:
 *                         type: string
 *                       description:
 *                         type: string
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       postId:
 *                         type: integer
 *                       image:
 *                         type: string
 *                       header:
 *                         type: string
 *                       description:
 *                         type: string
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.get('/communityAdmin/home', (req, res) => {

    const events = [
        {
            eventId: 1,
            image: 'event1.jpg',
            header: 'Event 1',
            description: 'Description of event 1'
        },
        {
            eventId: 2,
            image: 'event2.jpg',
            header: 'Event 2',
            description: 'Description of event 2'
        }
    ];

    const posts = [
        {
            postId: 1,
            image: 'post1.jpg',
            header: 'Post 1',
            description: 'Description of post 1'
        },
        {
            postId: 2,
            image: 'post2.jpg',
            header: 'Post 2',
            description: 'Description of post 2'
        }
    ];


    const homePageContent = {
        events,
        posts
    };

    res.json(homePageContent);
});

/**
 * @swagger
 * /communityAdmin/events:
 *   get:
 *     tags:
 *        - community
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
router.get('/communityAdmin/events', (req, res) => {
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
 * /communityAdmin/events/:Id:
 *   get:
 *     tags:
 *        - community
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
router.get('/communityAdmin/events/:Id', (req, res) => {
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
 * /communityAdmin/hireVolunteers:
 *   get:
 *     tags:
 *        - community
 *     summary: Get hire volunteers page
 *     description: Endpoint for retrieving the hire volunteers page, containing images of volunteers and their names.
 *     responses:
 *       200:
 *         description: Hire volunteers page retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name of volunteer:
 *                     type: string
 *                   image:
 *                     type: string
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.get('/communityAdmin/hireVolunteers', (req, res) => {
    const volunteers = [
        {
            name: 'Volunteer 1',
            image: 'volunteer1.jpg'
        },
        {
            name: 'Volunteer 2',
            image: 'volunteer2.jpg'
        },
        {
            name: 'Volunteer 3',
            image: 'volunteer3.jpg'
        }
    ];
    res.json(volunteers);
});

/**
 * @swagger
 * /communityAdmin/volunteers/:volunteerId:
 *   get:
 *     tags:
 *        - community
 *     summary: Get individual volunteer by ID
 *     description: Retrieve details of a volunteer by their ID.
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: ID of the volunteer to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Volunteer details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 image:
 *                   type: string
 *       404:
 *         description: Volunteer not found
 */
router.get('/communityAdmin/volunteers/:volunteerId', (req, res) => {
    const { volunteerId } = req.params;
    const volunteers = {
        1: { name: 'Volunteer 1', image: 'volunteer1.jpg' },
        2: { name: 'Volunteer 2', image: 'volunteer2.jpg' },
        3: { name: 'Volunteer 3', image: 'volunteer3.jpg' }
    };
    const volunteer = volunteers[volunteerId];
    if (volunteer) {
        res.json(volunteer);
    } else {
        res.status(404).json({ message: 'Volunteer not found' });
    }
});
/**
 * @swagger
 * /communityAdmin/scheduleInterview:
 *   post:
 *     tags:
 *        - community
 *     summary: Schedule an interview
 *     description: Endpoint for scheduling an interview with a volunteer for a community.
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
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Interview scheduled successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/communityAdmin/scheduleInterview', (req, res) => {
    const { volunteerId, communityId, dateTime } = req.body;
    res.status(201).json({ volunteerId, communityId, dateTime });
});

/**
 * @swagger
 * /communityAdmin/volunteersList:
 *   get:
 *     tags:
 *        - community
 *     summary: Get list of all volunteers
 *     description: Endpoint for retrieving a list of all volunteers.
 *     responses:
 *       200:
 *         description: Volunteers list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   image:
 *                     type: string
 *                   eventsParticipated:
 *                     type: integer
 *                   status:
 *                     type: boolean
 *
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.get('/communityAdmin/volunteersList', (req, res) => {
    const volunteers = [
        {
            name: 'Volunteer 1',
            image: 'volunteer1.jpg',
            eventsParticipated: 5,
            status: true
        },
        {
            name: 'Volunteer 2',
            image: 'volunteer2.jpg',
            eventsParticipated: 10,
            status: false
        },
        {
            name: 'Volunteer 3',
            image: 'volunteer3.jpg',
            eventsParticipated: 3,
            status: true
        }
    ];
    res.json(volunteers);
});
/**
 * @swagger
 * /communityAdmin/volunteersList/block/:Id:
 *   put:
 *     tags:
 *        - community
 *     summary: Block/Unblock a volunteer
 *     description: Endpoint for blocking or unblocking a volunteer based on their ID.
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: ID of the volunteer to block or unblock
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blocked:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Volunteer status updated successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.put('/communityAdmin/volunteersList/block/:Id', (req, res) => {
    const { volunteerId } = req.params;
    const { blocked } = req.body;
    res.status(200).json({ volunteerId, blocked });
});

/**
 * @swagger
 *  /communityAdmin/volunteersList/teminate/:Id:
 *   delete:
 *     tags:
 *        - community
 *     summary: Terminate a volunteer
 *     description: Endpoint for terminating a volunteer based on their ID.
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: ID of the volunteer to terminate
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Volunteer terminated successfully
 *       404:
 *         description: Volunteer not found
 */
router.delete('/communityAdmin/volunteersList/teminate/:Id', (req, res) => {
    const volunteerExists = true;
    if (volunteerExists) {
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Volunteer not found' });
    }
});

/**
 * @swagger
 * /communityAdmin/createEvents:
 *   post:
 *     tags:
 *        - community
 *     summary: Create a new event
 *     description: Endpoint for creating a new event.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               numberOfVolunteers:
 *                 type: integer
 *               details:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               video:
 *                 type: string
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/communityAdmin/createEvents', (req, res) => {
    const { name, numberOfVolunteers, details, images, video, dateTime } = req.body;
    res.status(201).json({ name, numberOfVolunteers, details, images, video, dateTime });
});

/**
 * @swagger
 * /communityAdmin/createPosts:
 *   post:
 *     tags:
 *        - community
 *     summary: Create a new post
 *     description: Endpoint for creating a new post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               communityName:
 *                 type: string
 *               details:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               video:
 *                 type: string
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/communityAdmin/createPosts', (req, res) => {
    const { name, communityName, details, images, video, dateTime } = req.body;
    res.status(201).json({ name, communityName, details, images, video, dateTime });
});


module.exports = router;