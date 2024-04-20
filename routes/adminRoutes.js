const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /admin/login:
 *   post:
 *     tags:
 *        - admin
 *     summary: Admin login
 *     description: Endpoint for admin login.
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
router.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
        res.status(200).json({ message: 'Login successful' });
});

/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     tags:
 *        - admin
 *     summary: View admin dashboard
 *     description: Endpoint for viewing the admin dashboard.
 *     responses:
 *       200:
 *         description: Admin dashboard retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 numberOfDonations:
 *                   type: integer
 *                 numberOfCommunities:
 *                   type: integer
 *                 numberOfMembers:
 *                   type: integer
 *                 numberOfEvents:
 *                   type: integer
 */
router.get('/admin/dashboard', (req, res) => {
    const adminDashboard = {
        numberOfDonations: 100,
        numberOfCommunities: 10,
        numberOfMembers: 500,
        numberOfEvents: 50
    };

    res.status(200).json(adminDashboard);
});
/**
 * @swagger
 * /admin/communities:
 *   get:
 *     tags:
 *        - admin
 *     summary: Get all communities
 *     description: Endpoint for retrieving all communities with details.
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
 *                   adminName:
 *                     type: string
 *                   numberOfVolunteers:
 *                     type: integer
 *                   numberOfEventsConducted:
 *                     type: integer
 *                   status:
 *                     type: string
 */
router.get('/admin/communities', (req, res) => {
    const communities = [
        {
            name: 'Community 1',
            adminName: 'Admin 1',
            numberOfVolunteers: 50,
            numberOfEventsConducted: 10,
            status: 'Active'
        },
        {
            name: 'Community 2',
            adminName: 'Admin 2',
            numberOfVolunteers: 30,
            numberOfEventsConducted: 5,
            status: 'Inactive'
        }
    ];
    res.status(200).json(communities);
});
/**
 * @swagger
 * admin/communities/block/:id:
 *   put:
 *     tags:
 *        - admin
 *     summary: Block a community
 *     description: Endpoint for blocking a community.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               communityId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Community blocked successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.put('/admin/communities/block/:id', (req, res) => {
    const { communityId } = req.body;
    res.status(200).json({ communityId });
});

/**
 * @swagger
 * /admin/donationList:
 *   get:
 *     tags:
 *        - admin
 *     summary: Get all donation lists
 *     description: Endpoint for retrieving all donation lists.
 *     responses:
 *       200:
 *         description: Donation lists retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   status:
 *                     type: string
 */
router.get('/admin/donationList', (req, res) => {
    const donationLists = [
        {
            name: 'Donation 1',
            amount: 1000,
            status: 'Pending'
        },
        {
            name: 'Donation 2',
            amount: 500,
            status: 'Completed'
        }
    ];
    res.status(200).json(donationLists);
});

/**
 * @swagger
 * admin/deleteDonation/:id:
 *   delete:
 *     tags:
 *        - admin
 *     summary: Delete a donation
 *     description: Endpoint for deleting an individual donation.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the donation to delete
 *     responses:
 *       204:
 *         description: Donation deleted successfully
 *       404:
 *         description: Donation not found
 */
router.delete('admin/deleteDonation/:id', (req, res) => {
    const { id } = req.params;
    res.status(204).send();
});
/**
 * @swagger
 * admin/addDonation:
 *   post:
 *     tags:
 *        - admin
 *     summary: Add a new donation
 *     description: Endpoint for adding a new donation.
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
 *                 format: email
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               contactName:
 *                 type: string
 *               targetAmount:
 *                 type: number
 *               type:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Donation added successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
router.post('admin/addDonation', (req, res) => {
    const { name, email, startDate, endDate, contactName, targetAmount, type } = req.body;
    res.status(201).json({
        name,
        email,
        startDate,
        endDate,
        contactName,
        targetAmount,
        type
    });
});

module.exports = router;