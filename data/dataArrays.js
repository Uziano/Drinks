export const categories = [
  {
    id: 0,
    name: 'Fuertes',
    photo_url:
    "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgrancatador/D/Donde-se-producen-los-mejores-whiskys-1.jpg?itok=qrClHKMo"
  },
  {
    id: 1,
    name: 'Suaves',
    photo_url: "https://www.losvinos.com.ar/wp-content/uploads/2021/11/tragos.jpg"
  },
  {
    id: 2,
    name: 'Sin alcohol',
    photo_url:
    "https://www.eluniversal.com.mx/sites/default/files/2018/06/29/cocteles_sin_alcohol_.jpg"
  },
];

export const recipes = [
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Medida de Whisky',
    photo_url: 'https://cdn.kiwilimon.com/ss_secreto/2108/th5-640x640-p_12286.jpg',
    photosArray: [
      'https://cdn.kiwilimon.com/ss_secreto/2108/th5-640x640-p_12286.jpg',
    ],
    time: '5',
    ingredients: [[0, '3-5 cubos'], [3, '60ml']],
    description:
      '-- Prepara un vaso de trago corto dejándolo enfriar en un congelador\n\n --Retiralo de la heladera o congelador y sirve 60 ml (un shot) con mucho hielo.'
  },
  {
    recipeId: 1,
    categoryId: 0,
    title: 'Negroni',
    photo_url: 'https://www.recetavenezolana.com/wp-content/uploads/2021/07/RFB-1703-1-coctelnegroni.jpg',
    photosArray: [
      'https://www.recetavenezolana.com/wp-content/uploads/2021/07/RFB-1703-1-coctelnegroni.jpg',
    ],
    time: '5',
    ingredients: [
      [0, '3-5 cubos'],
      [3, '15ml'],
      [5, '15ml'],
      [6, '15ml'],
    ],
    description:
      '-- Prepara un vaso de trago corto dejándolo enfriar en un congelador\n\n -- Retiralo de la heladera y sirve 1/3 de cada ingrediente con mucho hielo.'
  },
  {
    recipeId: 2,
    categoryId: 0,
    title: 'Jack n Coke',
    photo_url: 'https://drivito1.imgix.drizly.com/6c9569184ffcbf41/12b2e6a78cc9/JackCoke_Hero.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpeg&h=440&q=25',
    photosArray: [
      'https://drivito1.imgix.drizly.com/6c9569184ffcbf41/12b2e6a78cc9/JackCoke_Hero.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpeg&h=440&q=25',
    ],
    time: '5',
    ingredients: [
      [0, '3-5 cubos'],
      [3, '30~40%'],
      [7, '70~60%'],
    ],
    description:
      '-- Prepara un vaso de trago corto/mediano dejándolo enfriar en un congelador\n\n -- Retiralo de la heladera y sirve las medidas respetando una proporción 30% whisky Jack Daniels y 70% Cola.'
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: 'Destornillador',
    photo_url:
      'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/desarmador-bebida-p0zlfwt6emk5qt2pdf79zisf2lc22xtwauybcmqmo0.jpg',
    photosArray: [
      'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/desarmador-bebida-p0zlfwt6emk5qt2pdf79zisf2lc22xtwauybcmqmo0.jpg'
    ],
    time: '5',
    ingredients: [
      [0, 'Llenar'],
      [1, '1/3'],
      [12, '2/3'],
      [14, '1 Dash'],
    ],
    description:
      '-- Prepara un vaso de trago largo (grande) con mucho hielo, sirve la medida aproximada y a gusto de tu vodka favorito y completá con jugo.'
  },
  
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Fernet Argento',
    photo_url: 'https://www.classique.com.ar/wp-content/uploads/2019/11/DbvNISlWsAIhf2q.jpg',
    photosArray: [
      'https://www.classique.com.ar/wp-content/uploads/2019/11/DbvNISlWsAIhf2q.jpg',
    ],
    time: '5',
    ingredients: [
      [0, 'Llenar'],
      [4, '30~40%'],
      [7, '70~60%'],
    ],
    description:
      '-- Llena un vaso grande o jarra si tenes compañía con mucho hielo, la medida de fernet y lentamente vierte la Coca Cola para hacer la cantidad de espuma correcta y a disfrutar!'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Cuba Libre',
    photo_url:
      'https://recetacubana.com/wp-content/uploads/2017/12/Cuba-Libre-1200x800.jpg',
    photosArray: [
      'https://recetacubana.com/wp-content/uploads/2017/12/Cuba-Libre-1200x800.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQ-7irSBToDJhXy2p7ym9LI0hbSrHXN2yNmaIUHMP4g95EQv84HgjHVxozkgPCDgX1hs&usqp=CAU',
    ],
    time: 10,
    ingredients: [
      [0, 'Llenar'],
      [2, '1/3'],
      [7, '2/3'],
      [14, '3 rodajas'],
    ],
    description:
      '-- Llena un vaso grande o jarra si tenes compañía con mucho hielo junto algunos trozos de limón, la medida de fernet y lentamente vierte la Coca Cola \n\n -- Podes probarlo con unas piscas de pimienta!'
  },
  {
    recipeId: 6,
    categoryId: 1,
    title: 'Gin Tonic',
    photo_url:
      'https://cdn.queapetito.com/wp-content/uploads/2019/11/gin-tonic-perfecto-1200-amp.jpg',
    photosArray: [
      'https://cdn.queapetito.com/wp-content/uploads/2019/11/gin-tonic-perfecto-1200-amp.jpg',
     'https://static.cdn.cadena3.com/admin/playerswf/fotos/ARCHI_879028.jpg',
    ],
    time: 10,
    ingredients: [
      [0, '5 cubos'],
      [5, '60ml'],
      [8, 'Llenar'],
      [11, 'Dash'],
      [15, 'Rama'],
    ],
    description:
      '-- En una copa para Gin pon hielo mas un trozo de romero (opcional), vierte la medida del Gin a elección y llená con Tónica \n\n -- Podes probarlo con unas piscas de pimienta molida!'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Jugo Mix',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnAxGN7megvSgM4YLhdW1DJtfIBSOHbE75A&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnAxGN7megvSgM4YLhdW1DJtfIBSOHbE75A&usqp=CAU',
    ],
    time: 3,
    ingredients: [
      [0, '5 cubos'],
      [12, 'Llenar'],
      [9, 'Dash'],
    ],
    description:
      '-- En un vaso mediano pon el hielo, llena con jugo y sumale un poco de granadina \n\n -- Podes probarlo con unas cerezas o frutas!'
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Hielo',
    photo_url: 'https://kitchenswagger.com/wp-content/uploads/2020/01/clear-ice-final-shot.jpg'
  },
  {
    ingredientId: 1,
    name: 'Vodka',
    photo_url:
      'https://vinomanos.com/wp-content/uploads/2019/09/Vodka.jpg'
  },
  {
    ingredientId: 2,
    name: 'Ron',
    photo_url: 'https://www.portafolio.co/files/article_multimedia/uploads/2016/02/18/56c63fc03a3b7.png'
  },
  {
    ingredientId: 3,
    name: 'Whisky',
    photo_url:
      'https://bebidasconespiritu.com/wp-content/uploads/2019/06/whisky_mejores.jpg'
  },
  {
    ingredientId: 4,
    name: 'Fernet',
    photo_url: 'https://i0.wp.com/shakeadito.com/wp-content/uploads/2021/02/POSTS-FERNET_portada-SITIO-scaled.jpg?fit=1370%2C929&ssl=1'
  },
  {
    ingredientId: 5,
    name: 'Gin',
    photo_url: 'https://i.pinimg.com/originals/72/db/28/72db2888bbcdc508079835912736228e.jpg'
  },
  {
    ingredientId: 6,
    name: 'Vermouth Rosso',
    photo_url:
      'https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/03/1426175686348178482_3285684761.jpg?fit=750%2C516'
  },
  {
    ingredientId: 7,
    name: 'Coca Cola',
    photo_url:
      'https://www.eluniverso.com/resizer/XDCSRrWf-mQVhi9fw2igV2hzPg8=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6O3SHHDC55GTHHHGY4HAWTVD5A.jpg'
  },
  {
    ingredientId: 8,
    name: 'Agua Tónica',
    photo_url:
      'https://sc04.alicdn.com/kf/Ucce168ea20ac4495a43a1aaf89f38818f.jpg'
  },
  {
    ingredientId: 9,
    name: 'Granadina',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJaflx27WHxOKHGyoNQNELT5gPYCteVgkoQ&usqp=CAU'
  },
  {
    ingredientId: 10,
    name: 'Menta',
    photo_url: 'https://i0.wp.com/lanoticia.com/wp-content/uploads/2020/10/mint-5274718-1920.jpg?fit=1200%2C801&ssl=1'
  },
  {
    ingredientId: 11,
    name: 'Almíbar',
    photo_url: 'https://www.gourmet4life.com/image0428/fa/faf0a2089f1647cbfc0c57a8b89124ac.jpg'
  },
  {
    ingredientId: 12,
    name: 'Jugo',
    photo_url:
      'https://solucionatuspreguntas.com/wp-content/uploads/2021/06/Los-mejores-sustitutos-del-jugo-de-naranja.jpg'
  },
  {
    ingredientId: 13,
    name: 'Garnish',
    photo_url:
      'https://luisaolvera.com/wp-content/uploads/2019/07/cascara-de-naranja-lamejornaranja.com-.jpg'
  },
  {
    ingredientId: 14,
    name: 'Limón',
    photo_url:'https://esferadourada.com/website/wp-content/uploads/Media/Fotos/alimentacao/limao/lemon-3225459_1920.jpg'
  },
  {
    ingredientId: 15,
    name: 'Romero',
    photo_url:
      'https://www.psicoactiva.com/wp-content/uploads/2020/06/romero.jpg'
  },
  
];
