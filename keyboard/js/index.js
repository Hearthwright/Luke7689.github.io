function instr(note) {
  var audio = new Audio("http://www.philharmonia.co.uk/assets/audio/samples/french%20horn/french-horn_" + note + "_05_mezzo-forte_normal.mp3")
  audio.play();
}
// setInterval("instr('g5')")