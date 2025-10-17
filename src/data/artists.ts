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
  };
  featuredVideoUrl?: string;
}

export const artists: Artist[] = [
  {
    id: "julliany-souza",
    name: "Julliany Souza",
    genre: "Adoração e Pop Cristão",
    bio: "Julliany Souza é uma das principais cantoras e compositoras da música cristã no Brasil. Com uma voz expressiva, consolidou sua carreira como representante da música gospel nacional e internacional, com canções como 'A Casa É Sua' e 'Eu Te Vejo Em Tudo'.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_SEzfLR6gZjsxAsCnkKKFjU3p-iXoOZqmJMeWAp5vA_YNnVQGCX3r0a2qCv4yz50e--YEMFqTU=s1200",
    socialMedia: {
      instagram: "https://instagram.com/jullianysouza",
      youtube: "https://youtube.com/@jullianysouza",
      spotify: "https://open.spotify.com/artist/0dS84B6JspZf5a9D_22n4s",
      appleMusic: "https://music.apple.com/artist/julliany-souza/465897081",
      deezer: "https://www.deezer.com/artist/5596494"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=xcC3Xh3PFcE"
  },
  {
    id: "jhonas-serra",
    name: "Jhonas Serra",
    genre: "Louvor e Adoração",
    bio: "Jhonas Serra, natural de Brasília, é filho de pastores e iniciou seu ministério cedo. Hoje, representa sua cidade e país com mais de 39 milhões de pessoas alcançadas com músicas como 'Só quero queimar' e 'Furioso Oceano'.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_QxNl5xeGl0HH8FJnuJ5rQV72u0lrObztFjbx0Vp4Yq6CdIVJWPGKXs2ypQsQTJKFRj3YF3BLM=s1200",
    socialMedia: {
      instagram: "https://instagram.com/jhonasserra",
      youtube: "https://youtube.com/@jhonasserra",
      spotify: "https://open.spotify.com/artist/1hLd1f2o1M1b4Y6vWb2yvN",
      appleMusic: "https://music.apple.com/artist/jhonas-serra/1476095866",
      deezer: "https://www.deezer.com/artist/71024642"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=2f38h32R_2s"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo Rubia é um jovem cantor e pastor que se apaixonou pela música na infância. Compositor de canções como 'Pode Morar Aqui' e 'Eu Só Quero Tua Presença', que têm tocado em igrejas por todo o Brasil e outros países.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_Quv0VMGQ5Ov2MnTbT9sR4l0IuPy1pThbILjMb1JkbPn9L4gWj8wWWbN_dOwcJoaZa5g_0FETY=s1200",
    socialMedia: {
      instagram: "https://instagram.com/theorubia",
      youtube: "https://youtube.com/@theorubia",
      spotify: "https://open.spotify.com/artist/3bTnSZoJC36oNVr0I6AdoA",
      appleMusic: "https://music.apple.com/artist/theo-rubia/1449934862",
      deezer: "https://www.deezer.com/artist/67092732"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=uUaDScX0PRE"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras e vídeos que ultrapassam 500 mil visualizações no YouTube.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_TYNABnAkVGq5oy4cXMXF2qVvxE8sSDzq6iH2IvHqE0NkBB7rBjk0nLj4pMKQCiVPnzfNJXGVs=s1200",
    socialMedia: {
      instagram: "https://instagram.com/karemcardim",
      youtube: "https://youtube.com/@karemcardim",
      spotify: "https://open.spotify.com/artist/62fcY92o21yS0g3S2g3s14",
      appleMusic: "https://music.apple.com/artist/karem-cardim/1544873965",
      deezer: "https://www.deezer.com/artist/96677552"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=kI4D9wVPbOs"
  },
  {
    id: "gabriell-junior",
    name: "Gabriell Júnior",
    genre: "Música Cristã Contemporânea",
    bio: "Gabriell Júnior, cantor e compositor de Goiás, cresceu em uma família musical e pastoral. Cristão apaixonado pela obra de Deus, já alcançou a marca de mais de 15 milhões de visualizações em seu canal no YouTube.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_RD7wv7kILW6kYB6lAjXGfA0KyZKMQ5LiT6dJe4dQXLXJMRxJ_7LIFPwu_vHgz-_oVuZA3gGRg=s1200",
    socialMedia: {
      instagram: "https://instagram.com/gabrielljunior",
      youtube: "https://youtube.com/@gabrielljunior",
      spotify: "https://open.spotify.com/artist/5dK2p5C62aNh51a4fXSD2E",
      appleMusic: "https://music.apple.com/artist/gabriell-j%C3%BAnior/1496848853",
      deezer: "https://www.deezer.com/artist/78468812"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=F0f-1j9c_gA"
  },
  {
    id: "danilo-neves",
    name: "Danilo Neves",
    genre: "Adoração Jovem",
    bio: "Danilo Neves é um jovem adorador que leva mensagens de fé e esperança. Com presença marcante e milhares de visualizações nas plataformas digitais, cada show é uma experiência de conexão com o público jovem.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_S_vg7pFVQ6eNWHChGOV0fXfqC8d7ZXuLXZL_4yAqJF7z5ASmD8wKHx0cP4xQlZdnk4xFmIJQ=s1200",
    socialMedia: {
      instagram: "https://instagram.com/danilonevesoficial",
      youtube: "https://youtube.com/@danilonevesoficial",
      spotify: "https://open.spotify.com/artist/5Y7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/danilo-neves/1234567890",
      deezer: "https://www.deezer.com/artist/12345678"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=w9h7j4f-eSg"
  },
  {
    id: "ton-molinari",
    name: "Ton Molinari",
    genre: "Worship / Pop Cristão",
    bio: "Ton Molinari é um reconhecido cantor, compositor e adorador da música cristã contemporânea. Suas canções tocam corações e levam mensagens de esperança em eventos por todo o Brasil.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_QO5D7nAh0bEG5bA5w3QqN5e8jGCHO0CnqHLlOq0AXPP5yS9oqgXA44jfk7xLPRy_I2T4z8LDs=s1200",
    socialMedia: {
      instagram: "https://instagram.com/tonmolinari",
      youtube: "https://youtube.com/@tonmolinari",
      spotify: "https://open.spotify.com/artist/3q7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/ton-molinari/1234567891",
      deezer: "https://www.deezer.com/artist/12345679"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=pMbQjEsZfYw"
  },
  {
    id: "gabriela-gomes",
    name: "Gabriela Gomes",
    genre: "Adoração e Louvor",
    bio: "Filha de Marquinhos Gomes, Gabriela iniciou sua carreira aos 12 anos. Seu álbum de estreia, 'Não vou perder a Fé', e o single 'Deus Proverá' consolidaram seu nome na música cristã nacional.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_TjVCqOxH9rp9aVr6B5UmBMc6qPJcqTZhk8ZfL9BNgkFNPMBqzKkN5TY_OxBGqLBPnq5dj8bJk=s1200",
    socialMedia: {
      instagram: "https://instagram.com/gabrielagomesoficial",
      youtube: "https://youtube.com/@gabrielagomesoficial",
      spotify: "https://open.spotify.com/artist/2e6fPpl1pABpCA3pG6w3eA",
      appleMusic: "https://music.apple.com/artist/gabriela-gomes/457878082",
      deezer: "https://www.deezer.com/artist/5498172"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=LZflt_pD3wE"
  },
  {
    id: "felipe-vilela",
    name: "Felipe Vilela",
    genre: "Rap Gospel",
    bio: "Felipe Vilela descobriu seu talento para o RAP aos 11 anos. Através de viagens pelo Brasil e exterior, tem levado sua arte e canção, e atualmente é cantor pela Universal Music, aguardando o lançamento de seu DVD 'Orgânico'.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_TW8UmE2bPHN5Y4J9xDfNgXVP9Y7P0mK5Z8K1gLvMjXJ5qN5P9kL5dN9x0qY5dN9x0qY5dN9x=s1200",
    socialMedia: {
      instagram: "https://instagram.com/felipevilela",
      youtube: "https://youtube.com/@felipevilela",
      spotify: "https://open.spotify.com/artist/1K7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/felipe-vilela/1234567892",
      deezer: "https://www.deezer.com/artist/12345680"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9g2z1Sp72_g"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Victin mescla rap e poesia cristã, trazendo mensagens profundas de fé. Com estilo único, tem conquistado espaço no rap gospel brasileiro, falando diretamente com a juventude.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_SMK4xQ5Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y=s1200",
    socialMedia: {
      instagram: "https://instagram.com/victinoficial",
      youtube: "https://youtube.com/@victinoficial",
      spotify: "https://open.spotify.com/artist/2K7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/victin/1234567893",
      deezer: "https://www.deezer.com/artist/12345681"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=ElbEKw-I3tM"
  },
  {
    id: "priscila-olly",
    name: "Priscila Olly",
    genre: "Louvor e Pop",
    bio: "Priscila Olly, ex-integrante do grupo Kemuel, destacou-se por sua impressionante extensão vocal. Agora em carreira solo, ministra louvores especiais que o Senhor tem trazido ao seu coração, consolidando-se no cenário cristão.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_RqPq1Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y=s1200",
    socialMedia: {
      instagram: "https://instagram.com/priscilaolly",
      youtube: "https://youtube.com/@priscilaolly",
      spotify: "https://open.spotify.com/artist/3K7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/priscila-olly/1234567894",
      deezer: "https://www.deezer.com/artist/12345682"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=G_Mbf4oYc8I"
  },
  {
    id: "carol-braga",
    name: "Carol Braga",
    genre: "Pop Cristão",
    bio: "Carol Braga, cantora e compositora de Brasília, iniciou sua jornada musical aos três anos. Recentemente, lançou o álbum 'Fogo que Consome', composto por cinco faixas, e abençoa vidas com suas canções.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_Tq1Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y=s1200",
    socialMedia: {
      instagram: "https://instagram.com/carolbragaoficial",
      youtube: "https://youtube.com/@carolbragaoficial",
      spotify: "https://open.spotify.com/artist/4K7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/carol-braga/1234567895",
      deezer: "https://www.deezer.com/artist/12345683"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9K3jHxnVxMI"
  },
  {
    id: "joao-antonio",
    name: "João Antônio",
    genre: "Adoração e Louvor",
    bio: "João Antônio Martins começou a pregar aos 13 anos, compartilhando uma mensagem bíblica de quebrantamento. Escritor e editor, também leciona em seminários teológicos, formando uma nova geração de ministros.",
    image: "https://lh3.googleusercontent.com/ci/AL18g_Sq1Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6Y=s1200",
    socialMedia: {
      instagram: "https://instagram.com/joaoantoniooficial",
      youtube: "https://youtube.com/@joaoantoniooficial",
      spotify: "https://open.spotify.com/artist/5K7Q5q1Y6Y6Y6Y6Y6Y6Y6Y",
      appleMusic: "https://music.apple.com/artist/joao-antonio/1234567896",
      deezer: "https://www.deezer.com/artist/12345684"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=8c_aFmXb_0s"
  }
];
