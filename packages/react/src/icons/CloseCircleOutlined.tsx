// This icon file is generated automatically.
import * as React from 'react';
import CloseCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CloseCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloseCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloseCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloseCircleOutlined);

RefIcon.displayName = 'CloseCircleOutlined';

export default RefIcon;
