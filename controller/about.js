const aboutContent = "Hello! My name is Maulana Ibrahim, and I am a programmer who has been learning for the past 3 months. Currently, I am preparing myself for a bootcamp to further enhance my skills and knowledge in the field of programming. I am enthusiastic about technology and eager to take on new challenges to grow as a developer. With a passion for coding and a determination to succeed, I am ready to embark on this exciting journey in the world of software development.";
exports.getAbout = (req,res) => {
    res.render('about', {
        pageTitle : 'About Me',
        content : aboutContent
    })
}