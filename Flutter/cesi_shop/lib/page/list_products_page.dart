import 'dart:convert';

import 'package:cesi_shop/model/cart.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:http/http.dart';
import 'package:provider/provider.dart';

import '../model/product.dart';


class ListProductsPage extends StatelessWidget {
  const ListProductsPage({super.key});


  Future<List<Product>> fetchListProducts() async{
    //DL request api fakestoreapi
    final response = await get(Uri.parse('https://fakestoreapi.com/products'));
    //convertir string du body en List<Map<String, dynamic>>
    List<dynamic> productsMap = jsonDecode(response.body);
    //convertir List<Map<String, dynamic>> en List<Product>
    return productsMap.map((e) => Product.fromMap(e)).toList();

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(onPressed: (){
            context.go("/cart");
          }, icon: Badge(
              label: Text(context.watch<Cart>().qty.toString()),
              child: Icon(Icons.shopping_cart))
          )
        ],
        backgroundColor: Theme.of(context).colorScheme.inversePrimary ,
        title: Text('Saisie Shop'),

      ),
      body: FutureBuilder<List<Product>>(
        future: fetchListProducts(),
        builder: (context, snapshot) {
          if(snapshot.hasData && snapshot.data != null)
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context,index){
              return InkWell(
                onTap: () {
                  context.go("/detail", extra: snapshot.data![index]);
                },
                child: ListTile(
                  leading: Image.network(
                      snapshot.data![index].image,
                    loadingBuilder: (_,child,___)=>
                        SizedBox(
                          height: 48,
                          width: 48,
                          child: child,
                        )
                  ),
                  title: Text(snapshot.data![index].title),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                          style: Theme.of(context).textTheme.titleMedium,
                          snapshot.data![index].priceEuro()
                      ),
                    ],
                  ),
                  trailing: TextButton(
                      onPressed: () {
                        context.read<Cart>().add(snapshot.data![index]);
                      },
                      child: Text("Ajouter")
                  ),
                ),
              );
            },
          );
          return CircularProgressIndicator();
        }
      ),
    );
  }
}
