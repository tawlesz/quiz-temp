(window.BUILTIN=window.BUILTIN||[]).push({
 "id": "organizacao",
 "nome": "Organização de Computadores",
 "desc": "Stallings e Tanenbaum, Aulas 1 a 6",
 "cards": [
  {
   "t": "mc",
   "tema": "Ciclo de busca e execução",
   "q": "(Capítulo 3 — Livro do Stallings)\n\n“Em sua maneira mais simples, o processamento de instruções consiste em duas etapas: o processador lê (busca) instruções da memória, uma de cada vez, e executa cada instrução.” (STALLINGS, 2017)\n\nCom relação ao ciclo de busca e execução, é correto afirmar:",
   "o": [
    "No ciclo de busca são somados os valores do acumulador.",
    "Uma das ações que o processador executa durante um ciclo de instrução é transferir um determinado dado da memória para um dispositivo de entrada e saída.",
    "A primeira etapa dentro de um ciclo de busca é ler o conteúdo do contador de programa.",
    "A decodificação da operação de instrução faz parte do ciclo de busca."
   ],
   "c": 2,
   "j": "A busca começa lendo o contador de programa (PC), que guarda o endereço da próxima instrução. Somar valores no acumulador é operação de execução, e a decodificação vem depois da busca.\n\nObs.: O original traz uma figura do ciclo de instrução que não pôde ser incluída."
  },
  {
   "t": "mc",
   "tema": "Sistemas operacionais",
   "q": "(Capítulo 8 — Livro do Stallings)\n\n“Um sistema operacional é um programa que controla a execução dos programas aplicativos e atua como uma interface entre o usuário e o hardware do computador.” (STALLINGS, 2017)\n\nSobre os Sistemas Operacionais, é correto afirmar:",
   "o": [
    "O sistema operacional é o responsável por inicializar o computador.",
    "Apesar de deixar o computador mais conveniente para uso, reduz a eficiência do mesmo.",
    "O sistema operacional muitas vezes abre mão do controle e deve depender do processador para permitir que ele readquira o controle.",
    "O sistema operacional faz uma conexão direta com o barramento de sistemas. Na verdade, é ele quem gerencia o fluxo de dados nesse barramento."
   ],
   "c": 2,
   "j": "Ao executar um programa, o SO cede o controle da CPU e depende de mecanismos do processador (como as interrupções) para retomá-lo. A alternativa B está errada: o SO existe para tornar o computador mais conveniente e também mais eficiente."
  },
  {
   "t": "mc",
   "tema": "Estrutura de um módulo de Entrada/Saída",
   "q": "Os módulos de Entrada/Saída (E/S) podem vir em diversos formatos e graus de complexidade, e controlar quantidades diferentes de dispositivos externos. Na figura do material é apresentado o diagrama de um módulo genérico.\n\nSobre a estrutura de um módulo de entrada e saída, é correto afirmar:",
   "o": [
    "Quanto mais periféricos estiverem conectados ao módulo de E/S, mais esse demorará para transmitir a informação para o barramento do sistema.",
    "O periférico pode enviar sinais de controle ao módulo de entrada/saída.",
    "Quanto mais linhas de endereços estiverem conectadas ao módulo E/S, mais rápida será a transferência de informação.",
    "Um módulo de E/S pode se conectar a vários periféricos, mas este só pode se conectar a um módulo de E/S."
   ],
   "c": 3,
   "j": "Um módulo de E/S pode controlar um ou mais periféricos, mas cada periférico se liga a um único módulo. Na B, quem envia sinais de controle é o módulo ao periférico; o periférico devolve sinais de estado e dados.\n\nObs.: Na prova original o gabarito dessa questão não aparece (a resposta B marcada estava errada). A letra D vem do banco anterior; confirme se puder. A figura do módulo de E/S não foi incluída."
  },
  {
   "t": "mc",
   "tema": "Memórias semicondutoras",
   "q": "As memórias semicondutoras apresentam diferentes características quanto à volatilidade, à programação e aos mecanismos de apagamento. A tabela apresentada compara essas características para as memórias RAM, ROM, PROM, EPROM, EEPROM e flash.\n\nCom base nas informações da tabela, analise as alternativas e assinale a correta.\n\n| Tipo | Categoria | Apagamento | Gravação | Volatilidade |\n| --- | --- | --- | --- | --- |\n| RAM | Leitura/escrita | Elétrico, nível de byte | Elétrica | Volátil |\n| ROM | Somente leitura | Não é possível | Máscaras | Não volátil |\n| PROM | Somente leitura | Não é possível | Elétrica | Não volátil |\n| EPROM | Principalmente leitura | Luz UV, nível de chip | Elétrica | Não volátil |\n| EEPROM | Principalmente leitura | Elétrico, nível de byte | Elétrica | Não volátil |\n| Flash | Leitura/escrita | Elétrico, nível de bloco | Elétrica | Não volátil |",
   "o": [
    "As memórias EEPROM e flash são não voláteis e permitem apagamento elétrico, realizado em nível de byte na EEPROM e em nível de bloco na flash.",
    "As memórias EPROM e EEPROM são não voláteis e permitem apagamento por luz ultravioleta, realizado em nível de chip em ambas as tecnologias.",
    "As memórias RAM e flash permitem gravação elétrica e são voláteis, necessitando de alimentação para conservar os dados armazenados.",
    "As memórias ROM e PROM são não voláteis e permitem apagamento elétrico, possibilitando a substituição dos dados após a programação inicial."
   ],
   "c": 0,
   "j": "EEPROM e flash conservam os dados sem alimentação e permitem apagamento elétrico; a diferença está na granularidade: byte na EEPROM e bloco na flash. B: o apagamento por luz ultravioleta, em nível de chip, é da EPROM. C: a flash é não volátil. D: ROM e PROM não permitem apagamento.\n\nObs.: A tabela do original era uma imagem; esta foi reconstruída a partir da tabela padrão do Stallings e das explicações da própria questão."
  },
  {
   "t": "mc",
   "tema": "Velocidade do microprocessador",
   "q": "(Capítulo 2 — Livro do Stallings)\n\n“O que dá aos processadores Intel x86 ou computadores mainframe da IBM a sua incrível potência é a busca implacável da velocidade pelos fabricantes de chip.” (STALLINGS, 2017)\n\nCom relação à velocidade do microprocessador, é correto afirmar que:",
   "o": [
    "O pipeline permite que duas instruções aconteçam paralelamente na mesma fase.",
    "A Lei de Moore (apresentada no Capítulo 1 do livro) prevê que a velocidade do chip dobra a cada 1,8 anos.",
    "A velocidade básica do microprocessador não alcança seu potencial, a menos que receba um fluxo constante de trabalho para fazer na forma de instruções.",
    "A predição de desvio está relacionada ao uso de diversos pipelines paralelos."
   ],
   "c": 2,
   "j": "Para aproveitar o potencial do processador é preciso alimentá-lo continuamente com instruções. No pipeline, instruções diferentes ocupam fases diferentes ao mesmo tempo (não a mesma fase), e a predição de desvio serve para manter esse fluxo sem interrupções."
  },
  {
   "t": "mc",
   "tema": "Balanço de desempenho de um computador",
   "q": "(Capítulo 2 — Livro do Stallings)\n\n“Embora a capacidade de processamento do processador tenha crescido em uma velocidade espantosa, outros componentes críticos do computador não a acompanham.”\n\nSobre o balanço de desempenho de um computador, pode-se afirmar que:",
   "o": [
    "Aumentar a frequência de acesso à memória principal aumenta o desempenho do computador.",
    "Evitar esquema de buffering entre a memória principal e a CPU é desejável.",
    "O caminho entre a CPU e a memória principal é o mais crítico, pois é por este caminho que são transportadas as instruções de programa.",
    "Diminuir a quantidade de bits recuperados ao mesmo tempo melhora o desempenho do computador."
   ],
   "c": 2,
   "j": "O caminho entre CPU e memória principal é o mais crítico porque por ele passam as instruções do programa. Para equilibrar o desempenho, o caminho é aumentar os bits recuperados por vez, usar caches/buffers e reduzir a frequência de acesso à memória principal, o oposto do que dizem A, B e D."
  },
  {
   "t": "mc",
   "tema": "Estrutura de interconexão",
   "q": "(Capítulo 3 — Livro do Stallings)\n\nUm computador é uma coleção de componentes ou módulos que pertencem a três categorias (processador, memória e entrada/saída) e que se comunicam entre si. Para que haja essa comunicação, é necessária uma estrutura de interconexão.\n\nA respeito de estruturas de interconexão, é correto afirmar:",
   "o": [
    "Linhas de sistemas são usadas para designar a origem ou o destino dos dados no barramento de dados.",
    "Eventualmente, a CPU pode enviar parte do endereço pelas linhas de controle quando este tiver um valor muito grande.",
    "O módulo de memória não precisa de linhas de controle, uma vez que só precisa das linhas de endereço e dados para localizar e transmitir/salvar a informação.",
    "A linha de endereço que conecta a CPU é unidirecional, ou seja, a CPU somente acessa endereço e nunca tem seu endereço acessado."
   ],
   "c": 3,
   "j": "As linhas de endereço são unidirecionais: a CPU envia o endereço do local que quer acessar. A origem/destino dos dados é indicada pelas linhas de endereço (A), e o módulo de memória precisa de linhas de controle, como leitura e escrita (C)."
  },
  {
   "t": "mc",
   "tema": "Dispositivos de Entrada/Saída",
   "q": "(Capítulo 1 — Livro do Stallings)\n\nO(s) responsável(eis) por mover os dados de dentro do computador para o ambiente externo é:",
   "o": [
    "Transportador de Dados.",
    "Dispositivos de Entrada/Saída.",
    "Registradores.",
    "Interconexões da CPU."
   ],
   "c": 1,
   "j": "Os dispositivos de Entrada/Saída fazem a comunicação entre o computador e o ambiente externo. Pense no monitor."
  },
  {
   "t": "mc",
   "tema": "Módulos de Entrada/Saída",
   "q": "Um sistema de computação é formado por processador, um conjunto hierárquico de memórias e também um conjunto de módulos de Entrada/Saída (E/S).\n\n“Cada módulo tem interface com o barramento do sistema ou com o comutador central e controla um ou mais dispositivos periféricos.” (STALLINGS, 2017)\n\nSobre os módulos de E/S, é correto afirmar:",
   "o": [
    "O módulo E/S tem duas funções:\n- interface com o processador e/ou memória\n- interface com o usuário",
    "Um periférico (ex.: mouse, teclado) pode estar conectado a um ou mais módulos de entrada/saída.",
    "O módulo de entrada e saída possui como função o controle e a temporização dos periféricos.",
    "Um exemplo de módulo de entrada/saída é o monitor."
   ],
   "c": 2,
   "j": "Entre as funções do módulo de E/S estão o controle e a temporização dos periféricos. Cada periférico se conecta a um único módulo (B), e o monitor é um periférico, não um módulo (D)."
  },
  {
   "t": "mc",
   "tema": "Computadores invisíveis",
   "q": "O autor do livro base, Andrew S. Tanenbaum, define a última geração dos computadores como a atual, a geração dos computadores invisíveis.\n\nAssinale a alternativa que justifica a utilização desta nomenclatura CORRETAMENTE:",
   "o": [
    "Chama-os de invisíveis, pois atualmente os computadores estarão por toda a parte, embutidos nos mais diversos locais, executando inusitadas funções, escondidos nos componentes (invisíveis).",
    "São considerados invisíveis por utilizarem materiais translúcidos em sua composição, tornando-os assim invisíveis.",
    "Chama-os de invisíveis por serem apenas a parte do computador que não está acessível ao usuário, os programas e aplicações, que não podendo as tocar, não as vê.",
    "São chamados de invisíveis devido ao minúsculo tamanho, que não é visível sem a utilização de lentes especiais, microscópios."
   ],
   "c": 0,
   "j": "Falava-se que no futuro (hoje) os computadores estariam por toda a parte, embutidos em locais variados e executando funções como abrir portas e acender luzes, escondidos nos componentes e por isso \"invisíveis\".\n\nFonte: Slide 6 — Aula 1"
  },
  {
   "t": "mc",
   "tema": "Componentes do sistema computacional",
   "q": "Formados pelos três componentes elementares, os sistemas computacionais são descritos nas aulas, nos materiais e pelo autor do livro base (Tanenbaum) como um sistema interconectado de:",
   "o": [
    "CPU, Monitor e Teclado.",
    "Dispositivos, Periféricos e Drives.",
    "Processadores (CPU), Memórias (principal e secundária) e Dispositivos de E/S.",
    "CPU, Periféricos e Dispositivos."
   ],
   "c": 2,
   "j": "Segundo Tanenbaum, os sistemas computacionais são formados por Processadores (CPU), Memórias (principal e secundária) e Dispositivos de E/S.\n\nFonte: Slides da Aula 2"
  },
  {
   "t": "mc",
   "tema": "Precedência dos operadores lógicos",
   "q": "Leia o fragmento de texto:\n\nORDEM DE PRECEDÊNCIA DOS OPERADORES LÓGICOS: Em certas situações o procedimento de pareação torna a análise de determinadas estruturas um tanto quanto complexas, tendo em vista a demasiada concentração de parênteses. Assim, para resolver, em parte, tais dificuldades, convencionalmente se estabelece uma ordem de precedência dos conectivos lógicos em que se torna desnecessária a pareação. (Raciocínio Lógico Quantitativo — Profª Paula Francis Benevides, Aula 1, p. 14)\n\nAssinale a alternativa CORRETA sobre a ordem de precedência das operações da lógica booleana.",
   "o": [
    "1. \"e\"\n2. \"ou\"\n3. \"Negação\"\n4. \"Parêntesis\"",
    "1. \"ou\"\n2. \"e\"\n3. \"Negação\"\n4. \"Parêntesis\"",
    "1. \"Parêntesis\"\n2. \"e\"\n3. \"ou\"\n4. \"Negação\"",
    "1. \"Parêntesis\"\n2. \"Negação\"\n3. \"e\"\n4. \"ou\""
   ],
   "c": 3,
   "j": "A ordem é: parênteses, negação (NÃO), conjunção (E) e, por último, disjunção (OU).\n\nFonte: Slide 19/26 do material complementar"
  },
  {
   "t": "mc",
   "tema": "Caminho de dados — componentes",
   "q": "A CPU (Unidade Central de Processamento) é um dos elementos fundamentais de qualquer sistema computacional, sendo composta por diversos circuitos internos. Uma parte da organização interna da CPU de Von Neumann é chamada de \"caminho de dados\".\n\nSobre a composição do \"caminho de dados\", é correto afirmar que os elementos que o integram são:",
   "o": [
    "Registradores, ULA e dispositivos de E/S.",
    "ULA, barramentos e dispositivos de E/S.",
    "Registradores, ULA e memória principal.",
    "Registradores, ULA e memória cache.",
    "Registradores, ULA e barramentos."
   ],
   "c": 4,
   "j": "Conforme o livro base (Organização Estruturada de Computadores, cap. 2, p. 43), o caminho de dados é composto pelos registradores, pela ULA e pelos barramentos."
  },
  {
   "t": "mc",
   "tema": "Caminho de dados — afirmações I, II e III",
   "q": "Definidos nas aulas, nos materiais de apoio e no livro base, o Caminho de Dados é composto por:\n- Registradores\n- ULA (Unidade Lógica e Aritmética)\n\nConsiderando as definições, pode-se afirmar que:\n\nI) O Caminho de Dados é controlado pela UC, é \"o coração\" da maioria das CPUs.\nII) O Caminho de Dados define o que a máquina pode fazer.\nIII) A velocidade do ciclo do caminho de dados determina, em última análise, a velocidade do processador. Quanto mais rápido o ciclo, mais rápido o funcionamento da máquina.\n\nAssinale a alternativa CORRETA:",
   "o": [
    "Todas as alternativas estão CORRETAS.",
    "Apenas as alternativas I e II são CORRETAS.",
    "As alternativas II e III são CORRETAS.",
    "Apenas a alternativa II é CORRETA."
   ],
   "c": 0,
   "j": "As três afirmações vêm direto do material: o caminho de dados é controlado pela UC, define o que a máquina pode fazer e a velocidade do seu ciclo determina a velocidade do processador.\n\nFonte: Slide 13/42, Aula 2; Tanenbaum, cap. 2.1.1"
  },
  {
   "t": "mc",
   "tema": "CISC e RISC",
   "q": "Sobre as arquiteturas CISC e RISC, descritas e comparadas na Aula 2 pelos materiais e pelo autor do livro base:\nCISC (Complex Instruction Set Computer): computador com conjunto de instruções complexo.\nRISC (Reduced Instruction Set Computer): computador com conjunto de instruções reduzido.\n\nPode-se concluir que:\n\nI) CISC é um conjunto de instruções grande, operações de tamanhos variáveis, com formatos complexos. Executa múltiplas operações quando uma única instrução é dada.\nII) RISC simplifica as instruções para executar mais rapidamente.\nIII) CISC: cada instrução executa apenas uma operação, todas do mesmo tamanho e com poucos formatos. Operações aritméticas são executadas entre registradores.\n\nAssinale a alternativa CORRETA:",
   "o": [
    "Apenas a alternativa I está CORRETA.",
    "As alternativas I e III são CORRETAS.",
    "As alternativas I e II estão CORRETAS.",
    "Apenas a alternativa III está CORRETA."
   ],
   "c": 2,
   "j": "I e II estão corretas. A III descreve características do RISC (uma operação por instrução, mesmo tamanho, poucos formatos, aritmética entre registradores) e não do CISC.\n\nFonte: Slides da Aula 2"
  },
  {
   "t": "mc",
   "tema": "Composição do processador",
   "q": "Um computador digital consiste em um sistema interconectado de processadores, memória e dispositivos de entrada/saída.\n\n\"O processador, também chamado de Unidade Central de Processamento (UCP), do inglês Central Processing Unit (CPU), é o principal componente eletrônico de um computador. Ele fica acoplado na placa-mãe e é o responsável pela execução, com auxílio da memória e dos dispositivos de entrada e saída, de todas as operações no computador. Pode ser considerado o \"cérebro\" do computador.\"\n\nEm relação à composição de um processador e com base no capítulo 2 do livro Organização Estruturada de Computadores (Tanenbaum), é correto afirmar:\n\nI) O processo de buscar instruções na memória principal e determinar o seu tipo é de responsabilidade da unidade de controle.\nII) Os registradores são memórias de baixa velocidade e utilizados somente para leitura de dados.\nIII) O registrador de instrução (IR) é utilizado para manter a instrução que está em execução no momento.",
   "o": [
    "Apenas I está correto.",
    "Apenas II está correto.",
    "Apenas III está correto.",
    "Apenas I e II estão corretos.",
    "Apenas I e III estão corretos."
   ],
   "c": 4,
   "j": "I e III estão corretas. A II está errada: os registradores são memórias de alta velocidade e permitem leitura e escrita.\n\nFonte: Tanenbaum, cap. 2, p. 43"
  },
  {
   "t": "mc",
   "tema": "Conjunto de instruções primitivas",
   "q": "No conteúdo apresentado na disciplina, o fragmento de texto a seguir define: \"Os circuitos eletrônicos que compõem o computador são capazes de reconhecer e executar diretamente um conjunto limitado de instruções simples. Estas instruções constituem uma linguagem (linguagem de máquina) que torna possível a \"comunicação\".\"\n\nA escolha deste conjunto de instruções primitivas é uma tarefa importante e delicada, envolvendo:",
   "o": [
    "Simplicidade - Consistência - Desempenho",
    "Status - Tamanho - Preço",
    "Material que compõe o produto - Temperatura - Valor",
    "Linguagem - Complexidade - Circuitos"
   ],
   "c": 0,
   "j": "Simplicidade (questão de custo), consistência (a simplicidade não deve atrapalhar a consistência do conjunto) e desempenho (espera-se um desempenho mínimo de qualquer máquina).\n\nFonte: Slide 3 — Aula 1"
  },
  {
   "t": "mc",
   "tema": "Multicomputadores",
   "q": "Definidos na Aula 6, os multicomputadores apresentam-se como uma alternativa de desempenho. Três exemplos são descritos e, um deles em especial, tem sido considerado o mais rápido.\n\nConsiderando o conteúdo ministrado nas aulas e no material complementar (artigo), assinale a alternativa CORRETA do nome deste equipamento:",
   "o": [
    "Computador CyberPower Fang III",
    "IBM BlueGene",
    "Computador Origin The Big O",
    "Apple PowerPC G5"
   ],
   "c": 1,
   "j": "O IBM BlueGene é o multicomputador apontado como o mais rápido entre os exemplos apresentados na Aula 6.\n\nFonte: Aula 6 — Sugestão de leitura"
  },
  {
   "t": "mc",
   "tema": "Utilitários do sistema operacional",
   "q": "Foram apresentados, nos objetivos e funções de sistemas operacionais (Aula 5), um conjunto de programas de sistema (utilitários).\n\nConsiderando os conteúdos da Aula 5 e do livro base, assinale a alternativa CORRETA sobre os utilitários:",
   "o": [
    "São úteis para solução de problemas relacionados às dificuldades de manuseio e instalação de sistemas computacionais em ambientes sem acesso à internet.",
    "Auxiliam os usuários a utilizar de forma adequada os serviços contratados.",
    "Não são úteis, são apenas parte do conjunto.",
    "Eles implementam funções usadas frequentemente que auxiliam na criação de programas, gerenciamento de arquivos e controle de dispositivos de E/S (Entradas e Saídas)."
   ],
   "c": 3,
   "j": "Os utilitários implementam funções de uso frequente, como apoio à criação de programas, gerenciamento de arquivos e controle de dispositivos de E/S.\n\nFonte: Slide 39/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Etapas da execução de instruções",
   "q": "Leia o fragmento de texto a seguir:\n\"A operação dos computadores consiste em executar instruções sequenciais (uma após a outra).\" (Slide 28/43 da Aula 4 — Arquitetura de Computadores)\n\nAssinale a alternativa CORRETA.\nEm quantas etapas a execução de instruções é subdividida:",
   "o": [
    "5",
    "4",
    "7",
    "6"
   ],
   "c": 2,
   "j": "São 7 etapas: (1) buscar a próxima instrução e levá-la ao registrador de instrução; (2) atualizar o PC para a instrução seguinte; (3) determinar o tipo da instrução; (4) localizar o dado na memória, se houver; (5) buscar o dado em um registrador; (6) executar a instrução; (7) voltar ao passo 1.\n\nFonte: Slides 19, 30 e 31/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Desempenho de computadores",
   "q": "Na Aula 6 é apresentado o tema Desempenho. Leia o fragmento de texto:\n\"O ponto principal da construção de um computador paralelo é fazer com que ele execute mais rápido do que uma máquina com um único processador. Se ele não cumprir esse simples objetivo, não vale a pena tê-lo.\"\n\nConsiderando o texto, os conteúdos das aulas e os materiais complementares, assinale a alternativa CORRETA sobre desempenho:",
   "o": [
    "Para mensurar (medir) o desempenho são utilizadas as métricas de Hardware e Software.",
    "São utilizados programas aplicativos (Apps) que medem o desempenho da CPU.",
    "O desempenho é medido pelo fabricante do processador, que informa aos clientes os testes de desempenho realizados.",
    "São comparados pelos fabricantes entre os processadores quais são mais velozes e quais mais lentos."
   ],
   "c": 0,
   "j": "O desempenho é medido por meio de métricas de hardware e de software.\n\nFonte: Slide 19/22 do Hyperbook — Aula 6"
  },
  {
   "t": "mc",
   "tema": "Aumento da velocidade dos computadores",
   "q": "Na Aula 6 foram apresentados alguns modos de aumentar a velocidade, em especial utilizando o paralelismo no chip.\n\nConsiderando o conteúdo das aulas, o material complementar e o livro base, assinale a alternativa CORRETA sobre os modos utilizados para aumento da velocidade:",
   "o": [
    "Atualização (upgrade) de processador e memória RAM por frequências de clock maiores.",
    "Combinação no uso de CPUs de diferentes fabricantes, como Intel e AMD.",
    "Paralelismo no nível da instrução, multithreading e mais de uma CPU no chip.",
    "Paralelismo no nível físico ou CPU com mais de um núcleo ou clusters de computadores."
   ],
   "c": 2,
   "j": "O paralelismo no chip se dá por paralelismo no nível da instrução, multithreading e mais de uma CPU no mesmo chip.\n\nFonte: Slide 15/46 — Aula 6"
  },
  {
   "t": "mc",
   "tema": "Computação em cluster",
   "q": "Foram apresentados na Aula 6 exemplos de computação em cluster.\n\nAssinale a alternativa CORRETA que descreve uma das características desse tipo de computação (cluster):",
   "o": [
    "Computadores desatualizados, que não são acessíveis.",
    "Computadores restritos a laboratórios especializados de grande desempenho.",
    "Estilo de computadores futuros, que serão lançados em breve.",
    "Outro estilo de multicomputador."
   ],
   "c": 3,
   "j": "Cluster é um estilo de multicomputador: computadores interligados que trabalham em conjunto.\n\nFonte: Slide 34/46"
  },
  {
   "t": "mc",
   "tema": "Fatores essenciais de uma boa ISA",
   "q": "Na Aula 5, o nível ISA apresenta 2 (dois) fatores (características) essenciais a uma \"boa\" ISA.\n\nConsiderando os conteúdos da Aula 5 e do livro base, assinale a alternativa que contém a resposta CORRETA.\n\nSão fatores essenciais a uma \"boa\" ISA:",
   "o": [
    "1. Acordo comercial com os sistemas operacionais móveis\n2. Capacidade de utilizar novas tecnologias de acesso",
    "1. Acordo comercial com os fabricantes de CPU\n2. Velocidade de acesso aos periféricos de entrada e saída",
    "1. Possuir processadores e coprocessadores específicos\n2. Separar o hardware do software",
    "1. Definir conjunto de instruções que possa ser facilmente implementado, com tecnologias atuais e futuras, contentando os projetistas de hardware;\n2. Fornecer um alvo claro para o código compilado, contentando os projetistas de software na geração de códigos para ela."
   ],
   "c": 3,
   "j": "Uma boa ISA deve ter um conjunto de instruções implementável com tecnologias atuais e futuras (agrada ao projetista de hardware) e oferecer um alvo claro para o código compilado (agrada ao projetista de software).\n\nFonte: Slide 10/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Conhecimento sobre sistemas operacionais",
   "q": "Na Aula 5, o autor Stallings apresenta que o conhecimento sobre Sistema Operacional é essencial.\n\nConsiderando os conteúdos da Aula 5 e do livro base, assinale a alternativa CORRETA:\n\nPara que o conhecimento sobre Sistemas Operacionais é essencial?",
   "o": [
    "É essencial para o entendimento dos mecanismos da CPU para controle do computador.",
    "É essencial para a escolha da melhor e mais veloz CPU.",
    "É essencial para compreender as diferenças entre CPU móvel e a dos desktops.",
    "É essencial para a aquisição de CPUs compatíveis entre si e com a internet."
   ],
   "c": 0,
   "j": "Conhecer o SO ajuda a entender os mecanismos que a CPU usa para controlar o computador.\n\nFonte: Slide 27/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Watchdog em microcontroladores",
   "q": "A Aula 4 de Arquitetura de Computadores descreve:\n\"Quando um computador para de executar o programa ou executa incorretamente, a solução adotada é o reset. Microcontrolador não possui essa solução, não há \"botão reset\".\"\n\nAssinale a alternativa CORRETA. Para estes casos (microcontroladores) a solução é:",
   "o": [
    "Desligar o microcontrolador.",
    "Desenvolvimento de novo \"tipo\" de microcontrolador.",
    "Introdução de um novo banco de memória RAM.",
    "Introdução de um novo bloco, watchdog."
   ],
   "c": 3,
   "j": "O watchdog é um bloco que monitora a execução e reinicia o sistema se o programa travar ou deixar de \"avisar\" que está funcionando.\n\nFonte: Slide 41/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Controle do caminho de dados por hardware",
   "q": "Foi apresentado e definido na Aula 4 o \"controle do caminho de dados por hardware\". Dentre as características e vantagens na sua utilização destacam-se:\n\nI. Instruções executadas por microprograma\nII. Redução no conjunto de instruções\nIII. Máquinas mais rápidas\n\nConsiderando o texto apresentado na Aula 4, assinale a alternativa CORRETA:",
   "o": [
    "As sentenças II e III estão corretas.",
    "As sentenças I e III estão corretas.",
    "Todas as sentenças estão corretas.",
    "A sentença II está correta."
   ],
   "c": 0,
   "j": "O controle por hardware leva a máquinas mais rápidas e a conjuntos de instruções reduzidos. Execução por microprograma é a outra abordagem (controle por software), então a I está errada.\n\nFonte: Slide 21/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Significado da sigla ISA",
   "q": "Na Aula 5 o nível ISA é definido e descrito.\n\nConsiderando os conteúdos da Aula 5 e do livro base, assinale a alternativa CORRETA.\n\nQual o significado da sigla ISA?",
   "o": [
    "Information System Administrator (Administrador de Sistema de Informação)",
    "Instruction Set Architecture (Arquitetura do conjunto de instrução)",
    "Industry Standard Architecture (Arquitetura Padrão da Indústria)",
    "Internet Security and Acceleration"
   ],
   "c": 1,
   "j": "ISA significa Instruction Set Architecture, ou Arquitetura do Conjunto de Instruções.\n\nFonte: Slide 4/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Escalonamento de processos",
   "q": "O escalonamento de processos ou tarefas é definido e descrito na Aula 5 como uma das funções mais importantes do SO, pois o SO determina quais processos devem ser executados a cada instante.\n\nAssinale a alternativa CORRETA. O escalonamento de processos possibilita:",
   "o": [
    "Criar uma pilha ordenada de comandos a serem executados pelo usuário.",
    "Escolher a melhor CPU para execução de cada tarefa.",
    "Possibilita ao usuário elencar qual processo ou tarefa executar em cada instante.",
    "Possibilita compartilhar o tempo de CPU entre determinado número de processos de modo imparcial."
   ],
   "c": 3,
   "j": "O escalonador reparte o tempo de CPU entre os processos de forma imparcial.\n\nFonte: Slide 29/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Coprocessadores",
   "q": "São apresentados na Aula 6 3 (três) tipos de coprocessadores.\n\nAssinale a alternativa que apresenta CORRETAMENTE os 3 (três) coprocessadores apresentados na Aula 6:",
   "o": [
    "Processadores paralelos, processadores distribuídos, clusters de processadores",
    "Intel Dual Core, Intel Core i3 e Intel Core i5",
    "AMD Sempron Dual Core, AMD Athlon Dual Core e AMD Opteron Octacore",
    "Processadores de rede, processadores de mídia e criptoprocessadores"
   ],
   "c": 3,
   "j": "Os três tipos de coprocessadores apresentados são: processadores de rede, processadores de mídia e criptoprocessadores.\n\nFonte: Slide 27/46 — Aula 6"
  },
  {
   "t": "mc",
   "tema": "Caminho de dados — o \"coração\" do computador",
   "q": "Apresentado e definido na Aula 4, é considerado \"o coração de todo computador\" e \"pode ser controlado por uma sequência que busca microinstruções em um armazenamento de controle\".\n\nAssinale a alternativa CORRETA do elemento computacional a que o texto se refere:",
   "o": [
    "Memória RAM",
    "Microprocessador (CPU)",
    "Graphic Processor Unit (GPU)",
    "Caminho de Dados"
   ],
   "c": 3,
   "j": "O caminho de dados (registradores + ULA) é o \"coração\" da CPU e pode ser controlado por microprograma.\n\nFonte: Slide 42/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "CPUs superescalares",
   "q": "São apresentados e definidos na Aula 6 o paralelismo no chip e o paralelismo no nível da instrução. No paralelismo no nível da instrução é descrito que: \"Um modo de conseguir paralelismo no nível mais baixo é emitir múltiplas instruções por ciclo de clock.\"\n\nNeste nível há duas variedades de CPUs de emissão múltipla: processadores superescalares e processadores VLIW.\n\nConsiderando o texto e os conteúdos das aulas e dos materiais complementares, assinale a alternativa que descreve CORRETAMENTE as CPUs superescalares:",
   "o": [
    "CPUs superescalares são capazes de emitir múltiplas instruções para as unidades de execução em um único ciclo de clock.",
    "CPUs superescalares são projetos audaciosos de grandes corporações, como a NASA, que projetam computadores específicos a seu uso.",
    "CPUs superescalares são projetos limitados aos laboratórios das grandes universidades e que ainda não estão disponíveis aos usuários e empresas interessados.",
    "CPUs superescalares são apenas apresentadas em filmes, não são reais."
   ],
   "c": 0,
   "j": "Superescalares emitem mais de uma instrução por ciclo de clock para diferentes unidades de execução.\n\nFonte: Slide 9/22 do Hyperbook — Aula 6"
  },
  {
   "t": "mc",
   "tema": "Família de computadores",
   "q": "Foi apresentado e definido na Aula 4 o conceito de Família de Computadores, introduzido pela IBM e pela DEC no PDP-8. Sobre esse conceito, é CORRETO afirmar que:",
   "o": [
    "A família de computadores depende exclusivamente de seu fabricante.",
    "A família de computadores desvincula uma arquitetura de máquina de suas implementações, e integradores disponibilizam ao mercado computadores com a mesma arquitetura, mas com desempenho e preço diferentes.",
    "Os mesmos fabricantes oferecem computadores com arquiteturas diferentes, mas com desempenho e preços iguais.",
    "A família de computadores vincula a arquitetura de máquina a suas implementações."
   ],
   "c": 1,
   "j": "Numa família, a arquitetura é a mesma, mas há várias implementações com desempenho e preço diferentes.\n\nFonte: Slides 13 e 14/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Ciclo do processador",
   "q": "Leia o fragmento de texto a seguir:\n\"A operação dos computadores consiste em executar instruções sequenciais (uma após a outra).\" (Slide 28/43 da Aula 4 — Arquitetura de Computadores)\n\nAssinale a alternativa CORRETA. O texto é referência ao conceito de:",
   "o": [
    "O ciclo do processador",
    "Watchdog",
    "Microprogramação",
    "Microarquitetura"
   ],
   "c": 0,
   "j": "Executar instruções uma após a outra, em etapas, é o ciclo do processador (busca-decodificação-execução).\n\nFonte: Slide 28/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Objetivos do sistema operacional",
   "q": "O autor Stallings descreve em sua obra, e a Aula 5 apresenta, que o sistema operacional é um programa que controla a execução de programas aplicativos e age como interface entre o usuário e o hardware do computador.\n\nConsiderando o descrito pelo autor e os conteúdos da Aula 5, assinale a alternativa CORRETA. Ele (Sistema Operacional) possui basicamente dois objetivos:",
   "o": [
    "Custo: deve ser fornecido gratuitamente como software livre\nDesempenho: deve ser veloz, rápido",
    "Acessível: deve ser compatível com todas as operadoras\nElegante: deve proporcionar satisfação ao usuário que o possui",
    "Silencioso: deve executar as tarefas sem barulho\nElegante: deve proporcionar satisfação ao usuário que o possui",
    "Conveniência: um sistema operacional visa tornar o uso do computador mais conveniente.\nEficiência: um sistema operacional permite uma utilização mais eficiente dos recursos do sistema."
   ],
   "c": 3,
   "j": "Os dois objetivos do SO são conveniência (facilitar o uso do computador) e eficiência (usar bem os recursos do sistema).\n\nFonte: Slide 35/40 — Aula 5"
  },
  {
   "t": "mc",
   "tema": "Parte da CPU que contém a ULA",
   "q": "Apresentada e definida na Aula 4 de Arquitetura de Computadores, qual a parte da CPU (Central Processing Unit) que contém a ULA (Unidade Lógica e Aritmética), suas entradas e suas saídas?\n\nAssinale a alternativa CORRETA que apresenta esta parte da CPU:",
   "o": [
    "Watchdog",
    "ISA - Instruction Set Architecture",
    "UC - Unidade de Controle",
    "Caminho de Dados"
   ],
   "c": 3,
   "j": "O caminho de dados reúne a ULA, seus registradores de entrada e as saídas.\n\nFonte: Slide 39/43 — Aula 4"
  },
  {
   "t": "mc",
   "tema": "Arquitetura VLIW ou EPIC",
   "q": "Na Aula 4 de Arquitetura de Computadores são apresentadas diversas arquiteturas em uso. Dentre elas, destaca-se a arquitetura que codifica mais de uma operação por instrução.\n\nAssinale a alternativa CORRETA que apresenta o nome desta arquitetura:",
   "o": [
    "RISC - Reduced Instruction Set Computer",
    "CISC - Complex Instruction Set Computer",
    "RISC vs CISC",
    "VLIW - Very Long Instruction Word ou EPIC - Explicit Parallel Instruction Computer"
   ],
   "c": 3,
   "j": "VLIW/EPIC agrupam várias operações em uma única instrução muito longa, explorando paralelismo no nível da instrução.\n\nFonte: Slide 37/43 — Aula 4"
  }
 ]
});
