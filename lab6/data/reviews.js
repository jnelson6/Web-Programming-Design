/*

NOT DONE AT ALL


In reviews.js, you will create and export 4 methods. 
Create, Read (getting all and also getting by id), 
and Delete. You must do FULL error handling and input 
checking for ALL functions as you have in previous 
labs, checking if input is supplied, correct type, 
range etc. and throwing errors when you encounter 
bad input.

General note on all data functions:  
Whenever you return data that has an _id included in 
the returned data, return it as a string as shown 
in all the examples below. Do NOT return it as an 
ObjectId

*/


const mongoCollections = require('../config/mongoCollections');
const reviews = mongoCollections.reviews;
const users = require('./books');
const {ObjectId} = require('mongodb'); //////????????????? found this in other prompts (let or const)
// look into if uuid is necessary 


let exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts();
    return await postCollection.find({}).toArray();
  },
  async getPostById(id) {
    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: id });

    if (!post) throw 'Post not found';
    return post;
  },
  async addPost(title, body, posterId) {
    const postCollection = await posts();
    const userThatPosted = await users.getUserById(posterId);

    let newPost = {
      title: title,
      body: body,
      poster: {
        id: posterId,
        name: `${userThatPosted.firstName} ${userThatPosted.lastName}`
      },
      _id: uuid.v4()
    };

    const newInsertInformation = await postCollection.insertOne(newPost);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';

    return this.getPostById(newInsertInformation.insertedId);
  },
  async removePost(id) {
    const postCollection = await posts();
    const deletionInfo = await postCollection.deleteOne({ _id: id });
    if (deletionInfo.deletedCount === 0)
      throw `Could not delete post with id of ${id}`;
    return true;
  },
  async updatePost(id, title, body, posterId) {
    const postCollection = await posts();
    const userThatPosted = await users.getUserById(posterId);

    let updatedPost = {
      title: title,
      body: body,
      poster: {
        id: posterId,
        name: userThatPosted.name
      }
    };
    const updateInfo = await postCollection.updateOne(
      { _id: id },
      { $set: updatedPost }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw 'Update failed';
    return this.getPostById(id);
  }
};

module.exports = exportedMethods;
