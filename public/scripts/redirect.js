setTimeout(() =>{
    const queryString  = location.search
    console.log(queryString)
    //utilizando aspas simples pois só assim ele lê a variavel queryString
    window.location.href = `http://127.0.0.1:5500/study${queryString}`;
}, 2000)