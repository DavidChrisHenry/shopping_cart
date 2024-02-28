/** @format */

import axios from "axios";
const url = "/shoes";

export default class API {
  // to insert post into database
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }
  // to update post into database
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
  // delete a post
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
