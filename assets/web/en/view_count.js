let url = new URL(
  "https://7a0xc4z2ud.execute-api.us-east-1.amazonaws.com/prod/updateViews"
);

async function updateCount(url) {
  fetch(url)
    .then(async (response) => {
      let data = await response.json();
      if (response.status === 200) {
        document.getElementById("views").innerHTML = data.body;
      } else {
        console.log("Something went wrong. HTTP response status not 200");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

(async () => {
  await updateCount(url);
})();
