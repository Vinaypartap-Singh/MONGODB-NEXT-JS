import mongoose from "mongoose";

const topicModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicModel);

export default Topic;
