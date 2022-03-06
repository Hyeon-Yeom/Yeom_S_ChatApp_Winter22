# Chat App
by Seunghyeon Yeom (0975764)

## Theme
Harry Potter

## Software
Npm (Express, Axios, Socket.io)

## Processes
Greeting Page
- path: '/'
- Details: User can move to 'register page' by clicking 'Join' Button.

Register Page
- path: '/register'
- Details: User can register themselves in this page, OR, if they are already enrolled to this chat site, they can move to 'log in' page through 'Welcome' button

Log In Page
- path: '/login'
- Details: User can type their username and password to log in. Currently, there is not a button or any linked text to move to this page, but you can access it through "localhost:8080/#/login"

Home Page
- path: '/home'
- Details: It is what I learned and created in class. Users can enter to the chat room with their names or 
Chat Room Page  as anonymous.

Chat Room Page
- path: '/chat'
- Details: It is what I learned and created in class either. User can leave their messages and have a talk.

## Problems
- Couldn't find ways to make 'register' button or 'log in' button active. Currently, the users cannot know if they are registered successfully and also, these buttons don't take the users to chat room or '/home' page.

- Had an issue with node. Couldn't make the messages stored by using node app function.