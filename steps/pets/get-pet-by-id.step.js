const {z} = require('zod');

export const config = {
    type: 'api',
    name: 'Get Pet by Id',
    description: 'Getting specific pet details by its id',
    flows: ['pet-apis'],

    method: 'GET',
    path: '/pet:id',

    responseSchema: {
        200: z.object({
            id: z.string(),
            name: z.string(),
            breed: z.string(),
            age: z.number(),
        }),
        404: z.object({
            message: z.string()
        })
    },

    emits: [],
}

export const handler = async (req, {logger}) => {
    const petId = req.pathParams.id;
    logger.info("Getting Pet by Id");

    const pets = [
       { id: "1", name: "Buddy", breed: "Golden Retriever", age: 3 },
       { id: "2", name: "Max", breed: "German Shepherd", age: 5 },
    ]

    const pet = pets.find(p => p.id == petId)

    return pet 
            ? { status: 200, body: pet } 
            : { status: 404, body: {message: 'not'}}

}