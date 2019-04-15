#### Release Notes
```javascript
   'Algorithm and webpack learning configuration'
   'Author': #magicZ[1531857676@qq.com]
   '0.0.1': #Merge algorithm
```

### 1, source code

Check out the source code from the project hosting platform github:


### 2, Installation

 After checking out the project, you need to first [install node.js]
 
 Then proceed with the installation of the steps to complete the installation of the build environment:
 
 Installation project dependency
 ```sh
    Npm install
 ```
 
 Running the project development environment
 ```sh
    Npm run dev
 ```
 
 Package production
 ```sh
    Npm run build
 ```
 
 
 ### 3, Resource organization structure
 
 ```sh
- algorithm/ # application directory
    
    - build / #project packaging folder
- build.js #package file entry
- check-versions.js #Version check
- utils.js #packaged generic tool files
- webpack.base.conf.js #webpack package basic file configuration
- webpack.dev.conf.js #webpack package development environment configuration
- webpack.prod.conf.js #webpack package production environment configuration
    + config #parameter configuration file
- src / # development source directory
        - assets
            - sass/ # css resource directory (css resources will be replaced by sass files)
                + common/ # basic public sass directory
                - module/ #page business sass directory
                    - index.scss/ # index page-level style files
                    - _index.scss/ # index module style file
            + fonts/ # font resource directory
            + images/ # image resource directory
+static #Package files that need to be copied directly
```