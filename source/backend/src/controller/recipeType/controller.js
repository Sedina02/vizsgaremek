const express = require('express');
const createError = require('http-errors');

const RecipeType = require('../../models/recipeType');
const recipeTypeService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new RecipeType(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return recipeTypeService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return recipeTypeService.findAll()
        .then( recipeTypes => {
            res.json(recipeTypes);
        });
};

exports.findOne = (req, res, next) => {
    return recipeTypeService.findOne(req.params.id)
        .then( recipeType => {
            if (!recipeType) {
                return next(new createError.NotFound("A recept típus nem található!"));
            }
            return res.json(recipeType);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new RecipeType(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return recipeTypeService.update(req.params.id, req.body)
        .then(recipeType => {
            res.json(recipeType);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return recipeTypeService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
