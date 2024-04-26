// This icon file is generated automatically.
import * as React from 'react';
import InfoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/InfoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InfoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InfoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InfoOutlined);

RefIcon.displayName = 'InfoOutlined';

export default RefIcon;
