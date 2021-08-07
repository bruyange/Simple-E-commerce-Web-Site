var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    title: 'Mens T-shirt',
    description: 'Get this Awesome T-Shirt for Mens. Winters is Coming!',
    price: 29
}),
new Product({
    imagePath: 'http://www.henrilloyd.com/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/m/3/m350161_ind_fr.jpg',
    title: 'Mens Shirts',
    description: 'Get this Awesome Formal Shirt for Men. Winters is Coming!',
    price: 39
}),
new Product({
    imagePath: 'https://res.cloudinary.com/stylight/image/upload/b_rgb:fff,c_pad,f_auto,q_auto,h_200,w_200/product-jack-wolfskin-activate-pants-tall-black-mens-casual-pants-50463054.jpg',
    title: 'Mens Pants',
    description: 'Awesome Pants for Men. Winters is Coming!',
    price: 59
}),
new Product({
    imagePath: 'http://ecx.images-amazon.com/images/I/51s6ZJ%2BAf3L._AC_SS200_.jpg',
    title: 'Mens Watches',
    description: 'Awesome Watches. Go get them. Winters is Coming!',
    price: 99
}),
new Product({
    imagePath: 'http://www.tactics.com/a/8io7/o/chocolate-joe-coach-jacket-black.jpg',
    title: 'Mens Jackets',
    description: 'Awesome Jackets! Winters is Coming!',
    price: 129
}),
new Product({
    imagePath: 'https://res.cloudinary.com/stylight/image/upload/b_rgb:fff,c_pad,f_auto,q_auto,h_200,w_200/product-vans-og-sk8-hi-lx-suede-and-canvas-high-top-sneakers-schiefer-97171270.jpg',
    title: 'Mens Sneakers',
    description: 'Awesome Sneakers! Go get them. Winters is Coming!',
    price: 89
})
];
var done= 0;
for (var i = 0; i< products.length; i++)
{
    products[i].save(function(err, result)
    {
        done++;
        if (done === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
