import React from 'react';
import ReactDOM from 'react-dom/client';

const root  = ReactDOM.createRoot(document.getElementById("root"));

/* 
REact Course

In this course, we will learn 
 * Call bBen
 * Go to Walmart
 * 
 * Happy Coding


*/

function MainHeader()
{
    return(
        <h1>REACT COURSE</h1>
    )
}

function SubHeader()
{
    return(
        <p>This will be an exciting course</p>
    )
}

function Header()
{
    return(
        <div>
            <MainHeader></MainHeader>
            <SubHeader></SubHeader>
        </div>
    )
}
function MainBody()
{
    return (
        <div> 
        <p>Hello World from Reacr</p>
        <ul>
            <li>CAll Ben </li>
            <li> Go to Walmart</li>
        </ul>
     </div>
    )
}

function Footer()
{
    return (
        <h1>Happy Coding</h1>
    )
}
root.render(
<div>
    <Header/><b/>
    <MainBody/>
    <Footer/>
</div>
);