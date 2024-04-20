const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const communityAdmin = require('./routes/communityAdminRoutes');
const volunteerRoute = require('./routes/volunteerRoutes')

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'helpinghands',
            version: '1.0.0',
            description: 'API Description',
        },
    },
    apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/user', userRoute);
app.use('/communityAdmin', communityAdmin);
app.use('/volunteer', volunteerRoute);
app.listen(3000, () => {
    console.log('Server started');
});
