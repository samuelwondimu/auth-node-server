import { useRef, useState } from "react";
import EditorJS from "react-editor-js";
import jsonToJSX from "./jsonToJSX";
import { Editor_JS_TOOLS } from "./tools";
import { Button, Box, Container, Typography, Paper } from "@mui/material";
import { RemoveRedEye, Save } from "@mui/icons-material";

interface Block {
  id: string;
  type: string;
  data: any;
}

const Editorjs: React.FC = () => {
  const instanceRef = useRef<any>();
  const [blogData, setBlogData] = useState<Block[]>();

  let membersonly: any[] = [];

  async function handleSave() {
    const saveData = await instanceRef.current.save();
    console.log(saveData);
    setBlogData(saveData.blocks);
  }

  if (blogData) {
    for (let i = 0; i < jsonToJSX(blogData).length; i++) {
      if (jsonToJSX(blogData)[i].type === "MembersOnly") {
        membersonly.push(
          <Box sx={{ backgroundColor: "#e2e2e2" }} p={2}>
            <Typography
              textAlign={"center"}
              variant="h5"
              sx={{ fontWeight: 800 }}
            >
              Members Only
            </Typography>
          </Box>
        );
        break;
      } else {
        membersonly.push(jsonToJSX(blogData)[i].jsx);
      }
    }
  }

  return (
    <>
      <Container>
        <Typography gutterBottom variant="h4" color="GrayText">
          Create Your Blog Here
        </Typography>
        <Typography gutterBottom>
          Create your blog here. Read the instruction manual to know how to
          write the perfect blog with examples and video support.
        </Typography>
        <Box
          sx={{
            border: "2px solid #add8e6",
            backgroundColor: "#ffffff",
            borderRadius: 2,
            py: 2,
          }}
        >
          <EditorJS
            instanceRef={(instance) => (instanceRef.current = instance)}
            placeholder={"Start By Editing This Text..."}
            tools={Editor_JS_TOOLS}
          />
        </Box>

        <Button
          onClick={handleSave}
          variant="contained"
          startIcon={<RemoveRedEye />}
          sx={{ my: 2, mr: 2, p: 2 }}
        >
          Preview Blog
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          color="success"
          startIcon={<Save />}
          sx={{ my: 2, p: 2 }}
        >
          Save Blog
        </Button>
        <Paper sx={{ p: 5 }}>
          {blogData && console.log(jsonToJSX(blogData))}
          <Box px={10}>{membersonly}</Box>
        </Paper>
      </Container>
    </>
  );
};

export default Editorjs;
