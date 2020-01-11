function jogarJokenpo(chave){
    /*A chave corresponde com a escolha do usuário:
    1 pedra
    2 papel
    3 tesoura
    */
    //Vamos realizar a jogada do computador
    let pc = jogarComputador();
    //Transformando chave em string para as comparações
    switch(chave){
        case 1: chave = "pedra";
                break;
        case 2: chave = "papel";
                break;
        case 3: chave = "tesoura";
                break;
    }
    //Chamando uma função que irá me retornar o vencedor
    let vencedor = retornarVencedor(chave, pc);
    //Função para desenhar a tela
    desenharTela(vencedor, chave, pc);
}
function desenharTela(vencedor, j1, pc){
    //Pegando o conteudo interno da pagina
    let x = document.getElementById("conteudo").innerHTML;
    x = `<h1>Você jogou</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //Definindo o que eu joguei e colocando o botao baseado no que joguei
    if(j1 == "pedra")x = `<button type="button" class="JO"></button>`;
    if(j1 == "papel")x = `<button type="button" class="KEN"></button>`;
    if(j1 == "tesoura")x = `<button type="button" class="PO"></button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando outro titulo
    x = `<h1>Computador jogou</h1>`;
    document.getElementById("conteudo").innerHTML += x;
    //Escolhendo o que o computador jogou
    if(pc == "pedra")x = `<button type="button" class="JO"></button>`;
    if(pc == "papel")x = `<button type="button" class="KEN"></button>`;
    if(pc == "tesoura")x = `<button type="button" class="PO"></button>`;
    document.getElementById("conteudo").innerHTML += x;
    if(vencedor == 1)
        x = `<h1>VOCÊ VENCEU!</h1>`;
    if(vencedor == -1) 
        x = `<h1>COMPUTADOR VENCEU</h1>`;
    if(vencedor == 0)
        x = `<h1>EMPATE</h1>`;
    document.getElementById("conteudo").innerHTML += x;
}
function jogarComputador(){
    let pc = Math.ceil(Math.random() * 3);
    //Transformo a jogada do pc em string: pedra, papel ou tesoura
    switch(pc){
        case 1: pc = "pedra";
                break;
        case 2: pc = "papel";
                break;
        case 3: pc = "tesoura";
                break;
        default: console.log("Ocorreu erro na randomização!");
    }
    return pc;
}
function retornarVencedor(j1, pc){
    /* Retornos:
    0 empate
    1 j1 venceu
    -1 pc venceu
    */
    //Casos de empate
    if(j1 == "pedra" && pc == "pedra")return 0;
    if(j1 == "papel" && pc == "papel")return 0;
    if(j1 == "tesoura" && pc == "tesoura")return 0;
    //Vitorias j1
    if(j1 == "pedra" && pc == "tesoura")return 1;
    if(j1 == "papel" && pc == "pedra")return 1;
    if(j1 == "tesoura" && pc == "papel")return 1;
    //Vitorias pc
    if(pc == "pedra" && j1 == "tesoura")return -1;
    if(pc == "papel" && j1 == "pedra")return -1;
    if(pc == "tesoura" && j1 == "papel")return -1;
}