import 'dart:convert';
import 'dart:html' as html;
import 'package:custom_utils/custom_utils.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class ScreenHome extends StatefulWidget {
  const ScreenHome({Key? key}) : super(key: key);

  @override
  _ScreenHomeState createState() => _ScreenHomeState();
}

class _ScreenHomeState extends State<ScreenHome> {
  var vinController = TextEditingController();
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: [
            CustomInputField(
              label: "VIN Number",
              showBorder: true,
              margin: EdgeInsets.all(10),
              borderType: InputBorderType.outline,
              controller: vinController,
            ),
            CustomButton(
              text: "Check",
              loading: loading,
              onPressed: () async {
                String vin = vinController.text;
                String baseUrl = "http://api.carmd.com/v3.0/decode?vin=";

                setState(() {
                  loading = true;
                });

                var response = await http.get(Uri.parse(baseUrl+vin), headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'authorization': 'Basic MzBkOTJlM2ItMTcwYy00YzQ5LWI0ODEtNmM1NzdiNDEzNGVm',
                  'partner-token': '65e7b9b9bcbb45ee8529474993953193'
                });

                print(response.body);
                print(response.statusCode);

                var jsonResponse = jsonDecode(response.body) as Map<String, dynamic>;
                print(jsonResponse['message']['code']);

                if ((jsonResponse['message']['code'] as dynamic).toString() != "0"){
                  Get.snackbar("Error", jsonResponse['message']['message'], colorText: Colors.white, backgroundColor: Colors.black54);

                  setState(() {
                    loading = false;
                  });
                  return;
                } else {

                  var data = (jsonResponse['data'] ?? {}) as Map<String, dynamic>;

                  String year = data['year'].toString();
                  String make = data['make'].toString();
                  String model = data['model'].toString();
                  String manufacture = data['manufacturer'].toString();

                  String url = "https://viewspakistan.com/api/?make=$make&input=$manufacture&year=$year&style=$model";



                  htmlOpenLink(url);
                  launchUrl(url);
                }

                setState(() {
                  loading = false;
                });
              },
              padding: EdgeInsets.all(15),
            )
          ],
        ),
      ),
    );
  }

  void htmlOpenLink(String url) {
    print(url);
    html.window.open(url, '_blank');
  }
}
