var postAPI = "https://62c6616174e1381c0a5ddc3a.mockapi.io/dataNobel/demo";
fetch(postAPI)
  .then(function (response) {
    // console.log(response);
    return response.json(); //return về 1 mảng chứa Object và javacript types
  })
  .then((data) => {
    // console.log(data)
    //search Year
    document.getElementById("all").onclick = function () {
      var table = "";
      let getAll = data.filter((data) => {
        table += `<tr>
          <td><img style="width: 183px;" src="${data.image}"/></td>
          <td>${data.name}</td>
          <td>${data.year}</td>
          <td>${data.prize}</td>
          <td>${data.data}</td>
          <td>${data.motivation}</td>
          </tr>`
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("2021").onclick = function () {
      var table = "";
      let getYear2021 = data.filter((data) => {
        if (data.year === 2021) {
          table += `<tr>
          <td><img style="width: 183px;" src="${data.image}"/></td>
          <td>${data.name}</td>
          <td>${data.year}</td>
          <td>${data.prize}</td>
          <td>${data.data}</td>
          <td>${data.motivation}</td>
          </tr>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2020").onclick = function () {
      var table = "";
      let getYear2020 = data.filter((data) => {
        if (data.year === 2020) {
          table += `<tr>
          <td><img style="width: 183px;" src="${data.image}"/></td>
          <td>${data.name}</td>
          <td>${data.year}</td>
          <td>${data.prize}</td>
          <td>${data.data}</td>
          <td>${data.motivation}</td>
          </tr>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2019").onclick = function () {
      var table = "";
      let getYear2019 = data.filter((data) => {
        if (data.year === 2019) {
          table += `<tr>
          <td><img style="width: 183px;" src="${data.image}"/></td>
          <td>${data.name}</td>
          <td>${data.year}</td>
          <td>${data.prize}</td>
          <td>${data.data}</td>
          <td>${data.motivation}</td>
          </tr>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2018").onclick = function () {
      var table = "";
      let getYear2018 = data.filter((data) => {
        if (data.year === 2018) {
          table += `<tr>
          <td><img style="width: 183px;" src="${data.image}"/></td>
          <td>${data.name}</td>
          <td>${data.year}</td>
          <td>${data.prize}</td>
          <td>${data.data}</td>
          <td>${data.motivation}</td>
          </tr>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
  });