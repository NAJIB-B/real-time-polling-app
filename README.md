# Real time polling App
## Overview

![project architectture](https://assets.roadmap.sh/guest/realtime-polling-app-8qx5h.png)

A real-time polling app that implements a client-server application using sockets for 2-way communication. The client, designed as a Command Line Interface (CLI) tool, connects to the server and is prompted with a poll question. 
When the client votes, an updated table of poll results is sent to all connected clients, demonstrating effective real-time data sharing.


### Installation guide 

<ol>
  <li><strong>Clone the project repo</strong></li>
  <pre><code>git clone https://github.com/NAJIB-B/real-time-polling-app.git</code></pre>

  <li><strong>Navigate into the project directory</strong></li>
  <pre><code>cd real-time-polling-app</code></pre>

 <li><strong>Start the server</strong></li>
  <pre><code>node server.js</code></pre>

  
  <li><strong>Start the client </strong></li>
  <pre><code>node client.js</code></pre>
</ol>
