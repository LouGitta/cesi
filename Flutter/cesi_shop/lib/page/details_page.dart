import 'package:cesi_shop/page/list_products_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class DetailsPage extends StatelessWidget {
  const DetailsPage({super.key});

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
      body: Column(
        children: [
          Row(
            children: [
              Image.network(
                context.products[index].image,
                loadingBuilder: (_,child,___)=>
                    SizedBox(
                      height: 48,
                      width: 48,
                      child: child,
                    )
              ),
            ]
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(products.title),
              Text(products.price)
            ],
          ),
          Row(
            children: [
              Text(products.description)
            ],
          ),
          spacer(),
          Row(
            children: [
              Button
            ],
          )
        ],
      )
    );
  }
}
