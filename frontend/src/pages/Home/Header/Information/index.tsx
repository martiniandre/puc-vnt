import { Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

export const Information = () => {
  const { t } = useTranslation();

  return ( 
    <>
      <Typography variant="h3">
           {t('HeaderText')}
      </Typography>
      <Typography variant="subtitle1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic magni unde dolores, laudantium culpa fuga laboriosam eaque sequi, ipsam ratione quia saepe enim facilis accusamus, repellat perferendis praesentium exercitationem corporis.
      </Typography>
      <Typography variant="body2">
        {t('CTA')}
      </Typography>
    </>
  )
}