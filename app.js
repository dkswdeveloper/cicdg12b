//create a new repo
// add .readme .gitignore files
// copy the url
// create a new folder on your machine
// git clone https://github.com/username/repo.git 
// open the project in vscode (cd repofolder)
// npm init -y
// add new file app.js with some console statements
// npm i 
// git add .
// git commit -m "message to add file"
// git push
const app = require('express')();
console.log("server will here");
console.log(new Date());
console.log("edited in browser");

console.log("added line 3");
app.get("/", (req, res) => {
    res.json({message : "cicdg12b running after pm2 added"});
})
app.listen(7000, () => { 
    console.log("server running on port 7000");
})