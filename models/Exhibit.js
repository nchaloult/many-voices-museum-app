// @param title: String
// @param author: String
// @param description: String
// @param images: list of Strings of image URLs
export default function Exhibit(title, author, description, images) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.images = images;
}
