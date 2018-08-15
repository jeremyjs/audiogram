module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const soundFiles = new Schema({
    length: { type: Number, required: true },
    filerl: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    removedAt: { type: Date, default: Date.now },
  });

  // Submodel, so, no need for calling mongooseClient.model(...)
  // return mongooseClient.model('soundFiles', soundFiles);

  return soundFiles;
};
