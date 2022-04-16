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

Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
Resposta: mkdir unix_tests
          cd unix_tests

Crie um arquivo de texto com o nome trybe.txt .
Resposta: touch trybe.txt

Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
Resposta: cp trybe.txt trybe_backup.txt

Renomeie o arquivo trybe.txt .
Resposta: mv trybe.txt renomeando.txt

Dentro de unix_tests , crie um novo diretório chamado backup .
Resposta: mkdir backup

Mova o arquivo trybe_backup.txt para o diretório backup .
Resposta: mv trybe_backup.txt backup

Dentro de unix_tests , crie um novo diretório chamado backup2 .
Resposta: mkdir backup2

Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
Resposta:  mv trybe_backup.txt /home/denis/trybe-exercicios/Fundamentos-do-desenvolvimento-web/bloco-01-unix-shell/unix_tests/backup2

Apague a pasta backup .
Resposta:   rmdir backup

Renomeie a pasta backup2 para backup .
Resposta:    mv backup2 backup

Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
Resposta:  pwd
           ls
Apague o diretório backup .
Resposta:  rm -rf backup

Limpe o terminal.
Resposta:  clear

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
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

Mostre na tela as 5 primeiras skills do arquivo skills.txt .
Resposta:  head -5 skills.txt

Mostre na tela as 4 últimas skills do arquivo skills.txt .
Resposta:   tail -5 skills.txt

Apague todos os arquivos que terminem em .txt .
Resposta:   rm *.txt
 
 