// This icon file is generated automatically.
import * as React from 'react';
import CateringFilledSvg from '@sensoro-design/icons-svg/es/asn/CateringFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CateringFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CateringFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CateringFilled);

RefIcon.displayName = 'CateringFilled';

export default RefIcon;
