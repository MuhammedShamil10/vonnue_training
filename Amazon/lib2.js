// import first from './lib.js';
 
// sample comments
// sample comments two

// let max = first([22,31,12,2]);
// console.log(max)+-



// // import {named export} from '/path'
// export {
    //     name as newName
    // }
    
    // export default isGreen;
    
    // import myPrint, {
        //     named1,
        //     named2
        // }from '/path'
        
        // import * as libObj from '/path.js'
        // import { changeBg } from './feature2.js';
        
import {createButton} from './lib.js';
        
        createButton('Feature1',() => {
           alert("feature-1");
        });
 
        createButton('Feature2',() => {
           
            import('./feature2.js') //dynamicImport
            .then((obj) => {
                // console.log(obj);
                createButton('start lighting',obj.changeBg) ;
                createButton('end lighting',obj.endLight);
            });
       
        }); 
