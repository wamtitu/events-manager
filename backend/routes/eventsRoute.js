const {getEvents, createEvent, getFiveEvents, getOneEvent, getOnlineEvents, updateEvent, deleteEvent, createEventWithTickets} = require('./../controllers/eventsController');
const {register, login} = require('../controllers/authController');
const {getUsers} = require('../controllers/usersController');
const { requireAuth }= require('../controllers/requireAuth');
const { getTickets, createTickets } = require('../controllers/ticketController');
// const Router = require('express').Router();

const routes = (app)=>{
    //events routes
    app.route('/events').get(getEvents).post(createEvent);
    app.route('/events/top5').get(getFiveEvents);
    app.route('/users').get(getUsers)
    app.route('/users/register').post(register)
    app.route('/users/login').post(login)
    app.route('/events/tickets').get(getTickets).post(createTickets)
    app.route('/events/:id').get(getOneEvent).delete(deleteEvent)
    app.route('/events/update/:id').put(updateEvent)
    app.route('/eventsonline').get(getOnlineEvents)



}

module.exports = routes;
