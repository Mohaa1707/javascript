class Github {
  constructor() {
    this.client_id = "c49c500c809f579678c2";
    this.client_secret = "d3ace284dfa9bad5470161e9d6fb28007d003da8";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id} & client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

// const test = new Github();
// console.log(test);

// test.getUser("Mohaa1707");
