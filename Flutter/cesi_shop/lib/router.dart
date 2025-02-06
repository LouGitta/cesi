import 'package:cesi_shop/model/product.dart';
import 'package:cesi_shop/page/cart_page.dart';
import 'package:cesi_shop/page/details_page.dart';
import 'package:cesi_shop/page/list_products_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

final router = GoRouter(
    routes: [
      GoRoute(
        path: '/',
        builder: (_, __) => ListProductsPage(),
        routes: [
          GoRoute(path: "detail", builder: (_,state)=>DetailsPage(product: state.extra as Product)),
          GoRoute(path: "cart", builder: (_,__)=>CartPage()),
        ]
      )
    ]
);