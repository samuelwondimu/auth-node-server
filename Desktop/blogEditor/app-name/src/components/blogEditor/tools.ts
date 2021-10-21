// editor js components
// import Header from "@editorjs/header";
// import Image from "@editorjs/image";
import Timeline from "./tools/Timeline";
import MembersOnly from "./tools/MembersOnly";
const Header = require("@editorjs/header");
const Embed = require("@editorjs/embed");
const Image = require("@editorjs/image");
const List = require("@editorjs/list");
// const SimpleImage = require("@editorjs/simple-image");
const Link = require("@editorjs/link");
const Quote = require("@editorjs/quote");
const Table = require("@editorjs/table");
const Underline = require("@editorjs/underline");
const Personality = require("@editorjs/personality");

export const Editor_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    inlineToolbar: false,
    config: {
      services: {
        youtube: true,
        telegram: true,
      },
    },
  },
  image: {
    class: Image,
    inlineToolbar: true,
    config: {
      endpoints: {
        byFile: "https://freeimage.host/api/1/upload", // Your backend file uploader endpoint
        byUrl: "https://api.imgur.com/3/image", // Your endpoint that provides uploading by Url
      },
    },
  },
  list: List,
  qoute: Quote,
  link: {
    class: Link,
    inlineToolbar: true,
  },
  table: Table,
  underline: Underline,
  personality: Personality,
  EventTimeline: Timeline,
  MembersOnly: MembersOnly,
};
