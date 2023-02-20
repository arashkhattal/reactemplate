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
  },
  {
    id: 2,
    name: "Lannister",
  },
  {
    id: 3,
    name: "Lannister",
  },
  {
    id: 4,
    name: "Stark",
  },
  {
    id: 5,
    name: "Targaryen",
  },
  {
    id: 6,
    name: "Melisandre",
  },
  {
    id: 7,
    name: "Clifford",
  },
  {
    id: 8,
    name: "Frances",
  },
];
const Messages = () => {
  const { setCreateChat, setCreateGroup } =
    useGlobalContext();
  return (
    <>
      <CreateChat />
      <CreateGroup />
      <Box
        sx={{ overflowY: "hidden" }}
        height="80vh"
      >
        <Card>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
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
              Message
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
                onClick={() =>
                  setCreateChat(true)
                }
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
                onClick={() =>
                  setCreateGroup(true)
                }
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
                flexBasis: "30%",
                overflow: "auto",
                height: "calc(80vh - 50px)",
                borderRight:
                  "1px solid lightgrey",
              }}
              id={"list_rooms"}
            >
              {message.map((msg) => (
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
                            flexDirection:
                              "column",
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
                              borderRadius:
                                "50px",
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
                              {msg.name}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Badge>
                  </Box>
                </Card>
              ))}
            </Box>

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
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Messages;
