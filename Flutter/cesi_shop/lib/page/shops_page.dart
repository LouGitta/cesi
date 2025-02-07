import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:geolocator/geolocator.dart';
import 'package:latlong2/latlong.dart';

class ShopsPage extends StatelessWidget {
  ShopsPage({super.key});

  final List<LatLng> shops = [
    // Paris
    LatLng(48.8566, 2.3522), // Galeries Lafayette
    LatLng(48.8606, 2.3376), // Printemps Haussmann
    LatLng(48.8539, 2.3425), // Le Bon Marché

    // Lyon
    LatLng(45.7579, 4.8320), // Part-Dieu Shopping Center
    LatLng(45.7633, 4.8367), // Printemps Lyon

    // Marseille
    LatLng(43.2965, 5.3698), // Les Terrasses du Port
    LatLng(43.2951, 5.3847), // Centre Bourse

    // Lille
    LatLng(50.6367, 3.0759), // Euralille
    LatLng(50.6329, 3.0571), // Printemps Lille

    // Bordeaux
    LatLng(44.8378, -0.5792), // Promenade Sainte-Catherine
    LatLng(44.8411, -0.5735), // Galeries Lafayette Bordeaux

    // Toulouse
    LatLng(43.6047, 1.4442), // Galeries Lafayette Toulouse
    LatLng(43.6112, 1.4531), // Centre Commercial Saint Georges

    // Nice
    LatLng(43.7032, 7.2661), // Nice Étoile
    LatLng(43.7101, 7.2619), // Galeries Lafayette Nice

    // Strasbourg
    LatLng(48.5839, 7.7455), // Place des Halles
    LatLng(48.5734, 7.7521), // Printemps Strasbourg

    // Nantes
    LatLng(47.2184, -1.5536), // Passage Pommeraye
    LatLng(47.2141, -1.5620), // Galeries Lafayette Nantes

    // Rennes
    LatLng(48.1147, -1.6794), // Centre Colombia
    LatLng(48.1172, -1.6777), // Galeries Lafayette Rennes
  ];
  final mapController = MapController();

  @override
  Widget build(BuildContext context) {
    Geolocator.requestPermission();
    Geolocator.getCurrentPosition().then((position){
      if (position != null)
        mapController.move(LatLng(position.latitude, position.longitude), 13);
    });

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text('Shops'),

      ),
      body: FlutterMap(
        mapController: mapController,
        options: MapOptions(
          initialCenter: LatLng(0, -50.5655),
          initialZoom: 13.0,
        ),
        children: [
          TileLayer(
            urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            userAgentPackageName: 'com.example.app',
          ),
          MarkerLayer(
            markers: [
              ...shops.map(
                (s) => Marker(point: s, child: Icon(Icons.pin_drop))
              )
            ]
          )
        ],
      ),
    );
  }
}
