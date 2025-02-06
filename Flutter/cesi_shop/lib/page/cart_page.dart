import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import '../model/cart.dart';

class CartPage extends StatelessWidget {
  const CartPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text('Panier'),
        ),
        body:
          (context.watch<Cart>().qty > 0)
            ? Column(children: [
                LineTotalPrice(),
                Flexible(child: ListProductsCart())
              ]
            )
            : Stack(children: [LineTotalPrice(), InfoEmptyCart()]),
    );
  }
}

class InfoEmptyCart extends StatelessWidget {
  const InfoEmptyCart({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Center(child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(context.watch<Cart>().qty.toString()),
        Text("Votre panier est actuellement vide"),
        Icon(Icons.image),
      ],
    ),
            );
  }
}

class LineTotalPrice extends StatelessWidget {
  const LineTotalPrice({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
        Text("Votre panier total est de "),
        Text("${context.watch<Cart>().totalPrice} €"),
      ],),
    );
  }
}

class ListProductsCart extends StatelessWidget {
  const ListProductsCart({super.key});

  @override
  Widget build(BuildContext context){
    return ListView.builder(
      itemCount: context.watch<Cart>().qty,
      itemBuilder: (context,index){
        final product = context.watch<Cart>().products[index];
        return InkWell(
          onTap: () {
            context.go("/detail", extra: product);
          },
          child: ListTile(
            leading: Image.network(
                product.image,
                loadingBuilder: (_,child,___)=>
                    SizedBox(
                      height: 48,
                      width: 48,
                      child: child,
                    )
            ),
            title: Text(product.title),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                    style: Theme.of(context).textTheme.titleMedium,
                    product.priceEuro()
                ),
              ],
            ),
            trailing: TextButton(
                onPressed: () {
                  context.read<Cart>().remove(product);
                },
                child: Text("Supprimer")
            ),
          ),
        );
      },
    );
  }
}