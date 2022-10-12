import Processo from "../abstracoes/processo";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
  private acomodacoes: Acomodacao[];
  constructor() {
    super();
    this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
  }
  processar(): void {
    
    let diretor = new DiretorSolteiroSimples();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorSolteiroMais();
    this.acomodacoes.push(diretor.construir());
  }
}
