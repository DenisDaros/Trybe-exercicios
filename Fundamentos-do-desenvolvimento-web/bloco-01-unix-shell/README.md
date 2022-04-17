# Unix & Bash

O Unix é um sistema operacional popular que foi lançado em 1969 e ganhou muitas das variações que se tornaram os principais sistemas operacionais do mercado. Aqui eu aprendi como funciona o Unix e como interagir com ele através do terminal, utilizando o Bash.

###### Habilidades Adquiridas

-Executar comandos no terminal para navegar entre diretórios;

-Executar comandos no terminal para criar e manipular arquivos e diretórios;

-Executar comandos no terminal para realizar buscas;

###### Por que isso é importante?

No desenvolvimento de software, é muito importante que você entenda como interagir de forma eficiente com o sistema operacional no qual você vai programar. Isso te poupará tempo e permitirá ser uma pessoa mais produtiva. Para isso, é primordial que você saiba os principais comandos que podem ser utilizados no terminal.
Na maioria das vezes, principalmente por questões de custo, performance e facilidade de interação através do terminal, sistemas operacionais baseados em Unix são indicados como a melhor opção para você hospedar seus projetos Web.


# Parte I - Criação de arquivos e diretórios

###### Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
Resposta: mkdir unix_tests
          cd unix_tests

###### Crie um arquivo de texto com o nome trybe.txt .
Resposta: touch trybe.txt

###### Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
Resposta: cp trybe.txt trybe_backup.txt

###### Renomeie o arquivo trybe.txt .
Resposta: mv trybe.txt renomeando.txt

###### Dentro de unix_tests , crie um novo diretório chamado backup .
Resposta: mkdir backup

###### Mova o arquivo trybe_backup.txt para o diretório backup .
Resposta: mv trybe_backup.txt backup

###### Dentro de unix_tests , crie um novo diretório chamado backup2 .
Resposta: mkdir backup2

###### Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
Resposta:  mv trybe_backup.txt /home/denis/trybe-exercicios/Fundamentos-do-desenvolvimento-web/bloco-01-unix-shell/unix_tests/backup2

###### Apague a pasta backup .
Resposta:   rmdir backup

###### Renomeie a pasta backup2 para backup .
Resposta:    mv backup2 backup

###### Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
Resposta:  pwd
           ls
###### Apague o diretório backup .
Resposta:  rm -rf backup

###### Limpe o terminal.
Resposta:  clear

###### Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

Resposta:touch skills.txt
               cat > skills.txt
               (conteudo adicionado)
               cat skills.txt
               (visualização do conteúdo)

###### Mostre na tela as 5 primeiras skills do arquivo skills.txt .
Resposta:  head -n 5 skills.txt

###### Mostre na tela as 4 últimas skills do arquivo skills.txt .
Resposta:   tail -n 4 skills.txt

###### Apague todos os arquivos que terminem em .txt .
Resposta:   rm *.txt

# Parte II - Manipulação & Busca

###### Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

###### Mostre todo o conteúdo do arquivo countries.txt na tela.
Resposta: cat countries.txt

###### Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
Resposta:less countries.txt 

###### Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
Resposta:less countries.txt
          /Zambia

###### Busque por Brazil no countries.txt .
Resposta: grep Brazil countries.txt

###### Busque novamente por brazil , mas agora utilizando o lower case .
Resposta: grep -i brazil countries.txt

###### Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
Resposta:touch phrases.txt
         cat > phrases.txt
Olá, tudo bem?
Sou um Tryber
Hoje o dia fa um tempo nublado 

###### Busque pelas frases que não contenham a palavra fox .
Resposta:grep -v fox phrases.txt

###### Conte o número de palavras do arquivo phrases.txt .
Resposta:wc -w phrases.txt

###### Conte o número de linhas do arquivo phrases.txt .
Resposta: wc -l phrases.txt

###### Crie os arquivos empty.tbt e empty.pdf .
Resposta: touch empty.tbt
          touch empty.pdf

###### Liste todos os arquivos do diretório unix_tests .
Resposta:  ls -l

###### Liste todos os arquivos que terminem com txt .
Resposta:  ls -l *txt

###### Liste todos os arquivos que terminem com tbt ou txt .
Resposta:  ls -l *t?t

###### Acesse o manual do comando ls .
Resposta: man ls


 