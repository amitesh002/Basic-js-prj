const profileContainer = document.querySelector(".icon");
const displayName = document.querySelector(".name");
const search = document.querySelector("#searchBtn");

search.addEventListener("click", () => {
  const inputName = document.querySelector("#nameInput").value.trim();

  if (!inputName) {
    alert("Please enter a GitHub username");
    return;
  }

  fetch(`https://api.github.com/users/${inputName}`)
  .then((response) => { 
    if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();})
  .then((data) => {
    displayName.textContent = data.name || data.login;

        
        profileContainer.innerHTML = `
          <img 
            src="${data.avatar_url}" 
            class="profile-pic"
            alt="Profile Image"
          />
        `;
      })
  .catch((error) => {
    console.error(error);
  });

        
    

  
});

