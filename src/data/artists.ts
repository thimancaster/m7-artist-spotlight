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
    image: "https://www.letras.mus.br/fotos/artista/a/1/7/d/a17d5c5a2c2b3e8b5d3c3a0d5e1f1f1f-tb.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/jullianysouza",
      youtube: "https://www.youtube.com/@jullianysouza",
      spotify: "https://open.spotify.com/artist/0_1g2s5ztmr3d5qH4tIEeX"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=xcC3Xh3PFcE"
  },
  {
    id: "jhonas-serra",
    name: "Jhonas Serra",
    genre: "Louvor e Adoração",
    bio: "Jhonas Serra, natural de Brasília, é filho de pastores e iniciou seu ministério cedo. Hoje, representa sua cidade e país com mais de 39 milhões de pessoas alcançadas com músicas como 'Só quero queimar' e 'Furioso Oceano'.",
    image: "https://www.letras.mus.br/fotos/artista/7/1/c/e/71ce2893f415383f915f75e9f8c6b4e0-tb.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/jhonasserra",
      youtube: "https://www.youtube.com/@jhonasserra",
      spotify: "https://open.spotify.com/artist/0WsTM0BMHTqJM5M7EGX4EH"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=2f38h32R_2s"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo Rubia é um jovem cantor e pastor que se apaixonou pela música na infância. Compositor de canções como 'Pode Morar Aqui' e 'Eu Só Quero Tua Presença', que têm tocado em igrejas por todo o Brasil e outros países.",
    image: "https://www.letras.mus.br/fotos/artista/c/9/c/d/c9cd0a4a2f8c6e3b5e4d2d4f2c5d1d6a-tb.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/theorubia",
      youtube: "https://www.youtube.com/@theorubia",
      spotify: "https://open.spotify.com/artist/3bTnUX1j5AUASk2VzgK851"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=uUaDScX0PRE"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras e vídeos que ultrapassam 500 mil visualizações no YouTube.",
    image: "https://m7producoes.com.br/wp-content/uploads/2022/07/karem-cardim.png",
    socialMedia: {
      instagram: "https://www.instagram.com/karemcardim",
      youtube: "https://www.youtube.com/@karemcardim",
      spotify: "https://open.spotify.com/artist/23i32UFe24iJgo1042S5aL"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=kI4D9wVPbOs"
  },
  {
    id: "gabriell-junior",
    name: "Gabriell Júnior",
    genre: "Música Cristã Contemporânea",
    bio: "Gabriell Júnior, cantor e compositor de Goiás, cresceu em uma família musical e pastoral. Cristão apaixonado pela obra de Deus, já alcançou a marca de mais de 15 milhões de visualizações em seu canal no YouTube.",
    image: "https://i.ytimg.com/vi/qPFJrP2sszM/maxresdefault.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/gabrielljunior",
      youtube: "https://www.youtube.com/@gabrielljunior",
      spotify: "https://open.spotify.com/artist/3rE6crNoQ1T3aQ1aBf5a7k"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=F0f-1j9c_gA"
  },
  {
    id: "danilo-neves",
    name: "Danilo Neves",
    genre: "Adoração Jovem",
    bio: "Danilo Neves é um jovem adorador que leva mensagens de fé e esperança. Com presença marcante e milhares de visualizações nas plataformas digitais, cada show é uma experiência de conexão com o público jovem.",
    image: "https://www.ogol.com.br/img/jogadores/94/246094_med_danilo_neves.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/danilonevesoficial",
      youtube: "https://www.youtube.com/@danilonevesoficial",
      spotify: "https://open.spotify.com/artist/11779537"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=w9h7j4f-eSg"
  },
  {
    id: "ton-molinari",
    name: "Ton Molinari",
    genre: "Worship / Pop Cristão",
    bio: "Ton Molinari é um reconhecido cantor, compositor e adorador da música cristã contemporânea. Suas canções tocam corações e levam mensagens de esperança em eventos por todo o Brasil.",
    image: "https://media.gettyimages.com/id/1239324508/photo/anthony-molinari-attends-the-premiere-of-20th-century-studios-the-kings-man-at-museum-of-modern.jpg?s=612x612&w=gi&k=20&c=6_-_t5h4k3z-Q8hL-_B4D4E8Y8A4Z8Y4c8Y4Z8Y4c8Y4=",
    socialMedia: {
      instagram: "https://www.instagram.com/tonmolinari",
      youtube: "https://www.youtube.com/@tonmolinari",
      spotify: "https://open.spotify.com/artist/11779537"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=1Z-Z1Z1Z1Z1"
  },
  {
    id: "gabriela-gomes",
    name: "Gabriela Gomes",
    genre: "Adoração e Louvor",
    bio: "Filha de Marquinhos Gomes, Gabriela iniciou sua carreira aos 12 anos. Seu álbum de estreia, 'Não vou perder a Fé', e o single 'Deus Proverá' consolidaram seu nome na música cristã nacional.",
    image: "https://rafavidal.com.br/wp-content/uploads/2021/08/Gabi_1-1-1024x683.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/gabrielagomesoficial",
      youtube: "https://www.youtube.com/@gabrielagomesoficial",
      spotify: "https://open.spotify.com/artist/20212260"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=LZflt_pD3wE"
  },
  {
    id: "felipe-vilela",
    name: "Felipe Vilela",
    genre: "Rap Gospel",
    bio: "Felipe Vilela descobriu seu talento para o RAP aos 11 anos. Através de viagens pelo Brasil e exterior, tem levado sua arte e canção, e atualmente é cantor pela Universal Music, aguardando o lançamento de seu DVD 'Orgânico'.",
    image: "https://i.ytimg.com/vi/pWhV6z0nBsY/maxresdefault.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/felipevilela",
      youtube: "https://www.youtube.com/@felipevilela",
      spotify: "https://open.spotify.com/artist/54602232"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9g2z1Sp72_g"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Victin mescla rap e poesia cristã, trazendo mensagens profundas de fé. Com estilo único, tem conquistado espaço no rap gospel brasileiro, falando diretamente com a juventude.",
    image: "https://i.ytimg.com/vi/IXkfoAI3KZU/maxresdefault.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/victinoficial",
      youtube: "https://www.youtube.com/@victinoficial",
      spotify: "https://open.spotify.com/artist/98606442"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=ElbEKw-I3tM"
  },
  {
    id: "priscila-olly",
    name: "Priscila Olly",
    genre: "Louvor e Pop",
    bio: "Priscila Olly, ex-integrante do grupo Kemuel, destacou-se por sua impressionante extensão vocal. Agora em carreira solo, ministra louvores especiais que o Senhor tem trazido ao seu coração, consolidando-se no cenário cristão.",
    image: "https://i.scdn.co/image/ab6761610000e5eb1d1f0f0f5a7e1f1f1f1f1f1f",
    socialMedia: {
      instagram: "https://www.instagram.com/priscilaolly",
      youtube: "https://www.youtube.com/@priscilaolly",
      spotify: "https://open.spotify.com/artist/9422345"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=G_Mbf4oYc8I"
  },
  {
    id: "carol-braga",
    name: "Carol Braga",
    genre: "Pop Cristão",
    bio: "Carol Braga, cantora e compositora de Brasília, iniciou sua jornada musical aos três anos. Recentemente, lançou o álbum 'Fogo que Consome', composto por cinco faixas, e abençoa vidas com suas canções.",
    image: "https://i.scdn.co/image/ab6761610000e5eb1d1f0f0f5a7e1f1f1f1f1f1f",
    socialMedia: {
      instagram: "https://www.instagram.com/carolbragaoficial",
      youtube: "https://www.youtube.com/@carolbragaoficial",
      spotify: "https://open.spotify.com/artist/4952671"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=video-id-carol-braga"
  },
  {
    id: "joao-antonio",
    name: "João Antônio",
    genre: "Adoração e Louvor",
    bio: "João Antônio Martins começou a pregar aos 13 anos, compartilhando uma mensagem bíblica de quebrantamento. Escritor e editor, também leciona em seminários teológicos, formando uma nova geração de ministros.",
    image: "https://www.al.sp.gov.br/repositorio/deputado/fotos/224.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/joaoantoniooficial",
      youtube: "https://www.youtube.com/@joaoantoniooficial",
      spotify: "https://open.spotify.com/artist/14299839"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=8c_aFmXb_0s"
  }
];
