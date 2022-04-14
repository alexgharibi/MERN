const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "alex",
    description: "hi",
    locartion: {
      lat: 2454252525,
      lng: -3535535355,
    },
    address: "add",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("couldn't find");
    error.code = 404;
    return next(error);
  }
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userrId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userrId;
  });

  if (!place) {
    const error = new Error("couldn't find");
    error.code = 404;
    return next(error);
  }
  res.json({ place });
});

module.exports = router;
