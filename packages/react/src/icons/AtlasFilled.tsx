// This icon file is generated automatically.
import * as React from 'react';
import AtlasFilledSvg from '@sensoro-design/icons-svg/es/asn/AtlasFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AtlasFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AtlasFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AtlasFilled);

RefIcon.displayName = 'AtlasFilled';

export default RefIcon;
