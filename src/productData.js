import sortStandard from "./assets/sortStandard.png";
import sortFrench from "./assets/sortFrench.png";
import sortPivot from "./assets/sortPivot.png";
import sortSliding from "./assets/sortSliding.png";
import sortFold from "./assets/sortFold.png";
import sortWindow from "./assets/sortWindow.png";

function SortIMG(img, id, alt, url) {
    this.img = img;
    this.id = id;
    this.alt = alt;
    this.url = url;
}

const products = [
    new SortIMG(sortStandard, 1, "Standard Doors", "https://shop.heavendoorsandwindows.com/standard"),
    new SortIMG(sortFrench, 2, "French Doors", "https://shop.heavendoorsandwindows.com/french"),
    new SortIMG(sortPivot, 3, "Pivot Doors", "https://shop.heavendoorsandwindows.com/pivot"),
    new SortIMG(sortSliding, 4, "Sliding Doors", "https://shop.heavendoorsandwindows.com/sliding"),
    new SortIMG(sortFold, 5, "Folding Doors", "https://shop.heavendoorsandwindows.com/bifold"),
    new SortIMG(sortWindow, 6, "Windows", "https://shop.heavendoorsandwindows.com/windows"),
];

export default products;
