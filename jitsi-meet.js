const domain = "meet.jit.si";

const options = {
  roomName: "dojopd-all",
  width: "100%",
  height: "100%",
  parentNode: document.querySelector("#meet")
};
const api = new JitsiMeetExternalAPI(domain, options);

const rows = document.querySelectorAll(".row");

// for each row
for (const row of rows) {
  row.addEventListener("click", function(event) {
    // TODO: scoll up
    room = row.getAttribute("data-url");
    alert(room);
  });
}
