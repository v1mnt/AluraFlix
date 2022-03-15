var listaFilmes = [
    "https://nomoremag.com/wp-content/uploads/2020/09/Peaky-Blinders.jpg",
    "https://br.web.img3.acsta.net/r_1280_720/pictures/20/09/25/09/06/0492330.jpg",
    "https://br.web.img2.acsta.net/pictures/19/08/22/09/22/0020378.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/29/99/19874070.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91eJSUExHgL.jpg"
  ];
  
  for(var i = 0; i < listaFilmes.length; i++){
    var elem = document.createElement("img");
    elem.setAttribute("src", listaFilmes[i]);
    elem.setAttribute("width", "180")
    elem.setAttribute("length", "300")
    elem.setAttribute("alt", "Filmes");
    document.getElementById("placehere").appendChild(elem);
   }
  
  function AdicionarFilmes() {
    var filme = prompt("Coloque o endereço de imagem do filme que deseja adicionar :)");
    
    if (filme == null || filme == "" || filme.toLowerCase().includes('.jpg') == false){
        alert("Favor inserir um cartaz válido")
    } else if (listaFilmes.includes(filme)){
        alert("Esse cartaz já foi inserido")
    } else {
        var elem = document.createElement("img");
        elem.setAttribute("src", filme);
        elem.setAttribute("width", "200")
        elem.setAttribute("length", "442")
        elem.setAttribute("alt", "Filmes");
        document.getElementById("placehere").appendChild(elem);
      }
    }
  
  
  