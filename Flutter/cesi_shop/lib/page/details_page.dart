import 'package:cesi_shop/model/product.dart';
import 'package:cesi_shop/page/list_products_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../model/cart.dart';

class DetailsPage extends StatelessWidget {
  Product product= Product(
    title: 'iPhone 14 Pro',
    description: 'Dernier smartphone Apple avec puce A16 Bionic',
    category: 'Électronique',
    image: 'https://picsum.photos/id/1/500/180',
    price: 999.99,
  );
  DetailsPage({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return
      Scaffold(
      appBar: AppBar(
        title: Text(product.title),
        actions: [
          IconButton(onPressed: (){
            context.go("/cart");
          }, icon: Icon(Icons.shopping_cart)
          )
        ],
        backgroundColor: Theme.of(context).colorScheme.inversePrimary ,

      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              SizedBox(
                height: 180,
                width: MediaQuery.of(context).size.width,
                child: Image.network(product.image),
              ),
            ],
          ),
          LineTitlePrice(product: product),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(product.description),
          ),
          Spacer(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: SizedBox(
              width: MediaQuery.of(context).size.width,
              child: FilledButton(
                onPressed: (){
                  context.read<Cart>().add(product);
                },
                child: Text("Ajouter au panier"),
              ),
            ),
          ),
          IconButton(
              onPressed: () {
                ImagePicker().pickImage(source: ImageSource.camera, preferredCameraDevice: CameraDevice.front).then((v) {
                  if (v != null) {
                    snackText(context, v.path);
                  }
                });
              }, icon: Icon(Icons.camera_alt))


        ],
      )
    );
  }
}

void snackText(BuildContext ctx, String text) =>
    ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text(text)));

class LineTitlePrice extends StatelessWidget {
  const LineTitlePrice({
    super.key,
    required this.product,
  });

  final Product product;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(

        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Flexible(
            child:
              Text(
                product.title,
                style: Theme.of(context).textTheme.headlineMedium,
              )
          ),
          Text(product.price.toString()+'€')
        ],
      ),
    );
  }
}