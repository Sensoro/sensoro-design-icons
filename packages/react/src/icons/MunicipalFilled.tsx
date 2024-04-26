// This icon file is generated automatically.
import * as React from 'react';
import MunicipalFilledSvg from '@sensoro-design/icons-svg/es/asn/MunicipalFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MunicipalFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MunicipalFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MunicipalFilled);

RefIcon.displayName = 'MunicipalFilled';

export default RefIcon;
