const {readFile, writeFile, mkdir} = require('node:fs/promises')

const path = require('node:path')

const DB_Path = path.join(__dirname,'..', 'db')

const loadDB = async (resourceName) => {
    const pathName = path.join(DB_Path, `${resourceName}.json`)
    try {
        const result = await readFile(pathName)
        return JSON.parse(result)

    } catch(error) {
        if(error.code === "ENOENT") {
        try {
            mkdir(DB_Path, {recursive: true})
            writeFile(resourceName, JSON.stringify([]))
            return []
        } catch(error) {
            return []
        }
        } else {
            return []
        }
    }
    
}
const saveDB = async (resourceName, data) => {
    const pathName = path.join(DB_Path, `${resourceName}.json`)
    try {
        await mkdir(DB_Path, {recursive: true})
        writeFile(pathName, JSON.stringify(data), 'utf-8')
    } catch(error) {
        throw new Error('Error saving DB:', error)
    }
    return 
}

module.exports = { loadDB, saveDB }