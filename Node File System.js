const fs = require ('fs');

fs.readFile ('./home.txt', (err, data) => {
    if (err) {
            console.log('Errroorrr');
    }
    console.log(data.toString());
})

const data = fs.readFileSync('./home.txt');
console.log('2', data.toString());