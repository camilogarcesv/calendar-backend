const { response } = require("express");

const getEvents = (req, res = response) => {
  return res.status(201).json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = (req, res = response) => {
  return res.status(201).json({
    ok: true,
    msg: "createEvent",
  });
};

const updateEvent = (req, res = response) => {
  const { id } = req.body;

  return res.status(201).json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = (req, res = response) => {
  const { id } = req.body;

  return res.status(201).json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
