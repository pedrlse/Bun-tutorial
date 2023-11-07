import * as mongoose from "mongoose";

const todos = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    content: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  {
    methods: {
      speak() {
        console.log(`${this.content}!`);
      },
    },
  }
);

export type Todo = mongoose.InferSchemaType<typeof todos>;
export const Todo = mongoose.model("Todo", todos);
