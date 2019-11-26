import AtomSpinner from "./components/lib/AtomSpinner";
import BreedingRhombuseSpinner from "./components/lib/BreedingRhombuseSpinner";
import CirclesToRhombusesSpinner from "./components/lib/CirclesToRhombusesSpinner";
import FingerprintSpinner from "./components/lib/FingerprintSpinner";
import FlowerSpinner from "./components/lib/FlowerSpinner";
import FulfillingBouncingCircleSpinner from "./components/lib/FulfillingBouncingCircleSpinner";
import FulfillingSquareSpinner from "./components/lib/FulfillingSquareSpinner";
import HalfCircleSpinner from "./components/lib/HalfCircleSpinner";
import HollowDotsSpinner from "./components/lib/HollowDotsSpinner.vue";
import IntersectingCirclesSpinner from "./components/lib/IntersectingCirclesSpinner";
import LoopingRhombusesSpinner from "./components/lib/LoopingRhombusesSpinner";
import OrbitSpinner from "./components/lib/OrbitSpinner";
import PixelSpinner from "./components/lib/PixelSpinner";
import ScalingSquaresSpinner from "./components/lib/ScalingSquaresSpinner";
import SelfBuildingSquareSpinner from "./components/lib/SelfBuildingSquareSpinner";
import SemipolarSpinner from "./components/lib/SemipolarSpinner";
import SpringSpinner from "./components/lib/SpringSpinner";
import SwappingSquaresSpinner from "./components/lib/SwappingSquaresSpinner";
import TrinityRingsSpinner from "./components/lib/TrinityRingsSpinner";

let xTreasureHouse = {};

xTreasureHouse.install = function(Vue) {
  Vue.component(AtomSpinner.name, AtomSpinner);
  Vue.component(BreedingRhombuseSpinner.name, BreedingRhombuseSpinner);
  Vue.component(CirclesToRhombusesSpinner.name, CirclesToRhombusesSpinner);
  Vue.component(FingerprintSpinner.name, FingerprintSpinner);
  Vue.component(FlowerSpinner.name, FlowerSpinner);
  Vue.component(
    FulfillingBouncingCircleSpinner.name,
    FulfillingBouncingCircleSpinner
  );
  Vue.component(FulfillingSquareSpinner.name, FulfillingSquareSpinner);
  Vue.component(HalfCircleSpinner.name, HalfCircleSpinner);
  Vue.component(HollowDotsSpinner.name, HollowDotsSpinner);
  Vue.component(IntersectingCirclesSpinner.name, IntersectingCirclesSpinner);
  Vue.component(LoopingRhombusesSpinner.name, LoopingRhombusesSpinner);
  Vue.component(OrbitSpinner.name, OrbitSpinner);
  Vue.component(PixelSpinner.name, PixelSpinner);
  Vue.component(ScalingSquaresSpinner.name, ScalingSquaresSpinner);
  Vue.component(SelfBuildingSquareSpinner.name, SelfBuildingSquareSpinner);
  Vue.component(SemipolarSpinner.name, SemipolarSpinner);
  Vue.component(SpringSpinner.name, SpringSpinner);
  Vue.component(SwappingSquaresSpinner.name, SwappingSquaresSpinner);
  Vue.component(TrinityRingsSpinner.name, TrinityRingsSpinner);
};
export default xTreasureHouse;
