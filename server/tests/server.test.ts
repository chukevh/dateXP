import request from 'supertest'
import app from '../src/app.js'
import "dotenv/config"

describe('/api/assistant', () => {
    let server: any

    beforeAll(() => {
        server = app.listen(process.env.PORT)
    })
    afterEach(() => {
        server.close()
    })

    it('should send status code 200 and a JSON body on succesful call', async() => {
        const response = await request(app)
            .post("/api/assistant")
            .send({
                message: "Hey"
            })
        expect(response.statusCode).toBe(200)
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    it('should send status code 500 when user input is empty', async() => {
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

    it('should send status code 200 and a JSON body on succesful call', async() => {
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
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    }, 10000)

    it('should send status code 500 when user input is empty', async() => {
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

    it('should send status code 200 and a JSON body on succesful call', async() => {
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
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    }, 10000)

    it('should send status code 500 when user input is empty', async() => {
        const response = await request(app)
            .post("/api/assistant/activities")
        expect(response.statusCode).toBe(500)
    })
})