# Anode Calculator Plugin for WordPress

This plugin adds a simple anode calculator to your WordPress site. The calculator determines the required anode weight and recommended anode material based on the boat's dimensions and water type.

## Disclaimer

The formula used to calculate the required anode weight and material is based on the manufacturer's table and information provided on [The Fit Out Pontoon website](https://www.thefitoutpontoon.co.uk/electrics/anodes/). The table shows the weight of magnesium required to cover a certain surface area of steel:

- up to 28m² = 4.5kg-9kg
- 28.1m² to 42m² = 11kg-13kg
- 42.1m² to 56m² = 14kg-20kg
- 56.1m² to 70m² = 21kg-26kg

To calculate the required anode weight, the surface area of the underwater portion of both hull sides plus the area of the base plate in m² should be considered. Anodes are typically sold by weight in common sizes such as 1.5kg, 2.5kg, and 3.5kg ingots. Smaller sizes are also available.

Please note that the figures provided are for a 2-year scheme, but most boat owners may follow a 3-year plan of inspection and replacement.





## Features

- Calculates the recommended anode weight based on the boat's underwater surface area
- Suggests the recommended anode material depending on the water type (freshwater, saltwater, or brackish)
- Supports both metric and imperial units
- Provides a shortcode to easily embed the calculator in any page or post

## Installation

1. Download the zip https://github.com/smithyrr/anode-calculator.
2. Log in to your WordPress dashboard and navigate to "Plugins" > "Add New" > "Upload Plugin".
3. Click on "Choose File" and select the `anode-calculator.zip` file, then click "Install Now".
4. After the plugin is installed, click "Activate Plugin" to enable it on your WordPress site.

## Usage

1. Edit the page or post where you want to display the Anode Calculator.
2. Add the `[anode_calculator]` shortcode in the desired location.
3. Save the page or post and preview it to see the Anode Calculator in action.

## Support

For support, questions, or feature requests, please visit the [Anode Calculator Plugin page](https://www.example.com/anode-calculator).

## License

This plugin is released under the [GNU General Public License v2](https://www.gnu.org/licenses/gpl-2.0.html).
