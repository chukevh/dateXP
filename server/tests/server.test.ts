import request from 'supertest'
import app from '../src/app.js'

describe('/api/assistant', () => {
    // beforeAll(() => {

    // })

    it('should test calling the assistant', async() => {
        const response = await request(app).post("api/assistant")
        console.log(response)
    })
})