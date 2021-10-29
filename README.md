### App that uses Google Maps API and display location markers

Install Parcel Bundler globally

Add index.html and add reference `<script src="./src/index.ts"></script>`

TS file will be compiled in to JS and included in the HTML `<script>`

Run `parcel index.html ` from terminal

install faker package to generate random data (Such as names, addresses etc)
Example: `faker.address.latitude()`

Typescripts checks for types. When we reference java script files , we need to include a Type Definitoin file. Type Def file is an adapter between JS and TS files.

To get Type Def file we use @types/faker . (Look for DefintelyTyped)
Type definition files are named \*.d.ts

Inlucde googlemaps api url in the script tag
and install `npm install @types/google.maps`

Go to `console.developers.google.com` enable google maps support , generate api key
add script tag

CustomMap class hides complexities of google api and exposes only addMarker(). This is achieved by making the googleMap object private

Seggregated the properites / methods required by the map in to an interface.
