import {Cat} from './models/cat';

export const resolvers = {
    Query : {
        cats: ()=> Cat.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            return kitty;
        }
    }
};