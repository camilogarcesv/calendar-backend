/* 
  Event Routes 
  host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/fields-validators");
const { jwtValidator } = require("../middlewares/jwt-validator");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const router = Router();

// All routes need JWT validation
router.use(jwtValidator);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    fieldValidator,
  ],
  createEvent
);

router.put(
  "/:id",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    fieldValidator,
  ],
  updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;
