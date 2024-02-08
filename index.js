function moveNoRandomly() {
    var noButton = document.getElementById('noButton');
    var maxX = window.innerWidth - noButton.offsetWidth;
    var maxY = window.innerHeight - noButton.offsetHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  }

  function showGif() {
    var proposal = document.getElementById('proposal');
    proposal.innerHTML = '<img src="https://media3.giphy.com/media/qCT06WLJURMyfsEi2r/giphy.webp?cid=ecf05e477md4ych5sz4iyjjcvj3lwacxo43x29fzil80hw2r&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="Proposal Accepted"> <h1>LOVE YOU :></h1>';
  }