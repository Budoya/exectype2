let todosPlanetas: Planeta[] = [];

  interface Planeta {
    nome: string;
    coordenadas:[number,number,number,number] ;
    situacao: Situacao;
    satelites : string[]
  }
    
  enum Situacao {
    Habitavel = "habitavel",
    Inabitavel = "inabitavel",
    Habitado = "habitado",
    Inexplorado = "inexplorado"
  }

 function salvar(nome: string, coordenadas:[number,number,number,number], situacao: Situacao, satelites : string[]): Planeta {
    verificarSituacaoValida(situacao);
   const planeta: Planeta = {
      nome,
      coordenadas,
      situacao,
      satelites
    };
    todosPlanetas.push(planeta);
    return planeta;
}

function verificarSituacaoValida(situacao: string): void {
    if (!Object.values(Situacao).includes(situacao)) {
      console.log(`Situacao inválida: ${situacao}`);
    }
  }
  
  function alterar(nomePlaneta: string, novaSituacao: Situacao): Planeta | undefined {
    const planetaIndex = todosPlanetas.findIndex(planeta => planeta.nome === nomePlaneta);
    verificarSituacaoValida(novaSituacao);
    if (planetaIndex === -1) {
      console.log(`Planeta não encontrado: ${nomePlaneta}`);
      return undefined;
    }
  
    const planeta = todosPlanetas[planetaIndex];
    planeta.situacao = novaSituacao;
  
    return planeta;
  }

salvar("macacos",[12,32,41,2],"habitavel",["lua1","lua2"])
salvar("planeta2",[12,3,4,5],"inabitavel",["tome","receba","vish"])
console.log(todosPlanetas)
alterar("macacos","inexplorada")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log(todosPlanetas)
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
alterar("macacos","fsd")
console.log(todosPlanetas)