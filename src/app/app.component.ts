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
  socket_io: any;

  constructor() {

    this.socket_io = io.connect(SOCKET_URL + SOCKET_NAMESPACE, (socket) => {
      socket.join('room-a');
    });

  }

  send_data(){


  }


  finalize() {
    this.socket_io.close();

  }





}
