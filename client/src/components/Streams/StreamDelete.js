import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../History";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    console.log(props);
    props.fetchStream(props.match.params.id);
  }, []);

  const actions = (
    <React.Fragment>
      <Link to="/" className="ui cancel button">
        Cancel
      </Link>
      <div
        className="ui negative button"
        onClick={() => props.deleteStream(props.match.params.id)}
      >
        Delete
      </div>
    </React.Fragment>
  );

  const title = () => {
    if (!props.stream) {
      return "";
    }
    return props.stream.title;
  };

  return (
    <div>
      <Modal
        title="Delete Stream?"
        content={`Are you sure you want to delete ${title()} ?`}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
