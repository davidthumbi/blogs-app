import Blog from "../models/Blog.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";

const createBlog = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const Blog = await Blog.create(req.body);
  res.status(StatusCodes.CREATED).json({ Blog });
};

const getAllBlogs = async (req, res) => {
  const { status, BlogType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  // add stuff based on condition

  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (BlogType && BlogType !== "all") {
    queryObject.BlogType = BlogType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }
  // NO AWAIT

  let result = Blog.find(queryObject);

  // chain sort conditions

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const Blogs = await result;

  const totalBlogs = await Blog.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBlogs / limit);

  res.status(StatusCodes.OK).json({ Blogs, totalBlogs, numOfPages });
};

const updateBlog = async (req, res) => {
  const { id: BlogId } = req.params;
  const { company, position } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  const Blog = await Blog.findOne({ _id: BlogId });

  if (!Blog) {
    throw new NotFoundError(`No Blog with id :${BlogId}`);
  }
  // check permissions

  checkPermissions(req.user, Blog.createdBy);

  const updatedBlog = await Blog.findOneAndUpdate({ _id: BlogId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedBlog });
};

const deleteBlog = async (req, res) => {
  const { id: BlogId } = req.params;

  const Blog = await Blog.findOne({ _id: BlogId });

  if (!Blog) {
    throw new NotFoundError(`No Blog with id :${BlogId}`);
  }

  checkPermissions(req.user, Blog.createdBy);

  await Blog.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Blog removed" });
};
const showStats = async (req, res) => {
  let stats = await Blog.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Blog.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createBlog, deleteBlog, getAllBlogs, updateBlog, showStats };
