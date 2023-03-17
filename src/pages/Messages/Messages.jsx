import {
  Badge,
  Box,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useGlobalContext } from "../../context/globalContext";
import noMsgo from "../../assets/image/nomsgblack.png";
import CreateChat from "./createChat/createChat";
import CreateGroup from "./createGroup/createGroup";
import "./Messages.css";
const message = [
  {
    id: 1,
    name: "Snow",
    msg: "I will go",
    date: "30 jan",
  },
  {
    id: 2,
    name: "Lannister",
    msg: "I don't Know",
    date: "12 feb",
  },
  {
    id: 3,
    name: "Lannister",
    msg: "I have sent it",
    date: "21 feb",
  },
  {
    id: 4,
    name: "Stark",
    msg: "ok",
    date: "23 Dec",
  },
  {
    id: 5,
    name: "Targaryen",
    msg: "Up to you",
    date: "14 Oct",
  },
  {
    id: 6,
    name: "Melisandre",
    msg: "Check it",
    date: "1 Oct",
  },
  {
    id: 7,
    name: "Clifford",
    msg: "Ok",
    date: "4 sep",
  },
  {
    id: 8,
    name: "Frances",
    msg: "Check",
    date: "1 Sep",
  },
];
const Messages = () => {
  // global context
  const { setCreateChat, setCreateGroup } =
    useGlobalContext();
  return (
    <>
      <CreateChat />
      <CreateGroup />
      <Box sx={{ overflowY: "hidden" }} height="90vh">
        <Card className="global_card">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <Typography
              variant="h5"
              pt={2}
              px={2}
              fontSize="16px"
              style={{
                fontWeight: "600",
                padding: "10px",
              }}
              display="flex"
              alignItems="center"
            >
              My Chats
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginRight: "20px",
              }}
            >
              <button
                size="small"
                variant="gradient"
                color="dark"
                style={{
                  color: "white",
                  width: "120px",
                }}
                className="btn_primary btn_primary_hover"
                onClick={() => setCreateChat(true)}
              >
                Create Chat
              </button>
              <button
                size="small"
                className="btn_primary btn_primary_hover"
                style={{
                  color: "white",
                  width: "120px",
                }}
                onClick={() => setCreateGroup(true)}
              >
                Create Group
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
                flexBasis: "25%",
                overflow: "auto",
                height: "calc(80vh - 50px)",
                borderRight: "1px solid lightgrey",
              }}
              id={"list_rooms"}
            >
              {message.map((msg) => (
                <div
                  sx={{
                    height: "auto",
                    width: "auto",
                  }}
                >
                  <Box p={2}>
                    <Badge
                      color="success"
                      style={{
                        display: "flex",
                      }}
                    >
                      <Box
                        className="chat_hover"
                        style={{
                          display: "flex",
                          cursor: "pointer",
                          width: "100%",

                          borderRadius: "5px",
                          // border:
                          //   "1px solid #DA7651",
                          borderRight: "1px solid #A9A9A9",
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
                          <Box>
                            <Typography
                              style={{
                                fontWeight: "600",
                              }}
                            >
                              {msg.name}
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography>{msg.msg}</Typography>
                            </div>
                          </Box>
                        </Box>
                      </Box>
                    </Badge>
                  </Box>
                </div>
              ))}
            </Box>

            <div>
              <Box>
                <img
                  alt=""
                  src={noMsgo}
                  style={{
                    position: "absolute",
                    top: "48%",
                    left: "67%",
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
                    left: "66%",
                  }}
                >
                  No Messages
                </Typography>
              </Box>
            </div>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Messages;
