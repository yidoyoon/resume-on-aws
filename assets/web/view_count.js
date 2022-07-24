let url = new URL("https://t0j7qbuiu8.execute-api.ap-northeast-2.amazonaws.com/prod/resume-on-aws-UpdateCounter-8XiUSbUelfWW");

async function updateCount() {
    let response = await fetch(url);
    document.getElementById("count").innerHTML = await response.text();
}

(async() => {
    await updateCount();
})();
