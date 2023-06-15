import React from "react";

import { TypographyH1, TypographyH3 } from "@/components/ui";
import { takeaways } from "@/data/about";
import Takeaway from "./Takeaway";

const About = () => (
  <div className='flex flex-col items-center justify-center py-10 md:p-10'>
    <TypographyH1>About</TypographyH1>

    <div className='my-6 rounded-md bg-blue-100 p-4 md:p-10'>
      <div className='flex space-x-2'>
        {" "}
        <TypographyH3>Key Takeaways</TypographyH3>
        <TypographyH3>♨️</TypographyH3>
      </div>

      {/* MAP THE DATA TO CLIENT COMPONENT */}
      <div className='mt-4 space-y-2'>
        {takeaways.map(({ emoji, label }, i) => (
          <Takeaway index={i} label={label} emoji={emoji} />
        ))}
      </div>
    </div>
  </div>
);

export default About;
