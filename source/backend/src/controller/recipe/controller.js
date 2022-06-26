const express = require('express');
const createError = require('http-errors');

const Recipe = require('../../models/recipe');
const recipeService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new Recipe(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return recipeService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return recipeService.findAll()
        .then( recipes => {
            res.json(recipes);
        });
};

exports.findOne = (req, res, next) => {
    return recipeService.findOne(req.params.id)
    .populate('typeId')
    .populate('ingredients')
        .then( recipe => {
            if (!recipe) {
                return next(new createError.NotFound("A recept nem található!"));
            }
            return res.json(recipe);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Recipe(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return recipeService.update(req.params.id, req.body)
        .then(recipe => {
            res.json(recipe);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return recipeService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
