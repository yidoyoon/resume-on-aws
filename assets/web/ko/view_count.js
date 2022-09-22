let url = new URL(
  "https://t0j7qbuiu8.execute-api.ap-northeast-2.amazonaws.com/prod/resume-on-aws-UpdateCounter-8XiUSbUelfWW"
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
