// This icon file is generated automatically.
import * as React from 'react';
import PartlyCloudyFilledSvg from '@sensoro-design/icons-svg/es/asn/PartlyCloudyFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PartlyCloudyFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PartlyCloudyFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PartlyCloudyFilled);

RefIcon.displayName = 'PartlyCloudyFilled';

export default RefIcon;
