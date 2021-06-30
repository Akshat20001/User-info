const express = require('express')
const District = require('../models/district')
const router = new express.Router()

router.post('/districts', async (req, res) => {
    const district = new District(req.body)

    try {
        await district.save()
        res.status(201).send(district)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/districts', async (req, res) => {
    try {
        const districts = await District.find({})
        res.send(districts)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router