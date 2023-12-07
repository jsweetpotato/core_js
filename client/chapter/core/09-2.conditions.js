let userName = prompt("who's there");

if (userName?.toLowerCase() === 'admin') {
  let password = prompt('Password?');
  if (password?.toLowerCase() === 'themaster') {
    alert('Welcome!');
  } else if (password && !password.includes(' ')) {
    alert('Wrong password');
  }
} else if (userName && !userName.includes(' ')) {
  alert("I don't know you");
}
