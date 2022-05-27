function switchMode() {
  const background = document.querySelector('#background').classList;
  const dark = document.querySelector('#dark').classList;
  const light = document.querySelector('#light').classList;
  if (background.contains('darkBG')) {
    background.remove('darkBG');
    light.remove('hidden');
    dark.add('hidden');
  } else {
    background.add('darkBG');
    light.add('hidden');
    dark.remove('hidden');
  }
}
