import 'package:bloc_counter/bloc/counter_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class CounterView extends StatelessWidget {
  CounterView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text("Bloc Counter"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              "${context.watch<CounterCubit>().state}",
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: context.read<CounterCubit>().increment,
            tooltip: 'Increment',
            child: const Icon(Icons.add, semanticLabel: "Ajouter"),
          ),
          FloatingActionButton(
            onPressed: context.read<CounterCubit>().decrement,
            tooltip: 'Decrement',
            child: const Icon(Icons.remove, semanticLabel: "Remove"),
          ),
          FloatingActionButton(
            onPressed: context.read<CounterCubit>().reset,
            tooltip: 'Reset',
            child: const Icon(Icons.recycling, semanticLabel: "Reset",),
          ),
        ],
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
