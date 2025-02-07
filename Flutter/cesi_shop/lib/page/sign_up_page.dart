import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:http/http.dart';

class SignUpPage extends StatefulWidget {
  SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  final formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  var isCguChecked = ValueNotifier(false);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text('Form'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: formKey,
          child: Column(
            spacing: 8,
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: "Email"),
                autofillHints: [AutofillHints.email],
                controller: emailController,
                keyboardType: TextInputType.emailAddress,
                validator: (text){
                  if(text?.isNotEmpty == true && text?.contains("@") == true){
                    return null;
                  } else {
                    return "Email invalide";
                  }
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: "Mot de passe"),
                obscureText: true,
                controller: passwordController,
                autofillHints: [AutofillHints.password],
                validator: (text) {
                  if (text?.isNotEmpty == true) {
                    return null;
                  } else {
                    return "Mot de passe invalide";
                  }
                },
              ),
              SizedBox(
                width: MediaQuery.of(context).size.width,
                child: FilledButton(
                  onPressed: () {
                    if(formKey.currentState?.validate() == true && isCguChecked.value == true){
                      post(Uri.parse("https://post.com"), body:{
                        "email": emailController.text,
                        "password": passwordController.text
                      }).then((value){
                        if(value.statusCode == 200){
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Inscription réussie")));
                          context.go("/");
                        } else {
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Inscription échouée")));
                        };
                      });
                    }
                  }, child: Text("S'inscrire")
                ),
              ),
              Row(
                children: [
                  Checkbox(
                    value: isCguChecked.value,
                    onChanged: (val) {
                      setState(() {
                        isCguChecked.value = val == true;
                      });
                    }
                  ),
                  Text("J'accepte les CGUs")
                ],
              ),
            ],
          )
        ),
      )
    );
  }
}
