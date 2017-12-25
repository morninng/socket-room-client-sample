import { Component } from '@angular/core';

import * as io from 'socket.io-client';

const SOCKET_URL = 'http://127.0.0.1:3000/';
const SOCKET_NAMESPACE = 'mixidea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mixidea_io: any;
  socket: any;

  constructor() {

    this.socket = io.connect(SOCKET_URL + SOCKET_NAMESPACE, (socket) => {


    });

    console.log('connected');
    this.socket.on('message', (data) => {
      console.log(data);
    });

  }


  join_room_a() {
    this.socket.emit('join-room', 'aaa');
  }

  join_room_b() {
    this.socket.emit('join-room', 'bbb');

  }

  join_room_c() {
    this.socket.emit('join-room', 'ccc');

  }

  join_room_d() {
    this.socket.emit('join-room', 'ddd');

  }


  leave_room_a() {
    this.socket.emit('leave-room', 'aaa');
  }

  leave_room_b() {
    this.socket.emit('leave-room', 'bbb');
  }

  leave_room_c() {
    this.socket.emit('leave-room', 'ccc');
  }

  leave_room_d() {
    this.socket.emit('leave-room', 'ddd');
  }


  leave_room_all() {
    this.socket.emit('leave-all', 'dummy');
  }

  finalize() {
    this.mixidea_io.close();
  }

}
