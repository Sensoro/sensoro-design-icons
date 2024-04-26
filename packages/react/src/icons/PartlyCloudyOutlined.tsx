// This icon file is generated automatically.
import * as React from 'react';
import PartlyCloudyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PartlyCloudyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PartlyCloudyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PartlyCloudyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PartlyCloudyOutlined);

RefIcon.displayName = 'PartlyCloudyOutlined';

export default RefIcon;
