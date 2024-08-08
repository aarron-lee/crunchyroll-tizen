// GET /accounts/v1/me/multiprofile

// # Request Headers
// Authorization: Bearer ${TOKEN}

window.profilesScreen = {
  id: "profiles-screen",
  init: async function () {
    var profiles_element = document.createElement("div");

    profiles_element.id = profilesScreen.id;

    profiles_element.innerHTML = `
    <div class="content">
      <div class="container-mid">
        <ul class="options" id="settings-menu">${profilesScreen.getOptions()}</ul>
      </div>
    </div>
    `;

    document.body.appendChild(profiles_element);
  },
  destroy() {
    document.body.removeChild(document.getElementById(profilesScreen.id));
  },
  getOptions: async function () {
    // const headers = new Headers();
    // headers.append("Authorization", `Bearer ${storage.access_token}`);
    // headers.append("Content-Type", "application/x-www-form-urlencoded");

    // const result = await fetch(
    //   `${service.api.url}`,
    //   { headers }
    // );

    // if (result.ok) {
    //   const profiles = await result.json();

    //   console.log(profiles);
    // }

    return "";
  },
};
