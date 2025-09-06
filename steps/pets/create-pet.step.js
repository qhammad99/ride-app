const {z} = require('zod');

exports.config = {
    type: 'api',
    name: 'Create Pet',
    description: 'Creating a new Pet',
    flows: ['pet-apis'],

    method: 'POST',
    path: '/pet',

    bodySchema: z.object({
      name: z.string(),
      breed: z.string(),
      age: z.number(),
    }),
  
    responseSchema: {
      200: z.object({
        id: z.string(),
        name: z.string(),
        breed: z.string(),
        age: z.number(),
      }),
    },
    emits: [],
};

exports.handler = async (req, {logger})=>{
    logger.info('Creating new pet', { body: req.body });

    const newPet = {
      id: Date.now().toString(),
      ...req.body,
    }

    return {
      status: 200,
      body: newPet,
    }
}