import express from "express";

import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
  },
  minExp: {
    type: Number,
    default: 0,
  },
  slills: {
    type: [String],
    required: true,
  },
});

const jobModel = mongoose.model("jobs", jobSchema)

export default jobModel

// schema {title, company, salary, skills, minExp}
