var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDQyZDJmYjc0ZDAwMTFiZTdlMWQiLCJ1c2VybmFtZSI6ImlrdXB0c292dkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODAyMjE5MX0._xGo7mznE4UBBhZLVydU1oJTlgROBjblgPBoTfB5a0o';
var skb = new Skb(token);
skb.taskHelloWorld('Надеюсь что сделал все правильно');
