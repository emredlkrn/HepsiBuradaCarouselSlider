

//variable that I've used in indexing the images and the other variables such as circles in the navbar
let num = 1;

function right() //function that enables us to move towards right
{
    if (num !=6) //if the index is not 6, it triggers call-back func. 'swap' 
    {
        num +=1; //index variale incremented one (the logic is numerical axis)
        swap(num, -1); //due to inner property of the function 'swap', there should be an additional number to balance the img that needs to be displayed
        //because the real index has been incremented by one 

    }
    else
    {
        num = 1;
        swap(num, +5);
    }
}

function left() //the same logic works in here as well as the function 'right'
{
    if(num != 1)
    {
        num -=1;
        swap(num, +1);
    }
    else
    {
        num = 6;
        swap(num,-5);

    }
}

function swap(value,cnt) //swap function's logic :  it displays the correct image while making others transparent (it works for circles too)
{
    document.getElementById(`img${value + cnt}`).style.opacity = '0';
    document.getElementById(`img${value}`).style.opacity = '1';
    document.getElementById(`circle${value+ cnt}`).style.background = 'transparent';
    document.getElementById(`circle${value}`).style.background = 'white';
}