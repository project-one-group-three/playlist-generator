

let submitBtn = $("#submitBtn");


function getToken(userGenre, userLength) {
  console.log(userGenre);
  const clientId = "4c2b7382b83842179f3780349cc8b6a6";
  const clientSecret = "7a5ae8c0d13d415a9e477549ba0cfb7b";
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => {
      fetch(
        `https://api.spotify.com/v1/recommendations?limit=${userLength}&market=ES&seed_genres=${userGenre}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer  " + data.access_token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    });
}


$(document).ready(function () {
$("#submitBtn").click(function (event) {
  event.preventDefault();
  let userGenre = $("#inlineFormCustomSelectPrefone").val();
  let userLength = $("#inlineFormCustomSelectPrefthree").val();
  console.log($("#inlineFormCustomSelectPrefone").val());
  getToken(userGenre, userLength);
});
})

