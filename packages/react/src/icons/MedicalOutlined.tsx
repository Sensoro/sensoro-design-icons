// This icon file is generated automatically.
import * as React from 'react';
import MedicalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MedicalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MedicalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MedicalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MedicalOutlined);

RefIcon.displayName = 'MedicalOutlined';

export default RefIcon;
