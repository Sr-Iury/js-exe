let contador = 0;
let input = document.getElementById("inputTarefa");
let btn = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function AddTarefa(){
  let valor = input.value;
  if((valor !== null) && (valor !== "") && (valor!== undefined)){
    contador++;
    let novoItem = `    <div id="${contador}"class="item">
    <div onclick="MarcarTarefa(${contador})" class="item-icone">
      <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
    </div>
    <div onclick="RiscarNome(${contador})" class="item-nome">
         ${valor}
    </div>
    <div class="item-botao">
      <button onclick="Deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
    </div>
  </div>`;
    main.innerHTML += novoItem;
    input.value = "";
    input.focus();
    
  }
}
function Deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}
input.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    btn.click();
  }
})
function MarcarTarefa(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  if(classe == "item"){
    item.classList.add("clicado");
    var icone = document.getElementById("icone_"+id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  }
  else{
    item.classList.remove("clicado");
    var icone = document.getElementById("icone_"+id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}
function RiscarNome(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  if(classe == "item"){
    item.classList.add("clicado");
    var icone = document.getElementById("icone_"+id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  }
  else{
    item.classList.remove("clicado");
    var icone = document.getElementById("icone_"+id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}
