# twitch-clone
Twitch like live video broadcaster

This app provides live streaming of video with RTMP server from local device.
The streaming can be done from any broadcasters using the api and the stream key.

The app is built with react redux. It also uses google authentication to sign in and to create a stream.
The stream list is stored in internal db using json-server and retrived.
The RTMP server setup which is done using Node-Media-Server.
The Node-Media-Server provides implementations for RTMP media server.
Once the server is running, the user can connect the server using respective rtmp protocol and enter the stream key to stream into the channel.

The user can also create a new stream, edit and delete an existing stream.
The streams which were created by the user will have the option to edit and delete by the user.
The user can only view the streams created by other users. They can't edit or delete other users streams.
