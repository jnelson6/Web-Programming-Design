/*****
 * lab4 : bands.js
 * Julia Nelson 
 */
const { ObjectId } = require("mongodb");
const mongoCollections = require("../config/mongoCollections.js");
const bands = mongoCollections.bands;


module.exports = {

async create(name, genre, website, recordLabel, bandMembers, yearFormed) {
    // If name, genre, website, recordLabel, bandMembers, yearFormed are not provided at all, the method should throw.
    if (!name || !genre || !website || !recordLabel || !bandMembers || !yearFormed) throw new Error("All fields need to have valid values");
    // If name, website, recordLabel are not strings or are empty strings, the method should throw.
    if (typeof name !== "string" || typeof website !== "string" || typeof recordLabel !== "string") throw new Error("Invalid string parameters");
    // If website does not contain http://www. and end in a .com, and have at least 5 characters in-between the http://www. and .com this method will throw.
    if (!(website.startsWith("http://www.")) || !(website.endsWith(".com")) || (website.split(".")[1].length<5) ) throw new Error( "Invalid website: must begin with http:// and end with .com");
    // If genre is  not arrays and if they do not have at least one element in each of them that is a valid string, or are empty strings the method should throw.
    let genreInvalidFlag = false;
    if (!genre || !Array.isArray(genre)) throw new Error( 'You must provide an array of genre');
    if (genre.length === 0) throw new Error( 'You must supply at least one genre');
    for (i in genre) {
      if (typeof genre[i] !== 'string' || genre[i].trim().length === 0) {
        genreInvalidFlag = true;
        break;
      }
      genre[i] = genre[i].trim();
    }
    if (genreInvalidFlag) throw new Error( 'One or more genre is not a string or is an empty string');

    // If bandMembers is not arrays and if they do not have at least one element in 
    // each of them that is a valid string, or are empty strings the method should throw.
    let bandMembersInvalidFlag = false;
    if (!bandMembers || !Array.isArray(bandMembers)) throw new Error( 'You must provide an array of Band Members');
    if (bandMembers.length === 0) throw new Error( 'You must supply at least one Band Member');
    for (i in bandMembers) {
      if (typeof bandMembers[i] !== 'string' || bandMembers[i].trim().length === 0) {
        bandMembersInvalidFlag = true;
        break;
      }
      bandMembers[i] = bandMembers[i].trim();
    }
    if (bandMembersInvalidFlag) throw new Error( 'One or more Band Member is not a string or is an empty string');
    
    // If yearFormed is not a number, or if yearFormed is less than 1900 or greater than the current year (2022) the the method should throw. (so only years 1900-2022 are valid values)
    if (typeof yearFormed != "number" || yearFormed < 1900 || yearFormed > 2022 ) throw new Error( "Year Formed is invalid");
    
    // Note:  FOR ALL INPUTS: Strings with empty spaces are NOT valid strings.  So no cases of "    " are valid. 
    if (name.trim().length === 0) throw new Error( 'Name cannot be an empty string or string with just spaces');
    if (website.trim().length === 0) throw new Error( 'Website cannot be an empty string or string with just spaces');
    if (recordLabel.trim().length === 0) throw new Error( 'recordLabel cannot be an empty string or string with just spaces');
    name = name.trim();
    website = website.trim();
    recordLabel = recordLabel.trim();

    const bandsCollection = await bands();

    let newbandId = ObjectId().toString();
    let newBandInfo = {
        _id: newbandId,
        name: name,
        genre: genre,
        website: website, //(must contain full url http://www.patrickseats.com),
        recordLabel: recordLabel,
        bandMembers: bandMembers,
        yearFormed: yearFormed 
    };
   
   const insertInfo = await bandsCollection.insertOne(newBandInfo);
   if (!insertInfo.acknowledged || !insertInfo.insertedId)
   throw new Error( 'Could not add Band');

   const newId = insertInfo.insertedId.toString();

   const band = await this.getId(newId);
   return band;
},



/** Get all bands in collection */
async getAll() {
  const bandsCollection = await bands();
    const bandList =  bandsCollection.find({}).toArray();
    if (!bandList) throw new Error( 'Could not get all bands');
    return bandList;
},







/** When given an id, this function will return a band from the database. */
async getId(id) {
    // If no id is provided, the method should throw.
    if (!id) throw new Error( 'You must provide an id to search for');
    // If the id provided is not a string, or is an  empty string, the method should throw.
    if (typeof id !== 'string') throw new Error( 'Id must be a string');
    if (id.trim().length === 0) throw new Error( 'Id cannot be an empty string or just spaces');
    // If the id  provided is not a valid ObjectId, the method should throw
    id = id.trim();
    if (!ObjectId.isValid(id)) throw new Error( 'Invalid band ID');
    // If the no band exists with that id, the method should throw.
    const bandsCollection = await bands();
    const bandd = await bandsCollection.findOne({ _id: id});
    if (bandd === null) throw new Error( 'No band with that id');
    return bandd;
  },


async remove(id) {
  // This function will remove the band from the database.
  
  // If no id is provided, the method should throw.
  if (!id) throw new Error( 'You must provide an ID to search for');
  // If the id provided is not a string, or is an empty string the method should throw.
  //console.log(id);
  if (typeof id !== 'string') throw new Error( 'ID must be a string');
  if (id.trim().length === 0)
  throw new Error( 'ID cannot be an empty string or just spaces');
  // If the id provided is not a valid ObjectId, the method should throw
  id = id.trim();
  if (!ObjectId.isValid(id)) throw new Error( 'Invalid object ID');

  // If the removal succeeds, return the name of the band and the text " has been successfully deleted!"
  
  
    const bandsCollection = await bands();
    let band = await this.getId(id);

    const findband = await bandsCollection.findOne({ _id: id});
    const deletionInfo = await bandsCollection.deleteOne({ _id: id });

    // If the band cannot be removed (does not exist), the method should throw.
  // If the no band exists with that id, the method should throw.
  if (findband === 0) throw new Error( 'No band exists with that ID');





    if ((deletionInfo === 0) || (deletionInfo.modifiedCount === 0)) {
      throw new Error( `Could not delete band with id of ${id}`);
    }
    console.log(band.name +" has been successfully deleted!")
    
    return  { "deleted": true, "data": band };
  },







async rename(id, newName) {
    // This function will update the name of the band currently in the database.

    // If no id is provided, the method should throw.
    if (!id) throw new Error( 'You must provide an id to search for');
    
    // If the id provided is not a string, or is an empty string the method should throw.
    if (typeof id !== 'string') throw new Error( 'Id must be a string');
    if (id.trim().length === 0) throw new Error( 'Id cannot be an empty string or just spaces');
    
    
    // If the id provided is not a valid ObjectId, the method should throw.
    id = id.trim();
    if (!ObjectId.isValid(id)) throw new Error( 'invalid object ID');
   
    // If newName is not provided, the method should throw.
    if (!newName) throw new Error( 'You must provide a new name for the band');
    
    // If newName  is not a string, or an empty string, the method should throw.
    if (typeof newName !== 'string') throw new Error( 'Name must be a string');
    if (newName.trim().length === 0) throw new Error( 'Name cannot be an empty string or string with just spaces');
    

    // if the newName is the same as the current value stored in the database, the method should throw. 
    if (newName === (band.id).name) throw new Error("same name ");



    const bandsCollection = await bands();
    const updatedBand = {
        
        name: newName,
        
      
    };

    // If the band cannot be updated (does not exist), the method should throw.
    const updatedInfo = await bandsCollection.updateOne(
      { _id: id },
      { $set: updatedBand }
    );
    if (updatedInfo.modifiedCount === 0) {
      throw new Error('Could not update band name successfully');
    }

    // If the update succeeds, return the entire band object as it is after it is updated.

    return await this.getId(id);
  }
};