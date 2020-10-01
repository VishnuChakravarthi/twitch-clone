import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams, currentUserId, signedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdminControl = (stream) => {
    if (currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui negative button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderCreateButton = () => {
    if (signedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  const renderList = streams.map((stream) => {
    return (
      <div className="item" key={stream.id}>
        {renderAdminControl(stream)}
        <i className="large camera middle aligned icon"></i>
        <div className="content">
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
          </Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui celled list">{renderList}</div>
      <div className="">{renderCreateButton()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.googleauth.userId,
    signedIn: state.googleauth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
