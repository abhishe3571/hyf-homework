/* 
Mouse position
Create a handler, that prints the x,y coordinate of the mouse event.

Mouse position online tool
Say we want to create an online tool where businesses can see where their users' mouse is
most of the time. Businesses can now figure out if they have designed their website correctly.

Lets create some js that will get the average x and y position of a user after 30 seconds.

Before starting with this exercise, create a plan for how you will implement this! Maybe together with your mentor.

© 2020 GitHub, Inc.
*/

window.addEventListener("mousemove", function (e) {
  document.getElementById("x-value").textContent = e.x;
  document.getElementById("y-value").textContent = e.y;
});

