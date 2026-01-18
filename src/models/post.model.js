const { loadDB, saveDB } = require("../../utils/jsonDB.js");


let db = []
loadDB('posts').then(result => db = result)

const postModel = {
    findAll() {
        return db
    },
    findOne(id) {
        return db.find(p => p.id === id)
    },
    create(title,content) {
    const currentId = db.length > 0 ? Math.max(...db.map(p => p.id)) : 0;

    const newPost = {
        id: currentId + 1,
        title,
        content,
        createdAt: new Date() 
    };
        db.push(newPost)
        saveDB('posts',db)
        return newPost
    },
    edit(id, title, content) {
        const index = db.findIndex(p => p.id === id);
        
        if(index !== -1) 
            {
                db[index] = {
                    ...db[index],
                    title: title || db[index].title,
                    content: content || db[index].content
                }
                saveDB('posts',db)
                return db[index];
        }
        return null
    },
    delete(id) {
    const index = db.findIndex(p => p.id === id);
        if(index !== -1) {
            const deleted = db.splice(index, 1);
            saveDB('posts',db)
            return deleted
        } 
        return null
    }
}

module.exports = postModel