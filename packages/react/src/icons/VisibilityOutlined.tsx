// This icon file is generated automatically.
import * as React from 'react';
import VisibilityOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VisibilityOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VisibilityOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VisibilityOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VisibilityOutlined);

RefIcon.displayName = 'VisibilityOutlined';

export default RefIcon;
