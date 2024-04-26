// This icon file is generated automatically.
import * as React from 'react';
import PolymerizationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PolymerizationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PolymerizationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PolymerizationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PolymerizationOutlined);

RefIcon.displayName = 'PolymerizationOutlined';

export default RefIcon;
