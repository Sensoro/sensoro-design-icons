// This icon file is generated automatically.
import * as React from 'react';
import MultiplePicturesFilledSvg from '@sensoro-design/icons-svg/es/asn/MultiplePicturesFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MultiplePicturesFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MultiplePicturesFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MultiplePicturesFilled);

RefIcon.displayName = 'MultiplePicturesFilled';

export default RefIcon;
