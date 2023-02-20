import {
  Badge,
  Box,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState, useRef } from "react";
// import Trashsvg from "assets/icon/dark/Trash.svg";
// import send from "assets/icon/dark/send.svg";

// this object will hold socket connection
// once got socket connection on first load store the same in here..
const socket = {
  conn: null,
  set: (conn) => {
    socket.conn = conn;
  },
  close: () => {
    socket.conn.close();
  },
};

const Messages = () => {
  const isFirstLoad = useRef(true);
  // const [roomIdState, setRoomIdState] = useState([]);  // used by roomId funtion, pls don't alter
  const [allRoomIds, setAllRoomIds] = useState(
    []
  ); // stores all rooms available for this user
  const [
    currRoomUsersStatus,
    setCurrRoomUsersStatus,
  ] = useState([]);
  const [listeningToRooms, setListeningToRooms] =
    useState(new Set());
  const conditionalRoomRef = useRef(null);
  const [userIsTyping, setUserIsTyping] =
    useState("");
  const donotScrollToTop = useRef(false);
  const isMsgWindowOpenRef = useRef(false);
  const [allUsersId, setAllUsersId] = useState(
    []
  );
  let isNewDateConten = null;

  return (
    <>
      {/* <CreateChatRoomModal />
      <EditChatRoomModal />
      <DeleteChatRoomModal /> */}
      {/* <AddSingleChat /> */}
      <Box
        width="70%"
        mx={30}
        sx={{ overflowY: "hidden" }}
        height="80vh"
      >
        <Card>
          {/* chat list card on left side */}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            <Typography
              variant="h5"
              pt={2}
              px={2}
              fontSize="16px"
              style={{
                fontWeight: "600",
              }}
              display="flex"
              alignItems="center"
            >
              Message
            </Typography>
            <Box>
              <button
                size="small"
                variant="gradient"
                color="dark"
                sx={{
                  fontSize: "10px",
                  marginLeft: 2,
                  margin: 2,
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  paddingRight: "6px",
                  paddingLeft: "6px",
                }}
                // onClick={() =>
                //     setAddSingleChat(
                //         true
                //     )
                // }
              >
                {/* <Icon
                                    sx={{
                                        fontWeight:
                                            "bold",
                                    }}
                                >
                                    mode_comment
                                </Icon> */}
                &nbsp;Create Chat
              </button>
              <button
                size="small"
                variant="gradient"
                color="dark"
                sx={{
                  marginRight: 2,
                  fontSize: "10px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  paddingRight: "6px",
                  paddingLeft: "6px",
                }}
                // onClick={() =>
                //     setOpenChatRoomAddModal(
                //         true
                //     )
                // }
              >
                {/* <Icon
                                    sx={{
                                        fontWeight:
                                            "bold",
                                    }}
                                >
                                    forum
                                </Icon> */}
                &nbsp;Create Group
              </button>
            </Box>
          </Box>
          <Box
            style={{
              padding: "5px",
              borderTop: "0.5px solid lightgrey",
              display: "flex",
            }}
          >
            <Box
              style={{
                flexBasis: "30%",
                overflow: "auto",
                height: "calc(80vh - 50px)",
                borderRight:
                  "1px solid lightgrey",
              }}
              id={"list_rooms"}
            >
              <Card
                sx={{
                  height: "auto",
                  width: "auto",
                }}
              >
                <Box
                  p={2}
                  sx={{
                    borderBottom:
                      "1px solid lightgrey",
                  }}
                >
                  <Badge
                    // badgeContent={
                    //     data?.unread
                    // }
                    color="success"
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Box
                      display="flex"
                      style={{
                        flex: "1 1 auto",
                        cursor: "pointer",
                        backgroundColor:
                          "#FFF7ED",
                        borderRadius: "5px",
                        border:
                          "1px solid #DA7651",
                        borderRight:
                          "1px solid #DA7651",
                        padding: "5px",
                        margin: "-5px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          alignItems: "center",
                        }}
                      >
                        <img
                          alt=""
                          src={
                            "https://i.pinimg.com/474x/33/23/94/33239488ede380d4f02386460ed3adf3.jpg"
                          }
                          style={{
                            zIndex: "10",
                            height: "24px",
                            width: "24px",
                            borderRadius: "50px",
                          }}
                        />
                      </div>
                      <Box pl={2}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography
                            variant="h6"
                            style={{
                              fontWeight: "600",
                              display: "flex",
                              justifyContent:
                                "space-between",
                            }}
                          >
                            <span></span>
                            {/* <span>{new Date(data?.latest_message_details &&
                                data?.latest_message_details?.length >= 1
                                && data?.latest_message_details[0]?.created_at).toString().substring(16, 21)}
                              </span> */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Badge>
                </Box>
              </Card>
            </Box>

            <>
              <img
                alt=""
                // src={noMsgo}
                style={{
                  position: "absolute",
                  top: "48%",
                  left: "58%",
                  height: "60px",
                  width: "60px",
                }}
              />
              <Typography
                style={{
                  color: "#000",
                  position: "absolute",
                  fontSize: "15px",
                  fontWeight: "600",
                  top: "60%",
                  left: "57%",
                }}
              >
                No Messages
              </Typography>
            </>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Messages;
