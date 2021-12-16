import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./_channelScreen.scss";
import { getVideosByChannel } from "../../redux/actions/videosAction";
import { getChannelDetails } from "../../redux/actions/channelAction";

import numeral from "numeral";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Video from "../../components/video/Video";
import { Col, Container, Row } from "react-bootstrap";

const ChannelScreen = () => {
  const { channelId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  const { videos, loading } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );
  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img src={snippet?.thumbnails?.default?.url} alt="" />

          <div className="ms-3 channelHeader_details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>
      </div>

      <Container>
        <Row className="mt-2">
          {!loading
            ? videos?.map((video, i) => (
                <Col md={3} lg={3} key={i}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map((e, i) => (
                <Col md={3} lg={3} key={i}>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="140px" />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;