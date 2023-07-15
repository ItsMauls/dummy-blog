const data = []

module.exports = class Articles {
    constructor(title,post) {
        this.getTitle = title,
        this.getPost = post
    }

    save() {
        data.push(this)
    }

    static fetchAll() {
        return data
    }
}