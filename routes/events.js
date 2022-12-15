/* 
  Event Routes 
  host + /api/events
*/

const { Router } = require("express");
const { jwtValidator } = require("../middlewares/jwt-validator");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const router = Router();

// All routes need JWT validation
router.use(jwtValidator);

router.get("/", getEvents);

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
