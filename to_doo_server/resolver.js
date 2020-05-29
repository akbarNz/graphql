

import Message from "./message";



export const resolvers = {
    Query: {
        async getMessage(root, {
            _id   
        }) {
            return await Message.findById(_id);
        },
        async getMessages() {
            return await Message.find();
        }
    },
    Mutation: {
        async createMessage(root, {
            input
        }) {
            return await Message.create(input);
        },
        async updateMessage(root, {_id, input}) {
            return await Message.findByIdAndUpdate({_id}, input, {new: true});
        },
        async deleteMessage(root, {_id}) {
            return await Message.findOneAndRemove({_id});
        }

    }
}











/* var fakedb = []

class Message {
    constructor(id, {content, author}) {
        this.id = id;
        this.content = content;
        this.author = author;
    }

}

var root = {
    getMessage: ({id}) => {
        if(!fakedb[id]) {
            throw new Error('no message exists with id' + id);
        }
        return new Message(id, fakedb[id]);
    },
    createMessage: ({input}) => {
        var id = require('crypto').randomBytes(10).toString('hex');

        fakedb[id] = input;
        return new Message(id, input);
    },
    updateMessage: ({id, input}) => {
        if(!fakedb[id]) {
            throw new Error('no message exists with id' + id);
        }
        fakedb[id] = input;
        return new Message(id, input);
    }
}

export default root; */