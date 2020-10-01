import React, { useEffect } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.builtPlayer();
  }

  componentDidUpdate() {
    this.builtPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  builtPlayer = () => {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
