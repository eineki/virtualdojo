const domain = "meet.jit.si";

const options = {
  roomName: "dojopd-all", // initial room
  width: "100%",
  height: "100%",
  parentNode: document.querySelector("#meet")
};
var api = new JitsiMeetExternalAPI(domain, options);

// get all .row div
const rows = document.querySelectorAll(".row");

// for each row add on click listener
for (const row of rows) {
  row.addEventListener("click", function(e) {
    // TODO: scoll up

    // destroy existing meet
    api.dispose();

    options.roomName = row.getAttribute("data-url"); // change room name
    api = new JitsiMeetExternalAPI(domain, options); // generate new meet
  });
}
