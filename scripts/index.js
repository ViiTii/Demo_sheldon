
const likeElist = document.querySelectorAll('.like');

likeElist.forEach(likeEL => {
  likeEL.addEventListener('click', () => {
    likeEL.classList.toggle('ativo');

    likeElist.forEach(element => {
      if (element !== likeEL) {
        element.classList.remove('ativo');
      }
    });
  });
});
