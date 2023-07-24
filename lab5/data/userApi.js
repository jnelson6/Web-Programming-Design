 const axios = require('axios');

 let exportedMethods = {

//TAKEN FROM lecture_05/code/data/validation.js
    checkId(id) {
        if (!id) throw 'Error: You must provide an id to search for';
        if (typeof id !== 'string') throw 'Error: id must be a string';
        id = id.trim();
        if (id.length === 0)
          throw 'Error: id cannot be an empty string or just spaces';
        if (!ObjectId.isValid(id)) throw 'Error: invalid object ID';
        return id;
      },
    
    //   checkString(strVal, varName) {
    //     if (!strVal) throw `Error: You must supply a ${varName}!`;
    //     if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
    //     strVal = strVal.trim();
    //     if (strVal.length === 0)
    //       throw `Error: ${varName} cannot be an empty string or string with just spaces`;
    //     if (!isNaN(strVal))
    //       throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
    //     return strVal;
    //   },
////////////////////////////////////////////////////////////////


    async getPeople() {
        const { people } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json');
        
        return people;
    },

    async getWork() {
        const { work } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json');
        return work;
    },

    async getPeopleID() {
        id = checkId(id);
        const people = await getPeople();
        for (const person of people) {
            if (person.id === id) return person;
        }
        throw "no person with id: " + id;
        
    },

    
    async getWorkID() {
        id = checkId(id);
        const work = await getWork();
        for (const worker of work) {
            if (worker.id === id) return worker;
        }
        throw "no work with id: " + id;
    }






 };
