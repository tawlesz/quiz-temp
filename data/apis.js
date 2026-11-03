(window.BUILTIN=window.BUILTIN||[]).push({
 "id": "apis",
 "nome": "Arquitetura e Desenvolvimento de APIs",
 "desc": "REST, FastAPI, SQLAlchemy e Vue.js",
 "cards": [
  {
   "t": "mc",
   "tema": "Método HTTP para excluir recursos",
   "q": "Qual método HTTP deve ser utilizado para excluir um recurso em uma API RESTful?",
   "o": [
    "POST",
    "DELETE",
    "PATCH",
    "PUT"
   ],
   "c": 1,
   "j": "DELETE é utilizado para excluir recursos."
  },
  {
   "t": "mc",
   "tema": "Ponto de entrada de uma API",
   "q": "Ao consumir a API pública ViaCEP, qual elemento representa corretamente o ponto de entrada utilizado para acessar os dados?",
   "o": [
    "O formato CSV, que organiza os dados em colunas e linhas.",
    "O parâmetro logradouro, que define o tipo de dado enviado ao servidor.",
    "A URL da API, como `https://viacep.com.br/ws/01001000/json`.",
    "O método POST, que envia o CEP e retorna os dados em XML."
   ],
   "c": 2,
   "j": "A URL é o ponto de entrada da API REST."
  },
  {
   "t": "mc",
   "tema": "Definição de API",
   "q": "Qual é a definição correta de uma API?",
   "o": [
    "Um protocolo de rede utilizado para enviar e-mails entre servidores.",
    "Um software que realiza a autenticação de usuários.",
    "Um tipo de banco de dados relacional.",
    "Um conjunto de rotinas e padrões que permite a comunicação entre diferentes sistemas e aplicações."
   ],
   "c": 3,
   "j": "API permite a comunicação entre sistemas e aplicações."
  },
  {
   "t": "mc",
   "tema": "Banco de dados para dados multimídia",
   "q": "Uma rede social precisa armazenar imagens, vídeos e mensagens, exigindo escalabilidade e flexibilidade para dados não estruturados.\nQual tecnologia é mais adequada?",
   "o": [
    "Banco de dados relacional, como MySQL ou PostgreSQL.",
    "Banco de dados NoSQL, como MongoDB ou Cassandra.",
    "Banco de dados em memória, como Redis ou Memcached.",
    "Banco de dados hierárquico, como IBM IMS."
   ],
   "c": 1,
   "j": "NoSQL oferece flexibilidade para trabalhar com diferentes formatos de dados."
  },
  {
   "t": "mc",
   "tema": "OAuth 2.0 e integração entre plataformas",
   "q": "Uma fintech precisa integrar serviços bancários com aplicativos de terceiros, sem compartilhar as credenciais dos usuários e permitindo diferentes níveis de permissão.\nQual solução é mais adequada?",
   "o": [
    "API Key.",
    "JWT.",
    "OAuth 2.0.",
    "HTTP Basic Authentication."
   ],
   "c": 2,
   "j": "OAuth 2.0 permite autorização entre aplicações sem compartilhar senhas."
  },
  {
   "t": "mc",
   "tema": "Características do padrão REST",
   "q": "Qual alternativa apresenta corretamente uma característica do padrão REST?",
   "o": [
    "É utilizado apenas em sistemas bancários.",
    "Baseia-se exclusivamente em XML.",
    "Utiliza recursos, métodos HTTP e representações como JSON.",
    "Depende da linguagem Java."
   ],
   "c": 2,
   "j": "REST utiliza recursos, URLs e métodos HTTP, podendo trabalhar com JSON."
  },
  {
   "t": "mc",
   "tema": "API Keys e gerenciamento de acesso",
   "q": "Uma API utiliza JWT, mas apresenta dificuldades de desempenho e gerenciamento de tokens expirados.\nQual solução representa a alternativa indicada no gabarito da atividade?",
   "o": [
    "Implementar API Keys com expiração automática e escopo de acesso.",
    "Substituir JWT por HTTP Basic.",
    "Utilizar OAuth 2.0 para eliminar tokens.",
    "Adicionar criptografia simétrica ao JWT."
   ],
   "c": 0,
   "j": "API Keys permitem controle de acesso, expiração e identificação de aplicações.\n\nObservação: essa resposta segue o gabarito da atividade. Tecnicamente, substituir JWT por API Key não resolve necessariamente problemas de gerenciamento de tokens; depende da arquitetura utilizada."
  },
  {
   "t": "mc",
   "tema": "Mecanismo de acesso para APIs públicas",
   "q": "Um desenvolvedor precisa controlar o acesso a determinados recursos de uma API pública sem depender de login e senha, permitindo controle e revogação de permissões.\nQual mecanismo é indicado?",
   "o": [
    "HTTP Basic Authentication.",
    "JWT.",
    "API Key.",
    "OAuth 2.0."
   ],
   "c": 2,
   "j": "API Key permite identificar aplicações e controlar ou revogar seu acesso.\n\nAtenção: o comentário original dessa questão identificava a letra B como correta, mas a alternativa B era JWT. A resposta correta é C, que corresponde à API Key."
  },
  {
   "t": "mc",
   "tema": "Métodos HTTP e formato JSON",
   "q": "Uma API pública de consulta de endereço utiliza uma URL e retorna dados estruturados.\nQual alternativa representa corretamente essa aplicação?",
   "o": [
    "Utilizar GET para consultar dados via URL pública e interpretar o retorno em JSON.",
    "Utilizar DELETE para acessar dados e retornar XML.",
    "Utilizar POST para consultar endereços e retornar CSV.",
    "Utilizar PUT para acessar dados e retornar HTML."
   ],
   "c": 0,
   "j": "GET realiza consultas e a API ViaCEP retorna dados em JSON."
  },
  {
   "t": "mc",
   "tema": "Rota GET no Flask",
   "q": "Uma API desenvolvida com Flask deve permitir que o cliente consulte tarefas cadastradas por meio do método GET, retornando JSON.\nQual código está correto?",
   "o": [
    "```python\n@app.route('/api/tarefas', methods=['PUT'])\ndef tarefas():\n    return {'tarefas': ['Estudar', 'Codar', 'Revisar']}\n```",
    "```python\n@app.route('/api/tarefas', methods=['POST'])\ndef tarefas():\n    return {'tarefas': ['Estudar', 'Codar', 'Revisar']}\n```",
    "```python\n@app.route('/api/tarefas', methods=['DELETE'])\ndef tarefas():\n    return {'tarefas': ['Estudar', 'Codar', 'Revisar']}\n```",
    "```python\n@app.route('/api/tarefas', methods=['GET'])\ndef tarefas():\n    return {'tarefas': ['Estudar', 'Codar', 'Revisar']}\n```"
   ],
   "c": 3,
   "j": "GET é utilizado para consultar recursos."
  },
  {
   "t": "mc",
   "tema": "Princípio Stateless",
   "q": "Qual característica define corretamente o princípio Stateless em uma API RESTful?",
   "o": [
    "O servidor armazena o estado da sessão do cliente.",
    "O cliente depende do servidor para recuperar o estado da aplicação.",
    "O servidor mantém um cache persistente com os dados do cliente.",
    "O cliente envia todas as informações contextuais necessárias em cada requisição."
   ],
   "c": 3,
   "j": "Cada requisição deve conter as informações necessárias para ser processada."
  },
  {
   "t": "mc",
   "tema": "Restrições REST e escalabilidade",
   "q": "Uma API RESTful apresenta problemas de escalabilidade porque mantém sessões de usuários e não utiliza cache ou balanceamento de carga adequadamente.\nQual conjunto deve ser priorizado?",
   "o": [
    "Stateless, Cache e Sistema em Camadas.",
    "Servidor, Cache e Interface Uniforme.",
    "Cliente-Servidor, Interface Uniforme e Código sob Demanda.",
    "Cache, Código sob Demanda e Autenticação OAuth."
   ],
   "c": 0,
   "j": "- Stateless evita manter sessões no servidor.\n- Cache reduz requisições repetidas.\n- Sistema em Camadas permite distribuir responsabilidades e utilizar balanceadores."
  },
  {
   "t": "mc",
   "tema": "Tipos SQLAlchemy, Python e SQL",
   "q": "Qual alternativa apresenta corretamente a relação entre os tipos genéricos do SQLAlchemy, os tipos Python e os tipos SQL?",
   "o": [
    "Boolean corresponde a str e VARCHAR.",
    "Integer corresponde a int e INTEGER.",
    "DateTime corresponde a float e REAL.",
    "Text corresponde a bool e BOOLEAN."
   ],
   "c": 1,
   "j": "- Integer → int → INTEGER.\n- Boolean → bool → BOOLEAN.\n- DateTime → datetime.datetime.\n- Text → str → TEXT."
  },
  {
   "t": "mc",
   "tema": "Função de declarative_base()",
   "q": "Qual é o papel da classe base declarativa (`declarative_base`) no SQLAlchemy ORM?",
   "o": [
    "Definir tipos de dados SQL diretamente nas colunas.",
    "Criar conexão com o banco e gerenciar sessões.",
    "Fornecer uma metaclasse que registra classes mapeadas e associa cada classe a uma tabela.",
    "Gerar automaticamente comandos SQL de inserção, atualização e exclusão."
   ],
   "c": 2,
   "j": "`declarative_base()` fornece a base para declarar classes ORM e registrar seus mapeamentos com as tabelas."
  },
  {
   "t": "mc",
   "tema": "Configuração CORS no FastAPI",
   "q": "Um front-end hospedado em `http://localhost:8082` precisa acessar uma API FastAPI.\nQual configuração permite especificamente essa origem?",
   "o": [
    "`allow_origins = [\"https://vuejs.org\"]`",
    "`allow_origins = [\"http://localhost:8000\"]`",
    "`allow_origins = [\"http://localhost:8082\"]`",
    "`allow_origins = [\"*\"]`"
   ],
   "c": 2,
   "j": "A origem autorizada deve corresponder ao endereço do front-end."
  },
  {
   "t": "mc",
   "tema": "String de conexão PostgreSQL",
   "q": "Qual alternativa representa corretamente a conexão SQLAlchemy para PostgreSQL com driver psycopg2, usuário aula, senha 1234, host localhost e banco aula_teste?",
   "o": [
    "`postgresql://aula:1234@localhost/aula_teste`",
    "`sqlite:///aula_teste.db`",
    "`mysql+pymysql://aula:1234@localhost/aula_teste`",
    "`postgresql+psycopg2://aula:1234@localhost/aula_teste`"
   ],
   "c": 3,
   "j": "A string identifica o banco, o driver, as credenciais, o host e o nome do banco."
  },
  {
   "t": "mc",
   "tema": "Campo obrigatório e único no SQLAlchemy",
   "q": "Qual alternativa garante que o campo username seja obrigatório e não se repita?",
   "o": [
    "`Column('username', String(15), nullable=True, unique=False)`",
    "`Column('username', String(15), nullable=False, unique=True)`",
    "`Column('username', Integer, default=True, primary_key=True)`",
    "`Column('username', Text, nullable=True, index=True)`"
   ],
   "c": 1,
   "j": "- `nullable=False`: impede valores nulos.\n- `unique=True`: impede valores duplicados."
  },
  {
   "t": "mc",
   "tema": "Diferença entre SQLAlchemy Core e ORM",
   "q": "Qual alternativa apresenta corretamente uma diferença entre Core e ORM?",
   "o": [
    "Core mapeia classes diretamente para tabelas, enquanto ORM exige SQL explícito.",
    "Ambos exigem exclusivamente comandos SQL brutos.",
    "ORM trabalha com objetos Python que representam registros, enquanto Core utiliza construções SQL mais diretas.",
    "Core e ORM são incompatíveis."
   ],
   "c": 2,
   "j": "ORM trabalha com objetos Python; Core oferece uma abordagem mais direta para construir operações SQL."
  },
  {
   "t": "mc",
   "tema": "Pydantic e documentação automática",
   "q": "Qual é o principal impacto do Pydantic na documentação automática gerada pelo FastAPI?",
   "o": [
    "Converte os dados diretamente em HTML.",
    "Armazena os dados em formato binário.",
    "Cria rotas adicionais para cada modelo.",
    "Gera esquemas JSON incorporados à documentação interativa, detalhando os formatos esperados."
   ],
   "c": 3,
   "j": "Pydantic gera esquemas JSON utilizados pelo FastAPI na documentação Swagger e ReDoc."
  },
  {
   "t": "flip",
   "tema": "Endpoint GET /races/",
   "q": "Escreva o trecho `GET /races/{race_id}` da API Corrida em Python. O código deve retornar 404 quando o ID não existir.",
   "a": "O endpoint procura a corrida pelo ID. Se encontrar, retorna os dados; caso contrário, lança uma exceção HTTP 404.\n```python\nfrom fastapi import FastAPI, HTTPException\n\napp = FastAPI()\nraces = [\n    {\"id\": 1, \"atleta\": \"Ana\", \"distancia_km\": 5, \"tempo_min\": 30}\n]\n\n@app.get(\"/races/{race_id}\")\ndef get_race(race_id: int):\n    for race in races:\n        if race[\"id\"] == race_id:\n            return race\n    raise HTTPException(status_code=404, detail=\"Race not found\")\n```"
  },
  {
   "t": "flip",
   "tema": "Vue.js, Axios, v-for e CORS",
   "q": "Explique como o componente `RacesList.vue` utiliza Axios para consumir os dados da API de corridas. Descreva o papel de `v-for`, `fetchRaces()` e CORS.",
   "a": "Axios faz uma requisição GET à API. A função assíncrona `fetchRaces()` busca e armazena os dados em `races`. A diretiva `v-for` percorre a lista e exibe cada corrida na tela. O CORS permite a comunicação entre Vue.js e FastAPI de origens diferentes."
  },
  {
   "t": "flip",
   "tema": "Criação de endpoint na FastAPI",
   "q": "Crie uma rota GET na FastAPI com título, versão e descrição definidos.",
   "a": "```python\nfrom fastapi import FastAPI\n\napp = FastAPI(\n    title=\"Bem vindo à disciplina Arquitetura e Desenvolvimento de APIs\",\n    version=\"1.0.0\",\n    description=\"Nome do aluno e RU\"\n)\n\n@app.get(\"/\")\ndef raiz():\n    return {\"mensagem\": \"Bem-vindo à API!\"}\n```\nO `FastAPI()` define os metadados da aplicação, enquanto `@app.get(\"/\")` cria o endpoint de consulta."
  },
  {
   "t": "flip",
   "tema": "Atualização de corrida com PUT",
   "q": "Explique como o método PUT atualiza uma corrida específica em uma API FastAPI, considerando decorador, função assíncrona, sessão do banco e schema.",
   "a": "O PUT atualiza uma corrida existente. O decorador `@router.put(\"/{race_id}\")` define a rota; a função assíncrona recebe os dados; a sessão acessa e atualiza o banco; e o schema valida os campos antes de salvar as alterações com `commit()`."
  },
  {
   "t": "flip",
   "tema": "Classe models.py com SQLAlchemy",
   "q": "Escreva a classe `Aluno` com os campos `id`, `nome`, `cpf`, `disciplina`, `turma`, `universidade`, `cidade` e `professora`, utilizando SQLAlchemy ORM.",
   "a": "```python\nfrom sqlalchemy import Column, Integer, String\nfrom database import Base\n\nclass Aluno(Base):\n    __tablename__ = \"alunos\"\n    \n    id = Column(Integer, primary_key=True, index=True)\n    nome = Column(String, nullable=False)\n    cpf = Column(String, nullable=False, unique=True)\n    disciplina = Column(String, nullable=False)\n    turma = Column(String, nullable=False)\n    universidade = Column(String, nullable=False)\n    cidade = Column(String, nullable=False)\n    professora = Column(String, nullable=False)\n```\nA classe representa a tabela `alunos`. Cada `Column` define um campo, seu tipo e suas restrições."
  },
  {
   "t": "flip",
   "tema": "Diretórios models, schemas e core",
   "q": "Explique a função dos diretórios `models`, `schemas` e `core` em um projeto FastAPI.",
   "a": "- `models`: contém as classes ORM que representam as tabelas do banco.\n- `schemas`: contém os modelos Pydantic, responsáveis por validar e estruturar os dados de entrada e saída.\n- `core`: reúne configurações centrais, como conexão e sessões do banco, segurança e variáveis de ambiente.\nEssa separação facilita a organização, manutenção e escalabilidade do projeto."
  }
 ],
 "resumo": [
  [
   "GET",
   "Consultar dados"
  ],
  [
   "POST",
   "Criar/enviar dados"
  ],
  [
   "PUT",
   "Atualizar um recurso"
  ],
  [
   "PATCH",
   "Atualizar parcialmente"
  ],
  [
   "DELETE",
   "Excluir um recurso"
  ],
  [
   "REST",
   "Recursos, URLs e métodos HTTP"
  ],
  [
   "Stateless",
   "Cada requisição leva seu contexto"
  ],
  [
   "Cache",
   "Reutiliza respostas e reduz requisições"
  ],
  [
   "OAuth 2.0",
   "Autorização entre aplicações"
  ],
  [
   "API Key",
   "Identifica e controla aplicações consumidoras"
  ],
  [
   "JWT",
   "Token assinado para autenticação/autorização"
  ],
  [
   "NoSQL",
   "Flexibilidade para dados variados"
  ],
  [
   "ORM",
   "Trabalha com objetos Python mapeados para tabelas"
  ],
  [
   "Core",
   "Construção mais direta de operações SQL"
  ],
  [
   "declarative_base()",
   "Base para declarar classes ORM"
  ],
  [
   "nullable=False",
   "Campo obrigatório"
  ],
  [
   "unique=True",
   "Impede valores duplicados"
  ],
  [
   "CORS",
   "Controla origens autorizadas"
  ],
  [
   "Pydantic",
   "Valida e estrutura dados"
  ],
  [
   "models",
   "Modelos ORM"
  ],
  [
   "schemas",
   "Validação de dados"
  ],
  [
   "core",
   "Configurações centrais"
  ],
  [
   "HTTP 404",
   "Recurso não encontrado"
  ],
  [
   "Axios",
   "Realiza requisições HTTP"
  ],
  [
   "v-for",
   "Percorre listas e renderiza elementos"
  ]
 ]
});
