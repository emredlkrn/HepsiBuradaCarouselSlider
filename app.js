
let index = 1;
disp(index);

// Next/previous controls

/*logic:
in HTML codes, next button defines the variable 'n' as '1' and it adds 1 to index,
in same manner, prev button defines n as '-1' and it diminishes the variable 'n' as 1

the function 'move' adds the n to index to be able to move towards desired way
*/
function move(n) 
{
  disp(index += n);
}

// small image controls
function currentSlide(n) 
{
  disp(index = n);
}


function disp(n) 
{
    let i;
    let slides = document.getElementsByClassName("slides"); //images (not the small ones)
    let dots = document.getElementsByClassName("demo"); //small images on the navbar
    
    console.log(dots.length)

    
    if (n > slides.length) //if the index that will be displayed exceeds the number 6 (because there are 6 pictures), it turns back
    {
        index = 1
    }
    if (n < 1) //if it fells below the starting index, it goes to the end. This mechanism creates a loop
    {
        index = slides.length
    }



    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none"; //hiding the other elements that are not displaying
    }



    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace("active",""); //making brighter the current slide's small image on the navbar
    }



    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
    



}

