CREATE TABLE Funcionario (
  funccodigo SERIAL PRIMARY KEY,
  funcnome VARCHAR(100) NOT NULL,
  funccpf VARCHAR(100) UNIQUE NOT NULL,
  funcnascimento DATE,
  funccargo INT CHECK (funccargo IN (1, 2, 3)),
  funchorariotrab TIME,
  funcpassword VARCHAR(100),
  funcdatainicio TIMESTAMP
);


CREATE TABLE Mesa (
    mesacodigo SERIAL PRIMARY KEY,
    mesastatus INT CHECK (mesastatus IN (1, 2, 3)) NOT NULL,
    mesanumero VARCHAR(10) NOT NULL
);


CREATE TABLE Pedido (
	pedidocodigo SMALLINT PRIMARY KEY,
  	pedidohora TIME,
  	pedidoobservacao TEXT,
  	pedidovalortotal DECIMAL(10,2),
  	pedidoStatus INT CHECK(pedidoStatus IN (1,2,3))
);

CREATE TABLE Produto (
  produtocodigo SMALLINT PRIMARY KEY,
  produtodescricao TEXT,
  produtopreco DECIMAL(10,2),
  produtoestoque INT,
  produtocategoria INT CHECK(produtocategoria IN (1,2,3))
);

CREATE TABLE Admin (
  admincodigo SMALLINT PRIMARY KEY,
  adminlogin VARCHAR(100) NOT NULL,
  adminsenha VARCHAR(100) NOT NULL,
);


