// import { Card, Typography } from "@mui/material";
// import React, { useState } from "react";

// // "npm i suneditor-react" - to install suneditor-react
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";

// function SunEditorPage() {
//   // state to maintain the state of the editor data
//   const [editorData, setEditorData] =
//     useState("");
//   return (
//     <div>
//       {/* card component from mui  */}
//       <Card
//         style={{
//           padding: "10px",
//         }}
//       >
//         {/* Typography component from MUI  */}
//         <Typography
//           className="global_display_flex fs_24 fw_600"
//           style={{ marginBottom: "10px" }}
//         >
//           Sun Editor
//         </Typography>
//         {/* sun editor component for react */}
//         <SunEditor
//           setContents={editorData}
//           onChange={(e) => setEditorData(e)}
//           setOptions={{
//             minHeight: "40vh",
//             height: "auto",
//             code: "en",
//             buttonList: [
//               ["undo", "redo"],
//               [
//                 "fontSize",
//                 "bold",
//                 "italic",
//                 "underline",
//                 "strike",
//                 "subscript",
//                 "superscript",
//                 "fontColor",
//                 "hiliteColor",
//                 "align",
//                 "outdent",
//                 "indent",
//                 "list",
//                 "removeFormat",
//               ],
//               ["image", "table"],
//               ["showBlocks", "codeView"],
//             ],
//             // plugins: plugins,
//           }}
//         />
//       </Card>
//     </div>
//   );
// }

// export default SunEditorPage;

import { Card, Typography } from "@mui/material";
import React, { useState } from "react";

// "npm i suneditor-react" - to install suneditor-react
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function SunEditorPage() {
  // state to maintain the state of the editor data
  const [editorData, setEditorData] = useState("");

  return (
    <div>
      {/* card component from mui  */}
      <Card className="global_card">
        {/* Typography component from MUI  */}
        <Typography
          className="global_display_flex fs_24 fw_600"
          style={{ marginBottom: "10px" }}
        >
          Sun Editor
        </Typography>
        {/* sun editor component for react */}
        <SunEditor
          setContents={editorData}
          onChange={(e) => setEditorData(e)}
          setOptions={{
            color: "#fff",
            minHeight: "40vh",
            height: "auto",
            code: "en",
            buttonList: [
              ["undo", "redo"],
              [
                "fontSize",
                "bold",
                "italic",
                "underline",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "align",
                "outdent",
                "indent",
                "list",
                "removeFormat",
              ],
              ["image", "table"],
              ["showBlocks", "codeView"],
            ],
            // plugins: plugins,
          }}
        />
      </Card>
      {/* card to display editor data */}
      {editorData.length === 0 ? (
        ""
      ) : (
        <Card
          style={{ marginTop: "15px" }}
          className="global_card"
          dangerouslySetInnerHTML={{
            __html: editorData,
          }}
        ></Card>
      )}
    </div>
  );
}

export default SunEditorPage;
