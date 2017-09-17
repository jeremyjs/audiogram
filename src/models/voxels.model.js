// voxels-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const voxels = new Schema({
    title: { type: String, required: true },

    coverImgId: { type: String, required: false },
    ownerId: { type: String, required: false },
    soundFileId: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    removedAt: { type: Date, default: Date.now },
  });

  return mongooseClient.model('voxels', voxels);
};
