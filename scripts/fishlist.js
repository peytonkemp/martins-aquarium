/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"
export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")
    const fishes = useFish()
    console.log("FishList: fishes", fishes)
    
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       fishHTMLRepresentations += Fish(fish)
       console.log(fishHTMLRepresentations)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
        ${fishHTMLRepresentations}
        </article>
    `
} 
