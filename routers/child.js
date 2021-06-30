const express = require('express')
const Child = require('../models/child')
const router = new express.Router()

router.post('/childs', async (req, res) => {
    const child = new Child(req.body)

    try {
        await child.save()
        res.status(201).send(child)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/childs', async (req, res) => {
    try {
        const childs = await Child.find({})
        res.send(childs)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router