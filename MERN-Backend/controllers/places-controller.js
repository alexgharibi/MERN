const HttpError = require("../models/http-error");
const { v4 } = require("uuid");

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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new HttpError("couldn't find", 404);
    return next(error);
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userrId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userrId;
  });

  if (!place) {
    const error = new HttpError("couldn't find", 404);
    return next(error);
  }
  res.json({ place });
};
const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: v4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace);
  res.status(201).json({ place: createdPlace });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
