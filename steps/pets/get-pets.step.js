const {z} = require('zod');

export const config = {
    type: 'api',
    name: 'Get Pets',
    description: 'Get all Pets',
    flows: ['pet-apis'],
    
    method: 'GET',
    path: '/pet',
  
    // responseSchema: {
    //   200: z.array(
    //     z.object({
    //         id: z.string(),
    //         name: z.string(),
    //         breed: z.string(),
    //         age: z.number(),
    //     })
    //     )
    // },
    responseSchema: {
        200: z.object({
            pets: z.array(
                z.object({
                    id: z.string(),
                    name: z.string(),
                    breed: z.string(),
                    age: z.number(),
                })
            ),
        }),
    },
    emits: [],

};

export const handler = async (req, {logger}) => {
    logger.info('Getting All Pets');

    const pets = [
        { id: "1", name: "Buddy", breed: "Golden Retriever", age: 3 },
        { id: "2", name: "Max", breed: "German Shepherd", age: 5 }
    ];

 return {
    status: 200,
    body: { pets },
  }

};