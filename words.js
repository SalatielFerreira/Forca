const words = [
  { word: "abacaxi", clue: "Fruta tropical" },
  { word: "elefante", clue: "Animal de grande porte com tromba longa" },
  { word: "computador", clue: "Dispositivo eletrônico" },
  { word: "girafa", clue: "Animal alto, com pescoço longo" },
  { word: "chocolate", clue: "Doce feito de cacau" },
  { word: "piano", clue: "Instrumento musical com teclas" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "esmeralda", clue: "Tipo de pedra preciosa" },
  { word: "navio", clue: "Embarcação no mar" },
  { word: "telefone", clue: "Dispositivo de comunicação" },
  { word: "floresta", clue: "Área com muitas árvores" },
  { word: "quadrado", clue: "Figura geométrica de quatro lados" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "sorvete", clue: "Doce gelado" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "avião", clue: "Meio de transporte aéreo" },
  { word: "macaco", clue: "Primate arbóreo" },
  { word: "raios", clue: "Descargas elétricas na atmosfera" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "vela", clue: "Objeto para iluminação" },
  { word: "carro", clue: "Veículo terrestre com rodas" },
  { word: "camisa", clue: "Peça de vestuário superior" },
  { word: "livro", clue: "Conjunto de páginas encadernadas com informações" },
  { word: "cachorro", clue: "Animal de estimação, conhecido como melhor amigo do homem" },
  { word: "guitarra", clue: "Instrumento musical de cordas" },
  { word: "escola", clue: "Instituição de ensino" },
  { word: "sol", clue: "Estrela que ilumina o nosso sistema solar" },
  { word: "lua", clue: "Satélite natural da Terra" },
  { word: "flor", clue: "Parte da planta que normalmente é colorida e cheirosa" },
  { word: "relógio", clue: "Dispositivo para medir o tempo" },
  { word: "cavalo", clue: "Animal usado para montaria e trabalho de campo" },
  { word: "bola", clue: "Objeto redondo usado em esportes" },
  { word: "sorvete", clue: "Doce gelado" },
  { word: "hotel", clue: "Estabelecimento para hospedagem de pessoas" },
  { word: "teatro", clue: "Local onde se realizam apresentações dramáticas" },
  { word: "lua", clue: "Satélite natural da Terra" },
  { word: "estádio", clue: "Local destinado a competições esportivas" },
  { word: "areia", clue: "Substância granular encontrada em praias e desertos" },
  { word: "prato", clue: "Objeto utilizado para comer alimentos" },
  { word: "guarda-chuva", clue: "Objeto usado para proteção contra chuva" },
  { word: "janela", clue: "Abertura em uma parede para entrada de luz e ar" },
  { word: "lâmpada", clue: "Objeto que emite luz" },
  { word: "coelho", clue: "Animal de orelhas grandes e cauda curta" },
  { word: "esquilo", clue: "Animal pequeno com cauda volumosa, geralmente encontrado em árvores" },
  { word: "baleia", clue: "Mamífero marinho de grande porte" },
  { word: "pedra", clue: "Material sólido e natural encontrado na Terra" },
  { word: "zebra", clue: "Animal com listras brancas e pretas" },
  { word: "foca", clue: "Mamífero marinho que vive em águas frias" },
  { word: "leão", clue: "Felino grande e selvagem, conhecido como rei da selva" },
  { word: "pássaro", clue: "Animal com penas e asas que pode voar" }
];
  
  export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }