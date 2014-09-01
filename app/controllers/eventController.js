/*global module*/
(function () {
    'use strict';
    
    var EventController = (function () {
        
        function EventController() {
            this.events =
                [
                    {
                        "id": 1,
                        "name": "AngularJS Hack Lunch",
                        "description": "Hang out and hack on AngularJS with other developers. There is no agenda and no presentation, just a bunch of developers hacking together on their Angular apps.",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "What is this meeting about?"
                                }
                            ]
                    },
                    {
                        "id": 2,
                        "name": "Idiot Proofing Your Code",
                        "description": "Schedule: 6:00pm: Doors open, drinks + snacks by PubNub 6:30pm: Introduction and Thanks 6:40pm: Jarrod Overson presents Idiot proofing your code",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "What is this meeting about?"
                                }
                            ]
                    },
                    {
                        "id": 3,
                        "name": "Protonight - Pair Programming Hack Session",
                        "description": "Get paired up with a random person to hack on whatever you want for 2 hours! See http://protonight.com for more details.",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "What is this meeting about?"
                                }
                            ]
                    },
                    {
                        "id": 4,
                        "name": "Rendr with Airbnb and Change.org",
                        "description": "Schedule: (Please note talks start at 6:50p) 6:00pm: Doors open, drinks + snacks by PubNub 6:45pm: Introduction and Thanks 6:50pm: Spike Brehm on How To Rendr ",
                        "questions":
                            [
                                {
                                    "name": "John Doe",
                                    "question": "What is this meeting about?"
                                }
                            ]
                    }
                ];
        }
        
        EventController.prototype.getEvents = function (req, res) {
            var holder = JSON.parse(JSON.stringify(this.events));
            
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