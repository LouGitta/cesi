import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'package:bloc_counter/bloc/counter_bloc.dart';
import 'counter_view.dart';

class CounterPage extends StatelessWidget {
  CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
        create: (context) => CounterCubit(),
        child: CounterView(),
    );
  }
}