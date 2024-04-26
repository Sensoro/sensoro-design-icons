// This icon file is generated automatically.
import * as React from 'react';
import CloudFilledSvg from '@sensoro-design/icons-svg/es/asn/CloudFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloudFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloudFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloudFilled);

RefIcon.displayName = 'CloudFilled';

export default RefIcon;
