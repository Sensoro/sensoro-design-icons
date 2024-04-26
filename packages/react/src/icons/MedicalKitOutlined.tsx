// This icon file is generated automatically.
import * as React from 'react';
import MedicalKitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MedicalKitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MedicalKitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MedicalKitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MedicalKitOutlined);

RefIcon.displayName = 'MedicalKitOutlined';

export default RefIcon;
