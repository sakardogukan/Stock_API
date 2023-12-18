"use strict"

/* ---------------- USER CONTROLLER --------------- */

const User = require('../models/user')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ['Users']
            #swagger.sumary = 'List Users'
            #swagger.descriptions = `
                You can send query with endpoint for search[], sort[], page and limit
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>            
            `
        */

        const filters = (req.user.is_superadmin) ? {} : { _id: req.user._id }

        const data = await res.getModelList(User, filters)
        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(data),
        //     data
        // })
        //For React Project:
        res.status(200).send(data)
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ['Users']
            #swagger.sumary = 'Create User'
            #swagger.parameters = {
                in: 'body',
                required: true,
                schema: {
                    "username": "admin",
                    "password": "aA*123456",
                    "email": "admin@site.com",
                    "first_name": "admin",
                    "last_name": "admin",
                }
            }
        */
        // Disallow setting admin/staff:
        req.body.is_staff = false
        req.body.is_superadmin = false

        const data = await User.create(req.body)
        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ['Users']
            #swagger.summary = 'Read a single user'
        */
        const filters = (req.user.is_superadmin) ? { _id: req.params.id } : { _id: req.user._id }

        const data = await User.findOne(filters)
        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ['Users']
            #swagger.sumary = 'Update User'
            #swagger.parameters = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "Aa123456*",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
        const filters = (req.user.is_superadmin) ? { _id: req.params.id } : { _id: req.user._id }

        req.body.is_superadmin = (req.user?.is_superadmin) ? req.body.is_superadmin : false

        const data = await User.updateOne(filters, req.body, { runValidators: true })
        res.status(202).send({
            error: false,
            data,
            new: await User.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ['Users']
            #swagger.summary = 'Delete a single user'
        */
        const filters = (req.user.is_superadmin) ? { _id: req.params.id } : { _id: req.user._id }

        const data = await User.deleteOne(filters)
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount, // false/true
            data
        })
    },

}
