export const categories = [
    {
      id: 1,
      img: require('./assets/images/category/Electronic.png'), 
      categoryname: 'Electronics',
    },
    {
      id: 2,
      img: require('./assets/images/category/Fashion.png'), 
      categoryname: 'Fashion',
    },
    {
      id: 3,
      img: require('./assets/images/category/Beauty.png'), 
      categoryname: 'Beauty',
    },
    {
      id: 4,
      img: require('./assets/images/category/Fruit.png'),
      categoryname: 'Fresh Fruit',
    },
  ];
  export const fruitBanner=[
    {
      img: "https://img.freepik.com/free-vector/flat-design-food-template-twitch-banner_23-2149201806.jpg?t=st=1732017496~exp=1732021096~hmac=2580b3bf6d95770ef7bc70126c984cbe23f02c0fd2191d6825ca0fcbfdf1d644&w=1380",
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-vegetables-supermarket-facebook-cover_23-2149385525.jpg?t=st=1732020812~exp=1732024412~hmac=675252a789b72a96b7fb9bfa626d9e936f28f9a174347c9251460329c4fe2c04&w=1380",
    },
    {
      img: "https://img.freepik.com/free-vector/flat-supermarket-twitter-header_23-2149357977.jpg?t=st=1732017526~exp=1732021126~hmac=0fbde8b1c9f6963e86bd9d453432f750673aac1adbb1c6f2ec21c3e8dfd2c212&w=1380",
    },
  ]
  export const electronicsBanner=[
  {
    img: "https://i.ytimg.com/vi/vMVwdSp489E/maxresdefault.jpg"
  },
  {
    img: "https://thietkehaithanh.com/wp-content/uploads/2019/06/thietkehaithanh-banner-1-1.jpg"
  },
  {
    img: "https://prbaochi.cdn.vccloud.vn/wp-content/uploads/2021/07/mau-banner-quang-cao-san-pham-15.jpg"
  },
  {
    img: "https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg"
  }
]
  export const reviews = [
    {
      id: 1,
      userName: "Alice Nguyen",
      comment: "Great quality! Fresh and delicious fruits. Will buy again.",
      rating: 5,
      time: "2 days ago",
    },
    {
      id: 2,
      userName: "John Tran",
      comment: "The fruits were good, but some were not as fresh as expected.",
      rating: 3,
      time: "1 day ago",
    },
    {
      id: 3,
      userName: "Minh Hoang",
      comment: "Fast delivery and excellent packaging. Very satisfied.",
      rating: 4,
      time: "3 hours ago",
    },
    {
      id: 4,
      userName: "Emily Le",
      comment: "Average experience. I expected better quality for the price.",
      rating: 3,
      time: "5 hours ago",
    },
    {
      id: 5,
      userName: "David Pham",
      comment: "Absolutely loved the freshness and taste! Highly recommend.",
      rating: 5,
      time: "3 days ago",
    },
  ];

  
  export const products=[
    {
      id: 1,
      category: "mobile",
      name: "iPhone 13",
      price: 999,
      img: "require('./assets/images/Electronic/ip13.png')",
      rating: 4,
      type: "electronic",
      description: "The iPhone 13 features advanced performance and camera technology, perfect for every lifestyle.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id: 2,
      category: "mobile",
      name: "Samsung Galaxy S21",
      price: 899,
      img: require('./assets/images/Electronic/samsungs21.png'),
      rating: 4,
      type: "electronic",
      description: "Samsung Galaxy S21 offers top-tier performance with stunning design and display.",
      reviews: reviews,
      subBanner: "Best Matched"
    },
    {
      id: 3,
      category: "mobile",
      name: "OnePlus 9",
      price: 729,
      img: require('./assets/images/Electronic/onePlus9.png'),
      rating: 4,
      type: "electronic",
      description: "OnePlus 9 provides a smooth user experience and excellent camera quality at a great price.",
      reviews: reviews,
      subBanner: "Best Matched"
    },
    {
      id: 4,
      category: "mobile",
      name: "Google Pixel 6",
      price: 699,
      img: require('./assets/images/Electronic/ggPixel6.png'),
      rating: 4,
      type: "electronic",
      description: "Google Pixel 6 brings AI-powered photography and clean Android experience to your pocket.",
      reviews: reviews,
      subBanner: "Best Matched"
    },
    {
      id: 5,
      category: "mobile",
      name: "Xiaomi Mi 11",
      price: 649,
      img: require('./assets/images/Electronic/xiaoMi11.png'),
      rating: 4,
      type: "electronic",
      description: "Xiaomi Mi 11 delivers flagship performance with stunning design and value for money.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id: 6,
      category: "mobile",
      name: "Sony Xperia 5 III",
      price: 899,
      img: require('./assets/images/Electronic/sonyXperia.png'),
      rating: 4,
      type: "electronic",
      description: "Sony Xperia 5 III combines excellent camera capabilities and compact design for photography lovers.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id:7,
      name: "Oppo 3S",
      price: 1200,
      category: "mobile",
      img: require('./assets/images/Fruit_Img/Pear.png'),
      rating: 4,
      type: "electronic",
      description: "Oppo 3S is a premium smartphone with elegant design and innovative features.",
      reviews: reviews,
    },
    {
      id: 8,
      category: "ipad",
      name: "iPad Pro",
      price: 1099,
      img: require('./assets/images/Electronic/ipadPro.png'),
      rating: 4,
      type: "electronic",
      description: "The iPad Pro offers a powerful M1 chip for unmatched tablet performance and versatility.",
      reviews: reviews,
    },
    {
      id: 9,
      category: "ipad",
      name: "iPad Air",
      price: 599,
      img: require('./assets/images/Electronic/ipadAir.png'),
      rating: 4,
      type: "electronic",
      description: "iPad Air balances power and portability, making it ideal for work and entertainment.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id: 10,
      category: "ipad",
      name: "Samsung Galaxy Tab S7",
      price: 649,
      img: require('./assets/images/Electronic/ssTabS7.png'),
      rating: 4,
      type: "electronic",
      description: "Samsung Galaxy Tab S7 combines a sleek design with productivity and entertainment features.",
      reviews: reviews,
    },
    {
      id: 11,
      category: "ipad",
      name: "Microsoft Surface Go 3",
      price: 399,
      img: require('./assets/images/Electronic/MSGo3.png'),
      rating: 4,
      type: "electronic",
      description: "Microsoft Surface Go 3 is a portable tablet with versatile features for on-the-go productivity.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id: 12,
      category: "ipad",
      name: "Lenovo Tab P11 Pro",
      price: 499,
      img: require('./assets/images/Electronic/lnv11.png'),
      rating: 4,
      type: "electronic",
      description: "Lenovo Tab P11 Pro is a stylish and powerful tablet perfect for work and play.",
      reviews: reviews,
      subBanner: "Best Matched"
    },
    {
      id: 13,
      category: "ipad",
      name: "Huawei MatePad Pro",
      price: 699,
      img: require('./assets/images/Electronic/ipadPro.png'),
      rating: 4,
      type: "electronic",
      description: "Huawei MatePad Pro brings advanced display technology and sleek design to tablet users.",
      reviews: reviews,
      subBanner: "Best Matched"
    },
    {
      id: 14,
      category: "laptop",
      name: "MacBook Pro",
      price: 1299,
      img: require('./assets/images/Electronic/macpro.png'),
      rating: 4,
      type: "electronic",
      description: "MacBook Pro redefines productivity with its M1 Pro chip and stunning Liquid Retina XDR display.",
      reviews: reviews,
      subBanner: "Best Sales"
    },
    {
      id: 15,
      category: "laptop",
      name: "Dell XPS 13",
      price: 999,
      img: require('./assets/images/Electronic/macpro.png'),
      rating: 4,
      type: "electronic",
      description: "Dell XPS 13 offers a compact design, stunning display, and excellent performance.",
      reviews: reviews,
      subBanner: "Popular"
    },
    {
      id: 16,
      category: "laptop",
      name: "HP Spectre x360",
      price: 1199,
      img: require('./assets/images/Electronic/MSGo3.png'),
      rating: 4,
      type: "electronic",
      description: "HP Spectre x360 is a premium convertible laptop with style and high-end performance.",
      reviews: reviews,
      subBanner: "Popular"
    },
    {
      id: 17,
      category: "laptop",
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1299,
      img: require('./assets/images/Electronic/thinkpad.png'),
      rating: 4,
      type: "electronic",
      description: "Lenovo ThinkPad X1 Carbon combines lightweight design with professional-grade performance.",
      reviews: reviews,
      subBanner: "Popular"
    },
    {
      id: 18,
      category: "laptop",
      name: "Microsoft Surface Laptop 4",
      price: 999,
      img: require('./assets/images/Electronic/MSGo3.png'),
      rating: 4,
      type: "electronic",
      description: "Microsoft Surface Laptop 4 offers a sleek design and impressive battery life for professionals.",
      reviews: reviews,
      subBanner: "Popular"
    },
    {
      id: 19,
      category: "laptop",
      name: "Asus ZenBook 13",
      price: 899,
      img: require('./assets/images/Electronic/asus.png'),
      rating: 4,
      type: "electronic",
      description: "Asus ZenBook 13 is a compact and lightweight laptop with excellent performance and battery life.",
      reviews: reviews,
      subBanner: "Popular"
    },
    {
      id: 20,
      name: 'Pear',
      price: 3,           
      rating: 3,
      img: require('./assets/images/Fruit_Img/Pear.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 21,
      name: 'Avocado',
      price: 4,
      rating: 3,
      img: require('./assets/images/Fruit_Img/avocado.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 22,
      name: 'Cherry',
      price: 10,
      rating: 3,
      img: require('./assets/images/Fruit_Img/cherry.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 23,
      name: 'Orange',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/Orange.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 24,
      name: 'Pineapple',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/pineapple.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 25,
      name: 'Orange',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/Orange.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 26,
      name: 'Strawberry ',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/strawberry.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 27,
      name: 'Watermelon',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/watermelon.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 28,
      name: 'Coconut',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/coconut.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 29,
      name: 'Peach',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/paech.png'),
      reviews: reviews,
      description: "Fruit",
      type: "fruit"
    },
    {
      id: 30,
      name: 'Cherry',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fruit_Img/cherry.png'),
      description: "Fruit",
      reviews: reviews,
      type: "fruit"
    },
    {
      id: 31,
    name: 'Lipstick',
    price: 15,
    rating: 4,
    img: require('./assets/images/Beauty_Img/sonMoi.png'),
    description: "Beauty product",
    reviews: reviews,
    type: "Beauty"
    },
    {
      id: 32,
      name: 'Face Cream',
      price: 25,
      rating: 5,
      img: require('./assets/images/Beauty_Img/KCN.png'),
      description: "Beauty product",
      reviews: reviews,
      type: "Beauty"
    },
    {
      id: 33,
      name: 'Kem chống nắng',
      price: 7,
      rating: 3,
      img: require('./assets/images/Beauty_Img/KCN.png'),
      description: "Beauty",
      reviews: reviews,
      type: "Beauty"
    },
    {
      id: 34,
      name: 'Serum',
      price: 7,
      rating: 3,
      img: require('./assets/images/Beauty_Img/serum.png'),
      description: "Beauty",
      reviews: reviews,
      type: "Beauty"
    },
    {
      id: 36,
      name: 'Toner',
      price: 7,
      rating: 3,
      img: require('./assets/images/Beauty_Img/toner.png'),
      description: "Beauty",
      reviews: reviews,
      type: "Beauty"
    },
    {
      id: 37,
      name: 'Jordan 1 Smoke Gray',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fashion_Img/Jd1.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 38,
      name: 'Jordan 1',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fashion_Img/Jd2.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 39,
      name: 'LV bag ',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fashion_Img/bagLV.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 40,
      name: 'LV T-shirt',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fashion_Img/aoLV.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 41,
      name: 'Supre Jacket',
      price: 7,
      rating: 3,
      img: require('./assets/images/Fashion_Img/aoKhoacSup.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 43,
      name: 'Nike pant',
      price: 150,
      rating: 3,
      img: require('./assets/images/Fashion_Img/quanJogger.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 44,
      name: 'Jordan shoe',
      price: 100,
      rating: 3,
      img: require('./assets/images/Fashion_Img/Jd3.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
    {
      id: 45,
      name: 'AF1',
      price: 80,
      rating: 3,
      img: require('./assets/images/Fashion_Img/Jd4.png'),
      description: "Fashion",
      reviews: reviews,
      type: "Fashion"
    },
  ]