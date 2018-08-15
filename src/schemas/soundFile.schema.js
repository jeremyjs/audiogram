function soundFile (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const soundFile = new Schema({
    fileUrl:    { type: String, required: true },
    lengthInMs: { type: Number, required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    removedAt: { type: Date, default: Date.now },
  });
}

module.exports = soundFile;
