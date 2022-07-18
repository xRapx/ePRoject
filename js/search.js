var postAPI = "https://62c6616174e1381c0a5ddc3a.mockapi.io/dataNobel/demo";
fetch(postAPI)
  .then(function (response) {
    // console.log(response);
    return response.json(); //return về 1 mảng chứa Object và javacript types
  })
  .then((data) => {
    // console.log(data)
    // ------------------------Sreach Bar --------------------------
    var search = document.getElementById('search');
    var matchlist = document.getElementById('match-list');

    const searchStates = async searchText => {
      const states = data;
      //regex
      let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
      });

      if (searchText.length === 0) {
        matches = [];
      }
      outputHtml(matches);
    }
    //show data in html
    const outputHtml = matches => {
      const html = matches.map(match => `
        <ul style="list-style: none;display: inline-flex;">
          <li>
              <img style="width: 183px;" src="${match.image}"><br>
              <span style="color:red;">${match.name}</span><br>
              <span>${match.nganh}</span><br>
              <span>Year : ${match.year}</span><br>
          </li>
        </ul>`
        ).join('');
      matchlist.innerHTML = html;
    }
    search.addEventListener('input', () => searchStates(search.value))
  })