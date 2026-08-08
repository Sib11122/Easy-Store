// Maps backend imageUrl paths (e.g. "/stickers/developer.png")
// to the locally bundled sticker assets so that photos from the
// backend are visible in the frontend.
import AestheticSummerCat from "../assets/stickers/AestheticSummerCat.png";
import BeWild from "../assets/stickers/BeWild.png";
import BMW from "../assets/stickers/BMW.png";
import Boo from "../assets/stickers/Boo.png";
import breakImage from "../assets/stickers/break.png";
import BreakingCode from "../assets/stickers/BreakingCode.png";
import Butterfly from "../assets/stickers/Butterfly.png";
import Chai from "../assets/stickers/Chai.png";
import CoolAstraunaut from "../assets/stickers/CoolAstraunaut.png";
import developer from "../assets/stickers/developer.png";
import EatSleepCode from "../assets/stickers/EatSleepCode.png";
import emptycart from "../assets/stickers/emptycart.png";
import EvilEye from "../assets/stickers/EvilEye.png";
import EwFeelings from "../assets/stickers/EwFeelings.png";
import F1Car from "../assets/stickers/F1Car.png";
import GameOfthoresSymbol from "../assets/stickers/GameOfthoresSymbol.png";
import GameOver from "../assets/stickers/GameOver.png";
import Gohan from "../assets/stickers/Gohan.png";
import Goku from "../assets/stickers/Goku.png";
import HappySoul from "../assets/stickers/HappySoul.png";
import HouseOfTheDragonSymbol from "../assets/stickers/HouseOfTheDragonSymbol.png";
import IamOkay from "../assets/stickers/IamOkay.png";
import itsnotabug from "../assets/stickers/itsnotabug.png";
import IWon_tHesitateSticker from "../assets/stickers/IWon_tHesitateSticker.png";
import KnightKing from "../assets/stickers/KnightKing.png";
import LazyCat from "../assets/stickers/LazyCat.png";
import Mbappe from "../assets/stickers/Mbappe.png";
import Messi from "../assets/stickers/Messi.png";
import MyDrivingScaresMeToo from "../assets/stickers/MyDrivingScaresMeToo.png";
import Naruto from "../assets/stickers/Naruto.png";
import OverThinker from "../assets/stickers/OverThinker.png";
import REBike from "../assets/stickers/REBike.png";
import RideOrDie from "../assets/stickers/RideOrDie.png";
import ronaldo from "../assets/stickers/ronaldo.png";
import Shinchan from "../assets/stickers/Shinchan.png";
import SneakyCat from "../assets/stickers/SneakyCat.png";
import SociallyAwkward from "../assets/stickers/SociallyAwkward.png";
import SpaceWalk from "../assets/stickers/SpaceWalk.png";
import SquidGame from "../assets/stickers/SquidGame.png";
import Virat from "../assets/stickers/Virat.png";
import YestoAdventures from "../assets/stickers/YestoAdventures.png";
import youaremycss from "../assets/stickers/youaremycss.png";
import YourOpinonMeansNothing from "../assets/stickers/YourOpinonMeansNothing.png";

// Map of backend image filename -> local bundled asset.
const stickerAssets = {
    "AestheticSummerCat.png": AestheticSummerCat,
    "BeWild.png": BeWild,
    "BMW.png": BMW,
    "Boo.png": Boo,
    "break.png": breakImage,
    "BreakingCode.png": BreakingCode,
    "Butterfly.png": Butterfly,
    "Chai.png": Chai,
    "CoolAstraunaut.png": CoolAstraunaut,
    "developer.png": developer,
    "EatSleepCode.png": EatSleepCode,
    "emptycart.png": emptycart,
    "EvilEye.png": EvilEye,
    "EwFeelings.png": EwFeelings,
    "F1Car.png": F1Car,
    "GameOfthoresSymbol.png": GameOfthoresSymbol,
    "GameOver.png": GameOver,
    "Gohan.png": Gohan,
    "Goku.png": Goku,
    "HappySoul.png": HappySoul,
    "HouseOfTheDragonSymbol.png": HouseOfTheDragonSymbol,
    "IamOkay.png": IamOkay,
    "itsnotabug.png": itsnotabug,
    "IWon_tHesitateSticker.png": IWon_tHesitateSticker,
    "KnightKing.png": KnightKing,
    "LazyCat.png": LazyCat,
    "Mbappe.png": Mbappe,
    "Messi.png": Messi,
    "MyDrivingScaresMeToo.png": MyDrivingScaresMeToo,
    "Naruto.png": Naruto,
    "OverThinker.png": OverThinker,
    "REBike.png": REBike,
    "RideOrDie.png": RideOrDie,
    "ronaldo.png": ronaldo,
    "Shinchan.png": Shinchan,
    "SneakyCat.png": SneakyCat,
    "SociallyAwkward.png": SociallyAwkward,
    "SpaceWalk.png": SpaceWalk,
    "SquidGame.png": SquidGame,
    "Virat.png": Virat,
    "YestoAdventures.png": YestoAdventures,
    "youaremycss.png": youaremycss,
    "YourOpinonMeansNothing.png": YourOpinonMeansNothing,
};

/**
 * Resolves a backend imageUrl (e.g. "/stickers/developer.png")
 * to the corresponding local bundled asset. If no local match is
 * found, returns the original URL so external images still work.
 */
export function resolveImageUrl(imageUrl) {
    if (!imageUrl) return imageUrl;

    // Extract the filename, e.g. "/stickers/developer.png" -> "developer.png"
    const filename = imageUrl.split("/").pop();

    if (filename && stickerAssets[filename]) {
        return stickerAssets[filename];
    }

    return imageUrl;
}

export default resolveImageUrl;
