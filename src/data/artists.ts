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
    image: "https://yt3.googleusercontent.com/AWQcmMIXDo3NZbANwfp0lvnCuNHbhw_riLdVkSs_fn1hz3Q8-DagO6NU9kb4ngyQGiSrPgPwqQ=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/jullianysouza",
      youtube: "https://www.youtube.com/@jullianysouza",
      spotify: "https://open.spotify.com/artist/111v5kC022h042A48n4JHA",
      appleMusic: "https://music.apple.com/br/artist/julliany-souza/1541296225",
      deezer: "https://www.deezer.com/br/artist/113247072"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=xcC3Xh3PFcE"
  },
  {
    id: "jhonas-serra",
    name: "Jhonas Serra",
    genre: "Louvor e Adoração",
    bio: "Jhonas Serra, natural de Brasília, é filho de pastores e iniciou seu ministério cedo. Hoje, representa sua cidade e país com mais de 39 milhões de pessoas alcançadas com músicas como 'Só quero queimar' e 'Furioso Oceano'.",
    image: "https://yt3.googleusercontent.com/DQ86LPAulZw7llfm00vGWtcX3-rlFTwq7i6mp_xE_RzMhwUpPGln732ToTTrrNEf9cD2wMzv1OY=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/jhonasserra",
      youtube: "https://www.youtube.com/@jhonasserra",
      spotify: "https://open.spotify.com/artist/0WsTM0BMHTqJM5M7EGX4EH",
      appleMusic: "https://music.apple.com/br/artist/jhonas-serra/1501799748",
      deezer: "https://www.deezer.com/br/artist/87964722"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=2f38h32R_2s"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo Rubia é um jovem cantor e pastor que se apaixonou pela música na infância. Compositor de canções como 'Pode Morar Aqui' e 'Eu Só Quero Tua Presença', que têm tocado em igrejas por todo o Brasil e outros países.",
    image: "https://yt3.googleusercontent.com/3DIIBhph7dL_uyao6jJlUwa4a4GJ4AIlpB8UelDTKC8xfFFslUr5T34A7DgQWFH7RFSn7dPo=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/theorubia",
      youtube: "https://www.youtube.com/@theorubia",
      spotify: "https://open.spotify.com/artist/3bTnUX1yo0SMLzHk2yU1w2",
      appleMusic: "https://music.apple.com/br/artist/theo-rubia/1273397992",
      deezer: "https://www.deezer.com/br/artist/13019821"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=uUaDScX0PRE"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras e vídeos que ultrapassam 500 mil visualizações no YouTube.",
    image: "https://yt3.googleusercontent.com/-bUSOutpa1_KAMBrnlAOUt4LcDrgaL3wI-ele52Pnn47YiVns_HoIHdTy1cQ6jIzzlsG8fA4=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/karemcardim",
      youtube: "https://www.youtube.com/@karemcardim",
      spotify: "https://open.spotify.com/artist/6e1hS3a64k2AKn1gupq0yQ",
      appleMusic: "https://music.apple.com/br/artist/karem-cardim/1531885455",
      deezer: "https://www.deezer.com/br/artist/107873432"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=kI4D9wVPbOs"
  },
  {
    id: "gabriell-junior",
    name: "Gabriell Júnior",
    genre: "Música Cristã Contemporânea",
    bio: "Gabriell Júnior, cantor e compositor de Goiás, cresceu em uma família musical e pastoral. Cristão apaixonado pela obra de Deus, já alcançou a marca de mais de 15 milhões de visualizações em seu canal no YouTube.",
    image: "https://yt3.googleusercontent.com/bt5HXqbItwqhQ_qBkwR09OoyhnraSw_f-yxmmWa9AITWfgTe_FeiGaJ44IRNXoTekH0YsV8soA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/gabrielljunior",
      youtube: "https://www.youtube.com/@gabrielljunior",
      spotify: "https://open.spotify.com/artist/5LwG8fX3s1s4wda1a3e6M2",
      appleMusic: "https://music.apple.com/br/artist/gabriell-júnior/1289637341",
      deezer: "https://www.deezer.com/br/artist/13352723"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=F0f-1j9c_gA"
  },
  {
    id: "danilo-neves",
    name: "Danilo Neves",
    genre: "Adoração Jovem",
    bio: "Danilo Neves é um jovem adorador que leva mensagens de fé e esperança. Com presença marcante e milhares de visualizações nas plataformas digitais, cada show é uma experiência de conexão com o público jovem.",
    image: "https://yt3.googleusercontent.com/iNLb6-1NNSJTpusT3rs-F6zwIOe3y9hh_HVtI-U8vz4e1boIDymzgzJirF62R80_TVz_h0r2Og=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/danilonevesoficial",
      youtube: "https://www.youtube.com/@danilonevesoficial",
      spotify: "https://open.spotify.com/artist/2BZNtCgTr3oEAP22I3dI54",
      appleMusic: "https://music.apple.com/br/artist/danilo-neves/1737327993",
      deezer: "https://www.deezer.com/br/artist/11967799"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=w9h7j4f-eSg"
  },
  {
    id: "ton-molinari",
    name: "Ton Molinari",
    genre: "Worship / Pop Cristão",
    bio: "Ton Molinari é um reconhecido cantor, compositor e adorador da música cristã contemporânea. Suas canções tocam corações e levam mensagens de esperança em eventos por todo o Brasil.",
    image: "https://yt3.googleusercontent.com/dY7UehHW7CZbAa7I3nOXlQ4oGMBqRJDc6eIrIew7biiVSclCR2M8cWKXYc8pQLQPNhws0tJ5Cw=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/tonmolinari",
      youtube: "https://www.youtube.com/@tonmolinari",
      spotify: "https://open.spotify.com/artist/336822y0H3fOP1zG8wGNh4",
      appleMusic: "https://music.apple.com/br/artist/ton-molinari/1544490812",
      deezer: "https://www.deezer.com/br/artist/117363402"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=1Z-Z1Z1Z1Z1"
  },
  {
    id: "gabriela-gomes",
    name: "Gabriela Gomes",
    genre: "Adoração e Louvor",
    bio: "Filha de Marquinhos Gomes, Gabriela iniciou sua carreira aos 12 anos. Seu álbum de estreia, 'Não vou perder a Fé', e o single 'Deus Proverá' consolidaram seu nome na música cristã nacional.",
    image: "https://yt3.googleusercontent.com/IBk04ozUvk0UkJNPm-aNEMneVaPY-5xL3srrYThr8Fyk9k7QreHZJrHfVNVhMbaZ057WIM22CQ=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/gabrielagomesoficial",
      youtube: "https://www.youtube.com/@gabrielagomesoficial",
      spotify: "https://open.spotify.com/artist/2rGIL7iQ6w0I15bbfwwaCw",
      appleMusic: "https://music.apple.com/br/artist/gabriela-gomes/991754983",
      deezer: "https://www.deezer.com/br/artist/6009928"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=LZflt_pD3wE"
  },
  {
    id: "felipe-vilela",
    name: "Felipe Vilela",
    genre: "Rap Gospel",
    bio: "Felipe Vilela descobriu seu talento para o RAP aos 11 anos. Através de viagens pelo Brasil e exterior, tem levado sua arte e canção, e atualmente é cantor pela Universal Music, aguardando o lançamento de seu DVD 'Orgânico'.",
    image: "https://yt3.googleusercontent.com/eeUb-bZPFKy2_jqCvmYQz4MREwqjqGWFcDeUt2bxE3ffNe25-rCrW418AclG4tHtwFEdmSR4hc0=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/felipevilela",
      youtube: "https://www.youtube.com/@felipevilela",
      spotify: "https://open.spotify.com/artist/5qjP2P9wQZOLaB3gQvh9E3",
      appleMusic: "https://music.apple.com/br/artist/felipe-vilela/1446700683",
      deezer: "https://www.deezer.com/br/artist/54602232"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9g2z1Sp72_g"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Victin mescla rap e poesia cristã, trazendo mensagens profundas de fé. Com estilo único, tem conquistado espaço no rap gospel brasileiro, falando diretamente com a juventude.",
    image: "https://yt3.googleusercontent.com/M-sS2MeDsxi8AG8WkfblxDX4wk8Vl04H8Wtd1oeja1pMNTR05rf0O6S3Jg8pJbXAz1EtF0ePlA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/victinoficial",
      youtube: "https://www.youtube.com/@victinoficial",
      spotify: "https://open.spotify.com/artist/3bso1qsC1SYCi4q10h82A3",
      appleMusic: "https://music.apple.com/br/artist/victin/1521190544",
      deezer: "https://www.deezer.com/br/artist/98606442"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=ElbEKw-I3tM"
  },
  {
    id: "priscila-olly",
    name: "Priscila Olly",
    genre: "Louvor e Pop",
    bio: "Priscila Olly, ex-integrante do grupo Kemuel, destacou-se por sua impressionante extensão vocal. Agora em carreira solo, ministra louvores especiais que o Senhor tem trazido ao seu coração, consolidando-se no cenário cristão.",
    image: "https://yt3.googleusercontent.com/JT7c7kLMTkyrortzEeImD_G7Er_R0y6lkF5BayE8tNUbiveQgHVwRqL9HWol6057MtOZxxNKjEc=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/priscilaolly",
      youtube: "https://www.youtube.com/@priscilaolly",
      spotify: "https://open.spotify.com/artist/31oM9e1p2g2vYd24Y23Y8E",
      appleMusic: "https://music.apple.com/br/artist/priscila-olly/1647463991",
      deezer: "https://www.deezer.com/br/artist/185799307"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=G_Mbf4oYc8I"
  },
  {
    id: "carol-braga",
    name: "Carol Braga",
    genre: "Pop Cristão",
    bio: "Carol Braga, cantora e compositora de Brasília, iniciou sua jornada musical aos três anos. Recentemente, lançou o álbum 'Fogo que Consome', composto por cinco faixas, e abençoa vidas com suas canções.",
    image: "https://yt3.googleusercontent.com/M84FQ_eB5gZGYaES4nF4LUg6Jqp3dVK9msXH-RmLuDteFcsCJ6IDhRO1_2T7pp8nCDhOutqW2B8=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/carolbragaoficial",
      youtube: "https://www.youtube.com/@carolbragaoficial",
      spotify: "https://open.spotify.com/artist/2QC3q1i19e2r8k3PqtyYoW",
      appleMusic: "https://music.apple.com/br/artist/carol-braga/1638798610",
      deezer: "https://www.deezer.com/br/artist/4952671"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=video-id-carol-braga"
  },
  {
    id: "joao-antonio",
    name: "João Antônio",
    genre: "Adoração e Louvor",
    bio: "João Antônio Martins começou a pregar aos 13 anos, compartilhando uma mensagem bíblica de quebrantamento. Escritor e editor, também leciona em seminários teológicos, formando uma nova geração de ministros.",
    image: "https://yt3.googleusercontent.com/xfLvE9HaEaYwWLKpgGN42N1-Juo0wgznR3PR0fDfkMS93s0fyoiD2tKYc_DXpKn88GLSbZy9QA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/joaoantoniooficial",
      youtube: "https://www.youtube.com/@joaoantoniooficial",
      spotify: "https://open.spotify.com/artist/2qh5eJcfH5t5iQ2t51p639",
      appleMusic: "https://music.apple.com/br/artist/joão-antonio/1719767896",
      deezer: "https://www.deezer.com/br/artist/14299839"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=8c_aFmXb_0s"
  }
];