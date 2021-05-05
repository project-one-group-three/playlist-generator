fetch(
  "https://theaudiodb.p.rapidapi.com/searchtrack.php?s=bob%20marley&t=buffalo%20soldier",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3cd0cafce3mshd3f737212ef361cp1924a4jsnda16ebd63191",
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

