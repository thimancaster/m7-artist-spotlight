export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  image: string;
  socialMedia: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  featuredVideoUrl?: string;
}

export const artists: Artist[] = [
  {
    id: "julliany-souza",
    name: "Julliany Souza",
    genre: "Adoração e Pop Cristão",
    bio: "Julliany Souza é uma das principais cantoras e compositoras da música cristã no Brasil. Com uma voz expressiva, consolidou sua carreira como representante da música gospel nacional e internacional, com canções como 'A Casa É Sua' e 'Eu Te Vejo Em Tudo'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13516458409624661473_0",
    socialMedia: {
      instagram: "https://instagram.com/jullianysouza",
      youtube: "https://youtube.com/@jullianysouza",
      spotify: "https://open.spotify.com/artist/0dS84B6JspZf5a9D_22n4s"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=xcC3Xh3PFcE"
  },
  {
    id: "jhonas-serra",
    name: "Jhonas Serra",
    genre: "Louvor e Adoração",
    bio: "Jhonas Serra, natural de Brasília, é filho de pastores e iniciou seu ministério cedo. Hoje, representa sua cidade e país com mais de 39 milhões de pessoas alcançadas com músicas como 'Só quero queimar' e 'Furioso Oceano'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13802784979550049627_0",
    socialMedia: {
      instagram: "https://instagram.com/jhonasserra",
      youtube: "https://youtube.com/@jhonasserra",
      spotify: "https://open.spotify.com/artist/1hLd1f2o1M1b4Y6vWb2yvN"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=2f38h32R_2s"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo Rubia é um jovem cantor e pastor que se apaixonou pela música na infância. Compositor de canções como 'Pode Morar Aqui' e 'Eu Só Quero Tua Presença', que têm tocado em igrejas por todo o Brasil e outros países.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/4053657985273739699_0",
    socialMedia: {
      instagram: "https://instagram.com/theorubia",
      youtube: "https://youtube.com/@theorubia",
      spotify: "https://open.spotify.com/artist/3bTnSZoJC36oNVr0I6AdoA"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=uUaDScX0PRE"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras e vídeos que ultrapassam 500 mil visualizações no YouTube.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/7638537924895246572_0",
    socialMedia: {
      instagram: "https://instagram.com/karemcardim",
      youtube: "https://youtube.com/@karemcardim",
      spotify: "https://open.spotify.com/artist/62fcY92o21yS0g3S2g3s14"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=kI4D9wVPbOs"
  },
  {
    id: "gabriell-junior",
    name: "Gabriell Júnior",
    genre: "Música Cristã Contemporânea",
    bio: "Gabriell Júnior, cantor e compositor de Goiás, cresceu em uma família musical e pastoral. Cristão apaixonado pela obra de Deus, já alcançou a marca de mais de 15 milhões de visualizações em seu canal no YouTube.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/4335866239597984081_0",
    socialMedia: {
      instagram: "https://instagram.com/gabrielljunior",
      youtube: "https://youtube.com/@gabrielljunior",
      spotify: "https://open.spotify.com/artist/5dK2p5C62aNh51a4fXSD2E"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=F0f-1j9c_gA"
  },
  {
    id: "danilo-neves",
    name: "Danilo Neves",
    genre: "Adoração Jovem",
    bio: "Danilo Neves é um jovem adorador que leva mensagens de fé e esperança. Com presença marcante e milhares de visualizações nas plataformas digitais, cada show é uma experiência de conexão com o público jovem.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/15049907511597352397_0",
    socialMedia: {
      instagram: "https://instagram.com/danilonevesoficial",
      youtube: "https://youtube.com/@danilonevesoficial"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=w9h7j4f-eSg"
  },
  {
    id: "ton-molinari",
    name: "Ton Molinari",
    genre: "Worship / Pop Cristão",
    bio: "Ton Molinari é um reconhecido cantor, compositor e adorador da música cristã contemporânea. Suas canções tocam corações e levam mensagens de esperança em eventos por todo o Brasil.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/2124312489275512475_0",
    socialMedia: {
      instagram: "https://instagram.com/tonmolinari",
      youtube: "https://youtube.com/@tonmolinari"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=1Z-Z1Z1Z1Z1"
  },
  {
    id: "gabriela-gomes",
    name: "Gabriela Gomes",
    genre: "Adoração e Louvor",
    bio: "Filha de Marquinhos Gomes, Gabriela iniciou sua carreira aos 12 anos. Seu álbum de estreia, 'Não vou perder a Fé', e o single 'Deus Proverá' consolidaram seu nome na música cristã nacional.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/1867464452502639303_0",
    socialMedia: {
      instagram: "https://instagram.com/gabrielagomesoficial",
      youtube: "https://youtube.com/@gabrielagomesoficial",
      spotify: "https://open.spotify.com/artist/2e6fPpl1pABpCA3pG6w3eA"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=LZflt_pD3wE"
  },
  {
    id: "felipe-vilela",
    name: "Felipe Vilela",
    genre: "Rap Gospel",
    bio: "Felipe Vilela descobriu seu talento para o RAP aos 11 anos. Através de viagens pelo Brasil e exterior, tem levado sua arte e canção, e atualmente é cantor pela Universal Music, aguardando o lançamento de seu DVD 'Orgânico'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13265581135659596282_0",
    socialMedia: {
      instagram: "https://instagram.com/felipevilela",
      youtube: "https://youtube.com/@felipevilela"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9g2z1Sp72_g"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Victin mescla rap e poesia cristã, trazendo mensagens profundas de fé. Com estilo único, tem conquistado espaço no rap gospel brasileiro, falando diretamente com a juventude.",
    image: "

http://googleusercontent.com/image_collection/image_retrieval/7500056956931783368_0
",
    socialMedia: {
      instagram: "https://instagram.com/victinoficial",
      youtube: "https://youtube.com/@victinoficial"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=ElbEKw-I3tM"
  },
  {
    id: "priscila-olly",
    name: "Priscila Olly",
    genre: "Louvor e Pop",
    bio: "Priscila Olly, ex-integrante do grupo Kemuel, destacou-se por sua impressionante extensão vocal. Agora em carreira solo, ministra louvores especiais que o Senhor tem trazido ao seu coração, consolidando-se no cenário cristão.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/12464070184125302880_0",
    socialMedia: {
      instagram: "https://instagram.com/priscilaolly",
      youtube: "https://youtube.com/@priscilaolly"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=G_Mbf4oYc8I"
  },
  {
    id: "carol-braga",
    name: "Carol Braga",
    genre: "Pop Cristão",
    bio: "Carol Braga, cantora e compositora de Brasília, iniciou sua jornada musical aos três anos. Recentemente, lançou o álbum 'Fogo que Consome', composto por cinco faixas, e abençoa vidas com suas canções.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/5502876792739604730_0",
    socialMedia: {
      instagram: "https://instagram.com/carolbragaoficial",
      youtube: "https://youtube.com/@carolbragaoficial"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=video-id-carol-braga"
  },
  {
    id: "joao-antonio",
    name: "João Antônio",
    genre: "Adoração e Louvor",
    bio: "João Antônio Martins começou a pregar aos 13 anos, compartilhando uma mensagem bíblica de quebrantamento. Escritor e editor, também leciona em seminários teológicos, formando uma nova geração de ministros.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/12536199720857897788_0",
    socialMedia: {
      instagram: "https://instagram.com/joaoantoniooficial",
      youtube: "https://youtube.com/@joaoantoniooficial"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=8c_aFmXb_0s"
  }
];
