import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/catogeriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import SkeletonVideo from "../../components/SkeletonVideo";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videosAction";
import InfiniteScroll from "react-infinite-scroll-component";
import { Helmet } from "react-helmet";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <>
      <Helmet>
        <title>Youtube Clone - Home</title>
      </Helmet>
      <Container>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row">
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4} key={video.id}>
                  <Video video={video} />
                </Col>
              ))
            : [...Array(20)].map((e, i) => (
                <Col lg={3} md={4} key={i}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default HomeScreen;
