import faker from "faker";
import { User } from "./blog.type";

export const user = (): User => {
  return {
    id: faker.datatype.number(),
    fullname: faker.name.firstName(),
    email: faker.internet.email(),
    password: "123456",
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    deleted_at: faker.date.past(),
  };
};

export const users = () => {
  return [
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
    user(),
  ];
};

export const company = () => {
  return {
    id: faker.datatype.number(),
    comapnyName: faker.company.companyName(),
    companyEmail: faker.internet.email(),
    companyWebsite: faker.internet.domainName(),
    companyPhone: faker.phone.phoneNumber(),
    blogs: faker.datatype.number(),
  };
};

export const companies = () => {
  return [
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
    company(),
  ];
};

export const blogPost = () => {
  return {
    postid: faker.datatype.number(),
    title: faker.random.word(),
    content: faker.lorem.paragraphs(),
    catagory: faker.random.word(),
    // type: public or private
    editorid: user().id,
    approverid: user().id,
    companyid: company().id,
    // status: required, status of the post;
    // -1, draft
    // -2, pending to review
    // -3, published
    // -4, declined
    // -5, Archive
    tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`,
    preview: `${faker.image.nature()}?random=${Date.now() + 1}`,
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    deleted_at: faker.date.past(),
  };
};

export const comment = () => {
  return {
    thredid: faker.name.firstName(),
    comenetid: faker.internet.email(),
    postid: blogs().id,
    authorid: user().id,
    content: faker.lorem.paragraphs(),
    created_at: faker.date.past(),
    deleted_at: faker.date.past(),
  };
};

export const blogs = () => {
  return {
    id: faker.datatype.number(),
    image: `${faker.image.nature()}?random=${Date.now() + 1}`,
    title: faker.random.words(),
    body: faker.lorem.paragraphs(),
    editor: user(),
    likes: faker.datatype.number(),
    views: faker.datatype.number(),
    comment: faker.datatype.number(),
    createdAt: `${faker.date.past()}`,
  };
};

// the totat status of the blog post
export const review = () => {
  return {
    postid: blogs().id,
    views: faker.datatype.number(),
    likes: faker.datatype.number(),
    comments: faker.datatype.number(),
  };
};

export const categoires = () => {
  return {
    id: faker.datatype.number(),
    title: faker.random.word(),
    totalBlogs: faker.datatype.number(),
  };
};

export const categoriesArray = () => {
  return [
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
    categoires(),
  ];
};
