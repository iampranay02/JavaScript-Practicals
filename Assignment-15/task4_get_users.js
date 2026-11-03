// Name: Pranay Kesarwani | Roll No: 2510303375 | Assignment: 15

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" },
      ]);
    }, 100);
  });
}

async function showUsers() {
  const users = await getUsers();
  users.forEach((u) => console.log(u.name));
}
showUsers();
