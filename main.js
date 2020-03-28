		/* jitsi setup */
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'dojopd-all',
			requireDisplayName: true,
            // width: document.querySelector("#meet").clientWidth,
            // height: document.querySelector("#meet").clientHeight,
            parentNode: document.querySelector('#meet')
	    };
        let api = null;  // new JitsiMeetExternalAPI(domain, options);
       /* interfaccia */
       document.querySelector("#board").addEventListener('click', hnd_teamswitch);
       document.body.addEventListener('unload', ev=> api.dispose());
       document.getElementById("shrink").addEventListener('click', hnd_changeZoom);
       document.getElementById("enlarge").addEventListener('click', hnd_changeZoom);

function hnd_changeZoom(ev) {
		ev.preventDefault();
		var step = 1 * ev.target.dataset.delta;
		var limit = 1 * ev.target.dataset.limit;
		var actual = 1 * document.body.dataset.fsize;
		if (step < 0 && actual <= limit) return;
		if (step > 0 && actual >= limit) return;
		actual += step;
		document.body.dataset.fsize = actual;
		document.body.style="font-size: " + actual + "px;";
}

function hnd_teamswitch(ev) {
	if (ev.target.matches('a.command')) {
	  ev.preventDefault();
	  var self = ev.target;
	  if (api !== null) {
		api.executeCommand('hangup');
		api.dispose();
	  }
	  if (!document.body.classList.contains("meet")) {
		document.body.classList.add("meet");
	  }
	  var nextRoomOpt = options;
	  nextRoomOpt.roomName = self.dataset.room;
	  if (self.classList.contains('zoo')) {
		  document.body.className = "meet";
	  } else {
  	  	  document.body.classList.add('zoo');
		  document.body.classList.add(self.href.split("#")[1]);
  	  }
	  api = new JitsiMeetExternalAPI(domain, nextRoomOpt);
   }
 }


