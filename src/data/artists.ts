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
    bio: "Julliany Souza é uma das principais cantoras e compositoras da música cristã no Brasil. Com uma voz expressiva, consolidou sua carreira como representante da música gospel nacional e internacional.",
    image: "https://yt3.googleusercontent.com/AWQcmMIXDo3NZbANwfp0lvnCuNHbhw_riLdVkSs_fn1hz3Q8-DagO6NU9kb4ngyQGiSrPgPwqQ=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/jullianysouza",
      youtube: "https://www.youtube.com/@JullianySouza",
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
    bio: "Jhonas Serra é um cantor, compositor e líder de adoração, natural de Brasília - DF. Casado e filho de pastores, cresceu em um lar musical, onde o ministério e a música se entrelaçam desde muito cedo.",
    image: "https://yt3.googleusercontent.com/DQ86LPAulZw7llfm00vGWtcX3-rlFTwq7i6mp_xE_RzMhwUpPGln732ToTTrrNEf9cD2wMzv1OY=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/jhonaserra",
      youtube: "https://www.youtube.com/@JhonasSerra",
      spotify: "https://open.spotify.com/intl-pt/artist/0WsTM0BMHTqJM5M7EGX4EH",
      appleMusic: "https://music.youtube.com/channel/UC3kB5FrWpviNddwXFJ720KQ",
      deezer: "https://www.deezer.com/br/artist/11163478"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=bmAwpcTyKyo"
  },
  {
    id: "theo-rubia",
    name: "Theo Rubia",
    genre: "Worship e Adoração",
    bio: "Theo é cantor, pastor e compositor de grandes hits de sucesso do mercado gospel brasileiro. Entre eles estão as músicas 'Pode Morar Aqui', 'Eu Só Quero Tua Presença' e 'Um Milhão de Anos'.",
    image: "https://yt3.googleusercontent.com/3DIIBhph7dL_uyao6jJlUwa4a4GJ4AIlpB8UelDTKC8xfFFslUr5T34A7DgQWFH7RFSn7dPo=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/theorubia",
      youtube: "https://www.youtube.com/@theorubia",
      spotify: "https://open.spotify.com/intl-pt/artist/3bTnUXCo3suJiLVb79pExe",
      appleMusic: "https://itunes.apple.com/br/artist/theo-rubia/885884265",
      deezer: "https://www.deezer.com/artist/5916639?utm_source=deezer&utm_content=artist-5916639&utm_term=2455184068_1549297455&utm_medium=web"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=n0fDvJAyrQ8"
  },
  {
    id: "karem-cardim",
    name: "Karem Cardim",
    genre: "Louvor e Pop Gospel",
    bio: "A Missionária Karem Cardim leva o amor de Deus através de sua delicadeza. Seu ministério tem se destacado no Brasil com mensagens fundamentadas nas escrituras e vídeos que ultrapassam 500 mil visualizações no YouTube.",
    image: "https://yt3.googleusercontent.com/-bUSOutpa1_KAMBrnlAOUt4LcDrgaL3wI-ele52Pnn47YiVns_HoIHdTy1cQ6jIzzlsG8fA4=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/karemcardim",
      youtube: "https://www.youtube.com/@KaremCardim",
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
    bio: "Gabriell Júnior sente que a sua missão é levar uma adoração extravagante ao coração das pessoas para se aprofundarem no relacionamento com Deus Pai.",
    image: "https://yt3.googleusercontent.com/bt5HXqbItwqhQ_qBkwR09OoyhnraSw_f-yxmmWa9AITWfgTe_FeiGaJ44IRNXoTekH0YsV8soA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/gabrielljr",
      youtube: "https://www.youtube.com/@GabriellJunior",
      spotify: "https://open.spotify.com/intl-pt/artist/7MLz6FXaGXB3yfjb0baqDH",
      appleMusic: "https://apple.co/3t465zT",
      deezer: "https://www.deezer.com/sv/artist/12200182"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=F0f-1j9c_gA"
  },
  {
    id: "danilo-neves",
    name: "Danilo Neves",
    genre: "Adoração Jovem",
    bio: "Danilo Neves é cantor e compositor cristão. Desde muito novo, dedica-se para aquilo que foi chamado pelo Senhor. Iniciou seu ministério aos 15 anos na igreja.",
    image: "https://yt3.googleusercontent.com/iNLb6-1NNSJTpusT3rs-F6zwIOe3y9hh_HVtI-U8vz4e1boIDymzgzJirF62R80_TVz_h0r2Og=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/danilonevesoficial",
      youtube: "https://www.youtube.com/@danilooneves",
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
    bio: "cantando a Verdade.",
    image: "https://yt3.googleusercontent.com/dY7UehHW7CZbAa7I3nOXlQ4oGMBqRJDc6eIrIew7biiVSclCR2M8cWKXYc8pQLQPNhws0tJ5Cw=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/tonmolinari",
      youtube: "https://www.youtube.com/@Ton_Molinari",
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
      youtube: "https://www.youtube.com/@GabrielaGomes",
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
    bio: "Pai, Pastor, Poeta, Pioneiro pra plebe. Portfólio público, prisioneiro pardo, psicose preta, profetizando prazos. Proferindo poesia pros pródigos.",
    image: "https://yt3.googleusercontent.com/eeUb-bZPFKy2_jqCvmYQz4MREwqjqGWFcDeUt2bxE3ffNe25-rCrW418AclG4tHtwFEdmSR4hc0=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/felipevilela5pl",
      youtube: "https://www.youtube.com/@felipevilela5pl",
      spotify: "https://open.spotify.com/intl-pt/artist/7oDJQjouTE3FiFv2TXUxPp",
      appleMusic: "https://music.apple.com/br/artist/felipe-vilela/986683000",
      deezer: "https://www.deezer.com/us/artist/7833916"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=9g2z1Sp72_g"
  },
  {
    id: "victin",
    name: "Victin",
    genre: "Rap / Poesia Cristã",
    bio: "Prefeituras: 63 99224-5490 | Eventos: 11 94574-3484 | Publicidade: victinassessoria@gmail.com. Jesus Invadiu a Cena 🌎",
    image: "https://yt3.googleusercontent.com/M-sS2MeDsxi8AG8WkfblxDX4wk8Vl04H8Wtd1oeja1pMNTR05rf0O6S3Jg8pJbXAz1EtF0ePlA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/victin",
      youtube: "https://www.youtube.com/@VICTIN__",
      spotify: "https://open.spotify.com/intl-pt/artist/3brCnZDTt5fHf0BBXvPa6p",
      appleMusic: "https://music.apple.com/br/artist/victin/1521190544",
      deezer: "https://www.deezer.com/br/artist/98606442"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=ElbEKw-I3tM"
  },
  {
    id: "priscila-olly",
    name: "Priscila Olly",
    genre: "Louvor e Pop",
    bio: "CANAL OFICIAL DA CANTORA PRISCILA OLLY. Em minha nova fase solo, convido você a embarcar comigo nessa jornada de transformação e fé, onde cada canção é um convite à reflexão e ao sentimento.",
    image: "https://yt3.googleusercontent.com/JT7c7kLMTkyrortzEeImD_G7Er_R0y6lkF5BayE8tNUbiveQgHVwRqL9HWol6057MtOZxxNKjEc=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/priscilaolly/?hl=pt",
      youtube: "https://www.youtube.com/@priscilaollly",
      spotify: "https://open.spotify.com/intl-pt/artist/5hK2DFyP32D2bS9oQzbwzy",
      appleMusic: "https://music.apple.com/br/artist/priscila-olly/1647463991",
      deezer: "https://www.deezer.com/br/artist/185799307"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=G_Mbf4oYc8I"
  },
  {
    id: "carol-braga",
    name: "Carol Braga",
    genre: "Pop Cristão",
    bio: "Worship leader, songwriter. Instagram: @carolbragabr",
    image: "https://yt3.googleusercontent.com/M84FQ_eB5gZGYaES4nF4LUg6Jqp3dVK9msXH-RmLuDteFcsCJ6IDhRO1_2T7pp8nCDhOutqW2B8=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/carolbragabr",
      youtube: "https://www.youtube.com/@CarolBraga",
      spotify: "https://open.spotify.com/intl-pt/artist/62tR4thbBmrAuprUoUVgGA",
      appleMusic: "https://music.apple.com/br/artist/carol-braga/1465992302",
      deezer: "https://deezer.page.link/J9cZkMcMxC1jaGvH8"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=video-id-carol-braga"
  },
  {
    id: "joao-antonio",
    name: "João Antônio",
    genre: "Pregador e Escritor",
    bio: "João Antônio, pregador e escritor, autor de mais de 4 livros e coautor de mais de 12 títulos. É teólogo formado pela faculdade Teológica Sul Americana e membro da Family Church em Goiânia-GO, liderada pelo pastor Mac Anderson. Atualmente com 22 anos, João iniciou seu ministério aos 13 anos, em uma cidade do interior do estado de Goiás, onde teve seu primeiro contato com o púlpito. Nesse tempo, João também liderou jovens e grupos de evangelismo. Atualmente sua redes sociais alcançam mais de 800 mil pessoas por mês. Seus conteúdos têm atingido um grande público, utilizando uma linguagem totalmente bíblica e prática.",
    image: "https://yt3.googleusercontent.com/xfLvE9HaEaYwWLKpgGN42N1-Juo0wgznR3PR0fDfkMS93s0fyoiD2tKYc_DXpKn88GLSbZy9QA=s900-c-k-c0x00ffffff-no-rj",
    socialMedia: {
      instagram: "https://www.instagram.com/joaoantoniomartins_?igsh=MTZ4Zmoxa3F3Y2FleA==&utm_source=qr",
      youtube: "https://www.youtube.com/@joaoantoniomartinss"
    },
    featuredVideoUrl: "https://www.youtube.com/watch?v=8c_aFmXb_0s"
  }
];