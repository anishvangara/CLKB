
<% include header %>

<p> 
  Words found: <%= words.length %>
</p>

<hr/>

<% for(var i = 0; i < words.length; i++) { %>
  <a href="https://www.google.com/search?q=define <%= words[i] %>" target="_blank"><%= words[i] %></a><br/>
<% } %>
<hr/>

<% include footer %>