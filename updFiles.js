let fs = require('fs');
const path = require('path');
origPath = __dirname + '/public';

fs.writeFileSync(__dirname + '/src/filesList.js', 'export default');

let obj = [];

function getElems(curPath, prevFilters) {
    let elements = fs.readdirSync(curPath, {withFileTypes: true});

    for(let i = 0; i < elements.length; i++) {

        let element = elements[i];

        if(!element.isFile()) {
            let filters = [...prevFilters, element.name];

            getElems(curPath + '/' + element.name, filters)

        } else {
            element.filters = prevFilters;
            element.dataPath = curPath.replace(origPath, '') + '/' + element.name;
            console.log(element);
            obj.push(element)
        }

    }
}

getElems(origPath + '/photos', []);
fs.appendFileSync(__dirname + '/src/filesList.js', JSON.stringify(obj));
