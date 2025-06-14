import React, { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import { ContainerAnimation } from "./Animation.style";
import { primaryColor } from "@/utils/constants.style";

interface Props {
  isActive: boolean;
}

const Animation = ({ isActive }: Props) => {
  const [LottieShow, setLottieShow] = useState(false);

  useEffect(() => {
    setLottieShow(isActive);
  }, [isActive]);


  return (
    <>
      {LottieShow && (
        <ContainerAnimation data-testid="animation_test">
          <CircularProgress sx={{ color: primaryColor }} />
        </ContainerAnimation>
      )}
    </>
  );
};

export default Animation;
