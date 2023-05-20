"use client";

import * as RadixSlider from '@radix-ui/react-slider';

const Slider = () => {
  return ( 
    <RadixSlider.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
}
 
export default Slider;
