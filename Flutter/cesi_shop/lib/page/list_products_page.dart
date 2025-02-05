import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../model/Product.dart';

final List<Product> products = [
  Product(
    title: 'iPhone 14 Pro',
    description: 'Dernier smartphone Apple avec puce A16 Bionic',
    category: 'Électronique',
    image: 'https://picsum.photos/id/1/400/400',
    price: 999.99,
  ),
  Product(
    title: 'MacBook Air M2',
    description: 'Ordinateur portable ultra-fin avec puce Apple M2',
    category: 'Informatique',
    image: 'https://picsum.photos/id/2/400/400',
    price: 1299.99,
  ),
  Product(
    title: 'AirPods Pro',
    description: 'Écouteurs sans fil avec réduction active du bruit',
    category: 'Audio',
    image: 'https://picsum.photos/id/3/400/400',
    price: 249.99,
  ),
  Product(
    title: 'iPad Air',
    description: 'Tablette polyvalente avec écran Liquid Retina',
    category: 'Tablettes',
    image: 'https://picsum.photos/id/4/400/400',
    price: 599.99,
  ),
  Product(
    title: 'Apple Watch Series 8',
    description: 'Montre connectée avec suivi santé avancé',
    category: 'Accessoires',
    image: 'https://picsum.photos/id/5/400/400',
    price: 399.99,
  ),
  Product(
    title: 'Mac Studio',
    description: 'Station de travail professionnelle ultra-puissante',
    category: 'Informatique',
    image: 'https://picsum.photos/id/6/400/400',
    price: 1999.99,
  ),
  Product(
    title: 'HomePod mini',
    description: 'Enceinte intelligente compacte avec Siri',
    category: 'Audio',
    image: 'https://picsum.photos/id/7/400/400',
    price: 99.99,
  ),
  Product(
    title: 'Magic Keyboard',
    description: 'Clavier sans fil avec pavé tactile',
    category: 'Accessoires',
    image: 'https://picsum.photos/id/8/400/400',
    price: 299.99,
  ),
  Product(
    title: 'Studio Display',
    description: 'Écran 5K de 27 pouces avec webcam intégrée',
    category: 'Accessoires',
    image: 'https://picsum.photos/id/9/400/400',
    price: 1599.99,
  ),
  Product(
    title: 'AirTag',
    description: 'Dispositif de suivi d\'objets Bluetooth',
    category: 'Accessoires',
    image: 'https://picsum.photos/id/10/400/400',
    price: 29.99,
  ),
];

class ListProductsPage extends StatelessWidget {
  const ListProductsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(onPressed: (){
            context.go("/cart");
          }, icon: Icon(Icons.shopping_cart)
          )
        ],
        backgroundColor: Theme.of(context).colorScheme.inversePrimary ,
        title: Text('Saisie Shop'),

      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context,index){
          return InkWell(
            onTap: (){},
            child: ListTile(
              leading: Image.network(
                products[index].image,
                loadingBuilder: (_,child,___)=>
                    SizedBox(
                      height: 48,
                      width: 48,
                      child: child,
                    )
              ),
              title: Text(products[index].title),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(products[index].description),
                  Text(
                      style: Theme.of(context).textTheme.titleMedium,
                      products[index].priceEuro()
                  ),
                ],
              ),
              trailing: TextButton(
                  onPressed: () {},
                  child: Text("Ajouter")
              ),
            ),
          );
        },
      ),
    );
  }
}
