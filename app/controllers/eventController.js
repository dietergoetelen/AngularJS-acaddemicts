/*global module*/
(function () {
    'use strict';
    
    var EventController = (function () {
        
        function EventController() {
            this.events =
                [
                    {
                        "id": 1,
                        "name": "RealDolmen acADDemICTs training",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "Why don't you use the $scope variable?"
                                }
                            ]
                    },
                    {
                        "id": 2,
                        "name": "RealDolmen acADDemICTs training",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "Why don't you use the $scope variable?"
                                }
                            ]
                    }
                ];
        }
        
        EventController.prototype.getEvents = function (req, res) {
            var holder = this.events;
            
            holder.forEach(function (event) {
                event.numOfQuestions = event.questions.length;
                event.questions = null;
                delete event.questions;
            });
            
            res.json(holder);
        };
        
        EventController.prototype.getEventById = function (req, res) {
            var foundEvent,
                id = +req.params.eventId;
            
            this.events.forEach(function (event) {
                if (id === event.id) {
                    foundEvent = event;
                }
            });
            
            if (foundEvent) {
                res.json(foundEvent);
            } else {
                res.status(404).send('Not found');
            }
        };
        
        EventController.prototype.addEvent = function (req, res) {
            var event = req.body,
                id = +this.events[this.events - 1].id + 1;
            
            event.id = id;
            
            this.events.push(event);
            
            res.status(201).json(event);
        };
        
        EventController.prototype.addQuestion = function (req, res) {
            var question = req.body,
                eventId = req.params.eventId,
                added = false;
            
            this.events.forEach(function (event) {
                if (event.id === eventId) {
                    event.questions.push(question);
                    added = true;
                }
            });
            
            if (added) {
                res.json(question);
            } else {
                res.status(400).send('Adding a question failed');
            }
        };
        
        EventController.prototype.deleteEvent = function (req, res) {
            var holder = this.events,
                i,
                event;
            
            for (i = 0; i < holder.length; i += 1) {
                event = holder[i];
                
                if (event && event.id === +req.params.eventId) {
                    this.events.splice(i, 1);
                }
            }
            
            res.status(200).json(this.events);
        };
        
        return EventController;
        
    }());
    
    module.exports = EventController;
}());