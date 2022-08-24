##1-
a) VARCHAR REPRESENTA STRINGS, PRIMARY KEY É A PRIMEIRA CHAVE E NÃO SE REPETE,
NOT NULL É POR QUE NÃO PODE SER VAZIO, DATE É DATA

b) VER BANCO DE DADOS NO SISTEMAS, VER TABELAS DO BANCO DE DADOS ATUAL

c) RETORNA INFORMAÇOES BASICAS DA TABELA ACTORS

##2-
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
aconteceu por ter usando id duplicado

c) Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
faltaram informaçoes das colunas da tabela 

d) Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor padrão
faltou o nome

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
não esta como string

##3- 
a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE id = "001"
c)image.png
não exisite nenhum genero invalido
d) SELECT id, name, salary from Actor WHERE salary > 500000
e)Error Code: 1054. Unknown column 'name' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

##4-
a) retornar atores com nomes com a letra A e J, e salario acima de 300000

