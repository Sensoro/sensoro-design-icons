// This icon file is generated automatically.
import * as React from 'react';
import WordOrderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WordOrderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WordOrderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WordOrderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WordOrderOutlined);

RefIcon.displayName = 'WordOrderOutlined';

export default RefIcon;
