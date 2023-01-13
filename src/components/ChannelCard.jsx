import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "./utils/constants";

import { categories } from "./utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const [categories,setCategories] = useState([])
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
        </CardContent>
      </Link>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="gray"
        textAlign="center"
      >
        {channelDetail?.snippet?.title}
        <CheckCircle sx={{ fontSize: 16, color: "gray", ml: 5 }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography color="whitesmoke">
          {parseInt(
            channelDetail?.statistics?.subscriberCount
          ).toLocaleString()}{" "}
          Subscribers
        </Typography>
      )}
    </Box>
  );
};

export default ChannelCard;
