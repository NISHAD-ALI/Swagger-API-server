const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *        - user
 *     summary: Login endpoint      USER
 *     description: Endpoint for user login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.post('/user/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'example' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

/**
 * @swagger
 * /user/signup:
 *   post:
 *     tags:
 *        - user
 *     summary: Signup endpoint    USER
 *     description: Endpoint for user signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful signup
 *       400:
 *         description: Bad request, user already exists or invalid data
 */
router.post('/user/signup', (req, res) => {
    const { username, password, email } = req.body;
    if (username && password && email) {
        res.status(200).json({ message: 'Signup successful' });
    } else {
        res.status(400).json({ message: 'Bad request' });
    }
});

/**
 * @swagger
 * /user/donationList:
 *   get:
 *     tags:
 *        - user
 *     summary: Get list of donation schemes
 *     description: Retrieve a list of donation schemes, each containing a target amount, a name, and a photo.
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad request, user already exists or invalid data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   targetAmount:
 *                     type: integer
 *                   photo:
 *                     type: string
 *     security:
 *       - bearerAuth: []
 */
router.get('/user/donationList', (req, res) => {
    
    const donationSchemes =  [
        {
            id: 1,
            name: 'Education Fund',
            targetAmount: 5000,
            photo: 'https://example.com/education-fund.jpg'
        },
        {
            id: 2,
            name: 'Medical Fund',
            targetAmount: 10000,
            photo: 'https://example.com/medical-fund.jpg'
        },
       
    ];
    res.json(donationSchemes);
});

/**
 * @swagger
 * /user/editProfile:
 *   put:
 *     tags:
 *        - user
 *     summary: Update user profile
 *     description: Endpoint for updating user profile 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *                 password:
 *                   type: string
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.put('/user/editProfile', (req, res) => {
    const { email, phone, password, address } = req.body;
    res.json({ email, phone, password, address });
});

/**
 * @swagger
 * /user/addPost:
 *   post:
 *     tags:
 *        - user
 *     summary: Add a new post
 *     description: Endpoint for adding a new post with images, video, description, and details.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               video:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post added successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('/user/addPost', (req, res) => {
    const { images, video, description, details } = req.body;
    res.status(200).json({ message: 'Post added successfully' });
});


/**
 * @swagger
 * /user/post/:Id:
 *   get:
 *     tags:
 *        - user
 *     summary: Get a single post by ID
 *     description: Endpoint for retrieving a single post by its ID.
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: ID of the post to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 postId:
 *                   type: integer
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                 video:
 *                   type: string
 *                 description:
 *                   type: string
 *                 details:
 *                   type: string
 *       404:
 *         description: Post not found
 */
router.get('/user/post/:Id', (req, res) => {
    const { Id } = req.params;
    const post = {
        postId: Id,
        images: ['image1.jpg', 'image2.jpg'],
        video: 'video.mp4',
        description: 'Post description',
        details: 'Post details'
    };
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});




module.exports = router;
