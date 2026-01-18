const { loadDB, saveDB } = require("../../utils/jsonDB.js");


let db = []
loadDB('comments').then(result => db = result)

const commentsModel = {
    findAll() {
        return db
    },
    findOne(id) {
        return db.find(c => c.id === id)
    },
    create(postId,content) {
    const currentId = db.length > 0 ? Math.max(...db.map(c => c.id)) : 0;

    const newComment = {
        id: currentId + 1,
        postId,
        content,
        createdAt: new Date()
    };
        db.push(newComment)
        saveDB('comments',db)
        return newComment
    },
    edit(id, content) {
        const index = db.findIndex(c => c.id === id);
        
        if(index !== -1) 
            {
                db[index] = {
                    ...db[index],
                    content: content || db[index].content
                }
                saveDB('comments',db)
                return db[index];
        }
        return null
    },
    delete(id) {
    const index = db.findIndex(c => c.id === id);
        if(index !== -1) {
            const deleted = db.splice(index, 1);
            saveDB('comments',db)
            return deleted
        } 
        return null
    }
}

module.exports = commentsModel