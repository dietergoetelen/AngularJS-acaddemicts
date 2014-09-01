/*global module, require*/
(function () {
    'use strict';
    
    var EventController = require('./controllers/eventController'),
        eventController = new EventController();
    
    module.exports = function (app) {
        
        /*
            get /api/events
            get /api/events/:eventId
            
            post /api/events
            post /api/events/:eventId/questions
            
            put /api/events/:eventId
            
            delete /api/events/:eventId
        */
        
        app.get('/api/events', function (req, res) { eventController.getEvents(req, res); });
        app.get('/api/events/:eventId', function (req, res) { eventController.getEventById(req, res); });
        
        app.post('/api/events', function (req, res) { eventController.addEvent(req, res); });
        app.post('/api/events/:eventId/questions', function (req, res) { eventController.addQuestion(req, res); });
        
        app.delete('/api1/events/:eventId', function (req, res) { eventController.deleteEvent(req, res); });
        
        app.get('*', function (req, res) {
            res.sendfile('public/index.html');
        });
    };
}());