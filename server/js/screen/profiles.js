// GET /accounts/v1/me/multiprofile

// # Request Headers
// Authorization: Bearer ${TOKEN}

window.profilesScreen = {
  id: "profiles-screen",
  init: function () {
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
  getOptions: function () {
    const profiles = session.storage.profiles;

    return profiles.map((profile, idx) => {
      const { is_selected, profile_name } = profile;

      return `<li class="${is_selected ? "selected" : ""}">
        ${profile_name}
        </li>`;
    });
  },

  keyDown(event) {
    console.log(event);
    switch (event.keyCode) {
      case tvKey.KEY_LEFT:
        menu.open();
        break;
    }
  },
};
