const express = require('express');
const createError = require('http-errors');

const Ingredient = require('../../models/ingredient');
const ingredientService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new Ingredient(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return ingredientService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return ingredientService.findAll()
        .populate('allergenId')
        .then( ingredients => {
            res.json(ingredients);
        });
};

exports.findOne = (req, res, next) => {
    return ingredientService.findOne(req.params.id)
        .populate('allergenId')
        .then( ingredient => {
            if (!ingredient) {
                return next(new createError.NotFound("A hozzávaló nem található!"));
            }
            return res.json(ingredient);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Ingredient(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return ingredientService.update(req.params.id, req.body)
        .then(ingredient => {
            res.json(ingredient);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return ingredientService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
