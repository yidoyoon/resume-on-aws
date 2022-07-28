let url = new URL("https://t0j7qbuiu8.execute-api.ap-northeast-2.amazonaws.com/prod/resume-on-aws-UpdateCounter-8XiUSbUelfWW");

async function updateCount() {
    let response = await fetch(url);
    const views = await JSON.parse(response)
    document.getElementById("count").innerHTML = views.body
}

(async () => {
    await updateCount();
})();
