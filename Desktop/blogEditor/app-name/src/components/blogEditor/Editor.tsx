import React, { useEffect, useRef, useState } from "react";
//
import EditorJS from "@editorjs/editorjs";
// mui comp
import { Button, Box, Typography } from "@mui/material";
// editor js components
const Header = require("@editorjs/header");
// import Embed from "@editorjs/embed"
const Embed = require("@editorjs/embed");
const Image = require("@editorjs/image");
const List = require("@editorjs/list");
// const SimpleImage = require("@editorjs/simple-image");
const Link = require("@editorjs/link");
const Quote = require("@editorjs/quote");
const Table = require("@editorjs/table");
const Underline = require("@editorjs/underline");
const Personality = require("@editorjs/personality");

interface EditorProps {}

const EDITTOR_HOLDER_ID = "editorjs";

const Editor: React.FC<EditorProps> = () => {
  const ejInstance = useRef<any>();
  const [blogData, setBlogData] = useState<any[]>();

  useEffect(() => {
    console.log({ blogData });
  });

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      autofocus: true,
      onReady: () => {
        ejInstance.current = editor;
      },
      placeholder: "create your blog",
      tools: {
        header: Header,
        embed: {
          class: Embed,
          inlineToolbar: false,
          config: {
            services: {
              youtube: true,
            },
          },
        },
        table: Table,
        link: {
          class: Link,
          inlineToolbar: true,
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
        underline: Underline,
        quote: Quote,
        personality: Personality,
      },
    });
  };

  const handleSave = async () => {
    const editor = ejInstance.current;
    try {
      const outputData = await editor.save();
      // console.log("Article data: ", outputData);
      setBlogData(outputData.blocks);
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };

  let htmlBlog: any = [];

  blogData &&
    blogData.map((block) => {
      switch (block.type) {
        case "header":
          htmlBlog.push(
            <Typography
              variant={
                `h${block.data.level}` as
                  | "h1"
                  | "h2"
                  | "h3"
                  | "h4"
                  | "h5"
                  | "h6"
                  | "button"
                  | "caption"
                  | "inherit"
                  | "subtitle1"
                  | "subtitle2"
                  | "body1"
                  | "body2"
                  | "overline"
                  | undefined
              }
            >
              {block.data.text}
            </Typography>
          );
          break;
        case "paragraph":
          htmlBlog.push(
            <Typography variant="body2" color={"GrayText"}>
              {block.data.text}
            </Typography>
          );
          break;
        case "embed":
          htmlBlog.push(
            <iframe
              title="youtube"
              width="560"
              height="315"
              src={block.data.embed}
              allow="autoplay; encrypted-media"
            ></iframe>
          );
          break;
        case "list":
          htmlBlog.push(
            <ul>
              {block.data.items.map((item: any) => {
                return <li>{item}</li>;
              })}
            </ul>
          );
          break;
        default:
          console.log("Unknown block type", block.type);
          break;
      }
    });

  return (
    <>
      <Box sx={{ border: "2px solid #add8e6", borderRadius: 2, py: 2 }}>
        <div id={EDITTOR_HOLDER_ID}> </div>
      </Box>

      <Button onClick={handleSave} variant="contained" sx={{ my: 2 }}>
        save article
      </Button>

      <Box sx={{ maxWidth: "70%", margin: "0 auto" }}>{htmlBlog}</Box>
    </>
  );
};

export default Editor;
