import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  // console.log(props);
  const onSubmit = (formValues) => {
    // console.log(formValues);
    props.editStream(props.match.params.id, formValues);
  };

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit a stream</h2>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(props.stream, "title", "description")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
