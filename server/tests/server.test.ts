import request from 'supertest'
import app from '../src/app.js'
import "dotenv/config"
import parseJson from './utils.js'

describe('/api/assistant', () => {
    let server: any

    beforeAll(() => {
        server = app.listen(process.env.PORT)
    })
    afterEach(() => {
        server.close()
    })

    it('should test calling the assistant', async() => {
        const response = await request(app)
            .post("/api/assistant")
            .send({
                message: "Hey"
            })
        expect(response.statusCode).toBe(200)
    })

    it('should fail on empty body', async() => {
        const response = await request(app)
        .post("/api/assistant")
    expect(response.statusCode).toBe(500)
    })
})

describe('/api/assistant/spots', () => {
    let server: any

    beforeAll(() => {
        server = app.listen(process.env.PORT)
    })
    afterEach(() => {
        server.close()
    })

    it('should test calling date spots', async() => {
        const response = await request(app)
            .post("/api/assistant/spots")
            .send({
                message: {
                    location: "Sydney NSW Australia",
                    time: "This week",
                    like: [],
                    dislike: [],
                    price: "$"
                }
            })
        expect(response.statusCode).toBe(200)
    }, 10000)

    it('should fail date spots call on empty body', async() => {
        const response = await request(app)
            .post("/api/assistant/spots")
        expect(response.statusCode).toBe(500)
    })
})

describe('/api/assistant/activities', () => {
    let server: any

    beforeAll(() => {
        server = app.listen(process.env.PORT)
    })
    afterEach(() => {
        server.close()
    })

    it('should test calling date activities', async() => {
        const response = await request(app)
            .post("/api/assistant/activities")
            .send({
                message: {
                    location: "Sydney NSW Australia",
                    time: "This week",
                    like: [],
                    dislike: [],
                    price: "$"
                }
            })
        expect(response.statusCode).toBe(200)
    }, 10000)

    it('should fail date activities call on empty body', async() => {
        const response = await request(app)
            .post("/api/assistant/activities")
        expect(response.statusCode).toBe(500)
    })
})