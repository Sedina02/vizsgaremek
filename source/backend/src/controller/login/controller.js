const express = require('express');
const createError = require('http-errors');

const User = require('../../models/user');
const userService = require('./service');

// Create a new person.
exports.create = (req, res, next) => {
    const validationErrors = new User(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return userService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return userService.findAll()
        .then( users => {
            res.json(users);
        });
};

exports.findOne = (req, res, next) => {
    return userService.findOne(req.params.id)
        .then( user => {
            if (!user) {
                return next(new createError.NotFound("A felhasználó nem található!"));
            }
            return res.json(user);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new User(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return userService.update(req.params.id, req.body)
        .then(user => {
            res.json(user);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return userService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
