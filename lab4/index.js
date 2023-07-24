/*****
 * lab4 : index.js
 * Julia Nelson 
 */

const connection = require("./config/mongoConnection");
const bands = require("./data/bands");

//const collections = require("./mongoCollections");

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let pinkFloyd = undefined;
    let theBeatles = undefined;
    let lincolnPark = undefined;
    let all = undefined;
    let f1 = undefined;
    let f2 = undefined;
    let f3 = undefined;
    let f4 = undefined;
    let f5 = undefined;
  
console.log("=============== Testing ===============");

console.log("\n======== Create a band of your choice ========");
//  1 * Create a band of your choice.
    try{
        
        theBeatles = await bands.create(
            "The Beatles", 
            ["Rock", "Pop", "Psychedelia"], 
            "http://www.thebeatles.com", "Parlophone", 
            ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr" ], 
            1960
        )
    } catch (e) {
        console.log(e);
    }


console.log("\n======== Log the newly created band ========");
//  2 * Log the newly created band. (Just that band, not all bands)
    try{
       console.log(theBeatles);
    } catch (e) {
        console.log(e);
    }


//  3 * Create another band of your choice.
console.log("\n======== Create another band of your choice ========");
    try {
        pinkFloyd = await bands.create(
            "Pink Floyd", 
            ["Progressive Rock", "Psychedelic rock", "Classic Rock"], 
            "http://www.pinkfloyd.com", 
            "EMI", 
            ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 
            1965
        )
        // //console.log(pinkFloyd);
        // all = await bands.getAll();
        // console.log(all);

    } catch (e) {
        console.log(e);
    }



//  4 * Query all bands, and log them all
console.log("\n======== Query all bands, and log them all ========");
    try {
        all = await bands.getAll();
        console.log(all);

    } catch (e) {
        console.log(e);
    }


//  5 * Create the 3rd band of your choice.
console.log("\n======== Create the 3rd band of your choice ========");
    try {
        lincolnPark = await bands.create(
            "Linkin Park", 
            ["Alternative Rock", "Pop Rock", "Alternative Metal"], 
            "http://www.linkinpark.com", 
            "Warner", 
            ["Chester Bennington", "Rob Bourdon", "Brad Delson", "Mike Shinoda", "Dave Farrell", "Joe Hahn" ], 
            1996
        )
    } catch (e) {
        console.log(e);
    }



//  6 * Log the newly created 3rd band. (Just that band, not all bands)
console.log("\n======== Log just the newly created 3rd band ========");
    try {
        console.log(lincolnPark);
    } catch (e) {
        console.log(e);
    }

//  7 * Rename the first band
console.log("\n======== Rename the first band ========");
    try {
        renamedFirst = await bands.rename(theBeatles._id, "Beach Boys");
        console.log("Band has been renamed to " +renamedFirst.name);        // can remove this log
    } catch (e) {
        console.log(e);
    }

//  8 * Log the first band with the updated name. 
console.log("\n======== Log the first band with the updated name ========");
    try {
        console.log(renamedFirst);
    } catch (e) {
        console.log(e);
    }

//  9 * Remove the second band you created. 
console.log("\n======== Remove the second band you created ========");
    try {
        remove2ndBand = await bands.remove(pinkFloyd._id);
    } catch (e) {
        console.log(e);
    }

//  10 * Query all bands, and log them all
console.log("\n======== Query all bands and log them all ========");
    try {
        const allBands = await bands.getAll();
        console.log(allBands);
    } catch (e) {
        console.log(e);
    }

//  11 * Try to create a band with bad input parameters to make sure it throws errors.
console.log("\n======== Try to create a band with bad input parameters ========");
    try {
        fail1 = await bands.create(
            "Linkin Park2", 
                [" ", "Pop Rock", "Alternative Metal"], 
                "http://www.linkinpark.com", 
                "Warner", 
                ["Chester Bennington", "Rob Bourdon", "Brad Delson", "Mike Shinoda", "Dave Farrell", "Joe Hahn" ], 
                1996 
        )
    } catch (e) {
        console.log("Successfully got an error!");
        console.log(e);
    }


//  12 * Try to remove a band that does not exist to make sure it throws errors.
console.log("\n======== Try to remove a band that does not exist ========");
    try {
        f1 = await bands.remove(pinkFloyd._id);
    } catch (e) {
        console.log("Successfully got an error!");
        console.log(e);
    }


//  13 * Try to rename a band that does not exist to make sure it throws errors.
console.log("\n======== Try to rename a band that does not exist ========");
    try {
        f2 = await bands.rename(pinkFloyd._id, "Red Floyd");
        console.log("Band has been renamed to " +f2.name);        
    } catch (e) {
        console.log("Successfully got an error!");
        console.log(e);
    }

//  14 * Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
console.log("\n======== Try to rename a band passing does not exist ========"); 
    try {
        f3 = await bands.rename(lincolnPark._id, " ");
        console.log("Band has been renamed to " +f3.name);       
    } catch (e) {
        console.log("Successfully got an error!");
        console.log(e);
    }

//  15 * Try getting a band by ID that does not exist to make sure it throws errors.
console.log("\n======== Try getting a band by ID that does not exist ========");
    try {
        f4 = await bands.getId("882082hiwhbb2hu282882h");
        console.log(f4);

    } catch (e) {
        console.log("Successfully got an error!");
        console.log(e);
    }
    




    await connection.closeConnection();
    return null;

};

main();