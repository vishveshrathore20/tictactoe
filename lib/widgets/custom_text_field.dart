import 'package:flutter/material.dart';
import 'package:tic_tac_toe/utils/colors.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController Controller;
  final String hintText;
  const CustomTextField(
      {super.key, required this.Controller, required this.hintText});

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: const BoxDecoration(boxShadow: [
          BoxShadow(color: Colors.blue, blurRadius: 5, spreadRadius: 2)
        ]),
        child: TextField(
          controller: Controller,
          decoration: InputDecoration(
            fillColor: bgcolor,
            filled: true,
            hintText: hintText,
          ),
        ));
  }
}
