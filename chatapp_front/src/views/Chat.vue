<template>
  <main>
    <h1 class="welcome-message">Welcome {{ chatUserName }}!</h1>

    <section id="chat">
      <!-- left hand side -> Users go here -->

      <section id="chat-users-ui">
        <h2>Current Users</h2>

        <!-- Lay this out however you llike - We're just using a list -->

        <ul id="current-users">
          <!-- Render a users component for every connected user here -->
        </ul>
      </section>

      <!-- Right hand side -> Chat UI -->
      <section id="chat-messages-ui">
        <!-- Render a component for every message -->
        <ChatMessage
          v-for="msg in messages"
          :key="msg.id"
          :message="msg.message"
          :user="msg.user"
        />

        <section id="text-wrapper">
          <textarea @keyup="sendOnEnter" id="message" v-model="message" placeholder="What's on your mind?"></textarea>

          <button id="sendMessage"
            @click="sendMessage"
            :disabled="messageContent"
            :class="{'disabled' : messageContent}"
          >
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import io from "socket.io-client";
import vars from "@/env.js";
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "TheChatComponent",

  props: {
    chatUserName: String
  },

  mounted() {
    let vm = this;

    this.socket.on("CONNECTED", (id) => {
      // debugger;
      vm.socketID = id;
    })

    this.socket.on('MESSAGE', (message) => {
      vm.messages = [...vm.messages, message];
      console.log(message);
    })

    this.socket.on('TEST_FOR_EVENT', (data) => {
      console.table(data);
    })
  },

  computed: {
    messageContent: function() {
      return this.message.trim() === '';
      // this is a string. 'trim' key removes the empty blank cause it's empty string.
    }
  },

  data() {
    return {
      // store the connection ID, so we can use it later
      socketID: '',
      message: '',
      messages: [],

      socket: io(vars.basePath, {
        withCredentials: false,
        extraHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    }
  },

  methods: {
    sendMessage() {
      // send the message to the chat service
      this.socket.emit('SEND_MESSAGE', { user: this.chatUserName || "Anonymous", message: this.message });

      this.message = '';
    },

    sendOnEnter() {

      if (this.messageContent == false && event.keyCode == 13) {
        this.sendMessage();
        } else {
          this.socket.emit("TYPING", { user: this.username || "Anonymous"});
        }
      }
  },

  components: {
    ChatMessage
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/chat.scss";
</style>