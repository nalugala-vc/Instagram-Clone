import 'package:flutter/material.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Center(
            child: Image.asset('assets/instalogo.png'),
          ),
          Column(
            children: [
              Text(
                'from',
                style: TextStyle(color: Colors.grey),
              ),
              Image.asset('assets/meta.png'),
            ],
          ),
        ],
      ),
    );
  }
}
