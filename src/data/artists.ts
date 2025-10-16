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
    appleMusic?: string;
    deezer?: string;
    amazonMusic?: string;
  };
  featuredVideoUrl?: string;
}

export const artists: Artist[] = [
  {
    id: "julliany-souza",
    name: "Julliany Souza",
    genre: "Adoração e Pop Cristão",
    bio: "Julliany Souza é uma das principais cantoras e compositoras da música cristã no Brasil. Com uma voz expressiva, consolidou sua carreira como representante da música gospel nacional e internacional, com canções como 'A Casa É Sua', 'Eu Te Vejo Em Tudo' e o sucesso 'Quem É Esse?'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13516458409624661473_0",
    socialMedia: {
      instagram: "https://instagram.com/jullianysouza",
      youtube: "https://youtube.com/@jullianysouza",
      spotify: "https://open.spotify.com/artist/0dS84B6JspZf5a9D_22n4s",
      appleMusic: "https://music.apple.com/artist/julliany-souza/309280301",
      deezer: "https://www.deezer.com/artist/4564817"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=0ZF5em0MTwY"
  },
  {
    id: "jhonas-serra",
    name: "Jhonas Serra",
    genre: "Louvor e Adoração",
    bio: "Jhonas Serra, natural de Brasília, é filho de pastores e iniciou seu ministério cedo. Hoje, representa sua cidade e país com mais de 39 milhões de pessoas alcançadas com músicas como 'Só quero queimar' e 'Furioso Oceano'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13802784979550049627_0",
    socialMedia: {
      instagram: "https://instagram.com/jhonasserra",
      youtube: "https://youtube.com/@JhonasSerra",
      spotify: "https://open.spotify.com/artist/1hLd1f2o1M1b4Y6vWb2yvN",
      appleMusic: "https://music.apple.com/us/artist/jhonas-serra/1163308498",
      deezer: "https://www.deezer.com/artist/10776699"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=2f38h32R_2s"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo Rubia é um jovem cantor e pastor que se apaixonou pela música na infância. Com mais de 500 milhões de streams, é compositor de canções como 'Pode Morar Aqui' e 'Eu Só Quero Tua Presença', que têm tocado corações em igrejas por todo o Brasil e outros países.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/4053657985273739699_0",
    socialMedia: {
      instagram: "https://instagram.com/theorubia",
      youtube: "https://youtube.com/@theorubia",
      spotify: "https://open.spotify.com/artist/3bTnSZoJC36oNVr0I6AdoA",
      appleMusic: "https://music.apple.com/artist/theo-rubia/885884265",
      deezer: "https://www.deezer.com/artist/8688379"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=uUaDScX0PRE"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim nasceu em Ceilândia-DF e leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras, com sucessos como 'Tempestades Passam' e 'Lições de Ana', ultrapassando milhões de visualizações no YouTube.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/7638537924895246572_0",
    socialMedia: {
      instagram: "https://instagram.com/karemcardim",
      youtube: "https://youtube.com/@karemcardim",
      spotify: "https://open.spotify.com/artist/62fcY92o21yS0g3S2g3s14",
      appleMusic: "https://music.apple.com/artist/karem-cardim/1445566281",
      deezer: "https://www.deezer.com/artist/60685932"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9Wb5nC0W1Vs"
  },
  {
    id: "gabriell-junior",
    name: "Gabriell Júnior",
    genre: "Música Cristã Contemporânea",
    bio: "Gabriell Júnior, com 25 anos, é cantor e compositor de Goiás, casado com Gabrielly Reis e pai da pequena Bela. Cresceu em uma família musical e pastoral, apaixonado pela obra de Deus. Com sucessos como 'Amo o Senhor' e 'Amar Como Você', já alcançou mais de 18 milhões de visualizações no YouTube.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/4335866239597984081_0",
    socialMedia: {
      instagram: "https://instagram.com/gabrielljunior",
      youtube: "https://youtube.com/@GabriellJunior",
      spotify: "https://open.spotify.com/artist/5dK2p5C62aNh51a4fXSD2E",
      appleMusic: "https://music.apple.com/artist/gabriell-junior/1444835551",
      deezer: "https://www.deezer.com/artist/60440062"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=TC2NqwT8x_M"
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
    bio: "Filha de Marquinhos Gomes, Gabriela iniciou sua carreira aos 12 anos. Artista da Universal Music, seu álbum 'Não vou perder a Fé' e sucessos como 'Deus Proverá', 'A Melhor Parte' e 'É Sobre Ele' consolidaram seu nome na música cristã nacional.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/1867464452502639303_0",
    socialMedia: {
      instagram: "https://instagram.com/gabrielagomesoficial",
      youtube: "https://youtube.com/@gabrielagomesoficial",
      spotify: "https://open.spotify.com/artist/2e6fPpl1pABpCA3pG6w3eA",
      appleMusic: "https://music.apple.com/artist/gabriela-gomes/940165491",
      deezer: "https://www.deezer.com/artist/6009928"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=LZflt_pD3wE"
  },
  {
    id: "felipe-vilela",
    name: "Felipe Vilela",
    genre: "Rap Gospel",
    bio: "Felipe Vilela descobriu seu talento para o RAP aos 11 anos. Pastor no Ministério MEVAM e artista da Universal Music, soma mais de 18 milhões de visualizações no YouTube e 188 mil ouvintes mensais no Spotify. É destaque no rap cristão brasileiro com sucessos como 'Essa É A Hora'.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/13265581135659596282_0",
    socialMedia: {
      instagram: "https://instagram.com/felipevilela5pl",
      youtube: "https://youtube.com/@felipevilela",
      spotify: "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo2AXk0r",
      appleMusic: "https://music.apple.com/artist/felipe-vilela/1440879989"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=vwrM4KJKhyI"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Victin mescla rap e poesia cristã, trazendo mensagens profundas de fé. Com estilo único, tem conquistado espaço no rap gospel brasileiro, falando diretamente com a juventude.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/7500056956931783368_0",
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
