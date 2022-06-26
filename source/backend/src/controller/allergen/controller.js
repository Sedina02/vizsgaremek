const express = require('express');
const createError = require('http-errors');

const Allergen = require('../../models/allergen');
const allergenService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new Allergen(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return allergenService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return allergenService.findAll()
        .then( allergens => {
            res.json(allergens);
        });
};

exports.findOne = (req, res, next) => {
    return allergenService.findOne(req.params.id)
        .then( allergen => {
            if (!allergen) {
                return next(new createError.NotFound("Az allergén nem található!"));
            }
            return res.json(allergen);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Allergen(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return allergenService.update(req.params.id, req.body)
        .then(allergen => {
            res.json(allergen);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return allergenService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
